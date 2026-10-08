"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, Calculator, Download, CheckCircle2, Building2, HelpCircle, ArrowRight } from "lucide-react";

interface WageZoneConfig {
  stateName: string;
  zoneName: string;
  rates: {
    unskilled: number;
    semiSkilled: number;
    skilled: number;
    highlySkilled: number;
  };
  gazetteRef: string;
  effectivePeriod: string;
}

const WAGE_ZONES: Record<string, WageZoneConfig> = {
  "wb-zone-a": {
    stateName: "West Bengal",
    zoneName: "Zone A (Kolkata, Howrah, 24 Parganas, Hooghly, Asansol, Durgapur, Siliguri)",
    rates: {
      unskilled: 10558,
      semiSkilled: 11614,
      skilled: 12776,
      highlySkilled: 14053,
    },
    gazetteRef: "WB Labour Commissioner Notification 2026",
    effectivePeriod: "Calendar Year 2026",
  },
  "wb-zone-b": {
    stateName: "West Bengal",
    zoneName: "Zone B (Semi-Urban & Rural Districts — Bankura, Purulia, Malda, Birbhum, etc.)",
    rates: {
      unskilled: 9758,
      semiSkilled: 10733,
      skilled: 11807,
      highlySkilled: 12988,
    },
    gazetteRef: "WB Labour Commissioner Notification 2026",
    effectivePeriod: "Calendar Year 2026",
  },
  "delhi-ncr": {
    stateName: "Delhi NCR",
    zoneName: "Delhi Capital Territory (All Industrial & Commercial Sectors)",
    rates: {
      unskilled: 17494,
      semiSkilled: 19279,
      skilled: 21215,
      highlySkilled: 23000,
    },
    gazetteRef: "Office of Labour Commissioner, Govt of NCT Delhi",
    effectivePeriod: "Current FY 2026",
  },
  "maharashtra-zone-1": {
    stateName: "Maharashtra",
    zoneName: "Zone 1 (Mumbai MMR, Thane, Pune, Navi Mumbai)",
    rates: {
      unskilled: 14845,
      semiSkilled: 16120,
      skilled: 17650,
      highlySkilled: 19500,
    },
    gazetteRef: "Maharashtra State Minimum Wages Board",
    effectivePeriod: "Current FY 2026",
  },
  "karnataka-zone-1": {
    stateName: "Karnataka",
    zoneName: "Zone 1 (Bengaluru Urban, Electronic City, Whitefield)",
    rates: {
      unskilled: 15480,
      semiSkilled: 16890,
      skilled: 18450,
      highlySkilled: 20200,
    },
    gazetteRef: "Karnataka Labour Department Gazette",
    effectivePeriod: "Current FY 2026",
  },
  "central-sphere": {
    stateName: "Central Sphere (Pan-India)",
    zoneName: "Area A (Major Metros & Central Government Installations / PSUs)",
    rates: {
      unskilled: 16224,
      semiSkilled: 18018,
      skilled: 20020,
      highlySkilled: 22100,
    },
    gazetteRef: "Chief Labour Commissioner (Central) Notification",
    effectivePeriod: "Current FY 2026",
  },
};

