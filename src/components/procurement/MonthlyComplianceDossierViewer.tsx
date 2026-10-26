"use client";

import React, { useState } from "react";
import {
  FileCheck2,
  ShieldCheck,
  AlertTriangle,
  Building2,
  Receipt,
  Download,
  ExternalLink,
  CheckCircle2,
  Lock,
  Layers,
  Scale,
  CreditCard,
  FileText,
} from "lucide-react";

interface DossierPart {
  id: string;
  tabLabel: string;
  partNumber: string;
  documentTitle: string;
  statutoryAct: string;
  mandatedTimeline: string;
  principalEmployerShield: string;
  criticalFields: { label: string; value: string; sampleProof: string }[];
  auditChecklist: string[];
  mockSnippet: {
    referenceHeader: string;
    details: { [key: string]: string };
    verdict: string;
  };
}

const DOSSIER_PARTS: DossierPart[] = [
  {
    id: "epf-ecr",
    tabLabel: "1. EPFO ECR & TRRN",
    partNumber: "Dossier Component 01",
    documentTitle: "EPFO Electronic Challan cum Return (ECR) & TRRN Bank Receipt",
    statutoryAct: "Employees' Provident Funds & Miscellaneous Provisions Act, 1952 (Section 6, 7A & 14B)",
    mandatedTimeline: "Deposited on or before 15th of the succeeding calendar month",
    principalEmployerShield:
      "Eliminates vicarious client co-liability under EPFO Section 7A. Prevents EPFO Enforcement Officers from issuing retrospective liability notices, bank freeze orders, or assessing 100% penal damages under Section 14B against the Principal Employer.",
    criticalFields: [
      {
        label: "TRRN (Temporary Return Reference Number)",
        value: "Verified on EPFO unified portal",
        sampleProof: "TRRN: 3172408019948",
      },
      {
        label: "Establishment Code",
        value: "Matches vendor's regional PF office code",
        sampleProof: "Code: WBBAR0049281000",
      },
      {
        label: "Contribution Split (13%)",
        value: "12% EPF + 0.5% EDLI + 0.5% Admin",
        sampleProof: "₹1,950 per guard on ₹15,000 wage base",
      },
      {
        label: "Headcount Reconciliation",
        value: "100% matching site attendance roster",
        sampleProof: "Deployed: 48 Guards / Remitted: 48 UANs",
      },
    ],
    auditChecklist: [
      "Cross-verify the TRRN on the EPFO official portal (unifiedportal-epfo.epfindia.gov.in) to ensure the payment status reads 'Payment Confirmed'.",
      "Inspect the employee-wise UAN schedule annexed to the ECR: confirm that every guard stationed at your premise is explicitly listed with gross and EPF wages.",
      "Check the corresponding bank account debit advice to ensure the remitted amount precisely matches Challan A/C No. 1, 2, 10, 21, and 22.",
    ],
    mockSnippet: {
      referenceHeader: "EMPLOYEES PROVIDENT FUND ORGANISATION — COMBINED CHALLAN (A/Cs 1, 2, 10, 21, 22)",
      details: {
        "TRRN Number": "3172408019948",
        "Establishment ID": "WBBAR0049281000",
        "Wage Month": "September 2026",
        "Total Subscribed Members": "342 Active Personnel",
        "Deployment Site Subset": "48 Security Guards (Facility Alpha)",
        "EPF Contribution (A/C 1)": "₹1,23,120.00",
        "EDLI / Admin (A/Cs 2, 21, 22)": "₹10,260.00",
        "Bank Transaction Ref (UTR)": "SBIN002918840192 (State Bank of India)",
        "Payment Timestamp": "11-Oct-2026 14:22:18 IST",
      },
      verdict: "STATUS: 100% FULLY REMITTED • ZERO VICARIOUS LIABILITY",
    },
  },
  {
    id: "esic-challan",
    tabLabel: "2. ESIC Contribution Sheet",
    partNumber: "Dossier Component 02",
    documentTitle: "ESIC Monthly Contribution Challan & Employee IP Roster",
    statutoryAct: "Employees' State Insurance Act, 1948 (Section 39, 40 & 85)",
    mandatedTimeline: "Deposited on or before 15th of the succeeding month",
    principalEmployerShield:
      "Protects the client from catastrophic worker injury and fatal accident liability under the Employees' Compensation Act, 1923. Ensures that medical care, disability pensions, and dependent benefits are exclusively settled by the ESIC Corporation rather than the facility owner.",
    criticalFields: [
      {
        label: "ESIC 17-Digit Employer Code",
        value: "Validated against active ESIC registry",
        sampleProof: "Code: 41000582910000999",
      },
      {
        label: "Insurance Number (IP) Roster",
        value: "Individual IP number for each on-site guard",
        sampleProof: "10-digit Pehchan Insurance Number",
      },
      {
        label: "Statutory Rate (4.0%)",
        value: "3.25% Employer + 0.75% Employee",
        sampleProof: "₹487.50 (ER) + ₹112.50 (EE) per ₹15k wage",
      },
      {
        label: "Online Payment Receipt",
        value: "State Bank of India / RBI payment gateway UTR",
        sampleProof: "Receipt Ref: ESIC-PAY-994812",
      },
    ],
    auditChecklist: [
      "Confirm that no active security personnel earning up to ₹21,000/month is omitted from the ESIC contribution docket.",
      "Verify the Pehchan card generation for newly onboarded guards so that cashless hospital benefits are instantaneously accessible.",
      "Reconcile total gross wages declared in the ESIC return with the monthly Form B muster roll to eliminate wage under-reporting.",
    ],
    mockSnippet: {
      referenceHeader: "EMPLOYEES' STATE INSURANCE CORPORATION — MONTHLY CONTRIBUTION CHALLAN",
      details: {
        "ESIC Employer Code": "41000582910000999",
        "Challan Number": "04124139928100",
        "Contribution Month": "September 2026",
        "Total Insured Persons (IP)": "318 Employees",
        "Site Specific IP Count": "48 Stationed Guards",
        "Total Wages Subject to ESI": "₹7,20,000.00",
        "Employer Contribution (3.25%)": "₹23,400.00",
        "Employee Contribution (0.75%)": "₹5,400.00",
        "Payment Confirmation": "Transaction Successful — RBI / SBI Aggregator",
      },
      verdict: "STATUS: 100% HEALTH & ACCIDENT COVERAGE ACTIVE",
    },
  },
  {
    id: "form-b-wages",
    tabLabel: "3. Form B Wage Register",
    partNumber: "Dossier Component 03",
    documentTitle: "Form B Wage Register & Bank NEFT/RTGS Mandate Proof",
    statutoryAct: "Payment of Wages Act, 1936 / Minimum Wages Act, 1948 & CLRA Central Rules (Rule 78)",
    mandatedTimeline: "Disbursed on or before 7th (or 10th) day of each month",
    principalEmployerShield:
      "Shields the Principal Employer under Section 21 of the Contract Labour Act. Proves that wages were credited directly into individual bank accounts with zero cash handling, zero unauthorized deductions, and full compliance with gazetted basic + VDA rates.",
    criticalFields: [
      {
        label: "Payment Mode (Strict Non-Cash)",
        value: "Direct Bank Transfer (NEFT/RTGS/IMPS)",
        sampleProof: "Bank UTR list signed by Branch Manager",
      },
      {
        label: "Attendance & Biometric Log",
        value: "Exact mandays worked + Reliever duty hours",
        sampleProof: "26 working days + 4 paid weekly offs",
      },
      {
        label: "VDA & Overtime Audit",
        value: "Overtime calculated at 2x normal wage",
        sampleProof: "Overtime hours tracked in Form XXIII",
      },
      {
        label: "Itemized Form XIX Wage Slips",
        value: "Delivered to guards before wage payout",
        sampleProof: "Digitally acknowledged or physical copy",
      },
    ],
    auditChecklist: [
      "Ensure payment was executed strictly through electronic bank transfer; cash wage payouts are strictly prohibited and non-defensible in a labour court.",
      "Check that the Basic + VDA meets or exceeds the prevailing Chief Labour Commissioner (Central) or State Minimum Wage notification.",
      "Verify that 8.33% statutory bonus and reliever provisions are explicitly accounted for without unauthorized salary subtractions.",
    ],
    mockSnippet: {
      referenceHeader: "FORM B — REGISTER OF WAGES (Under Rule 78(1)(a)(i) of Contract Labour Central Rules)",
      details: {
        "Contractor": "Advance Corporate Security",
        "Principal Employer Establishment": "Logistics & Corporate Campus, Sector V",
        "Wage Period": "01-Sep-2026 to 30-Sep-2026",
        "Disbursement Date": "05-Oct-2026 (Before 7th statutory cutoff)",
        "Disbursement Instrument": "Bulk NEFT via HDFC Bank CMS Corporate Payroll",
        "Bank CMS Batch ID": "CMS-PAY-202609-00918",
        "Total Net Wages Disbursed": "₹8,46,720.00 (48 Guards)",
        "Cash Payments": "₹0.00 (Strict Zero-Cash Policy)",
      },
      verdict: "STATUS: 100% ELECTRONIC WAGE SETTLEMENT CERTIFIED",
    },
  },
  {
    id: "gstr-3b-itc",
    tabLabel: "4. GST Filing & ITC Sheet",
    partNumber: "Dossier Component 04",
    documentTitle: "GSTR-3B Acknowledgement & GSTR-2B Input Tax Credit Reconciliation",
    statutoryAct: "Central Goods and Services Tax Act, 2017 (Section 16, 37 & 39)",
    mandatedTimeline: "GSTR-1 by 11th and GSTR-3B by 20th of the following month",
    principalEmployerShield:
      "Protects the enterprise finance department from loss of 18% Input Tax Credit. Under Section 16(2)(c) of the CGST Act, a buyer cannot avail ITC unless the supplier has actually paid the tax to the government. This docket proves full GST remittance, preventing tax notices and 18% penalty interest.",
    criticalFields: [
      {
        label: "SAC Code for Security",
        value: "SAC 998525 (Investigation & Security Services)",
        sampleProof: "18% GST (9% CGST + 9% SGST or 18% IGST)",
      },
      {
        label: "ARN (Application Ref Number)",
        value: "Filed GSTR-3B acknowledgment proof",
        sampleProof: "ARN: AA190926018829F",
      },
      {
        label: "GSTR-2B Auto-Population",
        value: "Invoice visibly reflected on client portal",
        sampleProof: "Matched in Buyer GSTR-2B portal",
      },
      {
        label: "E-Invoice QR Code",
        value: "Mandatory for eligible turnover entities",
        sampleProof: "IRN with embedded cryptographical QR",
      },
    ],
    auditChecklist: [
      "Confirm that the security service tax invoice bears the valid 15-digit GSTIN of Advance Corporate Security.",
      "Check that the taxable value and 18% GST charged in the previous invoice is fully reported in GSTR-1 and paid in GSTR-3B.",
      "Verify that the ARN receipt shows 'Filed' status prior to approving the finance ledger for current month invoice release.",
    ],
    mockSnippet: {
      referenceHeader: "GOODS AND SERVICES TAX PORTAL — GSTR-3B FILING ACKNOWLEDGEMENT",
      details: {
        "Supplier GSTIN": "19AJKPR7582B1ZR (Advance Corporate Security)",
        "Buyer Legal Name": "Enterprise Client Infrastructure Ltd",
        "Tax Period": "August 2026 (Preceding Bill Remittance)",
        "ARN (Filing Ref)": "AA190826019941K",
        "Date of Filing": "18-Sep-2026 (Before 20th statutory deadline)",
        "Tax Payable (SAC 998525)": "₹1,84,320.00 (Paid via Electronic Cash Ledger)",
        "ITC Status for Client": "100% Eligible & Visible in GSTR-2B",
      },
      verdict: "STATUS: 18% INPUT TAX CREDIT FULLY SAFEGUARDED",
    },
  },
  {
    id: "pe-indemnity",
    tabLabel: "5. Section 21(4) Indemnity",
    partNumber: "Dossier Component 05",
    documentTitle: "Principal Employer Statutory Indemnity & CLRA Certificate",
    statutoryAct: "Contract Labour (Regulation & Abolition) Act, 1970 (Section 21(4)) & Indian Contract Act, 1872",
    mandatedTimeline: "Executed concurrently with monthly billing docket",
    principalEmployerShield:
      "A binding legal indemnity executed on the agency's formal letterhead. Unconditionally indemnifies the Principal Employer, its Directors, and Officers against any third-party claims, unpaid wage demands, labour tribunal actions, or penalties arising from the deployed security cadre.",
    criticalFields: [
      {
        label: "Statutory Act Invocation",
        value: "CLRA 1970 Section 21(4) & Section 20",
        sampleProof: "Unconditional indemnification clause",
      },
      {
        label: "Coverage Scope",
        value: "Wages, PF, ESI, Bonus, Gratuity, LWF",
        sampleProof: "Comprehensive statutory envelope",
      },
      {
        label: "Authorized Signatory",
        value: "Proprietor / Managing Partner / Director",
        sampleProof: "Company Seal & Sign with date",
      },
      {
        label: "Zero Litigation Attestation",
        value: "No ongoing labour court disputes on site",
        sampleProof: "Affidavit of clean industrial record",
      },
    ],
    auditChecklist: [
      "Ensure the certificate references the specific service month, facility location, and contract work order number.",
      "Check that the indemnity is signed by an authorized signatory of the agency with the official company seal.",
      "Retain this certificate in the Principal Employer's permanent compliance vault for minimum 5 years to withstand CAG or labour audits.",
    ],
    mockSnippet: {
      referenceHeader: "FORMAL CERTIFICATE & INDEMNITY BOND UNDER SECTION 21(4) OF CLRA ACT 1970",
      details: {
        "Issued By": "Advance Corporate Security (Sole Proprietorship)",
        "To (Principal Employer)": "Head of Procurement & Legal, Enterprise Client Ltd",
        "Facility Deployed": "Main Industrial Plant & Warehousing Terminal",
        "Period of Indemnity": "Month of September 2026",
        "Certification": "Certified that 100% wages, EPF, ESIC, and statutory allowances have been disbursed without deduction.",
        "Indemnity Covenant": "Contractor holds Principal Employer completely harmless from all third-party claims, fines, and legal costs.",
        "Signatory": "Authorized Signatory — Advance Corporate Security (Seal Affixed)",
      },
      verdict: "STATUS: ABSOLUTE AUDIT IMMUNITY FOR PRINCIPAL EMPLOYER",
    },
  },
];

