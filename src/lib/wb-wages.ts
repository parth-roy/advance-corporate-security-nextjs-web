// ============================================================
// ACS — West Bengal Unified Statutory Wage Constants
// SINGLE SOURCE OF TRUTH for all WB wage data across the platform
//
// Source: West Bengal Labour Commissionerate
//         Semi-Annual VDA Notification (1 Jul 2026 – 31 Dec 2026)
//         Gazette dated 22 June 2026
//
// IMPORTANT: WB VDA revision cycle = January & July (NOT April/Oct)
//            April/Oct is the Central Sphere (BOCW/Central Govt) cycle.
// ============================================================

// ─── Wage Rates (Jul 2026 – Dec 2026) ─────────────────────────────────────────

export const WB_WAGES_ZONE_A = {
  unskilled:    { monthly: 10558, daily: 406 },
  semiSkilled:  { monthly: 11615, daily: 447 },
  skilled:      { monthly: 12777, daily: 491 },
  highlySkilled:{ monthly: 14054, daily: 541 },
} as const;

export const WB_WAGES_ZONE_B = {
  unskilled:    { monthly: 9760,  daily: 375 },
  semiSkilled:  { monthly: 10733, daily: 413 },
  skilled:      { monthly: 11807, daily: 454 },
  highlySkilled:{ monthly: 12990, daily: 500 },
} as const;

// ─── Statutory Rates ───────────────────────────────────────────────────────────

/** Total employer EPF burden: 3.67% EPF + 8.33% EPS + 0.50% EDLI + 0.50% Admin = 13.00% */
export const WB_EPF_EMPLOYER_RATE = 0.1300;

/** Employee EPF contribution */
export const WB_EPF_EMPLOYEE_RATE = 0.1200;

/** ESIC employer contribution rate (applicable up to ₹21,000/month gross) */
export const WB_ESIC_EMPLOYER_RATE = 0.0325;

/** ESIC employee contribution rate */
export const WB_ESIC_EMPLOYEE_RATE = 0.0075;

/** Minimum Bonus rate (Payment of Bonus Act — 8.33% of basic or ₹7,000 minimum wage, whichever higher) */
export const WB_BONUS_RATE = 0.0833;

/** Gratuity rate (15/26 for every completed year of service) */
export const WB_GRATUITY_RATE = 0.0481; // approx 15/312

/** West Bengal Labour Welfare Fund contributions */
export const WB_LWF = {
  employee: 3,     // ₹3 per period
  employer: 30,    // ₹30 per period
  cadence: 'biannual' as const, // June & December
} as const;

// ─── VDA Revision Cycle ────────────────────────────────────────────────────────

/** West Bengal VDA revision months (State Labour Commissionerate schedule) */
export const WB_VDA_REVISION_MONTHS = ['January', 'July'] as const;

/** Current effective period label */
export const WB_CURRENT_PERIOD = 'July 2026 – December 2026';

/** Previous period label */
export const WB_PREV_PERIOD = 'January 2026 – June 2026';

// ─── Convenience Helpers ───────────────────────────────────────────────────────

export type WBSkillLevel = 'unskilled' | 'semiSkilled' | 'skilled' | 'highlySkilled';
export type WBWageZone = 'A' | 'B';

export function getWBMonthlyWage(zone: WBWageZone, skill: WBSkillLevel): number {
  const rates = zone === 'A' ? WB_WAGES_ZONE_A : WB_WAGES_ZONE_B;
  return rates[skill].monthly;
}

export function getWBDailyWage(zone: WBWageZone, skill: WBSkillLevel): number {
  const rates = zone === 'A' ? WB_WAGES_ZONE_A : WB_WAGES_ZONE_B;
  return rates[skill].daily;
}

/** Compute total employer cost per worker per month (wages + statutory burdens) */
export function computeWBEmployerCost(zone: WBWageZone, skill: WBSkillLevel): {
  basicWage: number;
  epf: number;
  esic: number;
  bonus: number;
  lwfPerMonth: number;
  totalCTC: number;
} {
  const basicWage = getWBMonthlyWage(zone, skill);
  const epf = Math.round(basicWage * WB_EPF_EMPLOYER_RATE);
  const esic = Math.round(basicWage * WB_ESIC_EMPLOYER_RATE);
  const bonus = Math.round(basicWage * WB_BONUS_RATE);
  const lwfPerMonth = Math.round(WB_LWF.employer / 6); // biannual ÷ 6 months ≈ ₹5
  return {
    basicWage,
    epf,
    esic,
    bonus,
    lwfPerMonth,
    totalCTC: basicWage + epf + esic + bonus + lwfPerMonth,
  };
}

/** Human-readable wage note for Zone A statutory minimum */
export const WB_ZONE_A_WAGE_NOTE =
  `West Bengal Minimum Wages Act (Zone A) — Unskilled ₹${WB_WAGES_ZONE_A.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${WB_WAGES_ZONE_A.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${WB_WAGES_ZONE_A.skilled.monthly.toLocaleString('en-IN')} per month (effective ${WB_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & WB LWF remittances.`;

/** Human-readable wage note for Zone B statutory minimum */
export const WB_ZONE_B_WAGE_NOTE =
  `West Bengal Minimum Wages Act (Zone B) — Unskilled ₹${WB_WAGES_ZONE_B.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${WB_WAGES_ZONE_B.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${WB_WAGES_ZONE_B.skilled.monthly.toLocaleString('en-IN')} per month (effective ${WB_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & WB LWF remittances.`;
