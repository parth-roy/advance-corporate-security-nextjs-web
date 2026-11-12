import React from "react";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Scale, MapPin, ArrowRight, Radio, Building2, Wrench } from "lucide-react";

const SHIELD_PILLARS = [
  {
    code: "CLRA Sec 21(4) + EPF 7A",
    title: "100% Principal Employer Audit Shield",
    detail:
      "Line-item UAN ECR receipts, ESIC 3.25% medical cover, and NEFT salary UTR proofs submitted every month across PSARA guards, housekeeping crews, factory operators & Hamali gangs.",
    href: "/compliance",
  },
  {
    code: "Jan Vishwas Act 2026 Ready",
    title: "Zero Regulatory Blind Spots",
    detail:
      "Procedural PSARA administrative fines are now civil penalties — yet Principal Employer strict wage & EPF recovery liability stays 100% active across all outsourced manpower contracts.",
    href: "/insights/jan-vishwas-act-impact-on-psara",
  },
  {
    code: "WB Jul–Dec 2026 Zone A / B",
    title: "Statutory Wage Parity Across Trades",
    detail:
      "Transparent Zone A (₹10,558+ Unskilled / ₹12,777+ Skilled) & Zone B pass-through billing eliminating underpaid broker attrition and unexpected union or factory gate stoppages.",
    href: "/rate-card-calculator",
  },
  {
    code: "GeM ₹51.99L – ₹1.40 Cr+ Track",
    title: "Audit-Verified Public & Private Scale",
    detail:
      "Pre-qualified under GeM SAC 998525, ISO 9001:2015, and multi-state PSARA licenses with full MSME/Udyam tender readiness and Integrated Command & Response Hub oversight.",
    href: "/tenders",
  },
] as const;

const COMPETITIVE_ADVANTAGES = [
  {
    competitor: "vs. Metro-Centric National Security Chains",
    headline: "Deep Tier-1, Tier-2 & Industrial Belt Command",
    detail:
      "Zero NCR-only call-center lag: active cluster officers across Dankuni, Haldia, Uluberia, Durgapur, Siliguri, and Delhi NCR deliver < 4-hour on-site escalation.",
  },
  {
    competitor: "vs. Fragmented FM & Unorganized Labour Brokers",
    headline: "Single-Vendor Security + IFM + Blue-Collar Manpower",
    detail:
      "Combine armed/unarmed guarding, mechanized housekeeping, warehouse loaders, factory helpers, HT/LT electricians, plumbers, and HVAC techs under one compliant invoice.",
  },
  {
    competitor: "vs. Legacy Conglomerates With Labor Code Friction",
    headline: "Direct Command Accountability & Transparent Margins",
    detail:
      "No buried HQ layers blocking plant heads — direct SLA ownership through our 24x7 Integrated Command and Response Hub (+91 93399 88999).",
  },
] as const;

const MOBILIZATION_CORRIDORS = [
  {
    name: "Dankuni – EDFC & NH-19 Belt",
    hub: "SFA Dankuni & Hooghly Cluster",
    sla: "24 Hours",
    scope: "Gate Security, Weighbridge Controllers, Warehouse Pickers & Hamali Gangs",
    href: "/corridors/dankuni-hooghly-industrial-belt",
  },
  {
    name: "Uluberia – Dhulagarh NH-16 Axis",
    hub: "ESR Uluberia & Sankrail Poly Park",
    sla: "24–36 Hours",
    scope: "3PL Dock Security, Loading/Unloading Crews, Cold-Chain HVAC & Electricians",
    href: "/industrial-parks/esr-uluberia",
  },
  {
    name: "Haldia Port & Petrochemical Zone",
    hub: "Haldia Dock, Refinery & Kharagpur",
    sla: "24–48 Hours",
    scope: "ISPS Port Guarding, Hazchem Plant Workers, Pipe Fitters & Utility Plumbers",
    href: "/corridors/haldia-petrochemical-port-industrial-zone",
  },
  {
    name: "Kolkata Sector V, New Town & CBD",
    hub: "NDITA Tech Parks & Hospitals",
    sla: "Same-Day / 24 Hrs",
    scope: "Concierge Guarding, Soft IFM Housekeeping ROI, Office Peons, Pantry & MEP",
    href: "/corridors/kolkata-it-data-center-corridor-sector-v-new-town",
  },
  {
    name: "Durgapur – Panagarh – Asansol",
    hub: "WBIDC Panagarh & Steel Belt",
    sla: "36–48 Hours",
    scope: "Heavy Plant Guarding, Factory Line Manpower, Welding/Rigging & QRT Patrols",
    href: "/corridors/durgapur-asansol-heavy-industrial-belt",
  },
  {
    name: "Delhi NCR & Multi-State Command",
    hub: "Noida, Gurugram, Manesar & East India",
    sla: "48–72 Hours",
    scope: "Multi-State PSARA Security, Corporate IFM & Outsourced Industrial Staffing",
    href: "/tenders",
  },
] as const;

