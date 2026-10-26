"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Printer,
  RotateCcw,
  Download,
  FileCheck2,
  ShieldCheck,
  Building2,
  Scale,
  FileText,
  BadgeCheck,
} from "lucide-react";

export interface ChecklistItem {
  id: string;
  number: number;
  title: string;
  category: "statutory" | "labour" | "financial";
  categoryLabel: string;
  statutoryAct: string;
  documentRequired: string;
  scrutinyGuideline: string;
  auditRiskIfMissing: string;
  envelope: "Technical Envelope A" | "Financial / Statutory Envelope B";
}

const CHECKLIST_DATA: ChecklistItem[] = [
  {
    id: "psara-form-v",
    number: 1,
    title: "PSARA Form-V License (State Specific)",
    category: "statutory",
    categoryLabel: "Statutory Licensing",
    statutoryAct: "PSARA Act 2005 (Section 4 & 7)",
    documentRequired: "Form-V Certificate issued by State Controlling Authority (Home Dept)",
    scrutinyGuideline:
      "Must be valid in the specific State and operational District where the site is situated. Verify controlling authority seal, validity date, and no territorial exclusions.",
    auditRiskIfMissing:
      "Bid is non-responsive. Deploying unlicensed guards is a criminal offense under Section 4 with client co-liability under CLRA.",
    envelope: "Technical Envelope A",
  },
  {
    id: "udyam-msme",
    number: 2,
    title: "Udyam MSME Registration Certificate",
    category: "statutory",
    categoryLabel: "Statutory Licensing",
    statutoryAct: "MSMED Act 2006 & GFR 2017 Rule 170",
    documentRequired: "Udyam Registration Certificate with NIC Code 80100 (Private Security Activities)",
    scrutinyGuideline:
      "Mandatory for claiming EMD exemption under GFR 170. Check that NIC code matches security activities, not generic trading.",
    auditRiskIfMissing:
      "Bidder must submit full Earnest Money Deposit (EMD). Ineligible for MSME purchase preference without valid Udyam certificate.",
    envelope: "Technical Envelope A",
  },
  {
    id: "pan-card",
    number: 3,
    title: "Permanent Account Number (PAN)",
    category: "statutory",
    categoryLabel: "Statutory Licensing",
    statutoryAct: "Income Tax Act 1961 (Section 139A)",
    documentRequired: "PAN Card of the Proprietorship / Partnership / Company",
    scrutinyGuideline:
      "Must match the registered legal name of the entity bidding on GeM. 4th letter indicates legal constitution ('P' for Person/Proprietorship, 'F' for Firm, 'C' for Company).",
    auditRiskIfMissing:
      "TDS deduction at punitive rate of 20% under Section 206AA. Immediate disqualification on GeM portal.",
    envelope: "Technical Envelope A",
  },
  {
    id: "gstin-filings",
    number: 4,
    title: "GSTIN Certificate & 3-Month Filing Receipts",
    category: "statutory",
    categoryLabel: "Statutory Licensing",
    statutoryAct: "CGST Act 2017 (Section 22 & 39)",
    documentRequired: "GST REG-06 Certificate and GSTR-3B filed acknowledgments for last 3 consecutive months",
    scrutinyGuideline:
      "Check active registration status on the GST portal under SAC 998525 (Security services). Verify zero tax filing defaults.",
    auditRiskIfMissing:
      "Buyer will be denied Input Tax Credit (ITC) of 18% under CGST Section 16(2)(c) if vendor defaults on monthly tax remittance.",
    envelope: "Technical Envelope A",
  },
  {
    id: "epf-ecr-trrn",
    number: 5,
    title: "EPFO Electronic Challan cum Return (ECR & TRRN)",
    category: "labour",
    categoryLabel: "Labour Remittance",
    statutoryAct: "EPF & MP Act 1952 (Section 6 & 7A)",
    documentRequired: "EPFO Establishment Code letter + Recent ECR sheet with bank TRRN payment debit receipt",
    scrutinyGuideline:
      "Verify TRRN (Temporary Return Reference Number) on the EPFO Unified Portal. Must confirm remittance of 13% employer contribution (12% EPF + 0.5% EDLI + 0.5% Admin).",
    auditRiskIfMissing:
      "Principal Employer faces direct recovery, bank attachment, and 12% penal damages under Section 7A & 14B.",
    envelope: "Technical Envelope A",
  },
  {
    id: "esic-challan",
    number: 6,
    title: "ESIC Monthly Contribution Challan & Payment Proof",
    category: "labour",
    categoryLabel: "Labour Remittance",
    statutoryAct: "Employees' State Insurance Act 1948",
    documentRequired: "ESIC 17-digit Employer Code + Recent monthly payment challan with employee IP numbers",
    scrutinyGuideline:
      "Validate 3.25% employer + 0.75% employee contribution. Ensure guard headcount covered in challan aligns with audited workforce scale.",
    auditRiskIfMissing:
      "In event of site injury or death, facility owner is personally sued under the Employees' Compensation Act 1923.",
    envelope: "Technical Envelope A",
  },
  {
    id: "clra-form-v",
    number: 7,
    title: "Form V under Contract Labour (R&A) Act, 1970",
    category: "labour",
    categoryLabel: "Labour Remittance",
    statutoryAct: "Contract Labour (R&A) Act 1970 (Section 12)",
    documentRequired: "Valid Form-V from previous Principal Employer / Form-VI Contractor License",
    scrutinyGuideline:
      "Confirms contractor is legally authorized to employ contract labour across establishments exceeding statutory headcount thresholds (typically 20+ workers).",
    auditRiskIfMissing:
      "Contractor is deemed unauthorized, rendering contract void and exposing client to direct labour union regularization claims.",
    envelope: "Technical Envelope A",
  },
  {
    id: "audited-financials-udin",
    number: 8,
    title: "3-5 Year Audited Balance Sheets with ICAI UDIN",
    category: "financial",
    categoryLabel: "Financial & Governance",
    statutoryAct: "Companies Act 2013 / ICAI Council Mandate",
    documentRequired: "Balance Sheets, P&L Statements, and Turnover Certificates with active ICAI UDIN",
    scrutinyGuideline:
      "Verify the 18-digit UDIN at udin.icai.org to eliminate fabricated CA certificates. Ensure average annual turnover meets minimum tender threshold (30-50% of bid value).",
    auditRiskIfMissing:
      "Mandatory tender disqualification. Unverifiable financial liquidity implies high risk of wage delays and abrupt site abandonment.",
    envelope: "Financial / Statutory Envelope B",
  },
  {
    id: "solvency-certificate",
    number: 9,
    title: "Bank Solvency Certificate from Scheduled Commercial Bank",
    category: "financial",
    categoryLabel: "Financial & Governance",
    statutoryAct: "GFR 2017 Financial Viability Norms",
    documentRequired: "Original Solvency Certificate issued by a Scheduled Commercial / Nationalized Bank",
    scrutinyGuideline:
      "Must be issued within 6 to 12 months prior to bid date, certifying solvency up to 40% of estimated annual contract value.",
    auditRiskIfMissing:
      "Agency lacks working capital to pay guards on 1st-7th of the month before government reimbursement, leading to absenteeism and strikes.",
    envelope: "Financial / Statutory Envelope B",
  },
  {
    id: "non-blacklisting-affidavit",
    number: 10,
    title: "Notarized Non-Blacklisting & Vigilance Affidavit",
    category: "financial",
    categoryLabel: "Financial & Governance",
    statutoryAct: "GFR 2017 Rule 151 & GeM GTC Clause 4",
    documentRequired: "Notarized affidavit on non-judicial stamp paper attested by Notary Public / Oath Commissioner",
    scrutinyGuideline:
      "Affirms that the bidder has not been debarred, blacklisted, or suspended by any Central Ministry, State Government, PSU, or Autonomous Body.",
    auditRiskIfMissing:
      "Failure to provide affidavit results in instant technical envelope rejection. False affidavit triggers criminal prosecution under IPC/BNS.",
    envelope: "Financial / Statutory Envelope B",
  },
  {
    id: "training-institute-moa",
    number: 11,
    title: "PSARA Section 9 Recognized Training Institute MoA",
    category: "labour",
    categoryLabel: "Labour Remittance",
    statutoryAct: "PSARA Act 2005 (Section 9) & Rules 2020",
    documentRequired: "MoA / Agreement with Home Dept-recognized Security Guard Training Institute + Syllabus certificate",
    scrutinyGuideline:
      "Confirms guards undergo 100 hrs classroom + 60 hrs field training (fire safety, unarmed combat, drill, frisking, first aid).",
    auditRiskIfMissing:
      "Deploying untrained personnel violates statutory operating conditions of PSARA Form-V license, risking license revocation.",
    envelope: "Technical Envelope A",
  },
  {
    id: "iso-certifications",
    number: 12,
    title: "ISO 9001:2015 & ISO 45001 (OHSAS) Certifications",
    category: "financial",
    categoryLabel: "Financial & Governance",
    statutoryAct: "International Organization for Standardization / IAF",
    documentRequired: "Valid ISO 9001:2015 (Quality Management) and ISO 45001:2018 (Occupational Health & Safety) certificates",
    scrutinyGuideline:
      "Check IAF (International Accreditation Forum) or NABCB accreditation. Scope of certification must specifically state 'Provision of Private Security & Guarding Services'.",
    auditRiskIfMissing:
      "Loss of 10 to 15 points in the 100-Point Technical Evaluation Matrix, often causing failure to meet the 75-point qualifying threshold.",
    envelope: "Technical Envelope A",
  },
];

