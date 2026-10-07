'use client';

import React from 'react';

interface StatutoryComplianceEngineProps {
  cityName: string;
  districtName: string;
  wageZone: 'A' | 'B';
  labourOffice: string;
  labourWelfareRule: string;
}

export default function StatutoryComplianceEngine({
  cityName,
  districtName,
  wageZone,
  labourOffice,
  labourWelfareRule,
}: StatutoryComplianceEngineProps) {
  const isZoneA = wageZone === 'A';
  const minWageBase = isZoneA ? '₹11,615' : '₹9,800';
  const epfEmployer = isZoneA ? '₹1,394 (12%)' : '₹1,176 (12%)';
  const esicEmployer = isZoneA ? '₹377 (3.25%)' : '₹318 (3.25%)';
  const bonus = isZoneA ? '₹967 (8.33%)' : '₹816 (8.33%)';
  const lwfEmployer = '₹30 / worker (Biannual)';

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            ⚖️ 100% Legal & Statutory Protection for Principal Employers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            West Bengal Minimum Wages & Statutory Compliance Matrix: {cityName} (Zone {wageZone})
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            In West Bengal, under Section 21 of the Contract Labour (Regulation & Abolition) Act, 1970, if a security vendor defaults on wages, EPF, or ESIC, the <span className="font-semibold text-slate-900">Principal Employer becomes directly liable for all arrears and court damages</span>. ACS eliminates 100% of this corporate risk.
          </p>
        </div>

        {/* 2-Part Breakdown: Statutory Table + Legal Indemnification */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left: Statutory Rate Table (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-[#0b1f3f] to-[#1a3660] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Statutory Cost Structure — Zone {wageZone} ({cityName})
                </h3>
                <p className="text-xs text-sky-200">
                  Government of West Bengal Labour Department Gazette Notification Schedule
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold shrink-0">
                Zone {wageZone} Tariff
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-100/75 text-xs uppercase font-semibold text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Compliance Component</th>
                    <th className="py-3.5 px-4 sm:px-6">Statutory Mandate</th>
                    <th className="py-3.5 px-4 sm:px-6">ACS Deployment Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Basic Wage + VDA</td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-900 font-bold">{minWageBase} / month</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">100% Direct Bank Transfer via NEFT by 7th of every month</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Employees Provident Fund (EPF)</td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-900">{epfEmployer}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">Monthly ECR Electronic Challan Return submitted with client invoice</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Employees State Insurance (ESIC)</td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-900">{esicEmployer}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">IP Number issued on Day 1; cashless medical cover across WB hospitals</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Statutory Annual Bonus</td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-900">{bonus}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">Payment of Bonus Act, 1965 adherence (disbursed before Durga Puja)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Labour Welfare Fund (WB LWF)</td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-900">{lwfEmployer}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">Remitted to West Bengal Labour Welfare Board twice annually</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">National & Festival Holidays</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-700">As per WB Gazette</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-emerald-700 font-medium">Paid off-duty or double-wage duty strictly regulated with relief buffers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Jurisdictional Office: <strong className="text-slate-700">{labourOffice}</strong></span>
              <span>LWF Rule: <strong className="text-slate-700">{labourWelfareRule}</strong></span>
            </div>
          </div>

          {/* Right: Principal Employer Indemnity Box (1 col) */}
          <div className="bg-[#071429] rounded-2xl border border-slate-800 p-6 sm:p-8 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 text-xl font-bold mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                ACS Indemnity Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Every monthly invoice submitted to your finance desk includes a complete, audited <strong className="text-amber-400">Statutory Compliance Dossier</strong> containing:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>EPFO ECR Electronic Challan with employee-wise TRRN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>ESIC Monthly Return confirmation receipt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Bank wage payment debit statement with bank seal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>West Bengal Professional Tax (PT) Form VIII filing proof</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xs text-amber-300 font-semibold block">
                Zero Legal Liability Agreement
              </span>
              <span className="text-[11px] text-slate-400">
                Backed by comprehensive corporate indemnification clauses.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
