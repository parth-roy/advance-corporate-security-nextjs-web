import { NextRequest, NextResponse } from "next/server";
import { ACS_CITIES, type ACSCity } from "@/lib/cities";

// In-memory cache for coordinates and IP lookups to prevent duplicate external API calls
// Coordinate cache key: rounded to 2 decimals (~1.1km grid)
interface CacheEntry {
  city: ACSCity;
  timestamp: number;
}
const GEO_CACHE = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_CACHE_ENTRIES = 1000;

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

function getCleanName(input: string): string {
  const clean = input.trim().toLowerCase();
  return CITY_ALIASES[clean] || clean;
}

export function matchAcsCity(
  candidates: (string | null | undefined)[],
  stateName?: string | null
): ACSCity | null {
  for (const raw of candidates) {
    if (!raw) continue;
    const clean = getCleanName(raw);

    // 1. Exact match on slug or name
    const directMatch = ACS_CITIES.find(
      (c) =>
        c.slug.toLowerCase() === clean ||
        c.name.toLowerCase() === clean
    );
    if (directMatch) return directMatch;

    // 2. Substring matching (e.g. "Barrackpore Municipality" -> "Barrackpore")
    const partialMatch = ACS_CITIES.find(
      (c) =>
        clean.includes(c.name.toLowerCase()) ||
        clean.includes(c.slug.toLowerCase()) ||
        c.name.toLowerCase().includes(clean)
    );
    if (partialMatch) return partialMatch;
  }

  // 3. If candidates not found, try to match by state
  if (stateName) {
    const cleanState = stateName.trim().toLowerCase();
    const stateHub = ACS_CITIES.find(
      (c) =>
        c.state.toLowerCase() === cleanState &&
        (c.tier === 1 || c.tier === 2)
    );
    if (stateHub) return stateHub;
  }

  return null;
}

function saveToCache(key: string, city: ACSCity) {
  if (GEO_CACHE.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = GEO_CACHE.keys().next().value;
    if (oldestKey) GEO_CACHE.delete(oldestKey);
  }
  GEO_CACHE.set(key, { city, timestamp: Date.now() });
}

function getFromCache(key: string): ACSCity | null {
  const entry = GEO_CACHE.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    GEO_CACHE.delete(key);
    return null;
  }
  return entry.city;
}

