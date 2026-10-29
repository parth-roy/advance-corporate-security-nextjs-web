"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import {
  OPERATIONAL_HUBS,
  SOURCING_TIERS,
  evaluateDeploymentFeasibility,
  type DeploymentEvaluationRequest,
} from "@/lib/capacityModel";
import {
  Users,
  Shield,
  Clock,
  Banknote,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
} from "lucide-react";

export default function WorkforceCapacityCalculator() {
  const [hubId, setHubId] = useState<string>(OPERATIONAL_HUBS[0].hubId);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);
  const [shiftCoverage, setShiftCoverage] = useState<DeploymentEvaluationRequest["shiftCoverage"]>("24x7_continuous");
  const [category, setCategory] = useState<keyof typeof SOURCING_TIERS>("standard_unarmed");
  const [clientCreditDays, setClientCreditDays] = useState<DeploymentEvaluationRequest["clientCreditDays"]>(45);

  const evaluation = useMemo(() => {
    return evaluateDeploymentFeasibility({
      hubId,
      numberOfPosts,
      shiftCoverage,
      category,
      clientCreditDays,
    });
  }, [hubId, numberOfPosts, shiftCoverage, category, clientCreditDays]);

  const selectedTier = SOURCING_TIERS[category];
  const selectedHub = OPERATIONAL_HUBS.find((h) => h.hubId === hubId) || OPERATIONAL_HUBS[0];

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Shield className="w-3.5 h-3.5" />
          Enterprise Workforce Supply & Liquidity Engine
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Operational Capacity & Payroll Float Simulation
        </h3>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Unlike hotel inventory, enterprise guarding capacity is bounded by supervisory span-of-control, 
          mandatory 1/6th reliever rosters, and 60-day payroll float reserves.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Operating Hub */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              1. Deployment Region / Operating Hub
            </label>
            <select
              value={hubId}
              onChange={(e) => setHubId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            >
              {OPERATIONAL_HUBS.map((hub) => (
                <option key={hub.hubId} value={hub.hubId}>
                  {hub.name} ({hub.psaraJurisdiction === "DIRECT_FORM_V" ? "PSARA Form-V Direct" : "Empanelled Network"})
                </option>
              ))}
            </select>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-1.5 px-1">
              <span>Supervisors: {selectedHub.activeSupervisors} Active</span>
              <span>Hub Utilization: {selectedHub.currentUtilizationPercentage}%</span>
              <span>Reserve Held: {formatINR(selectedHub.monthlyPayrollReserveHeldINR)}</span>
            </div>
          </div>

          {/* Number of Guard Posts */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                2. Number of Fixed Security / Manpower Posts
              </label>
              <span className="text-sm font-bold text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-0.5 rounded-lg">
                {numberOfPosts} {numberOfPosts === 1 ? "Post" : "Posts"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={numberOfPosts}
              onChange={(e) => setNumberOfPosts(parseInt(e.target.value))}
              className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex gap-2 mt-2">
              {[2, 5, 10, 15, 25, 40].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setNumberOfPosts(preset)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                    numberOfPosts === preset
                      ? "bg-blue-600 border-blue-500 text-white font-semibold"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Shift Coverage */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              3. Daily Shift Coverage Structure
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "8h_single", label: "8h Day Shift", sub: "1 Guard/Post" },
                { id: "12h_single", label: "12h Shift", sub: "1.5 Guard Eq" },
                { id: "12h_dual", label: "12h Day + Night", sub: "2 Guards/Post" },
                { id: "24x7_continuous", label: "24×7 Continuous", sub: "3 Guards + 1/6 Reliever" },
              ].map((shift) => (
                <button
                  key={shift.id}
                  type="button"
                  onClick={() => setShiftCoverage(shift.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    shiftCoverage === shift.id
                      ? "bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50"
                      : "bg-slate-800/60 border-slate-700/80 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                  }`}
                >
                  <div className="text-xs font-semibold">{shift.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{shift.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Staff Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              4. Skill & Certification Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            >
              {Object.values(SOURCING_TIERS).map((t) => (
                <option key={t.category} value={t.category}>
                  {t.name} (Avg CTC: ₹{t.averageMonthlyGrossCTC.toLocaleString("en-IN")}/mo)
                </option>
              ))}
            </select>
            <div className="flex items-center gap-4 text-xs text-slate-400 mt-1.5 px-1">
              <span>MHA Training Mandate: {selectedTier.minTrainingHours} Hours</span>
              <span>Mobilisation SLA: {selectedTier.sourcingLeadTimeLabel}</span>
            </div>
          </div>

          {/* Client Credit Terms */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                5. Enterprise Invoicing Credit Terms
                <span className="text-slate-500" title="Days between monthly bill submission and client payment clearance">
                  <HelpCircle className="w-3.5 h-3.5" />
                </span>
              </label>
              <span className="text-xs font-medium text-slate-400">
                ACS Pays Guards by 7th/10th Regardless
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[30, 45, 60, 90].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => setClientCreditDays(days as any)}
                  className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                    clientCreditDays === days
                      ? "bg-emerald-600/20 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500/50"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white"
                  }`}
                >
                  Net {days} Days
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Feasibility Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-800/80 border border-slate-700 rounded-xl p-6">
          <div>
            {/* Feasibility Status Pill */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                Supply Feasibility
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  evaluation.status === "FEASIBLE_IMMEDIATE"
                    ? "bg-emerald-950/80 border border-emerald-700/80 text-emerald-300"
                    : evaluation.status === "FEASIBLE_WITH_SUPERVISOR_ALLOCATION"
                    ? "bg-blue-950/80 border border-blue-700/80 text-blue-300"
                    : evaluation.status === "FEASIBLE_WITH_CREDIT_BACKING"
                    ? "bg-amber-950/80 border border-amber-700/80 text-amber-300"
                    : "bg-rose-950/80 border border-rose-700/80 text-rose-300"
                }`}
              >
                {evaluation.feasible ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                {evaluation.status.replace(/_/g, " ")}
              </span>
            </div>

            {/* Key Operational Metrics */}
            <div className="space-y-4 py-5">
              {/* Headcount Breakdown */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Total Deployed Headcount</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-white">{evaluation.totalHeadcountDeployed}</span>
                  <div className="text-[11px] text-slate-400">
                    {evaluation.baseGuardsNeeded} Base + {evaluation.relieversNeeded} Reliever (1/6th)
                  </div>
                </div>
              </div>

              {/* Supervisory Span */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Supervisors Assigned</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-indigo-300">{evaluation.supervisorsRequired}</span>
                  <div className="text-[11px] text-slate-400">
                    Ratio 1:{Math.round(evaluation.totalHeadcountDeployed / evaluation.supervisorsRequired)} (Max 1:18)
                  </div>
                </div>
              </div>

              {/* Sourcing SLA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Mobilisation Lead Time</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-amber-300">{evaluation.sourcingLeadTimeLabel}</span>
                  <div className="text-[11px] text-slate-400">Vetted & Police Verified</div>
                </div>
              </div>

              {/* Monthly Wage Bill */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Banknote className="w-4 h-4 text-emerald-400" />
                  <span>Est. Monthly Wage Outlay</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-emerald-400">{formatINR(evaluation.estimatedMonthlyWageBillINR)}</span>
                  <div className="text-[11px] text-slate-400">Gross Statutory CTC + Levies</div>
                </div>
              </div>

              {/* Required 60-Day Float */}
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    Required Payroll Float Reserve
                  </span>
                  <span className="text-sm font-bold text-blue-300">
                    {formatINR(evaluation.requiredPayrollFloatReserveINR)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  ACS treasury guarantees 60-day liquid reserves so staff are paid by the 7th/10th without 
                  interruption during {clientCreditDays}-day enterprise invoice cycles.
                </p>
              </div>
            </div>

            {/* Advisory Note */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 mb-4">
              <span className="font-semibold text-slate-200">Operations Advisory: </span>
              {evaluation.advisoryNote}
            </div>

            {/* Statutory Checklist */}
            <div className="space-y-1.5 mb-6 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PSARA Form-V Statutory Jurisdiction Verified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mandatory 1/6th Reliever Weekly-Off Scheduled</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Field Supervisor Ratio strictly ≤ 1:18</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={`/quote?service=security-guard&posts=${numberOfPosts}&coverage=${shiftCoverage}&hub=${hubId}`}
            onClick={() =>
              trackEvent("quote_request", {
                source: "capacity_calculator",
                numberOfPosts: String(numberOfPosts),
                shiftCoverage,
                hubId,
              })
            }
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-900/30 transition-all text-sm group"
          >
            <span>Proceed to Formal Procurement Intake</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
