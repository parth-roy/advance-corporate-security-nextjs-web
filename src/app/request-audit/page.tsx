// src/app/request-audit/page.tsx
// ============================================================
// ACS Enterprise Account-Based Sales (ABS) Audit Request Portal
// Section 3 & 8 Implementation — High-Friction, High-Intent Conversion Funnel
// Captures 12 Core CRM Fields with 48-Hour On-Site Audit Guarantee
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import AuditRequestForm from "@/components/forms/AuditRequestForm";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { ShieldCheck, CheckCircle2, Clock, FileText, Lock, Building2, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Free Enterprise Security & Statutory Compliance Audit | ACS",
  description:
    "Complimentary, confidential on-site audit for enterprise facilities. Evaluate perimeter access control, detect material shrinkage vulnerabilities, and eliminate Section 7A EPF/CLRA vicarious liabilities.",
  keywords: [
    "Enterprise security audit India",
    "Statutory compliance audit security agency",
    "EPF Section 7A vendor risk audit",
    "Physical security vulnerability assessment",
    "Facility management site survey",
    "Contract labour compliance check",
    "Warehouse security shrinkage audit",
    "Hospital security protocol review",
    "PSARA audit checklist",
    "ACS enterprise audit",
  ],
  alternates: {
    canonical: `${siteConfig.url}/request-audit`,
  },
  openGraph: {
    title: "Complimentary Workforce Compliance & Security Audit | Advance Corporate Security",
    description:
      "Eliminate hidden vicarious liabilities and physical perimeter breaches. Book a 48-hour confidential on-site audit by ACS senior operations leadership.",
    url: `${siteConfig.url}/request-audit`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const auditFaqs = [
  {
    question: "Is the Workforce Compliance & Security Audit truly complimentary?",
    answer:
      "Yes. ACS provides this comprehensive on-site assessment at zero cost and with no commercial obligation. It serves as our professional introduction to enterprise leadership (CHROs, Procurement Heads, and CSOs) to demonstrate our technical and statutory differentiation.",
  },
  {
    question: "What exact areas does the physical security audit evaluate?",
    answer:
      "Our Area Operations Manager inspects perimeter boundary integrity, CCTV camera blind spots, entry/exit turnstile controls, visitor gate-pass logging, material inward/outward weighbridge protocols, night patrol lighting, emergency fire evacuation exits, and guard post positioning.",
  },
  {
    question: "What is included in the statutory compliance liability review?",
    answer:
      "We review your current vendor's compliance trail against the EPF Act 1952 (Section 7A inquiry risks), ESIC Act 1948, Minimum Wages Act 1948 (State Zone A/B notifications), and CLRA Form VI licensing. We highlight any vicarious liability exposure currently resting on your company's balance sheet.",
  },
  {
    question: "How long does the audit take and when will we receive the report?",
    answer:
      "The physical site walk-through typically requires 60 to 90 minutes. A confidential, board-ready 'Workforce Statutory Compliance & Security Scorecard' with risk-ranked recommendations is delivered within 48 hours of the survey.",
  },
];

export default function RequestAuditPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Enterprise Solutions", url: `${siteConfig.url}/services` },
    { name: "Request Compliance Audit", url: `${siteConfig.url}/request-audit` },
  ];

  const faqSchema = buildFaqSchema(auditFaqs);

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

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy via-[#0d2458] to-[#012154] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,82,204,0.18),transparent)] pointer-events-none" />
        <div className="container-acs relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-sky-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Confidential Enterprise Risk Mitigation Funnel
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-roboto leading-tight mb-5">
              Workforce Statutory Compliance <br />
              <span className="text-gold">&amp; Physical Security Audit</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              Eliminate the hidden legal and financial risks of vendor non-compliance. Our senior operations directors conduct a comprehensive on-site vulnerability and CLRA/EPF liability audit for enterprise facilities across India.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-sky-400" /> 48-Hour Scorecard Turnaround
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Lock className="w-4 h-4 text-sky-400" /> 100% Confidential NDA Standard
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Financial Obligation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section-py bg-slate-50">
        <div className="container-acs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: The 12-Field Form */}
            <div className="lg:col-span-8">
              <AuditRequestForm />
            </div>

            {/* Right 4 Cols: What You Receive & Authority Badges */}
            <div className="lg:col-span-4 space-y-6">
              {/* Deliverables Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-black text-navy text-base uppercase tracking-wider mb-4 pb-3 border-b border-slate-100 flex items-center gap-2 font-roboto">
                  <FileText className="w-5 h-5 text-sky" />
                  What Your Audit Delivers
                </h3>

                <ul className="space-y-4 text-xs text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-navy block">EPF &amp; CLRA Liability Scan</strong>
                      Detection of contractor PF default risks, Section 7A inquiry vulnerabilities, and unvetted subcontractor labour.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-navy block">Perimeter &amp; Access Vulnerability Map</strong>
                      Identification of CCTV blind zones, gate-pass bottlenecks, and raw material pilferage exposure points.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-navy block">Guard Alertness &amp; SLA Review</strong>
                      Assessment of current guard training, night patrol frequency, turnstile discipline, and emergency reaction readiness.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-navy block">15-Day Seamless Takeover Protocol</strong>
                      A step-by-step transition roadmap ensuring 100% operational continuity without disrupting existing shifts or gates.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct HQ Contact */}
              <div className="bg-gradient-to-br from-navy to-[#012154] text-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-2 text-gold text-xs font-black uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  Urgent Deployment Escalation
                </div>
                <h4 className="text-base font-bold mb-2">Immediate Procurement Assistance</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  For active tenders, imminent contract expiries, or critical facility breaches, speak directly with our Senior Operations Desk:
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <p className="flex items-center justify-between bg-white/10 px-3 py-2 rounded-lg">
                    <span className="text-slate-300 font-sans">HQ Desk:</span>
                    <span className="font-bold text-white">+91 93399 88999</span>
                  </p>
                  <p className="flex items-center justify-between bg-white/10 px-3 py-2 rounded-lg">
                    <span className="text-slate-300 font-sans">Operations:</span>
                    <span className="font-bold text-white">+91 79801 47044</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-white border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Audit Protocols</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {auditFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-xs">
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
        </div>
      </section>
    </>
  );
}
