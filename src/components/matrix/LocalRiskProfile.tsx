'use client';

import React from 'react';

interface LocalRiskProfileProps {
  cityName: string;
  districtName: string;
  industryName: string;
  wbRiskContext: string;
  criticalLiabilities: string[];
  statutoryRegulations: string[];
  nearbyHubs: string[];
}

export default function LocalRiskProfile({
  cityName,
  districtName,
  industryName,
  wbRiskContext,
  criticalLiabilities,
  statutoryRegulations,
  nearbyHubs,
}: LocalRiskProfileProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-200 mb-3">
            ⚠️ Operational Threat & Compliance Vulnerabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Localized Risk Assessment: {industryName} in {cityName}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Operating within the commercial and industrial corridors of <span className="font-semibold text-slate-900">{districtName} District</span> introduces acute operational hazards. A generic national security template leaves enterprises exposed to local regulatory penalties and severe material shrinkage.
          </p>
        </div>

        {/* 2-Column Risk & Regulation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Local Environmental & Operational Context */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-100 text-amber-800 text-sm">📍</span>
                Sector Operating Environment in {cityName}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                {wbRiskContext}
              </p>

              {nearbyHubs.length > 0 && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Key Corridors Under ACS Security Cordon:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {nearbyHubs.map((hub, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        <span>{hub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              Analysis calibrated for {districtName} industrial licensing zones and transport arterials.
            </div>
          </div>

          {/* Column 2: Critical Liabilities & Financial Exposure */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-red-100 text-red-800 text-sm">⚖️</span>
                Primary Liabilities for {industryName} Operations
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Without specialized, vetted security personnel, enterprises operating in {cityName} face severe legal, financial, and operational exposure:
              </p>

              <div className="space-y-3 mb-6">
                {criticalLiabilities.map((liability, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-red-100 flex items-start gap-3">
                    <span className="text-red-500 font-bold text-sm shrink-0">✕</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {liability}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              Mitigated under ACS Guaranteed Service Level Agreements (SLAs).
            </div>
          </div>
        </div>

        {/* Statutory Acts Governing this Sector in WB */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#071429] text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                Statutory Governance Framework
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Mandatory Acts & Regulations for {industryName} in West Bengal
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-sky-950 border border-sky-800 text-sky-300 text-xs font-semibold">
              Audited by ACS Legal Cell
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statutoryRegulations.map((act, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="text-sky-400 font-bold text-sm shrink-0">📜</span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  {act}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
