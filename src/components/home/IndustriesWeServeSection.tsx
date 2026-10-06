"use client";

// src/components/home/IndustriesWeServeSection.tsx
// ============================================================
// ACS — Industries We Serve / Diverse Sectors. Tailored Solutions.
// Pixel-perfect replica from reference image with crisp white background (#ffffff),
// 8 square-ish cards in 1 row on desktop, centered royal blue icons, and bold navy labels.
// ============================================================

import React from "react";
import {
  Building2,
  Truck,
  Plus,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Factory,
  Home,
} from "lucide-react";

interface SectorItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const SECTORS: SectorItem[] = [
  {
    id: "corporate",
    title: "Corporate Offices",
    icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "warehousing",
    title: "Warehousing & Logistics",
    icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "hospitals",
    title: "Hospitals & Healthcare",
    icon: <Plus className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2.8} />,
  },
  {
    id: "retail",
    title: "Malls & Retail",
    icon: <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "education",
    title: "Educational Institutions",
    icon: <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "government",
    title: "Government & PSU",
    icon: <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
  {
    id: "residential",
    title: "Residential / Township",
    icon: <Home className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]" strokeWidth={2} />,
  },
];

export default function IndustriesWeServeSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
      aria-labelledby="industries-heading"
    >
      <div className="container-acs">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-5 h-[3px] bg-[#da1e25] rounded-full shrink-0" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase text-[#0d2458]">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2
            id="industries-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d2458] tracking-tight leading-snug font-roboto"
          >
            Diverse Sectors. Tailored Solutions.
          </h2>
        </div>

        {/* 8-Card Grid (8 cols on desktop, 4 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_22px_rgba(13,36,88,0.12)] hover:-translate-y-1 transition-all duration-200 p-3.5 sm:p-4 flex flex-col items-center text-center justify-center min-h-[116px] sm:min-h-[124px] group"
            >
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 shrink-0">
                {sector.icon}
              </div>
              <h3 className="text-[11px] sm:text-xs font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                {sector.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
