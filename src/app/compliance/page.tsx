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
      "ACS applies the reviewed statutory formula: Total Monthly Billable Cost = Step B (Monthly Wage Base = Gazetted Daily Minimum Wage Step A × 26 working days) + Steps C..G (Statutory Contributions & Provisions: EPF 13%, ESIC 3.25%, Bonus 8.33%, Gratuity 4.81%, Uniform Allowance) + Step H (Administrative Service Charge 5–10%) + Step I (GST @ 18%). Step A serves strictly as an input benchmark to derive Step B and is never double-counted into monthly totals, ensuring 100% audit-proof compliance with zero wage theft.",
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

  // ── 3-Tier Statutory Wage Formula Definition ─────────────────────────────────
  const wageTiers = [
    {
      tierId: "tier-1",
      tierLabel: "Tier 1: Baseline Wage & Monthly Conversion",
      tierType: "Inputs & Derived Baseline",
      badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
      description:
        "Delineates the statutory daily benchmark (input rate) from the derived monthly baseline. Step A is the input multiplier; Step B is the billable baseline foundation.",
    },
    {
      tierId: "tier-2",
      tierLabel: "Tier 2: Statutory Employer Contributions & Provisions",
      tierType: "Mandatory Statutory Liabilities",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description:
        "Mandatory employer contributions and accruals under Central Labour Acts (EPF, ESIC, Bonus, Gratuity, and PSARA Uniforms). Non-negotiable statutory liabilities with zero wage deductions permitted.",
    },
    {
      tierId: "tier-3",
      tierLabel: "Tier 3: Commercial Overheads & Statutory Taxes",
      tierType: "Operational Overhead & Indirect Tax",
      badgeClass: "bg-sky-50 text-sky-800 border-sky-200",
      description:
        "Legitimate contractor management overhead per GeM / Ministry of Finance standards, plus statutory Goods & Services Tax (100% ITC eligible for clients).",
    },
  ];

  const wageFormulaRows = [
    {
      step: "A",
      tierId: "tier-1",
      tierName: "Input Baseline",
      label: "Gazetted Daily Minimum Wage (Basic + VDA)",
      category: "Input Statutory Benchmark",
      detail:
        "Daily statutory benchmark notified by the State Labour Department or Central Sphere for Unskilled, Semi-Skilled, or Skilled security personnel. This is an input rate used solely to calculate Step B (Step A × 26) and is NOT an additive line item in the monthly billable total.",
      formulaBadge: "Input Benchmark (× 26 Days)",
      statute: "Minimum Wages Act 1948",
      isBillableAddend: false,
      highlight: false,
    },
    {
      step: "B",
      tierId: "tier-1",
      tierName: "Monthly Base Wages",
      label: "Monthly Wage Base (A × 26 Working Days)",
      category: "Derived Billable Baseline",
      detail:
        "Derived directly from Step A (Step A × 26 working days, accounting for 4 paid weekly rest days per 30-day month). Serves as the primary baseline for all subsequent statutory deductions and contributions.",
      formulaBadge: "Step A × 26 Working Days",
      statute: "Minimum Wages Act 1948 & State Rules",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "C",
      tierId: "tier-2",
      tierName: "Statutory Employer Contribution",
      label: "EPF Employer Contribution (13% on Basic up to ₹15,000 ceiling: 12% EPF + 0.5% EDLI + 0.5% Admin)",
      category: "Mandatory Statutory Contribution",
      detail:
        "Mandatory employer contribution comprising 12% EPF + 0.5% EDLI (Employees' Deposit Linked Insurance) + 0.5% EPFO Administrative Charges on basic wages up to the statutory ceiling of ₹15,000/month. Deposited monthly via EPFO Electronic Challan cum Return (ECR).",
      formulaBadge: "13.00% on Basic (≤ ₹15k ceiling)",
      statute: "EPF & MP Act 1952",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "D",
      tierId: "tier-2",
      tierName: "Statutory Employer Contribution",
      label: "ESIC Employer Contribution (3.25% on gross wages up to ₹21,000 ceiling)",
      category: "Mandatory Statutory Contribution",
      detail:
        "Employer contribution of 3.25% of gross wages (employee contributes 0.75%) for all personnel earning up to ₹21,000/month. Provides full medical healthcare, sickness benefit, and disability cover via ESIC network hospitals.",
      formulaBadge: "3.25% of Gross Wages (≤ ₹21k ceiling)",
      statute: "Employees' State Insurance Act 1948",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "E",
      tierId: "tier-2",
      tierName: "Statutory Provision",
      label: "Statutory Bonus Provision (8.33% under Payment of Bonus Act 1965)",
      category: "Mandatory Statutory Provision",
      detail:
        "Monthly statutory bonus provision of 8.33% of basic wages (or state statutory wage floor). Accrued monthly by ACS into an escrow provision and disbursed annually to guards prior to major festivals (e.g., Diwali / Durga Puja).",
      formulaBadge: "8.33% of Basic / Floor",
      statute: "Payment of Bonus Act 1965",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "F",
      tierId: "tier-2",
      tierName: "Statutory Provision",
      label: "Gratuity Provision (4.81% under Payment of Gratuity Act 1972)",
      category: "Mandatory Statutory Provision",
      detail:
        "Monthly accrual provision computed as 15 days of wages for every completed year of service (15 ÷ 26 ÷ 12 = 4.81% of basic wages). Guarantees statutory terminal benefits under the Payment of Gratuity Act 1972 without default.",
      formulaBadge: "4.81% (15 / 26 / 12) of Basic",
      statute: "Payment of Gratuity Act 1972",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "G",
      tierId: "tier-2",
      tierName: "Statutory Provision",
      label: "Uniform & Equipment Allowance (Annualized monthly)",
      category: "Mandatory Operational Provision",
      detail:
        "Annualized monthly cost covering 2 sets of seasonal uniforms, safety combat boots, photo ID card, lanyard, whistle, high-intensity LED torch, and reflective safety vest mandated under PSARA standards.",
      formulaBadge: "Annualized Monthly Kit Provision",
      statute: "PSARA Act 2005 & Model Rules",
      isBillableAddend: true,
      highlight: false,
    },
    {
      step: "H",
      tierId: "tier-3",
      tierName: "Commercial Overhead",
      label: "Administrative Service Charge (5% - 10% operational overhead per GeM / Min of Finance guidelines)",
      category: "Commercial Operational Overhead",
      detail:
        "Legitimate contractor management fee (5% to 10% of manpower subtotal Steps B through G) covering 24/7 central control room operations, field supervision visits, background verification, compliance auditing, and replacement relievers per GeM and Ministry of Finance procurement rules.",
      formulaBadge: "5% – 10% on Manday Subtotal",
      statute: "GeM & Min of Finance Guidelines",
      isBillableAddend: true,
      highlight: true,
    },
    {
      step: "I",
      tierId: "tier-3",
      tierName: "Indirect Tax",
      label: "GST @ 18% (SAC 998525, 100% eligible for Input Tax Credit)",
      category: "Statutory Indirect Tax",
      detail:
        "Goods and Services Tax levied @ 18% on total taxable services under SAC 998525 (Security & Investigation Services). 100% eligible for Input Tax Credit (ITC) by GST-registered client organisations.",
      formulaBadge: "18.00% on Billing Subtotal",
      statute: "Central Goods & Services Tax Act 2017",
      isBillableAddend: true,
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
              state&apos;s Labour Commissioner.
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
              {/* Header Banner with Governing Equation */}
              <div className="bg-navy text-white px-6 py-6 sm:px-8 sm:py-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      Reviewed Statutory Calculation Model
                    </span>
                    <h3 className="font-roboto font-bold text-lg sm:text-2xl text-white mt-1">
                      Manday &amp; Monthly Wage Breakdown — Per Guard
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 w-fit">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Audit Verified — No Double-Counting
                  </span>
                </div>

                {/* Primary Mathematical Formula */}
                <div className="bg-navy-dark/85 border border-white/15 rounded-xl p-4 sm:p-5">
                  <div className="text-[11px] font-mono text-slate-300 mb-2 uppercase tracking-wider font-semibold flex items-center justify-between">
                    <span>Governing Billing Formula:</span>
                    <span className="text-gold text-[10px] uppercase font-bold tracking-normal">Central Labour Standard</span>
                  </div>
                  <div className="text-white font-mono text-xs sm:text-sm md:text-base font-bold leading-relaxed break-words">
                    Total Monthly Billable Cost = <span className="text-sky-300">Step B (Monthly Base)</span> +{" "}
                    <span className="text-emerald-300">Steps C..G (Statutory Contributions &amp; Provisions)</span> +{" "}
                    <span className="text-gold">Step H (Service Charge)</span> +{" "}
                    <span className="text-purple-300">Step I (GST)</span>
                  </div>

                  {/* Visual Derivation & Pipeline */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-slate-300 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Step A: Daily Wage Input</span>
                    </div>
                    <span className="text-slate-400 font-bold text-xs" aria-hidden="true">➔ ×26 days ➔</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-200 border border-sky-400/30 font-semibold font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>Step B (Base)</span>
                    </div>
                    <span className="text-slate-400 font-bold text-xs" aria-hidden="true">+</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 font-semibold font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Steps C..G (Statutory)</span>
                    </div>
                    <span className="text-slate-400 font-bold text-xs" aria-hidden="true">+</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30 font-semibold font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Step H (Service Fee)</span>
                    </div>
                    <span className="text-slate-400 font-bold text-xs" aria-hidden="true">+</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-200 border border-purple-400/30 font-semibold font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Step I (GST 18%)</span>
                    </div>
                  </div>
                </div>

                {/* Explicit Audit Rule Note on Step A */}
                <div className="mt-4 flex items-start gap-3 p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs leading-relaxed">
                  <span className="text-base shrink-0 leading-none mt-0.5" aria-hidden="true">⚠️</span>
                  <div>
                    <strong className="font-semibold text-amber-100">Audit Rule — Input Baseline vs. Billable Total:</strong>{" "}
                    Step A (Gazetted Daily Minimum Wage) is an input benchmark used solely to derive Step B (Monthly Wage Base = A × 26).{" "}
                    <strong>Step A is NOT an additive line item in the monthly billable total.</strong> Summing Step A and Step B double-counts wage components.
                  </div>
                </div>
              </div>

              {/* Tier-by-Tier Breakdown */}
              <div className="divide-y divide-slate-200">
                {wageTiers.map((tier) => {
                  const tierRows = wageFormulaRows.filter((r) => r.tierId === tier.tierId);
                  return (
                    <div key={tier.tierId} className="p-0">
                      {/* Tier Section Sub-Header */}
                      <div className="bg-slate-100/80 px-6 py-3 border-y border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${tier.badgeClass} uppercase tracking-wider`}>
                            {tier.tierType}
                          </span>
                          <span className="font-roboto font-bold text-navy text-xs sm:text-sm">
                            {tier.tierLabel}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 sm:text-right">
                          {tier.description}
                        </span>
                      </div>

                      {/* Tier Rows */}
                      <div className="divide-y divide-slate-100">
                        {tierRows.map((row) => (
                          <div
                            key={row.step}
                            className={`p-5 sm:px-6 sm:py-5 transition-colors ${
                              row.step === "A"
                                ? "bg-amber-50/20 hover:bg-amber-50/40 border-l-4 border-l-amber-400"
                                : row.highlight
                                ? "bg-sky-50/60 hover:bg-sky-50 border-l-4 border-l-sky-500"
                                : "hover:bg-slate-50/70 border-l-4 border-l-transparent"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                              {/* Step circle indicator */}
                              <div className="flex items-center gap-3 sm:block shrink-0">
                                <span
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black font-roboto ${
                                    row.step === "A"
                                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                                      : row.highlight
                                      ? "bg-sky-500 text-white shadow-xs"
                                      : "bg-navy text-white shadow-xs"
                                  }`}
                                >
                                  {row.step}
                                </span>
                                <span className="sm:hidden text-xs font-semibold text-slate-600">
                                  {row.category}
                                </span>
                              </div>

                              {/* Row Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h4 className={`font-semibold text-sm sm:text-base leading-snug ${
                                    row.highlight ? "text-sky-950" : "text-navy"
                                  }`}>
                                    {row.label}
                                  </h4>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  {/* Badge: Billable vs Non-Additive */}
                                  {row.isBillableAddend ? (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      Billable Addend
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                      Input Benchmark (Non-Additive)
                                    </span>
                                  )}

                                  {/* Formula / Rate Badge */}
                                  <span className="inline-flex items-center text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                    {row.formulaBadge}
                                  </span>

                                  {/* Governing Statute */}
                                  <span className="text-[11px] text-slate-500">
                                    Act: {row.statute}
                                  </span>
                                </div>

                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                  {row.detail}
                                </p>

                                {/* Explanatory alert inside Step A to guarantee clarity */}
                                {row.step === "A" && (
                                  <div className="mt-2 text-[11px] text-amber-800 bg-amber-100/70 border border-amber-300/80 rounded-lg p-2 font-medium">
                                    📌 <strong>Tender Formula Note:</strong> Step A is an input rate used to calculate Step B (Monthly Base = A × 26). It is not added to monthly billing totals.
                                  </div>
                                )}

                                {/* Explanatory alert inside Step B */}
                                {row.step === "B" && (
                                  <div className="mt-2 text-[11px] text-sky-800 bg-sky-50 border border-sky-200 rounded-lg p-2 font-medium">
                                    📌 <strong>Baseline Foundation:</strong> Step B is derived from Step A and serves as the baseline for all statutory deductions and contributions (Steps C through G).
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Summary */}
              <div className="bg-navy text-white px-6 py-5 sm:px-8 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-navy-light">
                <div>
                  <div className="font-roboto font-bold text-base sm:text-lg text-white">
                    Total Monthly Billable Cost Formula
                  </div>
                  <p className="text-slate-300 text-xs mt-1 max-w-xl leading-relaxed">
                    Total Monthly Billable Cost = Step B (Monthly Base) + Steps C..G (Statutory Contributions &amp; Provisions) + Step H (Service Charge) + Step I (GST). All line items are fully documented with ECR challans, TRRN receipts, and tax invoices.
                  </p>
                </div>
                <div className="shrink-0 text-left md:text-right">
                  <div className="inline-block px-4 py-2.5 rounded-xl bg-navy-dark border border-white/20 text-gold font-mono font-black text-sm sm:text-base shadow-inner">
                    Step B + Steps C..G + Step H + Step I
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    * Step A is the input multiplier (A × 26 = B), NOT an additive line item
                  </div>
                </div>
              </div>
            </div>

            {/* Note for Procurement Officers & Tender Committees */}
            <div className="mt-8 p-6 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs text-amber-950 leading-relaxed shadow-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-3 font-roboto">
                <span className="text-base" aria-hidden="true">⚠️</span>
                <span>Critical Advisory for Procurement Officers &amp; Tender Evaluation Committees</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div className="bg-white/80 p-4 rounded-xl border border-amber-200/60">
                  <div className="font-bold text-navy text-xs mb-1">
                    1. Preventing Formula Double-Counting Defect
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    When evaluating vendor BOQs or tender rate sheets, verify that only the monthly derived wage (<strong>Step B = Step A × 26</strong>) is added to statutory contributions. Step A (Gazetted Daily Minimum Wage) is an input benchmark, not a billable addend. Bids that sum A + B double-count wages and must be corrected during technical/financial scrutiny.
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-amber-200/60">
                  <div className="font-bold text-navy text-xs mb-1">
                    2. Avoiding Vicarious Liability Under CLRA
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Tenders omitting statutory line items for Bonus (8.33%), Gratuity (4.81%), EPF (13%), or Reliever provisions force contractors to deduct these amounts from guard salaries — constituting illegal wage theft under the Payment of Wages Act 1936 and exposing the principal employer to direct recovery orders under Section 21(4) of the Contract Labour (R&amp;A) Act 1970.
                  </p>
                </div>
              </div>
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

      {/* ── 4B. THE MONTHLY COMPLIANCE PACK & VICARIOUS LIABILITY SHIELD ─────── */}
      <section className="section-py bg-slate-50 border-t border-slate-200">
        <div className="container-acs">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">
              Absolute Legal Indemnity
            </span>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-extrabold">
              The Monthly Compliance Pack: Zero Vicarious Liability
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Under Section 7A of the EPF Act 1952 and Section 21 of the Contract Labour Act 1970, Principal Employers face immense legal liability if vendors default. ACS acts as an operational firewall, delivering a digitized 4-part dossier to your finance team by the 15th of every month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky/50 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-sky flex items-center justify-center font-black text-xl mb-4">
                01
              </div>
              <h3 className="font-bold text-navy text-base mb-2">EPF ECR &amp; TRRN Receipt</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Official Electronic Challan cum Return (ECR) downloaded from the EPFO unified portal, accompanied by the bank transaction receipt confirming 100% employer &amp; employee deposits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky/50 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl mb-4">
                02
              </div>
              <h3 className="font-bold text-navy text-base mb-2">ESIC Contribution Proof</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verified ESIC monthly contribution statement confirming all deployed personnel maintain active health insurance and medical benefits with zero arrears.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky/50 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-xl mb-4">
                03
              </div>
              <h3 className="font-bold text-navy text-base mb-2">GSTR-3B &amp; Tax Clearances</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legitimate GST payment receipts and GSTR-3B filings ensuring your organization effortlessly claims 100% Input Tax Credit (ITC) with zero mismatch notices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky/50 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl mb-4">
                04
              </div>
              <h3 className="font-bold text-navy text-base mb-2">Bank Wage Slips (NEFT)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule bank salary disbursement statements proving that 100% of deployed guard wages are credited directly into their bank accounts strictly by the 7th of the month.
              </p>
            </div>
          </div>

          {/* Interactive Action Strip */}
          <div className="bg-navy text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-roboto mb-1">
                Verify Your Current Vendor&apos;s Statutory Exposure
              </h3>
              <p className="text-slate-300 text-xs md:text-sm">
                Calculate compliant billing using our live rate engine or schedule a confidential on-site audit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/rate-card-calculator"
                className="px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-navy font-bold text-xs transition shadow-md"
              >
                Launch Rate Card Calculator →
              </Link>
              <Link
                href="/request-audit"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
              >
                Book Compliance Audit
              </Link>
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
              owners about ACS&apos;s statutory compliance practices.
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
