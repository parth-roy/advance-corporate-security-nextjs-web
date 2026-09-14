"use client";

// src/components/common/CityMap.tsx
// ============================================================
// ACS — Dynamic Interactive City Map Component
// Powered by OpenStreetMap embed with Google Maps navigation link
// Zero-break guarantee, CSP-compliant, instant pre-cached hubs
// ============================================================

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCity } from "@/context/CityContext";

interface CityMapProps {
  cityName?: string;
  stateName?: string;
  serviceName?: string;
}

interface MapCoords {
  lat: number;
  lng: number;
  bbox: [number, number, number, number]; // [min_lng, min_lat, max_lng, max_lat]
}

// Instant zero-latency pre-computed coordinates for top industrial hubs
const PRELOADED_CITY_COORDS: Record<string, MapCoords> = {
  barrackpore: { lat: 22.7661, lng: 88.3516, bbox: [88.22, 22.62, 88.48, 22.90] },
  kolkata: { lat: 22.5726, lng: 88.3639, bbox: [88.24, 22.45, 88.48, 22.68] },
  mumbai: { lat: 19.0760, lng: 72.8777, bbox: [72.75, 18.88, 73.00, 19.27] },
  delhi: { lat: 28.6139, lng: 77.2090, bbox: [76.84, 28.40, 77.35, 28.88] },
  bengaluru: { lat: 12.9716, lng: 77.5946, bbox: [77.45, 12.85, 77.75, 13.15] },
  hyderabad: { lat: 17.3850, lng: 78.4867, bbox: [78.30, 17.25, 78.65, 17.55] },
  chennai: { lat: 13.0827, lng: 80.2707, bbox: [80.12, 12.95, 80.35, 13.25] },
  ahmedabad: { lat: 23.0225, lng: 72.5714, bbox: [72.45, 22.90, 72.70, 23.15] },
  pune: { lat: 18.5204, lng: 73.8567, bbox: [73.72, 18.40, 74.00, 18.65] },
  surat: { lat: 21.1702, lng: 72.8311, bbox: [72.70, 21.05, 72.95, 21.30] },
  jaipur: { lat: 26.9124, lng: 75.7873, bbox: [75.65, 26.78, 75.92, 27.05] },
  lucknow: { lat: 26.8467, lng: 80.9462, bbox: [80.80, 26.72, 81.10, 26.98] },
  indore: { lat: 22.7196, lng: 75.8577, bbox: [75.72, 22.60, 76.00, 22.84] },
  chandigarh: { lat: 30.7333, lng: 76.7794, bbox: [76.68, 30.64, 76.88, 30.82] },
  kochi: { lat: 9.9312, lng: 76.2673, bbox: [76.15, 9.82, 76.38, 10.05] },
  coimbatore: { lat: 11.0168, lng: 76.9558, bbox: [76.85, 10.90, 77.08, 11.12] },
  nagpur: { lat: 21.1458, lng: 79.0882, bbox: [78.95, 21.02, 79.22, 21.26] },
  visakhapatnam: { lat: 17.6868, lng: 83.2185, bbox: [83.10, 17.58, 83.35, 17.82] },
  howrah: { lat: 22.5958, lng: 88.2636, bbox: [88.18, 22.50, 88.35, 22.68] },
  dhanbad: { lat: 23.7957, lng: 86.4304, bbox: [86.30, 23.70, 86.55, 23.90] },
  bhilai: { lat: 21.1938, lng: 81.3509, bbox: [81.25, 21.10, 81.45, 21.30] },
  asansol: { lat: 23.6739, lng: 86.9524, bbox: [86.85, 23.58, 87.05, 23.78] },
  siliguri: { lat: 26.7271, lng: 88.3953, bbox: [88.30, 26.62, 88.50, 26.82] },
  durgapur: { lat: 23.5204, lng: 87.3119, bbox: [87.20, 23.42, 87.42, 23.62] },
  noida: { lat: 28.5355, lng: 77.3910, bbox: [77.30, 28.45, 77.48, 28.62] },
  gurugram: { lat: 28.4595, lng: 77.0266, bbox: [76.92, 28.36, 77.12, 28.55] },
  thane: { lat: 19.2183, lng: 72.9781, bbox: [72.90, 19.12, 73.05, 19.29] },
  navi_mumbai: { lat: 19.0330, lng: 73.0297, bbox: [72.95, 18.94, 73.12, 19.12] },
};

