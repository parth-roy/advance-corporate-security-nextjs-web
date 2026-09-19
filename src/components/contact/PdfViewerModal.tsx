"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl = "/downloads/ACS-Company-Brochure.pdf",
  fileName = "ACS-Company-Brochure.pdf",
}: PdfViewerModalProps) {
  // ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[900px] flex flex-col bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700/80 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-navy-dark via-navy to-navy-light text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-navy-dark shadow-md shrink-0">
              <FileText className="w-5 h-5 text-navy font-bold" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2
                  id="pdf-modal-title"
                  className="text-sm sm:text-base md:text-lg font-black font-roboto text-white truncate"
                >
                  ACS Official Company Brochure
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  PSARA &amp; ISO 9001
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-sky-200/80 truncate">
                Comprehensive 25+ Years Security &amp; Facility Management Profile (PDF • 2.6 MB)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Glossy Download Button */}
            <a
              href={pdfUrl}
              download={fileName}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-roboto font-extrabold text-xs sm:text-sm text-navy-dark overflow-hidden transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 group cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #f7e48b 30%, #c8993a 60%, #9e7526 100%)",
                boxShadow:
                  "0 6px 20px rgba(200, 153, 58, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0, 0, 0, 0.15)",
              }}
              title="Download Brochure to Device"
            >
              {/* Glossy top sheen */}
              <span
                className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/50 to-transparent rounded-t-xl pointer-events-none"
                aria-hidden="true"
              />
              <Download className="w-4 h-4 text-navy shrink-0 group-hover:translate-y-0.5 transition-transform" />
              <span className="relative z-10 font-bold tracking-tight">Download</span>
            </a>

            {/* Open in New Tab Button (Useful for Mobile/External PDF viewers) */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Notice Bar (helpful for mobile users where iframe PDF viewing varies) */}
        <div className="md:hidden bg-navy-dark/95 border-b border-sky-500/20 px-4 py-2 flex items-center justify-between text-xs text-sky-200">
          <span>Viewing PDF preview below</span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-bold underline flex items-center gap-1"
          >
            <span>Open Fullscreen</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* PDF Screen / Embed Viewport */}
        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden flex flex-col">
          <object
            data={`${pdfUrl}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              className="w-full h-full border-0 bg-white"
              title="Advance Corporate Security Company Brochure PDF"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center text-white bg-slate-900">
                <FileText className="w-16 h-16 text-gold mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">ACS Company Brochure</h3>
                <p className="text-xs text-gray-300 mb-4 max-w-sm">
                  Your device browser does not support inline PDF viewing. Please click below to download or view the brochure.
                </p>
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="btn-primary px-5 py-2.5 rounded-xl text-xs"
                >
                  Download Brochure (PDF)
                </a>
              </div>
            </iframe>
          </object>
        </div>

        {/* Bottom Footer Info Bar */}
        <div className="bg-slate-900 px-4 sm:px-6 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">Advance Corporate Security — Pan-India Workforce &amp; Facility Operations</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline">Tel: +91 94770 06681</span>
            <a
              href={pdfUrl}
              download={fileName}
              className="text-gold font-bold hover:underline inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save File</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
