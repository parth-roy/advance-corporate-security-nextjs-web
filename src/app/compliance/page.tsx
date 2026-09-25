// src/app/compliance/page.tsx
// ============================================================
// ACS Statutory Compliance Page
// Showcases state-wise minimum wages, PSARA licensing status,
// the 3-tier wage formula, and full labour law compliance data.
// Server component — no 'use client' directive.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { STATE_COMPLIANCE_DATA } from "@/lib/compliance";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Security Guard Statutory Compliance | PSARA Wages & Labour Law | ACS",
  description:
    "ACS maintains 100% statutory compliance — PSARA licensing, minimum wages, EPF/ESIC contributions and labour law compliance across all deployment states. View state-wise compliance data.",
  keywords: [
    "PSARA Compliance",
    "Security Guard Minimum Wages",
    "Statutory Compliance India",
    "EPF ESIC Security Guards",
    "Minimum Wages Act 1948",
    "Contract Labour Act",
    "Security Agency Labour Law",
    "PSARA Licensed Security Agency",
    "State-wise Minimum Wages Security",
    "Security Guard Salary India",
    "Labour Law Compliance Security",
    "ACS Statutory Compliance",
  ],
  alternates: {
    canonical: `${siteConfig.url}/compliance`,
  },
  openGraph: {
    title: "Security Guard Statutory Compliance | PSARA Wages & Labour Law | ACS",
    description:
      "ACS maintains 100% statutory compliance — PSARA licensing, minimum wages, EPF/ESIC contributions and labour law compliance across all deployment states.",
    url: `${siteConfig.url}/compliance`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

// ── FAQ data for structured data and FAQ section ──────────────────────────────
const faqs = [
  {
    question: "Is ACS PSARA licensed in all states it operates in?",
    answer:
      "ACS holds direct PSARA Form-V licenses in West Bengal (Head Office), Delhi (NCR Hub), and Jharkhand (Eastern Zone). In other states, ACS deploys through state-registered PSARA partner entities with full compliance oversight, ensuring every guard deployed is covered under the Private Security Agencies (Regulation) Act 2005.",
  },
  {
    question: "How are minimum wages calculated for security guards?",
    answer:
      "Security guard wages follow a 3-tier classification per the Minimum Wages Act 1948: Unskilled (basic security duty), Semi-Skilled (supervisory/trained guards), and Skilled (armed guards/ex-servicemen). Each state's Labour Department issues gazette notifications with Basic + Variable Dearness Allowance (VDA). ACS ensures all guards receive the prevailing gazetted rate without deductions.",
  },
  {
    question: "What is the all-inclusive monthly cost formula ACS uses?",
    answer:
      "ACS applies the standard statutory formula: Monthly Cost = (Daily Min Wage × 26 working days) + EPF employer contribution (12% + 0.5% EDLI + 0.5% Admin = 13%) + ESIC (3.25%) + Statutory Bonus provision (8.33% annualized) + Gratuity provision (4.81%) + Uniform & equipment allowance + Administrative service charge (5–10%) + GST @ 18%. This formula ensures 100% legal compliance with zero wage theft.",
  },
  {
    question: "What EPF and ESIC rates does ACS deduct/contribute?",
    answer:
      "Employee Provident Fund: Employer contributes 12% EPF + 0.5% EDLI + 0.5% Admin Charges = 13% total on basic wages (up to ₹15,000 wage ceiling). Employee's share: 12% of basic wages. ESIC: Employer contributes 3.25% and Employee contributes 0.75% of gross wages (applicable for employees earning up to ₹21,000/month). ACS deposits all statutory contributions monthly via the EPFO/ESIC portal.",
  },
  {
    question: "Does ACS provide compliance documentation for client audits?",
    answer:
      "Yes. ACS maintains a complete Compliance Dossier including: PSARA Form-V License copy, monthly EPF ECR challans (TRRN receipts), ESIC Form 5 payment receipts, Contract Labour (R&A) Act Form V/VI, GSTIN filings (GSTR-1 & GSTR-3B), ISO 9001:2015 certificate, and Audited Balance Sheets with CA-UDIN certificates. These are provided to clients on request for internal audits, CAG audits, and principal employer statutory obligations.",
  },
  {
    question: "How does ACS handle mid-year wage revisions by state governments?",
    answer:
      "ACS tracks all State Labour Department gazette notifications through its statutory compliance desk. Whenever a state revises minimum wages (typically in April and October), ACS implements the revised rate from the effective date specified in the gazette. Client billing is correspondingly revised after formal communication, ensuring seamless compliance without operational disruption.",
  },
] as const;

// ── PSARA status badge styles ──────────────────────────────────────────────────
function PsaraBadge({ status }: { status: 'licensed' | 'operational' | 'compliant' }) {
  if (status === 'licensed') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
        PSARA Licensed
      </span>
    );
  }
  if (status === 'operational') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
        PSARA Operational
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
      Statutory Compliant
    </span>
  );
}