export default function CityMap({ cityName: propCityName, stateName: propStateName, serviceName }: CityMapProps) {
  const { currentCity, setIsCityModalOpen } = useCity();
  const pathname = usePathname();

  // Dynamically resolve city and state from prop or global active city context
  const cityName = propCityName || currentCity?.name || "Kolkata";
  const stateName = propStateName || currentCity?.state || "West Bengal";

  const cityKey = cityName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "");
  const preloaded = PRELOADED_CITY_COORDS[cityKey];

  const [fetchedCoordsMap, setFetchedCoordsMap] = useState<Record<string, MapCoords>>({});

  const coords: MapCoords = preloaded || fetchedCoordsMap[cityKey] || {
    lat: 22.5726,
    lng: 88.3639,
    bbox: [88.24, 22.45, 88.48, 22.68],
  };

  const mapQuery = encodeURIComponent(`${cityName}, ${stateName}, India`);
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  useEffect(() => {
    // If city is already in pre-computed list or already fetched, no network fetch needed
    if (PRELOADED_CITY_COORDS[cityKey] || fetchedCoordsMap[cityKey]) {
      return;
    }

    // Otherwise fetch precise coordinates from server geocoding API
    let isMounted = true;
    const fetchCoords = async () => {
      try {
        const res = await fetch(
          `/api/geocode?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && data.lat && data.lng && data.bbox) {
            setFetchedCoordsMap((prev) => ({
              ...prev,
              [cityKey]: {
                lat: data.lat,
                lng: data.lng,
                bbox: data.bbox,
              },
            }));
          }
        }
      } catch (err) {
        console.warn("Could not geocode map location, using default:", err);
      }
    };

    fetchCoords();
    return () => {
      isMounted = false;
    };
  }, [cityKey, cityName, stateName, fetchedCoordsMap]);

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.bbox[0]}%2C${coords.bbox[1]}%2C${coords.bbox[2]}%2C${coords.bbox[3]}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;
  const isContactPage = pathname === "/contact";

  return (
    <div className="card-acs overflow-hidden border border-sky-100 shadow-md">
      {/* Map Header */}
      <div className="bg-navy p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-sky uppercase tracking-wider font-roboto">
              Active Deployment Hub
            </span>
          </div>
          <h3 className="font-roboto font-bold text-white text-lg sm:text-xl">
            ACS {serviceName ? `${serviceName} Network` : "Operations & Rapid Deployment"} — {cityName}
          </h3>
          <p className="text-gray-300 text-xs mt-0.5">
            Serving corporate offices, manufacturing plants, SEZs &amp; government facilities in {cityName}, {stateName}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          {!propCityName && (
            <button
              type="button"
              onClick={() => setIsCityModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gold text-navy-dark hover:bg-gold-light px-3 py-2 rounded shadow-xs transition-all cursor-pointer"
              title="Change deployment hub"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Change Hub</span>
            </button>
          )}

          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded border border-white/20 transition-all shrink-0"
          >
            <span>Open Full Map</span>
            <svg className="w-3.5 h-3.5 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Dynamic Interactive Embed */}
      <div className="relative w-full h-72 sm:h-96 bg-slate-100">
        <iframe
          title={`Interactive deployment map of ACS in ${cityName}, ${stateName}`}
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Coverage Pill */}
        <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-sky-400/30 shadow-lg pointer-events-none flex items-center gap-2">
          <span className="text-sky font-bold">📍</span>
          <span>Coverage: {cityName} &amp; 50km Surrounding Industrial Belt</span>
        </div>
      </div>

      {/* Map Footer Bar */}
      <div className="bg-sky-50 p-4 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-gray-700">
          <span className="flex items-center gap-1">
            <strong className="text-navy">Control Room:</strong> 24×7 Active
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-navy">Mobilization:</strong> 24–72 Hours
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-navy">Statutory:</strong> 100% Compliant
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isContactPage ? (
            <a
              href="#contact-form"
              className="font-bold text-navy hover:text-sky transition-colors px-3 py-1.5 rounded bg-white border border-sky-200 shadow-xs"
            >
              Deploy in {cityName} ↑
            </a>
          ) : (
            <Link
              href="/contact"
              className="font-bold text-navy hover:text-sky transition-colors px-3 py-1.5 rounded bg-white border border-sky-200 shadow-xs"
            >
              Deploy in {cityName} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}