export default function MonthlyComplianceDossierViewer() {
  const [activeTab, setActiveTab] = useState<string>("epf-ecr");

  const activePart = DOSSIER_PARTS.find((p) => p.id === activeTab) || DOSSIER_PARTS[0];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-2">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Principal Employer Audit Shield</span>
          </div>
          <h3 className="font-roboto font-extrabold text-navy text-xl sm:text-2xl">
            Interactive Compliance Dossier Inspector
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Inspect the exact 5 statutory components ACS delivers with every monthly invoice to guarantee 100% audit readiness and zero vicarious liability.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-navy text-white">
            5 / 5 Pack Standard
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
        {DOSSIER_PARTS.map((part) => (
          <button
            key={part.id}
            type="button"
            onClick={() => setActiveTab(part.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === part.id
                ? "bg-navy text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {part.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-6 animate-fade-in">
        {/* Component Header & Legal Shield */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-sky uppercase tracking-wider block">
              {activePart.partNumber}
            </span>
            <h4 className="font-roboto font-bold text-navy text-lg sm:text-xl">
              {activePart.documentTitle}
            </h4>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
              <span>🏛️ <strong>Act:</strong> {activePart.statutoryAct}</span>
              <span>📅 <strong>Timeline:</strong> {activePart.mandatedTimeline}</span>
            </div>
          </div>
        </div>

        {/* Principal Employer Legal Shield Banner */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
          <ShieldCheck size={20} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5 text-amber-950">
              Audit Shield Provided to Client (Principal Employer):
            </strong>
            {activePart.principalEmployerShield}
          </div>
        </div>

        {/* 2-Column: Key Fields + Mock Audit Docket */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Key Fields & Scrutiny Checkpoints */}
          <div className="lg:col-span-5 space-y-4">
            <h5 className="font-roboto font-bold text-navy text-sm uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Mandatory Audit Parameters</span>
            </h5>

            <div className="space-y-2.5">
              {activePart.criticalFields.map((field) => (
                <div
                  key={field.label}
                  className="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-navy">{field.label}</span>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      {field.sampleProof}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{field.value}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h6 className="font-roboto font-bold text-navy text-xs mb-2 uppercase tracking-wide">
                Auditor Verification Checklist:
              </h6>
              <ul className="space-y-2 text-xs text-slate-600">
                {activePart.auditChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Realistic Mock Docket Snippet */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-300 bg-slate-900 text-slate-100 overflow-hidden shadow-md font-mono text-xs">
              <div className="bg-slate-800 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5 font-sans font-bold text-sky-400">
                  <FileText size={14} />
                  <span>Statutory Compliance Extract</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Live Audit Model
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3.5">
                <div className="text-sky-300 font-bold text-[11px] tracking-wide border-b border-slate-800 pb-2">
                  {activePart.mockSnippet.referenceHeader}
                </div>

                <dl className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[11px]">
                  {Object.entries(activePart.mockSnippet.details).map(([k, v]) => (
                    <div key={k} className="border-b border-slate-800/80 pb-1">
                      <dt className="text-slate-400 text-[10px] uppercase">{k}</dt>
                      <dd className="font-semibold text-white mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-400 font-bold">
                    {activePart.mockSnippet.verdict}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Annexure Pack Ref: ACS-COMP-2026-M09
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 italic text-center">
              Sample compliance record extract. ACS delivers certified, watermarked digital PDFs matching each deployed establishment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
