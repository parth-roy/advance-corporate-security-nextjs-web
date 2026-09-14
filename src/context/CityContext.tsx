"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import { ACS_CITIES, type ACSCity } from "@/lib/cities";

export interface CityContextValue {
  currentCity: ACSCity;
  isDetecting: boolean;
  hasDetected: boolean;
  setCity: (cityInput: string | ACSCity, isManual?: boolean) => void;
  detectLocation: (forceFresh?: boolean) => Promise<ACSCity>;
  isCityModalOpen: boolean;
  setIsCityModalOpen: (open: boolean) => void;
}

const CityContext = createContext<CityContextValue | null>(null);

export const DEFAULT_CITY: ACSCity = {
  name: "Kolkata",
  slug: "kolkata",
  state: "West Bengal",
  stateSlug: "west-bengal",
  tier: 1,
};

const SESSION_CITY_KEY = "acs_session_city";
const STORAGE_CITY_KEY = "acs_user_city";

// O(1) map for instantaneous lookup across all 828+ cities
const CITY_SLUG_MAP = new Map<string, ACSCity>(
  ACS_CITIES.map((c) => [c.slug.toLowerCase(), c])
);

// Common Indian city / town name aliases & historical spellings
const CITY_ALIASES: Record<string, string> = {
  bangalore: "bengaluru",
  calcutta: "kolkata",
  bombay: "mumbai",
  madras: "chennai",
  barakpur: "barrackpore",
  "barrackpur ii": "barrackpore",
  "barrackpur-ii": "barrackpore",
  "barackpur-ii": "barrackpore",
  "north 24 parganas": "barrackpore",
  poona: "pune",
  cochin: "kochi",
  trivandrum: "thiruvananthapuram",
  baroda: "vadodara",
  vizag: "visakhapatnam",
  waltair: "visakhapatnam",
  belgaum: "belagavi",
  mysore: "mysuru",
  pondicherry: "puducherry",
  banaras: "varanasi",
  benares: "varanasi",
  allahabad: "prayagraj",
  orissa: "odisha",
  gauhati: "guwahati",
  simla: "shimla",
};

/**
 * Extract active city from current URL pathname
 * e.g. /services/security-guard/mumbai -> mumbai
 * e.g. /location/delhi -> delhi
 */
export function extractCityFromUrl(pathname: string | null): ACSCity | null {
  if (!pathname || typeof pathname !== "string") return null;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  // Pattern: /services/[slug]/[city]
  if (segments[0] === "services" && segments.length >= 3 && segments[2]) {
    const candidate = segments[2].toLowerCase();
    if (CITY_SLUG_MAP.has(candidate)) {
      return CITY_SLUG_MAP.get(candidate)!;
    }
  }

  // Pattern: /location/[city]
  if (segments[0] === "location" && segments[1] && segments[1] !== "state") {
    const candidate = segments[1].toLowerCase();
    if (CITY_SLUG_MAP.has(candidate)) {
      return CITY_SLUG_MAP.get(candidate)!;
    }
  }

  return null;
}

/**
 * Match a raw city name or state against our 828+ ACS_CITIES registry with alias resolution
 */
export function resolveCityConfig(
  rawCityName?: string | null,
  rawStateName?: string | null
): ACSCity | null {
  if (!rawCityName) return null;
  let clean = rawCityName.trim().toLowerCase();
  if (CITY_ALIASES[clean]) {
    clean = CITY_ALIASES[clean];
  }

  // 1. Try exact slug or name match
  const matched = ACS_CITIES.find(
    (c) =>
      c.name.toLowerCase() === clean ||
      c.slug.toLowerCase() === clean ||
      c.name.toLowerCase().includes(clean) ||
      clean.includes(c.name.toLowerCase())
  );

  if (matched) return matched;

  // 2. If outside known list, construct a clean city object
  const formattedName =
    rawCityName.charAt(0).toUpperCase() + rawCityName.slice(1).trim();
  const slug = rawCityName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return {
    name: formattedName,
    slug: slug || "kolkata",
    state: rawStateName || "India",
    stateSlug: (rawStateName || "india").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    tier: 3,
  };
}

