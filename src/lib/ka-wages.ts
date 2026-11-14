// ============================================================
// ACS — Karnataka Unified Statutory Wage Constants
// SINGLE SOURCE OF TRUTH for all Karnataka wage data across the platform
//
// Source: Government of Karnataka Labour Department
//         Consolidated Notification No. KAE 411 LWA 2023 (Gazetted May 25, 2026)
//         VDA Revision Cycle: Annual (Effective April 1st)
// ============================================================

export type KASkillLevel = 'unskilled' | 'semiSkilled' | 'skilled' | 'highlySkilled';
export type KAWageZone = 1 | 2 | 3;

// ─── Unified Statutory Wage Slabs (Basic + VDA ₹1,030.80) ───────────────────
// Zone 1: Greater Bengaluru Authority (BBMP / Urban Core)
export const KA_WAGES_ZONE_1 = {
  unskilled:     { basic: 23376, vda: 1031, monthly: 24407, daily: 939 },
  semiSkilled:   { basic: 25714, vda: 1031, monthly: 26745, daily: 1029 },
  skilled:       { basic: 28285, vda: 1031, monthly: 29316, daily: 1128 },
  highlySkilled: { basic: 31114, vda: 1031, monthly: 32145, daily: 1236 },
} as const;

// Zone 2: Other City Municipal Corporations & District HQs (Mysuru, Hubballi-Dharwad, Mangaluru, Belagavi, etc.)
export const KA_WAGES_ZONE_2 = {
  unskilled:     { basic: 21251, vda: 1031, monthly: 22282, daily: 857 },
  semiSkilled:   { basic: 23376, vda: 1031, monthly: 24407, daily: 939 },
  skilled:       { basic: 25714, vda: 1031, monthly: 26745, daily: 1029 },
  highlySkilled: { basic: 28285, vda: 1031, monthly: 29316, daily: 1128 },
} as const;

// Zone 3: Rest of Karnataka (Rural Taluks & Greenfield KIADB Nodes)
export const KA_WAGES_ZONE_3 = {
  unskilled:     { basic: 19319, vda: 1031, monthly: 20350, daily: 783 },
  semiSkilled:   { basic: 21251, vda: 1031, monthly: 22282, daily: 857 },
  skilled:       { basic: 23376, vda: 1031, monthly: 24407, daily: 939 },
  highlySkilled: { basic: 25714, vda: 1031, monthly: 26745, daily: 1029 },
} as const;

// ─── Statutory Contributions ──────────────────────────────────────────────────
export const KA_EPF_EMPLOYER_RATE = 0.1300;   // 13.00% (3.67% PF + 8.33% EPS + 0.5% EDLI + 0.5% Admin)
export const KA_EPF_EMPLOYEE_RATE = 0.1200;   // 12.00%
export const KA_ESIC_EMPLOYER_RATE = 0.0325;  // 3.25% (Applicable up to ₹21,000 gross)
export const KA_ESIC_EMPLOYEE_RATE = 0.0075;  // 0.75%
export const KA_WC_GPA_RATE = 0.0200;         // Workmen's Compensation & GPA insurance when gross > ₹21,000
export const KA_BONUS_RATE = 0.0833;          // 8.33% of Basic + VDA
export const KA_GRATUITY_RATE = 0.0481;       // 15/312 ≈ 4.81%

/** Karnataka Labour Welfare Fund (KLWF) — Amended 2025 */
export const KA_LWF = {
  employee: 50,     // ₹50 deducted in December
  employer: 100,    // ₹100 employer share
  annualRemittance: 150, // Total ₹150 due January 15
  cadence: 'annual' as const,
  monthlyEmployerEquivalent: 8.33, // ₹100 ÷ 12 months
} as const;

export const KA_VDA_REVISION_MONTH = 'April';
export const KA_CURRENT_PERIOD = 'April 2026 – March 2027';

export function getKAMonthlyWage(zone: KAWageZone, skill: KASkillLevel): number {
  if (zone === 1) return KA_WAGES_ZONE_1[skill].monthly;
  if (zone === 2) return KA_WAGES_ZONE_2[skill].monthly;
  return KA_WAGES_ZONE_3[skill].monthly;
}

export function getKADailyWage(zone: KAWageZone, skill: KASkillLevel): number {
  if (zone === 1) return KA_WAGES_ZONE_1[skill].daily;
  if (zone === 2) return KA_WAGES_ZONE_2[skill].daily;
  return KA_WAGES_ZONE_3[skill].daily;
}

export function computeKAEmployerCost(zone: KAWageZone, skill: KASkillLevel): {
  basicWage: number;
  epf: number;
  esicOrWc: number;
  bonus: number;
  gratuity: number;
  lwfPerMonth: number;
  totalCTC: number;
} {
  const basicWage = getKAMonthlyWage(zone, skill);
  const epf = Math.round(basicWage * KA_EPF_EMPLOYER_RATE);
  // If basic wage > ₹21,000, ESIC is substituted by Workmen's Compensation & GPA cover
  const esicOrWc = basicWage <= 21000 
    ? Math.round(basicWage * KA_ESIC_EMPLOYER_RATE)
    : Math.round(basicWage * KA_WC_GPA_RATE);
  const bonus = Math.round(basicWage * KA_BONUS_RATE);
  const gratuity = Math.round(basicWage * KA_GRATUITY_RATE);
  const lwfPerMonth = Math.round(KA_LWF.monthlyEmployerEquivalent);

  return {
    basicWage,
    epf,
    esicOrWc,
    bonus,
    gratuity,
    lwfPerMonth,
    totalCTC: basicWage + epf + esicOrWc + bonus + gratuity + lwfPerMonth,
  };
}

export const KA_ZONE_1_WAGE_NOTE =
  `Karnataka Minimum Wages Act (Zone 1 - Greater Bengaluru) — Unskilled ₹${KA_WAGES_ZONE_1.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${KA_WAGES_ZONE_1.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${KA_WAGES_ZONE_1.skilled.monthly.toLocaleString('en-IN')} per month (effective ${KA_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & KLWF remittances.`;

export const KA_ZONE_2_WAGE_NOTE =
  `Karnataka Minimum Wages Act (Zone 2 - Municipal Corporations & District HQs) — Unskilled ₹${KA_WAGES_ZONE_2.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${KA_WAGES_ZONE_2.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${KA_WAGES_ZONE_2.skilled.monthly.toLocaleString('en-IN')} per month (effective ${KA_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & KLWF remittances.`;

export const KA_ZONE_3_WAGE_NOTE =
  `Karnataka Minimum Wages Act (Zone 3 - Rural & Greenfield Taluks) — Unskilled ₹${KA_WAGES_ZONE_3.unskilled.monthly.toLocaleString('en-IN')} / Semi-Skilled ₹${KA_WAGES_ZONE_3.semiSkilled.monthly.toLocaleString('en-IN')} / Skilled ₹${KA_WAGES_ZONE_3.skilled.monthly.toLocaleString('en-IN')} per month (effective ${KA_CURRENT_PERIOD}) with full statutory EPF (13%), ESIC (3.25%), Bonus & KLWF remittances.`;
