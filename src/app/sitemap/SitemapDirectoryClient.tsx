"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Search,
  X,
  MapPin,
  Building2,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export interface CityItem {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  aliases?: string[];
}

export interface StateGroup {
  state: string;
  stateSlug: string;
  isHQ?: boolean;
  region: "Eastern" | "Northern" | "Western" | "Southern" | "Central";
  cities: CityItem[];
}

interface SitemapDirectoryClientProps {
  initialStateGroups: StateGroup[];
  totalCities: number;
}

export default function SitemapDirectoryClient({
  initialStateGroups,
  totalCities,
}: SitemapDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter states and cities based on search and selected filter
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return initialStateGroups
      .map((group) => {
        // First filter by region or tier if an active filter is chosen
        if (activeFilter === "wb" && !group.isHQ) return null;
        if (
          ["Eastern", "Northern", "Western", "Southern", "Central"].includes(
            activeFilter
          ) &&
          group.region !== activeFilter
        ) {
          return null;
        }

        let matchingCities = group.cities;

        if (activeFilter === "tier1") {
          matchingCities = matchingCities.filter((c) => c.tier === 1);
        } else if (activeFilter === "tier2") {
          matchingCities = matchingCities.filter((c) => c.tier === 2);
        }

        // If a search query is typed, search within city name, aliases, or state name
        if (query.length > 0) {
          const stateMatches = group.state.toLowerCase().includes(query);

          if (stateMatches) {
            // Keep all cities in this state if state matches, or still filter if query matches specific cities
            // When user types state name, show all cities in that state
            // Otherwise, filter cities that match
            const cityMatches = matchingCities.filter(
              (c) =>
                c.name.toLowerCase().includes(query) ||
                (c.aliases &&
                  c.aliases.some((a) => a.toLowerCase().includes(query)))
            );
            matchingCities = cityMatches.length > 0 ? cityMatches : matchingCities;
          } else {
            matchingCities = matchingCities.filter(
              (c) =>
                c.name.toLowerCase().includes(query) ||
                (c.aliases &&
                  c.aliases.some((a) => a.toLowerCase().includes(query)))
            );
          }
        }

        if (matchingCities.length === 0) return null;

        return {
          ...group,
          cities: matchingCities,
        };
      })
      .filter((group): group is StateGroup => group !== null);
  }, [initialStateGroups, searchQuery, activeFilter]);

  // Aggregate counts
  const filteredCityCount = useMemo(() => {
    return filteredData.reduce((acc, g) => acc + g.cities.length, 0);
  }, [filteredData]);

  const handleClear = () => {
    setSearchQuery("");
    setActiveFilter("all");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="w-full">
      {/* Search & Filter Control Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 py-4 mb-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 820+ cities by name or state (e.g., Kolkata, Dankuni, Pune, Gurgaon, Noida)..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-sky-500 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-150 font-normal shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  aria-label="Clear city search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="flex items-center gap-3 self-center md:self-auto text-xs font-mono text-slate-600 bg-slate-100 px-3.5 py-2 rounded-lg border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>
                <strong>{filteredCityCount}</strong> of {totalCities} Cities
              </span>
              <span className="text-slate-300">|</span>
              <span>
                <strong>{filteredData.length}</strong> States/UTs
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 font-medium mr-1 flex items-center gap-1 shrink-0">
              <SlidersHorizontal className="w-3 h-3" /> Quick Filter:
            </span>

            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              All States ({totalCities})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("wb")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "wb"
                  ? "bg-amber-600 text-white shadow-2xs"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200"
              }`}
            >
              ★ West Bengal HQ (107)
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("tier1")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "tier1"
                  ? "bg-sky-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Tier-1 Metros
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("tier2")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "tier2"
                  ? "bg-sky-600 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Tier-2 Industrial Hubs
            </button>

            <span className="text-slate-300 mx-1">|</span>

            <button
              type="button"
              onClick={() => setActiveFilter("Eastern")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "Eastern"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Eastern Hubs
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("Northern")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "Northern"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Northern & NCR
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("Western")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "Western"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Western Region
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("Southern")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "Southern"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Southern Belts
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("Central")}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                activeFilter === "Central"
                  ? "bg-[#0b1f3f] text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Central India
            </button>
          </div>
        </div>
      </div>

      {/* Quick State-Jump Anchor Strip */}
      <div className="mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-sky-600" />
          <span>Jump to State Index:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {initialStateGroups.map((group) => (
            <a
              key={group.stateSlug}
              href={`#state-${group.stateSlug}`}
              className={`px-2.5 py-1 rounded-md transition-colors border ${
                group.isHQ
                  ? "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 font-semibold"
                  : "bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border-slate-200 hover:border-sky-300"
              }`}
            >
              {group.state}{" "}
              <span className="font-mono text-[10px] text-slate-400">
                ({group.cities.length})
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* State & City Directory Grid */}
      {filteredData.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200 my-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            No operational city found matching &quot;{searchQuery}&quot;
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
            Try searching by city name, major district, or state. You can also reset filters to view all 820+ pan-India hubs.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0b1f3f] text-white text-xs font-medium rounded-lg hover:bg-[#1a3660] transition-colors"
          >
            Reset Search & Show All Cities
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredData.map((group) => (
            <section
              key={group.stateSlug}
              id={`state-${group.stateSlug}`}
              className={`rounded-2xl border transition-all duration-200 scroll-mt-24 ${
                group.isHQ
                  ? "bg-gradient-to-b from-amber-50/40 via-white to-white border-amber-200 shadow-xs"
                  : "bg-white border-slate-200 shadow-2xs hover:border-slate-300"
              }`}
            >
              {/* State Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      group.isHQ
                        ? "bg-amber-500 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {group.state}
                      </h3>
                      {group.isHQ && (
                        <span className="inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                          Operations HQ & Primary Hub
                        </span>
                      )}
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {group.cities.length} {group.cities.length === 1 ? "City" : "Cities"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {group.region} Region • PSARA Verified Guarding & Integrated FM Hubs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Link
                    href={`/location/state/${group.stateSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>View {group.state} Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* City Links Grid */}
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {group.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/location/${city.slug}`}
                      className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-slate-150 bg-slate-50/60 hover:bg-white hover:border-sky-400 hover:shadow-xs transition-all duration-150 text-left"
                      title={`Advance Corporate Security services in ${city.name}, ${group.state}`}
                    >
                      <span className="text-xs font-medium text-slate-700 group-hover:text-sky-800 truncate">
                        {city.name}
                      </span>
                      {city.tier === 1 ? (
                        <span
                          className="shrink-0 ml-1 text-[9px] font-mono font-semibold px-1 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200"
                          title="Tier 1 Metropolitan Operational Hub"
                        >
                          T1
                        </span>
                      ) : (
                        <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
