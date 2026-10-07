'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface InteractiveComplianceWidgetProps {
  cityName: string;
  serviceName: string;
  industryName: string;
  defaultZone: 'A' | 'B';
}

export default function InteractiveComplianceWidget({
  cityName,
  serviceName,
  industryName,
  defaultZone,
}: InteractiveComplianceWidgetProps) {
  const [headcount, setHeadcount] = useState<number>(6);
  const [shifts, setShifts] = useState<'8h' | '12h'>('8h');
  const [zone, setZone] = useState<'A' | 'B'>(defaultZone);

  // Approximate Monthly Base Minimum Wage per worker
  const baseMonthly = zone === 'A' ? 11615 : 9800;
  // If 12h shift, OT multiplier ~ 1.5x
  const shiftMultiplier = shifts === '12h' ? 1.45 : 1.0;
  const effectiveBase = baseMonthly * shiftMultiplier;

  const totalBase = Math.round(effectiveBase * headcount);
  const totalEPF = Math.round(totalBase * 0.12);
  const totalESIC = Math.round(totalBase * 0.0325);
  const totalBonus = Math.round(totalBase * 0.0833);
  const totalStatutory = totalBase + totalEPF + totalESIC + totalBonus;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0b1f3f] text-white shadow-xl border border-sky-500/20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 inline-block mb-3">
              📊 Interactive B2B Procurement Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Statutory Wage & Compliance Estimator for {cityName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Calculate exact statutory minimum wage liability for <span className="text-amber-300 font-semibold">{industryName}</span> in West Bengal Zone {zone}.
            </p>
          </div>

          {/* Calculator Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Control 1: Headcount */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">
                Deployed Personnel: <span className="text-amber-400 text-base">{headcount} Personnel</span>
              </label>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>2 Guards</span>
                <span>25 Guards</span>
                <span>50+ Guards</span>
              </div>
            </div>

            {/* Control 2: Shift Structure */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                Shift Structure:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShifts('8h')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    shifts === '8h'
                      ? 'bg-amber-400 text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  8-Hour (3 Shifts)
                </button>
                <button
                  type="button"
                  onClick={() => setShifts('12h')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    shifts === '12h'
                      ? 'bg-amber-400 text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  12-Hour (2 Shifts)
                </button>
              </div>
            </div>

            {/* Control 3: Wage Zone */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                WB Minimum Wage Zone:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setZone('A')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    zone === 'A'
                      ? 'bg-sky-400 text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Zone A (Metro)
                </button>
                <button
                  type="button"
                  onClick={() => setZone('B')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    zone === 'B'
                      ? 'bg-sky-400 text-slate-900'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Zone B (Districts)
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Cost Output Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
              <div className="pt-2 sm:pt-0">
                <span className="text-[11px] text-slate-400 block uppercase">Est. Monthly Basic Wage</span>
                <span className="text-lg sm:text-xl font-bold text-white">₹{totalBase.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-[11px] text-slate-400 block uppercase">EPF Employer (12%)</span>
                <span className="text-lg sm:text-xl font-bold text-sky-400">₹{totalEPF.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-[11px] text-slate-400 block uppercase">ESIC (3.25%) + Bonus</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400">₹{(totalESIC + totalBonus).toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-[11px] text-amber-300 block uppercase font-bold">Total Statutory Pool</span>
                <span className="text-lg sm:text-2xl font-extrabold text-amber-400">₹{totalStatutory.toLocaleString('en-IN')}*</span>
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <span className="text-[11px] text-slate-400 text-center sm:text-left">
              *Preliminary statutory estimate excluding management fee and GST. Subject to formal site survey.
            </span>
            <Link
              href={`/quote?service=${serviceName}&city=${cityName}&industry=${industryName}`}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 text-center w-full sm:w-auto"
            >
              Get Itemized {cityName} Quotation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