export default function RateCardCalculator() {
  const [selectedZoneKey, setSelectedZoneKey] = useState<string>("wb-zone-a");
  const [selectedSkill, setSelectedSkill] = useState<"unskilled" | "semiSkilled" | "skilled" | "highlySkilled">("unskilled");
  const [isContinuous247, setIsContinuous247] = useState<boolean>(true);
  const [serviceMarginPct, setServiceMarginPct] = useState<number>(10);
  const [headcount, setHeadcount] = useState<number>(15);

  const zone = WAGE_ZONES[selectedZoneKey];
  const basicVda = zone.rates[selectedSkill];

  const breakdown = useMemo(() => {
    // 1. Basic + VDA
    const base = basicVda;

    // 2. EPF Employer (13% on Basic+VDA, capped at ₹15,000 threshold or exact calculation)
    const epfBase = Math.min(base, 15000);
    const epfEmployer = Math.round(epfBase * 0.13);

    // 3. ESIC Employer (3.25% of Gross, applicable if monthly gross <= ₹21,000)
    const esicApplicable = base <= 21000;
    const esicEmployer = esicApplicable ? Math.round(base * 0.0325) : 0;

    // 4. Statutory Bonus (8.33% of Basic+VDA, capped at ₹7,000 or actual as per state notifications)
    const bonusBase = Math.min(base, 7000);
    const statutoryBonus = Math.round(bonusBase * 0.0833);

    // 5. Leave / Reliever provision (~1/6th of Basic for 24/7 continuous operations to cover 1 weekly off per guard)
    const relieverCost = isContinuous247 ? Math.round(base / 6) : 0;

    // 6. Uniform & Administrative Gear Allowance
    const uniformAdmin = 300;

    // 7. Total Cost to Company (CTC) per head
    const ctcPerHead = base + epfEmployer + esicEmployer + statutoryBonus + relieverCost + uniformAdmin;

    // 8. Service Charge (Vendor Margin)
    const serviceChargePerHead = Math.round(ctcPerHead * (serviceMarginPct / 100));

    // 9. Total Billing per Head Before GST
    const billingBeforeGstPerHead = ctcPerHead + serviceChargePerHead;

    // 10. GST @ 18%
    const gstPerHead = Math.round(billingBeforeGstPerHead * 0.18);

    // 11. Total Invoiced per Head
    const totalInvoicedPerHead = billingBeforeGstPerHead + gstPerHead;

    // Multiplied by Headcount
    const totalMonthlyBilling = billingBeforeGstPerHead * headcount;
    const totalMonthlyGst = gstPerHead * headcount;
    const totalMonthlyInvoice = totalInvoicedPerHead * headcount;

    return {
      base,
      epfEmployer,
      esicEmployer,
      statutoryBonus,
      relieverCost,
      uniformAdmin,
      ctcPerHead,
      serviceChargePerHead,
      billingBeforeGstPerHead,
      gstPerHead,
      totalInvoicedPerHead,
      totalMonthlyBilling,
      totalMonthlyGst,
      totalMonthlyInvoice,
    };
  }, [basicVda, isContinuous247, serviceMarginPct, headcount]);

  const isLowMargin = serviceMarginPct < 5;
  const isBelowGeMThreshold = serviceMarginPct < 3.85;

  return (
    <div className="w-full">
      {/* Configuration Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                Statutory Wage Standards • {zone.stateName}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-navy font-roboto">
              Configure Your Enterprise Manpower Parameters
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              {zone.gazetteRef} — {zone.effectivePeriod}
            </p>
          </div>

          <div className="flex items-center gap-3 bg-blue-50/70 border border-blue-200/60 rounded-xl px-4 py-2.5">
            <ShieldCheck className="w-6 h-6 text-sky shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-navy">100% Audit-Proof Rate Engine</p>
              <p className="text-slate-600">Zero vicarious liability under EPF Sec 7A & CLRA Sec 21</p>
            </div>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {/* 1. State / Zone Selection */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              1. Deployment State / Wage Zone
            </label>
            <select
              value={selectedZoneKey}
              onChange={(e) => setSelectedZoneKey(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-semibold focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
            >
              {Object.entries(WAGE_ZONES).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.stateName} — {item.zoneName.split("(")[0]}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-1">{zone.zoneName}</p>
          </div>

          {/* 2. Skill Classification */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              2. Skill Classification
            </label>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value as any)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-semibold focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
            >
              <option value="unskilled">Unskilled (Security Guard / Housekeeping)</option>
              <option value="semiSkilled">Semi-Skilled (Head Guard / Janitor)</option>
              <option value="skilled">Skilled (Armed Guard / MEP Technician / Supervisor)</option>
              <option value="highlySkilled">Highly Skilled (Chief Security Supervisor / FM Lead)</option>
            </select>
            <p className="text-[11px] text-slate-500 mt-1.5">Daily rate mapped to statutory schedule</p>
          </div>

          {/* 3. Duty Roster / Continuous Shift */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              3. Operational Post Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsContinuous247(true)}
                className={`px-3 py-2 text-xs font-bold rounded-xl border transition ${
                  isContinuous247
                    ? "bg-navy text-white border-navy shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                24×7 Continuous
                <span className="block text-[10px] font-normal opacity-80">(Incl. Reliever)</span>
              </button>
              <button
                type="button"
                onClick={() => setIsContinuous247(false)}
                className={`px-3 py-2 text-xs font-bold rounded-xl border transition ${
                  !isContinuous247
                    ? "bg-navy text-white border-navy shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                General Shift
                <span className="block text-[10px] font-normal opacity-80">(Standard 26-Day)</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              {isContinuous247 ? "Includes 1/6th mandatory reliever off-duty wages" : "Direct 26-day calendar roster"}
            </p>
          </div>

          {/* 4. Headcount Input */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              4. Deployed Headcount
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                max={5000}
                value={headcount}
                onChange={(e) => setHeadcount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-bold focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
              />
              <span className="text-xs font-bold text-slate-500 shrink-0">Staff</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">Total enterprise personnel deployed</p>
          </div>
        </div>

        {/* Margin Slider */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-wider">
                5. Agency Service Charge / Administrative Margin:
              </span>
              <span className="ml-2 text-base font-black text-sky">{serviceMarginPct}%</span>
              {serviceMarginPct >= 8 && serviceMarginPct <= 10 && (
                <span className="ml-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Recommended Enterprise Benchmark
                </span>
              )}
            </div>
            <span className="text-xs text-slate-500">
              Min. Govt / GeM Directive Floor: <strong>3.85%</strong>
            </span>
          </div>

          <input
            type="range"
            min={3}
            max={15}
            step={0.5}
            value={serviceMarginPct}
            onChange={(e) => setServiceMarginPct(parseFloat(e.target.value))}
            className="w-full accent-sky h-2 bg-slate-200 rounded-lg cursor-pointer"
          />

          {isBelowGeMThreshold && (
            <div className="mt-3 flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 border border-red-200 p-2.5 rounded-xl">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>
                Violation: Ministry of Finance guidelines strictly ban vendor service charges below 3.85%. Bids below this floor are automatically disqualified on GeM/CPPP.
              </span>
            </div>
          )}

          {!isBelowGeMThreshold && isLowMargin && (
            <div className="mt-3 flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>
                Caution: Service charges below 5% are vulnerable to vendor default when payment cycles exceed 60 days, risking abrupt guard abandonment.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Itemized Rate Card Breakdown Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Table Column (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-black text-navy text-base md:text-lg flex items-center gap-2 font-roboto">
              <Calculator className="w-5 h-5 text-sky" />
              Statutory Itemized Monthly Cost Breakdown (Per Head)
            </h3>
            <span className="text-xs font-bold text-slate-500 uppercase">
              Schedule Employment Standard
            </span>
          </div>

          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
                  <th className="pb-3">Statutory Component</th>
                  <th className="pb-3">Calculation Basis / Mandate</th>
                  <th className="pb-3 text-right">Cost / Head (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 font-bold text-navy">1. Basic Wage + VDA</td>
                  <td className="py-3 text-slate-600 text-xs">Gazetted Minimum Wage (26 working days)</td>
                  <td className="py-3 text-right font-bold text-navy">₹{breakdown.base.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="py-3 font-bold text-navy">2. EPF (Employer Share)</td>
                  <td className="py-3 text-slate-600 text-xs">13.00% (EPF 12% + EDLI 0.5% + Admin 0.5%)</td>
                  <td className="py-3 text-right font-bold text-navy">₹{breakdown.epfEmployer.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="py-3 font-bold text-navy">3. ESIC (Employer Share)</td>
                  <td className="py-3 text-slate-600 text-xs">3.25% of Gross (Statutory Health Cover)</td>
                  <td className="py-3 text-right font-bold text-navy">₹{breakdown.esicEmployer.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="py-3 font-bold text-navy">4. Statutory Annual Bonus</td>
                  <td className="py-3 text-slate-600 text-xs">8.33% of Basic+VDA (Payment of Bonus Act)</td>
                  <td className="py-3 text-right font-bold text-navy">₹{breakdown.statutoryBonus.toLocaleString("en-IN")}</td>
                </tr>

                {isContinuous247 && (
                  <tr>
                    <td className="py-3 font-bold text-navy">5. Reliever / National Holiday Off</td>
                    <td className="py-3 text-slate-600 text-xs">1/6th of Wage (Ensures weekly off without post vacancy)</td>
                    <td className="py-3 text-right font-bold text-navy">₹{breakdown.relieverCost.toLocaleString("en-IN")}</td>
                  </tr>
                )}

                <tr>
                  <td className="py-3 font-bold text-navy">6. Uniform, Tactical Gear & Admin</td>
                  <td className="py-3 text-slate-600 text-xs">Fixed monthly allowance (Badges, Boots, Batons)</td>
                  <td className="py-3 text-right font-bold text-navy">₹{breakdown.uniformAdmin.toLocaleString("en-IN")}</td>
                </tr>

                {/* Subtotal CTC */}
                <tr className="bg-blue-50/60 font-black text-navy border-t-2 border-slate-300">
                  <td className="py-3.5 pl-2">Total Cost to Company (CTC)</td>
                  <td className="py-3.5 text-xs text-navy/70">Pure Deployment Cost to Field Personnel</td>
                  <td className="py-3.5 pr-2 text-right text-base text-navy">₹{breakdown.ctcPerHead.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="py-3 font-bold text-navy">7. Service Charge ({serviceMarginPct}%)</td>
                  <td className="py-3 text-slate-600 text-xs">Supervision, Field Officers, 24×7 Control Room, Insurance</td>
                  <td className="py-3 text-right font-bold text-sky">₹{breakdown.serviceChargePerHead.toLocaleString("en-IN")}</td>
                </tr>

                {/* Billing Before GST */}
                <tr className="bg-slate-50 font-black text-navy">
                  <td className="py-3 pl-2">Net Rate per Head (Excl. GST)</td>
                  <td className="py-3 text-xs text-slate-600">Monthly Billable Rate Per Post</td>
                  <td className="py-3 pr-2 text-right text-base text-navy font-mono">₹{breakdown.billingBeforeGstPerHead.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="py-3 font-medium text-slate-700">8. GST @ 18%</td>
                  <td className="py-3 text-slate-500 text-xs">100% Input Tax Credit (ITC) claimable by client</td>
                  <td className="py-3 text-right font-medium text-slate-700">₹{breakdown.gstPerHead.toLocaleString("en-IN")}</td>
                </tr>

                {/* Total Invoice */}
                <tr className="bg-navy text-white font-black">
                  <td className="py-3.5 pl-3 rounded-l-xl">Total Invoiced Amount / Head</td>
                  <td className="py-3.5 text-xs text-sky-200">Inclusive of 18% GST</td>
                  <td className="py-3.5 pr-3 text-right text-lg text-gold font-mono rounded-r-xl">₹{breakdown.totalInvoicedPerHead.toLocaleString("en-IN")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise Executive Summary Card */}
        <div className="bg-gradient-to-br from-navy via-[#0d2458] to-[#012154] text-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                Enterprise Contract Scope
              </span>
              <span className="bg-gold text-navy font-black text-xs px-2.5 py-1 rounded-full">
                {headcount} Posts
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-xs text-slate-400">Total Monthly Billing (Excl. GST)</p>
                <p className="text-2xl md:text-3xl font-black font-mono text-white mt-0.5">
                  ₹{breakdown.totalMonthlyBilling.toLocaleString("en-IN")}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  For {headcount} deployed staff in {zone.stateName}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Monthly GST Component (18%)</p>
                <p className="text-lg font-bold font-mono text-sky-300 mt-0.5">
                  ₹{breakdown.totalMonthlyGst.toLocaleString("en-IN")}
                </p>
                <p className="text-[10px] text-emerald-400">100% Eligible for GSTR-2B Input Tax Credit</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-400">Total Monthly Cash Flow Requirement</p>
                <p className="text-2xl md:text-3xl font-black font-mono text-gold mt-0.5">
                  ₹{breakdown.totalMonthlyInvoice.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Compliance Guarantee Badges */}
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-xs space-y-2 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">100% Bank Transfer Salary Credit by 7th</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">Monthly PF ECR & ESIC Challans by 15th</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">Indemnity Shield under CLRA & EPF Sec 7A</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href={`/request-audit?headcount=${headcount}&state=${selectedZoneKey}&skill=${selectedSkill}`}
              className="w-full text-center block px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-lg text-sm"
            >
              Request Formal Rate Card Quotation →
            </Link>
            <Link
              href="/compliance"
              className="w-full text-center block px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition text-xs"
            >
              Learn About Our Compliance Indemnity
            </Link>
          </div>
        </div>
      </div>

      {/* Procurement Officer Caution Note */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
        <h4 className="text-lg font-black text-navy mb-3 flex items-center gap-2 font-roboto">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          The Statutory Hazard of Under-Quoting Vendors (Section 7A EPFO & CLRA Act)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-navy mb-1">1. The Fake EPF ECR Trap</p>
            <p>
              Unorganized vendors often bill enterprise clients for 13% EPF but deposit only a fraction or forge challans. Under Supreme Court rulings, the Principal Employer must pay the entire defaulted balance plus 100% penal damages under Section 14B.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-navy mb-1">2. Wage Undercutting & Strikes</p>
            <p>
              Vendors operating at 1% to 2% margins inevitably delay guard salaries past the 20th of the month. This causes chronic guard absenteeism, gate abandonment, and spontaneous labour union strikes at manufacturing gates.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-navy mb-1">3. The ACS Operational Firewall</p>
            <p>
              ACS assumes 100% Employer-of-Record responsibility. We disburse salaries strictly on the 7th via direct bank transfer (NEFT) and email client CFOs a verified "Monthly Compliance Pack" containing verified bank receipts and official challans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
