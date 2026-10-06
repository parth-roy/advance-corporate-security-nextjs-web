// ============================================================
// ACS — Location × Service Dynamic FAQ Engine
// Drives FAQPage JSON-LD on all 12,500+ PSEO pages
// Keywords from SEO Research Report integrated
// ============================================================

export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqContext {
  cityName: string;
  stateName: string;
  serviceSlug: string;
  serviceName: string;
  serviceShortName: string;
  schemaType: string;
}

export function generateServiceCityFaqs(ctx: FaqContext): FAQ[] {
  const { cityName, stateName, serviceName, serviceShortName, serviceSlug } = ctx;
  const isSecurityService = ctx.schemaType === 'SecurityService';
  const isFacility = ['housekeeping', 'janitorial', 'pest-control', 'facade-cleaning', 'mep-maintenance'].includes(serviceSlug);
  const isManpower = ['manpower-outsourcing', 'placement-services', 'payroll-management'].includes(serviceSlug);

  const baseFaqs: FAQ[] = [
    // FAQ 1 — PSARA / Licensing (Security) OR ISO (Facility/Manpower)
    isSecurityService ? {
      question: `Are Advance Corporate Security's security guards in ${cityName} PSARA licensed?`,
      answer: `Yes. All ACS security personnel deployed in ${cityName}, ${stateName} strictly adhere to PSARA (Private Security Agencies Regulation Act) guidelines. Every guard is licensed, background-verified, medically fit, and trained per Ministry of Home Affairs standards. ACS holds state PSARA licenses in major hubs including Delhi NCR, West Bengal, and Jharkhand, and delivers statutory-compliant security deployments nationwide.`
    } : {
      question: `Is Advance Corporate Security ISO 9001:2015 certified for ${serviceName} in ${cityName}?`,
      answer: `Yes. ACS is ISO 9001:2015 certified, ensuring that all ${serviceName} delivered in ${cityName}, ${stateName} meet internationally recognized quality management standards. Our service delivery follows documented SOPs with regular internal audits, ensuring consistent quality for every client.`
    },
    // FAQ 2 — Deployment speed
    {
      question: `How quickly can ACS deploy ${serviceShortName} personnel in ${cityName}?`,
      answer: `ACS can typically mobilize trained ${serviceShortName} staff in ${cityName} within 24–72 hours for standard contracts. For urgent requirements or critical infrastructure in ${stateName}, emergency deployment can often be arranged within 12–24 hours through our 24x7 control room operations. Contact us to discuss your specific timeline.`
    },
    // FAQ 3 — Cost / Pricing
    {
      question: `What is the cost of ${serviceName} in ${cityName}?`,
      answer: `The cost of ${serviceName} in ${cityName} depends on the number of personnel required, shift timings (day/night/24x7), site complexity, and contract duration. ACS provides transparent, all-inclusive monthly quotations covering staff salaries, PF, ESIC, uniform, and equipment costs. Contact us for a free site assessment and customized quotation.`
    },
    // FAQ 4 — Statutory compliance
    {
      question: `Does ACS handle PF, ESIC, and Minimum Wage compliance for staff in ${cityName}?`,
      answer: `Absolutely. ACS fully manages all statutory compliances including Provident Fund (PF), Employee State Insurance (ESIC), Professional Tax, Bonus Act, and ${stateName} state minimum wage regulations for all staff deployed in ${cityName}. Client organizations have zero legal exposure — ACS assumes complete employer-of-record responsibility.`
    },
    // FAQ 5 — Service-specific / industries
    {
      question: `Which industries does ACS serve with ${serviceName} in ${cityName}?`,
      answer: `ACS provides ${serviceName} in ${cityName} to a wide range of sectors including corporate offices, IT parks, hospitals, banks, government establishments, educational institutions, manufacturing plants, warehouses, shopping malls, hotels, and residential complexes across ${stateName}. We serve both public sector and private enterprise clients.`
    },
  ];

  // Suppress unused variable warnings for isFacility (used implicitly via serviceSlug checks)
  void isFacility;

  // Add service-specific FAQ 6
  if (isSecurityService && serviceSlug === 'security-guard') {
    baseFaqs.push({
      question: `Can ACS provide armed security guards for industrial sites near ${cityName}?`,
      answer: `Yes. ACS provides PSARA-licensed armed security guards specifically trained for industrial environments, banks, and high-value asset protection in and around ${cityName}. Our armed guard teams include ex-servicemen with licensed firearms training and hazmat awareness for plant environments.`
    });
  } else if (serviceSlug === 'housekeeping') {
    baseFaqs.push({
      question: `How quickly can ACS deploy housekeeping staff for a new corporate office in ${cityName}?`,
      answer: `ACS can deploy trained, uniformed corporate housekeeping staff in ${cityName} within 48–72 hours for standard office setups. For large corporate campuses or hospitals in ${stateName}, we conduct a pre-deployment site survey to create a customized cleaning schedule and staffing plan at no extra cost.`
    });
  } else if (isManpower) {
    baseFaqs.push({
      question: `What is the minimum wage for contract labour in ${stateName}?`,
      answer: `ACS strictly follows the current ${stateName} state minimum wage notification for all contract labour deployed in ${cityName}. We maintain complete wage registers, attendance records, and statutory deposit receipts as mandated by the Minimum Wages Act, 1948 — giving you complete audit-ready documentation.`
    });
  }

  return baseFaqs;
}

