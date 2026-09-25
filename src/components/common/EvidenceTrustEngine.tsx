"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

interface EvidenceTrustEngineProps {
  cityName?: string;
  stateName?: string;
  serviceName?: string;
  showTitle?: boolean;
}

export default function EvidenceTrustEngine({
  cityName,
  stateName,
  serviceName,
  showTitle = true,
}: EvidenceTrustEngineProps) {
  const [activeTab, setActiveTab] = useState<"authority" | "deployment" | "experience" | "compliance">("authority");

  const locationContext = cityName && stateName ? `${cityName}, ${stateName}` : cityName || stateName || "Pan-India";
  const stateContext = stateName || "State Government";

  // 15 Parameter Definitions
  const parameters = [
    {
      id: 1,
      name: "PSARA Jurisdiction",
      badge: "Form-V Licensed",
      summary: `Compliant under Private Security Agencies (Regulation) Act 2005. Recognized by the Controlling Authority & Home Department for verified states (WB, Delhi, Jharkhand) with state-wise statutory deployment in ${stateContext}.`,
      category: "authority",
    },
    {
      id: 2,
      name: "ISO Certification",
      badge: "ISO 9001:2015",
      summary: "Quality Management System certified with IAF/IAS international accreditation for security guarding and integrated facility management.",
      category: "authority",
    },
    {
      id: 3,
      name: "Years of Operation",
      badge: "Since 2000 (25+ Yrs)",
      summary: "Over a quarter-century of continuous, unblemished operations in enterprise security, industrial guarding, and facility governance.",
      category: "authority",
    },
    {
      id: 4,
      name: "Operational Hub",
      badge: `${cityName ? cityName + " Regional Hub" : "Zonal Command"}`,
      summary: `Dedicated operational office and 24x7 control room servicing ${locationContext} with resident field supervisors and night checking officers.`,
      category: "authority",
    },
    {
      id: 5,
      name: "Service Coverage",
      badge: "828+ Cities Pan-India",
      summary: `Seamless deployment across all commercial districts, industrial corridors, SEZs, tech corridors, and suburban belts in ${locationContext}.`,
      category: "authority",
    },
    {
      id: 6,
      name: "Actual Site Capability",
      badge: "1 to 500+ Guards",
      summary: "Equipped to deploy turnkey security detachments from single-guard posts to 500+ security personnel with complete uniforms, batons, metal detectors, and tactical gear within 24–72 hours.",
      category: "deployment",
    },
    {
      id: 7,
      name: "Industry Experience",
      badge: "12+ Core Sectors",
      summary: "Cross-sector mastery covering Defence cantonments, oil refineries, heavy industrial plants, IT parks, tertiary hospitals, shopping malls, and high-rise gated communities.",
      category: "experience",
    },
    {
      id: 8,
      name: "Real Case Studies",
      badge: "Verifiable SLAs",
      summary: "Documented success stories including zero-theft records on 100-acre industrial plants, mob de-escalation in 600-bed hospitals, and high-security VIP summits.",
      category: "experience",
    },
    {
      id: 9,
      name: "Deployment Process",
      badge: "4-Stage SLA",
      summary: "Systematic 4-stage onboarding: 1. Vulnerability Site Survey ➔ 2. Post Orders & SLA Formulation ➔ 3. Police Vetting & Guard Drill ➔ 4. Day-1 Handover & Supervisor Roll-call.",
      category: "deployment",
    },
    {
      id: 10,
      name: "Compliance Documents",
      badge: "100% Audit Ready",
      summary: "Complete downloadable audit dossier: PSARA Form V, EPF TRRN challans, ESIC Form 5, CLRA Form V, GST returns, and UDIN-certified CA turnover certificates.",
      category: "compliance",
    },
    {
      id: 11,
      name: "Client References",
      badge: "PSU & MNC Benchmarks",
      summary: "High-reputation enterprise client roster spanning Central Government secretariats, Navratna PSUs, tier-1 tech campuses, and healthcare networks.",
      category: "experience",
    },
    {
      id: 12,
      name: "Govt/PSU Procurement",
      badge: "GeM Empanelled",
      summary: "Active GeM registered vendor, Central Public Procurement Portal (CPPP) bidder, and state e-tender qualified contractor with MSME advantages.",
      category: "compliance",
    },
    {
      id: 13,
      name: "Local Wage & Compliance",
      badge: `${stateContext} Wage Act`,
      summary: `Strict statutory adherence to ${stateContext} Minimum Wages Act + Variable Dearness Allowance (VDA), 13% EPF, 3.25% ESIC, 8.33% Bonus, and paid weekly off relievers.`,
      category: "compliance",
    },
    {
      id: 14,
      name: "Response Process",
      badge: "3-Tier SLA Escalation",
      summary: "Tier 1: On-site supervisor within 15 mins. Tier 2: Area Field Officer on-scene within 45 mins. Tier 3: Central Command QRT & Operations Director within 2 hours.",
      category: "deployment",
    },
    {
      id: 15,
      name: "Quotation Process",
      badge: "24-Hr Itemized Quote",
      summary: "Complimentary on-site security vulnerability audit followed by a transparent, fully itemized statutory commercial quotation within 24 to 48 hours.",
      category: "deployment",
    },
  ];

  return (
    <section className="section-py bg-slate-50 border-t border-b border-slate-200" aria-label="ACS Trust & Evidence Database">
      <div className="container-acs">
        {showTitle && (
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/15 text-navy text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              15-Parameter Enterprise Trust &amp; Evidence Engine
            </div>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-extrabold tracking-tight">
              Enterprise Trust &amp; Verifiable Compliance —{" "}
              <span className="text-sky">{locationContext}</span>
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every deployment by Advance Corporate Security is backed by our rigorous 15-parameter compliance framework, ensuring complete legal indemnity, flawless statutory filings, and zero procurement risk.
            </p>
          </div>
        )}

        {/* 15 Parameter Quick Audit Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-10">
          {parameters.map((p) => (
            <div
              key={p.id}
              className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs hover:border-sky-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                  #{p.id < 10 ? `0${p.id}` : p.id}
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                  ✓ Verified
                </span>
              </div>
              <h4 className="text-xs font-bold text-navy font-roboto line-clamp-1">{p.name}</h4>
              <span className="text-[11px] font-medium text-slate-500 mt-1 line-clamp-1">{p.badge}</span>
            </div>
          ))}
        </div>

        {/* Interactive Tabbed Deep-Dive */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80">
            {[
              { id: "authority", label: "1. Legal Authority & Jurisdiction", count: "Params 1-5" },
              { id: "deployment", label: "2. Deployment & Response SLA", count: "Params 6, 9, 14, 15" },
              { id: "experience", label: "3. Industry Proof & Case Studies", count: "Params 7, 8, 11" },
              { id: "compliance", label: "4. Statutory & Tender Dossier", count: "Params 10, 12, 13" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 min-w-[200px] text-left px-5 py-4 border-b-2 font-roboto font-bold text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${
                  activeTab === tab.id
                    ? "border-sky bg-white text-navy shadow-2xs"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/60"
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-600 font-medium hidden sm:inline">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8">
            {activeTab === "authority" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-white to-sky-50/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-sky text-xs">Parameter 01</span>
                      <span className="text-xs font-bold text-navy">Controlling Authority</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">PSARA Licensing &amp; Jurisdiction</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                      ACS holds valid Private Security Agencies (Regulation) Act 2005 licenses granted by the Home Department. Full jurisdictional authorization covers commercial, industrial, and institutional premises across {locationContext}.
                    </p>
                    <div className="text-xs text-slate-500 bg-white p-2.5 rounded border border-slate-200">
                      <strong>Form V Permit:</strong> Regularly renewed with statutory police verification of directors, training institute affiliation, and weapon management protocols.
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-white to-amber-50/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-gold text-xs">Parameter 02 &amp; 03</span>
                      <span className="text-xs font-bold text-navy">Accreditation &amp; Track Record</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">ISO 9001:2015 &amp; 25+ Years of Leadership</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                      Operating continuously since the year 2000, ACS pairs quarter-century veteran leadership with globally audited ISO 9001:2015 Quality Management Systems.
                    </p>
                    <div className="text-xs text-slate-500 bg-white p-2.5 rounded border border-slate-200">
                      <strong>IAF / IAS Recognized:</strong> Certified standard operating procedures for incident logging, guard supervision, emergency evacuation, and client escalation.
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-sky text-xs">Parameter 04</span>
                      <span className="text-xs font-bold text-navy">Field Presence</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">Dedicated Operational Hub</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Unlike broker agencies, ACS maintains local regional hubs with active field officers, emergency vehicles, and 24x7 control room dispatch covering {locationContext}.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-sky text-xs">Parameter 05</span>
                      <span className="text-xs font-bold text-navy">Pan-India Footprint</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">828+ Cities Comprehensive Coverage</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Unified service delivery with standard billing, pan-India reporting dashboards, and consistent SLA execution whether operating in tier-1 metropolises or tier-3 industrial belts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "deployment" && (
              <div className="space-y-6">
                {/* 4-Stage Deployment Roadmap */}
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-sky text-xs">Parameter 09</span>
                    <span className="text-xs font-bold text-slate-500">Procurement-to-Deployment SLA</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-4">4-Stage Systematic Deployment Process</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-sky font-black text-sm mb-1">STAGE 01 (Day 1–2)</div>
                      <div className="text-navy font-bold text-sm mb-1">Site Security Survey</div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Comprehensive vulnerability assessment of perimeter fences, blind spots, access gates, and fire exit points.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-sky font-black text-sm mb-1">STAGE 02 (Day 3)</div>
                      <div className="text-navy font-bold text-sm mb-1">Post Orders &amp; SOPs</div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Formulating site-specific standing orders, visitor pass protocols, emergency evacuation routes, and guard rosters.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-sky font-black text-sm mb-1">STAGE 03 (Day 4–5)</div>
                      <div className="text-navy font-bold text-sm mb-1">Vetting &amp; Indoctrination</div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        100% police character verification, medical fitness screening, site-specific mock drills, and uniform fitting.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-emerald-600 font-black text-sm mb-1">STAGE 04 (Go-Live)</div>
                      <div className="text-navy font-bold text-sm mb-1">Operational Handover</div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Day-1 on-site presence of Senior Operations Manager, guard roll-call, client introduction, and radio testing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3-Tier Escalation SLA & Pricing/Site Capability */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-sky text-xs mb-3 inline-block">Parameter 06</span>
                    <h3 className="font-bold text-navy text-sm mb-1">Site Manning Capability</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      Scalable deployment from 1 to 500+ security personnel. Active relief pool maintained in {locationContext} to ensure zero guard post abandonment.
                    </p>
                    <div className="text-xs font-semibold text-sky-700 bg-sky-50 p-2 rounded">
                      ⚡ 100% On-Duty Attendance Guarantee
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-gold text-xs mb-3 inline-block">Parameter 14</span>
                    <h3 className="font-bold text-navy text-sm mb-1">3-Tier Emergency SLA</h3>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li><strong>Tier 1 (0–15 Min):</strong> On-site Supervisor intervenes.</li>
                      <li><strong>Tier 2 (15–45 Min):</strong> Regional Field Inspector arrives.</li>
                      <li><strong>Tier 3 (&lt; 2 Hrs):</strong> QRT van &amp; Senior Ops Director on-scene.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-sky text-xs mb-3 inline-block">Parameter 15</span>
                    <h3 className="font-bold text-navy text-sm mb-1">24-Hour Quotation Process</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      Complimentary site visit in {locationContext} followed by a line-item statutory BOQ breakdown with zero hidden overheads.
                    </p>
                    <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 rounded">
                      📋 Transparent Statutory Wage Costing
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-sky text-xs mb-3 inline-block">Parameter 07</span>
                    <h3 className="font-bold text-navy text-sm mb-2">Cross-Industry Mastery</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Over 25 years securing sensitive establishments across heavy manufacturing, petrochemical refineries, IT parks, retail malls, healthcare, and educational campuses.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-gold text-xs mb-3 inline-block">Parameter 08</span>
                    <h3 className="font-bold text-navy text-sm mb-2">Documented Real Case Studies</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Zero-loss track records across 50,000+ cargo shipments, 850-apartment residential townships, and critical defence engineering depots.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-sky text-xs mb-3 inline-block">Parameter 11</span>
                    <h3 className="font-bold text-navy text-sm mb-2">Verifiable Client References</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Trusted by Central Ministries, leading PSUs, Fortune 500 tech campuses, and tier-1 national infrastructure developers. References available on audit request.
                    </p>
                  </div>
                </div>

                {/* 4 Concrete Real-World Case Studies */}
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                  <h3 className="font-bold text-navy text-base mb-4">Featured Industry Deployments</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-sky-700 uppercase mb-1">Defence &amp; Strategic Storage</div>
                      <div className="font-bold text-navy text-sm mb-1">Military Engineering Depot Security</div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Stationed 40 ex-servicemen guards across an 80-acre sensitive depot with 24x7 watchtower manning, searchlights, and motorized perimeter patrol with zero security breaches over 5 years.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-sky-700 uppercase mb-1">Industrial Refineries</div>
                      <div className="font-bold text-navy text-sm mb-1">Petrochemical Plant Turnaround Security</div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Mobilized 55 industrial guards and certified fire safety squads for a 100-acre chemical manufacturing plant, managing 1,200+ contractor workers with computerized RFID pass gates.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-sky-700 uppercase mb-1">Tertiary Healthcare</div>
                      <div className="font-bold text-navy text-sm mb-1">650-Bed Multispecialty Hospital Protection</div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Deployed verbal de-escalation squads at Emergency / Triage units, eliminating mob violence against doctors and achieving 100% NABH physical security compliance.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-sky-700 uppercase mb-1">Enterprise IT Parks</div>
                      <div className="font-bold text-navy text-sm mb-1">500,000 Sq Ft Tech Park Campus Security</div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Deployed 60+ guards across 3 towers with zero-tailgating speed gates, 24x7 control room operations, and clean ISO 27001 physical security audits across 4 consecutive cycles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-sky text-xs">Parameter 10</span>
                    <span className="text-xs font-bold text-emerald-700">Dossier Ready for Committee Review</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">Statutory Compliance &amp; Verification Matrix</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-700 border border-slate-200 rounded-lg overflow-hidden bg-white">
                      <thead className="bg-navy text-white text-[11px] uppercase tracking-wider">
                        <tr>
                          <th className="p-3">Statutory Document</th>
                          <th className="p-3">Issuing Authority</th>
                          <th className="p-3">Verification Mandate</th>
                          <th className="p-3">ACS Compliance Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-3 font-bold text-navy">PSARA License (Form V)</td>
                          <td className="p-3">State Home Department</td>
                          <td className="p-3">Mandatory permit to run private security agency</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Active &amp; Valid</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-navy">EPF Code &amp; TRRN ECR</td>
                          <td className="p-3">EPFO (Govt of India)</td>
                          <td className="p-3">13% statutory provident fund contribution</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Monthly ECR Receipts</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-navy">ESIC Registration &amp; Form 5</td>
                          <td className="p-3">ESIC Corporation</td>
                          <td className="p-3">3.25% medical and accident insurance coverage</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Current Paid Challans</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-navy">CLRA License (Form V / VI)</td>
                          <td className="p-3">State / Central Labour Comm.</td>
                          <td className="p-3">Contract Labour (R&amp;A) Act 1970 registration</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Compliant &amp; Licensed</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-navy">GSTIN Registration</td>
                          <td className="p-3">CBIC, Ministry of Finance</td>
                          <td className="p-3">GSTR-1 and GSTR-3B monthly tax filings</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Zero Tax Default</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-navy">Audited Financials + CA Cert</td>
                          <td className="p-3">Chartered Accountant (UDIN)</td>
                          <td className="p-3">Last 3–5 financial years turnover verification</td>
                          <td className="p-3 text-emerald-700 font-semibold">✓ Strong Net Worth</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-gold text-xs mb-3 inline-block">Parameter 12</span>
                    <h3 className="font-bold text-navy text-sm mb-2">Government &amp; PSU Bidding Readiness</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      Empanelled GeM Seller with capability to participate in custom bids, BOQ bids, PAC purchases, and CPPP tenders with MSME exemptions where applicable.
                    </p>
                    <Link href="/procurement" className="text-sky font-bold text-xs hover:underline inline-flex items-center gap-1">
                      Visit Government &amp; PSU Procurement Center →
                    </Link>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-white">
                    <span className="badge-sky text-xs mb-3 inline-block">Parameter 13</span>
                    <h3 className="font-bold text-navy text-sm mb-2">Local Wage Law Indemnity</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      Complete principal employer indemnity. All deployed staff receive gazetted minimum wages via bank transfer (NEFT/ECS), with zero liability passed to the client.
                    </p>
                    <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                      <strong>Zero Legal Risk:</strong> Monthly compliance docket submitted before billing.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Audit Callout Footer */}
        <div className="mt-8 p-4 rounded-xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-roboto font-bold text-sm sm:text-base">
              Need to Inspect Our Statutory Dossier or PSARA Permit for {locationContext}?
            </h4>
            <p className="text-gray-300 text-xs mt-0.5">
              We provide formal compliance dockets, client completion certificates, and audited balance sheets within 4 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-4">
              Request Audit Dossier
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary text-xs py-2.5 px-4">
              Call Compliance Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
