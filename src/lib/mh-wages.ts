// ============================================================
// ACS — Maharashtra Unified Statutory Wage Constants
// SINGLE SOURCE OF TRUTH for all MH wage data across the platform
//
// Source: Maharashtra Labour Commissionerate
//         Semi-Annual VDA Notification (1 Jul 2026 – 31 Dec 2026)
//
// IMPORTANT: MH VDA revision cycle = January & July
// ============================================================

export type MHSkillLevel = 'unskilled' | 'semiSkilled' | 'skilled' | 'highlySkilled';
export type MHWageZone = 'I' | 'II' | 'III';
export type MHIndustrySchedule = 'shopsAndCommercial' | 'engineering';

// ─── Shops & Commercial Establishments (Security, Housekeeping, Logistics, Office) ──
// VDA: ₹4,134.00 per month across all zones (Jul–Dec 2026)
export const MH_WAGES_ZONE_I = {
  unskilled:     { basic: 10021, vda: 4134, monthly: 14155, daily: 544 },
  semiSkilled:   { basic: 10856, vda: 4134, monthly: 14990, daily: 577 },
  skilled:       { basic: 11632, vda: 4134, monthly: 15766, daily: 606 },
  highlySkilled: { basic: 12450, vda: 4134, monthly: 16584, daily: 638 },
} as const;

export const MH_WAGES_ZONE_II = {
  unskilled:     { basic: 9425,  vda: 4134, monthly: 13559, daily: 522 },
  semiSkilled:   { basic: 10260, vda: 4134, monthly: 14394, daily: 554 },
  skilled:       { basic: 11036, vda: 4134, monthly: 15170, daily: 583 },
  highlySkilled: { basic: 11850, vda: 4134, monthly: 15984, daily: 615 },
} as const;

export const MH_WAGES_ZONE_III = {
  unskilled:     { basic: 8828,  vda: 4134, monthly: 12962, daily: 499 },
  semiSkilled:   { basic: 9664,  vda: 4134, monthly: 13798, daily: 531 },
  skilled:       { basic: 10440, vda: 4134, monthly: 14574, daily: 561 },
  highlySkilled: { basic: 11250, vda: 4134, monthly: 15384, daily: 592 },
} as const;

// ─── Engineering Industry (Factory Labor, Electricians, Riggers, STP, HVAC) ─────────
// VDA: ₹2,790.00 per month across all zones (Jul–Dec 2026)
export const MH_WAGES_ENG_ZONE_I = {
  unskilled:     { basic: 14010, vda: 2790, monthly: 16800, daily: 646 },
  semiSkilled:   { basic: 15025, vda: 2790, monthly: 17815, daily: 685 },
  skilled:       { basic: 16450, vda: 2790, monthly: 19240, daily: 740 },
  highlySkilled: { basic: 17900, vda: 2790, monthly: 20690, daily: 796 },
} as const;

export const MH_WAGES_ENG_ZONE_II = {
  unskilled:     { basic: 13200, vda: 2790, monthly: 15990, daily: 615 },
  semiSkilled:   { basic: 14150, vda: 2790, monthly: 16940, daily: 652 },
  skilled:       { basic: 15480, vda: 2790, monthly: 18270, daily: 703 },
  highlySkilled: { basic: 16850, vda: 2790, monthly: 19640, daily: 755 },
} as const;

export const MH_WAGES_ENG_ZONE_III = {
  unskilled:     { basic: 12390, vda: 2790, monthly: 15180, daily: 584 },
  semiSkilled:   { basic: 13275, vda: 2790, monthly: 16065, daily: 618 },
  skilled:       { basic: 14510, vda: 2790, monthly: 17300, daily: 665 },
  highlySkilled: { basic: 15800, vda: 2790, monthly: 18590, daily: 715 },
} as const;

// ─── Statutory Contributions ──────────────────────────────────────────────────
export const MH_EPF_EMPLOYER_RATE = 0.1300;   // 13.00% (3.67% PF + 8.33% EPS + 0.5% EDLI + 0.5% Admin)
export const MH_EPF_EMPLOYEE_RATE = 0.1200;   // 12.00%
export const MH_ESIC_EMPLOYER_RATE = 0.0325;  // 3.25% (Gross wages <= 21,000)
export const MH_ESIC_EMPLOYEE_RATE = 0.0075;  // 0.75%
export const MH_BONUS_RATE = 0.0833;          // 8.33% of Basic + VDA
export const MH_GRATUITY_RATE = 0.0481;       // 15/312 ≈ 4.81%

