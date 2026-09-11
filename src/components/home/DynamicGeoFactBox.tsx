"use client";

import React from "react";
import { useCity } from "@/context/CityContext";

export default function DynamicGeoFactBox() {
  const { currentCity } = useCity();

  const facts = [
    { label: "PSARA License", value: `Active for ${currentCity.name}, ${currentCity.state}` },
    { label: "ISO Certification", value: "ISO 9001:2015 Quality SOPs" },
    { label: "Deployment SLA", value: `24–72 hours standard in ${currentCity.name}` },
    { label: "Statutory Compliance", value: `100% PF, ESIC, ${currentCity.state} Min. Wage` },
    { label: "24×7 Operations", value: `Control Room active for ${currentCity.name}` },
    { label: "Govt. Empanelment", value: "Indian Air Force, BSF, Indian Oil, HAL" },
    { label: "Operational Hub", value: `${currentCity.name} (${currentCity.state})` },
    { label: "Pan-India Reach", value: "828 operational cities nationwide" },
  ];

  return (
    <section className="bg-sky-50/70 border-y border-sky-100 py-5" aria-label="Quick facts about ACS">
      <div className="container-acs">
        <div className="geo-fact-box">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <p className="text-xs font-bold text-sky-800 uppercase tracking-wider font-roboto flex items-center gap-1.5">
              <span>📋</span>
              <span>ACS — {currentCity.name} Deployment Hub Quick Facts (AI Overview &amp; GEO Optimized)</span>
            </p>
            <span className="text-[11px] font-bold text-sky-700 bg-sky-100/80 px-2.5 py-0.5 rounded-full">
              Region: {currentCity.state}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-sm">
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-2 items-start">
                <span className="text-sky-600 font-black text-xs shrink-0 pt-0.5">•</span>
                <div>
                  <span className="text-navy font-bold text-xs">{fact.label}:</span>{" "}
                  <span className="text-slate-600 text-xs">{fact.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
