// ============================================================
// ACS — Maharashtra Industrial Hubs & Proximity Layer
// Geospatial proximity feature for PSEO city & service pages
// Maps MIDC hubs, SEZs, logistics corridors and nearest cities
// ============================================================

export interface MHIndustrialHub {
  name: string;
  type: string;
  district: string;
  midcGroup: 'A' | 'B' | 'C' | 'D' | 'D+';
  lat: number;
  lng: number;
  nearestCities: string[];
}

export const MH_INDUSTRIAL_HUBS: MHIndustrialHub[] = [
  {
    name: 'Chakan Industrial Area (Phases I–V)',
    type: 'Automobile, EV & Heavy Engineering (7,500+ Acres)',
    district: 'Pune',
    midcGroup: 'B',
    lat: 18.7606,
    lng: 73.8636,
    nearestCities: ['chakan', 'pune', 'pimpri-chinchwad', 'bhosari', 'talegaon'],
  },
  {
    name: 'AURIC Shendra – Bidkin Smart Industrial City',
    type: 'DMIC Greenfield Smart City, Auto & ESDM (10,000 Acres)',
    district: 'Chhatrapati Sambhajinagar',
    midcGroup: 'C',
    lat: 19.8762,
    lng: 75.4856,
    nearestCities: ['shendra', 'aurangabad', 'waluj', 'jalna'],
  },
  {
    name: 'Butibori 5-Star MIDC Industrial Area',
    type: 'Heavy Metallurgy, Textiles & Transmission Towers (2,428 Hectares)',
    district: 'Nagpur',
    midcGroup: 'D+',
    lat: 20.9254,
    lng: 79.0068,
    nearestCities: ['butibori', 'nagpur', 'hinganghat', 'wardha'],
  },
  {
    name: 'Taloja Industrial Area (MIDC Red Zone)',
    type: 'Chemicals, Petrochemicals, Bulk Drugs & Fertilizers (2,140 Acres)',
    district: 'Raigad',
    midcGroup: 'A',
    lat: 19.0667,
    lng: 73.1167,
    nearestCities: ['taloja', 'navi-mumbai', 'panvel', 'turbhe', 'rabale', 'ambernath'],
  },
  {
    name: 'Bhiwandi Warehousing & Logistics Hub',
    type: 'Mega E-Commerce Logistics & Freight Fulfillment (40M+ Sq. Ft.)',
    district: 'Thane',
    midcGroup: 'A',
    lat: 19.2967,
    lng: 73.0631,
    nearestCities: ['bhiwandi', 'thane', 'kalyan', 'mumbai'],
  },
  {
    name: 'Ranjangaon 5-Star MIDC',
    type: 'Consumer Electronics, Appliances & Automotive (2,200 Acres)',
    district: 'Pune',
    midcGroup: 'B',
    lat: 18.7758,
    lng: 74.2758,
    nearestCities: ['ranjangaon', 'pune', 'hadapsar', 'shirwal', 'baramati'],
  },
  {
    name: 'Tarapur Industrial Area (MIDC Chemical SEZ)',
    type: 'Bulk Drug APIs, Specialty Chemicals & Textiles (3,000 Acres)',
    district: 'Palghar',
    midcGroup: 'B',
    lat: 19.8358,
    lng: 72.7058,
    nearestCities: ['tarapur', 'boisar', 'palghar'],
  },
  {
    name: 'JNPT Nhava Sheva & Uran Port Logistics Axis',
    type: 'Maritime Container Port, CFS & Bonded Warehousing',
    district: 'Raigad',
    midcGroup: 'A',
    lat: 18.9500,
    lng: 72.9500,
    nearestCities: ['jnpt', 'uran', 'navi-mumbai', 'panvel'],
  },
  {
    name: 'Hinjawadi Rajiv Gandhi Infotech Park',
    type: 'Tier-1 IT / ITES Software Technology Park & SEZ (2,800 Acres)',
    district: 'Pune',
    midcGroup: 'A',
    lat: 18.5913,
    lng: 73.7389,
    nearestCities: ['hinjewadi', 'pune', 'pimpri-chinchwad', 'wakad', 'baner'],
  },
  {
    name: 'Ambad & Satpur MIDC Precision Cluster',
    type: 'Precision Tooling, Electrical Switchgear & Auto Components',
    district: 'Nashik',
    midcGroup: 'B',
    lat: 19.9615,
    lng: 73.7441,
    nearestCities: ['nashik', 'amravati', 'dhule', 'jalgaon'],
  },
  {
    name: 'Kagal 5-Star MIDC & Hatkanangale Industrial Belt',
    type: 'Automotive Casting, Foundry & Export Textiles (3,500 Acres)',
    district: 'Kolhapur',
    midcGroup: 'C',
    lat: 16.5786,
    lng: 74.3164,
    nearestCities: ['kolhapur', 'ichalkaranji', 'sangli', 'miraj'],
  },
  {
    name: 'Roha & Mahad Chemical Industrial Belt',
    type: 'Pharma Intermediates, Dyes & Pigments (Red Zone MIDC)',
    district: 'Raigad',
    midcGroup: 'A',
    lat: 18.4385,
    lng: 73.1186,
    nearestCities: ['roha', 'mahad', 'pen', 'chiplun', 'ratnagiri'],
  },
  {
    name: 'Satara BMIC Node & Shirwal Industrial Area',
    type: 'Bengaluru-Mumbai Industrial Corridor Node & Auto Components',
    district: 'Satara',
    midcGroup: 'C',
    lat: 18.1345,
    lng: 73.9856,
    nearestCities: ['shirwal', 'satara', 'karad', 'baramati', 'kurkumbh'],
  },
  {
    name: 'Waluj Industrial Area (MIDC Auto Cluster)',
    type: 'Automotive Stamping, Two-Wheeler Ancillaries & White Goods',
    district: 'Chhatrapati Sambhajinagar',
    midcGroup: 'C',
    lat: 19.8333,
    lng: 75.2500,
    nearestCities: ['waluj', 'aurangabad', 'shendra', 'jalna'],
  },
  {
    name: 'Talegaon Industrial Area (MIDC Floriculture & Auto)',
    type: 'Automobile Assembly, Heavy Fabrication & Logistics',
    district: 'Pune',
    midcGroup: 'B',
    lat: 18.7300,
    lng: 73.6800,
    nearestCities: ['talegaon', 'chakan', 'pimpri-chinchwad', 'pune'],
  },
  {
    name: 'Bhosari & Pimpri MIDC Engineering Complex',
    type: 'High-Precision Machining, Hydraulics, Tooling & Die Making',
    district: 'Pune',
    midcGroup: 'A',
    lat: 18.6250,
    lng: 73.8400,
    nearestCities: ['bhosari', 'pimpri-chinchwad', 'pune', 'chakan'],
  },
  {
    name: 'Kurkumbh & Baramati MIDC Industrial Hub',
    type: 'Chemical Formulations, Dairy Processing & Agro-Engineering',
    district: 'Pune',
    midcGroup: 'C',
    lat: 18.3300,
    lng: 74.5200,
    nearestCities: ['kurkumbh', 'baramati', 'shirwal', 'pune'],
  },
  {
    name: 'Chandrapur Heavy Industry & Mineral Belt',
    type: 'Cement, Thermal Power Plants, Paper & Metallurgical Minerals',
    district: 'Chandrapur',
    midcGroup: 'D+',
    lat: 19.9500,
    lng: 79.3000,
    nearestCities: ['chandrapur', 'nagpur', 'wardha', 'gadchiroli'],
  },
];

