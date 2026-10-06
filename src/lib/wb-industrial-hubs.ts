// ============================================================
// ACS — West Bengal Industrial Hubs Data Layer
// Geospatial proximity feature for PSEO city & service pages
// Covers all major WB industrial parks, tech hubs, and
// commercial corridors for hyper-local SEO differentiation
// ============================================================

export interface WBIndustrialHub {
  name: string;
  type: string;
  district: string;
  lat: number;
  lng: number;
  nearestCities: string[];
}

export const WB_INDUSTRIAL_HUBS: WBIndustrialHub[] = [
  {
    name: 'Haldia Petrochemical Complex',
    type: 'Petrochemicals & Refinery',
    district: 'Purba Medinipur',
    lat: 22.0257,
    lng: 88.0583,
    nearestCities: ['haldia', 'durgachak', 'sutahata'],
  },
  {
    name: 'WBIIDC Plasto Steel Park Manikanchan',
    type: 'Steel & Plastics Manufacturing',
    district: 'South 24 Parganas',
    lat: 22.4728,
    lng: 88.4394,
    nearestCities: ['kolkata', 'rajpur-sonarpur'],
  },
  {
    name: 'Durgapur Steel Plant & Chemicals Hub',
    type: 'Steel & Chemical Industry',
    district: 'Paschim Bardhaman',
    lat: 23.4900,
    lng: 87.3100,
    nearestCities: ['durgapur', 'andal', 'burnpur'],
  },
  {
    name: 'Asansol Burnpur IISCO Steel Zone',
    type: 'Integrated Steel Plant & Heavy Engineering',
    district: 'Paschim Bardhaman',
    lat: 23.6500,
    lng: 86.9800,
    nearestCities: ['asansol', 'burnpur', 'kulti', 'jamuria', 'barakar'],
  },
  {
    name: 'Kalyani Expressway Industrial Growth Centre',
    type: 'Pharma & Light Manufacturing',
    district: 'Nadia',
    lat: 22.9750,
    lng: 88.4344,
    nearestCities: ['kalyani', 'haringhata', 'kanchrapara'],
  },
  {
    name: 'Sankrail Rubber & Chemical Park',
    type: 'Rubber & Chemical Processing',
    district: 'Howrah',
    lat: 22.5833,
    lng: 88.2333,
    nearestCities: ['sankrail', 'dhulagarh', 'uluberia', 'domjur'],
  },
  {
    name: 'Salt Lake Sector V IT Hub',
    type: 'IT / ITES Software Technology Park',
    district: 'North 24 Parganas',
    lat: 22.5726,
    lng: 88.4301,
    nearestCities: ['salt-lake', 'new-town', 'kolkata', 'barasat'],
  },
  {
    name: 'New Town Rajarhat Smart City',
    type: 'Smart City & Corporate Hub',
    district: 'North 24 Parganas',
    lat: 22.5958,
    lng: 88.4788,
    nearestCities: ['new-town', 'rajarhat', 'kolkata', 'madhyamgram'],
  },
  {
    name: 'Dankuni Multi-Modal Freight Terminal',
    type: 'Rail-Road Freight Hub',
    district: 'Hooghly',
    lat: 22.6847,
    lng: 88.3026,
    nearestCities: ['dankuni', 'dankuni-logistics', 'konnagar', 'uttarpara'],
  },
  {
    name: 'Kharagpur IIT & Industrial Belt',
    type: 'R&D, Technology & Manufacturing',
    district: 'Paschim Medinipur',
    lat: 22.3200,
    lng: 87.3100,
    nearestCities: ['kharagpur', 'jhargram'],
  },
  {
    name: 'Siliguri Sevoke Road Commercial Hub',
    type: 'Trade, Commerce & Logistics',
    district: 'Darjeeling',
    lat: 26.7271,
    lng: 88.3953,
    nearestCities: ['siliguri', 'dabgram', 'matigara', 'jalpaiguri', 'bagdogra'],
  },
  {
    name: 'Taratala Hyde Road Manufacturing Area',
    type: 'Manufacturing & Logistics',
    district: 'Kolkata',
    lat: 22.5142,
    lng: 88.3203,
    nearestCities: ['kolkata', 'behala', 'taratala'],
  },
  {
    name: 'Kasba Industrial Estate',
    type: 'Commercial & Light Industrial',
    district: 'Kolkata',
    lat: 22.5127,
    lng: 88.3922,
    nearestCities: ['kasba', 'jadavpur', 'topsia'],
  },
  {
    name: 'Bandel Thermal Power Logistics Corridor',
    type: 'Power Generation & Logistics',
    district: 'Hooghly',
    lat: 23.0157,
    lng: 88.3793,
    nearestCities: ['bandel', 'chinsurah', 'konnagar', 'tribeni'],
  },
  {
    name: 'Shalimar & Garden Reach Shipbuilding Zone',
    type: 'Shipbuilding & Port Services',
    district: 'Kolkata',
    lat: 22.5497,
    lng: 88.3086,
    nearestCities: ['kolkata', 'howrah', 'maheshtala'],
  },
  {
    name: 'Durgapur Pharma & Chemicals SEZ',
    type: 'Pharma & Chemical SEZ',
    district: 'Paschim Bardhaman',
    lat: 23.5100,
    lng: 87.3200,
    nearestCities: ['durgapur', 'pandaveswar', 'andal'],
  },
  {
    name: 'Alipurduar North Bengal Trade Hub',
    type: 'Cross-Border Trade & Commerce',
    district: 'Alipurduar',
    lat: 26.4894,
    lng: 89.5275,
    nearestCities: ['alipurduar', 'fulbari'],
  },
  {
    name: 'Balurghat Foodgrain Processing Hub',
    type: 'Agri-Processing & Cold Storage',
    district: 'Dakshin Dinajpur',
    lat: 25.2162,
    lng: 88.7756,
    nearestCities: ['balurghat', 'raiganj'],
  },
];

