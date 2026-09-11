"use client";

// src/components/layout/FloatingContact.tsx
// ============================================================
// ACS — Floating Contact Badges (MetroMitra Architecture)
// Floating Call & WhatsApp badges on right side for desktop,
// sticky bottom quick-action bar for mobile.
// Primary Contact: tel:+917980147044
// ============================================================

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import WhatsAppIntentModal from "@/components/common/WhatsAppIntentModal";

export default function FloatingContact() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppIntent, setWhatsAppIntent] = useState<
    "SECURITY" | "FACILITY" | "MANPOWER" | "SUPPORT"
  >("SECURITY");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{
        intent?: "SECURITY" | "FACILITY" | "MANPOWER" | "SUPPORT";
      }>;
      if (customEvent?.detail?.intent) {
        setWhatsAppIntent(customEvent.detail.intent);
      }
      setIsWhatsAppModalOpen(true);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("open_whatsapp_modal", handleOpen);
      return () => window.removeEventListener("open_whatsapp_modal", handleOpen);
    }
  }, []);

  return (
    <>
      {/* Mobile Sticky Bottom Bar (MetroMitra / GoMyTruck Architecture) */}
      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(11,31,63,0.14)] md:hidden">
        <a
          href="tel:+917980147044"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-navy bg-white px-3 py-2.5 text-xs sm:text-sm font-extrabold text-navy active:scale-95 transition-transform"
          aria-label="Call ACS Central Desk"
        >
          <Phone className="w-4 h-4 text-navy" />
          <span>Call Now</span>
        </a>
        <button
          type="button"
          onClick={() => {
            setWhatsAppIntent("SECURITY");
            setIsWhatsAppModalOpen(true);
          }}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-3 py-2.5 text-xs sm:text-sm font-extrabold text-white cursor-pointer active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span>WhatsApp Desk</span>
        </button>
      </div>

      {/* Desktop Floating Badges (Right Side) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-[60] flex-col gap-3.5 items-end">
        {/* WhatsApp Badge */}
        <div className="relative group flex items-center">
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/90 backdrop-blur-xs px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all group-hover:opacity-100 group-hover:-translate-x-1">
            WhatsApp Desk
          </span>
          <button
            type="button"
            onClick={() => {
              setWhatsAppIntent("SECURITY");
              setIsWhatsAppModalOpen(true);
            }}
            className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-200 cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </button>
        </div>

        {/* Call Badge */}
        <div className="relative group flex items-center">
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/90 backdrop-blur-xs px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all group-hover:opacity-100 group-hover:-translate-x-1">
            Call: +91 79801 47044
          </span>
          <a
            href="tel:+917980147044"
            className="w-13 h-13 sm:w-14 sm:h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(11,31,63,0.35)] hover:bg-navy-dark hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,31,63,0.5)] border border-sky-400/30 transition-all duration-200 cursor-pointer"
            aria-label="Call ACS: +91 79801 47044"
          >
            <Phone className="w-6 h-6 text-gold" />
          </a>
        </div>
      </div>

      {/* WhatsApp Intent Modal */}
      <WhatsAppIntentModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialIntent={whatsAppIntent}
      />
    </>
  );
}
