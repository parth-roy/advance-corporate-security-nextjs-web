"use client";

// src/components/home/CoreServicesAccordionGrid.tsx
// ============================================================
// ACS Core Services — Accenture-Style Interactive Accordion Grid
// Exactly replicates the visual physics, zero-CLS elevation,
// smooth 0fr->1fr CSS grid expansion, and white-mode aesthetic
// from the reference video.
// ============================================================

import React, { useState } from "react";
import Link from "next/link";

interface BrochureServiceItem {
  id: string;
  title: string;
  slug: string;
  categoryTag: string;
  badge: string;
  badgeColor: string;
  hook: string;
  description: string;
  offerings: string[];
  illustrationType: "placement" | "facility" | "security" | "horticulture";
}

const SERVICES: BrochureServiceItem[] = [
  {
    id: "placement",
    title: "Placement Services",
    slug: "placement-services",
    categoryTag: "MANPOWER & TALENT",
    badge: "Pan India",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
    hook: "End-to-end recruitment, executive placement, staffing & skilled workforce.",
    description:
      "Comprehensive workforce sourcing and corporate placement solutions delivering pre-screened, verified, and statutory-compliant human resources across corporate and industrial sectors.",
    offerings: [
      "Career Placement Services",
      "Employment Placement Services",
      "Executive Placement Services",
      "Direct Placement Services",
    ],
    illustrationType: "placement",
  },
  {
    id: "facility",
    title: "Facility Management Services",
    slug: "facility-management",
    categoryTag: "INFRASTRUCTURE & OPS",
    badge: "ISO 9001:2015",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    hook: "Integrated housekeeping, mechanized cleaning, MEP maintenance & facility operations.",
    description:
      "Enterprise-grade facility operations adhering to ISO 9001:2015 documented SOPs. We manage physical environments, mechanized sanitization, and statutory payroll across commercial complexes.",
    offerings: [
      "Housekeeping",
      "PayRoll Services",
      "Building Maintenance",
      "Cleaning & Janitorial",
      "Waste Management",
      "Event Management",
    ],
    illustrationType: "facility",
  },
  {
    id: "security",
    title: "Security & Safety Services",
    slug: "security-safety",
    categoryTag: "PSARA COMPLIANT",
    badge: "PSARA Licensed",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
    hook: "Armed & unarmed security guards, executive VIP protection & high-vigilance surveillance.",
    description:
      "Battle-tested, government-licensed security deployments for corporate campuses, industrial plants, and financial institutions with 24×7 central control room surveillance oversight.",
    offerings: [
      "Security Guards",
      "Investigation & Surveillance",
      "Executive Protection",
      "Cash Management",
      "Event Assignments",
    ],
    illustrationType: "security",
  },
  {
    id: "horticulture",
    title: "Horticulture",
    slug: "horticulture",
    categoryTag: "SUSTAINABLE GREENS",
    badge: "Eco-Certified",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    hook: "Professional landscaping, garden & lawn space planning, and farm development.",
    description:
      "Full-spectrum commercial horticulture, landscape architecture, groundskeeping, and agronomic farm development maintaining pristine, eco-certified green campuses.",
    offerings: [
      "Landscaping & Groundskeeping",
      "Space Planning & Designing of Garden or Lawns",
      "Development of Farms",
    ],
    illustrationType: "horticulture",
  },
];

