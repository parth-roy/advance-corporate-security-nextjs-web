"use client";

// src/components/home/WhyChooseSection.tsx
// ============================================================
// ACS — Why Choose Advance Corporate Security / A Partner You Can Trust
// Pixel-perfect replica from reference image with soft bluish background (#edf7fe),
// white elevated cards, filled royal blue circular badges (#0052cc), crisp white icons,
// and semi-bold corporate navy descriptions.
// ============================================================

import React from "react";
import { Shield, FileText, Landmark, ClipboardCheck, MapPin } from "lucide-react";

interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "psara",
    title: "PSARA Licensed",
    description: "Authorised and compliant security service provider.",
    icon: (
      <Shield
        className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
        strokeWidth={2.4}
        aria-hidden="true"
      />
    ),
  },
  {
    id: "iso",
    title: "ISO 9001:2015 Certified",
    description: "Quality-driven processes and continuous improvement.",
    icon: (
      <FileText
        className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    ),
  },
  {
    id: "govt",
    title: "Govt. & PSU Trusted",
    description: "Preferred partner for government departments and public sector units.",
    icon: (
      <Landmark
        className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    ),
  },
  {
    id: "control-room",
    title: "24×7 Control Room",
    description: "Round-the-clock monitoring and quick response.",
    icon: (
      <div className="w-6 h-6 rounded-full border-[2.2px] border-white flex items-center justify-center font-roboto font-black text-[10px] sm:text-[11px] text-white leading-none shrink-0">
        24
      </div>
    ),
  },
  {
    id: "compliance",
    title: "Full Statutory Compliance",
    description: "PF, ESI, labour laws and all regulatory requirements.",
    icon: (
      <ClipboardCheck
        className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    ),
  },
  {
    id: "deployment",
    title: "Rapid Deployment Pan-India Reach",
    description: "Quick mobilisation across 500+ cities and locations.",
    icon: (
      <MapPin
        className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
        strokeWidth={2.4}
        aria-hidden="true"
      />
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-[#edf7fe] relative"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-acs">
        {/* Section Header (Left-aligned with Brand Red Accent Bar) */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-5 h-[3px] bg-[#da1e25] rounded-full shrink-0" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase text-[#0d2458]">
              WHY CHOOSE ADVANCE CORPORATE SECURITY
            </span>
          </div>
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d2458] tracking-tight leading-snug font-roboto"
          >
            A Partner You Can Trust
          </h2>
        </div>

        {/* 6-Card Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100/70 shadow-[0_4px_16px_rgba(13,36,88,0.05)] hover:shadow-[0_12px_28px_rgba(13,36,88,0.11)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 sm:gap-4.5 group"
            >
              {/* Royal Blue Filled Circular Badge with White Icon */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0052cc] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-108 group-hover:bg-[#0041a8] transition-all duration-200">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-[17px] font-bold text-[#0d2458] mb-1 leading-snug group-hover:text-[#0052cc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#0d2458]/75 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