/**
 * Returns up to 4 industrial hubs nearest to the given city slug.
 */
export function getWBHubsForCity(citySlug: string): WBIndustrialHub[] {
  return WB_INDUSTRIAL_HUBS.filter((hub) =>
    hub.nearestCities.includes(citySlug)
  ).slice(0, 4);
}

/**
 * West Bengal Minimum Wages Act wage zone classification.
 * Zone A = high-urban / metro-adjacent districts
 * Zone B = all other districts
 */
const ZONE_A_SLUGS = new Set<string>([
  'kolkata',
  'howrah',
  'barrackpore',
  'barasat',
  'barrackpur',
  'north-barrackpur',
  'habra',
  'bhatpara',
  'panihati',
  'kamarhati',
  'naihati',
  'titagarh',
  'khardaha',
  'khardah',
  'north-dum-dum',
  'south-dum-dum',
  'dum-dum',
  'baranagar',
  'serampore',
  'chandannagar',
  'uttarpara',
  'uttarpara-kotrung',
  'rishra',
  'baidyabati',
  'champdani',
  'bansberia',
  'konnagar',
  'hindmotor',
  'dankuni',
  'dankuni-logistics',
  'sankrail',
  'dhulagarh',
  'uluberia',
  'maheshtala',
  'rajpur-sonarpur',
  'salt-lake',
  'new-town',
  'esplanade',
  'garia',
  'behala',
  'jadavpur',
  'rajarhat',
  'rajarhat-gopalpur',
  'kona-expressway',
  'domjur',
  'taratala',
  'kasba',
  'topsia',
  'tangra',
  'sodepur',
  'belgharia',
  'agarpara',
  'haringhata',
  'bally',
  'bally-town',
  'kalyani',
  'nabadwip',
  'santipur',
  'hugli-and-chinsurah',
  'bhadreswar',
  'ashokenagar-kalyangarh',
  'halisahar',
  'kanchrapara',
  'north-dum-dum',
  'bagnan',
  'tribeni',
  'bandel',
  'chinsurah',
  'madhyamgram',
]);

export function getWBWageZone(citySlug: string): 'A' | 'B' {
  return ZONE_A_SLUGS.has(citySlug) ? 'A' : 'B';
}
