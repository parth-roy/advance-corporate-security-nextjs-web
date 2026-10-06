"use client";

// src/components/home/OurProcessSection.tsx
// ============================================================
// ACS — Our Process / From Understanding to Ongoing Excellence
// Pixel-perfect replica from reference image with mixing soft-blue background (#eaf4fc),
// single elevated white container, alternating blue/red number badges (01, 02, 03, 04),
// and royal blue connecting chevrons (>).
// ============================================================

import React from "react";
import { ChevronRight } from "lucide-react";

interface ProcessStep {
  step: string;
  badgeBg: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    badgeBg: "bg-[#0052cc]",
    title: "Requirement Analysis",
    description: "Understand your specific security, facility and manpower requirements.",
  },
  {
    step: "02",
    badgeBg: "bg-[#da1e25]",
    title: "Site Assessment",
    description: "Detailed site evaluation and customised solution design.",
  },
  {
    step: "03",
    badgeBg: "bg-[#0052cc]",
    title: "Deployment & Training",
    description: "Skilled personnel deployment with industry-specific training and orientation.",
  },
  {
    step: "04",
    badgeBg: "bg-[#da1e25]",
    title: "Ongoing Compliance & Supervision",
    description: "Continuous monitoring, compliance and statutory reporting.",
  },
];

export default function OurProcessSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-[#eaf4fc] relative"
      aria-labelledby="process-heading"
    >
      <div className="container-acs">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-5 h-[3px] bg-[#da1e25] rounded-full shrink-0" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase text-[#0d2458]">
              OUR PROCESS
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d2458] tracking-tight leading-snug font-roboto"
          >
            From Understanding to Ongoing Excellence
          </h2>
        </div>

        {/* Process Unified White Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(13,36,88,0.06)] p-6 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 items-center">
            {PROCESS_STEPS.map((item, index) => (
              <div key={item.step} className="flex items-center gap-3 relative">
                {/* Step Item */}
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  {/* Number Badge */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${item.badgeBg} text-white font-roboto font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {item.step}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#0052cc] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#0d2458]/75 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Chevron (Desktop only between items) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center pl-2 pr-1 text-[#0052cc] shrink-0" aria-hidden="true">
                    <ChevronRight className="w-5 h-5 stroke-[3]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
