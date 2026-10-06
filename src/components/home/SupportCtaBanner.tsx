"use client";

// src/components/home/SupportCtaBanner.tsx
// ============================================================
// ACS — Bottom Support CTA Banner / Need Security, Manpower or Facility Support?
// Pixel-perfect replica from reference image with deep navy background (#012154),
// skyscraper skyline backdrop, pure white consultation button with brand red text (#da1e25),
// and phone numbers row.
// ============================================================

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function SupportCtaBanner() {
  return (
    <section
      className="relative bg-[#012154] text-white py-12 sm:py-16 overflow-hidden"
      aria-labelledby="support-cta-heading"
    >
      {/* Background Architectural Skylines with Navy Tint */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          filter: "grayscale(100%) brightness(0.7)",
        }}
        aria-hidden="true"
      />
      {/* Dark Navy Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#012154] via-[#012154]/95 to-[#071f43]/90 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-acs relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-5 h-[3px] bg-[#da1e25] rounded-full shrink-0" />
              <p className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-sky-200">
                LET&apos;S BUILD A SAFER, CLEANER AND MORE PRODUCTIVE INDIA TOGETHER
              </p>
            </div>
            <h2
              id="support-cta-heading"
              className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-snug font-roboto mb-2.5"
            >
              Need Security, Manpower or Facility Support?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Get a customised solution from our Advance Corporate Security team today.
            </p>
          </div>

          {/* Right Action & Phone Contacts */}
          <div className="flex flex-col items-start lg:items-end shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#da1e25] font-roboto font-extrabold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Direct Phone Numbers */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-white/90 mt-3.5">
              <Phone className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <a
                href="tel:+919339988999"
                className="hover:text-sky-300 transition-colors"
              >
                +91 93399 88999
              </a>
              <span className="text-white/40">|</span>
              <a
                href="tel:+917980147044"
                className="hover:text-sky-300 transition-colors"
              >
                +91 79801 47044
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
