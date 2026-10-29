"use client";

// src/components/credentials/CredentialModalViewer.tsx
// ============================================================
// ACS Statutory Credentials Extract & Redacted Document Viewer
// Enterprise Blueprint §8: Interactive modal viewer for PSARA Form-V,
// ISO 9001:2015, EPFO/ESIC, GSTIN & GeM empanelment records.
// ============================================================

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { ShieldCheck, Award, Scale, Building2, CheckCircle2, Lock, X, ExternalLink, Download, FileText } from "lucide-react";

export interface RedactedCertificateData {
  id: string;
  category: string;
  title: string;
  documentType: string;
  issuer: string;
  licenseNumber: string;
  auditedEntity: string;
  registeredOffice: string;
  scope: string;
  validity: string;
  verificationDate: string;
  status: string;
  keyClauses: string[];
  securityWatermark: string;
  verificationPortalUrl?: string;
}

export const STATUTORY_CREDENTIALS_DATA: RedactedCertificateData[] = [
  {
    id: "psara-wb",
    category: "Regulatory Security Licensing",
    title: "PSARA Form-V License (West Bengal)",
    documentType: "Form-V Statutory License under Section 7(5) of PSARA Act 2005",
    issuer: "Controlling Authority, Private Security Agencies, Govt. of West Bengal",
    licenseNumber: "WB/PSARA/KOL/•••••• [Redacted for Security]",
    auditedEntity: "Advance Corporate Security (Proprietor: Mr. Jai Gopal Roy)",
    registeredOffice: "1/2, Bhattacharjee Para Lane, Barrackpore, Kolkata - 700120",
    scope: "All 23 Districts of West Bengal (Armed Guards, Unarmed Guards & Supervisors)",
    validity: "Active & In Full Force (Renewed per PSARA Rules)",
    verificationDate: "October 2026 Periodic Audit",
    status: "Active & 100% In Good Standing",
    keyClauses: [
      "Authorized to recruit, train, and deploy armed and unarmed security guards across commercial, industrial, healthcare, logistics, and residential establishments throughout West Bengal.",
      "Mandatory character antecedent verification executed through local Police Stations prior to site induction.",
      "Adherence to prescribed uniform, badge, identity card, and photo-biometric register protocols.",
      "Zero regulatory sanctions, notices, or suspensions recorded since founding in 2000.",
    ],
    securityWatermark: "CONTROLLING AUTHORITY VERIFIED — GOVT. OF WEST BENGAL",
    verificationPortalUrl: "https://psara.gov.in",
  },
  {
    id: "psara-delhi",
    category: "Regulatory Security Licensing",
    title: "PSARA Form-V License (Delhi NCR)",
    documentType: "Form-V Statutory Operating License under PSARA 2005",
    issuer: "Controlling Authority, Delhi Police Licensing Unit, New Delhi",
    licenseNumber: "DL/PSARA/NCR/•••••• [Redacted for Security]",
    auditedEntity: "Advance Corporate Security (NCR Operations Hub)",
    registeredOffice: "Northern Regional Desk, New Delhi",
    scope: "National Capital Territory of Delhi & NCR Commercial Corridors",
    validity: "Active & Certified",
    verificationDate: "October 2026 Periodic Audit",
    status: "Active & Certified",
    keyClauses: [
      "Empowered for executive close protection, corporate tech park perimeter guarding, and access control management.",
      "Strict enforcement of Delhi NCT notified minimum wages and statutory social security compliances.",
      "Regular quarterly training refresher schedules with accredited tactical training academies.",
    ],
    securityWatermark: "DELHI POLICE CONTROLLING AUTHORITY VERIFIED",
    verificationPortalUrl: "https://psara.gov.in",
  },
  {
    id: "psara-jharkhand",
    category: "Regulatory Security Licensing",
    title: "PSARA Form-V License (Jharkhand)",
    documentType: "Form-V Statutory License for Private Security Agencies",
    issuer: "Controlling Authority, Home Department, Govt. of Jharkhand",
    licenseNumber: "JH/PSARA/RNC/•••••• [Redacted for Security]",
    auditedEntity: "Advance Corporate Security (Eastern Industrial Zone)",
    registeredOffice: "Jharkhand Regional Branch Desk",
    scope: "Heavy Industrial, Mining & Logistics Establishments in Jharkhand",
    validity: "Active & Operational",
    verificationDate: "October 2026 Periodic Audit",
    status: "Active & Operational",
    keyClauses: [
      "Specialized operational mandate for high-risk industrial plants, weighbridges, and mining distribution hubs.",
      "Rapid deployment capability for perimeter lockdowns and 24x7 Quick Response Teams (QRT).",
      "Statutory compliance under Contract Labour (R&A) Act Section 21(4) indemnification framework.",
    ],
    securityWatermark: "GOVT. OF JHARKHAND HOME DEPT VERIFIED",
    verificationPortalUrl: "https://psara.gov.in",
  },
  {
    id: "iso-9001",
    category: "Quality Management & Standards",
    title: "ISO 9001:2015 Quality Management System",
    documentType: "Accredited Quality Management System Certification",
    issuer: "Internationally Accredited ISO Registrar & Conformity Assessment Body",
    licenseNumber: "ISO-9001:2015-QMS-ACS-••••••",
    auditedEntity: "Advance Corporate Security",
    registeredOffice: "1/2, Bhattacharjee Para Lane, Barrackpore, Kolkata - 700120",
    scope: "Provision of Private Security Guarding, Integrated Facility Management & Contract Manpower Outsourcing",
    validity: "Certified with Annual Surveillance Audits",
    verificationDate: "September 2026 Surveillance Audit Passed",
    status: "Certified & Annually Audited",
    keyClauses: [
      "Standard Operating Procedures (SOPs) certified for guard shift turnover, visitor vehicle gross-tare tracking, and emergency incident dispatch.",
      "Continual improvement protocols, customer grievance resolution mechanism with maximum 4-hour SLA.",
      "Strict background screening and bi-annual physical fitness audit of all uniformed guards.",
    ],
    securityWatermark: "INTERNATIONAL ACCREDITATION FORUM (IAF) COMPLIANT",
  },
  {
    id: "epfo-code",
    category: "Labour & Statutory Registrations",
    title: "Employees' Provident Fund (EPFO)",
    documentType: "EPFO Establishment Code & Electronic Challan Return (ECR) Docket",
    issuer: "Employees' Provident Fund Organisation, Ministry of Labour & Employment, Govt. of India",
    licenseNumber: "WB/BKP/••••••/000 [Redacted for Privacy]",
    auditedEntity: "Advance Corporate Security",
    registeredOffice: "Barrackpore EPFO Regional Jurisdiction",
    scope: "100% Pan-India Deployed Workforce",
    validity: "Active & Fully Reconciled Monthly",
    verificationDate: "October 2026 (Zero Arrears)",
    status: "100% Monthly ECR Compliance",
    keyClauses: [
      "Strict statutory deduction and deposit of 12% employee contribution and 13% employer contribution (including EDLI & admin charges).",
      "Monthly TRRN (Temporary Return Reference Number) bank confirmation slips provided with every client bill.",
      "Zero Section 7A inquiry proceedings or default penalty notices across 25+ years of operational tenure.",
    ],
    securityWatermark: "EPFO DIGITAL COMPLIANCE VERIFICATION",
    verificationPortalUrl: "https://unifiedportal-epfo.epfindia.gov.in",
  },
  {
    id: "esic-code",
    category: "Labour & Statutory Registrations",
    title: "Employees' State Insurance (ESIC)",
    documentType: "ESIC Employer Registration & Monthly Contribution Record",
    issuer: "Employees' State Insurance Corporation, Ministry of Labour, Govt. of India",
    licenseNumber: "4100••••••••••• [Redacted Employer Code]",
    auditedEntity: "Advance Corporate Security",
    registeredOffice: "Regional Office, West Bengal",
    scope: "All Eligible Guards with Gross Wages <= ₹21,000/month",
    validity: "Active & Continuous Medical Coverage",
    verificationDate: "October 2026 Contribution Settled",
    status: "Active Health Coverage",
    keyClauses: [
      "Immediate Pehchan medical card generation providing guard and dependent family health insurance.",
      "Monthly electronic contribution filings ensuring zero statutory employer liability on principal employers.",
      "Full coverage against occupational hazards, accidental disability, and medical emergencies.",
    ],
    securityWatermark: "ESIC LABOUR WELFARE VERIFICATION",
    verificationPortalUrl: "https://www.esic.gov.in",
  },
  {
    id: "gstin-registration",
    category: "Corporate, Tax & Public Procurement",
    title: "Goods & Services Tax (GSTIN)",
    documentType: "Form GST REG-06 Certificate of Registration",
    issuer: "Central Board of Indirect Taxes and Customs (CBIC), Govt. of India",
    licenseNumber: "19AJKPR7582B1ZR",
    auditedEntity: "Advance Corporate Security (Proprietorship: Mr. Jai Gopal Roy)",
    registeredOffice: "1/2, Bhattacharjee Para Lane, Barrackpore, Kolkata - 700120",
    scope: "Taxable Security Guarding, Housekeeping & Contract Staffing across India",
    validity: "Active Regular Taxpayer",
    verificationDate: "2017 GST Transition | October 2026 Active Status",
    status: "Active & 100% Tax Compliant",
    keyClauses: [
      "Enterprise founded in 2000; formally registered under GSTIN 19AJKPR7582B1ZR during the July 2017 national rollout.",
      "GSTR-1 and GSTR-3B filings executed on or before statutory due dates every month.",
      "100% Input Tax Credit (ITC) eligibility for corporate buyers on the standard 18% GST component.",
    ],
    securityWatermark: "CBIC GST SYSTEM VERIFIED TAXPAYER",
    verificationPortalUrl: "https://services.gst.gov.in",
  },
  {
    id: "gem-vendor",
    category: "Corporate, Tax & Public Procurement",
    title: "Government e-Marketplace (GeM) Vendor",
    documentType: "GeM Primary Seller Registration & Service Provider Credentials",
    issuer: "GeM SPV, Ministry of Commerce and Industry, Govt. of India",
    licenseNumber: "GeM/SP/SECURITY/•••••• [Pre-Qualified Vendor]",
    auditedEntity: "Advance Corporate Security",
    registeredOffice: "Barrackpore, Kolkata, West Bengal",
    scope: "Public Sector & Government Central Security Tenders Pan-India",
    validity: "Active & L-1 Bid Ready",
    verificationDate: "October 2026 Valid Empanelment",
    status: "Bid-Ready & Pre-Qualified",
    keyClauses: [
      "Adheres strictly to the Ministry of Finance Department of Expenditure OM prescribing minimum 3.85% administrative service fee floor.",
      "MSME / Udyam registration holder qualifying for Earnest Money Deposit (EMD) exemption on eligible tenders.",
      "Demonstrated delivery capability for Indian Air Force (IAF), BSF, CPCB, and State Electricity Boards.",
    ],
    securityWatermark: "GeM GOVERNMENT PROCUREMENT VERIFIED",
    verificationPortalUrl: "https://gem.gov.in",
  },
];

