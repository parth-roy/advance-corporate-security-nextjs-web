"use client";

import React, { useState } from "react";
import { AlertCircle, ShieldCheck, Download, Printer, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ChecklistItem {
  id: string;
  category: "Statutory & Legal Immunity" | "Supervision & Field Integrity" | "Financial & Pricing Transparency" | "Guard Welfare & Attrition Control";
  title: string;
  description: string;
  legalBasis: string;
  riskIfMissing: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Statutory & Legal Immunity
  {
    id: "psara-form-v",
    category: "Statutory & Legal Immunity",
    title: "State-Specific PSARA Form-V License Verification",
    description: "Verify that the agency holds an active, non-expired Form-V license issued specifically by the State Controlling Authority (Home Dept) for the plant's state jurisdiction.",
    legalBasis: "PSARA Act 2005 (Section 4)",
    riskIfMissing: "Operating without state license is a criminal violation; client faces operational shutdown and legal penalties as co-accused.",
  },
  {
    id: "epf-ecr-trrn",
    category: "Statutory & Legal Immunity",
    title: "Monthly ECR & TRRN Bank Deposit Receipts Prior to Invoicing",
    description: "Ensure the agency provides employee-wise Electronic Challan Cum Return (ECR) matching actual guards deployed, validated with bank TRRN payment confirmations.",
    legalBasis: "EPF & MP Act 1952 (Section 7A & 14B)",
    riskIfMissing: "Principal Employer is vicariously liable for unpaid EPF arrears + 100% penal damages + 12% annual interest.",
  },
  {
    id: "esic-clra-compliance",
    category: "Statutory & Legal Immunity",
    title: "ESIC Active Contribution Cards & CLRA Form-V/VI",
    description: "Confirm active biometric Pehchan cards for all deployed guards, along with valid Contract Labour Act Form-V certificates from the Principal Employer and Form-VI license from the Labour Commissioner.",
    legalBasis: "ESI Act 1948 & CLRA Act 1970",
    riskIfMissing: "Uninsured workplace casualties trigger direct compensation suits under the Employees' Compensation Act against the facility owner.",
  },

  // Supervision & Field Integrity
  {
    id: "supervisory-ratio",
    category: "Supervision & Field Integrity",
    title: "1:15 or Better Dedicated Field Supervisory Span",
    description: "Require a verified supervisor-to-guard deployment ratio not exceeding 1:15, with assigned field officers conducting daily post inspections.",
    legalBasis: "ISO 9001:2015 Operational Standard",
    riskIfMissing: "Diluted supervisory ratios (1:40+) lead to post abandonment, sleeping on duty, unauthorized substitutions, and undetected perimeter breaches.",
  },
  {
    id: "surprise-night-rounds",
    category: "Supervision & Field Integrity",
    title: "Mandatory Motorized Surprise Night Rounds (01:00 - 04:30 AM)",
    description: "Contractual SLA specifying minimum 3 to 4 surprise night inspections per week by dedicated patrolling officers with electronic time-stamped visit logs.",
    legalBasis: "Standard Industrial Security Protocol",
    riskIfMissing: "Over 85% of industrial plant thefts, scrap diversion, and gate compromises occur during unmonitored night hours.",
  },
  {
    id: "digital-patrol-wand",
    category: "Supervision & Field Integrity",
    title: "RFID / Guard Tour Patrol Wand Deployment",
    description: "Verify that security personnel use time-stamped RFID patrol wands or geo-fenced mobile apps to log checkpoints along factory perimeters, storage yards, and dark zones.",
    legalBasis: "Loss Prevention & Asset Protection Standard",
    riskIfMissing: "Inability to prove perimeter verification during insurance claim investigations after theft or fire incidents.",
  },

  // Financial & Pricing Transparency
  {
    id: "doe-service-margin",
    category: "Financial & Pricing Transparency",
    title: "Statutory Floor Compliance (DoE / GeM 3.85%+ Service Margin)",
    description: "Verify that vendor quotes an administrative service charge adhering to Ministry of Finance / DoE OM No. F.6/1/2023-PPD (minimum 3.85%, recommended 5–10%).",
    legalBasis: "GFR Rule 149 / DoE Office Memorandum",
    riskIfMissing: "0% or predatory 1% bids are financially unviable and funded through illegal deductions from guard salaries, sparking wildcat strikes.",
  },
  {
    id: "itemized-cost-breakup",
    category: "Financial & Pricing Transparency",
    title: "Full Line-Item Costing (Basic + VDA + EPF + ESIC + Bonus + Relieving)",
    description: "Insist on itemized cost sheets reflecting latest State/Central Gazette Basic+VDA, 13% EPF, 3.25% ESIC, 8.33% Bonus, 1/6th Relieving Charges, and Uniform Allowance.",
    legalBasis: "Minimum Wages Act 1948 & Payment of Bonus Act 1965",
    riskIfMissing: "Lump-sum quoting hides statutory wage cuts, making the Principal Employer legally vulnerable during labour department inspections.",
  },
  {
    id: "financial-solvency-bank-guarantee",
    category: "Financial & Pricing Transparency",
    title: "Audited CA Balance Sheets & Bank Solvency Certificate",
    description: "Review minimum 3 years audited balance sheets with UDIN-verified CA turnover certificates and formal scheduled commercial bank solvency certification.",
    legalBasis: "Public Procurement & Corporate Governance Code",
    riskIfMissing: "Financially weak contractors default on monthly payroll whenever client invoice processing is delayed, leaving site gates unmanned.",
  },

  // Guard Welfare & Attrition Control
  {
    id: "dbt-wage-disbursement",
    category: "Guard Welfare & Attrition Control",
    title: "Direct Bank Transfer (DBT) On or Before the 7th of Every Month",
    description: "Enforce contract mandate requiring wages to be disbursed directly into bank accounts by the 7th of every month, independent of client bill clearance.",
    legalBasis: "Payment of Wages Act 1936 (Section 5)",
    riskIfMissing: "Cash payments or chronic salary delays trigger high absenteeism, sudden desertion, and unionization agitations at plant gates.",
  },
  {
    id: "police-background-verification",
    category: "Guard Welfare & Attrition Control",
    title: "100% Pre-Deployment Police Verification & Address Attestation",
    description: "Mandate original character and antecedent verification certificates issued by district police authorities before any guard is assigned to plant gates.",
    legalBasis: "PSARA Rules (Rule 4 & 5)",
    riskIfMissing: "Hiring unverified personnel with criminal backgrounds creates severe insider threat for intellectual property, raw materials, and executive safety.",
  },
  {
    id: "structured-training-certification",
    category: "Guard Welfare & Attrition Control",
    title: "160-Hour PSARA Certified Training with Fire & First-Aid Drills",
    description: "Inspect valid training completion certificates from accredited security training academies covering gate etiquette, fire-fighting, and emergency evacuations.",
    legalBasis: "PSARA Section 9 (Mandatory Training Curriculum)",
    riskIfMissing: "Untrained guards panic during industrial emergencies, failing to operate fire extinguishers, hydrant lines, or automated panic systems.",
  },
];

export default function ProcurementChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "psara-form-v": true,
    "epf-ecr-trrn": true,
    "supervisory-ratio": true,
    "itemized-cost-breakup": true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectAll = () => {
    const all: Record<string, boolean> = {};
    CHECKLIST_ITEMS.forEach((item) => {
      all[item.id] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const compliancePercentage = Math.round((checkedCount / totalCount) * 100);

  // Group by Category
  const categories = Array.from(new Set(CHECKLIST_ITEMS.map((item) => item.category)));

  // Risk Rating logic
  const getRiskAssessment = () => {
    if (checkedCount === 12) {
      return {
        label: "Tier-1 Audit Ready (Full Legal & Operational Immunity)",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
        badge: "Zero Liability Risk",
        summary: "Your prospective or current agency satisfies 100% of statutory compliance dockets and supervisory standards. Co-liability exposure under EPF Section 7A and CLRA is fully mitigated.",
      };
    } else if (checkedCount >= 8) {
      return {
        label: "Moderate Risk (Statutory Exposure Detected)",
        color: "text-amber-800 bg-amber-50 border-amber-200",
        badge: "Critical Gaps Present",
        summary: "Your security setup has significant statutory or supervisory blind spots. Missing ECR verification or diluted supervision exposes the Principal Employer to financial and legal recovery proceedings.",
      };
    } else {
      return {
        label: "Severe Legal & Operational Liability",
        color: "text-rose-800 bg-rose-50 border-rose-200",
        badge: "High Legal Threat",
        summary: "Critical red flags detected. You are likely engaging an unorganized contractor or an unmonitored setup that exposes your plant directors to vicarious criminal and civil liability under Indian labour statutes.",
      };
    }
  };

  const risk = getRiskAssessment();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownload = () => {
    const lines = [
      "==================================================================",
      "ADVANCE CORPORATE SECURITY (ACS) — PROCUREMENT DUE DILIGENCE AUDIT",
      "==================================================================",
      `Date: ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}`,
      `Audit Score: ${checkedCount} / ${totalCount} (${compliancePercentage}%)`,
      `Status: ${risk.label}`,
      `Risk Assessment: ${risk.summary}`,
      "",
      "------------------------------------------------------------------",
      "CHECKLIST VERIFICATION BREAKDOWN",
      "------------------------------------------------------------------",
      ...CHECKLIST_ITEMS.map((item, idx) => {
        const isChecked = checkedItems[item.id] ? "[PASS / VERIFIED]" : "[FAIL / MISSING]";
        return [
          `${idx + 1}. ${item.title} — ${isChecked}`,
          `   Category: ${item.category}`,
          `   Legal Basis: ${item.legalBasis}`,
          `   Risk If Missing: ${item.riskIfMissing}`,
          "",
        ].join("\n");
      }),
      "------------------------------------------------------------------",
      "Statutory Advisory by Advance Corporate Security (ACS)",
      "PSARA Form-V Licensed • ISO 9001:2015 Certified",
      "Official Hotline: +91 94770 06681 | Email: advancedcorporatesecurityj@gmail.com",
      "Web: https://advancecorporatesecurity.com/procurement/agency-comparison",
      "==================================================================",
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ACS-Security-Procurement-Due-Diligence-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-100">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2 border border-sky-100">
            <ShieldCheck size={14} className="text-sky" />
            <span>Interactive Enterprise Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
            Procurement Due Diligence &amp; Vendor Vetting Checklist
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Evaluate your prospective security agency or audit your existing contractor against 12 statutory and operational benchmarks.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 no-print">
          <button
            onClick={selectAll}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Check All
          </button>
          <button
            onClick={resetAll}
            className="px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw size={13} />
            Reset
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download size={13} />
            Export Dossier
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold text-white bg-navy hover:bg-navy-light rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Printer size={13} />
            Print Checklist
          </button>
        </div>
      </div>

      {/* Real-time Risk Scorecard */}
      <div className={`mt-8 p-6 rounded-2xl border ${risk.color} transition-all duration-300`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border border-current">
                {risk.badge}
              </span>
              <h4 className="font-roboto font-black text-lg sm:text-xl">
                {risk.label}
              </h4>
            </div>
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed max-w-2xl">
              {risk.summary}
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0 bg-white/60 sm:bg-transparent p-3 sm:p-0 rounded-xl">
            <div className="text-3xl sm:text-4xl font-roboto font-black tracking-tight">
              {checkedCount} <span className="text-sm font-bold opacity-60">/ {totalCount}</span>
            </div>
            <div className="text-xs font-semibold opacity-75 mt-0.5">
              {compliancePercentage}% Statutory Alignment
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2 bg-slate-200/80 rounded-full mt-4 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              checkedCount === 12 ? "bg-emerald-600" : checkedCount >= 8 ? "bg-amber-500" : "bg-rose-500"
            }`}
            style={{ width: `${compliancePercentage}%` }}
          />
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="mt-10 space-y-8">
        {categories.map((category) => {
          const items = CHECKLIST_ITEMS.filter((item) => item.category === category);
          return (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky" />
                {category}
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                        isChecked
                          ? "bg-slate-50/60 border-slate-300 hover:border-slate-400"
                          : "bg-white border-rose-200/80 hover:border-rose-300 shadow-2xs"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div
                          className="w-5 h-5 rounded border-slate-300 text-sky focus:ring-sky cursor-pointer"
                        />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-sm sm:text-base font-bold ${isChecked ? "text-navy" : "text-slate-800"}`}>
                            {item.title}
                          </span>
                          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                            {item.legalBasis}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {!isChecked && (
                          <div className="flex items-center gap-1.5 text-xs text-rose-700 font-medium pt-1">
                            <AlertCircle size={13} className="shrink-0" />
                            <span><strong>Risk if unverified:</strong> {item.riskIfMissing}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Callout */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-base sm:text-lg font-roboto font-bold text-white">
            Need an Official Statutory Pre-Qualification Dossier for Your Tender Committee?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            ACS delivers complete compliance binder packages: PSARA Form-V, last 6 months ECR/TRRN proofs, ISO 9001:2015, UDIN-verified balance sheets, and Bank Solvency.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-3 rounded-xl bg-sky hover:bg-sky-dark text-white font-bold text-xs sm:text-sm transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            <span>Request Compliance Docket</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