export default function CoreServicesAccordionGrid() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleMobileCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle architectural background dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0b1f3f 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-acs relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sky-700 mb-1.5 font-roboto">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-roboto"
          >
            Our <span className="text-sky-600">Core Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-navy mx-auto mt-2.5 rounded-full" />
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            From PSARA-licensed security guard deployment to complete integrated
            facility management — we deliver trained, compliant, and reliable
            workforce solutions across pan India.
          </p>
        </div>

        {/* 
          Accenture-Style 4-Column Grid:
          Card shape is 100% constant and hardcoded.
          On hover, the illustration slides out to the LEFT and disappears,
          while the description and offerings slide in from the RIGHT.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCardItem
              key={service.id}
              service={service}
              isActiveOnMobile={activeCardId === service.id}
              onMobileToggle={() => toggleMobileCard(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardItem({
  service,
  isActiveOnMobile,
  onMobileToggle,
}: {
  service: BrochureServiceItem;
  isActiveOnMobile: boolean;
  onMobileToggle: () => void;
}) {
  return (
    <div
      onClick={onMobileToggle}
      className="group relative w-full h-[470px] sm:h-[490px] lg:h-[500px] bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300/90 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer select-none"
    >
      {/* ── TOP COMPARTMENT (Static Permanent Header — Always Visible & Static) ── */}
      <div className="z-10 bg-white">
        {/* Category Tag + Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase text-slate-500 font-roboto">
            {service.categoryTag}
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border shadow-2xs whitespace-nowrap ${service.badgeColor}`}
          >
            {service.badge}
          </span>
        </div>

        {/* Main Service Title */}
        <h3 className="font-roboto font-black text-slate-900 text-xl sm:text-2xl leading-snug tracking-tight group-hover:text-sky-700 transition-colors">
          {service.title}
        </h3>
      </div>

      {/* ── BOTTOM COMPARTMENT (Interactive Stage — Fixed Height, 2 Layers with Horizontal Slide) ── */}
      <div className="relative flex-1 w-full overflow-hidden mt-4 pt-1">
        {/*
          LAYER 1: THE ILLUSTRATION (Visible by default)
          - Resting: translateX(0), opacity-100
          - On Hover: Slides out to the LEFT (-translateX-16) and fades to invisible (opacity-0)
        */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActiveOnMobile
              ? "-translate-x-16 opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100 lg:group-hover:-translate-x-16 lg:group-hover:opacity-0 lg:group-hover:pointer-events-none"
          }`}
          aria-hidden="true"
        >
          <div className="w-full h-full flex items-center justify-center">
            {service.illustrationType === "placement" && <PlacementIllustration />}
            {service.illustrationType === "facility" && <FacilityIllustration />}
            {service.illustrationType === "security" && <SecurityIllustration />}
            {service.illustrationType === "horticulture" && <HorticultureIllustration />}
          </div>

          <div className="mt-2 text-[10px] font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500/70 animate-pulse" />
            <span>Advance Corporate Security</span>
          </div>
        </div>

        {/*
          LAYER 2: THE DESCRIPTION & KEY OFFERINGS (Hidden by default)
          - Resting: translateX-10, opacity-0, pointer-events-none
          - On Hover: Slides IN from the right (translateX-0), opacity-100, taking over the space!
        */}
        <div
          className={`absolute inset-0 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActiveOnMobile
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "translate-x-10 opacity-0 pointer-events-none lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto"
          }`}
        >
          {/* Scrollable text container */}
          <div className="overflow-y-auto pr-1 space-y-3">
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
              {service.description}
            </p>

            {/* Key Offerings List */}
            <div className="pt-2.5 border-t border-slate-100">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Key Offerings
              </p>
              <ul className="space-y-1.5" role="list">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-xs text-slate-700 font-medium leading-snug"
                  >
                    <span
                      className="text-red-600 font-bold shrink-0 text-sm leading-none mt-0.5"
                      aria-hidden="true"
                    >
                      ◎
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Right Expand Link (exactly like the video!) */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
              Verified Deployment
            </span>
            <Link
              href={`/services/${service.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-700 group/link transition-colors cursor-pointer ml-auto"
            >
              <span>Explore Service</span>
              <span
                className="inline-block transition-transform duration-200 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                &gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// HIGH-PRECISION ENTERPRISE VECTOR ILLUSTRATIONS
// Matching the crisp, minimalist line-art aesthetic of Accenture
// ============================================================

function PlacementIllustration() {
  return (
    <svg
      viewBox="0 0 280 140"
      className="w-full h-full max-h-36 text-slate-800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Placement Services Illustration"
    >
      {/* Background soft grid lines */}
      <line x1="20" y1="30" x2="260" y2="30" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="70" x2="260" y2="70" stroke="#e2e8f0" strokeDasharray="3 3" />
      <line x1="20" y1="110" x2="260" y2="110" stroke="#e2e8f0" strokeDasharray="3 3" />

      {/* Connection Network Lines */}
      <path
        d="M60 85 L140 45 L220 85"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M140 45 L140 105"
        stroke="#0284c7"
        strokeWidth="2"
      />

      {/* Node 1: Left - Candidate Resume File */}
      <g transform="translate(35, 55)">
        <rect x="0" y="0" width="46" height="58" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="8" y="10" width="20" height="3" rx="1.5" fill="#0284c7" />
        <rect x="8" y="18" width="30" height="2" rx="1" fill="#cbd5e1" />
        <rect x="8" y="24" width="26" height="2" rx="1" fill="#cbd5e1" />
        <rect x="8" y="30" width="22" height="2" rx="1" fill="#cbd5e1" />
        {/* Verification Checkmark Stamp */}
        <circle cx="34" cy="44" r="7" fill="#10b981" />
        <path d="M31 44 L33 46 L37 42" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Center Main Node: Professional Talent Avatar */}
      <g transform="translate(112, 16)">
        {/* Glowing Aura Ring */}
        <circle cx="28" cy="28" r="26" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Person Silhouette */}
        <circle cx="28" cy="20" r="9" fill="#0b1f3f" />
        <path
          d="M16 38 C16 31 21 28 28 28 C35 28 40 31 40 38"
          fill="#0b1f3f"
        />
        {/* Tie Accent */}
        <polygon points="28,29 30,34 28,38 26,34" fill="#f59e0b" />
        {/* Small badge */}
        <circle cx="44" cy="14" r="5" fill="#f59e0b" />
        <text x="44" y="16.5" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle">★</text>
      </g>

      {/* Node 3: Right - Enterprise Organization Network */}
      <g transform="translate(195, 55)">
        <rect x="0" y="0" width="50" height="58" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Building Windows */}
        <rect x="8" y="10" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="20" y="10" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="32" y="10" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="8" y="24" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="20" y="24" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="32" y="24" width="8" height="8" rx="1" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
        <rect x="18" y="42" width="14" height="16" rx="1" fill="#0b1f3f" />
      </g>

      {/* Floating Match Arrow */}
      <path
        d="M125 118 L140 128 L155 118"
        stroke="#0284c7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacilityIllustration() {
  return (
    <svg
      viewBox="0 0 280 140"
      className="w-full h-full max-h-36 text-slate-800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Facility Management Illustration"
    >
      {/* Background isometric grid lines */}
      <path d="M30 115 L140 60 L250 115" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Left Element: Maintenance Precision Gear */}
      <g transform="translate(38, 48)">
        <circle cx="24" cy="24" r="18" fill="#f0fdf4" stroke="#059669" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Gear Cogs */}
        <rect x="22" y="2" width="4" height="6" rx="1" fill="#059669" />
        <rect x="22" y="40" width="4" height="6" rx="1" fill="#059669" />
        <rect x="2" y="22" width="6" height="4" rx="1" fill="#059669" />
        <rect x="40" y="22" width="6" height="4" rx="1" fill="#059669" />
        {/* Sparkle cleanliness stars */}
        <path d="M44 8 Q44 14 50 14 Q44 14 44 20 Q44 14 38 14 Q44 14 44 8" fill="#f59e0b" />
      </g>

      {/* Center: Corporate Facility Tower */}
      <g transform="translate(108, 18)">
        {/* Tower Body */}
        <rect x="0" y="0" width="64" height="100" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Top Antenna */}
        <line x1="32" y1="-8" x2="32" y2="0" stroke="#0284c7" strokeWidth="2" />
        <circle cx="32" cy="-9" r="2" fill="#ef4444" />
        {/* Architectural Grid Facade */}
        <line x1="0" y1="20" x2="64" y2="20" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="40" x2="64" y2="40" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="60" x2="64" y2="60" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="80" x2="64" y2="80" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="21" y1="0" x2="21" y2="100" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="43" y1="0" x2="43" y2="100" stroke="#e2e8f0" strokeWidth="1" />
        {/* Tinted glass reflections */}
        <rect x="8" y="26" width="9" height="9" rx="1" fill="#e0f2fe" />
        <rect x="28" y="46" width="9" height="9" rx="1" fill="#e0f2fe" />
        <rect x="48" y="66" width="9" height="9" rx="1" fill="#e0f2fe" />
        {/* Revolving Entrance */}
        <rect x="24" y="85" width="16" height="15" rx="2" fill="#0b1f3f" />
      </g>

      {/* Right Element: ISO SOP Facility Checklist */}
      <g transform="translate(196, 42)">
        <rect x="0" y="0" width="48" height="64" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Clipboard Top Clip */}
        <rect x="14" y="-5" width="20" height="8" rx="2" fill="#0f172a" />
        {/* Checkmark 1 */}
        <circle cx="12" cy="18" r="4" fill="#10b981" />
        <path d="M10 18 L11.5 19.5 L14 16.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="16" width="20" height="3" rx="1" fill="#cbd5e1" />
        {/* Checkmark 2 */}
        <circle cx="12" cy="30" r="4" fill="#10b981" />
        <path d="M10 30 L11.5 31.5 L14 28.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="28" width="18" height="3" rx="1" fill="#cbd5e1" />
        {/* Checkmark 3 */}
        <circle cx="12" cy="42" r="4" fill="#10b981" />
        <path d="M10 42 L11.5 43.5 L14 40.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="40" width="16" height="3" rx="1" fill="#cbd5e1" />
      </g>
    </svg>
  );
}

