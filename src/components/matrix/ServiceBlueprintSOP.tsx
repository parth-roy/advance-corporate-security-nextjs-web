'use client';

import React from 'react';

interface ServiceBlueprintSOPProps {
  serviceName: string;
  industryName: string;
  sopSteps: Array<{ stepNumber: number; title: string; detail: string }>;
  deployedEquipment: string[];
  personnelProfiles: string[];
  complianceGuarantees: string[];
  reportingCadence: string;
}

export default function ServiceBlueprintSOP({
  serviceName,
  industryName,
  sopSteps,
  deployedEquipment,
  personnelProfiles,
  complianceGuarantees,
  reportingCadence,
}: ServiceBlueprintSOPProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-3">
            📋 Standard Operating Procedure (SOP) Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Operational Blueprint: {serviceName} for {industryName}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every deployment follows strict ISO 9001:2015 quality workflows. From pre-shift roll call to post-incident forensic logging, our operational cadence ensures seamless integration with your facility team.
          </p>
        </div>

        {/* 4-Step SOP Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sopSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-sky-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b1f3f] to-[#1a3660] text-amber-400 font-bold text-base flex items-center justify-center shadow-md">
                    0{step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                    Phase {step.stepNumber}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-sky-600 font-medium">
                Mandatory ACS Protocol
              </div>
            </div>
          ))}
        </div>

        {/* 3-Column Specifications: Equipment, Personnel, Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8 rounded-2xl bg-[#0b1f3f] text-white">
          {/* Col 1: Deployed Equipment */}
          <div>
            <h3 className="text-base font-bold text-amber-400 mb-4 flex items-center gap-2">
              <span>🛠️</span> Deployed Equipment & Gear
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {deployedEquipment.map((eq, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Personnel Profile Standards */}
          <div>
            <h3 className="text-base font-bold text-sky-300 mb-4 flex items-center gap-2">
              <span>👤</span> Personnel Profile Standards
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {personnelProfiles.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Reporting & Governance Cadence */}
          <div>
            <h3 className="text-base font-bold text-purple-300 mb-4 flex items-center gap-2">
              <span>📊</span> Reporting Cadence & Audits
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 mb-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">Audit Schedule</span>
              <p className="text-xs sm:text-sm text-white font-medium">
                {reportingCadence}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              {complianceGuarantees.map((cg, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>{cg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
