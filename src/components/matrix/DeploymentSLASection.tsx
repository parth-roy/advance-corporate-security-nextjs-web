'use client';

import React from 'react';
import Link from 'next/link';

interface DeploymentSLASectionProps {
  cityName: string;
  districtName: string;
  nearestHQ: string;
  deploymentSlaHours: number;
  policeJurisdiction: string;
  phone?: string;
  email?: string;
}

export default function DeploymentSLASection({
  cityName,
  districtName,
  nearestHQ,
  deploymentSlaHours,
  policeJurisdiction,
  phone = '+91 93399 88999',
  email = 'advancedcorporatesecurityj@gmail.com',
}: DeploymentSLASectionProps) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            ⚡ Guaranteed Service Level Agreements (SLAs)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Deployment Infrastructure & SLA Commitments: {cityName}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlike distant brokerage agencies, ACS operates regional operational hubs across West Bengal. Our proximity to {cityName} guarantees lightning-fast mobilization and seamless emergency escalation.
          </p>
        </div>

        {/* 4-Card SLA Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* SLA Card 1: Initial Deployment Mobilization */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl font-extrabold text-[#0b1f3f] block mb-1">
                {deploymentSlaHours}h - 24h
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">
                Deployment Mobilization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained personnel staged at our regional hub ready for deployment within {deploymentSlaHours} hours of contract signing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>✓ Guaranteed Response</span>
            </div>
          </div>

          {/* SLA Card 2: Guard Replacement SLA */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl font-extrabold text-[#0b1f3f] block mb-1">
                &lt; 4 Hours
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">
                Relief Guard Replacement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guaranteed replacement within 4 hours if any deployed guard is absent or deemed unsatisfactory by the client.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>✓ 100% Buffer Manning</span>
            </div>
          </div>

          {/* SLA Card 3: Supervisory Audits */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl font-extrabold text-[#0b1f3f] block mb-1">
                2x Weekly
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">
                Surprise Field Officer Audits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobile Field Officers conduct unannounced day and midnight turn-out audits to ensure 100% vigilance and zero lapses.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>✓ Digital Night Wand Reports</span>
            </div>
          </div>

          {/* SLA Card 4: 24x7 Control Room Escalation */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl font-extrabold text-[#0b1f3f] block mb-1">
                &lt; 60 Secs
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-2">
                Emergency Control Room Pickup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct hotline to ACS 24x7 Central Operations Command with instant police and fire brigade dispatch integration.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>✓ 24×7 Active Command</span>
            </div>
          </div>
        </div>

        {/* Local Command Details Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Operational Command Node for {districtName} District
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {nearestHQ}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Liaison Desk with <strong className="text-slate-800">{policeJurisdiction}</strong> for swift FIR support & legal backup.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl bg-[#0b1f3f] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a3660] transition-colors text-center"
            >
              📞 Call Command Desk
            </a>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors border border-slate-200 text-center"
            >
              Request Site Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