export function generateCityHubFaqs(cityName: string, stateName: string): FAQ[] {
  return [
    {
      question: `What services does Advance Corporate Security provide in ${cityName}?`,
      answer: `In ${cityName}, ACS provides a comprehensive range of B2B services: PSARA-licensed Security Guard Services (armed & unarmed), Facility Management (corporate housekeeping, pest control, MEP maintenance, facade cleaning), Manpower Outsourcing & Placement, Payroll Compliance Management, and Horticulture & Landscaping. All services come with full statutory compliance and ISO 9001:2015 quality assurance.`
    },
    {
      question: `What makes Advance Corporate Security a trusted facility and security partner in ${cityName}?`,
      answer: `ACS is one of ${stateName}'s most experienced B2B facility and security services providers, with 25+ years of operational history since 2000. In ${cityName}, we serve government establishments, defense organizations, hospitals, IT parks, and industrial plants. Our PSARA license, ISO 9001:2015 certification, and proven track record with clients like the Indian Air Force, BSF, HAL, and Indian Oil demonstrate our operational reliability.`
    },
    {
      question: `Does ACS handle government and PSU contracts in ${cityName}?`,
      answer: `Yes. ACS is government-empanelled and has an extensive track record serving Central & State Government bodies, Defence establishments (IAF, BSF, HAL), PSUs (Indian Oil, CPCB), and municipal bodies across India. We are equipped to handle GFR/GeM procurement and government tender processes for clients in ${cityName}, ${stateName}.`
    },
    {
      question: `How do I get a quotation for services in ${cityName}?`,
      answer: `You can request a free quotation for any ACS service in ${cityName} by calling +91 93399 88999 / +91 79801 47044 / +91 94770 06681 or emailing advancedcorporatesecurityj@gmail.com. Our team will conduct a free on-site assessment in ${cityName} and provide a detailed, all-inclusive service proposal within 24–48 hours.`
    },
    {
      question: `What government compliance certifications does ACS hold for services in ${stateName}?`,
      answer: `ACS operates in full compliance with the Private Security Agencies (Regulation) Act (PSARA 2005), ISO 9001:2015 quality management standards, and all statutory regulations including PF, ESIC, and the Contract Labour (R&A) Act 1970. In key operational hubs like Delhi NCR, West Bengal, and Jharkhand, ACS holds valid state PSARA licenses, with nationwide deployment capability under statutory compliance across ${stateName}.`
    },
  ];
}

export interface LocalZone {
  name: string;
  type: string;
  distance: string;
}

