"use client";

// src/components/home/TrustedOrganisationsSection.tsx
// ============================================================
// ACS — Trusted by Leading Organisations / Serving India's Most Respected Institutions
// Pixel-perfect replica from reference image with soft bluish background (#eef8ff),
// 6 horizontal white pill cards with dark navy icons and bold 2-line labels.
// ============================================================

import React from "react";
import { Shield, Landmark, Factory, Building2, GraduationCap, Plus } from "lucide-react";

interface InstitutionItem {
  id: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}

const INSTITUTIONS: InstitutionItem[] = [
  {
    id: "defence",
    line1: "Defence",
    line2: "Establishments",
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.2} />,
  },
  {
    id: "govt",
    line1: "Government",
    line2: "Departments",
    icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.2} />,
  },
  {
    id: "psu",
    line1: "PSUs",
    line2: "& Public Sector",
    icon: <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.2} />,
  },
  {
    id: "corporate",
    line1: "Corporate",
    line2: "Enterprises",
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.2} />,
  },
  {
    id: "education",
    line1: "Educational",
    line2: "Institutions",
    icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.2} />,
  },
  {
    id: "healthcare",
    line1: "Healthcare",
    line2: "Institutions",
    icon: <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2458]" strokeWidth={2.8} />,
  },
];

export default function TrustedOrganisationsSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-[#eef8ff] relative"
      aria-labelledby="trusted-orgs-heading"
    >
      <div className="container-acs">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-5 h-[3px] bg-[#da1e25] rounded-full shrink-0" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase text-[#0d2458]">
              TRUSTED BY LEADING ORGANISATIONS
            </span>
          </div>
          <h2
            id="trusted-orgs-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d2458] tracking-tight leading-snug font-roboto"
          >
            Serving India&apos;s Most Respected Institutions
          </h2>
        </div>

        {/* 6 Horizontal Pill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-blue-100/90 shadow-[0_2px_10px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_20px_rgba(13,36,88,0.1)] hover:-translate-y-0.5 transition-all p-3 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 min-h-[64px] group"
            >
              <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                {inst.icon}
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] sm:text-xs font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  {inst.line1}
                </span>
                <span className="block text-[11px] sm:text-xs font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  {inst.line2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
