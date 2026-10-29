// src/lib/compliance.ts
// ============================================================
// ACS Statutory Compliance Data Library
// Central source of truth for PSARA license status, minimum wages, and state compliance
// Used across programmatic pages to serve accurate, state-specific compliance data
// ============================================================

export interface StateComplianceData {
  state: string;
  stateSlug: string;
  psaraStatus: 'licensed' | 'operational' | 'compliant';
  psaraNote: string;
  minWageUnskilled: number; // per day in INR
  minWageSemiSkilled: number;
  minWageSkilled: number;
  minWageEffectiveDate: string; // '1 Jan 2026 – 30 Jun 2026' format
  gazetteNotificationRef: string;
  labourCommissionerUrl: string;
  keyStatutoryActs: string[];
}

// State-wise PSARA and minimum wage data
// Source: State Labour Department Gazette notifications and PSARA records
export const STATE_COMPLIANCE_DATA: StateComplianceData[] = [
  {
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    psaraStatus: 'licensed',
    psaraNote: 'Primary PSARA License State — ACS Head Office & Registered Entity',
    minWageUnskilled: 462,
    minWageSemiSkilled: 498,
    minWageSkilled: 537,
    minWageEffectiveDate: '1 Jan 2026 – 30 Jun 2026',
    gazetteNotificationRef: 'Circular No. 12/Stat/2RW/29/16/LCS/JLC (Labour Commissionerate, Govt of WB)',
    labourCommissionerUrl: 'https://wblabour.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour (R&A) Act 1970', 'Minimum Wages Act 1948', 'EPF & MP Act 1952', 'ESI Act 1948'],
  },
  {
    state: 'Delhi',
    stateSlug: 'delhi',
    psaraStatus: 'licensed',
    psaraNote: 'PSARA Licensed — NCR Operations Hub',
    minWageUnskilled: 676,
    minWageSemiSkilled: 746,
    minWageSkilled: 824,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Order F.No.12(142)/02/MW/VII/Partfile/5826 (Office of Addl Labour Commissioner, NCT Delhi)',
    labourCommissionerUrl: 'https://labour.delhi.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Delhi Contract Labour Rules', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Jharkhand',
    stateSlug: 'jharkhand',
    psaraStatus: 'licensed',
    psaraNote: 'PSARA Licensed — Eastern Zone Operations',
    minWageUnskilled: 395,
    minWageSemiSkilled: 435,
    minWageSkilled: 478,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Notification No. 2/MW-2071/2021-L&T-1845 (Department of Labour, Govt of Jharkhand)',
    labourCommissionerUrl: 'https://labour.jharkhand.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Bihar',
    stateSlug: 'bihar',
    psaraStatus: 'operational',
    psaraNote: 'ACS operational via Bihar-registered partner entities with full statutory compliance',
    minWageUnskilled: 365,
    minWageSemiSkilled: 400,
    minWageSkilled: 440,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Gazette Notification No. 5/MW-403/2020-L&R-2305 (Labour Resources Dept, Bihar)',
    labourCommissionerUrl: 'https://labour.bihar.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Odisha',
    stateSlug: 'odisha',
    psaraStatus: 'operational',
    psaraNote: 'ACS operational via Odisha-compliant deployment framework',
    minWageUnskilled: 380,
    minWageSemiSkilled: 415,
    minWageSkilled: 450,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Notification No. 3450/LC (Labour Commissioner, Odisha, Bhubaneswar)',
    labourCommissionerUrl: 'https://labdirodisha.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Odisha Contract Labour Rules', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Haryana',
    stateSlug: 'haryana',
    psaraStatus: 'compliant',
    psaraNote: 'State-compliant deployment with full PF/ESIC statutory coverage across NCR/Haryana',
    minWageUnskilled: 435,
    minWageSemiSkilled: 480,
    minWageSkilled: 528,
    minWageEffectiveDate: '1 Jul 2025 – 31 Dec 2025',
    gazetteNotificationRef: 'Notification No. 11/12/2025-2Lab (Labour Department, Haryana)',
    labourCommissionerUrl: 'https://hrylabour.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    psaraStatus: 'compliant',
    psaraNote: 'State-compliant deployment with full PF/ESIC statutory coverage',
    minWageUnskilled: 442,
    minWageSemiSkilled: 485,
    minWageSkilled: 525,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Notification No. 1205/36-2-2025-MW (Labour Section-2, Govt of Uttar Pradesh)',
    labourCommissionerUrl: 'https://uplabour.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Maharashtra',
    stateSlug: 'maharashtra',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Maharashtra-compliant statutory framework',
    minWageUnskilled: 525,
    minWageSemiSkilled: 575,
    minWageSkilled: 630,
    minWageEffectiveDate: '1 Jan 2026 – 30 Jun 2026',
    gazetteNotificationRef: 'Circular No. MWA-2026/CR-14/Labour-7 (Industries, Energy & Labour Dept, Maharashtra)',
    labourCommissionerUrl: 'https://mahakamgar.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Karnataka',
    stateSlug: 'karnataka',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Karnataka-compliant statutory framework',
    minWageUnskilled: 510,
    minWageSemiSkilled: 555,
    minWageSkilled: 605,
    minWageEffectiveDate: '1 Apr 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Gazette Notification No. KAE 28 LMW 2025 (Labour Department, Karnataka)',
    labourCommissionerUrl: 'https://labour.kar.nic.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Tamil Nadu statutory compliance framework',
    minWageUnskilled: 468,
    minWageSemiSkilled: 512,
    minWageSkilled: 562,
    minWageEffectiveDate: '1 Apr 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'G.O. (2D) No. 42 (Labour Welfare and Skill Development Dept, Tamil Nadu)',
    labourCommissionerUrl: 'https://labour.tn.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Gujarat',
    stateSlug: 'gujarat',
    psaraStatus: 'compliant',
    psaraNote: 'Gujarat statutory deployment with full compliance',
    minWageUnskilled: 418,
    minWageSemiSkilled: 458,
    minWageSkilled: 500,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'Notification No. KHR/2025/112/L.B. (Labour and Employment Dept, Gujarat)',
    labourCommissionerUrl: 'https://labour.gujarat.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    psaraStatus: 'compliant',
    psaraNote: 'Rajasthan statutory deployment with full compliance',
    minWageUnskilled: 385,
    minWageSemiSkilled: 420,
    minWageSkilled: 460,
    minWageEffectiveDate: '1 Jan 2026 – 31 Dec 2026',
    gazetteNotificationRef: 'Order F.8(5)Labour/MW/2025/Part/4320 (Labour Department, Rajasthan)',
    labourCommissionerUrl: 'https://labour.rajasthan.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Telangana',
    stateSlug: 'telangana',
    psaraStatus: 'compliant',
    psaraNote: 'Telangana statutory deployment with full compliance',
    minWageUnskilled: 485,
    minWageSemiSkilled: 530,
    minWageSkilled: 580,
    minWageEffectiveDate: '1 Oct 2025 – 31 Mar 2026',
    gazetteNotificationRef: 'G.O.Ms.No. 18 (Labour Employment Training & Factories Dept, Telangana)',
    labourCommissionerUrl: 'https://labour.telangana.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
];

// Helper: Get compliance data for a state by name
export function getStateCompliance(stateName: string): StateComplianceData | undefined {
  return STATE_COMPLIANCE_DATA.find(
    (s) => s.state.toLowerCase() === stateName.toLowerCase()
  );
}

// Helper: Get PSARA badge text for a state
export function getPsaraBadge(stateName: string): string {
  const data = getStateCompliance(stateName);
  if (!data) return 'PSARA Compliant Deployment';
  switch (data.psaraStatus) {
    case 'licensed':
      return `PSARA Licensed — ${stateName}`;
    case 'operational':
      return `PSARA Operational — ${stateName}`;
    default:
      return `Statutory Compliant — ${stateName}`;
  }
}

// Helper: Get minimum wage display for a state
export function getMinWageDisplay(stateName: string): string {
  const data = getStateCompliance(stateName);
  if (!data) return '₹340–₹550 per day (state-specific, Minimum Wages Act)';
  return `₹${data.minWageUnskilled}–₹${data.minWageSkilled}/day (${stateName} Minimum Wages Act, effective ${data.minWageEffectiveDate})`;
}
