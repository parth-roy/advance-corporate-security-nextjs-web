// D:\Projects\Parther_Technologies\acs\web\src\lib\clients.ts
// 24 Official Client Profiles harvested from ACS WordPress assets
// Covering Defence, Government Ministries, PSUs, Autonomous Bodies, and Blue-Chip Industries

export interface ACSClient {
  id: string;
  name: string;
  shortName: string;
  category: 'Defence & Armed Forces' | 'Govt & Ministries' | 'PSUs & Statutory Bodies' | 'Corporate & Industry';
  logo: string;
  tag: string;
  description: string;
}

export const ACS_CLIENTS: ACSClient[] = [
  // 1. Defence & Armed Forces
  {
    id: 'iaf',
    name: 'Indian Air Force',
    shortName: 'Indian Air Force',
    category: 'Defence & Armed Forces',
    logo: '/images/clients/iaf.png',
    tag: 'Ministry of Defence',
    description: 'Premier air arm of the Indian Armed Forces providing airspace security.',
  },
  {
    id: 'indian-navy',
    name: 'Indian Navy',
    shortName: 'Indian Navy',
    category: 'Defence & Armed Forces',
    logo: '/images/clients/indian-navy.jpeg',
    tag: 'Ministry of Defence',
    description: 'Maritime branch of the Armed Forces safeguarding naval frontiers.',
  },
  {
    id: 'ofb',
    name: 'Ordnance Factory Board',
    shortName: 'Ordnance Factory',
    category: 'Defence & Armed Forces',
    logo: '/images/clients/ofb.jpeg',
    tag: 'Defence Production',
    description: 'Pioneer defence equipment and ordnance production enterprise.',
  },
  {
    id: 'hal',
    name: 'Hindustan Aeronautics Limited',
    shortName: 'HAL',
    category: 'Defence & Armed Forces',
    logo: '/images/clients/hal.jpeg',
    tag: 'Navratna Defence PSU',
    description: 'India’s premier aerospace and defence manufacturing corporation.',
  },

  // 2. Govt & Ministries
  {
    id: 'itd',
    name: 'Income Tax Department',
    shortName: 'Income Tax Dept',
    category: 'Govt & Ministries',
    logo: '/images/clients/itd.jpeg',
    tag: 'Ministry of Finance',
    description: 'Apex central government revenue administration authority.',
  },
  {
    id: 'ayush',
    name: 'Ministry of Ayush',
    shortName: 'Ministry of Ayush',
    category: 'Govt & Ministries',
    logo: '/images/clients/ayush.png',
    tag: 'Government of India',
    description: 'Union ministry dedicated to traditional healthcare and research.',
  },
  {
    id: 'kendriya-vidyalaya',
    name: 'Kendriya Vidyalaya Sangathan',
    shortName: 'Kendriya Vidyalaya',
    category: 'Govt & Ministries',
    logo: '/images/clients/kendriya-vidyalaya.jpeg',
    tag: 'Ministry of Education',
    description: 'Autonomous central government schooling and education system.',
  },
  {
    id: 'phe',
    name: 'Public Health Engineering Department',
    shortName: 'PHE Department',
    category: 'Govt & Ministries',
    logo: '/images/clients/phe.jpeg',
    tag: 'State Govt Infrastructure',
    description: 'Nodal state engineering body for public sanitation and water supply.',
  },
  {
    id: 'cmoh',
    name: 'Chief Medical Officer of Health',
    shortName: 'CMOH Health Dept',
    category: 'Govt & Ministries',
    logo: '/images/clients/cmoh.png',
    tag: 'Health & Family Welfare',
    description: 'District healthcare administration and hospital operations authority.',
  },

  // 3. PSUs & Statutory Bodies
  {
    id: 'cpcb',
    name: 'Central Pollution Control Board',
    shortName: 'CPCB',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/cpcb.jpeg',
    tag: 'Ministry of Environment',
    description: 'Apex statutory environmental monitoring and regulation body.',
  },
  {
    id: 'icmr',
    name: 'Indian Council of Medical Research',
    shortName: 'ICMR',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/icmr.jpeg',
    tag: 'Apex Biomedical Body',
    description: 'National apex organization for medical research and clinical oversight.',
  },
  {
    id: 'bsnl',
    name: 'Bharat Sanchar Nigam Limited',
    shortName: 'BSNL',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/bsnl.png',
    tag: 'Telecom CPSE',
    description: 'Leading state-owned telecommunications provider across India.',
  },
  {
    id: 'fssai',
    name: 'Food Safety & Standards Authority of India',
    shortName: 'FSSAI',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/fssai.png',
    tag: 'Food Safety Regulator',
    description: 'Autonomous statutory authority safeguarding national food safety.',
  },
  {
    id: 'nielit',
    name: 'National Institute of Electronics & IT',
    shortName: 'NIELIT',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/nielit.png',
    tag: 'Ministry of Electronics & IT',
    description: 'Autonomous society fostering human resource development in IT.',
  },
  {
    id: 'nth',
    name: 'National Test House',
    shortName: 'National Test House',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/nth.jpeg',
    tag: 'Dept of Consumer Affairs',
    description: 'Government evaluation, standardisation, and materials testing body.',
  },
  {
    id: 'rtc',
    name: 'Railway Training Centre / Metro Rail',
    shortName: 'Railway Training Centre',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/rtc.jpg',
    tag: 'Indian Railways',
    description: 'High-security transport training facility under Indian Railways.',
  },
  {
    id: 'sai',
    name: 'Sports Authority of India',
    shortName: 'Sports Authority (SAI)',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/sai.png',
    tag: 'Ministry of Youth Affairs',
    description: 'Apex sports body developing athletic infrastructure and training.',
  },
  {
    id: 'peso',
    name: 'Petroleum & Explosives Safety Organisation',
    shortName: 'PESO',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/peso.jpeg',
    tag: 'DPIIT, Commerce Ministry',
    description: 'Statutory authority governing safety of hazardous materials.',
  },
  {
    id: 'lighthouses',
    name: 'Directorate of Lighthouses & Lightships',
    shortName: 'DG Lighthouses',
    category: 'PSUs & Statutory Bodies',
    logo: '/images/clients/lighthouses.png',
    tag: 'Ministry of Shipping',
    description: 'Navigational safety and maritime guidance authority.',
  },

  // 4. Corporate & Blue-Chip Industry
  {
    id: 'bhushan-steel',
    name: 'Bhushan Power & Steel Ltd.',
    shortName: 'Bhushan Steel',
    category: 'Corporate & Industry',
    logo: '/images/clients/bhushan-steel.png',
    tag: 'Heavy Industries / Steel',
    description: 'Major integrated steel and primary power manufacturing conglomerate.',
  },
  {
    id: 'hng',
    name: 'Hindusthan National Glass & Industries',
    shortName: 'HNG Glass Ltd',
    category: 'Corporate & Industry',
    logo: '/images/clients/hng.png',
    tag: 'Glass Packaging Leader',
    description: 'India’s largest container glass manufacturer with multi-state plants.',
  },
  {
    id: 'rama',
    name: 'Rama Group of Industries',
    shortName: 'Rama Group',
    category: 'Corporate & Industry',
    logo: '/images/clients/rama.jpeg',
    tag: 'Industrial Conglomerate',
    description: 'Diversified industrial manufacturing and packaging group.',
  },
  {
    id: 'jai-gopal',
    name: 'Jai Gopal Group',
    shortName: 'Jai Gopal Group',
    category: 'Corporate & Industry',
    logo: '/images/clients/jai-gopal.jpg',
    tag: 'Commercial & Infra',
    description: 'Established commercial infrastructure and industrial services firm.',
  },
  {
    id: 'trs',
    name: 'TRS Logistics & Supply Chain',
    shortName: 'TRS Logistics',
    category: 'Corporate & Industry',
    logo: '/images/clients/trs.png',
    tag: 'Supply Chain & Warehousing',
    description: 'Pan-India supply chain, freight forwarding, and warehousing network.',
  },
];

