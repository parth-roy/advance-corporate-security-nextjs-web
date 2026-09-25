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
  minWageEffectiveDate: string; // 'Oct 2024' format
  labourCommissionerUrl: string;
  keyStatutoryActs: string[];
}

// State-wise PSARA and minimum wage data
// Source: State Labour Department notifications and PSARA records
export const STATE_COMPLIANCE_DATA: StateComplianceData[] = [
  {
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    psaraStatus: 'licensed',
    psaraNote: 'Primary PSARA License State — ACS Head Office & Registered Entity',
    minWageUnskilled: 462,
    minWageSemiSkilled: 498,
    minWageSkilled: 537,
    minWageEffectiveDate: 'Jan 2025',
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
    minWageEffectiveDate: 'Apr 2025',
    labourCommissionerUrl: 'https://labour.delhi.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Delhi Contract Labour Rules', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Jharkhand',
    stateSlug: 'jharkhand',
    psaraStatus: 'licensed',
    psaraNote: 'PSARA Licensed — Eastern Zone Operations',
    minWageUnskilled: 378,
    minWageSemiSkilled: 416,
    minWageSkilled: 456,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labour.jharkhand.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Bihar',
    stateSlug: 'bihar',
    psaraStatus: 'operational',
    psaraNote: 'ACS operational via Bihar-registered partner entities with full statutory compliance',
    minWageUnskilled: 340,
    minWageSemiSkilled: 375,
    minWageSkilled: 412,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labour.bihar.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Odisha',
    stateSlug: 'odisha',
    psaraStatus: 'operational',
    psaraNote: 'ACS operational via Odisha-compliant deployment framework',
    minWageUnskilled: 355,
    minWageSemiSkilled: 388,
    minWageSkilled: 422,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labdirodisha.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Odisha Contract Labour Rules', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    psaraStatus: 'compliant',
    psaraNote: 'State-compliant deployment with full PF/ESIC statutory coverage',
    minWageUnskilled: 422,
    minWageSemiSkilled: 462,
    minWageSkilled: 502,
    minWageEffectiveDate: 'Jan 2025',
    labourCommissionerUrl: 'https://uplabour.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Maharashtra',
    stateSlug: 'maharashtra',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Maharashtra-compliant statutory framework',
    minWageUnskilled: 509,
    minWageSemiSkilled: 558,
    minWageSkilled: 609,
    minWageEffectiveDate: 'Jul 2024',
    labourCommissionerUrl: 'https://mahakamgar.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Karnataka',
    stateSlug: 'karnataka',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Karnataka-compliant statutory framework',
    minWageUnskilled: 482,
    minWageSemiSkilled: 528,
    minWageSkilled: 576,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labour.kar.nic.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    psaraStatus: 'compliant',
    psaraNote: 'Deployment via Tamil Nadu statutory compliance framework',
    minWageUnskilled: 448,
    minWageSemiSkilled: 492,
    minWageSkilled: 539,
    minWageEffectiveDate: 'Jan 2025',
    labourCommissionerUrl: 'https://labour.tn.gov.in/',
    keyStatutoryActs: ['PSARA 2005', 'Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Gujarat',
    stateSlug: 'gujarat',
    psaraStatus: 'compliant',
    psaraNote: 'Gujarat statutory deployment with full compliance',
    minWageUnskilled: 396,
    minWageSemiSkilled: 436,
    minWageSkilled: 476,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labour.gujarat.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948', 'EPF & MP Act 1952'],
  },
  {
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    psaraStatus: 'compliant',
    psaraNote: 'Rajasthan statutory deployment with full compliance',
    minWageUnskilled: 362,
    minWageSemiSkilled: 398,
    minWageSkilled: 436,
    minWageEffectiveDate: 'Apr 2024',
    labourCommissionerUrl: 'https://labour.rajasthan.gov.in/',
    keyStatutoryActs: ['Contract Labour Act', 'Minimum Wages Act 1948'],
  },
  {
    state: 'Telangana',
    stateSlug: 'telangana',
    psaraStatus: 'compliant',
    psaraNote: 'Telangana statutory deployment with full compliance',
    minWageUnskilled: 468,
    minWageSemiSkilled: 514,
    minWageSkilled: 562,
    minWageEffectiveDate: 'Jan 2025',
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
