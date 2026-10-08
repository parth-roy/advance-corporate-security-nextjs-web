// src/app/rate-card-calculator/page.tsx
// ============================================================
// ACS Interactive Statutory Rate Card & Minimum Wage Calculator
// Empowers Enterprise Procurement Officers, HR Heads & CFOs
// Calculates Itemized Statutory Wages under Minimum Wages Act & Code on Wages
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import RateCardCalculator from "@/components/calculator/RateCardCalculator";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { ShieldCheck, FileCheck, CheckCircle2, Phone, Mail, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Security Guard & Facility Rate Card Calculator (2026) | ACS Statutory Pricing",
  description:
    "Calculate 100% audit-proof security guard and facility management billing rates across West Bengal, Delhi NCR, Maharashtra & Karnataka. Itemized breakdown of Basic+VDA, EPF (13%), ESIC (3.25%), Bonus, Reliever & GST.",
  keywords: [
    "Security guard rate card calculator",
    "Minimum wages security guard West Bengal 2026",
    "Statutory manpower pricing calculator",
    "EPF ESIC security guard cost formula",
    "GeM security guard service charge rules",
    "Security agency quotation calculator India",
    "Contract labour minimum wage breakdown",
    "West Bengal Zone A security guard salary",
    "PSARA compliant security pricing",
    "Code on wages rate card",
  ],
  alternates: {
    canonical: `${siteConfig.url}/rate-card-calculator`,
  },
  openGraph: {
    title: "B2B Security Guard & Facility Rate Card Calculator | ACS Compliance Engine",
    description:
      "Interactive statutory wage calculator for enterprise procurement. Eliminate Section 7A EPFO liability with transparent, audit-ready rate cards.",
    url: `${siteConfig.url}/rate-card-calculator`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const calculatorFaqs = [
  {
    question: "Why do security agency rate cards vary significantly between vendors?",
    answer:
      "Unorganized vendors often undercut prices by evading statutory contributions (EPF @ 13%, ESIC @ 3.25%, and Annual Bonus @ 8.33%) or misclassifying skilled guards as unskilled. Under Section 7A of the EPF Act and Section 21 of the CLRA Act, the Principal Employer (the client) is legally held liable to pay all defaulted dues with backdated interest. ACS guarantees 100% statutory compliance with transparent rate cards.",
  },
  {
    question: "What is the minimum service charge permissible on GeM and government tenders?",
    answer:
      "Per the Ministry of Finance (DoE) directive and GeM portal guidelines, bids with an administrative service charge below 3.85% are considered unviable and are rejected. This floor prevents predatory pricing that leads to wage theft and poor service delivery.",
  },
  {
    question: "Why is a reliever allowance required for 24×7 continuous security deployments?",
    answer:
      "Under Indian labour statutes, no worker can be scheduled for 7 consecutive days without a mandatory 24-hour weekly rest day. For round-the-clock (24×7) continuous security posts, an additional 1/6th reliever factor (approx. 16.67% of the basic wage) must be provisioned to deploy an off-duty substitute guard, ensuring the post is never abandoned.",
  },
  {
    question: "How does ACS protect enterprise clients from EPF Section 7A vicarious liability?",
    answer:
      "ACS operates as an Employer-of-Record (EOR). Every month by the 15th, ACS sends client finance teams a digitized 'Monthly Compliance Pack' containing the official EPF Electronic Challan cum Return (ECR), TRRN payment confirmation, ESIC challan, and bank salary credit slips.",
  },
];

export default function RateCardCalculatorPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Statutory Compliance", url: `${siteConfig.url}/compliance` },
    { name: "Rate Card Calculator", url: `${siteConfig.url}/rate-card-calculator` },
  ];

  const faqSchema = buildFaqSchema(calculatorFaqs);

  return (
    <>
      {/* Schema Injection */}
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

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy via-[#0d2458] to-[#012154] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,82,204,0.18),transparent)] pointer-events-none" />
        <div className="container-acs relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-sky-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              Statutory Transparency Engine (Code on Wages & Minimum Wages Act)
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-roboto leading-tight mb-5">
              Interactive B2B Manpower <br />
              <span className="text-gold">&amp; Rate Card Calculator</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              Calculate audit-ready security and facility management billing rates in real time. Eliminate contractor under-quoting, verify statutory minimum wages, and protect your company against EPF Section 7A liabilities.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% EPF (13%) &amp; ESIC (3.25%)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Ministry of Finance ≥ 3.85% Floor
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> West Bengal Zone A &amp; B Gazette
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator Section */}
      <section className="section-py bg-slate-50">
        <div className="container-acs">
          <RateCardCalculator />
        </div>
      </section>

      {/* The 4-Pillar Statutory Compliance Standard */}
      <section className="section-py bg-white border-t border-slate-200">
        <div className="container-acs">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-sky">The Procurement Standard</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Why Transparent Rate Cards Protect Principal Employers
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Under current High Court rulings, paying a contractor does not exonerate the client if the contractor fails to deposit PF or minimum wages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-navy font-bold text-xl mb-4">
                01
              </div>
              <h3 className="font-bold text-navy text-base mb-2">Section 7A PF Shield</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                EPFO audits hold principal employers directly responsible for contractor defaults. ACS issues monthly TRRN challans confirming 100% PF payment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl mb-4">
                02
              </div>
              <h3 className="font-bold text-navy text-base mb-2">Zero Wage Undercutting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly adhere to gazetted basic wages and variable dearness allowance (VDA). Our guards receive full statutory wages on the 7th via bank transfer.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl mb-4">
                03
              </div>
              <h3 className="font-bold text-navy text-base mb-2">Mandatory Reliever Pool</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous 24×7 sites without a provisioned reliever lead to guard fatigue and illegal double shifts. ACS budgets 1/6th reliever wages for seamless roster rotation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl mb-4">
                04
              </div>
              <h3 className="font-bold text-navy text-base mb-2">Monthly Compliance Pack</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                By the 15th of each month, your finance department receives verified PF ECRs, ESIC receipts, GST 3B challans, and NEFT bank salary disbursement sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-slate-50 border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Frequently Asked Questions</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Manpower Rate Card &amp; Statutory Compliance FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {calculatorFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
                <h3 className="text-sm md:text-base font-bold text-navy mb-2 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sky/10 text-sky text-xs flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-12 bg-navy text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-black mb-3 font-roboto">
              Need a Custom Multi-Site Enterprise Rate Card?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
              Our enterprise tender desk creates formal, audited rate cards customized to your exact facility layout, shift patterns, and equipment requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/request-audit"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition shadow-md"
              >
                Request Free Compliance &amp; Site Audit
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition"
              >
                Speak with Tender Desk (+91 93399 88999)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