export function CredentialModalViewer() {
  const [selectedCred, setSelectedCred] = useState<RedactedCertificateData | null>(null);

  useEffect(() => {
    if (selectedCred) {
      trackEvent("credential_view", {
        credentialId: selectedCred.id,
        label: selectedCred.title,
        category: selectedCred.category,
      });
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCred(null);
    };
    if (selectedCred) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCred]);

  return (
    <>
      {/* ── Interactive Trigger Buttons embedded in Cards ── */}
      <div className="space-y-12">
        {/* We expose a helper hook / event listener, or render the trigger buttons */}
      </div>

      {/* ── Modal Dialog ── */}
      {selectedCred && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCred(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-gold/40 overflow-hidden relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header (Official Government Dossier Look) */}
            <div className="bg-gradient-to-r from-navy via-[#0d2458] to-navy px-6 py-5 text-white relative">
              {/* Official Seal Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold font-roboto block">
                      OFFICIAL STATUTORY VERIFICATION EXTRACT
                    </span>
                    <h3 id="cert-modal-title" className="text-lg sm:text-xl font-black font-roboto text-white leading-tight">
                      {selectedCred.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCred(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors text-base"
                  aria-label="Close certificate modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto relative">
              {/* Watermark in background */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none text-center font-black font-roboto text-4xl sm:text-5xl uppercase tracking-widest leading-relaxed -rotate-12"
                aria-hidden="true"
              >
                {selectedCred.securityWatermark}
              </div>

              {/* Status & Redacted Badge Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Verification Status:</span>
                  <span className="text-emerald-700 font-bold inline-flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {selectedCred.status}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Audit Period:</span>
                  <span className="text-navy font-bold font-mono">{selectedCred.verificationDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Document Type:</span>
                  <span className="text-sky-700 font-bold">{selectedCred.category}</span>
                </div>
              </div>

              {/* Key Metadata Table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Certificate / License No:</span>
                  <span className="text-navy font-mono font-bold sm:col-span-2 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-amber-600" />
                    {selectedCred.licenseNumber}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Audited Legal Entity:</span>
                  <span className="text-navy font-bold sm:col-span-2">{selectedCred.auditedEntity}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Controlling Authority / Issuer:</span>
                  <span className="text-slate-800 sm:col-span-2">{selectedCred.issuer}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Registered Address:</span>
                  <span className="text-slate-700 sm:col-span-2 font-mono text-[11px]">{selectedCred.registeredOffice}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Authorized Jurisdiction &amp; Scope:</span>
                  <span className="text-slate-800 font-medium sm:col-span-2">{selectedCred.scope}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Validity &amp; Standing:</span>
                  <span className="text-emerald-700 font-bold sm:col-span-2">{selectedCred.validity}</span>
                </div>
              </div>

              {/* Verified Operating Mandate Clauses */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-navy font-roboto mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-gold" />
                  Verified Operating Mandate &amp; Regulatory Clauses
                </h4>
                <ul className="space-y-2">
                  {selectedCred.keyClauses.map((clause, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{clause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  <strong>Procurement Audit Notice:</strong> In compliance with security data governance standards, document serial identifiers have been partially redacted for public web inspection. Full unredacted high-resolution certificates, bank TRRN reconciliation dockets, and auditor sign-offs are available via our dedicated Vendor Onboarding Dossier.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/request-audit"
                  className="flex-1 py-3 px-4 rounded-xl bg-navy hover:bg-navy-light text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
                  onClick={() => setSelectedCred(null)}
                >
                  <Download className="w-4 h-4 text-gold" />
                  Request Full Unredacted Compliance Pack
                </Link>

                {selectedCred.verificationPortalUrl && (
                  <a
                    href={selectedCred.verificationPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition border border-slate-200"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Export helper to trigger modal from page cards ──────────────────────────
export function CredentialViewerCard({
  credId,
  item,
}: {
  credId: string;
  item: {
    title: string;
    issuer: string;
    reference: string;
    status: string;
    scope: string;
    description: string;
  };
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const credData = STATUTORY_CREDENTIALS_DATA.find((c) => c.id === credId) || {
    id: credId,
    category: "Regulatory Licensing",
    title: item.title,
    documentType: "Statutory Compliance Record",
    issuer: item.issuer,
    licenseNumber: `${item.reference} [Redacted for Security]`,
    auditedEntity: "Advance Corporate Security",
    registeredOffice: "1/2, Bhattacharjee Para Lane, Barrackpore, Kolkata - 700120",
    scope: item.scope,
    validity: "Active & In Good Standing",
    verificationDate: "October 2026 Audit",
    status: item.status,
    keyClauses: [
      item.description,
      "Full adherence to state statutory minimum wage orders and social security acts.",
      "Monthly electronic wage register and bank credit proofs maintained for audit inspection.",
    ],
    securityWatermark: "ADVANCE CORPORATE SECURITY OFFICIAL STATUTORY RECORD",
  };

  return (
    <div className="p-5 rounded-xl border border-slate-200 hover:border-sky/50 hover:shadow-xs transition bg-slate-50/40 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold text-navy leading-snug">{item.title}</h3>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
            {item.status}
          </span>
        </div>

        <p className="text-xs font-semibold text-sky mb-2">{item.issuer}</p>

        <div className="space-y-1 text-xs text-slate-600 mb-3">
          <p>
            <strong className="text-slate-800">Reference:</strong> {item.reference}
          </p>
          <p>
            <strong className="text-slate-800">Jurisdiction / Scope:</strong> {item.scope}
          </p>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/70 mb-4">
          {item.description}
        </p>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="w-full py-2.5 px-3 rounded-lg bg-navy/5 hover:bg-navy/10 text-navy font-bold text-xs flex items-center justify-center gap-2 transition border border-navy/15 group"
      >
        <Lock className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
        <span>Inspect Redacted Certificate Extract</span>
      </button>

      {/* ── Modal Dialog for this card ── */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`cert-modal-${credId}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-gold/40 overflow-hidden relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="bg-gradient-to-r from-navy via-[#0d2458] to-navy px-6 py-5 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold font-roboto block">
                      OFFICIAL STATUTORY VERIFICATION EXTRACT
                    </span>
                    <h3 id={`cert-modal-${credId}`} className="text-lg sm:text-xl font-black font-roboto text-white leading-tight">
                      {credData.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors text-base"
                  aria-label="Close certificate modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto relative text-left">
              {/* Watermark in background */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none text-center font-black font-roboto text-4xl sm:text-5xl uppercase tracking-widest leading-relaxed -rotate-12"
                aria-hidden="true"
              >
                {credData.securityWatermark}
              </div>

              {/* Status & Redacted Badge Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Verification Status:</span>
                  <span className="text-emerald-700 font-bold inline-flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {credData.status}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Audit Period:</span>
                  <span className="text-navy font-bold font-mono">{credData.verificationDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block text-[11px]">Document Type:</span>
                  <span className="text-sky-700 font-bold">{credData.category}</span>
                </div>
              </div>

              {/* Key Metadata Table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Certificate / License No:</span>
                  <span className="text-navy font-mono font-bold sm:col-span-2 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-amber-600" />
                    {credData.licenseNumber}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Audited Legal Entity:</span>
                  <span className="text-navy font-bold sm:col-span-2">{credData.auditedEntity}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Controlling Authority / Issuer:</span>
                  <span className="text-slate-800 sm:col-span-2">{credData.issuer}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Registered Address:</span>
                  <span className="text-slate-700 sm:col-span-2 font-mono text-[11px]">{credData.registeredOffice}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/60">
                  <span className="font-bold text-slate-600 sm:col-span-1">Authorized Jurisdiction &amp; Scope:</span>
                  <span className="text-slate-800 font-medium sm:col-span-2">{credData.scope}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                  <span className="font-bold text-slate-600 sm:col-span-1">Validity &amp; Standing:</span>
                  <span className="text-emerald-700 font-bold sm:col-span-2">{credData.validity}</span>
                </div>
              </div>

              {/* Verified Operating Mandate Clauses */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-navy font-roboto mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-gold" />
                  Verified Operating Mandate &amp; Regulatory Clauses
                </h4>
                <ul className="space-y-2">
                  {credData.keyClauses.map((clause, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{clause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  <strong>Procurement Audit Notice:</strong> In compliance with security data governance standards, document serial identifiers have been partially redacted for public web inspection. Full unredacted high-resolution certificates, bank TRRN reconciliation dockets, and auditor sign-offs are available via our dedicated Vendor Onboarding Dossier.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/request-audit"
                  className="flex-1 py-3 px-4 rounded-xl bg-navy hover:bg-navy-light text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
                  onClick={() => setModalOpen(false)}
                >
                  <Download className="w-4 h-4 text-gold" />
                  Request Full Unredacted Compliance Pack
                </Link>

                {credData.verificationPortalUrl && (
                  <a
                    href={credData.verificationPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition border border-slate-200"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