export function CityProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hydration-safe initial city (URL > Default) to guarantee 100% match between server SSR and client hydration
  const [currentCity, setCurrentCity] = useState<ACSCity>(() => {
    const urlCity = extractCityFromUrl(pathname);
    if (urlCity) return urlCity;
    return DEFAULT_CITY;
  });

  const [isDetecting, setIsDetecting] = useState(false);
  const [hasDetected, setHasDetected] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const currentCityRef = useRef<ACSCity>(currentCity);
  currentCityRef.current = currentCity;

  // Set city with session and local storage persistence
  const setCity = useCallback((cityInput: string | ACSCity, isManual = true) => {
    if (!cityInput) return;

    let cityObj: ACSCity;
    if (typeof cityInput === "string") {
      cityObj = resolveCityConfig(cityInput) || {
        name: cityInput,
        slug: cityInput.toLowerCase().replace(/\s+/g, "-"),
        state: "India",
        stateSlug: "india",
        tier: 3,
      };
    } else {
      cityObj = {
        name: cityInput.name || "Kolkata",
        slug: cityInput.slug || "kolkata",
        state: cityInput.state || "West Bengal",
        stateSlug: cityInput.stateSlug || "west-bengal",
        tier: cityInput.tier || 1,
      };
    }

    // Loop & redundant update guard
    if (
      currentCityRef.current &&
      currentCityRef.current.slug === cityObj.slug &&
      currentCityRef.current.name.toLowerCase() === cityObj.name.toLowerCase()
    ) {
      return;
    }

    currentCityRef.current = cityObj;
    setCurrentCity(cityObj);

    if (typeof window !== "undefined") {
      try {
        if (isManual) {
          sessionStorage.setItem(SESSION_CITY_KEY, JSON.stringify(cityObj));
          localStorage.setItem(STORAGE_CITY_KEY, JSON.stringify(cityObj));
        }
        window.dispatchEvent(
          new CustomEvent("acs:city_change", { detail: cityObj })
        );
      } catch {
        // Storage restricted
      }
    }
  }, []);

  // Reactively synchronize CityContext with URL location on route changes
  useEffect(() => {
    const urlCity = extractCityFromUrl(pathname);
    if (urlCity && urlCity.slug !== currentCityRef.current?.slug) {
      setCity(urlCity, false);
    }
  }, [pathname, setCity]);

  // Perform billing-safe, high-precision live auto-detection via internal /api/geocode (Google Maps + Free Fallbacks)
  const detectLocation = useCallback(
    async (forceFresh = false): Promise<ACSCity> => {
      if (typeof window === "undefined") return currentCityRef.current || DEFAULT_CITY;

      // GUARD: If URL already specifies a city and forceFresh is false, respect SEO route
      const activeUrlCity = extractCityFromUrl(window.location.pathname);
      if (activeUrlCity && !forceFresh) {
        setCity(activeUrlCity, false);
        setHasDetected(true);
        return activeUrlCity;
      }

      setIsDetecting(true);

      // Strategy 1: Prompt for browser location permission (HTML5 Geolocation)
      // Calls server-side /api/geocode with Google Maps Geocoding API
      const detectViaBrowserGeo = async (): Promise<ACSCity | null> => {
        if (!navigator.geolocation) return null;
        return new Promise((resolve) => {
          const timeout = setTimeout(() => resolve(null), 6000);
          navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
              clearTimeout(timeout);
              try {
                const res = await fetch(
                  `/api/geocode?lat=${coords.latitude}&lng=${coords.longitude}`
                );
                if (res.ok) {
                  const data = await res.json();
                  if (data?.success && data?.city) {
                    return resolve(data.city);
                  }
                }
              } catch (err) {
                console.warn("Browser GPS geocoding failed, falling back to server IP:", err);
              }
              resolve(null);
            },
            (err) => {
              clearTimeout(timeout);
              console.log("Browser geolocation not granted or unavailable:", err.message);
              resolve(null);
            },
            { timeout: 6000, maximumAge: 60000, enableHighAccuracy: true }
          );
        });
      };

      // Strategy 2: Server-side IP detection (Ad-blocker & CORS Proof)
      const detectViaServerIp = async (): Promise<ACSCity | null> => {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 4000);
          const res = await fetch("/api/geocode", { signal: controller.signal });
          clearTimeout(timer);
          if (res.ok) {
            const data = await res.json();
            if (data?.success && data?.city) {
              return data.city;
            }
          }
        } catch (err) {
          console.warn("Server IP detection error:", err);
        }
        return null;
      };

      try {
        // 1. Try browser GPS + Google Maps (resolves suburbs like Barrackpore, Howrah, Thane)
        const geoCity = await detectViaBrowserGeo();
        if (geoCity) {
          setCity(geoCity, forceFresh);
          return geoCity;
        }

        // 2. Fallback to Server IP detection
        const ipCity = await detectViaServerIp();
        if (ipCity) {
          setCity(ipCity, forceFresh);
          return ipCity;
        }
      } catch (err) {
        console.warn("Location auto-detection encountered an error:", err);
      } finally {
        setIsDetecting(false);
        setHasDetected(true);
      }

      return currentCityRef.current || DEFAULT_CITY;
    },
    [setCity]
  );

  // On first load, reload, or new session: automatically detect location and city precisely
  useEffect(() => {
    // 1. If URL has a city (e.g. /services/security-guard/mumbai), that specific city route takes precedence
    const urlCity = extractCityFromUrl(window.location.pathname);
    if (urlCity) {
      setCity(urlCity, false);
      setHasDetected(true);
      return;
    }

    // 2. Check if user already manually selected a city in this session
    try {
      const sessionRaw = sessionStorage.getItem(SESSION_CITY_KEY);
      if (sessionRaw) {
        const parsed = JSON.parse(sessionRaw);
        if (parsed?.name && parsed?.slug) {
          setCity(parsed, false);
          setHasDetected(true);
          return;
        }
      }
    } catch {}

    // 3. If no manual session lock, automatically detect live location and city precisely
    detectLocation(false);

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<ACSCity>;
      if (
        customEvent?.detail?.slug &&
        customEvent.detail.slug !== currentCityRef.current?.slug
      ) {
        setCity(customEvent.detail, false);
      }
    };

    window.addEventListener("acs:city_change", handleCustomChange);
    return () =>
      window.removeEventListener("acs:city_change", handleCustomChange);
  }, [detectLocation, setCity]);

  return (
    <CityContext.Provider
      value={{
        currentCity,
        isDetecting,
        hasDetected,
        setCity,
        detectLocation,
        isCityModalOpen,
        setIsCityModalOpen,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity(): CityContextValue {
  const context = useContext(CityContext);
  if (!context) {
    return {
      currentCity: DEFAULT_CITY,
      isDetecting: false,
      hasDetected: true,
      setCity: () => {},
      detectLocation: async () => DEFAULT_CITY,
      isCityModalOpen: false,
      setIsCityModalOpen: () => {},
    };
  }
  return context;
}
