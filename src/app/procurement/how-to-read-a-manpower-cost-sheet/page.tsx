import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { Calculator, FileSpreadsheet, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Read a Manpower & Security Guard Cost Sheet (2026 Guide) | ACS Procurement",
  description:
    "Complete enterprise guide for CFOs and procurement officers on dissecting manpower rate cards: Basic+VDA, EPF (13%), ESIC (3.25%), Reliever charges (16.67%), Bonus (8.33%), and avoiding EPFO Section 7A liability.",
  keywords: [
    "How to read manpower cost sheet",
    "Security guard rate card breakdown",
    "EPF ESIC security guard formula",
    "Reliever charges calculation manpower",
    "GeM minimum service charge rules",
    "Principal employer EPFO Section 7A liability",
    "Statutory manpower pricing breakdown",
    "West Bengal security guard wage sheet",
    "Code on wages rate card guide",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/how-to-read-a-manpower-cost-sheet`,
  },
  openGraph: {
    title: "How to Read a Manpower & Security Guard Cost Sheet | Advance Corporate Security",
    description:
      "Enterprise audit guide for dissecting statutory manpower quotations, eliminating hidden margin cuts, and ensuring audit-proof statutory compliance.",
    url: `${siteConfig.url}/procurement/how-to-read-a-manpower-cost-sheet`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const costSheetFaqs = [
  {
    question: "Why must Reliever Charges (1/6th or 16.67%) be included in security quotations?",
    answer:
      "Under the Minimum Wages Act and Factories Act, every worker is statutorily entitled to one mandatory paid day of rest per 6 consecutive working days. For 24×7 post coverage (365 days/year), a reliever guard must be deployed on weekly rest days. Legitimate rate cards compute reliever cost as 1/6th (16.67%) of the monthly wage plus associated statutory loads. Omitting reliever charges forces guards to work 30 days without rest, creating severe labour law violations.",
  },
  {
    question: "What is EPFO Section 7A liability and how does an under-priced rate card trigger it?",
    answer:
      "Section 7A of the Employees' Provident Funds & Miscellaneous Provisions Act, 1952 empowers EPFO commissioners to assess retrospective dues, damages (up to 100%), and penal interest (12% per annum) directly against the Principal Employer if a contractor fails to deposit statutory contributions on the full notified wage base. An unviable or manipulated rate card is prime evidence of contractor default.",
  },
  {
    question: "What is the mandatory minimum service charge on GeM tenders?",
    answer:
      "Per Ministry of Finance Office Memorandum (OM No. F.6/1/2023-PPD), bids with 0% or abnormally low service charges (e.g., 0.001%) are treated as non-responsive and rejected. Reputable agencies bid between 5% and 10% administrative service charges to cover uniform, supervision, training, recruitment, and management overheads.",
  },
  {
    question: "Can EPF and ESIC be deducted from the employee's minimum wage?",
    answer:
      "No. The employee's share of EPF (12%) and ESIC (0.75%) is deducted from their gross wage, but the employer's contribution (13% EPF and 3.25% ESIC) must strictly be borne by the client/agency over and above the minimum wage. Shifting the employer's share onto the worker is a criminal offense under the Minimum Wages Act.",
  },
];

export default function ManpowerCostSheetGuidePage() {
  const pageUrl = `${siteConfig.url}/procurement/how-to-read-a-manpower-cost-sheet`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "Manpower Cost Sheet Guide", url: pageUrl },
  ];

  const faqSchema = buildFaqSchema(costSheetFaqs);

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
        <div className="container-acs max-w-4xl">
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} className="text-gold" />
            <span>Financial &amp; Statutory Costing Masterclass</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white mb-4 tracking-tight leading-tight">
            How to Read a Manpower &amp; Security Guard Cost Sheet
          </h1>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-3xl font-normal">
            An executive audit guide for CFOs, Procurement Officers, and Factory Heads to dissect vendor rate cards, verify statutory percentage calculations, detect hidden wage suppression, and eliminate retrospective EPFO liabilities.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10 pt-4">
            <span>⏱️ <strong>Read Time:</strong> 7 Mins</span>
            <span>📅 <strong>Updated:</strong> October 2026</span>
            <span>⚖️ <strong>Compliance Standard:</strong> Min. Wages Act 1948 &amp; EPFO Act 1952</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ARTICLE ── */}
      <article className="py-12 bg-white">
        <div className="container-acs max-w-4xl space-y-10">

          {/* High-Alert Warning Box */}
          <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200/90 text-rose-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3.5">
            <AlertTriangle size={22} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-rose-950 block mb-1">
                The Principal Employer Trap (Section 7A &amp; Section 21):
              </strong>
              Awarding contracts to the lowest commercial bidder without checking statutory cost line-items is the #1 trigger for regulatory penalties. When an unviable vendor defaults on statutory deposits, the law holds the <em>Principal Employer</em> fully liable for 100% of unpaid EPF/ESIC dues plus cumulative compounding interest and legal damages.
            </div>
          </div>

          {/* Section 1: The 6 Statutory Pillars */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-4 tracking-tight">
              The 6 Statutory Pillars of an Audit-Proof Rate Card
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              A compliant, audit-ready manpower cost sheet must clearly display the following six distinct statutory components without bundling or obfuscation:
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  name: "Basic Wage + Variable Dearness Allowance (VDA)",
                  calc: "As notified by State / Central Labour Commissioner",
                  desc: "Must equal or exceed the prevailing scheduled employment minimum wage for the specific skill tier (Unskilled, Semi-Skilled, Skilled) and geographic zone (Zone A, B, or C). VDA revisions occur bi-annually (April & October).",
                },
                {
                  num: "2",
                  name: "Employer EPF Contribution (13.00%)",
                  calc: "12% EPF + 0.5% EDLI + 0.5% EPFO Admin Charges",
                  desc: "Computed on Basic+VDA (up to statutory ceiling of ₹15,000/month or higher if contractually agreed). Must be backed by monthly Electronic Challan cum Return (ECR) receipts.",
                },
                {
                  num: "3",
                  name: "Employer ESIC Contribution (3.25%)",
                  calc: "3.25% of Gross Wages (ceiling ₹21,000/month)",
                  desc: "Mandatory health and accident insurance for all employees earning gross monthly wages up to ₹21,000. For employees above the ceiling, Group Personal Accident (GPA) or Workmen Compensation (WC) policy is required.",
                },
                {
                  num: "4",
                  name: "Reliever / Weekly Off Charges (16.67% or 1/6th)",
                  calc: "(Monthly Gross + Statutories) ÷ 6",
                  desc: "Mandated by law: no security guard can work 7 days a week. For continuous 24×7 post coverage, one reliever guard must be paid to cover 1 rest day for every 6 working days.",
                },
                {
                  num: "5",
                  name: "Statutory Bonus (8.33% to 20%)",
                  calc: "Minimum 8.33% under Payment of Bonus Act 1965",
                  desc: "Calculated on basic wage (subject to ₹7,000 or minimum wage ceiling, whichever is higher). Must be provisioned monthly or disbursed annually before festive milestones.",
                },
                {
                  num: "6",
                  name: "Administrative Service Charge (5% to 10%)",
                  calc: "Percentage of total operational cost",
                  desc: "Covers contractor management overheads: uniforms, rain gear, baton/torch, field supervisory inspections, HR processing, and recruitment. Zero percent bids are non-viable per GeM rules.",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="p-5 rounded-2xl border border-gray-200/90 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-navy text-gold font-roboto font-black text-sm flex items-center justify-center shrink-0">
                      {p.num}
                    </span>
                    <div className="w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="font-roboto font-bold text-navy text-base">
                          {p.name}
                        </h3>
                        <span className="text-xs font-semibold text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-full w-fit">
                          {p.calc}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Side-by-Side Sample Cost Sheet Table */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-4 tracking-tight">
              Sample 8-Hour Guard Cost Comparison (Zone A Benchmark)
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Here is an illustrative monthly cost sheet for 1 Unskilled Security Guard on an 8-hour shift under West Bengal Zone A labour notifications:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-sky-50 text-navy font-roboto font-bold">
                  <tr>
                    <th className="px-5 py-3.5 border-b border-gray-200">Cost Component</th>
                    <th className="px-5 py-3.5 border-b border-gray-200">Statutory Basis</th>
                    <th className="px-5 py-3.5 border-b border-gray-200 text-right">Compliant Bid</th>
                    <th className="px-5 py-3.5 border-b border-gray-200 text-right text-rose-700">Flawed Bid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Basic + VDA (26 Duty Days)</td>
                    <td className="px-5 py-3 text-xs">Labour Commissioner Notification</td>
                    <td className="px-5 py-3 text-right font-medium">₹10,566</td>
                    <td className="px-5 py-3 text-right text-gray-500">₹10,566</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Employer EPF (13%)</td>
                    <td className="px-5 py-3 text-xs">12% EPF + 0.5% EDLI + 0.5% Admin</td>
                    <td className="px-5 py-3 text-right font-medium">₹1,374</td>
                    <td className="px-5 py-3 text-right text-rose-600 font-semibold">₹1,000 (Undercut)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Employer ESIC (3.25%)</td>
                    <td className="px-5 py-3 text-xs">3.25% on Gross Salary</td>
                    <td className="px-5 py-3 text-right font-medium">₹343</td>
                    <td className="px-5 py-3 text-right text-rose-600 font-semibold">₹0 (Omitted)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Statutory Bonus (8.33%)</td>
                    <td className="px-5 py-3 text-xs">Payment of Bonus Act 1965</td>
                    <td className="px-5 py-3 text-right font-medium">₹880</td>
                    <td className="px-5 py-3 text-right text-rose-600 font-semibold">₹0 (Omitted)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Reliever Charges (1/6th)</td>
                    <td className="px-5 py-3 text-xs">Weekly Rest Day Coverage (Mandatory)</td>
                    <td className="px-5 py-3 text-right font-medium">₹2,194</td>
                    <td className="px-5 py-3 text-right text-rose-600 font-semibold">₹0 (Omitted)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3 font-semibold text-navy">Agency Service Charge (7%)</td>
                    <td className="px-5 py-3 text-xs">Supervision, uniforms, management</td>
                    <td className="px-5 py-3 text-right font-medium">₹1,075</td>
                    <td className="px-5 py-3 text-right text-rose-600 font-semibold">₹1 (Sham 0%)</td>
                  </tr>
                  <tr className="bg-sky-50/70 font-bold text-navy">
                    <td className="px-5 py-3.5">Total Monthly Billing (excl. GST)</td>
                    <td className="px-5 py-3.5 text-xs text-slate-500">Audit-Ready Contract Value</td>
                    <td className="px-5 py-3.5 text-right text-emerald-800 text-sm">₹16,432</td>
                    <td className="px-5 py-3.5 text-right text-rose-700 text-sm">₹11,567 (High Risk)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-xs mt-3 italic">
              * Note: The &ldquo;Flawed Bid&rdquo; saves ₹4,865 per guard on paper, but directly breaches EPFO guidelines, the Bonus Act, and Weekly Off rules. Any labour inspection will hold the client liable for the deficit plus penalties.
            </p>
          </section>

          {/* Section 3: Interactive Tool CTA */}
          <section className="bg-gradient-to-br from-navy to-navy-light text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">
                Instant Online Calculation
              </span>
              <h3 className="text-2xl font-roboto font-bold mb-3 text-white">
                Test Your Site Headcount with the ACS Rate Card Calculator
              </h3>
              <p className="text-sky-200 text-xs sm:text-sm leading-relaxed mb-6">
                Calculate live statutory cost breakdowns across West Bengal, Delhi NCR, Jharkhand, and other regions. Select headcount, 8-hour vs 12-hour shifts, and see transparent, itemized rate cards instantly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/rate-card-calculator"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <Calculator size={16} />
                  <span>Launch Rate Card Calculator</span>
                </Link>
                <Link
                  href="/credentials"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>View Statutory Credentials</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-6 tracking-tight">
              Procurement Officer Questions on Cost Sheets
            </h2>
            <div className="space-y-3">
              {costSheetFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-2xl border border-gray-200/90 bg-white shadow-2xs"
                >
                  <h3 className="font-roboto font-bold text-navy text-sm sm:text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
