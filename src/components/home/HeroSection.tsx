"use client";

// src/components/home/HeroSection.tsx
// ============================================================
// ACS Hero Section — Pixel-Perfect Reference Implementation
// Image bleeds to right viewport edge, no crop, sky behind text.
// Brand Colors:
//   - Primary Corporate Navy: #0d2458 (ACS Brand Blue)
//   - Brand Red: #da1e25 (ACS Brand Red)
//   - Electric Royal Blue: #0052cc (Brand Action/Stats Blue)
//   - Soft Badge Blue: #edf6fd (Circular icon backing)
// Stats = floating card with royal blue numbers and icons,
//   corporate navy titles, and soft blue circular icon badges.
// ============================================================

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedStat from "@/components/common/AnimatedStat";

// ── STAT DATA ──────────────────────────────────────────────
const STATS = [
  {
    value: "25+",
    label: "Years of Excellence",
    subtitle: "A legacy of trust and performance",
    icon: (
      // Trophy in soft blue circle (#edf6fd) with Royal Blue Trophy icon
      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#edf6fd] flex items-center justify-center shrink-0">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
          <path
            d="M6 4h12a1 1 0 0 1 1 1v4a7 7 0 0 1-14 0V5a1 1 0 0 1 1-1Z"
            fill="#0052cc"
            fillOpacity="0.15"
          />
        </svg>
      </div>
    ),
  },
  {
    value: "5000+",
    label: "Trained Professionals",
    subtitle: "Skilled, verified and disciplined",
    icon: (
      // Clean team of 3 professionals in soft blue circle (#edf6fd)
      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#edf6fd] flex items-center justify-center shrink-0">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Center Leader / Professional */}
          <circle cx="12" cy="7" r="3" />
          <path d="M12 12c-2.7 0-5.5 1.35-5.5 3.5V18h11v-2.5c0-2.15-2.8-3.5-5.5-3.5z" />
          {/* Left Colleague */}
          <circle cx="5.5" cy="8.5" r="2.2" />
          <path d="M5.5 12.5c-1.6 0-3.5.9-3.5 2.5V17h2.8v-1.3c0-.8.4-1.5 1-2-.1-.1-.2-.2-.3-.2z" />
          {/* Right Colleague */}
          <circle cx="18.5" cy="8.5" r="2.2" />
          <path d="M18.5 12.5c.1 0 .2.1.3.2.6.5 1 1.2 1 2V17H22v-1.5c0-1.6-1.9-2.5-3.5-2.5z" />
        </svg>
      </div>
    ),
  },
  {
    value: "500+",
    label: "Clients Pan India",
    subtitle: "Serving diverse sectors across the nation",
    icon: (
      // Location pin in soft blue circle (#edf6fd) with Royal Blue Pin
      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#edf6fd] flex items-center justify-center shrink-0">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      </div>
    ),
  },
  {
    value: "50+",
    label: "Govt. & PSU Clients",
    subtitle: "Trusted by leading public sector organisations",
    icon: (
      // Government & Commercial Office Buildings in soft blue circle (#edf6fd)
      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#edf6fd] flex items-center justify-center shrink-0">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17 11V3H7v4H3v14h18V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
        </svg>
      </div>
    ),
  },
];