export default function GemTenderChecklistInteractive() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<"all" | "statutory" | "labour" | "financial">("all");

  const totalCount = CHECKLIST_DATA.length;
  const verifiedCount = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = Math.round((verifiedCount / totalCount) * 100);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const markAll = () => {
    const allChecked: Record<string, boolean> = {};
    CHECKLIST_DATA.forEach((item) => {
      allChecked[item.id] = true;
    });
    setCheckedItems(allChecked);
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const filteredItems = CHECKLIST_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold mb-2">
            <ShieldCheck size={14} className="text-sky" />
            <span>Official GeM / GFR 2017 Evaluation Docket</span>
          </div>
          <h3 className="font-roboto font-extrabold text-navy text-xl sm:text-2xl">
            12-Point Pre-Bid Envelope Scrutiny Checklist
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Interactive verification docket for Tender Inviting Authorities (TIA), Technical Evaluation Committees (TEC), and Finance Officers.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Print audit sheet"
          >
            <Printer size={14} />
            <span>Print Sheet</span>
          </button>
          <button
            type="button"
            onClick={markAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors border border-sky-200"
          >
            <BadgeCheck size={14} />
            <span>Verify All</span>
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Audit Readiness Progress Tracker */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-roboto font-bold text-navy text-sm">
              Tender Scrutiny Progress:
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-navy text-white">
              {verifiedCount} / {totalCount} Verified
            </span>
          </div>
          <div className="text-xs text-slate-600 font-medium">
            {completionPercentage === 100 ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 size={14} />
                100% Audit Ready — All 12 Statutory Criteria Satisfied
              </span>
            ) : (
              <span>{100 - completionPercentage}% Remaining for Technical Clearance</span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              completionPercentage === 100
                ? "bg-emerald-500"
                : completionPercentage >= 60
                ? "bg-sky"
                : "bg-amber-500"
            }`}
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-1 print:hidden">
        {[
          { key: "all", label: "All 12 Items", count: totalCount },
          { key: "statutory", label: "Statutory Licensing", count: 4 },
          { key: "labour", label: "Labour Remittances", count: 4 },
          { key: "financial", label: "Financial & Governance", count: 4 },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveFilter(tab.key as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === tab.key
                ? "bg-navy text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div className="space-y-3.5">
        {filteredItems.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                isChecked
                  ? "bg-emerald-50/60 border-emerald-300 shadow-2xs"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-2xs"
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* Custom Checkbox */}
                <div className="mt-0.5 shrink-0">
                  <div
                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isChecked && <CheckCircle2 size={16} className="text-white" />}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Item #{item.number < 10 ? `0${item.number}` : item.number}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                      {item.envelope}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {item.statutoryAct}
                    </span>
                  </div>

                  <h4
                    className={`font-roboto font-bold text-sm sm:text-base mb-1 ${
                      isChecked ? "text-emerald-950 line-through-none" : "text-navy"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2.5">
                    <strong className="text-slate-800">Required Document:</strong> {item.documentRequired}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                    <div className="text-slate-700">
                      <span className="font-semibold text-slate-900 block mb-0.5">
                        🔍 Scrutiny Guideline:
                      </span>
                      {item.scrutinyGuideline}
                    </div>
                    <div className="text-rose-900 bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                      <span className="font-semibold text-rose-950 block mb-0.5">
                        ⚠️ Audit Risk If Missing:
                      </span>
                      {item.auditRiskIfMissing}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Print-Only Signature Section */}
      <div className="hidden print:block pt-8 mt-8 border-t border-slate-300 text-xs text-slate-800 space-y-8">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="border-b border-slate-400 pb-12 mb-2" />
            <p className="font-bold">Scrutinizing Officer</p>
            <p className="text-slate-500">Name / Designation</p>
          </div>
          <div>
            <div className="border-b border-slate-400 pb-12 mb-2" />
            <p className="font-bold">Technical Evaluation Committee (TEC)</p>
            <p className="text-slate-500">Member Secretary</p>
          </div>
          <div>
            <div className="border-b border-slate-400 pb-12 mb-2" />
            <p className="font-bold">Tender Inviting Authority (TIA)</p>
            <p className="text-slate-500">Signature &amp; Stamp</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-500 text-center">
          Audited according to GFR 2017 Rule 170/171 and Ministry of Finance DoE OM No. F.6/1/2023-PPD. Generated via Advance Corporate Security B2G Procurement Portal.
        </p>
      </div>
    </div>
  );
}
