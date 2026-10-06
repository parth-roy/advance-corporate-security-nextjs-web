"use client";

// src/components/home/CorporateTrustSuite.tsx
// ============================================================
// ACS — Corporate Trust & Solutions Suite (Pixel-Perfect Replica)
// Replicates the exact layout, colors, compact pacing, icons, and background tones
// from reference image (media_1791274870748.png):
// 1. Why Choose Advance Corporate Security (#edf7fe)
// 2. Industries We Serve (#ffffff)
// 3. Trusted by Leading Organisations (#edf7fe)
// 4. Our Process (#edf7fe)
// 5. Need Security, Manpower or Facility Support? CTA Banner (#012154)
// ============================================================

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Phone } from "lucide-react";

export default function CorporateTrustSuite() {
  return (
    <div className="w-full select-none">
      {/* ════════════════════════════════════════════════════════
          1. WHY CHOOSE ADVANCE CORPORATE SECURITY (#edf7fe)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#edf7fe] pt-6 pb-6 sm:pt-7 sm:pb-7 border-t border-blue-100/60" aria-labelledby="why-choose-heading">
        <div className="container-acs">
          {/* Header */}
          <div className="mb-4 sm:mb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
                WHY CHOOSE ADVANCE CORPORATE SECURITY
              </span>
            </div>
            <h2 id="why-choose-heading" className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto">
              A Partner You Can Trust
            </h2>
          </div>

          {/* 6 Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Card 1: PSARA Licensed */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 5.5v5.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5.5L12 2z" fill="#0052cc" />
                  <path d="M9 11.5l2 2 4.5-4.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  PSARA Licensed
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  Authorised and compliant security service provider.
                </p>
              </div>
            </div>

            {/* Card 2: ISO 9001:2015 Certified */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#0052cc" />
                  <path d="M14 2v6h6" fill="#003d99" />
                  <path d="M8 12h8M8 15h8M8 18h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  Quality-driven processes and continuous improvement.
                </p>
              </div>
            </div>

            {/* Card 3: Govt. & PSU Trusted */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0052cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h2v-8H5zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zM2 20v2h20v-2H2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  Govt. &amp; PSU Trusted
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  Preferred partner for government departments and public sector units.
                </p>
              </div>
            </div>

            {/* Card 4: 24x7 Control Room */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0052cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2l-1.2 1.2c-.4.4-.1 1.1.5 1.1h4.5c.6 0 1-.4 1-1v-4.5c0-.6-.7-.9-1.1-.5l-1.3 1.3C5.1 13.7 4.7 12.4 4.7 11c0-4 3.3-7.3 7.3-7.3s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3c-1.4 0-2.7-.4-3.8-1.1-.4-.3-1-.1-1.3.3s-.1 1 .3 1.3C8.6 21.4 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  <text x="12" y="15.5" textAnchor="middle" fill="#0052cc" fontSize="9" fontWeight="900" fontFamily="sans-serif">24</text>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  24×7 Control Room
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  Round-the-clock monitoring and quick response.
                </p>
              </div>
            </div>

            {/* Card 5: Full Statutory Compliance */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="3" width="16" height="18" rx="3" fill="#0052cc" />
                  <rect x="8" y="1.5" width="8" height="3" rx="1.5" fill="#003d99" />
                  <path d="M8.5 12.5l2.5 2.5 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  Full Statutory Compliance
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  PF, ESI, labour laws and all regulatory requirements.
                </p>
              </div>
            </div>

            {/* Card 6: Rapid Deployment Pan-India Reach */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100/70 shadow-[0_2px_12px_rgba(13,36,88,0.05)] hover:shadow-[0_8px_24px_rgba(13,36,88,0.09)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e8f3fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0052cc" />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0d2458] mb-0.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  Rapid Deployment Pan-India Reach
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-[#0d2458]/75 font-medium leading-relaxed">
                  Quick mobilisation across 500+ cities and locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. INDUSTRIES WE SERVE (#ffffff pure white tone)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white py-6 sm:py-7 border-t border-slate-100" aria-labelledby="industries-heading">
        <div className="container-acs">
          {/* Header */}
          <div className="mb-3.5 sm:mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 id="industries-heading" className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto">
              Diverse Sectors. Tailored Solutions.
            </h2>
          </div>

          {/* 8 Sector Cards in 1 Row on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {/* 1. Corporate Offices */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 3h8v18H4V3zm10 6h6v12h-6V9zM6 5v2h4V5H6zm0 4v2h4V9H6zm0 4v2h4v-2H6zm0 4v2h4v-2H6zm10-2v2h2v-2h-2zm0 4v2h2v-2h-2z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Corporate<br />Offices
              </span>
            </div>

            {/* 2. Warehousing & Logistics */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Warehousing &amp;<br />Logistics
              </span>
            </div>

            {/* 3. Hospitals & Healthcare */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Hospitals &amp;<br />Healthcare
              </span>
            </div>

            {/* 4. Malls & Retail */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Malls &amp;<br />Retail
              </span>
            </div>

            {/* 5. Educational Institutions */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5l-6-3.27V17c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.77l-6 3.27z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Educational<br />Institutions
              </span>
            </div>

            {/* 6. Government & PSU */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h2v-8H5zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zM2 20v2h20v-2H2z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Government<br />&amp; PSU
              </span>
            </div>

            {/* 7. Manufacturing & Industrial */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 22H2V10l7 3V7l7 3V2l6 3v17zm-14-3h2v-2H8v2zm0-4h2v-2H8v2zm6 4h2v-2h-2v2zm0-4h2v-2h-2v2z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Manufacturing<br />&amp; Industrial
              </span>
            </div>

            {/* 8. Residential / Township */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_8px_18px_rgba(13,36,88,0.1)] hover:-translate-y-1 transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center justify-center min-h-[105px] group">
              <svg className="w-7 h-7 text-[#0052cc] mb-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                Residential /<br />Township
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. TRUSTED BY LEADING ORGANISATIONS (#edf7fe soft tone)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#edf7fe] py-6 sm:py-7 border-t border-blue-100/60" aria-labelledby="trusted-orgs-heading">
        <div className="container-acs">
          {/* Header */}
          <div className="mb-3.5 sm:mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
                TRUSTED BY LEADING ORGANISATIONS
              </span>
            </div>
            <h2 id="trusted-orgs-heading" className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto">
              Serving India&apos;s Most Respected Institutions
            </h2>
          </div>

          {/* 6 Horizontal Pill Cards in 1 Row on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {/* 1. Defence Establishments */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.76 7.96-6 8.99-3.24-1.03-6-4.85-6-8.99V6.43l6-2.25z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  Defence<br />Establishments
                </span>
              </div>
            </div>

            {/* 2. Government Departments */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h2v-8H5zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zM2 20v2h20v-2H2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  Government<br />Departments
                </span>
              </div>
            </div>

            {/* 3. PSUs & Public Sector */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 22H2V10l7 3V7l7 3V2l6 3v17zm-14-3h2v-2H8v2zm0-4h2v-2H8v2zm6 4h2v-2h-2v2zm0-4h2v-2h-2v2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  PSUs<br />&amp; Public Sector
                </span>
              </div>
            </div>

            {/* 4. Corporate Enterprises */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 3h8v18H4V3zm10 6h6v12h-6V9zM6 5v2h4V5H6zm0 4v2h4V9H6zm0 4v2h4v-2H6zm0 4v2h4v-2H6zm10-2v2h2v-2h-2zm0 4v2h2v-2h-2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  Corporate<br />Enterprises
                </span>
              </div>
            </div>

            {/* 5. Educational Institutions */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5l-6-3.27V17c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.77l-6 3.27z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  Educational<br />Institutions
                </span>
              </div>
            </div>

            {/* 6. Healthcare Institutions */}
            <div className="bg-white rounded-xl border border-blue-100/80 shadow-[0_2px_8px_rgba(13,36,88,0.04)] hover:shadow-[0_6px_16px_rgba(13,36,88,0.08)] hover:-translate-y-0.5 transition-all p-2.5 sm:p-3 flex items-center gap-2.5 min-h-[58px] group">
              <div className="w-9 h-9 rounded-full bg-[#eef6fe] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-[#0d2458]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold text-[#0d2458] leading-tight group-hover:text-[#0052cc] transition-colors">
                  Healthcare<br />Institutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4. OUR PROCESS (#edf7fe matching tone)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#edf7fe] pt-4 pb-7 sm:pt-5 sm:pb-8" aria-labelledby="process-heading">
        <div className="container-acs">
          {/* Header */}
          <div className="mb-3.5 sm:mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
                OUR PROCESS
              </span>
            </div>
            <h2 id="process-heading" className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto">
              From Understanding to Ongoing Excellence
            </h2>
          </div>

          {/* Unified White Card Container */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(13,36,88,0.05)] p-4 sm:p-5 lg:px-6 lg:py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 items-center">
              {/* Step 01 */}
              <div className="flex items-center gap-2.5 relative">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0052cc] text-white font-roboto font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    01
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13.5px] font-bold text-[#0052cc] mb-0.5 leading-snug">
                      Requirement Analysis
                    </h3>
                    <p className="text-[11px] text-[#0d2458]/75 font-medium leading-relaxed">
                      Understand your specific security, facility and manpower requirements.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center pl-1 text-[#0052cc] shrink-0" aria-hidden="true">
                  <ChevronRight className="w-4.5 h-4.5 stroke-[3]" />
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-center gap-2.5 relative">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#da1e25] text-white font-roboto font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    02
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13.5px] font-bold text-[#0052cc] mb-0.5 leading-snug">
                      Site Assessment
                    </h3>
                    <p className="text-[11px] text-[#0d2458]/75 font-medium leading-relaxed">
                      Detailed site evaluation and customised solution design.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center pl-1 text-[#0052cc] shrink-0" aria-hidden="true">
                  <ChevronRight className="w-4.5 h-4.5 stroke-[3]" />
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-center gap-2.5 relative">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0052cc] text-white font-roboto font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13.5px] font-bold text-[#0052cc] mb-0.5 leading-snug">
                      Deployment &amp; Training
                    </h3>
                    <p className="text-[11px] text-[#0d2458]/75 font-medium leading-relaxed">
                      Skilled personnel deployment with industry-specific training and orientation.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center pl-1 text-[#0052cc] shrink-0" aria-hidden="true">
                  <ChevronRight className="w-4.5 h-4.5 stroke-[3]" />
                </div>
              </div>

              {/* Step 04 */}
              <div className="flex items-center gap-2.5 relative">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#da1e25] text-white font-roboto font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    04
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13.5px] font-bold text-[#0052cc] mb-0.5 leading-snug">
                      Ongoing Compliance &amp; Supervision
                    </h3>
                    <p className="text-[11px] text-[#0d2458]/75 font-medium leading-relaxed">
                      Continuous monitoring, compliance and statutory reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. BOTTOM SUPPORT CTA BANNER (#012154 Deep Blue)
      ════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#012154] text-white py-6 sm:py-7 overflow-hidden" aria-labelledby="support-cta-heading">
        {/* Subtle city skyscraper backdrop */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.webp')",
            filter: "grayscale(100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012154] via-[#012154]/95 to-[#071f43]/90 pointer-events-none" aria-hidden="true" />

        <div className="container-acs relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-sky-200">
                  LET&apos;S BUILD A SAFER, CLEANER AND MORE PRODUCTIVE INDIA TOGETHER
                </p>
              </div>
              <h2 id="support-cta-heading" className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-snug font-roboto mb-1.5">
                Need Security, Manpower or Facility Support?
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed">
                Get a customised solution from our Advance Corporate Security team today.
              </p>
            </div>

            {/* Right Action Button & Direct Contacts */}
            <div className="flex flex-col items-start lg:items-end shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#da1e25] font-roboto font-extrabold text-[13px] sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Direct Phone Numbers */}
              <div className="flex items-center gap-2 text-xs font-semibold text-white/90 mt-2.5">
                <Phone className="w-3.5 h-3.5 text-white/80 shrink-0" />
                <a href="tel:+919339988999" className="hover:text-sky-300 transition-colors">
                  +91 93399 88999
                </a>
                <span className="text-white/40">|</span>
                <a href="tel:+917980147044" className="hover:text-sky-300 transition-colors">
                  +91 79801 47044
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