function SecurityIllustration() {
  return (
    <svg
      viewBox="0 0 280 140"
      className="w-full h-full max-h-36 text-slate-800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Security & Safety Services Illustration"
    >
      {/* Background Radar Waves */}
      <circle cx="140" cy="65" r="55" stroke="#e0f2fe" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="140" cy="65" r="40" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />

      {/* Left Element: High-Tech Surveillance CCTV Camera */}
      <g transform="translate(36, 40)">
        {/* Mount Arm */}
        <path d="M10 60 L10 20 L30 20" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
        {/* Camera Enclosure */}
        <polygon points="26,12 56,22 56,38 26,30" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Lens */}
        <ellipse cx="56" cy="30" rx="3" ry="8" fill="#0284c7" stroke="#0f172a" strokeWidth="1" />
        {/* Active Infrared Indicator */}
        <circle cx="36" cy="18" r="2" fill="#ef4444" />
        {/* Signal Waves */}
        <path d="M64 24 Q68 30 64 36" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M68 20 Q74 30 68 40" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Center Main: PSARA Heraldic Shield */}
      <g transform="translate(108, 16)">
        {/* Outer Shield Path */}
        <path
          d="M32 4 C54 4 62 14 62 38 C62 66 38 88 32 94 C26 88 2 66 2 38 C2 14 10 4 32 4 Z"
          fill="#ffffff"
          stroke="#0b1f3f"
          strokeWidth="2"
        />
        {/* Inner Tinted Shield */}
        <path
          d="M32 10 C48 10 54 18 54 38 C54 62 36 80 32 86 C28 80 10 62 10 38 C10 18 16 10 32 10 Z"
          fill="#f0f9ff"
          stroke="#0284c7"
          strokeWidth="1.5"
        />
        {/* Golden PSARA Emblem Star */}
        <polygon
          points="32,24 35,32 43,32 37,38 39,46 32,41 25,46 27,38 21,32 29,32"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1"
        />
        {/* Verified Ribbon */}
        <rect x="18" y="52" width="28" height="7" rx="3.5" fill="#0b1f3f" />
        <text x="32" y="57.5" fontSize="4.5" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
          PSARA
        </text>
      </g>

      {/* Right Element: Biometric Digital Access Keypad */}
      <g transform="translate(196, 40)">
        <rect x="0" y="0" width="46" height="66" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Screen */}
        <rect x="6" y="8" width="34" height="14" rx="2" fill="#0b1f3f" />
        <rect x="10" y="13" width="16" height="4" rx="1" fill="#22c55e" />
        {/* Keypad Grid (3x3) */}
        <circle cx="13" cy="30" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="23" cy="30" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="33" cy="30" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="13" cy="40" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="23" cy="40" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="33" cy="40" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="13" cy="50" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="23" cy="50" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="33" cy="50" r="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      </g>
    </svg>
  );
}

