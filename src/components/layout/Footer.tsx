// src/components/layout/Footer.tsx
// Full city grid — all 580+ cities grouped by state
"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES, ACS_STATES } from "@/lib/cities";
import { ACS_SERVICE_CATEGORIES } from "@/lib/services";
import { useState } from "react";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [showAllCities, setShowAllCities] = useState(false);

  // Top 60 tier-1 and tier-2 cities for compact view
  const topCities = ACS_CITIES.filter((c) => c.tier <= 2).slice(0, 60);

  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="container-acs py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-4 group focus:outline-none" aria-label="ACS Home">
            <div className="relative h-20 sm:h-24 md:h-26 w-56 sm:w-64 md:w-72 max-w-full transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/acs-official-logo.avif"
                alt={`${siteConfig.name} Logo`}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 240px, 300px"
              />
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            PSARA Licensed · ISO 9001:2015 Certified · Pan India since {siteConfig.foundedYear}. Corporate Security, Facility Management & Manpower Outsourcing.
          </p>
          <div className="space-y-2 text-sm">
            {siteConfig.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-gray-300 hover:text-sky transition-colors"
                aria-label={`Call ${p}`}
              >
                <svg className="w-4 h-4 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {p}
              </a>
            ))}
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-gray-300 hover:text-sky transition-colors break-all">
              <svg className="w-4 h-4 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {siteConfig.email}
            </a>
            <div className="flex items-start gap-2 text-gray-400">
              <svg className="w-4 h-4 text-sky shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-xs">{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} — {siteConfig.address.postalCode}</span>
            </div>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="badge-sky text-xs">PSARA Licensed</span>
            <span className="badge-gold text-xs">ISO 9001:2015</span>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
            Our Services
          </h3>
          <ul className="space-y-2">
            {ACS_SERVICE_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/services/${cat.slug}`} className="text-gray-400 text-sm hover:text-sky transition-colors flex items-center gap-1.5">
                  <span className="text-sky text-xs">›</span>
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-3">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Sub-Services</p>
            </li>
            {siteConfig.services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-gray-400 text-xs hover:text-sky transition-colors flex items-center gap-1.5">
                  <span className="text-sky/60 text-xs">›</span>
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
            Company
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-sky transition-colors flex items-center gap-1.5">
                  <span className="text-sky text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* State hubs */}
          <div className="mt-8">
            <h4 className="font-roboto font-bold text-white text-xs uppercase tracking-wider mb-3">
              States We Serve
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {ACS_STATES.slice(0, 12).map((state) => {
                const stateSlug = ACS_CITIES.find((c) => c.state === state)?.stateSlug ?? state.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link key={state} href={`/location/state/${stateSlug}`} className="text-gray-500 text-xs hover:text-sky transition-colors bg-white/5 px-2 py-1 rounded">
                    {state}
                  </Link>
                );
              })}
              <Link href="/location" className="text-sky text-xs hover:underline px-2 py-1">+{ACS_STATES.length - 12} more →</Link>
            </div>
          </div>
        </div>

        {/* Cities column — compact grid */}
        <div>
          <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
            Cities We Serve ({ACS_CITIES.length}+)
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {(showAllCities ? ACS_CITIES : topCities).map((city) => (
              <Link
                key={city.slug}
                href={`/location/${city.slug}`}
                className={`text-xs transition-colors hover:text-sky ${city.tier === 1 ? "text-gray-300 font-medium" : "text-gray-500"}`}
              >
                {city.name}
                {city !== (showAllCities ? ACS_CITIES : topCities)[showAllCities ? ACS_CITIES.length - 1 : topCities.length - 1] && <span className="text-white/20 ml-1">·</span>}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setShowAllCities(!showAllCities)}
            className="mt-3 text-sky text-xs hover:underline"
          >
            {showAllCities ? "Show fewer cities ↑" : `Show all ${ACS_CITIES.length} cities ↓`}
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-acs py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            {" · "}PSARA Licensed · ISO 9001:2015 Certified
          </p>
          <span className="hidden sm:inline text-white/20">|</span>
          <p>
            Developed by{" "}
            <a
              href="https://parthertech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light font-medium transition-colors underline-offset-2 hover:underline"
            >
              Parther Technologies Private Limited
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-sky transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-sky transition-colors">Terms of Service</Link>
          <Link href="/sitemap.xml" className="hover:text-sky transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}