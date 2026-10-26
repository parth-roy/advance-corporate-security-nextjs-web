import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import MonthlyComplianceDossierViewer from "@/components/procurement/MonthlyComplianceDossierViewer";
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
  FileText,
  Lock,
  Layers,
  Landmark,
  Coins,
  BadgeAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Monthly Security Statutory Compliance Pack Template | Principal Employer Audit Shield",
  description:
    "Comprehensive enterprise monthly invoicing dossier guide for CFOs, Plant Heads, and Procurement Directors. 5-part statutory compliance pack: EPFO ECR & TRRN, ESIC challans, Form B wage registers, GSTR-3B ITC reconciliation, and CLRA Section 21(4) indemnity shields.",
  keywords: [
    "Monthly security statutory compliance pack template",
    "Principal employer audit shield security vendor",
    "EPFO Section 7A liability security contractor",
    "EPF ECR TRRN bank reconciliation manpower",
    "ESIC monthly contribution challan verification",
    "Form B wage register bank NEFT proof",
    "CLRA Section 21(4) principal employer indemnity certificate",
    "GSTR-3B input tax credit security services SAC 998525",
    "Contract labour statutory compliance checklist monthly",
    "Security agency monthly invoice audit protocol",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/monthly-compliance-pack-template`,
  },
  openGraph: {
    title: "Monthly Security Statutory Compliance Pack Template | Principal Employer Audit Shield",
    description:
      "Enterprise audit framework: The 5-part monthly compliance docket required with every security invoice to eliminate joint liability under EPF Sec 7A, ESI, CLRA, and GST laws.",
    url: `${siteConfig.url}/procurement/monthly-compliance-pack-template`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const guideFaqs = [
  {
    question: "Why is an EPF bank challan receipt alone insufficient without the employee-wise ECR sheet?",
    answer:
      "A summary EPF challan merely shows that an aggregate lump sum was paid by the agency to the EPFO, but provides zero legal proof that the specific guards stationed at your facility were credited. Unscrupulous agencies often pay EPF for head-office staff while omitting site guards. The employee-wise ECR (Electronic Challan cum Return) lists each guard's 12-digit UAN, gross wage, EPF wage, and exact 12% employee + 13% employer contribution. Without the ECR reconciliation, the Principal Employer remains 100% exposed to Section 7A retrospective assessments.",
  },
  {
    question: "What is Section 21(4) of the Contract Labour (R&A) Act 1970 and how does it protect the Principal Employer?",
    answer:
      "Under Section 21(4) of the CLRA Act, 1970, if a contractor fails to pay wages or statutory dues to contract labour within the prescribed period, the Principal Employer is legally bound to disburse the full wages directly to the workers and recover the amount from the contractor's dues. A formal Section 21(4) Indemnity Certificate is a notarized contractual covenant wherein the security agency certifies full wage and statutory disbursement, indemnifying the client against all third-party wage claims, union disputes, or recovery certificates issued by the Labour Commissioner.",
  },
  {
    question: "Can an enterprise client legally withhold monthly invoice payments if the security agency fails to submit statutory returns?",
    answer:
      "Yes. Best-practice security contracts and standard procurement terms contain an express condition precedent: monthly bill clearance is contingent upon the submission of previous month's ECR with TRRN, ESIC payment challans, and bank wage disbursement statements. Withholding payment until statutory proofs are provided is completely defensible under Indian Contract law, as paying without compliance documentation triggers vicarious liability and turns the client into an involuntary co-debtor under EPF, ESIC, and CLRA statutes.",
  },
  {
    question: "How does contractor GST non-compliance impact the client's Input Tax Credit (ITC) under Section 16(2)(c)?",
    answer:
      "Under Section 16(2)(c) of the Central Goods and Services Tax (CGST) Act, 2017, a registered buyer is legally disallowed from claiming Input Tax Credit (ITC) if the supplier has not actually remitted the tax to the government via GSTR-3B. Even if the buyer paid the full 18% GST to the contractor, if the contractor defaults on filing GSTR-3B, the GST authorities will issue an automated demand notice to the buyer, reversing the ITC with 18% per annum interest and up to 100% penal interest. Monthly GSTR-3B verification is therefore an essential corporate finance shield.",
  },
  {
    question: "What is the statutory deadline for security agencies to deposit monthly EPF and ESIC contributions?",
    answer:
      "Under both the Employees' Provident Funds Scheme, 1952 (Paragraph 38) and the Employees' State Insurance (General) Regulations, 1950 (Regulation 31), statutory contributions must be deposited on or before the 15th day of the month following the wage period (e.g., September contributions must be remitted by October 15th). Additionally, under the Payment of Wages Act, wages must be credited to employee bank accounts on or before the 7th day (for establishments with <1,000 workers) or the 10th day (for >1,000 workers).",
  },
];

export default function MonthlyCompliancePackTemplatePage() {
  const pageUrl = `${siteConfig.url}/procurement/monthly-compliance-pack-template`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "Monthly Compliance Pack Template", url: pageUrl },
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
            <span className="badge-sky">🛡️ Principal Employer Audit Shield</span>
            <span className="badge-gold">5-Part Invoicing Standard</span>
            <span className="badge-navy border border-white/20">EPFO Sec 7A &amp; CLRA 21(4) Defense</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
            Monthly Security Statutory Compliance Pack Template | Principal Employer Audit Shield
          </h1>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-3xl font-normal">
            A battle-tested statutory blueprint for Corporate CFOs, Internal Auditors, and Procurement Directors. Eliminate vicarious co-liability, bank freeze notices, and Input Tax Credit disqualification with the mandatory 5-part monthly billing docket.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10 pt-4">
            <span>⏱️ <strong>Read Time:</strong> 7 Mins</span>
            <span>📅 <strong>Updated:</strong> October 2026</span>
            <span>⚖️ <strong>Legal Armor:</strong> EPF 1952, ESI 1948, CLRA 1970, CGST 2017</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ARTICLE ── */}
      <article className="py-12 bg-white">
        <div className="container-acs max-w-5xl space-y-12">

          {/* Section 1: Audit Risk Warning for Enterprise Buyers */}
          <section className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3.5">
              <BadgeAlert size={26} className="text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-rose-950 block mb-1 text-sm sm:text-base">
                  Audit Risk Notice for Enterprise Buyers &amp; Finance Heads
                </strong>
                Under Indian labour jurisprudence, the client establishment is designated the <strong>Principal Employer</strong>. Settling a monthly security vendor invoice without obtaining and scrutinizing the mandatory 5-part statutory compliance docket leaves your enterprise strictly liable for every single unpaid rupee of PF, ESI, overtime, and unpaid GST.
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center gap-2 font-roboto font-bold text-navy text-sm">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">1</span>
                  <span>EPFO Section 7A Summons</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  EPFO Enforcement Officers issue direct quasi-judicial summons to Managing Directors and Plant Heads, attaching corporate bank accounts and assessing 100% penal damages under Section 14B plus 12% per annum penal interest.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center gap-2 font-roboto font-bold text-navy text-sm">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">2</span>
                  <span>CLRA Joint &amp; Several Wage Suits</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Under Section 21 of the Contract Labour Act, if the security contractor skips wage payments, the Principal Employer must pay the workforce directly, with zero entitlement to deduct from future invoices without indemnity proof.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center gap-2 font-roboto font-bold text-navy text-sm">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">3</span>
                  <span>GST ITC Disallowance (18%)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Under CGST Section 16(2)(c), if the contractor defaults on GSTR-3B filings, the tax authority claws back 100% of the Input Tax Credit claimed by your company, coupled with 18% interest and punitive penalties.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The 5-Part Monthly Invoicing Dossier Breakdown */}
          <section className="space-y-6">
            <div>
              <span className="text-sky text-xs font-bold uppercase tracking-wider block mb-1">
                The Non-Negotiable Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
                The 5-Part Monthly Invoicing Dossier Explained
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                Never clear a security invoice unless these 5 statutory attachments accompany the billing submission:
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  part: "01",
                  title: "EPFO Electronic Challan cum Return (ECR) with TRRN Bank Debit Proof",
                  statute: "Employees' Provident Funds Act, 1952 (Section 6, 7A & 14B)",
                  desc: "Validates that the contractor has deposited the full 12% employee share + 13% employer share (12% EPF + 0.5% EDLI + 0.5% admin) into the EPFO treasury for every single guard on your roster. The Temporary Return Reference Number (TRRN) must match the bank's debit transaction statement.",
                  shield: "Eliminates joint and severable vicarious liability under Section 7A; protects corporate directors from quasi-judicial warrants.",
                },
                {
                  part: "02",
                  title: "ESIC Monthly Contribution Challan & Employee IP Schedule",
                  statute: "Employees' State Insurance Act, 1948 (Section 39 & 40)",
                  desc: "Itemized schedule of individual 10-digit Insurance Person (IP) numbers proving 3.25% employer + 0.75% employee contribution was remitted before the 15th of the month. Confirms 100% active healthcare and accidental disability coverage.",
                  shield: "Deflects multimillion-rupee personal compensation lawsuits under the Employees' Compensation Act 1923 in the event of on-duty fatalities or grievous hurt.",
                },
                {
                  part: "03",
                  title: "Form B Wage Register & Direct Bank Transfer (NEFT/RTGS) Mandate",
                  statute: "Payment of Wages Act, 1936 / Minimum Wages Act, 1948 / CLRA Central Rules (Rule 78)",
                  desc: "Daily biometric muster roll, overtime computation, statutory allowances (VDA, uniform allowance), and bank transfer transaction UTR numbers showing electronic salary credits directly into individual guard savings accounts before the 7th or 10th cutoff. Cash payments are strictly prohibited.",
                  shield: "Guarantees zero wage arrears claims under CLRA Section 21 and eliminates union litigation regarding unauthorized deductions.",
                },
                {
                  part: "04",
                  title: "GST Return Acknowledgement (GSTR-3B & GSTR-2B Matching)",
                  statute: "Central Goods and Services Tax Act, 2017 (Section 16(2)(c))",
                  desc: "GSTR-3B filing acknowledgement with ARN number for the previous month's tax collection, confirming that 18% GST (SAC 998525) collected from the client was paid into the government exchequer and is auto-populated in the client's GSTR-2B statement.",
                  shield: "Protects the finance department from ITC reversals, audit notices, and 18% statutory penalty interest under Section 50.",
                },
                {
                  part: "05",
                  title: "Principal Employer Statutory Indemnity Certificate",
                  statute: "Contract Labour (R&A) Act, 1970 (Section 21(4)) & Indian Contract Act, 1872",
                  desc: "A formal, stamped and signed legal indemnity executed on the agency's corporate letterhead. Unconditionally attests that all wages, allowances, PF, ESI, and bonus for the service month have been disbursed in full, indemnifying the client against third-party claims.",
                  shield: "Serves as an impenetrable legal defense during CAG, Central Labour Commissioner (CLC), or State Labour Department audits.",
                },
              ].map((item) => (
                <div
                  key={item.part}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-2xs transition-all space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-navy text-gold font-roboto font-black text-sm flex items-center justify-center shrink-0">
                        {item.part}
                      </span>
                      <h3 className="font-roboto font-bold text-navy text-base sm:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {item.statute}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-0 sm:pl-12">
                    {item.desc}
                  </p>

                  <div className="pl-0 sm:pl-12 pt-2">
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
                      <span><strong>Audit Shield:</strong> {item.shield}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Interactive Compliance Dossier Inspector */}
          <section className="space-y-4">
            <MonthlyComplianceDossierViewer />
          </section>

          {/* Section 4: Enterprise Audit Protocol Workflow */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-sky text-xs font-bold uppercase tracking-wider block mb-1">
                Standard Operating Procedure (SOP)
              </span>
              <h2 className="text-xl sm:text-2xl font-roboto font-black text-navy tracking-tight">
                Step-by-Step Security Bill Clearance SOP for Accounts Payable
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                How corporate accounts payable and facility management departments should process monthly contractor invoices:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-navy font-bold text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky font-bold flex items-center justify-center text-xs">1</span>
                  <span>Invoice Submission</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Agency submits Tax Invoice (SAC 998525) along with biometric muster roll and Form B wage register on the 1st week of the month.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-navy font-bold text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky font-bold flex items-center justify-center text-xs">2</span>
                  <span>Wage Proof Verification</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Accounts audits the bank NEFT debit statement confirming salaries were credited into guards&apos; personal accounts by the 7th cutoff.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-navy font-bold text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky font-bold flex items-center justify-center text-xs">3</span>
                  <span>EPF &amp; ESIC TRRN Match</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Verify the TRRN on the EPFO unified portal. Reconcile site guard UANs and ESIC IP numbers against the roster before payment release.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-navy font-bold text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky font-bold flex items-center justify-center text-xs">4</span>
                  <span>Indemnity &amp; Voucher</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  File signed Section 21(4) Indemnity in the permanent compliance vault and release payment voucher with zero vicarious audit exposure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: ACS Statutory Excellence Banner */}
          <section className="bg-gradient-to-br from-navy to-navy-light text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">
                Zero-Defect Statutory Operations
              </span>
              <h3 className="text-2xl font-roboto font-bold mb-3 text-white">
                Experience Audit-Proof Security Management with ACS
              </h3>
              <p className="text-sky-200 text-xs sm:text-sm leading-relaxed mb-6">
                Advance Corporate Security eliminates compliance anxiety. Every monthly billing pack arrives pre-indexed with certified ECR returns, verified TRRN receipts, ESIC challans, NEFT wage sheets, and signed Section 21(4) indemnities.
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
                  href="/procurement/gem-security-tender-checklist"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <FileCheck2 size={16} />
                  <span>GeM Tender Checklist (2026)</span>
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
                Technical FAQs on Monthly Statutory Compliance Packs
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
