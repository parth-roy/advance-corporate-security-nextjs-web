"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Search, X, LocateFixed, Check } from "lucide-react";
import { ACS_CITIES, type ACSCity } from "@/lib/cities";
import { useCity } from "@/context/CityContext";
import { trackEvent } from "@/lib/analytics";

export const TOP_CITIES = [
  { name: "Mumbai", slug: "mumbai", image: "/cities/mumbai.webp", state: "Maharashtra" },
  { name: "Delhi NCR", slug: "delhi", image: "/cities/delhi.webp", state: "Delhi" },
  { name: "Bengaluru", slug: "bengaluru", image: "/cities/bengaluru.webp", state: "Karnataka" },
  { name: "Hyderabad", slug: "hyderabad", image: "/cities/hyderabad.webp", state: "Telangana" },
  { name: "Chennai", slug: "chennai", image: "/cities/chennai-icon.webp", state: "Tamil Nadu" },
  { name: "Ahmedabad", slug: "ahmedabad", image: "/cities/ahmedabad.webp", state: "Gujarat" },
  { name: "Pune", slug: "pune", image: "/cities/pune.webp", state: "Maharashtra" },
  { name: "Surat", slug: "surat", image: "/cities/surat.webp", state: "Gujarat" },
  { name: "Jaipur", slug: "jaipur", image: "/cities/jaipur-icon.webp", state: "Rajasthan" },
  { name: "Kolkata", slug: "kolkata", image: "/cities/kolkata.webp", state: "West Bengal" },
  { name: "Lucknow", slug: "lucknow", image: "/cities/lucknow.webp", state: "Uttar Pradesh" },
  { name: "Coimbatore", slug: "coimbatore", image: "/cities/coimbatore-icon.webp", state: "Tamil Nadu" },
  { name: "Indore", slug: "indore", image: "/cities/indore.webp", state: "Madhya Pradesh" },
  { name: "Chandigarh", slug: "chandigarh", image: "/cities/chandigarh-icon.webp", state: "Punjab" },
  { name: "Kochi", slug: "kochi", image: "/cities/kochi-icon.webp", state: "Kerala" },
];

interface CitySelectorModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onCitySelect?: (city: ACSCity) => void;
  currentCitySlug?: string;
}