function HorticultureIllustration() {
  return (
    <svg
      viewBox="0 0 280 140"
      className="w-full h-full max-h-36 text-slate-800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Horticulture Illustration"
    >
      {/* Landscape Contour Blueprint Curves */}
      <path d="M10 110 C80 90 140 125 270 95" stroke="#bbf7d0" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M20 125 C100 110 180 135 260 115" stroke="#dcfce7" strokeWidth="2" />

      {/* Left Element: Architectural Garden Space Planning Ruler & Angle */}
      <g transform="translate(36, 44)">
        <rect x="0" y="0" width="46" height="54" rx="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Blueprint Grid */}
        <line x1="8" y1="0" x2="8" y2="54" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="20" y1="0" x2="20" y2="54" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="32" y1="0" x2="32" y2="54" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="14" x2="46" y2="14" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="28" x2="46" y2="28" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="42" x2="46" y2="42" stroke="#e2e8f0" strokeWidth="1" />
        {/* Garden Pathway Arc */}
        <path d="M10 44 Q24 20 38 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        {/* Compass Protractor */}
        <circle cx="36" cy="44" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
      </g>

      {/* Center Main: Lush Topiary / Tree & Sustainable Ecosystem */}
      <g transform="translate(108, 16)">
        {/* Tree Trunk */}
        <rect x="29" y="58" width="6" height="38" rx="2" fill="#78350f" />
        {/* Ornamental Tree Canopies (Tri-level) */}
        <circle cx="32" cy="32" r="26" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
        <circle cx="20" cy="40" r="16" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
        <circle cx="44" cy="40" r="16" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
        <circle cx="32" cy="24" r="18" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
        {/* Organic Leaf Details */}
        <path d="M32 16 Q36 24 32 30 Q28 24 32 16" fill="#ffffff" />
        {/* Planter Box / Earth Mound */}
        <path d="M14 96 L50 96 L44 104 L20 104 Z" fill="#0b1f3f" />
      </g>

      {/* Right Element: Modern Farm Greenhouse Structure */}
      <g transform="translate(196, 44)">
        {/* Greenhouse Frame */}
        <polygon points="22,6 44,20 44,58 0,58 0,20" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        {/* Triangular Roof Ribs */}
        <line x1="22" y1="6" x2="22" y2="58" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="0" y1="20" x2="44" y2="20" stroke="#0f172a" strokeWidth="1" />
        {/* Sprouting Seedling inside */}
        <circle cx="22" cy="46" r="3" fill="#78350f" />
        <path d="M22 46 Q22 36 28 32 Q28 40 22 46" fill="#16a34a" />
        <path d="M22 46 Q22 38 16 34 Q16 42 22 46" fill="#22c55e" />
      </g>
    </svg>
  );
}
