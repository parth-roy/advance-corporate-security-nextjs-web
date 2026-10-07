'use client';

import React from 'react';

interface LocalCaseEvidenceProps {
  cityName: string;
  districtName: string;
  industryName: string;
  kpisGuaranteed: Array<{ metric: string; target: string; description: string }>;
  caseStudy?: {
    title: string;
    clientType: string;
    challenge: string;
    solution: string;
    result: string;
  };
  procurementChecklist: string[];
}

export default function LocalCaseEvidence({
  cityName,
  districtName,
  industryName,
  kpisGuaranteed,
  caseStudy,
  procurementChecklist,
}: LocalCaseEvidenceProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200 mb-3">
            🏆 Track Record & Institutional Evidence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Proven Performance & Case Evidence in {districtName}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            With 25+ years in continuous operation across Eastern India and over 5,000 deployed personnel, ACS provides verifiable proof of performance rather than unbacked claims.
          </p>
        </div>

        {/* 3 KPI Guaranteed Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kpisGuaranteed.map((kpi, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 border border-slate-200/80 shadow-sm"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] block mb-2">
                {kpi.target}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {kpi.metric}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {kpi.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study Feature & Procurement Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Detailed Case Study (2 cols) */}
          {caseStudy && (
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-slate-900 uppercase">
                    Representative Case Study
                  </span>
                  <span className="text-xs text-slate-400">
                    {caseStudy.clientType}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  {caseStudy.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-6">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <strong className="text-amber-300 block mb-1">The Operational Challenge:</strong>
                    <p className="leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <strong className="text-sky-300 block mb-1">The ACS Tactical Deployment:</strong>
                    <p className="leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-200 text-xs sm:text-sm font-medium">
                🎯 <strong className="text-white">Measurable Outcome:</strong> {caseStudy.result}
              </div>
            </div>
          )}

          {/* Right: Procurement Officer's Vetting Checklist (1 col) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm">📁</span>
                <h3 className="text-base font-bold text-slate-900">
                  Procurement Vetting Checklist
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Before awarding any security or facility contract in {cityName}, ensure your selected agency fulfills these mandatory prerequisites:
              </p>

              <div className="space-y-2.5 mb-6">
                {procurementChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                100% Fulfilled by ACS
              </span>
              <span className="text-[11px] text-slate-500">
                All certificates available for immediate inspection upon request.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