export default function HeroSection() {
  return (
    <div>
      {/* ══════════════════════════════════════════════════════
          HERO SECTION
          Extra bottom padding (pb-20) creates room for the
          floating stats card to overlap via -mt-14.
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-white overflow-hidden min-h-[520px] sm:min-h-[540px] lg:min-h-[560px] xl:min-h-[580px] pb-16 lg:pb-24"
        aria-labelledby="hero-heading"
      >
        {/* ── HERO IMAGE — right-anchored, positioned vertically higher ── */}
        <div
          className="absolute right-0 top-0 bottom-0 hidden lg:block pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.webp"
            alt=""
            className="h-[106%] lg:h-[108%] xl:h-[110%] w-auto block max-w-none -translate-y-4 lg:-translate-y-6 xl:-translate-y-8 object-top"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          {/* Left fade: white → transparent — sky appears behind heading text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, " +
                "white 0%, " +
                "rgba(255,255,255,0.96) 4%, " +
                "rgba(255,255,255,0.78) 12%, " +
                "rgba(255,255,255,0.48) 22%, " +
                "rgba(255,255,255,0.18) 32%, " +
                "rgba(255,255,255,0.04) 40%, " +
                "transparent 50%)",
            }}
          />
        </div>

        {/* ── LEFT TEXT CONTENT — vertically centered ── */}
        <div
          className="relative flex items-center max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 min-h-[520px] sm:min-h-[540px] lg:min-h-[560px] xl:min-h-[580px]"
          style={{ zIndex: 2 }}
        >
          <div className="w-full lg:max-w-[50%] xl:max-w-[47%] py-10 lg:py-0">

            {/* Tagline / Breadcrumb: Red dash + Royal Blue text */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-0.5 bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#0052cc] leading-none">
                People&nbsp;&nbsp;|&nbsp;&nbsp;Process&nbsp;&nbsp;|&nbsp;&nbsp;A Safer Tomorrow
              </p>
            </div>

            {/* H1 Heading: Mid dark navy blue + ACS Brand Red */}
            <h1
              id="hero-heading"
              className="font-extrabold leading-[1.15] mb-5 tracking-tight font-roboto"
              style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)" }}
            >
              <span className="text-[#0d2458]">Compliance-First Security,</span>
              <br />
              <span className="text-[#0d2458]">Facility Management &amp;</span>
              <br />
              <span className="text-[#da1e25]">Manpower Solutions.</span>
            </h1>

            {/* Description: Dark navy blue with little bold font (font-medium) */}
            <p className="text-[#0d2458] font-medium text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[490px]">
              Advance Corporate Security is a PSARA licensed and ISO
              9001:2015 certified company delivering reliable security,
              facility management and manpower outsourcing services to
              corporates, industries, government bodies and institutions
              across Kolkata and pan India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3.5 mb-7">
              {/* Primary Consultation Button in ACS Brand Red with Comment/Speech-Bubble Tail */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#da1e25] hover:bg-[#c4161d] text-white font-bold text-sm transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Request a Free Consultation</span>
                <span className="text-sm font-bold leading-none transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>

                {/* Speech Bubble / Comment Box Tail Pointer */}
                <svg
                  className="absolute -bottom-[7px] left-3 w-3.5 h-2 text-[#da1e25] group-hover:text-[#c4161d] transition-colors pointer-events-none"
                  viewBox="0 0 14 8"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0 L2 8 L13 0 Z" />
                </svg>
              </Link>

              {/* Secondary Expert Button in Royal Blue with Chat Bubble Icon */}
              <Link
                href="/contact?type=expert"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white font-bold text-sm transition-all cursor-pointer bg-white shadow-xs"
              >
                <svg
                  className="w-4 h-4 shrink-0 text-[#1d4ed8] group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span>Talk to an Expert</span>
              </Link>
            </div>

            {/* Trust row — all icons in vibrant Royal Blue, strictly in ONE LINE */}
            <div className="flex items-center flex-nowrap whitespace-nowrap gap-3 sm:gap-3.5 lg:gap-4 text-[11px] sm:text-xs text-[#0d2458] font-bold overflow-x-auto scrollbar-none py-1">
              {/* PSARA */}
              <div className="flex items-center gap-1.5 shrink-0">
                <svg
                  className="w-4 h-4 text-[#0052cc] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <span>PSARA Licensed</span>
              </div>

              <span className="w-px h-3.5 bg-slate-300 shrink-0" aria-hidden="true" />

              {/* ISO */}
              <div className="flex items-center gap-1.5 shrink-0">
                <svg
                  className="w-4 h-4 text-[#0052cc] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>ISO 9001:2015 Certified Company</span>
              </div>

              <span className="w-px h-3.5 bg-slate-300 shrink-0" aria-hidden="true" />

              {/* Location */}
              <div className="flex items-center gap-1.5 shrink-0">
                <svg
                  className="w-4 h-4 text-[#0052cc] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="block lg:hidden w-full mt-2">
          <Image
            src="/images/hero.webp"
            alt="ACS security and facility management officers"
            width={1798}
            height={875}
            className="w-full h-auto"
            priority
            quality={90}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FLOATING STATS CARD
          Negative margin pulls the card UP to overlap the hero's
          bottom padding — creating the exact floating effect.
          Numbers: Royal Blue (#0052cc)
          Labels: Corporate Navy (#0d2458) Title Case
          Icons: Royal Blue (#0052cc) with circular badges (#edf6fd)
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 pb-4">
        <div className="bg-white rounded-2xl border border-blue-100/70 shadow-[0_12px_45px_-10px_rgba(13,36,88,0.13)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-slate-100">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-5 sm:py-6"
              >
                {/* Icon Container */}
                {stat.icon}

                {/* Text Content */}
                <div className="min-w-0">
                  <AnimatedStat
                    value={stat.value}
                    label={stat.label}
                    valueClassName="text-3xl sm:text-[34px] font-black text-[#0052cc] font-roboto leading-none tracking-tight"
                    labelClassName="text-[15px] sm:text-[16px] font-bold text-[#0d2458] mt-1.5 leading-snug"
                  />
                  <p className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          OLD HERO SECTION — COMMENTED OUT (preserved for reference)
          ============================================================ */}
    </div>
  );
}