// Row 1 & Row 2 Partition for Dual-Row Infinite Slider
export const CLIENTS_ROW_1 = [
  ACS_CLIENTS[0],  // IAF
  ACS_CLIENTS[4],  // ITD
  ACS_CLIENTS[9],  // CPCB
  ACS_CLIENTS[3],  // HAL
  ACS_CLIENTS[11], // BSNL
  ACS_CLIENTS[12], // FSSAI
  ACS_CLIENTS[14], // NTH
  ACS_CLIENTS[16], // SAI
  ACS_CLIENTS[18], // Lighthouses
  ACS_CLIENTS[20], // HNG Glass
  ACS_CLIENTS[22], // Jai Gopal
  ACS_CLIENTS[2],  // OFB
];

export const CLIENTS_ROW_2 = [
  ACS_CLIENTS[1],  // Indian Navy
  ACS_CLIENTS[10], // ICMR
  ACS_CLIENTS[6],  // Kendriya Vidyalaya
  ACS_CLIENTS[19], // Bhushan Steel
  ACS_CLIENTS[13], // NIELIT
  ACS_CLIENTS[5],  // Ayush
  ACS_CLIENTS[15], // RTC
  ACS_CLIENTS[17], // PESO
  ACS_CLIENTS[7],  // PHE
  ACS_CLIENTS[8],  // CMOH
  ACS_CLIENTS[21], // Rama Group
  ACS_CLIENTS[23], // TRS Logistics
];
