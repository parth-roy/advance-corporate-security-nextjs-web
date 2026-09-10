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
      question: `Are Advance Corporate Services' security guards in ${cityName} PSARA licensed?`,
      answer: `Yes. All ACS security personnel deployed in ${cityName}, ${stateName} strictly adhere to PSARA (Private Security Agencies Regulation Act) guidelines. Every guard is licensed, background-verified, medically fit, and trained per Ministry of Home Affairs standards. ACS holds a valid PSARA license for all security deployments across India.`
    } : {
      question: `Is Advance Corporate Services ISO 9001:2015 certified for ${serviceName} in ${cityName}?`,
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
      question: `What services does Advance Corporate Services provide in ${cityName}?`,
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
      answer: `You can request a free quotation for any ACS service in ${cityName} by calling +91 98312 50270 or emailing advancedcorporatesecurityj@gmail.com. Our team will conduct a free on-site assessment in ${cityName} and provide a detailed, all-inclusive service proposal within 24–48 hours.`
    },
    {
      question: `What government compliance certifications does ACS hold for services in ${stateName}?`,
      answer: `ACS holds PSARA (Private Security Agencies Regulation Act) License for all security deployments in ${stateName}, ISO 9001:2015 certification for quality management, and is registered with relevant statutory bodies including PF, ESIC, and Labour Department. We are fully compliant with the Contract Labour (Regulation & Abolition) Act, 1970 for all outsourced manpower in ${cityName}.`
    },
  ];
}
