import React from "react";
import Link from "next/link";

const FEATURED_ENTERPRISE_CLIENTS = [
  {
    name: "Indian Air Force",
    tag: "Ministry of Defence",
    logo: "/images/clients/iaf.png",
  },
  {
    name: "Hindustan Aeronautics (HAL)",
    tag: "Defence PSU",
    logo: "/images/clients/hal.jpeg",
  },
  {
    name: "Central Pollution Control Board (CPCB)",
    tag: "Ministry of Environment",
    logo: "/images/clients/cpcb.jpeg",
  },
  {
    name: "FSSAI",
    tag: "Food Safety Authority",
    logo: "/images/clients/fssai.png",
  },
  {
    name: "BSNL",
    tag: "Telecom PSU",
    logo: "/images/clients/bsnl.png",
  },
  {
    name: "Ordnance Factory Board",
    tag: "Defence Production",
    logo: "/images/clients/ofb.jpeg",
  },
] as const;

export default function EnterpriseTrustStrip() {
  return (
    <section
      aria-label="Trusted by Defence, PSU and Industrial Leaders"
      className="bg-white border-y border-slate-200/90 py-5 sm:py-6"
    >
      <div className="container-acs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Left Label */}
          <div className="shrink-0 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#da1e25] rounded-full" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0d2458]">
                GeM Empanelled • ₹1.40 Cr+ Bid Track
              </span>
            </div>
            <p className="text-xs sm:text-[13px] font-bold text-[#0d2458] leading-snug">
              Trusted by Defence Establishments, Central PSUs &amp; Industrial Parks
            </p>
          </div>

          {/* Static High-Contrast Grayscale Enterprise Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 flex-1">
            {FEATURED_ENTERPRISE_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-xl px-2.5 py-2 flex flex-col items-center justify-center text-center transition-all duration-200"
                title={`${client.name} (${client.tag})`}
              >
                <div className="h-9 sm:h-10 w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="eager"
                    decoding="async"
                    className="max-h-full max-w-[90%] object-contain grayscale contrast-125 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                  />
                </div>
                <span className="mt-1 text-[9.5px] font-bold text-slate-600 line-clamp-1">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Link */}
          <div className="shrink-0 flex lg:flex-col items-center lg:items-end justify-between gap-2">
            <Link
              href="/clients"
              className="text-[11px] font-bold text-[#0052cc] hover:text-[#0d2458] whitespace-nowrap transition-colors"
            >
              50+ Govt &amp; PSU Clients →
            </Link>
            <Link
              href="/tenders"
              className="text-[10.5px] font-semibold text-slate-500 hover:text-[#da1e25] whitespace-nowrap transition-colors"
            >
              View GeM &amp; CPPP Dossier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