// ── Page component ─────────────────────────────────────────────────────────────
export default function StatutoryCompliancePage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Statutory Compliance", url: `${siteConfig.url}/compliance` },
  ];

  const faqSchema = buildFaqSchema(faqs);

  // Wage formula rows
  const wageFormulaRows = [
    {
      step: "A",
      label: "Daily Minimum Wage (per gazette)",
      detail: "Basic + Variable Dearness Allowance (VDA) — State / Central notification",
      highlight: false,
    },
    {
      step: "B",
      label: "Monthly Base Wages",
      detail: "Daily Min Wage × 26 working days",
      highlight: false,
    },
    {
      step: "C",
      label: "EPF Employer Contribution (13%)",
      detail: "12% EPF + 0.5% EDLI + 0.5% Admin — on basic wages up to ₹15,000 ceiling",
      highlight: false,
    },
    {
      step: "D",
      label: "ESIC Employer Contribution (3.25%)",
      detail: "3.25% of gross wages — for employees earning ≤ ₹21,000/month",
      highlight: false,
    },
    {
      step: "E",
      label: "Statutory Bonus Provision (8.33%)",
      detail: "Payment of Bonus Act 1965 — monthly provision on basic wages",
      highlight: false,
    },
    {
      step: "F",
      label: "Gratuity Provision (4.81%)",
      detail: "Payment of Gratuity Act 1972 — accrual provision on basic wages",
      highlight: false,
    },
    {
      step: "G",
      label: "Uniform & Equipment Allowance",
      detail: "2 sets uniform, boots, lanyard, whistle, torch — annualized monthly",
      highlight: false,
    },
    {
      step: "H",
      label: "Administrative Service Charge",
      detail: "5%–10% viable contractor overhead — as per GeM / Ministry of Finance guidelines",
      highlight: true,
    },
    {
      step: "I",
      label: "GST @ 18% (SAC 998525)",
      detail: "Fully eligible for Input Tax Credit (ITC) by client organisation",
      highlight: true,
    },
  ];

  // Why compliance matters
  const complianceReasons = [
    {
      icon: "⚖️",
      title: "Principal Employer Liability Under CLRA",
      body: "Under the Contract Labour (Regulation & Abolition) Act 1970, if a contractor defaults on wages or statutory dues, the principal employer (your organisation) becomes legally liable to pay workers directly. Hiring a non-compliant agency exposes your company to court orders, labour commissioner notices, and reputational damage.",
    },
    {
      icon: "🛡️",
      title: "PSARA Licensing Prevents Criminal Liability",
      body: "Deploying security guards through an unlicensed agency is a non-bailable offense under PSARA 2005. Both the agency and the client organisation's responsible persons face prosecution. ACS's PSARA Form-V licenses eliminate this risk entirely across all deployment states.",
    },
    {
      icon: "💰",
      title: "Statutory Wages Prevent Labour Unrest",
      body: "Below-minimum wage contracts create chronic turnover, absenteeism, and organised labour agitation. ACS pays 100% of gazetted minimum wages, EPF, ESIC, and bonus — ensuring a stable, motivated workforce and zero labour disputes at your premises.",
    },
    {
      icon: "📋",
      title: "CAG & Vigilance Audit Clean Chit",
      body: "Government departments, listed companies, and PSUs face routine Comptroller & Auditor General (CAG) audits that scrutinise manpower contract compliance. ACS's complete documentation — ECR challans, ESIC receipts, wage registers, and PSARA certificates — ensures clean audit reports without findings or observations.",
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-acs relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-sky transition-colors">
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true" className="text-gray-600">/</span>
                    </>
                  ) : (
                    <span className="text-sky font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="badge-sky">⚖️ Statutory Compliance Framework</span>
            <span className="badge-gold">PSARA Form-V Licensed</span>
            <span className="badge-navy border border-white/20">EPF &amp; ESIC Compliant</span>
            <span className="badge-navy border border-white/20">ISO 9001:2015</span>
          </div>

          {/* H1 */}
          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-5xl">
            Statutory Compliance Framework |{" "}
            <span className="text-sky">
              PSARA, Minimum Wages &amp; Labour Law
            </span>
          </h1>

          <p className="text-sky-200 font-roboto text-base sm:text-lg md:text-xl font-normal mb-8 max-w-4xl leading-relaxed">
            ACS maintains 100% statutory compliance across all deployment states — covering PSARA
            licensing, state-wise minimum wages, EPF/ESIC contributions, statutory bonus, gratuity,
            and Contract Labour Act obligations. View live state-wise compliance data below.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link href="#state-compliance-table" className="btn-primary text-sm px-7 py-3.5 shadow-lg">
              View State-wise Compliance Data
            </Link>
            <Link href="/contact" className="btn-secondary text-sm px-6 py-3.5">
              Download Compliance Kit
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="text-white font-medium text-sm hover:text-sky flex items-center gap-2"
            >
              📞 Compliance Helpdesk: {siteConfig.phone}
            </a>
          </div>

          {/* Credential highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 max-w-5xl">
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-emerald-400 font-bold text-sm mb-0.5">PSARA Licensed</div>
              <div className="text-slate-200 text-xs">WB, Delhi &amp; Jharkhand — Direct</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-sky font-bold text-sm mb-0.5">12 States Covered</div>
              <div className="text-slate-200 text-xs">Pan-India statutory deployment</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-white font-bold text-sm mb-0.5">100% PF/ESIC</div>
              <div className="text-slate-200 text-xs">Monthly ECR &amp; Form 5 deposits</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-gold font-bold text-sm mb-0.5">Zero Litigation</div>
              <div className="text-slate-200 text-xs">25+ years unblemished record</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. STATE-WISE COMPLIANCE TABLE ───────────────────────────────── */}
      <section id="state-compliance-table" className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="section-label">State-Wise Data — Updated {new Date().getFullYear()}</p>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              PSARA Status &amp; Minimum Wages by State
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              All wage figures are in Indian Rupees per day (₹/day) as per the latest state gazette
              notifications. Effective dates reflect the most recent revision notified by each
              state's Labour Commissioner.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              PSARA Licensed — Direct license in state
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
              PSARA Operational — Via PSARA-registered partners
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
              Statutory Compliant — Full statutory compliance framework
            </div>
          </div>

          {/* Responsive table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left text-slate-700 bg-white">
              <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 min-w-[140px]">State</th>
                  <th className="p-4 min-w-[160px]">PSARA Status</th>
                  <th className="p-4 text-right min-w-[110px]">Unskilled<br />(₹/day)</th>
                  <th className="p-4 text-right min-w-[120px]">Semi-Skilled<br />(₹/day)</th>
                  <th className="p-4 text-right min-w-[100px]">Skilled<br />(₹/day)</th>
                  <th className="p-4 min-w-[100px]">Effective</th>
                  <th className="p-4 min-w-[200px]">Key Statutory Acts</th>
                  <th className="p-4 min-w-[120px]">Labour Dept.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {STATE_COMPLIANCE_DATA.map((row) => (
                  <tr key={row.stateSlug} className="hover:bg-slate-50/70 transition-colors">
                    {/* State */}
                    <td className="p-4">
                      <div className="font-bold text-navy">{row.state}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight max-w-[150px]">
                        {row.psaraNote}
                      </div>
                    </td>
                    {/* PSARA Badge */}
                    <td className="p-4">
                      <PsaraBadge status={row.psaraStatus} />
                    </td>
                    {/* Wages */}
                    <td className="p-4 text-right font-mono font-semibold text-slate-800">
                      ₹{row.minWageUnskilled}
                    </td>
                    <td className="p-4 text-right font-mono font-semibold text-slate-800">
                      ₹{row.minWageSemiSkilled}
                    </td>
                    <td className="p-4 text-right font-mono font-bold text-navy">
                      ₹{row.minWageSkilled}
                    </td>
                    {/* Effective date */}
                    <td className="p-4 text-xs text-slate-600 whitespace-nowrap">
                      {row.minWageEffectiveDate}
                    </td>
                    {/* Key Acts */}
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {row.keyStatutoryActs.map((act) => (
                          <span
                            key={act}
                            className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200 whitespace-nowrap"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </td>
                    {/* Labour Commissioner link */}
                    <td className="p-4">
                      <a
                        href={row.labourCommissionerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky hover:underline text-[11px] font-medium inline-flex items-center gap-1"
                        aria-label={`${row.state} Labour Department`}
                      >
                        Labour Dept.
                        <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer note */}
          <p className="mt-4 text-[11px] text-slate-400 text-center leading-relaxed max-w-3xl mx-auto">
            ⚠️ Minimum wage figures are sourced from respective State Labour Department gazette
            notifications and are updated periodically. Always confirm the current gazetted rate
            with the relevant authority before finalising any contract. Contact ACS Compliance Desk
            for the latest verified rates.
          </p>
        </div>
      </section>

      {/* ── 2. 3-TIER WAGE FORMULA ────────────────────────────────────────── */}
      <section id="wage-formula" className="section-py bg-slate-50 border-t border-b border-slate-200">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">
              Transparent Statutory Costing
            </span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              ACS 3-Tier Statutory Wage Formula
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              ACS computes all-inclusive manday rates using a non-negotiable statutory formula
              mandated by the Chief Labour Commissioner (Central) and respective State Labour
              Departments. Every component below is a legal obligation, not an optional add-on.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tier classification */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  tier: "Unskilled",
                  description: "Basic security duty — unarmed guards, access control, perimeter watch",
                  color: "border-slate-300 bg-white",
                  labelColor: "text-slate-700 bg-slate-100",
                },
                {
                  tier: "Semi-Skilled",
                  description: "Trained guards — supervisors, trained frisking, alarm response",
                  color: "border-sky-300 bg-sky-50",
                  labelColor: "text-sky-800 bg-sky-100",
                },
                {
                  tier: "Skilled",
                  description: "Armed guards, ex-servicemen, security supervisors, control room operators",
                  color: "border-navy bg-navy/5",
                  labelColor: "text-navy bg-navy/10",
                },
              ].map((t) => (
                <div key={t.tier} className={`rounded-xl border p-5 ${t.color}`}>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.labelColor} uppercase tracking-wide`}>
                    {t.tier}
                  </span>
                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Formula breakdown */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-navy text-white px-6 py-4">
                <h3 className="font-roboto font-bold text-base sm:text-lg">
                  All-Inclusive Monthly Cost Formula — Per Guard
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Monthly Cost = Sum of all components A through I below
                </p>
              </div>
              <div className="divide-y divide-slate-100">
                {wageFormulaRows.map((row) => (
                  <div
                    key={row.step}
                    className={`flex items-start gap-4 px-6 py-4 ${
                      row.highlight ? "bg-sky-50 border-l-4 border-l-sky-400" : "hover:bg-slate-50/60"
                    } transition-colors`}
                  >
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black font-roboto ${
                        row.highlight
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {row.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm ${row.highlight ? "text-sky-900" : "text-navy"}`}>
                        {row.label}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        {row.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-navy text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
                <div>
                  <div className="font-bold text-base">Total Monthly Billing Rate</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    All components A–I inclusive. GST (I) eligible for full ITC by client.
                  </div>
                </div>
                <span className="text-gold font-black text-sm whitespace-nowrap">
                  A + B + C + D + E + F + G + H + GST
                </span>
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
              <strong>Important for Procurement Officers &amp; Tender Committees:</strong> Tenders
              that omit line items for Bonus (8.33%), Reliever charges (1/6th), or Gratuity (4.81%)
              force contractors to deduct these amounts from guard salaries — constituting wage
              theft, violating the Payment of Wages Act, and creating vicarious liability for the
              principal employer. ACS advocates transparent, statutory-compliant BOQ frameworks in
              all government and corporate tenders.
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY STATUTORY COMPLIANCE MATTERS ─────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-gold text-xs uppercase mb-3 inline-block">
              Legal &amp; Operational Risk Management
            </span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              Why Statutory Compliance Matters
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Non-compliance with labour laws is not just an agency risk — it directly exposes your
              organisation to legal liability, financial penalties, and reputational damage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {complianceReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl p-3 rounded-xl bg-white border border-slate-200 shadow-2xs shrink-0">
                    {reason.icon}
                  </span>
                  <h3 className="font-roboto font-bold text-navy text-base leading-snug">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>

          {/* Statutory acts reference strip */}
          <div className="mt-10 p-6 bg-navy/5 border border-navy/20 rounded-2xl">
            <h3 className="font-roboto font-bold text-navy text-sm uppercase tracking-wide mb-4">
              Key Statutory Acts ACS Complies With
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Private Security Agencies (Regulation) Act 2005 (PSARA)",
                "Contract Labour (R&A) Act 1970",
                "Minimum Wages Act 1948",
                "EPF & Miscellaneous Provisions Act 1952",
                "Employees' State Insurance Act 1948",
                "Payment of Bonus Act 1965",
                "Payment of Gratuity Act 1972",
                "Payment of Wages Act 1936",
                "Industrial Disputes Act 1947",
                "Maternity Benefit Act 1961",
                "Equal Remuneration Act 1976",
                "Central Goods & Services Tax Act 2017",
              ].map((act) => (
                <span
                  key={act}
                  className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-2xs"
                >
                  ✓ {act}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DOWNLOAD COMPLIANCE KIT CTA ──────────────────────────────── */}
      <section className="section-py bg-slate-50 border-t border-b border-slate-200">
        <div className="container-acs">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            {/* Dot texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-3xl"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider mb-4">
                  📦 ACS Compliance Kit
                </div>
                <h2 className="text-white font-roboto font-black text-2xl sm:text-3xl mb-3">
                  Download ACS Statutory Compliance Kit
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-xl">
                  Get our comprehensive Compliance Dossier — includes PSARA license copies, EPF/ESIC
                  challans, CLRA certificates, ISO certificate, audited financials summary, and
                  state-wise minimum wage reference charts. Ideal for procurement officers, HR
                  departments, and CAG audit preparation.
                </p>
                <ul className="space-y-2 text-xs text-slate-200 mb-6">
                  {[
                    "PSARA Form-V License Copies (WB, Delhi, Jharkhand)",
                    "Monthly EPF ECR Challans & TRRN Receipts",
                    "ESIC Form 5 Payment Receipts",
                    "ISO 9001:2015 Certificate",
                    "State-wise Minimum Wage Reference Chart",
                    "CLRA Form V/VI & GSTIN Filing Summary",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm px-7 py-3.5 shadow-lg">
                    Request Compliance Kit
                  </Link>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Compliance%20Kit%20Request%20-%20ACS`}
                    className="btn-secondary text-sm px-6 py-3.5"
                  >
                    Email Us Directly
                  </a>
                </div>
              </div>
              {/* Stat block */}
              <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
                {[
                  { value: "12+", label: "States Covered" },
                  { value: "25+", label: "Years Compliant" },
                  { value: "100%", label: "EPF/ESIC Paid" },
                  { value: "0", label: "Litigation Record" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 border border-white/15 rounded-xl p-4 text-center backdrop-blur-xs"
                  >
                    <div className="text-gold font-black text-2xl font-roboto">{stat.value}</div>
                    <div className="text-slate-200 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-12">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">
              Compliance Questions Answered
            </span>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-extrabold">
              Statutory Compliance FAQs
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Common questions from HR managers, procurement officers, audit teams, and business
              owners about ACS's statutory compliance practices.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-sky-50/50 transition-colors list-none text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-py bg-navy text-white text-center">
        <div className="container-acs max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider mb-4">
            ⚖️ Talk to Our Compliance Team
          </div>
          <h2 className="text-white font-roboto font-black text-2xl sm:text-4xl mb-4">
            Get a Fully Compliant Security Quote
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Our compliance team will prepare a transparent, state-specific statutory wage costing
            with full documentation — PSARA, EPF, ESIC, bonus, and gratuity all accounted for.
            No hidden charges. No statutory shortcuts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-xl">
              Get a Compliant Quote
            </Link>
            <a
              href={`mailto:${siteConfig.email}?subject=Statutory%20Compliance%20Query%20-%20ACS`}
              className="btn-secondary text-sm sm:text-base px-8 py-3.5"
            >
              Email: {siteConfig.email}
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Compliance Helpdesk: {siteConfig.phoneDisplay} &nbsp;|&nbsp;{" "}
            {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} — {siteConfig.address.postalCode}
          </p>
        </div>
      </section>
    </>
  );
}