export default function CitySelectorModal({
  isOpen: propIsOpen,
  onClose: propOnClose,
  onCitySelect,
  currentCitySlug,
}: CitySelectorModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectStatus, setDetectStatus] = useState<string | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const [isSearchingApi, setIsSearchingApi] = useState(false);
  const [apiResults, setApiResults] = useState<ACSCity[]>([]);
  const [apiProvider, setApiProvider] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const {
    currentCity,
    setCity,
    detectLocation,
    isCityModalOpen,
    setIsCityModalOpen,
  } = useCity();

  // Support controlled or context-driven state
  const isOpen = propIsOpen !== undefined ? propIsOpen : isCityModalOpen;

  const executeApiCitySearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setApiResults([]);
      setApiProvider("");
      return;
    }
    setIsSearchingApi(true);
    try {
      const res = await fetch(`/api/locations?q=${encodeURIComponent(query.trim())}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.cities)) {
          setApiResults(data.cities);
          setApiProvider(data.provider || "maps_api");
        }
      }
    } catch (e) {
      console.warn("Real-time city API query failed:", e);
    } finally {
      setIsSearchingApi(false);
    }
  }, []);

  // Debounced auto-search when query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setApiResults([]);
      setApiProvider("");
      return;
    }
    const timer = setTimeout(() => {
      executeApiCitySearch(searchQuery);
    }, 280);
    return () => clearTimeout(timer);
  }, [searchQuery, executeApiCitySearch]);

  const handleClose = useCallback(() => {
    setSearchQuery("");
    setDetectStatus(null);
    setShowAllCities(false);
    setApiResults([]);
    setApiProvider("");
    if (propOnClose) {
      propOnClose();
    } else {
      setIsCityModalOpen(false);
    }
  }, [propOnClose, setIsCityModalOpen]);

  const activeSlug = currentCitySlug || currentCity?.slug || "kolkata";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleCitySelect = useCallback((citySlug: string, cityName?: string) => {
    const matched = ACS_CITIES.find((c) => c.slug === citySlug) || {
      slug: citySlug,
      name: cityName || citySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      state: "India",
      stateSlug: "india",
      tier: 3 as const,
    };

    // Update global CityContext
    setCity(matched, true);
    trackEvent("city_change", {
      city: matched.slug,
      name: matched.name,
      state: matched.state,
    });

    if (onCitySelect) {
      onCitySelect(matched);
      handleClose();
      return;
    }

    // Smart route adaptation
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      // /services/[slug]/[city]
      if (segments[0] === "services" && segments.length >= 3) {
        router.push(`/services/${segments[1]}/${citySlug}`);
      }
      // /services/[slug] (category or single service)
      else if (segments[0] === "services" && segments.length === 2) {
        router.push(`/services/${segments[1]}/${citySlug}`);
      }
      // /location/[city]
      else if (segments[0] === "location" && segments[1] && segments[1] !== "state") {
        router.push(`/location/${citySlug}`);
      }
    }

    handleClose();
  }, [handleClose, onCitySelect, pathname, router, setCity]);

  const handleAutoDetect = useCallback(async () => {
    setIsDetecting(true);
    setDetectStatus("Pinpointing location via Google Maps...");
    try {
      const detected = await detectLocation(true);
      if (detected && detected.slug) {
        setDetectStatus(`Detected: ${detected.name}, ${detected.state}`);
        setTimeout(() => {
          handleCitySelect(detected.slug, detected.name);
          setDetectStatus(null);
        }, 800);
      } else {
        setDetectStatus("Could not determine precise location");
        setTimeout(() => setDetectStatus(null), 2500);
      }
    } catch (e) {
      console.warn("Auto-detect failed:", e);
      setDetectStatus("Detection failed. Please choose your city below.");
      setTimeout(() => setDetectStatus(null), 2500);
    } finally {
      setIsDetecting(false);
    }
  }, [detectLocation, handleCitySelect]);

  const filteredCities = useMemo<ACSCity[]>(() => {
    if (!searchQuery.trim()) return ACS_CITIES;
    if (apiResults.length > 0) return apiResults;
    return ACS_CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.state && c.state.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, apiResults]);

  const displayedCities = useMemo<ACSCity[]>(() => {
    if (searchQuery.trim() || showAllCities) return filteredCities;
    return filteredCities.slice(0, 48);
  }, [searchQuery, showAllCities, filteredCities]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] animate-in fade-in zoom-in-95 duration-200 z-10 border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center p-1.5 shrink-0">
              <Image
                src="/google-maps-icon.webp"
                alt="Location"
                width={22}
                height={22}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 leading-tight truncate">
                Choose your city or location
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                Covering <strong className="text-navy font-bold">800+</strong> cities, industrial SEZs &amp; deployment zones across India
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto p-5 sm:p-7 custom-scrollbar space-y-7">
          {/* Auto-detect button & Search Bar with Real-time API button */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1 flex items-center">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search city, district, or town in real-time (e.g. Pune, Kolkata, Barrackpore)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      executeApiCitySearch(searchQuery);
                    }
                  }}
                  className="w-full pl-11 pr-24 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:bg-white transition-all text-slate-800 text-sm placeholder:text-slate-400 font-medium"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => executeApiCitySearch(searchQuery)}
                  className="absolute right-2 px-3 py-1.5 bg-navy hover:bg-navy-light text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                  title="Search City in Real-time via Maps API"
                >
                  {isSearchingApi ? (
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                  ) : (
                    <Search size={13} />
                  )}
                  <span>Search</span>
                </button>
              </div>
              <button
                onClick={handleAutoDetect}
                disabled={isDetecting}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-sky-50 border border-sky-200/90 text-navy hover:bg-sky-100/80 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 cursor-pointer"
              >
                <LocateFixed
                  size={16}
                  className={isDetecting ? "animate-spin text-sky-600" : "text-sky-600"}
                />
                <span>{isDetecting ? "Detecting..." : "Auto Detect City"}</span>
              </button>
            </div>

            {/* Real-time API Feedback Indicator */}
            {searchQuery.trim() && (
              <div className="flex items-center justify-between text-xs px-2 pt-1 text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] sm:text-xs font-medium">
                    {isSearchingApi
                      ? "Searching Google Maps API & Pan-India database in real-time..."
                      : `Found ${filteredCities.length} real-time matches for "${searchQuery}"`}
                  </span>
                </span>
                {apiProvider && (
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {apiProvider === "google_maps"
                      ? "Google Maps API"
                      : apiProvider === "nominatim"
                      ? "OpenStreetMap API"
                      : "ACS Pan-India DB"}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Status Feedback Banner */}
          {detectStatus && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-sky-50 border border-sky-200/80 rounded-2xl text-xs font-bold text-sky-900 animate-in fade-in duration-200">
              <LocateFixed
                size={16}
                className={isDetecting ? "animate-spin text-sky-600 shrink-0" : "text-emerald-600 shrink-0"}
              />
              <span>{detectStatus}</span>
            </div>
          )}

          {/* Top Cities Grid (Only when not actively searching) */}
          {!searchQuery && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Top Deployment Hubs
                </h3>
                <span className="text-xs font-semibold text-sky-700">
                  828 Cities Operational
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                {TOP_CITIES.map((city) => {
                  const isSelected = activeSlug === city.slug;
                  return (
                    <button
                      key={city.slug}
                      onClick={() => handleCitySelect(city.slug, city.name)}
                      className={`group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-sky-50/80 border-sky-400 shadow-xs"
                          : "bg-white border-slate-100 hover:border-sky-200 hover:bg-slate-50/80 hover:shadow-xs"
                      }`}
                    >
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 56px, 64px"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                            <Check size={18} className="text-white drop-shadow-sm font-bold" />
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs font-bold truncate max-w-full ${
                          isSelected
                            ? "text-navy font-extrabold"
                            : "text-slate-700 group-hover:text-navy"
                        }`}
                      >
                        {city.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Cities List */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {searchQuery
                ? `Matching Locations (${filteredCities.length})`
                : "All Operational Locations (828 Pan-India Cities)"}
            </h3>
            {displayedCities.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {displayedCities.map((city) => {
                    const isSelected = activeSlug === city.slug;
                    return (
                      <button
                        key={city.slug}
                        onClick={() => handleCitySelect(city.slug, city.name)}
                        className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all group cursor-pointer ${
                          isSelected
                            ? "bg-sky-50 text-navy font-semibold border border-sky-200"
                            : "hover:bg-slate-50 text-slate-700 hover:text-navy border border-transparent"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? "bg-sky-200/70 text-navy"
                              : "bg-slate-100 text-slate-400 group-hover:bg-sky-100 group-hover:text-sky-700"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/google-maps-icon.webp"
                            alt=""
                            width={16}
                            height={16}
                            loading="lazy"
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                        <div className="truncate">
                          <p className="text-xs sm:text-sm font-semibold truncate leading-tight">
                            {city.name}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {city.state}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {!searchQuery && !showAllCities && filteredCities.length > 48 && (
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => setShowAllCities(true)}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-sky-50 text-navy font-bold text-xs rounded-xl border border-slate-200 hover:border-sky-300 transition-all cursor-pointer shadow-2xs"
                    >
                      Show all {filteredCities.length} operational cities across India
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Image
                  src="/google-maps-icon.webp"
                  alt="Location"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain mx-auto mb-2 opacity-40 grayscale"
                />
                <p className="text-slate-600 font-semibold text-sm">
                  No cities found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Try searching by state name or choosing from the top cities list.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