/** Maharashtra Labour Welfare Fund (MLWF) — Amended 2024 */
export const MH_LWF = {
  employee: 25,     // ₹25 half-yearly
  employer: 75,     // ₹75 half-yearly
  cadence: 'biannual' as const, // June 30 & December 31
  monthlyEmployerEquivalent: 12.50, // ₹75 ÷ 6 months
} as const;

export const MH_VDA_REVISION_MONTHS = ['January', 'July'] as const;
export const MH_CURRENT_PERIOD = 'July 2026 – December 2026';
export const MH_PREV_PERIOD = 'January 2026 – June 2026';

export function getMHMonthlyWage(
  zone: MHWageZone,
  skill: MHSkillLevel,
  schedule: MHIndustrySchedule = 'shopsAndCommercial'
): number {
  if (schedule === 'engineering') {
    const table = zone === 'I' ? MH_WAGES_ENG_ZONE_I : zone === 'II' ? MH_WAGES_ENG_ZONE_II : MH_WAGES_ENG_ZONE_III;
    return table[skill].monthly;
  }
  const table = zone === 'I' ? MH_WAGES_ZONE_I : zone === 'II' ? MH_WAGES_ZONE_II : MH_WAGES_ZONE_III;
  return table[skill].monthly;
}

export function getMHDailyWage(
  zone: MHWageZone,
  skill: MHSkillLevel,
  schedule: MHIndustrySchedule = 'shopsAndCommercial'
): number {
  if (schedule === 'engineering') {
    const table = zone === 'I' ? MH_WAGES_ENG_ZONE_I : zone === 'II' ? MH_WAGES_ENG_ZONE_II : MH_WAGES_ENG_ZONE_III;
    return table[skill].daily;
  }
  const table = zone === 'I' ? MH_WAGES_ZONE_I : zone === 'II' ? MH_WAGES_ZONE_II : MH_WAGES_ZONE_III;
  return table[skill].daily;
}

export function computeMHEmployerCost(
  zone: MHWageZone,
  skill: MHSkillLevel,
  schedule: MHIndustrySchedule = 'shopsAndCommercial'
): {
  basicWage: number;
  epf: number;
  esic: number;
  bonus: number;
  gratuity: number;
  lwfPerMonth: number;
  totalCTC: number;
} {
  const basicWage = getMHMonthlyWage(zone, skill, schedule);
  const epf = Math.round(basicWage * MH_EPF_EMPLOYER_RATE);
  const esic = Math.round(basicWage * MH_ESIC_EMPLOYER_RATE);
  const bonus = Math.round(basicWage * MH_BONUS_RATE);
  const gratuity = Math.round(basicWage * MH_GRATUITY_RATE);
  const lwfPerMonth = Math.round(MH_LWF.monthlyEmployerEquivalent);

  return {
    basicWage,
    epf,
    esic,
    bonus,
    gratuity,
    lwfPerMonth,
    totalCTC: basicWage + epf + esic + bonus + gratuity + lwfPerMonth,
  };
}

export const MH_ZONE_I_WAGE_NOTE =
  `Maharashtra Minimum Wages Act (Zone I) — Unskilled ₹${MH_WAGES_ZONE_I.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${MH_WAGES_ZONE_I.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${MH_WAGES_ZONE_I.skilled.monthly.toLocaleString('en-IN')} per month (effective ${MH_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & MLWF remittances.`;

export const MH_ZONE_II_WAGE_NOTE =
  `Maharashtra Minimum Wages Act (Zone II) — Unskilled ₹${MH_WAGES_ZONE_II.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${MH_WAGES_ZONE_II.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${MH_WAGES_ZONE_II.skilled.monthly.toLocaleString('en-IN')} per month (effective ${MH_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & MLWF remittances.`;

export const MH_ZONE_III_WAGE_NOTE =
  `Maharashtra Minimum Wages Act (Zone III) — Unskilled ₹${MH_WAGES_ZONE_III.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${MH_WAGES_ZONE_III.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${MH_WAGES_ZONE_III.skilled.monthly.toLocaleString('en-IN')} per month (effective ${MH_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & MLWF remittances.`;
