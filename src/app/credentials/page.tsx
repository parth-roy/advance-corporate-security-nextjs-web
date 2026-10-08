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
import { ShieldCheck, FileCheck2, Award, Building2, CheckCircle2, Download, ExternalLink, Scale, FileText, Lock } from "lucide-react";

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
        title: "PSARA Form-V License (West Bengal)",
        issuer: "Controlling Authority, Private Security Agencies, Govt. of West Bengal",
        reference: "Valid under PSARA Act 2005",
        status: "Active & 100% In Good Standing",
        scope: "All 23 Districts of West Bengal (Armed & Unarmed Guarding)",
        description: "Authorised to recruit, train, and deploy armed and unarmed security guards across all commercial, industrial, and institutional premises in West Bengal.",
      },
      {
        title: "PSARA Form-V License (Delhi NCR)",
        issuer: "Controlling Authority, Delhi Police Licensing Unit",
        reference: "Valid under PSARA Act 2005",
        status: "Active & Certified",
        scope: "National Capital Territory of Delhi",
        description: "Authorised for executive guarding, corporate IT park security, and surveillance operations across the NCR corridor.",
      },
      {
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
        title: "ISO 9001:2015 Quality Management System",
        issuer: "Internationally Accredited Certification Body",
        reference: "QMS Standards Framework",
        status: "Certified & Annually Audited",
        scope: "Security Guarding, Facility Management & Manpower Outsourcing",
        description: "Ensures standardized operating procedures, continuous guard training, transparent incident escalation, and stringent client quality audits.",
      },
      {
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
        title: "Employees' Provident Fund (EPFO)",
        issuer: "Employees' Provident Fund Organisation, Ministry of Labour",
        reference: "Dedicated Establishment Code",
        status: "100% Monthly ECR Compliance",
        scope: "Pan-India Blue-Collar Workforce",
        description: "Zero backlog in statutory PF deposits. 100% electronic challans (ECRs) and TRRN receipts generated by the 15th of every month.",
      },
      {
        title: "Employees' State Insurance (ESIC)",
        issuer: "Employees' State Insurance Corporation, Govt. of India",
        reference: "Registered Employer Sub-Code",
        status: "Active Health Coverage",
        scope: "All Eligible Guards (< ₹21,000 Gross)",
        description: "Provides comprehensive medical, hospital, and accidental disability coverage from Day 1 of deployment.",
      },
      {
        title: "Contract Labour (R&A) Act 1970 (Form VI)",
        issuer: "Office of the Labour Commissioner",
        reference: "State Labour Licensing Authority",
        status: "Licensed Contractor",
        scope: "Multi-Location Enterprise Contracts",
        description: "Compliant with all state rules governing contract labour engagement, register maintenance, and wage distribution records.",
      },
      {
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
        title: "Government e-Marketplace (GeM) Vendor",
        issuer: "GeM SPV, Ministry of Commerce & Industry",
        reference: "Verified Service Provider",
        status: "Bid-Ready & Pre-Qualified",
        scope: "Pan-India Central & State Tenders",
        description: "Pre-qualified for government security, facility management, and housekeeping bids adhering to the Ministry of Finance ≥ 3.85% floor.",
      },
      {
        title: "Central Public Procurement Portal (CPPP)",
        issuer: "National Informatics Centre, Govt. of India",
        reference: "Class-3 Digital Signature Bidding",
        status: "Active Bidder",
        scope: "Defence, PSU & Railway Tenders",
        description: "Fully equipped tender desk capable of submitting technical bids within 4 hours of notification.",
      },
      {
        title: "Goods & Services Tax (GSTIN)",
        issuer: "Central Board of Indirect Taxes and Customs (CBIC)",
        reference: "State-Wise GSTIN Registrations",
        status: "Regular GSTR-1 & GSTR-3B Filings",
        scope: "100% Seamless Input Tax Credit (ITC)",
        description: "Clean tax compliance trail ensuring enterprise clients can effortlessly claim 18% Input Tax Credit on all monthly billings.",
      },
      {
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
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-5 rounded-xl border border-slate-200 hover:border-sky/50 hover:shadow-xs transition bg-slate-50/40"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold text-navy leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-sky mb-2">
                      {item.issuer}
                    </p>

                    <div className="space-y-1 text-xs text-slate-600 mb-3">
                      <p>
                        <strong className="text-slate-800">Reference:</strong> {item.reference}
                      </p>
                      <p>
                        <strong className="text-slate-800">Jurisdiction / Scope:</strong> {item.scope}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
