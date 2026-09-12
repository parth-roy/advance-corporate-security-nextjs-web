"use client";

// src/components/home/HeroSection.tsx
// ============================================================
// ACS Hero Section — Dynamic Enterprise B2B Split-Layout
// Optimized for zero UI disruptions, responsive proportions,
// reactive to global CityContext, and animated stats strip.
// ============================================================

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { useCity } from "@/context/CityContext";
import AnimatedStat from "@/components/common/AnimatedStat";

const TRUST_BADGES = [
  { label: "PSARA Licensed", icon: "🛡️" },
  { label: "ISO 9001:2015", icon: "✅" },
  { label: "25+ Years Excellence", icon: "🏆" },
  { label: "50+ Govt. Empanelled", icon: "🏛️" },
];

type TabType = "security" | "facility" | "placement" | "horticulture";

interface TabMeta {
  label: string;
  icon: string;
  title: (city: string) => string;
  subtitle: string;
  allLink: string;
  allText: string;
  services: { name: string; slug: string; icon: string; badge?: string }[];
}

const TAB_DATA: Record<TabType, TabMeta> = {
  security: {
    label: "Security & Safety",
    icon: "🛡️",
    title: (city) => `PSARA Security & Safety Deployments in ${city}`,
    subtitle: "Background-verified security guards, surveillance & executive protection",
    allLink: "/services/security-safety",
    allText: "All Security (5)",
    services: [
      { name: "Security Guards", slug: "security-guard", icon: "👮", badge: "Verified" },
      { name: "Investigation & Surveillance", slug: "surveillance-cctv", icon: "📹", badge: "24×7 Active" },
      { name: "Executive Protection", slug: "executive-protection", icon: "🕴️", badge: "VIP / PSO" },
      { name: "Cash Management", slug: "security-guard", icon: "💼", badge: "Secure Transit" },
      { name: "Event Assignments", slug: "event-security", icon: "🎪", badge: "Crowd Control" },
    ],
  },
  facility: {
    label: "Facility Management",
    icon: "🏢",
    title: (city) => `Corporate Facility Management in ${city}`,
    subtitle: "Housekeeping, payroll services, building maintenance & waste management",
    allLink: "/services/facility-management",
    allText: "All Facility (6)",
    services: [
      { name: "Housekeeping", slug: "housekeeping", icon: "🧹", badge: "ISO SOP" },
      { name: "PayRoll Services", slug: "payroll-management", icon: "📊", badge: "Statutory" },
      { name: "Building Maintenance", slug: "mep-maintenance", icon: "⚙️", badge: "HVAC & MEP" },
      { name: "Cleaning & Janitorial", slug: "janitorial", icon: "🧽", badge: "Deep Clean" },
      { name: "Waste Management", slug: "facility-management", icon: "♻️", badge: "Eco SOP" },
      { name: "Event Management", slug: "event-security", icon: "🎪", badge: "Operations" },
    ],
  },
  placement: {
    label: "Placement Services",
    icon: "💼",
    title: (city) => `Corporate Placement & Manpower in ${city}`,
    subtitle: "Career, employment, executive, and direct placement staffing solutions",
    allLink: "/services/placement-services",
    allText: "All Placement (4)",
    services: [
      { name: "Career Placement Services", slug: "placement-services", icon: "🎯", badge: "Career" },
      { name: "Employment Placement Services", slug: "placement-services", icon: "🤝", badge: "Staffing" },
      { name: "Executive Placement Services", slug: "manpower-outsourcing", icon: "👔", badge: "Leadership" },
      { name: "Direct Placement Services", slug: "manpower-outsourcing", icon: "📋", badge: "On-Demand" },
    ],
  },
  horticulture: {
    label: "Horticulture",
    icon: "🌿",
    title: (city) => `Horticulture & Landscape Services in ${city}`,
    subtitle: "Landscaping, garden & lawn space planning, groundskeeping & farm development",
    allLink: "/services/horticulture",
    allText: "All Horticulture (3)",
    services: [
      { name: "Landscaping & Groundskeeping", slug: "horticulture", icon: "🌱", badge: "Green Campus" },
      { name: "Space Planning & Designing", slug: "horticulture", icon: "🏡", badge: "Garden / Lawns" },
      { name: "Development of Farms", slug: "horticulture", icon: "🌾", badge: "Agri / Estate" },
    ],
  },
};

