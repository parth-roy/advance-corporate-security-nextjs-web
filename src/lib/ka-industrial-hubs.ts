// ============================================================
// ACS — Karnataka Industrial Hubs & Proximity Layer
// Geospatial proximity feature for PSEO city & service pages
// Maps KIADB parks, aerospace SEZs, tech corridors and nearest cities
// ============================================================

export interface KAIndustrialHub {
  name: string;
  type: string;
  district: string;
  kiadbZone: 1 | 2 | 3;
  lat: number;
  lng: number;
  nearestCities: string[];
}

export const KA_INDUSTRIAL_HUBS: KAIndustrialHub[] = [
  {
    name: 'Peenya Industrial Area (Phases 1–4)',
    type: 'Machine Tools, Hydraulics, Electroplating & MSME Manufacturing (40 Sq. Km)',
    district: 'Bengaluru Urban',
    kiadbZone: 3,
    lat: 13.0285,
    lng: 77.5197,
    nearestCities: ['peenya', 'bengaluru', 'nelamangala', 'dobbaspet'],
  },
  {
    name: 'Devanahalli Aerospace Park & SEZ',
    type: 'Aviation Hardware, Defense Electronics, Avionics & IT (3,000+ Acres)',
    district: 'Bengaluru Rural',
    kiadbZone: 3,
    lat: 13.2437,
    lng: 77.7126,
    nearestCities: ['devanahalli', 'bengaluru', 'hoskote', 'doddaballapur'],
  },
  {
    name: 'Vasanthanarasapura Mega Industrial Park',
    type: 'CBIC Priority Node, Machine Tools, Food Park & Engineering (8,484 Acres)',
    district: 'Tumakuru',
    kiadbZone: 2,
    lat: 13.4312,
    lng: 77.0189,
    nearestCities: ['vasanthanarasapura', 'tumkur', 'dobbaspet', 'sira'],
  },
  {
    name: 'Bidadi Industrial Area (Phases 1 & 2)',
    type: 'Automotive OEMs (Toyota), Powertrains, Stamping & Beverages (1,410 Acres)',
    district: 'Ramanagara',
    kiadbZone: 3,
    lat: 12.7981,
    lng: 77.3828,
    nearestCities: ['bidadi', 'harohalli', 'bengaluru', 'mandya'],
  },
  {
    name: 'Bommasandra – Jigani Industrial Complex',
    type: 'Biopharma (Biocon), Precision Sheet Metal, Granite & Auto (2,200 Acres)',
    district: 'Bengaluru Urban',
    kiadbZone: 3,
    lat: 12.8167,
    lng: 77.6833,
    nearestCities: ['bommasandra', 'jigani', 'electronic-city', 'bengaluru'],
  },
  {
    name: 'Harohalli Industrial Area (Phases 1–5)',
    type: 'Polymers, Rubber Molding, Electrical Equipment & Packaging (3,500 Acres)',
    district: 'Ramanagara',
    kiadbZone: 2,
    lat: 12.6667,
    lng: 77.4500,
    nearestCities: ['harohalli', 'bidadi', 'bengaluru', 'kanakapura'],
  },
  {
    name: 'Narasapura & Vemgal Industrial Areas',
    type: 'Two-Wheeler OEM (Honda), Heavy Trucks (Scania) & EV Hub (2,500 Acres)',
    district: 'Kolar',
    kiadbZone: 2,
    lat: 13.1500,
    lng: 78.1833,
    nearestCities: ['narasapura', 'vemgal', 'kolar', 'malur', 'hoskote'],
  },
  {
    name: 'Malur Industrial & Logistics Hub',
    type: 'Warehousing, Cold Chain, FMCG Food Processing & Logistics Parks',
    district: 'Kolar',
    kiadbZone: 2,
    lat: 13.0000,
    lng: 77.9400,
    nearestCities: ['malur', 'hoskote', 'whitefield', 'kolar'],
  },
  {
    name: 'Nelamangala & Dobbaspet Freight Axis',
    type: 'Container Freight Stations, 3PL Warehousing & Pre-Engineered Buildings',
    district: 'Bengaluru Rural',
    kiadbZone: 2,
    lat: 13.1000,
    lng: 77.3800,
    nearestCities: ['nelamangala', 'dobbaspet', 'peenya', 'tumkur'],
  },
  {
    name: 'Whitefield EPIP & International Tech Park (ITPB)',
    type: 'Tier-1 IT / ITES, Hardware R&D, Medical Electronics & Tech Parks',
    district: 'Bengaluru Urban',
    kiadbZone: 3,
    lat: 12.9833,
    lng: 77.7500,
    nearestCities: ['whitefield', 'bengaluru', 'marathahalli', 'hoskote'],
  },
  {
    name: 'Electronic City Industrial Layout (Phases 1–3)',
    type: 'Electronics Manufacturing Services (EMS), Semiconductors & IT SEZ',
    district: 'Bengaluru Urban',
    kiadbZone: 3,
    lat: 12.8500,
    lng: 77.6667,
    nearestCities: ['electronic-city', 'bommasandra', 'bengaluru'],
  },
  {
    name: 'Doddaballapur Integrated Textile & Industrial Park',
    type: 'Apparel Exports, Textile Weaving, Garment Machining & Light Engineering',
    district: 'Bengaluru Rural',
    kiadbZone: 3,
    lat: 13.2900,
    lng: 77.5400,
    nearestCities: ['doddaballapur', 'devanahalli', 'bengaluru'],
  },
  {
    name: 'Hebbal & Koorgalli Industrial Areas (Mysuru)',
    type: 'Precision Automotive Components, Pharmaceuticals, Optics & IT SEZ',
    district: 'Mysuru',
    kiadbZone: 2,
    lat: 12.3500,
    lng: 76.6000,
    nearestCities: ['hebbal-mysore', 'mysore', 'nanjangud', 'mandya'],
  },
  {
    name: 'Nanjangud Industrial Area',
    type: 'Bulk Drug APIs, Formulations, FMCG Bottling & Specialty Chemicals',
    district: 'Mysuru',
    kiadbZone: 2,
    lat: 12.1200,
    lng: 76.6800,
    nearestCities: ['nanjangud', 'mysore', 'chamarajanagar'],
  },
  {
    name: 'Belur & Mummigatti Industrial Area (Dharwad / BMIC Node)',
    type: 'Commercial Vehicles (Tata Motors), Marcopolo Bus Body & Heavy Engineering (6,042 Acres)',
    district: 'Dharwad',
    kiadbZone: 2,
    lat: 15.4500,
    lng: 75.0000,
    nearestCities: ['hubli-and-dharwad', 'hubli', 'belgaum'],
  },
  {
    name: 'Baikampady Industrial Area (Mangaluru Port)',
    type: 'Maritime Freight, Petrochemicals, Fertilizers, Marine Processing & Cold Chain',
    district: 'Dakshina Kannada',
    kiadbZone: 2,
    lat: 12.9300,
    lng: 74.8100,
    nearestCities: ['baikampady', 'mangalore', 'udupi'],
  },
  {
    name: 'Toranagallu JSW Vijayanagar Steel Complex (Ballari)',
    type: 'Integrated Steel Plant (12+ MTPA), Heavy Metallurgy & Railway Freight Logistics',
    district: 'Ballari',
    kiadbZone: 1,
    lat: 15.2000,
    lng: 76.6700,
    nearestCities: ['bellary', 'hospet', 'chitradurga', 'koppal'],
  },
];