// ─────────────────────────────────────────────────────────────
// 1. Reverse Geocoding with Google Maps + OpenStreetMap Fallback
// ─────────────────────────────────────────────────────────────
async function reverseGeocodeCoords(
  lat: number,
  lng: number
): Promise<{ city: ACSCity; provider: string } | null> {
  const cacheKey = `${lat.toFixed(2)},${lng.toFixed(2)}`;
  const cached = getFromCache(cacheKey);
  if (cached) {
    return { city: cached, provider: "cache" };
  }

  const googleKey = process.env.GOOGLE_MAPS_API_KEY;

  // ── Strategy A: Google Maps Geocoding API (Hyper-accurate for Indian localities) ──
  if (googleKey) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 4500);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleKey}`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        if (data.status === "OK" && Array.isArray(data.results) && data.results.length > 0) {
          let locality: string | null = null;
          let sublocality: string | null = null;
          let admin3: string | null = null;
          let admin2: string | null = null;
          let admin1: string | null = null;

          for (const result of data.results) {
            for (const comp of result.address_components || []) {
              const types = comp.types || [];
              if (types.includes("locality") && !locality) locality = comp.long_name;
              if (types.includes("sublocality") && !sublocality) sublocality = comp.long_name;
              if (types.includes("administrative_area_level_3") && !admin3) admin3 = comp.long_name;
              if (types.includes("administrative_area_level_2") && !admin2) admin2 = comp.long_name;
              if (types.includes("administrative_area_level_1") && !admin1) admin1 = comp.long_name;
            }
          }

          // Prioritize exact locality/town (e.g. Barrackpore) over broad district/state
          const candidates = [locality, sublocality, admin3, admin2];
          const matched = matchAcsCity(candidates, admin1);

          if (matched) {
            saveToCache(cacheKey, matched);
            return { city: matched, provider: "google_maps" };
          }
        }
      }
    } catch (err) {
      console.warn("Google Maps reverse geocoding request failed:", err);
    }
  }

  // ── Strategy B: OpenStreetMap (Nominatim) Fallback (100% Free) ──
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    const res = await fetch(nominatimUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AdvanceCorporateSecurity-Web/1.0" },
    });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const candidates = [
        addr.city,
        addr.town,
        addr.suburb,
        addr.county,
        addr.state_district,
        addr.municipality,
      ];
      const matched = matchAcsCity(candidates, addr.state);
      if (matched) {
        saveToCache(cacheKey, matched);
        return { city: matched, provider: "nominatim" };
      }
    }
  } catch (err) {
    console.warn("Nominatim fallback failed:", err);
  }

  // ── Strategy C: BigDataCloud Reverse Geocode Fallback (Free) ──
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    const bdcUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
    const res = await fetch(bdcUrl, { signal: controller.signal });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      const candidates = [data.locality, data.city, data.principalSubdivision];
      const matched = matchAcsCity(candidates, data.principalSubdivision);
      if (matched) {
        saveToCache(cacheKey, matched);
        return { city: matched, provider: "bigdatacloud" };
      }
    }
  } catch {}

  return null;
}

// ─────────────────────────────────────────────────────────────
// 2. Server-side IP Detection (Ad-blocker & CORS Proof)
// ─────────────────────────────────────────────────────────────
async function detectCityFromIp(
  clientIp: string | null,
  cfCity?: string | null,
  cfRegion?: string | null
): Promise<{ city: ACSCity; provider: string } | null> {
  // Check Cloudflare headers first (0ms latency, zero API calls)
  if (cfCity) {
    const matched = matchAcsCity([cfCity], cfRegion);
    if (matched) return { city: matched, provider: "cloudflare_headers" };
  }

  const isLocalhost =
    !clientIp ||
    clientIp === "127.0.0.1" ||
    clientIp === "::1" ||
    clientIp.startsWith("192.168.") ||
    clientIp.startsWith("10.");

  const cacheKey = `ip_${isLocalhost ? "localhost" : clientIp}`;
  const cached = getFromCache(cacheKey);
  if (cached) return { city: cached, provider: "cache" };

  // Provider 1: freeipapi.com
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const url = isLocalhost
      ? "https://freeipapi.com/api/json"
      : `https://freeipapi.com/api/json/${clientIp}`;
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      if (data && data.cityName) {
        const matched = matchAcsCity([data.cityName], data.regionName);
        if (matched) {
          saveToCache(cacheKey, matched);
          return { city: matched, provider: "freeipapi" };
        }
      }
    }
  } catch {}

  // Provider 2: ipwho.is
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    const url = isLocalhost
      ? "https://ipwho.is/"
      : `https://ipwho.is/${clientIp}`;
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.city) {
        const matched = matchAcsCity([data.city], data.region);
        if (matched) {
          saveToCache(cacheKey, matched);
          return { city: matched, provider: "ipwho" };
        }
      }
    }
  } catch {}

  return null;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const latStr = searchParams.get("lat");
    const lngStr = searchParams.get("lng");

    // Case 1: GPS Coordinates provided by browser
    if (latStr && lngStr) {
      const lat = parseFloat(latStr);
      const lng = parseFloat(lngStr);

      if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        const result = await reverseGeocodeCoords(lat, lng);
        if (result) {
          return NextResponse.json({
            success: true,
            city: result.city,
            provider: result.provider,
            mode: "gps",
          });
        }
      }
    }

    // Case 2: Fallback to Server IP Detection
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const cfCity = req.headers.get("cf-ipcity");
    const cfRegion = req.headers.get("cf-region");

    const ipResult = await detectCityFromIp(clientIp, cfCity, cfRegion);
    if (ipResult) {
      return NextResponse.json({
        success: true,
        city: ipResult.city,
        provider: ipResult.provider,
        mode: "ip",
      });
    }

    // Default Fallback
    const defaultCity = ACS_CITIES.find((c) => c.slug === "kolkata") || ACS_CITIES[0];
    return NextResponse.json({
      success: true,
      city: defaultCity,
      provider: "default",
      mode: "fallback",
    });
  } catch (error: any) {
    console.error("Geocode API error:", error);
    const defaultCity = ACS_CITIES.find((c) => c.slug === "kolkata") || ACS_CITIES[0];
    return NextResponse.json(
      { success: false, city: defaultCity, error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
