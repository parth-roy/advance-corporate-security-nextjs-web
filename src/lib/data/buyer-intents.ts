// ============================================================
// ACS — Buyer Intent Copywriting & Dynamic Meta Engine
// Generates intent-targeted H1, Meta Tags, Value Propositions,
// and Call-to-Actions for B2B procurement audiences
// ============================================================

export type BuyerIntentType = 'transactional' | 'investigative' | 'compliance' | 'operational';

export interface BuyerIntentProfile {
  id: BuyerIntentType;
  label: string;
  badgeText: string;
  angleDescription: string;
  heroHeadlineFormula: string;
  valuePropTitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  trustHighlight: string;
}

export const BUYER_INTENTS: Record<BuyerIntentType, BuyerIntentProfile> = {
  transactional: {
    id: 'transactional',
    label: 'Direct Deployment & Quotation',
    badgeText: 'Instant Mobilization & Quotation Desk',
    angleDescription: 'Rapid turnaround for urgent operational requirements with immediate price estimation and guaranteed deployment readiness.',
    heroHeadlineFormula: 'Hire {serviceName} for {industryName} in {cityName}, West Bengal',
    valuePropTitle: 'Rapid Deployment & Zero Lead-Time Mobilization',
    primaryCtaText: 'Request Immediate Rate Card',
    secondaryCtaText: 'Speak to Deployment Officer',
    trustHighlight: 'Guaranteed On-Site Guard Deployment within 24 to 48 Hours across West Bengal.',
  },

  investigative: {
    id: 'investigative',
    label: 'Top-Rated & ISO Certified',
    badgeText: 'ISO 9001:2015 Certified Enterprise Vendor',
    angleDescription: 'Comprehensive vendor vetting, verifiable institutional credentials, and 25-year operational stability across Eastern India.',
    heroHeadlineFormula: 'Best {serviceName} Agency for {industryName} in {cityName}',
    valuePropTitle: 'Audited Track Record with Government & Enterprise Giants',
    primaryCtaText: 'Download Credential Dossier',
    secondaryCtaText: 'Schedule Technical Presentation',
    trustHighlight: 'Trusted by Indian Air Force, Border Security Force (BSF), HAL, and Leading Fortune 500 Enterprises.',
  },

  compliance: {
    id: 'compliance',
    label: '100% Statutory & Wage Zone Compliant',
    badgeText: 'PSARA Licensed & 100% Statutory Compliant',
    angleDescription: 'Absolute legal indemnification for Principal Employers. Full adherence to West Bengal Minimum Wage Zone A/B, LWF, EPF, and ESIC.',
    heroHeadlineFormula: 'PSARA Licensed & Wage Compliant {serviceName} in {cityName}',
    valuePropTitle: 'Zero Legal Liability & 100% Statutory Transparency',
    primaryCtaText: 'Request Compliance & Wage Audit',
    secondaryCtaText: 'Verify PSARA License Details',
    trustHighlight: 'Zero Principal Employer Liability: 100% verifiable bank transfers, ECR deposits, and LWF clearance.',
  },

  operational: {
    id: 'operational',
    label: 'SLA Guaranteed & Managed Workforce',
    badgeText: 'Contractual SLA & 24x7 Field Supervision',
    angleDescription: 'Guaranteed performance metrics, 4-hour guard replacement SLA, and dedicated 24x7 roving supervisory coverage.',
    heroHeadlineFormula: 'Managed {serviceName} Solutions with SLAs for {industryName} in {cityName}',
    valuePropTitle: 'Rigorous Field Oversight & Guaranteed Replacement SLAs',
    primaryCtaText: 'Review Service Level Agreement',
    secondaryCtaText: 'Book Site Security Survey',
    trustHighlight: 'Uncompromising 4-Hour Replacement SLA with Dedicated Mobile Patrol Supervisors on 24x7 Duty.',
  },
};

export function getBuyerIntent(id: string): BuyerIntentProfile {
  return BUYER_INTENTS[id as BuyerIntentType] || BUYER_INTENTS.transactional;
}

export function generatePageMetadata({
  serviceName,
  cityName,
  districtName,
  industryName,
  wageZone,
  intent = 'transactional',
}: {
  serviceName: string;
  cityName: string;
  districtName: string;
  industryName: string;
  wageZone: 'A' | 'B';
  intent?: BuyerIntentType;
}): {
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
} {
  const intentObj = getBuyerIntent(intent);

  let title = '';
  let description = '';

  switch (intent) {
    case 'compliance':
      title = `PSARA Licensed ${serviceName} in ${cityName} for ${industryName} | Zone ${wageZone} Compliant - ACS`;
      description = `Hire 100% statutory compliant ${serviceName} in ${cityName}, ${districtName}. Full adherence to West Bengal Minimum Wages Act (Zone ${wageZone}), LWF, EPF, and ESIC. Protect your enterprise from principal employer liability.`;
      break;

    case 'investigative':
      title = `Best ${serviceName} Company for ${industryName} in ${cityName} | ISO 9001 Certified - ACS`;
      description = `Looking for the top-rated ${serviceName} provider in ${cityName}? ACS brings 25+ years of battle-tested security leadership, trusted by PSUs, heavy industries, and commercial parks across ${districtName}.`;
      break;

    case 'operational':
      title = `${serviceName} with Guaranteed SLAs for ${industryName} in ${cityName} | ACS`;
      description = `Managed ${serviceName} for ${industryName} in ${cityName}, West Bengal. Features 4-hour guard replacement SLA, GPS-tracked patrol rounds, and 24x7 mobile supervisor audits across ${districtName}.`;
      break;

    case 'transactional':
    default:
      title = `Hire ${serviceName} for ${industryName} in ${cityName}, West Bengal | ACS`;
      description = `Professional ${serviceName} deployment for ${industryName} in ${cityName}. Fast mobilization, background-verified personnel, and competitive rates across ${districtName}. Request instant rate quotation.`;
      break;
  }

  const h1 = intentObj.heroHeadlineFormula
    .replace('{serviceName}', serviceName)
    .replace('{industryName}', industryName)
    .replace('{cityName}', cityName);

  return {
    title,
    description,
    h1,
    canonicalUrl: `/services/${serviceName.toLowerCase().replace(/\\s+/g, '-')}/${cityName.toLowerCase().replace(/\\s+/g, '-')}/${industryName.toLowerCase().replace(/\\s+/g, '-')}`,
  };
}