/**
 * Returns up to 4 industrial hubs nearest to the given Karnataka city slug.
 */
export function getKAHubsForCity(citySlug: string): KAIndustrialHub[] {
  return KA_INDUSTRIAL_HUBS.filter((hub) =>
    hub.nearestCities.includes(citySlug)
  ).slice(0, 4);
}

const KA_ZONE_1_SLUGS = new Set<string>([
  'bengaluru', 'peenya', 'whitefield', 'electronic-city', 'bommasandra',
  'jigani', 'devanahalli', 'doddaballapur', 'koramangala', 'indiranagar',
  'jayanagar', 'hsr-layout', 'marathahalli', 'bellandur'
]);

const KA_ZONE_2_SLUGS = new Set<string>([
  'mysore', 'hebbal-mysore', 'nanjangud', 'hubli', 'hubli-and-dharwad',
  'mangalore', 'baikampady', 'belgaum', 'davangere', 'bellary', 'hospet',
  'tumkur', 'vasanthanarasapura', 'shimoga', 'udupi', 'kolar', 'hassan',
  'mandya', 'chitradurga', 'gulbarga', 'raichur', 'bidar', 'bidadi',
  'hoskote', 'nelamangala', 'dobbaspet', 'narasapura', 'vemgal', 'malur',
  'kgf', 'bijapur', 'bhadravati', 'gadag-and-betigeri', 'ranibennur'
]);

/**
 * Returns Wage Zone 1 for Greater Bengaluru Authority / BBMP limits,
 * Wage Zone 2 for other Municipal Corporations and District HQs,
 * and Wage Zone 3 for remaining rural taluks and greenfield nodes.
 */
export function getKAWageZone(citySlug: string): 1 | 2 | 3 {
  const normalized = citySlug.toLowerCase().trim();
  if (KA_ZONE_1_SLUGS.has(normalized)) return 1;
  if (KA_ZONE_2_SLUGS.has(normalized)) return 2;
  return 3;
}