export default function ComplianceShieldAndCorridors() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: THE ACS COMPLIANCE SHIELD (WHY WE WIN TENDERS)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="compliance-shield-heading"
        className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-acs relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/15 border border-sky/30 text-sky-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                The ACS Compliance Shield — Why We Win Tenders
              </div>
              <h2
                id="compliance-shield-heading"
                className="font-roboto font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-white leading-tight"
              >
                Zero Vicarious Liability Across Security, Soft IFM &amp; Blue-Collar Manpower
              </h2>
              <p className="text-slate-300 text-sm sm:text-[15px] mt-2.5 leading-relaxed">
                Whether your tender covers 250 PSARA guards, factory production helpers, Hamali loading/unloading gangs, or licensed electricians and plumbers — our statutory architecture protects your balance sheet from CLRA Section 21(4), EPF 7A, and Labor Code friction.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/procurement/monthly-compliance-pack-template"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#da1e25] hover:bg-[#c4161d] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Inspect Monthly Compliance Pack</span>
              </Link>
              <Link
                href="/case-studies/overcoming-labor-code-friction-industrial-manpower"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <Scale className="w-4 h-4 text-sky-300" />
                <span>Labor Code Case Study</span>
              </Link>
            </div>
          </div>

          {/* 4 Shield Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {SHIELD_PILLARS.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group bg-white/[0.06] hover:bg-white/[0.11] border border-white/15 hover:border-sky-400/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md mb-3">
                    {pillar.code}
                  </span>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 group-hover:gap-2 transition-all">
                  <span>View Statutory Framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Competitive Differentiation Strip */}
          <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-sky-300">
                Single-Vendor Industrial Advantage vs. National Chains &amp; Split Brokers
              </span>
              <Link href="/procurement/agency-comparison" className="text-xs font-bold text-white/90 hover:text-sky-300 transition-colors">
                Full Vendor Comparison Matrix →
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {COMPETITIVE_ADVANTAGES.map((item) => (
                <div key={item.competitor} className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
                  <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                    {item.competitor}
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5">{item.headline}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: RAPID MOBILIZATION INFRASTRUCTURE (CORRIDOR MAP)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="mobilization-map-heading"
        className="py-12 sm:py-16 bg-white border-b border-slate-200"
      >
        <div className="container-acs">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual Corridor Map & Command Hub Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[2px] bg-[#da1e25] rounded-full" aria-hidden="true" />
                <span className="text-[10.5px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
                  Rapid Mobilization Infrastructure
                </span>
              </div>
              <h2
                id="mobilization-map-heading"
                className="text-2xl sm:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto mb-3"
              >
                Dankuni, Haldia &amp; Delhi NCR Command Corridors
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-5">
                Backed by active staging benches powered by our <strong className="text-[#0d2458]">24×7 Integrated Command and Response Hub</strong> and West Bengal Investment Promotion Policy 2026 (WBIP 2026) corridor clusters, ACS mobilizes verified security, mechanized housekeeping, and factory/warehouse manpower within 24–48 hours.
              </p>

              {/* Corridor Schematic Diagram */}
              <div className="bg-[#0d2458] text-white rounded-xl p-4 sm:p-5 relative overflow-hidden">
                <div className="flex items-center justify-between text-[10.5px] font-bold uppercase tracking-wider text-sky-300 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    Integrated Command &amp; Response Hub
                  </span>
                  <span className="font-mono text-white">+91 93399 88999</span>
                </div>

                {/* Hub-and-Spoke Visual SVG */}
                <svg
                  viewBox="0 0 380 185"
                  className="w-full h-auto"
                  role="img"
                  aria-label="ACS Rapid Mobilization Corridor Network connecting Kolkata Command Hub to Dankuni, Uluberia, Haldia, Durgapur, and Delhi NCR"
                >
                  {/* Corridor Trunk Lines */}
                  <line x1="185" y1="95" x2="90" y2="52" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="185" y1="95" x2="95" y2="145" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="185" y1="95" x2="35" y2="95" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="185" y1="95" x2="310" y2="55" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="185" y1="95" x2="295" y2="140" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />

                  {/* Central Hub Node */}
                  <circle cx="185" cy="95" r="24" fill="#da1e25" stroke="#ffffff" strokeWidth="2.5" />
                  <text x="185" y="92" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                    KOLKATA
                  </text>
                  <text x="185" y="103" textAnchor="middle" fill="#fee2e2" fontSize="7" fontWeight="bold">
                    HQ COMMAND
                  </text>

                  {/* Spoke: Dankuni NH-19 */}
                  <circle cx="90" cy="52" r="14" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="90" y="30" textAnchor="middle" fill="#e0f2fe" fontSize="8.5" fontWeight="bold">
                    DANKUNI (EDFC)
                  </text>
                  <text x="90" y="55" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">
                    24h
                  </text>

                  {/* Spoke: Uluberia NH-16 */}
                  <circle cx="35" cy="95" r="13" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="35" y="121" textAnchor="middle" fill="#e0f2fe" fontSize="8" fontWeight="bold">
                    ULUBERIA
                  </text>
                  <text x="35" y="98" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">
                    24h
                  </text>

                  {/* Spoke: Haldia Port */}
                  <circle cx="95" cy="145" r="14" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="95" y="172" textAnchor="middle" fill="#e0f2fe" fontSize="8.5" fontWeight="bold">
                    HALDIA PORT
                  </text>
                  <text x="95" y="148" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">
                    24-48h
                  </text>

                  {/* Spoke: Durgapur / Panagarh */}
                  <circle cx="295" cy="140" r="14" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="295" y="167" textAnchor="middle" fill="#e0f2fe" fontSize="8.5" fontWeight="bold">
                    DURGAPUR-PANAGARH
                  </text>
                  <text x="295" y="143" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">
                    36-48h
                  </text>

                  {/* Spoke: Delhi NCR */}
                  <circle cx="310" cy="55" r="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.8" />
                  <text x="310" y="31" textAnchor="middle" fill="#fde68a" fontSize="8.5" fontWeight="bold">
                    DELHI NCR HUB
                  </text>
                  <text x="310" y="58" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold">
                    48-72h
                  </text>
                </svg>

                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-200">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-300" /> 500+ Active Estates
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-amber-300" /> Security + Blue-Collar Bench
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Live Regional Corridor Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOBILIZATION_CORRIDORS.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0052cc] rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#0052cc] uppercase tracking-wide">
                        <MapPin className="w-3 h-3" />
                        {c.hub}
                      </span>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                        SLA: {c.sla}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0d2458] group-hover:text-[#0052cc] transition-colors mb-1.5">
                      {c.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.scope}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-bold text-[#0052cc] group-hover:gap-2 transition-all">
                    <span>Explore Corridor SLA &amp; Trades</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
