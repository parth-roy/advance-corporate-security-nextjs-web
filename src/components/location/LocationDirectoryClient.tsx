"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, Building2, MapPin, ShieldCheck, X } from "lucide-react";
import type { ACSCity } from "@/lib/cities";

interface LocationDirectoryClientProps {
  allCities: ACSCity[];
  allStates: string[];
}

export default function LocationDirectoryClient({
  allCities,
  allStates,
}: LocationDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<number | "ALL">("ALL");

  // Filter and group cities by state
  const { citiesByState, sortedStates, totalMatchingCities } = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const grouped: Record<string, ACSCity[]> = {};
    let matchCount = 0;

    allCities.forEach((city) => {
      const matchesQuery =
        !query ||
        city.name.toLowerCase().includes(query) ||
        (city.state && city.state.toLowerCase().includes(query)) ||
        city.slug.toLowerCase().includes(query);

      const matchesTier =
        selectedTier === "ALL" || city.tier === selectedTier;

      if (matchesQuery && matchesTier) {
        const stateKey = city.state || "Other Regions";
        if (!grouped[stateKey]) {
          grouped[stateKey] = [];
        }
        grouped[stateKey].push(city);
        matchCount++;
      }
    });

    // Sort cities inside each state alphabetically
    Object.keys(grouped).forEach((state) => {
      grouped[state].sort((a, b) => a.name.localeCompare(b.name));
    });

    // Sort states alphabetically
    const sorted = Object.keys(grouped).sort();

    return {
      citiesByState: grouped,
      sortedStates: sorted,
      totalMatchingCities: matchCount,
    };
  }, [allCities, searchQuery, selectedTier]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy text-white pt-12 pb-14 border-b border-sky-900/30">
        <div className="container-acs max-w-6xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-sky-200/80 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={13} className="text-sky-400/60" />
              </li>
              <li aria-current="page" className="font-semibold text-white">
                Pan-India Deployment Directory
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xs">
              <ShieldCheck size={14} className="text-gold" />
              <span>Pan-India Security &amp; Facility Network</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white mb-3 tracking-tight">
              ACS Pan-India Deployment Directory
            </h1>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mb-6 font-normal">
              Explore ACS&apos;s operational presence covering <strong className="text-white font-bold">{allCities.length}+ cities</strong> across all 31 Indian States and Union Territories. PSARA-licensed security guards, corporate facility management, and compliant contract manpower deployed within 24–72 hours.
            </p>

            {/* Interactive Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, district, or state (e.g. Kolkata, Mumbai, Jaipur, Gujarat)..."
                className="w-full pl-11 pr-10 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-lg transition-all"
                aria-label="Search operational cities"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Tier Filters */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedTier("ALL")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTier === "ALL"
                    ? "bg-gold text-navy shadow-xs"
                    : "bg-white/10 text-sky-200 hover:bg-white/20"
                }`}
              >
                All Cities ({allCities.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier(1)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTier === 1
                    ? "bg-gold text-navy shadow-xs"
                    : "bg-white/10 text-sky-200 hover:bg-white/20"
                }`}
              >
                Tier 1 Metros
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier(2)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTier === 2
                    ? "bg-gold text-navy shadow-xs"
                    : "bg-white/10 text-sky-200 hover:bg-white/20"
                }`}
              >
                Tier 2 Major Hubs
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier(3)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedTier === 3
                    ? "bg-gold text-navy shadow-xs"
                    : "bg-white/10 text-sky-200 hover:bg-white/20"
                }`}
              >
                Tier 3 Industrial Towns
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER SUMMARY BAR ── */}
      <section className="bg-white border-b border-slate-200 py-3 sticky top-18 sm:top-20 z-20 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="container-acs flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <MapPin size={15} className="text-sky-600 shrink-0" />
            <span>
              Showing <strong className="text-navy font-bold">{totalMatchingCities}</strong> cities across{" "}
              <strong className="text-navy font-bold">{sortedStates.length}</strong> States/UTs
            </span>
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTier("ALL");
              }}
              className="text-xs text-sky-600 font-bold hover:text-navy underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          )}
        </div>
      </section>

      {/* ── QUICK STATE JUMP STRIP ── */}
      <section className="bg-slate-100/70 border-b border-slate-200/80 py-3">
        <div className="container-acs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-slate-500 font-bold uppercase tracking-wider shrink-0 text-[10px]">
              Jump to State:
            </span>
            {allStates.map((st) => {
              const stateSlug =
                allCities.find((c) => c.state === st)?.stateSlug ??
                st.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={st}
                  href={`#state-${stateSlug}`}
                  className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-navy hover:bg-sky-50 shrink-0 transition-all font-medium text-[11px] shadow-2xs"
                >
                  {st}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATE CARDS MASONRY GRID ── */}
      <main className="container-acs py-10" id="directory-results">
        {sortedStates.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12 shadow-sm">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No locations found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              No operational hubs match &ldquo;{searchQuery}&rdquo;. Try searching for another city, district, or state.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTier("ALL");
              }}
              className="btn-primary text-xs py-2 px-4 cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
            {sortedStates.map((state) => {
              const stateCities = citiesByState[state];
              const stateSlug =
                stateCities[0]?.stateSlug ??
                state.toLowerCase().replace(/\s+/g, "-");

              return (
                <div
                  key={state}
                  id={`state-${stateSlug}`}
                  className="break-inside-avoid mb-5 bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden hover:shadow-md hover:border-sky-300 transition-all group scroll-mt-36"
                >
                  {/* State Card Header */}
                  <div className="bg-gradient-to-r from-sky-50/90 to-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between min-h-[52px]">
                    <div>
                      <Link
                        href={`/location/state/${stateSlug}`}
                        className="text-sm font-bold text-slate-900 group-hover:text-navy transition-colors flex items-center gap-1.5"
                      >
                        <span>{state}</span>
                        <ChevronRight
                          size={13}
                          className="text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <p className="text-[10px] text-slate-500">
                        PSARA Deployment Zone
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white text-navy border border-sky-200/80 shadow-2xs">
                      {stateCities.length} {stateCities.length === 1 ? "city" : "cities"}
                    </span>
                  </div>

                  {/* City List in State */}
                  <ul className="p-2.5 divide-y divide-slate-100/70" role="list">
                    {stateCities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/location/${city.slug}`}
                          className="flex items-center justify-between py-1.5 px-2 rounded-lg text-slate-700 hover:text-navy hover:bg-sky-50/80 text-xs font-medium transition-all group/item"
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <Image
                              src="/google-maps-icon.webp"
                              alt=""
                              width={14}
                              height={14}
                              className="w-3.5 h-3.5 object-contain shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity"
                            />
                            <span className="truncate font-roboto">
                              {city.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {city.tier === 1 && (
                              <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-navy text-white uppercase tracking-wider">
                                Metro
                              </span>
                            )}
                            {city.tier === 2 && (
                              <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-sky-100 text-sky-800 uppercase tracking-wider">
                                Major
                              </span>
                            )}
                            <ChevronRight
                              size={12}
                              className="text-slate-400 group-hover/item:text-navy group-hover/item:translate-x-0.5 transition-all"
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* State Footer Link */}
                  <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-100 text-[11px] text-right">
                    <Link
                      href={`/location/state/${stateSlug}`}
                      className="text-sky-700 hover:text-navy font-semibold underline-offset-2 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore all {state} services</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
