"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Search, X, LocateFixed, Check } from "lucide-react";
import { ACS_CITIES, type ACSCity } from "@/lib/cities";
import { useCity } from "@/context/CityContext";

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
  const handleClose = propOnClose || (() => setIsCityModalOpen(false));

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

  if (!isOpen) return null;

  const handleCitySelect = (citySlug: string, cityName?: string) => {
    const matched = ACS_CITIES.find((c) => c.slug === citySlug) || {
      slug: citySlug,
      name: cityName || citySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      state: "India",
      stateSlug: "india",
      tier: 3 as const,
    };

    // Update global CityContext
    setCity(matched, true);

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
  };

  const handleAutoDetect = async () => {
    setIsDetecting(true);
    try {
      const detected = await detectLocation(true);
      if (detected && detected.slug) {
        handleCitySelect(detected.slug, detected.name);
      }
    } catch (e) {
      console.warn("Auto-detect failed:", e);
    } finally {
      setIsDetecting(false);
    }
  };

  const filteredCities = ACS_CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.state && c.state.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in fade-in zoom-in-95 duration-200 z-10 border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center p-1.5 shrink-0">
              <Image
                src="/google-maps-icon.webp"
                alt="Location"
                width={22}
                height={22}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Choose your city or location
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Covering <strong className="text-navy font-bold">800+</strong> cities, industrial SEZs, defence hubs &amp; deployment zones across India
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto p-5 sm:p-7 custom-scrollbar space-y-7">
          {/* Auto-detect button & Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search your city or state (e.g. Mumbai, Delhi, Kolkata, Gujarat)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:bg-white transition-all text-slate-800 text-sm placeholder:text-slate-400 font-medium"
                autoFocus
              />
            </div>
            <button
              onClick={handleAutoDetect}
              disabled={isDetecting}
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-sky-50 border border-sky-200/90 text-navy hover:bg-sky-100/80 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <LocateFixed
                size={16}
                className={isDetecting ? "animate-spin text-sky-600" : "text-sky-600"}
              />
              <span>{isDetecting ? "Detecting..." : "Auto Detect City"}</span>
            </button>
          </div>

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
            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {filteredCities.map((city) => {
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
                        <Image
                          src="/google-maps-icon.webp"
                          alt="City"
                          width={16}
                          height={16}
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
