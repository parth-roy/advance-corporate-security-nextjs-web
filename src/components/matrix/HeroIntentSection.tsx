'use client';

import React from 'react';
import Link from 'next/link';
import { BuyerIntentType, getBuyerIntent } from '@/lib/data/buyer-intents';

interface HeroIntentSectionProps {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  districtName: string;
  industryName: string;
  industrySlug: string;
  wageZone: 'A' | 'B';
  nearestHQ: string;
  slaHours: number;
  intentId: BuyerIntentType;
  h1: string;
  nearbyHubs: string[];
}

export default function HeroIntentSection({
  serviceName,
  serviceSlug,
  cityName,
  citySlug,
  districtName,
  industryName,
  industrySlug,
  wageZone,
  nearestHQ,
  slaHours,
  intentId,
  h1,
  nearbyHubs,
}: HeroIntentSectionProps) {
  const intent = getBuyerIntent(intentId);

  return (
    <section className="relative bg-gradient-to-b from-[#071429] via-[#0b1f3f] to-[#0d2347] text-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-sky-500/20">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-300 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="text-slate-500">/</span>
          <Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link>
          <span className="text-slate-500">/</span>
          <Link href={`/services/${serviceSlug}`} className="hover:text-sky-400 transition-colors">{serviceName}</Link>
          <span className="text-slate-500">/</span>
          <Link href={`/services/${serviceSlug}/${citySlug}`} className="hover:text-sky-400 transition-colors">{cityName}</Link>
          <span className="text-slate-500">/</span>
          <span className="text-amber-400 font-medium">{industryName}</span>
        </nav>

        {/* Intent Badge & Statutory Wage Notification */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {intent.badgeText}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            🛡️ WB Wage Zone {wageZone} Compliant
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ⚡ {slaHours}h Deployment SLA
          </span>
        </div>

        {/* Dynamic H1 Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {h1}
        </h1>

        {/* Dynamic Sub-headline with localized hub citations */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-4xl mb-8 leading-relaxed">
          Advance Corporate Security (ACS) delivers battle-tested, PSARA-licensed <span className="text-sky-300 font-semibold">{serviceName}</span> specifically tailored for the <span className="text-amber-300 font-semibold">{industryName}</span> sector in <span className="text-white font-bold">{cityName} ({districtName} District)</span>. Fully backed by our <span className="text-slate-100">{nearestHQ}</span> command post with 100% statutory adherence to West Bengal Minimum Wage Zone {wageZone}.
        </p>

        {/* Local Industrial Hubs Served in this Area */}
        {nearbyHubs && nearbyHubs.length > 0 && (
          <div className="mb-8 p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-sm max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              📍 Immediate Corridors & Industrial Hubs Served:
            </span>
            <div className="flex flex-wrap gap-2">
              {nearbyHubs.map((hub, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-xs text-sky-200 border border-slate-700">
                  {hub}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          <Link
            href={`/quote?service=${serviceSlug}&city=${citySlug}&industry=${industrySlug}&intent=${intentId}`}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-[0.98]"
          >
            {intent.primaryCtaText} &rarr;
          </Link>
          <a
            href="tel:+919339988999"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-600 transition-all duration-200"
          >
            📞 +91 93399 88999 (24×7 Rapid Response)
          </a>
        </div>

        {/* Trust Credentials Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-lg">✓</span>
            <div>
              <p className="font-semibold text-white">PSARA Licensed</p>
              <p className="text-slate-400 text-xs">West Bengal Controlling Authority</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sky-400 text-lg">✓</span>
            <div>
              <p className="font-semibold text-white">ISO 9001:2015</p>
              <p className="text-slate-400 text-xs">Certified Quality Systems</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 text-lg">✓</span>
            <div>
              <p className="font-semibold text-white">Zero Legal Liability</p>
              <p className="text-slate-400 text-xs">100% EPF/ESIC/LWF Deposit</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-lg">✓</span>
            <div>
              <p className="font-semibold text-white">25+ Years Legacy</p>
              <p className="text-slate-400 text-xs">5,000+ Deployed Workforce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
