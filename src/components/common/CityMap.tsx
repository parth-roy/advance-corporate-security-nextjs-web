// src/components/common/CityMap.tsx
// ============================================================
// ACS — Dynamic URL-Driven City Map Component
// Dynamically centers and renders interactive map for any of the 828+ Indian cities
// Updates instantly based on URL parameters: /services/[slug]/[city] & /location/[city]
// ============================================================

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

interface CityMapProps {
  cityName: string;
  stateName: string;
  serviceName?: string;
}

export default function CityMap({ cityName, stateName, serviceName }: CityMapProps) {
  const mapQuery = encodeURIComponent(`${cityName}, ${stateName}, India`);
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

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

        <a
          href={externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded border border-white/20 transition-all shrink-0 self-start sm:self-auto"
        >
          <span>Open Full Map</span>
          <svg className="w-3.5 h-3.5 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Dynamic Interactive Embed */}
      <div className="relative w-full h-72 sm:h-96 bg-gray-100">
        <iframe
          title={`Map of ACS deployment in ${cityName}, ${stateName}`}
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
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
          <Link
            href="/contact"
            className="font-bold text-navy hover:text-sky transition-colors px-3 py-1.5 rounded bg-white border border-sky-200 shadow-xs"
          >
            Deploy in {cityName} →
          </Link>
        </div>
      </div>
    </div>
  );
}