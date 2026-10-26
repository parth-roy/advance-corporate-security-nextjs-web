import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import GemTenderChecklistInteractive from "@/components/procurement/GemTenderChecklistInteractive";
import {
  ShieldCheck,
  FileCheck2,
  AlertTriangle,
  Scale,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Download,
  Building2,
  Landmark,
  BadgePercent,
  Award,
  HelpCircle,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GeM Security Services Tender Checklist (2026) | GFR 2017 & DoE Guidelines",
  description:
    "Authoritative GeM tender compliance checklist and technical evaluation matrix for Central Ministries, PSUs, and State Departments. Detailed analysis of DoE OM F.6/1/2023-PPD (3.85% floor), GFR 170 EMD exemption, GFR 171 PBG norms, and 100-point bid scoring.",
  keywords: [
    "GeM security services tender checklist",
    "DoE OM No. F.6/1/2023-PPD minimum service charge",
    "GeM security 3.85 percent service charge rule",
    "GFR 2017 Rule 170 EMD exemption MSME security",
    "GFR 2017 Rule 171 PBG norms private security",
    "100 point technical evaluation matrix security tender",
    "PSARA Form V verification government tenders",
    "Public procurement private security compliance",
    "GeM B2G security contractor checklist",
    "Chartered accountant UDIN verification tender",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/gem-security-tender-checklist`,
  },
  openGraph: {
    title: "GeM Security Services Tender Checklist (2026) | GFR 2017 & DoE Guidelines",
    description:
      "Comprehensive statutory checklist for public procurement officers and bidders on Government e-Marketplace (GeM). DoE 3.85% minimum service charge, GFR 170/171 rules, and 100-point technical evaluation matrix.",
    url: `${siteConfig.url}/procurement/gem-security-tender-checklist`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const guideFaqs = [
  {
    question: "Why does GeM summarily reject security bids with service charges below 3.85%?",
    answer:
      "Under Ministry of Finance / Department of Expenditure Office Memorandum OM No. F.6/1/2023-PPD (dated 06.01.2023), bids quoting administrative or service charges below 3.85% are automatically classified as unviable and summarily rejected as non-responsive. The 3.85% statutory floor covers essential non-wage operational costs including supervisory visits, uniform & gear replacement, mandatory guard training, recruitment verification, and statutory accounting. Bids below this threshold inevitably lead to illegal deduction of EPF/ESIC from guards' take-home pay, ghost billing, or abrupt vendor abandonment, exposing the government buyer to severe audit and legal liabilities.",
  },
  {
    question: "How do MSME security service providers claim EMD exemption under GFR 2017 Rule 170?",
    answer:
      "Under Rule 170(i) of the General Financial Rules (GFR), 2017, Micro and Small Enterprises (MSEs) registered with Udyam Registration or the National Small Industries Corporation (NSIC) are 100% exempt from depositing Earnest Money Deposit (EMD). To claim this exemption in GeM security tenders, the agency must hold a valid Udyam certificate specifically under National Industry Classification (NIC) Code 80100 ('Private security activities'). In lieu of EMD, the bidder must submit a signed and stamped 'Bid Security Declaration' accepting debarment from future public tenders if they withdraw or modify their bid during validity.",
  },
  {
    question: "Can a security contractor bid on a GeM tender in one state using a PSARA license from another state?",
    answer:
      "No. Under the Private Security Agencies (Regulation) Act, 2005 (Section 4), a private security agency must hold an active Form-V license issued specifically by the Controlling Authority of the state or Union Territory where the personnel are to be deployed. Operating in a state without a local Form-V license is a cognizable criminal offense. In GeM technical evaluations, bids submitting out-of-state PSARA licenses are disqualified at Envelope A scrutiny, regardless of their financial quote.",
  },
  {
    question: "What is the revised Performance Security (PBG) norm under GFR 2017 Rule 171?",
    answer:
      "Pursuant to Ministry of Finance procurement reforms under GFR 2017 Rule 171, Performance Security (PBG) for public service contracts is set between 3% to 5% of the total contract value (reduced from historical 10% ceilings to improve vendor liquidity). The PBG must remain valid for a period of 60 days beyond the completion of all contractual obligations, including final wage reconciliations and statutory EPF/ESIC clearances. Acceptable forms include an Irrevocable Bank Guarantee from any Scheduled Commercial Bank or a Fixed Deposit Receipt (FDR) pledged to the Tender Inviting Authority.",
  },
  {
    question: "Why is a Chartered Accountant Turnover Certificate invalid without an ICAI UDIN?",
    answer:
      "Under mandatory guidelines issued by the Institute of Chartered Accountants of India (ICAI), every audit report, certificate, and financial document attested by a practicing CA must carry an 18-digit Unique Document Identification Number (UDIN). During GeM technical scrutiny, procurement officers verify the UDIN at udin.icai.org to authenticate genuine financial health. Certificates without a verifiable UDIN are treated as fraudulent or uncertified, resulting in immediate technical envelope disqualification under GFR Rule 151.",
  },
];

export default function GemSecurityTenderChecklistPage() {
  const pageUrl = `${siteConfig.url}/procurement/gem-security-tender-checklist`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "GeM Tender Checklist", url: pageUrl },
  ];

  const faqSchema = buildFaqSchema(guideFaqs);

  return (
    <>
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

      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-12 sm:py-16 border-b border-sky-900/30">
        <div className="container-acs max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-sky-200/80 flex-wrap">
              {breadcrumbs.map((b, i) => (
                <li key={b.url} className="flex items-center gap-2">
                  {i > 0 && <span className="text-sky-400/50">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url} className="hover:text-white transition-colors">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge-sky">🏛️ GeM 4.0 &amp; GFR 2017 Advisory</span>
            <span className="badge-gold">DoE OM F.6/1/2023-PPD</span>
            <span className="badge-navy border border-white/20">100-Point Scoring Model</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
            GeM Security Services Tender Checklist (2026) | GFR 2017 &amp; DoE Guidelines
          </h1>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-3xl font-normal">
            A comprehensive statutory procurement handbook for Tender Inviting Authorities (TIA), Technical Evaluation Committees (TEC), and B2G bidders. Master the 3.85% service charge floor, GFR 170 EMD exemptions, GFR 171 PBG norms, and the 100-point bid evaluation matrix.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10 pt-4">
            <span>⏱️ <strong>Read Time:</strong> 8 Mins</span>
            <span>📅 <strong>Updated:</strong> October 2026</span>
            <span>⚖️ <strong>Regulatory Basis:</strong> GFR 2017, DoE OM 2023, PSARA 2005</span>
          </div>
        </div>
      </section>

      {/* ── MAIN BODY CONTENT ── */}
      <article className="py-12 bg-white">
        <div className="container-acs max-w-5xl space-y-12">

          {/* Section 1: Executive Warning on DoE OM 3.85% Floor */}
          <section className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3.5">
              <AlertTriangle size={24} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-950 block mb-1 text-sm sm:text-base">
                  Ministry of Finance Mandate: Sub-3.85% Service Charge Bids are Summarily Disqualified
                </strong>
                Under Department of Expenditure (DoE) Office Memorandum <strong>OM No. F.6/1/2023-PPD</strong> (issued by the Ministry of Finance, Public Procurement Division), any bid offering administrative/service charges below <strong>3.85%</strong> (including 0% or fractional percentage bids like 0.01%) must be summarily rejected as non-responsive by the GeM automated evaluation engine.
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-roboto font-black text-navy tracking-tight">
                Why the 3.85% Floor Exists: Preventing Statutory Wage Undercutting
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                For years, predatory contractors secured government tenders by quoting zero service charges or fractional decimals (e.g., ₹0.0001), relying on fraudulent methods to recoup profits: illegally skimming guard EPF/ESIC, delaying salaries past statutory dates, or withholding annual bonus. The 3.85% floor establishes an irreducible minimum to cover bona fide administrative overheads:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-sky font-bold text-sm mb-1">1. Supervision &amp; Patrols</div>
                  <p className="text-slate-600">Field officer inspections, motorized night checks, and incident response operations.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-sky font-bold text-sm mb-1">2. Uniforms &amp; Tactical Gear</div>
                  <p className="text-slate-600">2 pairs of uniforms, boots, badges, whistles, rain gear, and night searchlights.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-sky font-bold text-sm mb-1">3. Mandatory Training</div>
                  <p className="text-slate-600">PSARA Section 9 syllabus, refresher fire drills, first-aid, and gate-frisking protocols.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-sky font-bold text-sm mb-1">4. Statutory Accounting</div>
                  <p className="text-slate-600">Monthly ECR generation, biometric muster reconciliation, and audit management.</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 border-t border-slate-200 pt-3">
                <strong className="text-navy">Impact on Tender Inviting Authorities:</strong> Accepting bids below 3.85% directly implicates the Buyer Department as a co-violator under the Contract Labour (R&amp;A) Act 1970 when underpaid contractors default on EPF/ESIC remittances.
              </div>
            </div>
          </section>

          {/* Section 2: GFR 2017 Rule 170 (EMD) & Rule 171 (PBG) */}
          <section className="space-y-6">
            <div>
              <span className="text-sky text-xs font-bold uppercase tracking-wider block mb-1">
                Statutory Procurement Rules
              </span>
              <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
                Earnest Money Deposit (Rule 170) &amp; Performance Security (Rule 171)
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Rule 170 Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky flex items-center justify-center font-bold font-mono">
                    170
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-navy text-base">
                      GFR 2017 Rule 170: EMD &amp; MSME Exemption
                    </h3>
                    <p className="text-slate-500 text-xs">Bid Security &amp; Exemption Standards</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Udyam MSME Exemption:</strong> Micro &amp; Small Enterprises holding valid Udyam certificates under <strong>NIC Code 80100 (Private Security)</strong> are 100% exempt from paying EMD.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Bid Security Declaration:</strong> In lieu of cash/BG EMD, exempt bidders must submit a legally binding declaration agreeing to debarment if the bid is altered or withdrawn during validity.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Non-Exempt Bidders:</strong> Standard EMD quantum is fixed between <strong>2% to 5%</strong> of the estimated tender value, deposited via BG or FDR.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Rule 171 Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 text-gold-dark flex items-center justify-center font-bold font-mono">
                    171
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-navy text-base">
                      GFR 2017 Rule 171: Revised PBG Norms (3% - 5%)
                    </h3>
                    <p className="text-slate-500 text-xs">Performance Bank Guarantee Standards</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Revised 3% to 5% Quantum:</strong> The Ministry of Finance revised the historical 10% PBG requirement down to <strong>3% to 5%</strong> of contract value to stimulate operational liquidity.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Validity Period:</strong> The PBG must remain valid for the entire contract term plus an additional <strong>60 days</strong> buffer for final statutory audits and no-due verification.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Acceptable Instruments:</strong> Bank Guarantee from a Scheduled Commercial Bank, FDR pledged to the buyer, or online payment via GeM Treasury integration.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: 100-Point Technical Bid Evaluation Matrix */}
          <section className="space-y-6">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-1">
                Evaluation Committee Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
                100-Point Technical Bid Evaluation Matrix (QCBS &amp; Pre-Qualification)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                Standard technical evaluation scorecard used by Tender Committees to screen prospective security contractors before financial envelope opening:
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-navy text-white font-roboto font-bold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Evaluation Parameter</th>
                    <th className="px-5 py-4">Max Points</th>
                    <th className="px-5 py-4">Statutory Evidence Required</th>
                    <th className="px-5 py-4">Scoring Criteria Breakdown</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  <tr className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-navy">
                      1. State PSARA Form-V License
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-sky">25 Pts</td>
                    <td className="px-5 py-4">
                      Certified Form-V certificate issued by State Home Department / Controlling Authority.
                    </td>
                    <td className="px-5 py-4 text-xs">
                      • Valid license covering site district = <strong>25 Pts</strong><br />
                      • License expired or out-of-state = <strong>Disqualified</strong>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-navy">
                      2. Audited Turnover (CA UDIN)
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-sky">20 Pts</td>
                    <td className="px-5 py-4">
                      3-5 years balance sheets and P&amp;L attested by CA with active ICAI UDIN.
                    </td>
                    <td className="px-5 py-4 text-xs">
                      • Turnover &gt; 100% of tender value = <strong>20 Pts</strong><br />
                      • Turnover 50%–100% = <strong>15 Pts</strong><br />
                      • Turnover 30%–49% = <strong>10 Pts</strong>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-navy">
                      3. Deployed Guard Strength &amp; EPF Headcount
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-sky">20 Pts</td>
                    <td className="px-5 py-4">
                      Latest EPFO Electronic Challan cum Return (ECR) with TRRN matching bank payment.
                    </td>
                    <td className="px-5 py-4 text-xs">
                      • Active guards &gt; 1,000 = <strong>20 Pts</strong><br />
                      • Active guards 500–999 = <strong>15 Pts</strong><br />
                      • Active guards 200–499 = <strong>10 Pts</strong>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-navy">
                      4. Government / PSU Past Performance
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-sky">20 Pts</td>
                    <td className="px-5 py-4">
                      Work completion certificates from Central/State Govt or PSUs + Notarized Non-Blacklisting Affidavit.
                    </td>
                    <td className="px-5 py-4 text-xs">
                      • 5+ successfully executed public contracts = <strong>20 Pts</strong><br />
                      • 3-4 public contracts = <strong>15 Pts</strong><br />
                      • 1-2 public contracts = <strong>10 Pts</strong>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-navy">
                      5. Quality &amp; Safety Certifications
                    </td>
                    <td className="px-5 py-4 font-mono font-bold text-sky">15 Pts</td>
                    <td className="px-5 py-4">
                      Valid ISO 9001:2015 (QMS) and ISO 45001:2018 (Occupational Health &amp; Safety).
                    </td>
                    <td className="px-5 py-4 text-xs">
                      • Both ISO 9001 and ISO 45001 = <strong>15 Pts</strong><br />
                      • Only ISO 9001 = <strong>10 Pts</strong><br />
                      • No accredited certifications = <strong>0 Pts</strong>
                    </td>
                  </tr>

                  <tr className="bg-slate-100/90 font-bold text-navy">
                    <td className="px-5 py-3">Total Maximum Score</td>
                    <td className="px-5 py-3 font-mono text-emerald-700">100 Pts</td>
                    <td colSpan={2} className="px-5 py-3 text-xs text-slate-700">
                      Minimum Qualifying Benchmark: <strong>70 - 75 Points</strong> required to qualify for Financial Bid Opening or Reverse Auction.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Interactive 12-Item Pre-Bid Envelope Checklist */}
          <section className="space-y-4">
            <GemTenderChecklistInteractive />
          </section>

          {/* Section 5: ACS GeM Credentials & Turnkey Assistance */}
          <section className="bg-gradient-to-br from-navy to-navy-light text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">
                Empanelled GeM Seller
              </span>
              <h3 className="text-2xl font-roboto font-bold mb-3 text-white">
                Partner with ACS for Your Upcoming GeM Tender
              </h3>
              <p className="text-sky-200 text-xs sm:text-sm leading-relaxed mb-6">
                Advance Corporate Security (ACS) is an active, verified GeM Seller with an unblemished 25-year public sector track record. We furnish full pre-bid compliance envelopes, UDIN-verified financial credentials, and state-wide PSARA licensing across Eastern India and NCR.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/procurement"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <Building2 size={16} />
                  <span>Procurement Command Center</span>
                </Link>
                <Link
                  href="/procurement/monthly-compliance-pack-template"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>Monthly Compliance Pack Template</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: Technical FAQs */}
          <section className="space-y-6">
            <div>
              <span className="text-sky text-xs font-bold uppercase tracking-wider block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
                Technical &amp; Legal FAQs on GeM Security Tenders
              </h2>
            </div>

            <div className="space-y-3">
              {guideFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs"
                >
                  <h3 className="font-roboto font-bold text-navy text-sm sm:text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
