// src/app/credentials/page.tsx
// ============================================================
// ACS Statutory Credentials & Regulatory Verification Vault
// Section 14, 27 & 7 Implementation — Authoritative Verification Hub
// Provides Complete Statutory Transparency for Procurement & Audit Committees
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { ShieldCheck, FileCheck2, Award, Building2, CheckCircle2, Download, ExternalLink, Scale, FileText, Lock, Clock, Users, ShieldAlert, ArrowRight } from "lucide-react";
import { CredentialViewerCard } from "@/components/credentials/CredentialModalViewer";

export const metadata: Metadata = {
  title: "Statutory Credentials & PSARA License Vault | ACS Compliance Verification",
  description:
    "Official regulatory credentials repository for Advance Corporate Security. Verify PSARA licenses, ISO 9001:2015 certifications, EPFO/ESIC establishment codes, GSTIN, and GeM empanelment documentation.",
  keywords: [
    "PSARA license verification West Bengal",
    "ACS statutory credentials",
    "ISO 9001:2015 security company certificate",
    "EPFO establishment code security agency",
    "ESIC registration security guards",
    "GeM vendor security agency credentials",
    "Contract labour license West Bengal",
    "Security vendor onboarding documents",
    "PSARA Controlling Authority West Bengal",
  ],
  alternates: {
    canonical: `${siteConfig.url}/credentials`,
  },
  openGraph: {
    title: "Statutory Credentials & PSARA License Vault | Advance Corporate Security",
    description:
      "Verify ACS's statutory compliance documentation, ISO certifications, and multi-state PSARA licenses.",
    url: `${siteConfig.url}/credentials`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const CREDENTIAL_GROUPS = [
  {
    category: "Regulatory Security Licensing",
    icon: <ShieldCheck className="w-6 h-6 text-sky" />,
    items: [
      {
        id: "psara-wb",
        title: "PSARA Form-V License (West Bengal)",
        issuer: "Controlling Authority, Private Security Agencies, Govt. of West Bengal",
        reference: "Valid under PSARA Act 2005",
        status: "Active & 100% In Good Standing",
        scope: "All 23 Districts of West Bengal (Armed & Unarmed Guarding)",
        description: "Authorised to recruit, train, and deploy armed and unarmed security guards across all commercial, industrial, and institutional premises in West Bengal.",
      },
      {
        id: "psara-delhi",
        title: "PSARA Form-V License (Delhi NCR)",
        issuer: "Controlling Authority, Delhi Police Licensing Unit",
        reference: "Valid under PSARA Act 2005",
        status: "Active & Certified",
        scope: "National Capital Territory of Delhi",
        description: "Authorised for executive guarding, corporate IT park security, and surveillance operations across the NCR corridor.",
      },
      {
        id: "psara-jharkhand",
        title: "PSARA Form-V License (Jharkhand)",
        issuer: "Controlling Authority, Home Department, Govt. of Jharkhand",
        reference: "Valid under PSARA Act 2005",
        status: "Active & Operational",
        scope: "Eastern Industrial & Mining Zone",
        description: "Operational deployment capability for heavy industries, mining establishments, and institutional complexes.",
      },
    ],
  },
  {
    category: "Quality Management & Standards",
    icon: <Award className="w-6 h-6 text-emerald-600" />,
    items: [
      {
        id: "iso-9001",
        title: "ISO 9001:2015 Quality Management System",
        issuer: "Internationally Accredited Certification Body",
        reference: "QMS Standards Framework",
        status: "Certified & Annually Audited",
        scope: "Security Guarding, Facility Management & Manpower Outsourcing",
        description: "Ensures standardized operating procedures, continuous guard training, transparent incident escalation, and stringent client quality audits.",
      },
      {
        id: "training-mou",
        title: "Ministry of Labour Private Security Training MOU",
        issuer: "Recognised Security Training Institute",
        reference: "MHA Model Rules Compliance",
        status: "MOU Executed & Active",
        scope: "Guard Antecedent Verification & Tactical Training",
        description: "Mandatory training memorandum covering 160 hours of basic tactical training, fire-fighting, and disaster evacuation drills per MHA guidelines.",
      },
    ],
  },
  {
    category: "Labour & Statutory Registrations",
    icon: <Scale className="w-6 h-6 text-purple-600" />,
    items: [
      {
        id: "epfo-code",
        title: "Employees' Provident Fund (EPFO)",
        issuer: "Employees' Provident Fund Organisation, Ministry of Labour",
        reference: "Dedicated Establishment Code",
        status: "100% Monthly ECR Compliance",
        scope: "Pan-India Blue-Collar Workforce",
        description: "Zero backlog in statutory PF deposits. 100% electronic challans (ECRs) and TRRN receipts generated by the 15th of every month.",
      },
      {
        id: "esic-code",
        title: "Employees' State Insurance (ESIC)",
        issuer: "Employees' State Insurance Corporation, Govt. of India",
        reference: "Registered Employer Sub-Code",
        status: "Active Health Coverage",
        scope: "All Eligible Guards (< ₹21,000 Gross)",
        description: "Provides comprehensive medical, hospital, and accidental disability coverage from Day 1 of deployment.",
      },
      {
        id: "clra-license",
        title: "Contract Labour (R&A) Act 1970 (Form VI)",
        issuer: "Office of the Labour Commissioner",
        reference: "State Labour Licensing Authority",
        status: "Licensed Contractor",
        scope: "Multi-Location Enterprise Contracts",
        description: "Compliant with all state rules governing contract labour engagement, register maintenance, and wage distribution records.",
      },
      {
        id: "lwf-wb",
        title: "West Bengal Labour Welfare Fund (LWF)",
        issuer: "West Bengal Labour Welfare Board",
        reference: "Mandatory Statutory Contribution",
        status: "Compliant (Employee ₹3 / Employer ₹30)",
        scope: "All Deployments in West Bengal",
        description: "Full compliance with state-specific labour welfare fund deductions and bi-annual remittances.",
      },
    ],
  },
  {
    category: "Corporate, Tax & Public Procurement",
    icon: <Building2 className="w-6 h-6 text-navy" />,
    items: [
      {
        id: "gem-vendor",
        title: "Government e-Marketplace (GeM) Vendor",
        issuer: "GeM SPV, Ministry of Commerce & Industry",
        reference: "Verified Service Provider",
        status: "Bid-Ready & Pre-Qualified",
        scope: "Pan-India Central & State Tenders",
        description: "Pre-qualified for government security, facility management, and housekeeping bids adhering to the Ministry of Finance ≥ 3.85% floor.",
      },
      {
        id: "cppp-portal",
        title: "Central Public Procurement Portal (CPPP)",
        issuer: "National Informatics Centre, Govt. of India",
        reference: "Class-3 Digital Signature Bidding",
        status: "Active Bidder",
        scope: "Defence, PSU & Railway Tenders",
        description: "Fully equipped tender desk capable of submitting technical bids within 4 hours of notification.",
      },
      {
        id: "gstin-registration",
        title: "Goods & Services Tax (GSTIN)",
        issuer: "Central Board of Indirect Taxes and Customs (CBIC), Govt. of India",
        reference: "GSTIN: 19AJKPR7582B1ZR",
        status: "Active & 100% Tax Compliant",
        scope: "All-India B2B Services & Full ITC Flow",
        description: "Founder Mr. Jai Gopal Roy established Advance Corporate Security in 2000 as a proprietary enterprise providing industrial security and facility management services. Following the nationwide rollout of the Goods and Services Tax (GST) Act in July 2017, the enterprise was formally registered under GSTIN 19AJKPR7582B1ZR, continuing its 25+ years operational legacy while adhering to statutory tax governance. Clean tax compliance trail ensuring enterprise clients can effortlessly claim 18% Input Tax Credit on all monthly billings.",
      },
      {
        id: "treds-platform",
        title: "TReDS Platform Integration (RXIL / Invoicemart)",
        issuer: "Reserve Bank of India (RBI) Regulated Platform",
        reference: "MSME Trade Receivables Discounting",
        status: "Onboarded & Operational",
        scope: "Enterprise Corporate Invoicing",
        description: "Enables immediate invoice discounting to convert 60-day receivables into 3-day liquidity, guaranteeing zero payroll disruptions.",
      },
    ],
  },
];

const credentialsFaqs = [
  {
    question: "How can enterprise procurement committees verify ACS's PSARA license?",
    answer:
      "Enterprise clients can verify our license on the official Government of India PSARA portal (psara.gov.in) under the Controlling Authority for West Bengal, Delhi, or Jharkhand. Hard copies of Form-V licenses are provided in our Enterprise Vendor Onboarding Pack.",
  },
  {
    question: "Does ACS maintain a clean track record with EPFO and ESIC?",
    answer:
      "Yes. In our 25+ years of operational history, ACS has maintained a flawless statutory record with zero Section 7A inquiry penalties or default recovery orders. Our monthly compliance packs provide verifiable TRRN bank confirmation numbers.",
  },
  {
    question: "Can ACS participate in MSE / Startup EMD exemption tenders on GeM?",
    answer:
      "Yes. ACS holds valid MSME/Udyam registrations qualifying for Earnest Money Deposit (EMD) exemptions and tender fee waivers where applicable under Government Public Procurement Policy.",
  },
  {
    question: "What is the statutory timeline between ACS's 2000 founding and 2017 GSTIN registration?",
    answer:
      "Founder Mr. Jai Gopal Roy established Advance Corporate Security in 2000 as a proprietary enterprise providing industrial security and facility management services. Following the nationwide rollout of the Goods and Services Tax (GST) Act in July 2017, the enterprise was formally registered under GSTIN 19AJKPR7582B1ZR, continuing its 25+ years operational legacy while adhering to statutory tax governance. Complete historical tax, municipal, and commercial records are maintained in our audit docket.",
  },
];

export default function CredentialsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Company", url: `${siteConfig.url}/about` },
    { name: "Statutory Credentials", url: `${siteConfig.url}/credentials` },
  ];

  const faqSchema = buildFaqSchema(credentialsFaqs);

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,82,204,0.18),transparent)] pointer-events-none" />
        <div className="container-acs relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-sky-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Corporate Regulatory Transparency Vault
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-roboto leading-tight mb-5">
              Statutory Credentials <br />
              <span className="text-gold">&amp; Regulatory Licensing</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              Advance Corporate Security (ACS) operates with 100% legal legitimacy. Inspect our PSARA licenses, ISO 9001:2015 certifications, EPFO/ESIC establishment status, and public procurement empanelment.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Multi-State PSARA Form-V
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> GeM &amp; CPPP Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Founding vs. GST Transition Timeline Banner */}
      <section className="bg-amber-50/90 border-b border-amber-200 py-6" aria-label="Statutory Founding & GST Governance Timeline">
        <div className="container-acs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-amber-200/90 shadow-2xs">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-roboto">
                  Statutory Timeline Transparency (2000 Founding vs. 2017 GSTIN Transition)
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                <strong>Founder Mr. Jai Gopal Roy</strong> established Advance Corporate Security in <strong>2000</strong> as a proprietary enterprise providing industrial security and facility management services. Following the nationwide rollout of the Goods and Services Tax (GST) Act in July 2017, the enterprise was formally registered under <strong>GSTIN 19AJKPR7582B1ZR</strong>, continuing its 25+ years operational legacy while adhering to statutory tax governance.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 font-semibold text-slate-700 text-center">
                Est. Year: <strong className="text-navy">2000</strong>
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 font-semibold text-emerald-800 text-center font-mono">
                GSTIN: <strong>19AJKPR7582B1ZR</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Credentials Display */}
      <section className="section-py bg-slate-50">
        <div className="container-acs space-y-12">
          {CREDENTIAL_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-slate-200">
                    {group.icon}
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-black text-navy font-roboto">
                      {group.category}
                    </h2>
                    <p className="text-xs text-slate-500">Statutory verification and licensing records</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Verified In Good Standing
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item) => (
                  <CredentialViewerCard
                    key={item.id}
                    credId={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operations Governance & SLA Delivery Standards (Enterprise Blueprint §8) */}
      <section className="section-py bg-white border-t border-slate-200" aria-label="Operations Governance & SLA Standards">
        <div className="container-acs">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gold" />
              <span className="section-label-gold">Operational Transparency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy font-roboto tracking-tight">
              Enterprise Deployment &amp; Supervision Standards
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Compliance is not merely statutory paperwork—it is reflected daily on the ground. ACS enforces quantifiable operational metrics across lead times, supervisory oversight ratios, leave coverage, and multi-tier escalation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Sourcing Lead Time */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky/10 border border-sky/20 text-sky flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy font-roboto mb-1">Sourcing &amp; Mobilisation Lead Time</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rapid deployment from our verified pool of pre-trained security guards and housekeeping personnel:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Standard Unarmed Guarding:</strong> 24–48 Hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Armed &amp; Ex-Servicemen:</strong> 5–7 Days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Emergency QRT Augmentation:</strong> Within 4 Hours</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                <span>Verified Pool:</span>
                <span className="text-emerald-700 font-mono">1,200+ Police-Verified Guards</span>
              </div>
            </div>

            {/* 2. Field Supervisor Coverage */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 text-gold-dark flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy font-roboto mb-1">Field Supervisor Oversight Ratio</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every site is supported by dedicated mobile patrol officers ensuring day &amp; night surprise audits:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Ratio:</strong> 1 Field Officer per 15–20 Guard Posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Night Patrolling:</strong> Bi-hourly RFID / GPS tag checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Turnover Audit:</strong> Shift handover register sign-off</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                <span>Patrol Mobility:</span>
                <span className="text-emerald-700 font-mono">24×7 GPS Mobile Patrol Units</span>
              </div>
            </div>

            {/* 3. Reliever & Weekly-Off Policy */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy font-roboto mb-1">Mandatory 1/6th Reliever Policy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero post-desertion guarantee while complying with statutory weekly-off and maximum working hour mandates:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Reliever Allocation:</strong> 1 designated reliever for every 6 continuous posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Statutory Compliance:</strong> Prevents overtime fatigue and labor violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Buffer Standby:</strong> 10% standby personnel retained at base</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                <span>Post Coverage:</span>
                <span className="text-emerald-700 font-mono">100% Uninterrupted Vigil</span>
              </div>
            </div>

            {/* 4. Wage Payment Evidence & TRRN Slips */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy font-roboto mb-1">Wage Payment &amp; Statutory Proofs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent monthly compliance evidence submitted to the client’s finance committee by the 10th of every month:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Bank Credit Proofs:</strong> Direct NEFT/RTGS salary transfer records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>EPF TRRN Receipts:</strong> Bank-validated payment confirmation slips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>ESIC Contribution Challans:</strong> Monthly electronic return dockets</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                <span>Submission SLA:</span>
                <span className="text-emerald-700 font-mono">By 10th of Every Month</span>
              </div>
            </div>

            {/* 5. 3-Tier Escalation Protocol */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 text-red-700 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy font-roboto mb-1">3-Tier SLA Escalation Protocol</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guaranteed emergency response and dispute resolution timeline backed by contractually enforced SLAs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Level 1 Escalation</div>
                    <div className="text-xs font-bold text-navy">Field Patrolling Supervisor</div>
                    <div className="text-emerald-700 font-bold text-xs mt-1">⚡ Response &lt; 15 Mins</div>
                    <p className="text-[11px] text-slate-500 mt-1">Physical on-site presence for perimeter issues or guard replacements.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Level 2 Escalation</div>
                    <div className="text-xs font-bold text-navy">Area Operations Manager</div>
                    <div className="text-amber-700 font-bold text-xs mt-1">⏱️ Response &lt; 60 Mins</div>
                    <p className="text-[11px] text-slate-500 mt-1">Senior operational intervention for post restructuring or client coordination.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Level 3 Escalation</div>
                    <div className="text-xs font-bold text-navy">Head of Operations / Director</div>
                    <div className="text-navy font-bold text-xs mt-1">🛡️ Resolution &lt; 4 Hours</div>
                    <p className="text-[11px] text-slate-500 mt-1">Executive leadership resolution for critical security or statutory matters.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                <span>Contractual SLA Guarantee:</span>
                <span className="text-emerald-700 font-mono">24×7 Central Control Room: +91 94770 06681</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Onboarding Kit Download Card */}
      <section className="section-py bg-white border-t border-slate-200">
        <div className="container-acs">
          <div className="bg-gradient-to-br from-navy via-[#0d2458] to-[#012154] text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  Enterprise Vendor Onboarding Desk
                </span>
                <h3 className="text-2xl md:text-3xl font-black font-roboto mt-1 mb-4">
                  Request Official Vendor Credential Pack
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Are you preparing a vendor empanelment docket or conducting a quarterly supplier audit? Our compliance team provides a digitally signed, complete <strong>Vendor Onboarding Dossier</strong> including certified PSARA licenses, ISO certificates, 3-year audited financials, GST clearances, and bank solvency letters within 2 hours.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/request-audit"
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition shadow-md"
                  >
                    Request Compliance Pack &amp; Audit →
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition"
                  >
                    Contact Legal Desk (+91 93399 88999)
                  </Link>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-xs space-y-3">
                <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-2">
                  Dossier Checklist for Procurement Committees:
                </h4>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>State Government PSARA Form-V License (Certified Copy)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001:2015 Scope Certificate &amp; Quality Manual</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Last 6 Months EPFO Electronic Challan cum Returns (ECRs)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Last 6 Months ESIC Monthly Payment Receipts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GST 3B Receipts &amp; Clean Annual GST Clearance</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3-Year Audited Balance Sheet &amp; Profit/Loss Statements</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Schedule Bank Solvency &amp; TReDS Platform Registration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-slate-50 border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Regulatory Q&amp;A</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Credentials Verification FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {credentialsFaqs.map((faq, index) => (
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
        </div>
      </section>
    </>
  );
}