const KNOWN_CITY_ZONES: Record<string, LocalZone[]> = {
  asansol: [
    { name: 'Asansol-Durgapur Industrial Corridor', type: 'Steel & Heavy Engineering', distance: 'Core Zone' },
    { name: 'IISCO Steel Plant & Burnpur Works', type: 'Steel Manufacturing', distance: '3 km' },
    { name: 'Asansol Station Road Commercial Hub', type: 'Commercial & Banking', distance: 'Central' },
    { name: 'Kulti & Barakar Foundry Belt', type: 'Foundry & Engineering', distance: '8–12 km' },
  ],
  durgapur: [
    { name: 'Durgapur Steel Plant Township', type: 'Steel & Heavy Industry', distance: 'Core Zone' },
    { name: 'ADDA Industrial Estate Phases I–V', type: 'Manufacturing & SME Hub', distance: '2–6 km' },
    { name: 'Durgapur Pharma & Chemicals SEZ', type: 'Pharma & Chemicals', distance: 'City Limits' },
    { name: 'City Centre Durgapur Commercial Belt', type: 'Corporate & Retail Hub', distance: 'Central' },
  ],
  siliguri: [
    { name: 'Sevoke Road Commercial & Trade Hub', type: 'Trade & Commerce', distance: 'Core Zone' },
    { name: 'Bagdogra Industrial Growth Centre', type: 'Logistics & Aviation Zone', distance: '12 km' },
    { name: 'Dabgram-Fulbari Trade Corridor', type: 'Cross-Border Trade & Warehousing', distance: '8 km' },
    { name: 'NJP & Matigara Logistics Hub', type: 'Rail & Road Freight', distance: '4–7 km' },
  ],
  haldia: [
    { name: 'Haldia Petrochemical Complex', type: 'Petrochemicals & Refinery', distance: 'Core Zone' },
    { name: 'Haldia Port Trust Industrial Area', type: 'Port & Shipping Hub', distance: '2 km' },
    { name: 'WBIIDC Haldia Industrial Growth Centre', type: 'MSME & Manufacturing', distance: '3 km' },
    { name: 'Durgachak & Sutahata Chemical Belt', type: 'Chemical & Pharmaceutical', distance: '5–8 km' },
  ],
  kharagpur: [
    { name: 'IIT Kharagpur Technology Precinct', type: 'R&D & Technology Hub', distance: 'Campus Zone' },
    { name: 'Kharagpur Industrial Growth Centre', type: 'Manufacturing & Engineering', distance: '3 km' },
    { name: 'Nimpura & Inda Industrial Area', type: 'Light Manufacturing & Logistics', distance: '2–4 km' },
    { name: 'SH-5 Jhargram Road Logistics Corridor', type: 'Road Freight & Warehousing', distance: '6 km' },
  ],
  barasat: [
    { name: 'Madhyamgram-Barasat NH-12 Commercial Corridor', type: 'Commercial & Logistics', distance: 'Core Zone' },
    { name: 'Barasat Industrial Area', type: 'Light Manufacturing & Packaging', distance: '2 km' },
    { name: 'BNR Industrial Park – Noapara', type: 'Warehousing & Distribution', distance: '4 km' },
    { name: 'Barasat Bus Terminal Commercial Hub', type: 'Retail & Corporate Services', distance: 'Central' },
  ],
  kalyani: [
    { name: 'Kalyani Industrial Growth Centre', type: 'Pharma & Light Manufacturing', distance: 'Core Zone' },
    { name: 'HFC & GNFC Plant Zone', type: 'Fertilizers & Chemicals', distance: '2 km' },
    { name: 'Kalyani University & Institutional Belt', type: 'Educational & Research', distance: '3 km' },
    { name: 'Kalyani Expressway Logistics Link', type: 'Road Freight Corridor', distance: '1 km' },
  ],
  darjeeling: [
    { name: 'Darjeeling Tea Estate Processing Zone', type: 'Agri-Processing & Exports', distance: 'District Wide' },
    { name: 'Darjeeling Town Tourism Commercial Hub', type: 'Hospitality & Retail', distance: 'Core Zone' },
    { name: 'Sukhiapokhri & Kurseong Commercial Belt', type: 'Trade & Commerce', distance: '12–20 km' },
    { name: 'Darjeeling Himalayan Railway Corridor', type: 'Heritage & Logistics', distance: 'Town Zone' },
  ],
  jalpaiguri: [
    { name: 'Jalpaiguri Tea Industry Processing Hub', type: 'Agri-Processing', distance: 'District Wide' },
    { name: 'Jalpaiguri Industrial Area', type: 'MSME & Light Manufacturing', distance: '3 km' },
    { name: 'Maynaguri-Siliguri Freight Corridor', type: 'Logistics & Distribution', distance: '8 km' },
    { name: 'Jalpaiguri Commercial Center', type: 'Banking & Corporate Services', distance: 'Central' },
  ],
  malda: [
    { name: 'Malda Mango Belt Agri-Processing Zone', type: 'Agri-Processing & Cold Storage', distance: 'District Wide' },
    { name: 'English Bazar Commercial Hub', type: 'Retail & Banking', distance: 'Core Zone' },
    { name: 'Malda Industrial Area', type: 'Light Manufacturing', distance: '3 km' },
    { name: 'NH-12 Malda Freight Corridor', type: 'Logistics & Transport', distance: 'Transit Belt' },
  ],
  baharampur: [
    { name: 'Berhampore Industrial Area', type: 'Textile & Light Manufacturing', distance: '2 km' },
    { name: 'Murshidabad Silk Weaving Cluster', type: 'Handloom & Textile', distance: 'District Wide' },
    { name: 'Jiaganj-Azimganj Trade Hub', type: 'Textile & Trade', distance: '5 km' },
    { name: 'Berhampore Commercial Center', type: 'Banking & Commerce', distance: 'Central' },
  ],
  raiganj: [
    { name: 'North Dinajpur Industrial Area', type: 'Agri-Processing & Light Industry', distance: '3 km' },
    { name: 'Raiganj Commercial Hub', type: 'Trade & Banking', distance: 'Central' },
    { name: 'Dalkhola Trade Corridor', type: 'Inter-State Trade & Logistics', distance: '25 km' },
    { name: 'North Dinajpur Foodgrain Belt', type: 'Agriculture & Storage', distance: 'District Wide' },
  ],
  bankura: [
    { name: 'Bankura Industrial Area', type: 'MSME & Light Manufacturing', distance: '2 km' },
    { name: 'Bishnupur Handicraft & Tourism Belt', type: 'Heritage Tourism & Crafts', distance: '22 km' },
    { name: 'Bankura Mining & Minerals Belt', type: 'Mining & Materials', distance: 'District Wide' },
    { name: 'Bankura Commercial Center', type: 'Banking & Corporate', distance: 'Central' },
  ],
  puruliya: [
    { name: 'Purulia Mining & Minerals Zone', type: 'Mining & Minerals', distance: 'District Wide' },
    { name: 'Purulia Power Plant Logistics Zone', type: 'Power Generation Support', distance: '10 km' },
    { name: 'Purulia Industrial Area', type: 'MSME & Manufacturing', distance: '3 km' },
    { name: 'Purulia Commercial Hub', type: 'Retail & Banking', distance: 'Central' },
  ],
  'salt-lake': [
    { name: 'Salt Lake Sector V Software Technology Park', type: 'IT / ITES & Software', distance: 'Primary Hub' },
    { name: 'DLF IT Park Salt Lake', type: 'Corporate IT Towers', distance: 'Within Sector' },
    { name: 'Bengal Intelligent Park', type: 'Technology & Startups', distance: 'Sector I' },
    { name: 'Ecospace Business Park', type: 'MNC & Corporate Offices', distance: 'Action Area II' },
  ],
  'new-town': [
    { name: 'New Town Action Area I–III Business Zone', type: 'Corporate & Financial Hub', distance: 'Core Zone' },
    { name: 'Ecospace & Unitech Infospace Park', type: 'IT & BPO Hub', distance: '2 km' },
    { name: 'Newtown Kolkata Development Authority Zone', type: 'Smart City Infrastructure', distance: 'City Wide' },
    { name: 'Rajarhat New Town Tech Corridor', type: 'IT & Startups', distance: 'Action Area II' },
  ],
  dankuni: [
    { name: 'Dankuni Multi-Modal Freight Terminal', type: 'Rail-Road Freight Hub', distance: 'Core Zone' },
    { name: 'Dankuni Industrial Area', type: 'Manufacturing & Logistics', distance: '1 km' },
    { name: 'NH-19 Dankuni Logistics Corridor', type: 'National Highway Freight', distance: 'Transit Belt' },
    { name: 'Konnagar-Hindmotor Industrial Link', type: 'Industrial Corridor', distance: '3–6 km' },
  ],
  serampore: [
    { name: 'Serampore Textile Mills Heritage Belt', type: 'Textile & Manufacturing', distance: 'Core Zone' },
    { name: 'Serampore-Rishra Industrial Corridor', type: 'Engineering & Light Industry', distance: '2 km' },
    { name: 'Uttarpara-Konnagar Riverside Zone', type: 'Corporate & Light Industry', distance: '4 km' },
    { name: 'GT Road Serampore Commercial Hub', type: 'Retail & Banking', distance: 'Central' },
  ],
  uluberia: [
    { name: 'Uluberia Industrial Growth Centre', type: 'Heavy Industry & Food Processing', distance: 'Core Zone' },
    { name: 'Bagnan Rubber Industry Cluster', type: 'Rubber & Chemical Processing', distance: '8 km' },
    { name: 'Uluberia NH-16 Logistics Corridor', type: 'National Highway Freight', distance: 'Transit Belt' },
    { name: 'Shyampur-Uluberia Riverside Belt', type: 'Agri-Processing & Warehousing', distance: '5 km' },
  ],
  bisnupur: [
    { name: 'Bishnupur Terracotta Handicraft Cluster', type: 'Handcraft & Tourism', distance: 'City Wide' },
    { name: 'Bankura-Bishnupur Mining Belt', type: 'Mining & Mineral Resources', distance: '15 km' },
    { name: 'Bishnupur Heritage Tourism Zone', type: 'Tourism & Hospitality', distance: 'Core Zone' },
    { name: 'South Bengal NH-14 Trade Corridor', type: 'Trade & Logistics', distance: 'Transit Belt' },
  ],
  bishnupur: [
    { name: 'Bishnupur Terracotta Handicraft Cluster', type: 'Handcraft & Tourism', distance: 'City Wide' },
    { name: 'Bankura-Bishnupur Mining Belt', type: 'Mining & Mineral Resources', distance: '15 km' },
    { name: 'Bishnupur Heritage Tourism Zone', type: 'Tourism & Hospitality', distance: 'Core Zone' },
    { name: 'South Bengal NH-14 Trade Corridor', type: 'Trade & Logistics', distance: 'Transit Belt' },
  ],
  bolpur: [
    { name: 'Bolpur-Santiniketan University Town Zone', type: 'Educational & Cultural', distance: 'Core Zone' },
    { name: 'Birbhum Tourism Corridor', type: 'Heritage Tourism', distance: '3 km' },
    { name: 'Bolpur Industrial Area', type: 'Light Manufacturing', distance: '2 km' },
    { name: 'Birbhum Rampurhat Trade Corridor', type: 'Trade & Commerce', distance: '30 km' },
  ],
  rampurhat: [
    { name: 'Rampurhat Industrial Area', type: 'Light Manufacturing & Agri-Processing', distance: '2 km' },
    { name: 'Birbhum Power Transmission Corridor', type: 'Power Infrastructure', distance: 'District Wide' },
    { name: 'Rampurhat Commercial Hub', type: 'Trade & Banking', distance: 'Central' },
    { name: 'Suri-Rampurhat NH-60 Corridor', type: 'Road Freight & Logistics', distance: 'Transit Belt' },
  ],
  suri: [
    { name: 'Suri Birbhum Industrial Area', type: 'MSME & Light Manufacturing', distance: '2 km' },
    { name: 'Birbhum Coal Belt Zone', type: 'Mining & Energy Resources', distance: 'District Wide' },
    { name: 'Suri Commercial Center', type: 'Retail & Banking', distance: 'Central' },
    { name: 'Dubrajpur Road Ceramics Cluster', type: 'Ceramics & Minerals', distance: '20 km' },
  ],
  jhargram: [
    { name: 'Jhargram Industrial Growth Centre', type: 'Manufacturing & Agri-Processing', distance: '3 km' },
    { name: 'Jhargram Forest-Based Industries Zone', type: 'Wood Processing & Agro', distance: 'District Wide' },
    { name: 'Jhargram Tourism & Eco Belt', type: 'Ecotourism & Hospitality', distance: 'Core Zone' },
    { name: 'Jhargram-Kharagpur NH-49 Corridor', type: 'Logistics & Freight', distance: 'Transit Belt' },
  ],
  alipurduar: [
    { name: 'Alipurduar Tea & Forest Industry Hub', type: 'Agri-Processing & Tea', distance: 'District Wide' },
    { name: 'Alipurduar North Bengal Trade Hub', type: 'Cross-Border Trade', distance: 'Core Zone' },
    { name: 'Hasimara Bhutan Trade Corridor', type: 'International Trade & Logistics', distance: '18 km' },
    { name: 'Cooch Behar-Alipurduar NH-31C Corridor', type: 'Road Freight', distance: 'Transit Belt' },
  ],
  'cooch-behar': [
    { name: 'Cooch Behar Industrial Area', type: 'Agri-Processing & MSME', distance: '2 km' },
    { name: 'Cooch Behar-Dhubri Trade Corridor', type: 'Cross-Border Trade', distance: '12 km' },
    { name: 'Cooch Behar Historical Commercial Hub', type: 'Retail & Banking', distance: 'Central' },
    { name: 'North Bengal Agri-Processing Zone', type: 'Food Processing & Cold Chain', distance: 'District Wide' },
  ],
  balurghat: [
    { name: 'Balurghat Industrial Area', type: 'Agri-Processing & Light Industry', distance: '2 km' },
    { name: 'Dakshin Dinajpur Foodgrain Hub', type: 'Foodgrain & Storage', distance: 'District Wide' },
    { name: 'Balurghat-Hili Border Trade Zone', type: 'India-Bangladesh Trade', distance: '30 km' },
    { name: 'Balurghat Commercial Center', type: 'Retail & Commerce', distance: 'Central' },
  ],
  barrackpur: [
    { name: 'Barrackpur Cantonment Defence Zone', type: 'Defence & Administrative', distance: 'Within Sector' },
    { name: 'BT Road Industrial Corridor', type: 'Industrial Corridor', distance: '1–3 km' },
    { name: 'Titagarh Wagons Manufacturing Plant', type: 'Heavy Engineering & Rail', distance: '3 km' },
    { name: 'Kalyani Expressway Logistics Zone', type: 'Logistics & Distribution', distance: '4 km' },
  ],
  raniganj: [
    { name: 'Raniganj Coalfield Mining Zone', type: 'Coal Mining & Energy', distance: 'City Wide' },
    { name: 'Raniganj-Durgapur Industrial Corridor', type: 'Heavy Industry & Steel', distance: '8 km' },
    { name: 'BCCL & ECL Mining Operations', type: 'Coal India Subsidiary Ops', distance: 'District Wide' },
    { name: 'Raniganj Commercial Hub', type: 'Trade & Commerce', distance: 'Central' },
  ],
  kulti: [
    { name: 'Kulti IISCO Foundry Zone', type: 'Steel Foundry & Heavy Engineering', distance: 'Core Zone' },
    { name: 'Barakar River Industrial Belt', type: 'Manufacturing & Processing', distance: '2 km' },
    { name: 'Kulti-Asansol Industrial Link', type: 'Heavy Industry Corridor', distance: '5 km' },
    { name: 'Kulti Commercial Hub', type: 'Trade & Commerce', distance: 'Central' },
  ],
  burnpur: [
    { name: 'Burnpur IISCO Steel Plant', type: 'Integrated Steel Plant', distance: 'Core Zone' },
    { name: 'Burnpur-Asansol Steel Corridor', type: 'Steel & Heavy Engineering', distance: '3 km' },
    { name: 'Burnpur Township Industrial Support Zone', type: 'Engineering Services', distance: 'City Wide' },
    { name: 'Durgapur Expressway Freight Corridor', type: 'Logistics & Transport', distance: 'Transit Belt' },
  ],
  durgachak: [
    { name: 'Durgachak Port & Chemical Zone', type: 'Port & Chemical Industry', distance: 'Core Zone' },
    { name: 'Haldia-Durgachak Petrochemical Belt', type: 'Petrochemicals & Refinery', distance: '5 km' },
    { name: 'WBIIDC Durgachak Industrial Area', type: 'MSME & Manufacturing', distance: '2 km' },
    { name: 'Durgachak Logistics Hub', type: 'Port Logistics & Freight', distance: 'Core Zone' },
  ],
  sutahata: [
    { name: 'Sutahata Chemical Processing Zone', type: 'Chemical & Pharma', distance: 'Core Zone' },
    { name: 'Haldia-Sutahata Industrial Link', type: 'Industrial Corridor', distance: '10 km' },
    { name: 'Purba Medinipur Agri-Processing Hub', type: 'Agri-Processing', distance: 'District Wide' },
    { name: 'Sutahata NH-41 Logistics Corridor', type: 'Road Freight', distance: 'Transit Belt' },
  ],
  barrackpore: [

    { name: "Barrackpore Cantonment & Defence Base", type: "Defence & Administrative", distance: "Within Sector" },
    { name: "BT Road Industrial & Warehousing Corridor", type: "Industrial Corridor", distance: "1–3 km" },
    { name: "Titagarh & Khardaha Industrial Belt", type: "Heavy Engineering & Manufacturing", distance: "3–5 km" },
    { name: "Shyamnagar & Naihati Manufacturing Link", type: "Textile & Manufacturing", distance: "6–8 km" },
    { name: "Kalyani Expressway Logistics Link", type: "Logistics & Distribution", distance: "4–6 km" },
  ],
  kolkata: [
    { name: "Salt Lake Sector V Tech Park", type: "IT / ITES Commercial Hub", distance: "Primary Core" },
    { name: "New Town Rajarhat Business Zone", type: "Corporate & Financial Hub", distance: "Within City" },
    { name: "Taratala & Hyde Road Industrial Area", type: "Manufacturing & Logistics", distance: "South Core" },
    { name: "Kasba Industrial Estate", type: "Commercial & Light Industrial", distance: "East Core" },
    { name: "Dankuni Multi-Modal Freight Terminal", type: "Logistics & Inland Container Hub", distance: "12 km" },
  ],
  howrah: [
    { name: "Baltikuri & Dasnagar Engineering Hub", type: "Engineering & Foundry", distance: "Core Zone" },
    { name: "Dhulagarh Industrial & Freight Park", type: "Logistics & Warehousing", distance: "8 km" },
    { name: "Uluberia Industrial Growth Centre", type: "Heavy Industry & Food Processing", distance: "15 km" },
    { name: "Kona Expressway Commercial Corridor", type: "Commercial Transport", distance: "4 km" },
  ],
  mumbai: [
    { name: "Bandra Kurla Complex (BKC)", type: "Financial & Corporate HQ", distance: "Primary Hub" },
    { name: "Andheri East MIDC & SEEPZ", type: "IT / Electronics SEZ", distance: "Western Hub" },
    { name: "Lower Parel Commercial Mills District", type: "Corporate Offices & Banking", distance: "Central Hub" },
    { name: "Taloja & Navi Mumbai Industrial Corridor", type: "Chemical & Manufacturing", distance: "Extended Zone" },
  ],
  pune: [
    { name: "Hinjawadi Rajiv Gandhi Infotech Park", type: "IT / ITES Park", distance: "Phase 1–3" },
    { name: "Chakan Industrial Area", type: "Automotive & Heavy Engineering", distance: "Auto Cluster" },
    { name: "Bhosari & Pimpri MIDC", type: "Industrial & Manufacturing", distance: "Pimpri-Chinchwad" },
    { name: "Magarpatta Cybercity & Kharadi", type: "IT Special Economic Zone", distance: "East Hub" },
  ],
  bengaluru: [
    { name: "Electronic City Phase 1 & 2", type: "IT & Electronics Cluster", distance: "South Hub" },
    { name: "Whitefield EPIP & ITPL Zone", type: "Tech Park & R&D Center", distance: "East Hub" },
    { name: "Peenya Industrial Area", type: "Manufacturing & Small Scale Hub", distance: "North-West Hub" },
    { name: "Outer Ring Road (ORR) Tech Corridor", type: "Enterprise Corporate Hub", distance: "Central Belt" },
  ],
  delhi: [
    { name: "Okhla Industrial Area Phases I-III", type: "Manufacturing & Export Hub", distance: "South Delhi" },
    { name: "Connaught Place Financial District", type: "Corporate & Banking HQ", distance: "Central Delhi" },
    { name: "Naraina & Mayapuri Industrial Area", type: "Light Industrial & Metal Works", distance: "West Delhi" },
    { name: "Patparganj Industrial Estate", type: "Commercial & Packaging", distance: "East Delhi" },
  ],
  gurugram: [
    { name: "DLF Cyber City & Cyber Hub", type: "MNC Corporate Towers", distance: "Phase 2 & 3" },
    { name: "Udyog Vihar Phases I-V", type: "Commercial & IT Corridor", distance: "Adjacent NH-48" },
    { name: "IMT Manesar Industrial Township", type: "Automotive & Manufacturing SEZ", distance: "Manesar Belt" },
    { name: "Golf Course Road Corporate Belt", type: "Executive Business Centers", distance: "South Gurugram" },
  ],
  gurgaon: [
    { name: "DLF Cyber City & Cyber Hub", type: "MNC Corporate Towers", distance: "Phase 2 & 3" },
    { name: "Udyog Vihar Phases I-V", type: "Commercial & IT Corridor", distance: "Adjacent NH-48" },
    { name: "IMT Manesar Industrial Township", type: "Automotive & Manufacturing SEZ", distance: "Manesar Belt" },
    { name: "Golf Course Road Corporate Belt", type: "Executive Business Centers", distance: "South Gurugram" },
  ],
  faridabad: [
    { name: "Sector 24 & 25 Industrial Area", type: "Heavy Engineering & Manufacturing", distance: "Core Sector" },
    { name: "Mathura Road NH-19 Industrial Belt", type: "Commercial & Logistics Corridor", distance: "Transit Belt" },
    { name: "Ballabhgarh Industrial Hub", type: "Automotive Ancillary & Forging", distance: "South Faridabad" },
    { name: "NIT Faridabad Commercial Hub", type: "Banking & Corporate Offices", distance: "Central Zone" },
  ],
  noida: [
    { name: "Noida Sector 62 & 63 IT Cluster", type: "Technology & Software Parks", distance: "Core Zone" },
    { name: "Noida-Greater Noida Expressway Zone", type: "Corporate Institutional Belt", distance: "Expressway" },
    { name: "Greater Noida Ecotech Industrial Hub", type: "Electronics & Heavy Manufacturing", distance: "Greater Noida" },
    { name: "Hosiery Complex Phase-II", type: "Textile & Garment SEZ", distance: "Phase 2" },
  ],
  ghaziabad: [
    { name: "Sahibabad Industrial Area Site 4", type: "Manufacturing & Heavy Engineering", distance: "Sahibabad Core" },
    { name: "Kavi Nagar & Loni Industrial Belt", type: "Light Manufacturing & Warehousing", distance: "North Zone" },
    { name: "Bulandshahr Road Industrial Area", type: "Foundry & Auto Ancillary", distance: "East Corridor" },
    { name: "Mohan Nagar Commercial Hub", type: "Corporate & Logistics Center", distance: "Central Ghaziabad" },
  ],
  hyderabad: [
    { name: "HITEC City & Madhapur", type: "IT / ITES Software Hub", distance: "Cyberabad" },
    { name: "Gachibowli Financial District", type: "Banking & Global Financial Centers", distance: "West Zone" },
    { name: "Patancheru Industrial Area", type: "Pharma & Chemical Corridor", distance: "NH-65 Belt" },
    { name: "Jeedimetla Industrial Development Area", type: "Engineering & Heavy Industry", distance: "North Zone" },
  ],
  chennai: [
    { name: "OMR (Old Mahabalipuram Road) IT Expressway", type: "IT / ITES Corridor", distance: "South Chennai" },
    { name: "Sriperumbudur Industrial Hub", type: "Electronics & Automotive SEZ", distance: "West Corridor" },
    { name: "Ambattur Industrial Estate", type: "Manufacturing & Engineering", distance: "North-West" },
    { name: "Guindy Industrial Estate", type: "Commercial & Light Manufacturing", distance: "Central Zone" },
  ],
  ahmedabad: [
    { name: "Sanand GIDC Automotive Corridor", type: "Automotive & Engineering", distance: "West Belt" },
    { name: "Changodar Industrial Area", type: "Pharma & Heavy Engineering", distance: "NH-8A" },
    { name: "SG Highway Corporate Corridor", type: "Financial & Corporate Offices", distance: "City Core" },
    { name: "Vatva & Naroda GIDC", type: "Chemical & Industrial Estate", distance: "East Ahmedabad" },
  ],
};

export function getLocalDeploymentZones(cityName: string, stateName: string): LocalZone[] {
  const slug = cityName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
  if (KNOWN_CITY_ZONES[slug]) {
    return KNOWN_CITY_ZONES[slug];
  }

  return [
    { name: `${cityName} Commercial & Administrative Center`, type: "Corporate & Banking", distance: "Core Sector" },
    { name: `${cityName} Industrial Area & Growth Center`, type: "Manufacturing & Warehousing", distance: "2–5 km" },
    { name: `${stateName} State Highway Logistics Corridor`, type: "Freight & Distribution", distance: "Transit Belt" },
    { name: `${cityName} Healthcare & Institutional Complex`, type: "Hospitals & Education", distance: "City Limits" },
  ];
}

