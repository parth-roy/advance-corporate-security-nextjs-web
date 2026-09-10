// src/app/location/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES, ACS_STATES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Security & Facility Management Services Pan India | All Cities | ACS",
  description: "ACS provides PSARA-licensed security and facility management services across 580+ cities in India. Find your city and get a free quote.",
  alternates: { canonical: `${siteConfig.url}/location` },
};

export default function LocationHubPage() {
  const citiesByState = ACS_STATES.map((state) => ({
    state,
    stateSlug: ACS_CITIES.find((c) => c.state === state)?.stateSlug ?? state.toLowerCase().replace(/\s+/g, "-"),
    cities: ACS_CITIES.filter((c) => c.state === state).sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name)),
  })).filter((s) => s.cities.length > 0);

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-14">
        <div className="container-acs text-center">
          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl mb-4">
            ACS Services Across <span className="text-sky">Pan India</span>
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            PSARA-licensed security, facility management &amp; manpower outsourcing in 580+ cities.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs">
          {citiesByState.map(({ state, stateSlug, cities }) => (
            <div key={state} className="mb-10">
              <div className="flex items-baseline gap-4 mb-4">
                <Link href={`/location/state/${stateSlug}`} className="font-roboto font-bold text-navy text-lg hover:text-sky transition-colors">{state}</Link>
                <span className="text-gray-400 text-xs">{cities.length} cities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Link key={city.slug} href={`/location/${city.slug}`}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-all hover:shadow-sm ${
                      city.tier === 1 ? "bg-navy text-white border-navy hover:bg-navy-light" :
                      city.tier === 2 ? "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100" :
                      "bg-white text-gray-600 border-gray-200 hover:border-sky-300"
                    }`}
                  >{city.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}