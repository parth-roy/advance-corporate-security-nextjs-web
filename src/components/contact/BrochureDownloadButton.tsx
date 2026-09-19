"use client";

import React, { useState } from "react";
import { Download, FileText, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import PdfViewerModal from "./PdfViewerModal";

interface BrochureDownloadButtonProps {
  variant?: "hero" | "card" | "inline";
  className?: string;
}

export default function BrochureDownloadButton({
  variant = "hero",
  className = "",
}: BrochureDownloadButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Big Glossy Button element with specular top reflection, 3D gradient, and animated shimmer sweep
  const renderGlossyButton = (size: "large" | "medium" = "large") => (
    <button
      type="button"
      onClick={() => setIsModalOpen(true)}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-2xl font-roboto font-black text-navy-dark tracking-wide cursor-pointer select-none transition-all duration-300 transform active:scale-[0.98] overflow-hidden ${
        size === "large"
          ? "px-6 sm:px-8 py-4 sm:py-4.5 text-base sm:text-lg min-h-[60px] w-full sm:w-auto"
          : "px-5 py-3.5 text-sm sm:text-base min-h-[50px] w-full"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #f7d56e 0%, #fae69e 18%, #e0b445 40%, #c8993a 70%, #9e7526 100%)",
        boxShadow:
          "0 14px 35px rgba(200, 153, 58, 0.42), 0 4px 10px rgba(11, 31, 63, 0.18), inset 0 2px 2px rgba(255, 255, 255, 0.85), inset 0 -2px 4px rgba(110, 75, 15, 0.35)",
        border: "1px solid rgba(255, 235, 160, 0.7)",
      }}
      aria-label="Download Our Brochure"
    >
      {/* 1. Specular Glass Reflection Top Highlight */}
      <span
        className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/70 via-white/25 to-transparent rounded-t-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Interactive Light Sweep Shimmer Animation */}
      <span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Icon with glossy circular backdrop */}
      <span className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy text-gold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-navy-dark transition-all duration-200 shrink-0">
        <FileText className="w-5 h-5 text-gold-light" />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] shadow-sm">
          <Download className="w-2.5 h-2.5 stroke-[3]" />
        </span>
      </span>

      {/* 4. Text and Subtitle */}
      <span className="relative z-10 flex flex-col text-left">
        <span className="flex items-center gap-1.5 leading-none">
          <span className="text-navy-dark font-black tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            Download Our Brochure
          </span>
          <Sparkles className="w-4 h-4 text-amber-900/70 group-hover:rotate-12 transition-transform hidden sm:inline" />
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold text-navy-dark/75 tracking-normal mt-1 leading-none">
          Official Company Profile • PDF (2.6 MB)
        </span>
      </span>

      {/* 5. Arrow indicator */}
      <span className="relative z-10 ml-auto hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-navy/10 group-hover:bg-navy group-hover:text-gold transition-colors duration-200">
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </button>
  );

  // Variant A: Featured Hero Placement
  if (variant === "hero") {
    return (
      <>
        <div className={`mt-6 sm:mt-7 ${className}`}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {renderGlossyButton("large")}

            <div className="flex items-center gap-2 text-xs text-sky-200 font-medium px-1">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>Full Service Catalog • PSARA &amp; ISO Credentials • Pan-India Portfolio</span>
            </div>
          </div>
        </div>

        <PdfViewerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  // Variant B: Featured Sidebar Card (Right column on Contact Page)
  if (variant === "card") {
    return (
      <>
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white p-6 shadow-xl border-2 border-gold/40 group ${className}`}
        >
          {/* Subtle gold decorative glow in the corner */}
          <div
            className="absolute -top-16 -right-16 w-36 h-36 bg-gold/20 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="badge-gold text-[10px] sm:text-xs">
                📄 Official Documentation
              </span>
              <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                2026 Edition
              </span>
            </div>

            <h3 className="font-roboto font-black text-white text-lg sm:text-xl mb-1.5 leading-snug">
              Download ACS Company Brochure
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
              Instant digital access to our complete corporate credentials, service standards, empanelments, and pan-India operational footprint.
            </p>

            {/* Render the glossy button */}
            {renderGlossyButton("medium")}

            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
              <span>Format: Portable PDF</span>
              <span>Size: 2.6 MB</span>
              <span className="text-emerald-400 font-bold">100% Free</span>
            </div>
          </div>
        </div>

        <PdfViewerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  // Variant C: Compact inline button
  return (
    <>
      <div className={className}>
        {renderGlossyButton("medium")}
      </div>
      <PdfViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
