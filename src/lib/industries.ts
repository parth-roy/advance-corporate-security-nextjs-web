export interface ACSIndustry {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  relevantServices: string[]; // service slugs
  keywords: string[];
}

export const ACS_INDUSTRIES: ACSIndustry[] = [
  {
    slug: 'hospitals',
    name: 'Hospitals & Healthcare',
    shortName: 'Healthcare',
    description: 'Security, housekeeping, and facility management for hospitals, clinics, and healthcare institutions.',
    icon: '🏥',
    relevantServices: ['security-guard', 'housekeeping', 'janitorial', 'pest-control', 'manpower-outsourcing'],
    keywords: ['hospital security services', 'healthcare facility management', 'hospital housekeeping services'],
  },
  {
    slug: 'it-parks',
    name: 'IT Parks & Tech Companies',
    shortName: 'IT & Tech',
    description: 'Integrated security and facility management for IT parks, software campuses, and technology companies.',
    icon: '💻',
    relevantServices: ['security-guard', 'surveillance-cctv', 'housekeeping', 'mep-maintenance', 'facade-cleaning'],
    keywords: ['IT park security services', 'software campus facility management', 'tech company housekeeping'],
  },
  {
    slug: 'industrial-zones',
    name: 'Industrial Zones & Factories',
    shortName: 'Industrial',
    description: 'Specialized industrial security, fire safety, and manpower for manufacturing plants and SEZs.',
    icon: '🏭',
    relevantServices: ['industrial-security', 'fire-fighting', 'manpower-outsourcing', 'housekeeping'],
    keywords: ['industrial security solutions', 'factory security services', 'manufacturing plant security'],
  },
  {
    slug: 'government',
    name: 'Government & Defence',
    shortName: 'Government',
    description: 'Government-empanelled security and facility services for Central/State government bodies and defence establishments.',
    icon: '🏛️',
    relevantServices: ['security-guard', 'armed-guard', 'housekeeping', 'horticulture', 'manpower-outsourcing'],
    keywords: ['government security services India', 'defence security agency', 'PSU facility management'],
  },
  {
    slug: 'malls',
    name: 'Retail & Shopping Malls',
    shortName: 'Retail & Malls',
    description: 'Crowd management, retail security, housekeeping, and facility management for shopping malls.',
    icon: '🛍️',
    relevantServices: ['security-guard', 'event-security', 'housekeeping', 'pest-control'],
    keywords: ['mall security services', 'retail security guards', 'shopping mall housekeeping'],
  },
  {
    slug: 'airports',
    name: 'Airports & Transport Hubs',
    shortName: 'Airports',
    description: 'Airport security support, facility management, and manpower for aviation and transport infrastructure.',
    icon: '✈️',
    relevantServices: ['security-guard', 'surveillance-cctv', 'housekeeping', 'mep-maintenance'],
    keywords: ['airport security services India', 'aviation facility management', 'airport housekeeping'],
  },
  {
    slug: 'educational-institutions',
    name: 'Educational Institutions',
    shortName: 'Education',
    description: 'Campus security, housekeeping, and horticulture for schools, colleges, and universities.',
    icon: '🎓',
    relevantServices: ['security-guard', 'housekeeping', 'horticulture', 'pest-control'],
    keywords: ['school security services', 'college campus security', 'educational institution housekeeping'],
  },
  {
    slug: 'defence-establishments',
    name: 'Defence Establishments',
    shortName: 'Defence',
    description: 'Specialized security and facility services for defence cantonments, air force bases, and military establishments.',
    icon: '⭐',
    relevantServices: ['security-guard', 'armed-guard', 'industrial-security', 'housekeeping', 'horticulture'],
    keywords: ['defence establishment security India', 'army cantonment facility management', 'air force base services'],
  },
];

export function getIndustryBySlug(slug: string): ACSIndustry | undefined {
  return ACS_INDUSTRIES.find(i => i.slug === slug);
}
