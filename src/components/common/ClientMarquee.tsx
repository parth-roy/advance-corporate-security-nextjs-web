"use client";

import React from "react";
import Link from "next/link";
import { CLIENTS_ROW_1, CLIENTS_ROW_2, ACSClient } from "@/lib/clients";

interface ClientMarqueeProps {
  showHeading?: boolean;
  variant?: "full" | "compact";
  bgClass?: string;
  showCta?: boolean;
}

function ClientCard({ client }: { client: ACSClient }) {
  return (
    <div className="px-2.5 py-1.5 shrink-0">
      <div className="w-[210px] sm:w-[235px] md:w-[250px] h-[190px] sm:h-[205px] bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:border-sky-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between text-center select-none">
        {/* Logo Container with crisp background */}
        <div className="w-full h-16 sm:h-20 bg-slate-50/80 rounded-xl p-2.5 flex items-center justify-center border border-slate-100/90 group-hover:bg-white group-hover:border-sky-100 transition-colors">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={client.name}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Info */}
        <div className="flex flex-col items-center justify-center flex-1 pt-1">
          <span className="inline-block text-[10px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full mb-1.5 max-w-[90%] truncate border border-sky-100/80">
            {client.tag}
          </span>
          <h4 className="font-roboto font-bold text-navy text-xs sm:text-sm leading-snug line-clamp-1 group-hover:text-sky transition-colors">
            {client.shortName}
          </h4>
          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
            {client.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientMarquee({
  showHeading = true,
  variant = "full",
  bgClass = "bg-off-white",
  showCta = true,
}: ClientMarqueeProps) {
  // Seamless loop with doubled array (moves -50%)
  const row1Items = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2Items = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section
      className={`section-py ${bgClass} overflow-hidden relative`}
      aria-labelledby="clients-marquee-heading"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container-acs relative z-10">
        {showHeading && (
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 badge-sky mb-2">
              <span className="text-xs">⭐</span>
              <span>Trusted Across India</span>
            </div>
            <h2 id="clients-marquee-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl">
              Our <span className="text-sky">Trusted Clients</span> &amp; Partners
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Proudly protecting and managing premier installations for Defence forces, Government Ministries, PSUs, Apex Research bodies, and Blue-Chip Conglomerates nationwide.
            </p>
          </div>
        )}
      </div>

      {/* Marquee Wrapper with Smooth Edge Fade */}
      <div className="relative w-full overflow-hidden group/marquee">
        {/* Left Edge Gradient Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 z-20 bg-gradient-to-r from-off-white via-off-white/80 to-transparent"
          aria-hidden="true"
        />
        {/* Right Edge Gradient Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 z-20 bg-gradient-to-l from-off-white via-off-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* ROW 1 — Sliding Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-1.5">
          {row1Items.map((client, idx) => (
            <ClientCard key={`row1-${client.id}-${idx}`} client={client} />
          ))}
        </div>

        {/* ROW 2 — Sliding Right */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-1.5 mt-1 sm:mt-2">
          {row2Items.map((client, idx) => (
            <ClientCard key={`row2-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>

      {/* Trust Badges & Action Buttons */}
      <div className="container-acs relative z-10 mt-6 sm:mt-8">
        {/* Trust Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-xs text-gray-600 font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-2xs">
            <span className="text-gold font-bold">✓</span> PSARA Licensed Pan-India
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-2xs">
            <span className="text-sky font-bold">✓</span> ISO 9001:2015 Certified
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-2xs">
            <span className="text-green-600 font-bold">✓</span> 100% PF &amp; ESIC Compliant
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-2xs">
            <span className="text-navy font-bold">✓</span> 25+ Years of Service
          </span>
        </div>

        {/* CTA Buttons */}
        {showCta && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/clients"
              className="btn-primary text-xs sm:text-sm px-6 py-2.5 shadow-md"
            >
              View Full Client Portfolio →
            </Link>
            <Link
              href="/contact"
              className="btn-navy text-xs sm:text-sm px-6 py-2.5"
            >
              Request Corporate Quote
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
