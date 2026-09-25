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
      answer: `Yes. All ACS security personnel deployed in ${cityName}, ${stateName} strictly adhere to PSARA (Private Security Agencies Regulation Act) guidelines. Every guard is licensed, background-verified, medically fit, and trained per Ministry of Home Affairs standards. ACS holds a valid PSARA license for all security deployments across India.`
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
      question: `Is ACS the best security and facility management company in ${cityName}?`,
      answer: `ACS is one of ${stateName}'s most experienced B2B services companies, with 25+ years of operational history since 2000. In ${cityName}, we serve government establishments, defense organizations, hospitals, IT parks, and industrial plants. Our PSARA license, ISO 9001:2015 certification, and track record with clients like Indian Air Force, BSF, HAL, and Indian Oil reflect our credibility.`
    },
    {
      question: `Does ACS handle government and PSU contracts in ${cityName}?`,
      answer: `Yes. ACS is government-empanelled and has an extensive track record serving Central & State Government bodies, Defence establishments (IAF, BSF, HAL), PSUs (Indian Oil, CPCB), and municipal bodies across India. We are equipped to handle GFR/GeM procurement and government tender processes for clients in ${cityName}, ${stateName}.`
    },
    {
      question: `How do I get a quotation for services in ${cityName}?`,
      answer: `You can request a free quotation for any ACS service in ${cityName} by calling +91 93399 88999 / +91 79801 47044 / +91 94770 06681 or emailing advancedsecurityj@gmail.com. Our team will conduct a free on-site assessment in ${cityName} and provide a detailed, all-inclusive service proposal within 24–48 hours.`
    },
    {
      question: `What government compliance certifications does ACS hold for services in ${stateName}?`,
      answer: `ACS holds PSARA (Private Security Agencies Regulation Act) License for all security deployments in ${stateName}, ISO 9001:2015 certification for quality management, and is registered with relevant statutory bodies including PF, ESIC, and Labour Department. We are fully compliant with the Contract Labour (Regulation & Abolition) Act, 1970 for all outsourced manpower in ${cityName}.`
    },
  ];
}

export interface LocalZone {
  name: string;
  type: string;
  distance: string;
}

const KNOWN_CITY_ZONES: Record<string, LocalZone[]> = {
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
  noida: [
    { name: "Noida Sector 62 & 63 IT Cluster", type: "Technology & Software Parks", distance: "Core Zone" },
    { name: "Noida-Greater Noida Expressway Zone", type: "Corporate Institutional Belt", distance: "Expressway" },
    { name: "Greater Noida Ecotech Industrial Hub", type: "Electronics & Heavy Manufacturing", distance: "Greater Noida" },
    { name: "Hosiery Complex Phase-II", type: "Textile & Garment SEZ", distance: "Phase 2" },
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