/**
 * Returns up to 4 industrial hubs nearest to the given Maharashtra city slug.
 */
export function getMHHubsForCity(citySlug: string): MHIndustrialHub[] {
  return MH_INDUSTRIAL_HUBS.filter((hub) =>
    hub.nearestCities.includes(citySlug)
  ).slice(0, 4);
}

const MH_ZONE_I_SLUGS = new Set<string>([
  'mumbai', 'pune', 'pimpri-chinchwad', 'thane', 'navi-mumbai',
  'chakan', 'talegaon', 'bhosari', 'ranjangaon', 'hinjewadi',
  'bhiwandi', 'taloja', 'jnpt', 'rabale', 'mahape', 'turbhe', 'airoli',
  'aurangabad', 'shendra', 'waluj', 'nagpur', 'butibori', 'nashik',
  'kolhapur', 'solapur', 'amravati', 'panvel', 'boisar', 'palghar',
  'tarapur', 'ambernath', 'kalyan', 'dombivli', 'ulhasnagar',
  'andheri', 'bandra', 'borivali', 'dadar', 'ghatkopar', 'malad', 'powai',
  'kothrud', 'hadapsar', 'wakad', 'baner', 'viman-nagar',
  'mira-bhayandar', 'mira-and-bhayander', 'vasai', 'virar', 'vasai-virar',
  'badlapur', 'kalyan-and-dombivali', 'navi-mumbai-panvel-raigad'
]);

const MH_ZONE_II_SLUGS = new Set<string>([
  'satara', 'shirwal', 'baramati', 'kurkumbh', 'ahmednagar', 'jalna',
  'sangli', 'miraj', 'ichalkaranji', 'latur', 'dhule', 'chandrapur',
  'nanded', 'wardha', 'roha', 'mahad', 'chiplun', 'ratnagiri', 'karad',
  'sangli-miraj-kupwad', 'nanded-waghala', 'jalgaon', 'akola', 'yavatmal'
]);

/**
 * Returns Zone I for Municipal Corporations and adjacent 20km MIDC belts,
 * Zone II for A/B Grade Municipal Councils, and Zone III for remaining regions.
 */
export function getMHWageZone(citySlug: string): 'I' | 'II' | 'III' {
  const normalized = citySlug.toLowerCase().trim();
  if (MH_ZONE_I_SLUGS.has(normalized)) return 'I';
  if (MH_ZONE_II_SLUGS.has(normalized)) return 'II';
  return 'III';
}