export default function HeroSection() {
  const { currentCity, setIsCityModalOpen } = useCity();
  const [activeTab, setActiveTab] = useState<TabType>("security");

  const gridColsClass =
    activeTab === "security"
      ? "grid-cols-3 sm:grid-cols-5"
      : activeTab === "facility"
      ? "grid-cols-3 sm:grid-cols-3 md:grid-cols-6"
      : activeTab === "placement"
      ? "grid-cols-2 sm:grid-cols-4"
      : "grid-cols-3";

  return (
    <section
      className="relative bg-gradient-to-br from-[#f2f8fc] via-white to-[#edf5fa] overflow-hidden border-b border-slate-200/80 pt-3 sm:pt-5 pb-3 sm:pb-4"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0b1f3f 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-acs relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.18fr_0.82fr] gap-6 xl:gap-8 items-start mb-4">
          {/* ── LEFT COLUMN: Headline, Location Pill & Tabbed Services Box ── */}
          <div className="max-w-2xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5" role="list" aria-label="Certifications">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-950 text-[11px] font-bold shadow-2xs"
                  role="listitem"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Main H1 Heading */}
            <h1
              id="hero-heading"
              className="font-roboto font-black text-slate-900 leading-[1.15] mb-1.5 tracking-tight text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px]"
            >
              The Compliance-First Security &amp; Facility Partner for High-Risk Enterprises in{" "}
              <span className="text-sky-600 font-black">
                {currentCity.name}
              </span>
            </h1>

            {/* Subheadline tailored to active location */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-2 font-normal">
              <strong className="text-navy font-semibold">100% PSARA Licensed. Zero Statutory Risk.</strong> Protecting India&apos;s critical infrastructure for 25+ years. Deploy compliant workforce across{" "}
              <strong suppressHydrationWarning className="text-navy font-semibold">
                {currentCity.name}, {currentCity.state}
              </strong>
              .
            </p>

            {/* Action Bar: City Hub Button + Free Site Assessment CTA */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              {/* City Pill Button */}
              <button
                type="button"
                onClick={() => setIsCityModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-sky-50 hover:border-sky-300 transition-all shadow-2xs group cursor-pointer"
                title="Change Deployment City"
              >
                <Image
                  src="/google-maps-icon.webp"
                  alt="City"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain group-hover:scale-110 transition-transform shrink-0"
                />
                <span suppressHydrationWarning className="text-navy font-bold">
                  {currentCity.name}
                </span>
                <span className="text-sky-600 underline font-bold text-xs ml-0.5 group-hover:text-sky-800">
                  Change
                </span>
              </button>

              {/* Free Assessment CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs sm:text-sm bg-navy text-white hover:bg-navy-dark hover:shadow-sm transition-all cursor-pointer shadow-2xs"
              >
                <span>Request Site Security Audit</span>
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ── B2B ENTERPRISE SERVICES BOX (Workforce Web Style with Category Tabs) ── */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 sm:p-5">
              {/* Category Segmented Tabs */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl overflow-x-auto scrollbar-none max-w-full">
                  {(Object.keys(TAB_DATA) as TabType[]).map((tabKey) => {
                    const tab = TAB_DATA[tabKey];
                    const isActive = activeTab === tabKey;
                    return (
                      <button
                        key={tabKey}
                        type="button"
                        onClick={() => setActiveTab(tabKey)}
                        className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "bg-white text-navy shadow-xs"
                            : "text-slate-600 hover:text-navy"
                        }`}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <Link
                  href={TAB_DATA[activeTab].allLink}
                  className="text-xs font-bold text-sky-700 hover:text-navy underline hidden xl:inline-flex shrink-0"
                >
                  {TAB_DATA[activeTab].allText} →
                </Link>
              </div>

              {/* Dynamic Tab Header — Suitable B2B title */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    {TAB_DATA[activeTab].title(currentCity.name)}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    {TAB_DATA[activeTab].subtitle}
                  </p>
                </div>
              </div>

              {/* Grid of Active Brochure Services */}
              <div className={`grid ${gridColsClass} gap-2 sm:gap-2.5`}>
                {TAB_DATA[activeTab].services.map((svc) => (
                  <Link
                    key={svc.name}
                    href={`/services/${svc.slug}/${currentCity.slug}`}
                    className="group flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200/80 transition-all duration-150 cursor-pointer"
                  >
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-xs transition-all">
                      {svc.badge && (
                        <span
                          className={`absolute -top-1.5 px-1 py-0.2 rounded-full text-[7px] sm:text-[8px] font-bold shadow-2xs whitespace-nowrap ${
                            activeTab === "security"
                              ? "bg-sky-100 text-sky-800 border border-sky-200"
                              : activeTab === "facility"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              : activeTab === "placement"
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-teal-100 text-teal-800 border border-teal-200"
                          }`}
                        >
                          {svc.badge}
                        </span>
                      )}
                      <span className="text-lg sm:text-xl transition-transform group-hover:scale-110 duration-150">
                        {svc.icon}
                      </span>
                    </div>
                    <span className="mt-1 text-[10px] sm:text-[11px] font-bold text-slate-700 group-hover:text-navy leading-tight line-clamp-2">
                      {svc.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Photography, Trust Credentials & 24×7 Control Room ── */}
          <div className="relative flex flex-col items-center lg:items-end justify-start gap-3 w-full">
            {/* Visual Hero Image Card with Floating Trust Badges */}
            <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(11,31,63,0.12)] border border-slate-200/80">
              <Image
                src="/images/guarding.jpg"
                alt={`ACS security and facility management officers on duty in ${currentCity.name}`}
                fill
                priority
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Subtle gradient vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1: Top Right ISO */}
              <div className="absolute top-3 right-3 bg-navy/95 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg shadow-lg border border-sky-400/30 text-center">
                <div className="text-[10px] text-gold font-bold uppercase tracking-wider">ISO 9001:2015</div>
                <div className="text-xs font-black text-white">CERTIFIED</div>
              </div>

              {/* Floating Badge 2: Bottom Left Experience */}
              <div className="absolute bottom-3 left-3 bg-gold text-navy font-roboto px-3.5 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-black leading-none">25+</div>
                <div className="text-[9px] uppercase tracking-wider font-extrabold mt-0.5">
                  Years Excellence
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right PSARA */}
              <div className="absolute bottom-3 right-3 bg-sky-600/95 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg shadow-lg text-center">
                <div className="text-xs font-black">PSARA</div>
                <div className="text-[9px] font-medium opacity-90">Govt. Licensed</div>
              </div>
            </div>

            {/* Client Empanelment Chips */}
            <div className="w-full max-w-lg bg-white rounded-xl border border-slate-200/80 p-3 shadow-2xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Prestigious Institutional Clients</span>
                <span className="text-navy font-extrabold">50+ Govt. Empanelled</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-700">
                {[
                  "Indian Air Force",
                  "BSF (MHA)",
                  "Central Pollution Board",
                  "Indian Oil Corporation",
                  "HAL Barrackpore",
                  "ESI Hospital",
                  "Metro Railway",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/80 text-slate-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* 24×7 Central Control Room Bar */}
            <div className="w-full max-w-lg bg-[#0B1F3F] border border-slate-700/60 rounded-xl p-3 px-4 text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-[10px] text-sky-200 font-medium">24×7 Central Control Room</p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wide">+91 94770 06681</p>
                </div>
              </div>
              <a
                href="tel:+919477006681"
                className="px-3.5 py-1.5 bg-gold hover:bg-gold-light text-navy font-bold text-xs rounded-lg shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP WITH COUNT-UP ANIMATION (Image reference portion) ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0 border-t border-slate-200 pt-3 pb-1.5"
          role="list"
          aria-label="Company statistics"
        >
          <AnimatedStat
            value="25+"
            label="Years of Excellence"
            className="text-center px-4 md:border-r border-slate-200"
          />
          <AnimatedStat
            value="5000+"
            label="Trained Professionals"
            className="text-center px-4 md:border-r border-slate-200"
          />
          <AnimatedStat
            value="50+"
            label="Govt. Clients"
            className="text-center px-4 md:border-r border-slate-200"
          />
          <AnimatedStat
            value="Pan India"
            label="Presence (800+ Cities)"
            className="text-center px-4"
          />
        </div>
      </div>
    </section>
  );
}
