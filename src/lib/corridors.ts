// ============================================================
// ACS — Eastern Industrial Corridors Data Layer
// Regional economic zones, state compliance frameworks,
// industrial estates, and rapid 24-48 hr deployment networks.
// ============================================================

export interface IndustrialZone {
  name: string;
  focus: string;
  location: string;
}

export interface CorridorData {
  slug: string;
  name: string;
  tagline: string;
  state: string;
  region: string;
  heroHeadline: string;
  description: string;
  strategicImportance: string;
  keyIndustrialZones: IndustrialZone[];
  targetSectors: string[];
  stateComplianceFramework: {
    psaraRule: string;
    minimumWageAuthority: string;
    clraRequirements: string;
    keyRegulations: string[];
    statutoryAssurance: string;
  };
  operationalCapabilities: {
    title: string;
    description: string;
  }[];
  deploymentMetrics: {
    turnaroundHours: string;
    benchStrength: string;
    supervisoryRatio: string;
    patrolTechnology: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const EASTERN_CORRIDORS: CorridorData[] = [
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar – Kalinga Nagar Industrial & IT Corridor",
    tagline: "Odisha Industrial, Steel & IT Super-Corridor Security Network",
    state: "Odisha",
    region: "Coastal & Central Odisha",
    heroHeadline: "Enterprise Security & Manpower Outsourcing for Odisha's Premier Industrial & Technology Belt",
    description:
      "Advance Corporate Security delivers PSARA-compliant enterprise guarding, automated gate logistics, and integrated facility management across Bhubaneswar's Infocity tech cluster, Chandaka, Khordha Industrial Park, and the heavy metallurgy corridor connecting to Kalinga Nagar and Paradip Port.",
    strategicImportance:
      "Odisha is India's mineral and metallurgy epicenter, complemented by Bhubaneswar's emergence as the primary IT and electronics capital of Eastern India. Managing security across this diverse terrain requires dual expertise: elite executive front-desk protocol for Tier-1 technology campuses in Infocity, alongside rugged perimeter protection, weighbridge governance, and union coordination for heavy manufacturing and export cargo routes.",
    keyIndustrialZones: [
      {
        name: "Infocity & Chandaka IT Park",
        focus: "IT/ITES, Software R&D, Fintech and Global Capability Centers",
        location: "Bhubaneswar Urban Sector",
      },
      {
        name: "Mancheswar & Rasulgarh Industrial Estates",
        focus: "Light Engineering, FMCG Distribution, Printing & Plastic Processing",
        location: "Bhubaneswar Outer Belt",
      },
      {
        name: "Khordha Industrial Estate & Food Park",
        focus: "Food Processing, Beverage Bottling, Chemical & Automobile Ancillaries",
        location: "NH-16 Corridor",
      },
      {
        name: "Kalinga Nagar Heavy Industrial Complex",
        focus: "Integrated Steel Plants, Stainless Steel Manufacturing, Ferroalloys",
        location: "Jajpur District Highway Axis",
      },
      {
        name: "Paradip Port Logistics & Petrochemicals Link",
        focus: "Dry Bulk Terminals, Fertilizer Plants, Heavy Freight Staging",
        location: "Jagatsinghpur Coastal Corridor",
      },
    ],
    targetSectors: [
      "Information Technology & Tech Parks",
      "Steel, Sponge Iron & Metallurgy",
      "Food Processing & Cold Chain Warehousing",
      "Heavy Freight & Port Supply Chain Logistics",
      "Higher Educational Universities & Medical Colleges",
    ],
    stateComplianceFramework: {
      psaraRule: "Odisha Private Security Agencies (Regulation) Rules, 2009",
      minimumWageAuthority: "Labour & ESI Department, Government of Odisha (Notification Categories: Unskilled, Semi-skilled, Skilled, Highly Skilled)",
      clraRequirements: "Registration under Contract Labour (Regulation & Abolition) Odisha Rules with Form V principal employer verification.",
      keyRegulations: [
        "Odisha Shops and Commercial Establishments Act, 1956",
        "The Factories Act, 1948 (Odisha State Rules)",
        "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
        "Employees' State Insurance (ESIC) Odisha Region",
        "The Odisha Industrial Disputes Rules",
      ],
      statutoryAssurance:
        "Every month, ACS provides client procurement teams with Odisha bank salary disbursement sheets, verifiable EPFO ECR challans, and ESIC contribution schedules, completely shielding principal employers from joint liability.",
    },
    operationalCapabilities: [
      {
        title: "24-48 Hour Supervisory Mobilization Guarantee",
        description:
          "With an active deployment bench in Bhubaneswar and Cuttack, ACS can mobilize 10 to 60 trained security guards, equipped and badged, within 24 to 48 hours of contract execution.",
      },
      {
        title: "Infocity Grade-A Executive Front Desk & Concierge Guarding",
        description:
          "English-speaking, corporate-uniformed officers trained in biometric turnstile access control, computerized visitor badges, and multi-tenant IT park protocols.",
      },
      {
        title: "Weighbridge Anti-Shrinkage & Gross-Tare Reconciliation",
        description:
          "Trained weighbridge in-charges who physically inspect container seals, run under-chassis mirrors, and prevent raw material diversion across metallurgy logistics gates.",
      },
      {
        title: "Mobile Quick Reaction Team (QRT) for Industrial Strikes",
        description:
          "24/7 motorized patrol units with ex-servicemen field officers capable of de-escalating spontaneous local worker disputes and protecting plant gates during unrest.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "150+ Verified Personnel",
      supervisoryRatio: "1 Field Supervisor per 15 Guards",
      patrolTechnology: "Synchronized RFID Patrol Wand & Cloud Portal",
    },
    faqs: [
      {
        question: "Does ACS possess a valid PSARA license for operating in Odisha?",
        answer:
          "Yes. Advance Corporate Security is fully PSARA-compliant to deploy security personnel throughout the state of Odisha, including Bhubaneswar, Cuttack, Kalinga Nagar, and Paradip.",
      },
      {
        question: "How fast can you mobilize security guards for an industrial unit in Khordha or Chandaka?",
        answer:
          "Thanks to our regional staging bench in Bhubaneswar, we can mobilize a complete guarding detachment (including supervisors and uniforms) within 24 to 48 hours following site survey sign-off.",
      },
      {
        question: "How do you handle Odisha statutory labor wage revisions?",
        answer:
          "Odisha updates minimum wages semi-annually with Variable Dearness Allowance (VDA). ACS automatically recalculates wage sheets, presents transparent cost break-ups to clients, and ensures 100% deposit on EPFO and ESIC portals.",
      },
    ],
  },
  {
    slug: "jamshedpur",
    name: "Jamshedpur – Adityapur Heavy Engineering & Auto Ancillary Corridor",
    tagline: "Tata Industrial Belt & Heavy Engineering Security Command",
    state: "Jharkhand",
    region: "Kolhan Division",
    heroHeadline: "Rugged Industrial Plant Security & Scrap Yard Loss Prevention for the Jamshedpur-Adityapur Corridor",
    description:
      "Specialized heavy engineering security, scrap theft deterrence, and statutory manpower solutions for the Adityapur Industrial Area (AIADA), Gamharia auto cluster, and the greater Jamshedpur industrial ecosystem.",
    strategicImportance:
      "The Adityapur Industrial Area houses over 1,200 micro, small, and medium manufacturing units alongside tier-one automotive ancillaries supplying Tata Motors and Tata Steel. This high-density manufacturing zone faces intense risks of ferrous raw material theft, scrap yard pilferage, organized truck driver diversion, and aggressive local contract labor dynamics. Security here cannot be passive—it requires assertive, highly disciplined supervision.",
    keyIndustrialZones: [
      {
        name: "Adityapur Industrial Area (AIADA) Phases I to VII",
        focus: "Heavy Auto Ancillaries, Precision Machining, Tool Rooms, Foundries",
        location: "Seraikela Kharsawan / Jamshedpur Border",
      },
      {
        name: "Gamharia Heavy Engineering & Forging Belt",
        focus: "Forging Units, Induction Furnaces, Cold Rolling Mills, Auto Chassis",
        location: "Gamharia Industrial Sector",
      },
      {
        name: "Telco & Burma Mines Industrial Zone",
        focus: "Heavy Commercial Vehicles, Tube Mills, Wire Manufacturing",
        location: "Jamshedpur Core Industrial Ring",
      },
      {
        name: "Kandra & Chowka Logistics Corridor",
        focus: "Heavy Vehicle Freight Staging, Steel Raw Material Yards, Warehousing",
        location: "Tata-Ranchi National Highway 43",
      },
      {
        name: "Ghatsila Copper & Mineral Corridor",
        focus: "Non-Ferrous Smelting, Concentrates, Mining Logistics",
        location: "East Singhbhum Belt",
      },
    ],
    targetSectors: [
      "Automotive Ancillaries & Component Manufacturers",
      "Steel Rolling Mills, Foundries & Heavy Forging",
      "Scrap Yards & High-Value Ingot Depots",
      "Industrial Gas & Chemical Plants",
      "Engineering Toolrooms & Fabrication Facilities",
    ],
    stateComplianceFramework: {
      psaraRule: "Jharkhand Private Security Agencies (Regulation) Rules",
      minimumWageAuthority: "Department of Labour, Employment, Training & Skill Development, Government of Jharkhand (Engineering Industry Schedule)",
      clraRequirements: "Form V compliance under Jharkhand Contract Labour Rules, mandatory labour license issuance for deployment above statutory thresholds.",
      keyRegulations: [
        "The Factories Act, 1948 (Jharkhand Factories Rules)",
        "The Industrial Employment (Standing Orders) Act",
        "Payment of Gratuity Act, 1972 & Bonus Act, 1965",
        "Jharkhand State Minimum Wages Notification for Scheduled Employments",
        "EPFO & ESIC Jharkhand Division",
      ],
      statutoryAssurance:
        "ACS maintains zero tolerance for informal labor practices. All personnel receive verified wage payouts strictly through direct electronic bank transfers with downloadable salary slips displaying UAN and ESIC numbers.",
    },
    operationalCapabilities: [
      {
        title: "Rigorous Scrap & Raw Material Loss Prevention",
        description:
          "Specialized gate checking protocols with magnetic ferrous sweepers, under-vehicle mirrors, and mandatory cross-checks of scrap load weight against engineering billet yields.",
      },
      {
        title: "24-48 Hour Adityapur Rapid Mobilization",
        description:
          "Dedicated field supervisors based in Adityapur and Bistupur ensure security detachments can be mobilized or scaled up on short notice for plant expansion or urgent replacements.",
      },
      {
        title: "Foundry & Furnace Hot-Area Safety Watch",
        description:
          "Guards trained in industrial fire safety, PPE enforcement (hard hats, safety goggles, thermal boots), and immediate shutdown protocols in casting and forging zones.",
      },
      {
        title: "Perimeter Drone & Night Patrol Tagging",
        description:
          "RFID checkpost scanning along remote plant boundaries adjoining rail tracks and forested sections to eliminate midnight fuel siphoning and fence-cutting.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "120+ Industrial-Trained Personnel",
      supervisoryRatio: "1 Field Officer per 12 Industrial Guards",
      patrolTechnology: "Tamper-Evident RFID Wand Guard Tour System",
    },
    faqs: [
      {
        question: "How does ACS combat scrap pilferage in Adityapur manufacturing plants?",
        answer:
          "We implement dual-custody weighbridge recording, random physical load checks, magnetic sweeps of outbound scrap trucks, and independent supervisory sign-offs before any dispatch vehicle leaves the perimeter.",
      },
      {
        question: "Are your security guards covered under Jharkhand Minimum Wages?",
        answer:
          "Yes. ACS strictly adheres to the engineering industry minimum wage schedule issued by the Jharkhand Labour Department, with full EPFO, ESIC, and statutory benefits documented every month.",
      },
      {
        question: "Can ACS supply armed guards for high-value metal or bullion transport in Jamshedpur?",
        answer:
          "Yes, we provide licensed armed security guards (retainer gunners) vetted by local law enforcement for cash transit, precious metals, and high-value cargo escorts.",
      },
    ],
  },
  {
    slug: "ranchi",
    name: "Ranchi – Ramgarh Mining, Heavy Engineering & Institutional Hub",
    tagline: "Jharkhand State Capital & Mining Heavy Machinery Security Corridor",
    state: "Jharkhand",
    region: "Chota Nagpur Plateau",
    heroHeadline: "Institutional Security & Mining Asset Protection for the Greater Ranchi Industrial Belt",
    description:
      "Advance Corporate Security provides comprehensive physical guarding, access control, and facility soft services across Ranchi's institutional zones, Tupudana, Namkum, Tatisilwai electrical manufacturing cluster, and the Ramgarh-Patratu coal-mining corridor.",
    strategicImportance:
      "As the administrative capital and home to major PSUs, research universities, and heavy machinery giants (like HEC), Ranchi requires security operations capable of managing institutional dignity alongside rough-terrain asset security in the surrounding mining and manufacturing belts of Ramgarh and Patratu.",
    keyIndustrialZones: [
      {
        name: "Tupudana Industrial Area",
        focus: "General Engineering, Chemical Formulations, Refractory Works",
        location: "Ranchi South Ring Road",
      },
      {
        name: "Tatisilwai & Namkum Industrial Cluster",
        focus: "Heavy Electrical Equipment, Cables, Railway Engineering",
        location: "Purulia Road Industrial Belt",
      },
      {
        name: "Ramgarh – Patratu Coal & Steel Corridor",
        focus: "Sponge Iron, Steel Rerolling, Coal Washing, Thermal Power Ancillaries",
        location: "Ramgarh District Border",
      },
      {
        name: "Kanke & Morabadi Institutional Corridor",
        focus: "Universities, Government Secretariats, Central Research Laboratories",
        location: "Ranchi Northern Sector",
      },
      {
        name: "Dhurwa HEC Industrial Complex",
        focus: "Heavy Machine Building, Defense Fabrication, Mining Equipment",
        location: "Ranchi Core Industrial Zone",
      },
    ],
    targetSectors: [
      "PSU Establishments & Federal Research Institutes",
      "Mining Machinery & Heavy Electrical Manufacturing",
      "Sponge Iron Plants & Captive Power Stations",
      "Higher Education Campuses & Healthcare Networks",
      "Commercial Offices & Banking Cash Management",
    ],
    stateComplianceFramework: {
      psaraRule: "Jharkhand Private Security Agencies (Regulation) Rules",
      minimumWageAuthority: "Office of the Labour Commissioner, Ranchi, Government of Jharkhand",
      clraRequirements: "Strict compliance with Jharkhand Contract Labour (R&A) Rules; Form V issuance and quarterly statutory returns.",
      keyRegulations: [
        "Payment of Wages (Jharkhand Amendment) Act",
        "Jharkhand Industrial Establishments (National and Festival Holidays) Act",
        "Mines Act guidelines for surface perimeter installations",
        "EPFO & ESIC Regional Office, Ranchi",
        "Directorate of Factories, Jharkhand",
      ],
      statutoryAssurance:
        "Every client invoice is backed by an audited compliance package: computerized wage registers, bank transaction confirmation, and individual employee PF passbook credit receipts.",
    },
    operationalCapabilities: [
      {
        title: "24-48 Hour Regional Mobilization Guarantee",
        description:
          "Our permanent Ranchi operations branch maintains an active pool of trained guards, gunners, and facility personnel ready for swift 24-48 hr deployment.",
      },
      {
        title: "Institutional Dignity & VIP Protocol Security",
        description:
          "Elite, polished security personnel trained in courteous visitor screening, protocol etiquette, and multi-gate institutional crowd management for universities and PSUs.",
      },
      {
        title: "Remote Mining Yard & Heavy Machinery Security",
        description:
          "Trained rugged security guards and armed guards equipped with high-intensity floodlighting and VHF radios for isolated coal yards, sub-stations, and heavy equipment depots.",
      },
      {
        title: "Mechanized Housekeeping & Deep Sanitation",
        description:
          "Commercial floor maintenance, ride-on scrubbing, and bio-waste management for large corporate headquarters and healthcare facilities across Ranchi.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "100+ Ready Guards",
      supervisoryRatio: "1 Field Supervisor per 15 Guards",
      patrolTechnology: "Cloud-Connected RFID Patrol Guard Tour System",
    },
    faqs: [
      {
        question: "Can ACS support remote operations outside Ranchi city, such as in Ramgarh or Patratu?",
        answer:
          "Yes. Our mobile supervisory network covers the entire Ranchi-Ramgarh-Patratu industrial triangle with dedicated patrol vehicles and 24/7 on-call field officers.",
      },
      {
        question: "Do you supply security for government institutions and PSUs?",
        answer:
          "Yes. Advance Corporate Security has extensive experience serving over 50+ government and PSU clients across Eastern India with 100% statutory clearance on GeM and public tenders.",
      },
      {
        question: "What is your supervisory frequency in the Ranchi cluster?",
        answer:
          "Our field supervisors conduct minimum two unannounced inspections every 24 hours (one during daytime shift change, and one night inspection between 01:00 AM and 04:30 AM).",
      },
    ],
  },
  {
    slug: "guwahati",
    name: "Guwahati – Amingaon Northeast Logistics & FMCG Gateway",
    tagline: "Northeast India's Strategic Freight & Industrial Security Gateway",
    state: "Assam",
    region: "Kamrup Metropolitan & Rural",
    heroHeadline: "Grade-A Logistics Park Security & Multimodal Cargo Protection for the Northeast Industrial Gateway",
    description:
      "Enterprise security guarding, inland container depot (ICD) access control, and supply chain loss prevention across Guwahati's Amingaon logistics corridor, Palashbari, and Chaygaon FMCG manufacturing hubs.",
    strategicImportance:
      "Guwahati is the undisputed commercial and logistics gateway to all seven northeastern states. The Amingaon Inland Container Depot (ICD) and the national highway logistics corridor handle thousands of heavy trucks and intermodal freight containers weekly. Managing cargo shrinkage, verifying container tamper seals, and ensuring disciplined labor shift management are mission-critical for multinational FMCG, pharma, and e-commerce companies operating in this gateway.",
    keyIndustrialZones: [
      {
        name: "Amingaon Inland Container Depot (ICD) & Rail Hub",
        focus: "Dry Port Logistics, Custom Clearance Yards, Multi-Modal Freight",
        location: "North Guwahati / Brahmaputra North Bank",
      },
      {
        name: "Palashbari – Mirza Industrial Belt",
        focus: "Pharmaceuticals, Cosmetics Manufacturing, Cold Storage Warehouses",
        location: "Kamrup Rural / Airport Axis",
      },
      {
        name: "Chaygaon Mega Industrial & Food Park",
        focus: "Food Processing, Beverage Bottling, Large Scale Warehouses",
        location: "NH-17 Guwahati Outer Belt",
      },
      {
        name: "Changsari Logistics & FMCG Staging Hub",
        focus: "E-Commerce Fulfilment Centers, 3PL Distribution Facilities",
        location: "North Guwahati Bypass",
      },
      {
        name: "Bamunimaidam Industrial Estate",
        focus: "Light Engineering, Printing, Commercial Warehousing",
        location: "Guwahati City Industrial Core",
      },
    ],
    targetSectors: [
      "Inland Container Depots (ICD) & 3PL Logistics Parks",
      "FMCG, Food Processing & Beverage Bottling Plants",
      "Pharmaceutical Manufacturing & Cold Chain Logistics",
      "Tea Warehousing, Blending & Export Hubs",
      "Corporate Regional Headquarters & Automotive Dealerships",
    ],
    stateComplianceFramework: {
      psaraRule: "Assam Private Security Agencies (Regulation) Rules, 2008",
      minimumWageAuthority: "Labour Welfare Department, Government of Assam (Minimum Wages Notification for Scheduled Employment)",
      clraRequirements: "Registration under Contract Labour (Regulation & Abolition) Assam Rules, mandatory Form V and local employment quota compliance.",
      keyRegulations: [
        "Assam Shops and Establishments Act, 1971",
        "The Factories Act, 1948 (Assam Rules)",
        "North East Industrial Development Scheme (NEIDS) statutory guidelines",
        "EPFO Regional Office, Guwahati",
        "ESIC Regional Office, Guwahati",
      ],
      statutoryAssurance:
        "ACS manages unified payroll compliance adhering strictly to Assam state wage notifications, ensuring that multinational logistics tenants operate with zero risk of labor enforcement notices.",
    },
    operationalCapabilities: [
      {
        title: "24-48 Hour Northeast Regional Mobilization",
        description:
          "Our Guwahati deployment unit provides rapid guard mobilization across Kamrup Metro and Kamrup Rural industrial zones within 24 to 48 hours of requirement confirmation.",
      },
      {
        title: "Inland Container Depot (ICD) Seal & Gate Audit",
        description:
          "Specialized container security checks: bolt seal integrity verification, 7-point container physical inspection, driver KYC logging, and computerized weigh-slip validation.",
      },
      {
        title: "Bilingual Security Guards (Assamese, Hindi, Bengali, English)",
        description:
          "Culturally attuned, police-verified security personnel who can communicate fluently with interstate truck drivers as well as corporate regional management.",
      },
      {
        title: "Multi-Acre Logistics Park RFID Perimeter Patrols",
        description:
          "Guard tour wand system tracking nighttime patrols around isolated perimeter boundaries, floodlit staging lanes, and diesel storage tanks.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "100+ Northeast Staged Guards",
      supervisoryRatio: "1 Field Supervisor per 14 Security Personnel",
      patrolTechnology: "Real-Time Cloud RFID Guard Patrol Wand System",
    },
    faqs: [
      {
        question: "Does ACS operate across all industrial hubs in Greater Guwahati?",
        answer:
          "Yes, we provide security guarding and facility management across Amingaon, Changsari, Palashbari, Chaygaon, and Bamunimaidam, as well as Guwahati commercial districts.",
      },
      {
        question: "Can you manage security for international pharma and FMCG distribution centers?",
        answer:
          "Yes. We specialize in Grade-A warehousing security, complying with GMP norms, clean-room soft services, and strict visitor/cargo logging for pharmaceuticals and FMCG leaders.",
      },
      {
        question: "What is your procedure for emergency replacement of guards in Guwahati?",
        answer:
          "We maintain a 15% active standby bench at our Guwahati operations base. Any absent guard or emergency augmentation is fulfilled within 2 to 4 hours.",
      },
    ],
  },
  // ─── West Bengal Primary Industrial & B2B Manpower Corridors (4 Added) ────
  {
    slug: "dankuni-hooghly-industrial-belt",
    name: "Dankuni – Hooghly Multi-Modal Logistics & NH-19/NH-16 Corridor",
    tagline: "Eastern India's Largest Warehousing, Loading/Unloading & Factory Manpower Axis",
    state: "West Bengal",
    region: "Hooghly & Howrah Logistics Belt",
    heroHeadline: "Bulk Warehouse Manpower, Hamali Loading Gangs & Industrial Security for Dankuni–Dhulagarh–Uluberia",
    description:
      "Dedicated B2B blue-collar manpower supply, container loading/unloading (Hamali/Mutia) gangs, industrial electricians, weighbridge shrinkage controllers, and PSARA guarding across Dankuni, Dhulagarh, Ranihati, Sankrail, Uluberia, and Singur along NH-19 and NH-16.",
    strategicImportance:
      "Converging the Eastern Dedicated Freight Corridor (EDFC) rail terminus in Dankuni with the NH-19 (Delhi Road) and NH-16 (Bombay Road) warehousing belts — and accelerated by the West Bengal Investment Promotion Policy 2026 (WBIP 2026) warehousing, cold-chain, and manufacturing incentives — the Hooghly-Howrah logistics axis processes over 60% of Eastern India's e-commerce, FMCG, cold storage, and automotive distribution volume. Operations across ESR Uluberia and SFA Logistics Park Dankuni fail without zero-shrinkage gate controls and punctual 24/7 shift labor.",
    keyIndustrialZones: [
      {
        name: "Dankuni Multi-Modal Logistics & EDFC Rail Belt",
        focus: "E-Commerce Fulfilment, Cold Storage, Rail-Road Freight Terminals",
        location: "Dankuni, Hooghly (NH-19)",
      },
      {
        name: "Dhulagarh – Ranihati – Panchla Logistics Park Cluster",
        focus: "FMCG Distribution, Cold Chain Warehouses, Parcel Cross-Docking",
        location: "NH-16 Bombay Road, Howrah",
      },
      {
        name: "Sankrail Poly Park, Food Park & Sudha Ras Complex",
        focus: "Plastics Processing, Edible Oils, Beverage Bottling, Cold Storage",
        location: "Sankrail Block, Howrah",
      },
      {
        name: "Uluberia – ESR & Industrial Growth Centre",
        focus: "Heavy 3PL Warehousing, Structural Steel, MSME Fabrication",
        location: "Uluberia, NH-16",
      },
      {
        name: "Baltikuri – Dasnagar – Liluah Karkhana Engineering Cluster",
        focus: "Foundries, Lathe Workshops, Packaging & Material Handling",
        location: "North & Central Howrah",
      },
    ],
    targetSectors: [
      "3PL Warehouses & E-Commerce Fulfilment Centers",
      "Cold Storage & Agro-Processing Godowns",
      "Container Freight Stations & Rail Goods Sheds",
      "FMCG & Beverage Manufacturing Plants",
      "MSME Karkhanas, Foundries & Sheet Metal Units",
    ],
    stateComplianceFramework: {
      psaraRule: "West Bengal Private Security Agencies (Regulation) Rules, 2007",
      minimumWageAuthority: "Office of the Labour Commissioner, Government of West Bengal (Zone A Municipal/KMDA/HDA & Zone B Rural Schedules)",
      clraRequirements: "Form-V Principal Employer registration & Labour License under West Bengal Contract Labour (R&A) Rules, plus half-yearly Form XXIV returns.",
      keyRegulations: [
        "West Bengal Minimum Wages Act (Zone A ₹10,558 / Zone B ₹9,760 Unskilled baseline — Jul–Dec 2026)",
        "EPF Employer Burden at 13.00% (12% EPF + 0.5% EDLI + 0.5% Admin) with monthly TRRN/ECR proof",
        "ESIC Employer Contribution 3.25% on gross wages up to ₹21,000",
        "West Bengal Labour Welfare Fund (₹3 Employee / ₹30 Employer biannual June & December)",
        "The Factories Act, 1948 (West Bengal Rules) & Payment of Bonus Act (8.33%)",
      ],
      statutoryAssurance:
        "All warehouse loaders, machine helpers, electricians, and PSARA sentries along the Dankuni-Hooghly belt receive 100% NEFT bank wage transfers by the 7th of each month with complete ECR and ESIC challan verification.",
    },
    operationalCapabilities: [
      {
        title: "24-48 Hour Bulk Hamali & Warehouse Loader Mobilization",
        description:
          "Staged manpower pools across Dankuni, Serampore, and Howrah enable deploying 15 to 200+ vetted loaders, unloaders, sorters, and barcode helpers within 24–48 hours.",
      },
      {
        title: "100-Ton Weighbridge & Dispatch Anti-Shrinkage Protocols",
        description:
          "Independent ACS weighbridge auditors and gate marshals reconcile e-way bills, bolt seals, and gross-tare slips around the clock.",
      },
      {
        title: "24x7 Technical MEP & Chiller Maintenance Crew",
        description:
          "On-site licensed HT/LT electricians, cold storage HVAC mechanics, and commercial plumbers maintaining 99.8% facility uptime.",
      },
      {
        title: "Biometric Attendance & CLRA Dispute Insulation",
        description:
          "Zero-substitution biometric check-ins with complete Form-V statutory indemnity isolating warehouse operators from union or principal-employer liability.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "450+ Howrah-Hooghly Personnel",
      supervisoryRatio: "1 Field Officer per 15 Staff",
      patrolTechnology: "Biometric Turnstiles + Cloud RFID Guard Tour Wands",
    },
    faqs: [
      {
        question: "Can ACS supply contract loading and unloading labor (Hamali) in Dankuni and Dhulagarh?",
        answer:
          "Yes. ACS supplies CLRA-licensed warehouse loading/unloading gangs, dock helpers, and container stuffing/destuffing crews on both monthly fixed-roster and tonnage/volume SLAs across Dankuni, Dhulagarh, Uluberia, and Sankrail.",
      },
      {
        question: "What minimum wage zone applies to Dankuni and Dhulagarh industrial hubs?",
        answer:
          "Municipal/notified areas of Dankuni, Serampore, Howrah, and Uluberia operate under WB Wage Zone A (₹10,558 Unskilled / ₹11,615 Semi-Skilled / ₹12,777 Skilled for Jul–Dec 2026), whereas interior Gram Panchayat blocks such as Panchla or Singur follow Zone B schedules.",
      },
      {
        question: "Do you deploy industrial electricians and cold-storage HVAC technicians on contract?",
        answer:
          "Yes. Our Technical MEP division deploys licensed 3-phase/HT/LT electricians, DG set operators, and refrigeration mechanics on annual maintenance or dedicated shift contracts.",
      },
    ],
  },
  {
    slug: "haldia-petrochemical-port-industrial-zone",
    name: "Haldia Port, Petrochemical & Coastal Industrial Belt",
    tagline: "Deep-Water Port, Hazchem Refinery & Purba/Paschim Medinipur Manpower Command",
    state: "West Bengal",
    region: "Haldia – Kolaghat – Kharagpur Belt",
    heroHeadline: "Hazchem-Trained Industrial Workforce, Pipe Fitters & Port Gate Security for Haldia & Kharagpur",
    description:
      "Specialized contract manpower, industrial plumbers and pipe fitters, HVAC/utility mechanics, cargo handling helpers, and PSARA fire-safety security across Haldia Dock Complex, Durgachak, Sutahata, Kolaghat Thermal belt, and Vidyasagar Industrial Park (Kharagpur).",
    strategicImportance:
      "Home to Haldia Petrochemicals, Indian Oil Refinery, edible oil refineries, chemical tank terminals, and Kolkata Port's deep-water dock system—linked inland via Kolaghat and NH-16 to Kharagpur's Vidyasagar Industrial Park and catalyzed by the West Bengal Investment Promotion Policy 2026 (WBIP 2026) coastal chemical, logistics, and green-manufacturing incentives—this corridor demands PPE-disciplined workers trained in ATEX/Hazchem safety, ISPS port protocols, pipe-fitting/MEP maintenance, and continuous 3-shift heavy plant uptime.",
    keyIndustrialZones: [
      {
        name: "Haldia Dock Complex (HDC) & Port Bonded Terminals",
        focus: "Container Handling, Edible Oil Terminals, Dry Bulk Cargo & Dock Warehouses",
        location: "Haldia, Purba Medinipur",
      },
      {
        name: "Haldia Petrochemical, Refinery & Chemical Cluster",
        focus: "Polymers, Downstream Petrochemicals, Industrial Gases, Resins",
        location: "Durgachak – Chiranjibpur, Haldia",
      },
      {
        name: "Vidyasagar Industrial Park (WBIDC — 1,166 Acres)",
        focus: "Heavy Earthmoving Machinery, Auto Components, Steel Fabrication",
        location: "Kharagpur, Paschim Medinipur (NH-16)",
      },
      {
        name: "Kolaghat – Mecheda Thermal & Engineering Corridor",
        focus: "Power Plant Ancillaries, Fly-Ash Processing, Cold Chain Godowns",
        location: "Kolaghat, NH-16 / NH-116",
      },
    ],
    targetSectors: [
      "Petrochemicals, Lubricants & Edible Oil Refineries",
      "Port Freight Forwarding & Bonded Warehouses",
      "Thermal Power & Heavy Machinery Plants",
      "Industrial Piping, ETP/STP & Utility Maintenance",
      "Export Agro-Storage & Coastal Cold Storage",
    ],
    stateComplianceFramework: {
      psaraRule: "West Bengal PSARA Rules & ISPS Port Facility Security Alignment",
      minimumWageAuthority: "Labour Commissionerate, Government of West Bengal (Zone A for Haldia, Durgachak, Kolaghat, Kharagpur; Zone B for non-municipal pockets)",
      clraRequirements: "Strict Central/State CLRA licensing, Gate-Pass police clearance verification, and Form 35 Factory Act medical fitness records.",
      keyRegulations: [
        "WB Minimum Wages Zone A (₹10,558 Unskilled / ₹12,777 Skilled — Jul–Dec 2026)",
        "The Petroleum Act & Explosives Rules safety protocol alignment",
        "Mandatory EPFO 13% + ESIC 3.25% + Group Personal Accident (WC) coverage",
        "ISPS / Port Trust gate access & hazardous area PPE mandates",
      ],
      statutoryAssurance:
        "Complete CLRA indemnity with verified ECRs, hazardous-duty safety gear compliance, and zero strike/interruption manpower continuity backed by our Haldia Port Command Desk.",
    },
    operationalCapabilities: [
      {
        title: "Utility Maintenance & STP/WTP Pipe Fitters",
        description:
          "Certified industrial plumbers, pipeline fitters, TIG/ARC welders, and pump-house attendants for chemical refineries and industrial estates.",
      },
      {
        title: "Fire Safety Marshals & Hazchem Gate Guarding",
        description:
          "Guards trained in industrial hydrant operations, breathalyzer screening of tanker drivers, and strict no-spark / contraband gate checks.",
      },
      {
        title: "Heavy Packing, Bagging & Dock Loading Teams",
        description:
          "Contract bagging line helpers, palletizers, and truck loading gangs for fertilizer, polymer, and edible oil plants.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "250+ Medinipur & Haldia Staff",
      supervisoryRatio: "1 Safety/Field Supervisor per 12 Personnel",
      patrolTechnology: "EX-Rated Flashlights + Geofenced RFID Patrol Network",
    },
    faqs: [
      {
        question: "Do you supply skilled ITI fitters, welders, and industrial helpers in Haldia and Kharagpur?",
        answer:
          "Yes. ACS supplies tested ITI welders, maintenance fitters, pipe fitters, electricians, and factory floor helpers across Haldia Industrial Belt and Vidyasagar Industrial Park in Kharagpur with full statutory PF/ESIC compliance.",
      },
      {
        question: "What wage zone covers Haldia and Kolaghat deployments?",
        answer:
          "Haldia Municipality, Haldia Development Authority notified sectors (Durgachak), Kolaghat thermal township, and Kharagpur Municipality operate under West Bengal Wage Zone A.",
      },
    ],
  },
  {
    slug: "durgapur-asansol-heavy-industrial-belt",
    name: "Durgapur – Panagarh – Asansol Heavy Steel & Coal Belt",
    tagline: "Rarh Bengal Steel, Sponge Iron, Mining Support & Industrial Manpower Network",
    state: "West Bengal",
    region: "Paschim & Purba Bardhaman + Bankura + Purulia",
    heroHeadline: "Factory Workforce, Heavy Shifting Riggers & Steel Plant Security for Durgapur, Asansol & Panagarh",
    description:
      "High-volume factory helpers, karkhana workers, ITI welders/fitters, heavy machinery rigging crews, industrial electricians, and armed/unarmed plant security serving Durgapur, Asansol, Raniganj, Andal, Panagarh Industrial Park, Burdwan, Barjora, and Raghunathpur.",
    strategicImportance:
      "The Ruhr of Eastern India spans Durgapur-Asansol's integrated steel plants and sponge iron kilns, the 1,445-acre Panagarh Industrial Park along NH-19, Barjora's engineering cluster in Bankura, and Raghunathpur's thermal/steel corridor in Purulia. Managing labor supply here requires proven union-interface maturity, 24/7 anti-scrap-pilferage security, and certified technical hands.",
    keyIndustrialZones: [
      {
        name: "Panagarh Industrial Park (WBIDC — 1,445 Acres)",
        focus: "Chemicals, Fertilizers, Heavy Manufacturing, Logistics Parks",
        location: "Panagarh / Kanksa, NH-19",
      },
      {
        name: "Durgapur Steel Plant (DSP), Alloy Steel & DPL Corridor",
        focus: "Integrated Steel, Sponge Iron, Industrial Gases, Refractories",
        location: "Durgapur Municipal Corp.",
      },
      {
        name: "Asansol – Burnpur (IISCO) – Jamuria – Kulti Belt",
        focus: "Metallurgy, Wire Drawing, Coke Ovens, Railway Equipment",
        location: "ADDA Jurisdiction, Paschim Bardhaman",
      },
      {
        name: "Barjora Industrial Park & Raghunathpur Power/Steel Zone",
        focus: "Ferro-Alloys, Iron Foundries, Plastics & Thermal Power",
        location: "Bankura & Purulia Borders",
      },
    ],
    targetSectors: [
      "Integrated Steel, Sponge Iron & Ferro-Alloy Plants",
      "Cement Grinding Units & Refractories",
      "Chemical & Fertilizer Processing Facilities",
      "Heavy Engineering Foundries & CNC Workshops",
      "Mineral Yards & Coal Washeries",
    ],
    stateComplianceFramework: {
      psaraRule: "West Bengal PSARA License + ADPC Commissionerate Police Verification",
      minimumWageAuthority: "West Bengal Labour Commissionerate (Zone A across ADDA / Durgapur / Asansol / Panagarh / Burdwan; Central Sphere CLC(C) for SAIL/ECL/PSUs)",
      clraRequirements: "Mandatory Form-V issuance, Standing Orders adherence, and annual bonus provisioning before Puja cycles.",
      keyRegulations: [
        "Factories Act 1948 (Hot-Area Safety, PPE, Medical Checkup Form 35)",
        "EPF 13.00% + ESIC 3.25% + Group Accidental Cover",
        "Strict adherence to Central Sphere wage orders for PSU/Mining installations",
        "WB Minimum Wages Zone A for Durgapur/Asansol/Panagarh/Burdwan/Raniganj",
      ],
      statutoryAssurance:
        "Zero wage leakage, dual-audit attendance reconciliation, and battle-tested quick reaction support protecting factory gates across Paschim & Purba Bardhaman.",
    },
    operationalCapabilities: [
      {
        title: "Skilled ITI Trades, Welders & Furnace Floor Helpers",
        description:
          "Deployment of TIG/MIG/ARC welders, crane riggers, material movement helpers, and packaging line staff certified for heavy plant floors.",
      },
      {
        title: "Heavy Machinery Shifting & Plant Relocation Gangs",
        description:
          "Contractual rigging and industrial shifting teams equipped for lathe, press, and warehouse rack installations.",
      },
      {
        title: "Weighbridge & Scrap Loss Prevention",
        description:
          "Armed sentries and dual-custody weighbridge controllers eliminating alloy and billet diversion at dispatch gates.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "24-48 Hours",
      benchStrength: "400+ Rarh Bengal Workforce",
      supervisoryRatio: "1 Field Supervisor per 12 Industrial Workers",
      patrolTechnology: "GPS + RFID Night Patrol & Weighbridge Gate Sync",
    },
    faqs: [
      {
        question: "Do you serve Panagarh Industrial Park and Barjora in addition to Durgapur?",
        answer:
          "Yes. Our Durgapur regional desk maintains direct operational coverage for Panagarh Industrial Park, Durgapur, Andal, Asansol, Jamuria, Raniganj, Burdwan, Barjora, and Raghunathpur with 24–48 hour deployment SLAs.",
      },
      {
        question: "Can ACS handle Central Sphere wages for PSU plants alongside State Zone A wages?",
        answer:
          "Yes. We run dual-sphere payroll tables covering Central Labour Commissioner (CLC-C) orders for PSUs and West Bengal Zone A/B schedules for private MSMEs and factories.",
      },
    ],
  },
  {
    slug: "kolkata-it-data-center-corridor-sector-v-new-town",
    name: "Kolkata IT, CBD & Commercial Support Corridor (Sector V – New Town – CBD)",
    tagline: "Corporate Housekeeping, MEP Technical Staffing, Pantry/Office Support & Grade-A Security",
    state: "West Bengal",
    region: "Salt Lake Sector V – New Town – Kolkata CBD – Bantala",
    heroHeadline: "IFM, Office Boys, Pantry Staff, HVAC/Electrical Technicians & Corporate Security across Kolkata",
    description:
      "End-to-end Integrated Facility Management (IFM), commercial HVAC/chiller technicians, HT/LT electricians, commercial plumbers, mechanized housekeeping, office peon/pantry staff, corporate office shifting crews, and PSARA concierge security for Salt Lake Sector V, New Town Rajarhat, Ecospace, Park Street, Camac Street, BBD Bagh, and Bantala IT/Leather zones.",
    strategicImportance:
      "Serving multinational IT/ITES towers in Salt Lake Sector V and New Town, financial headquarters in Park Street–Camac Street–BBD Bagh, wholesale godowns in Burrabazar, and exporters in Bantala Kolkata Leather Complex, Kolkata's commercial core demands groomed, police-verified support staff alongside 24/7 engineering technicians.",
    keyIndustrialZones: [
      {
        name: "Salt Lake Electronics Complex (Sector V — NDITA)",
        focus: "IT/ITES Campuses, Fintech Data Centers, Telecom & R&D",
        location: "Bidhannagar, Kolkata",
      },
      {
        name: "New Town Financial Hub & Ecospace – Infospace Corridor",
        focus: "Tier-1 Corporate Towers, GCCs, Healthcare & Commercial Malls",
        location: "New Town Rajarhat (NKDA)",
      },
      {
        name: "Park Street – Camac Street – BBD Bagh Central Business District",
        focus: "Banks, Corporate HQs, Consulates, Law Firms & Retail Plazas",
        location: "Central Kolkata (KMC)",
      },
      {
        name: "Bantala Kolkata Leather Complex (KLC) & Kasba–Topsia",
        focus: "Tannery Exports, Footwear Plants, Industrial Estate & IT Zones",
        location: "East Kolkata / South 24 Parganas",
      },
    ],
    targetSectors: [
      "IT/ITES Software Parks & Hyperscale Data Centers",
      "Banking, NBFC & Corporate Headquarters",
      "Tertiary Hospitals, Laboratories & Educational Campuses",
      "Wholesale Trade Hubs (Burrabazar) & Export Parks (Bantala)",
      "Commercial Relocation & Interior Fit-Out Workforces",
    ],
    stateComplianceFramework: {
      psaraRule: "West Bengal PSARA License + Kolkata Police / Bidhannagar Commissionerate Verification",
      minimumWageAuthority: "West Bengal Minimum Wages Act — Strictly Zone A across KMC, Bidhannagar Municipal Corporation, and NKDA",
      clraRequirements: "100% EPFO, ESIC, West Bengal LWF, Professional Tax Form VIII, and Form-V contractor compliance.",
      keyRegulations: [
        "WB Minimum Wages Zone A (Unskilled ₹10,558 / Semi-Skilled ₹11,615 / Skilled ₹12,777 / Highly Skilled ₹14,054 — Jul–Dec 2026)",
        "ISO 9001:2015 SOP Audits & Green/Diversey Eco-Chemical Housekeeping Standards",
        "CLRA Section 21 Principal Employer Indemnity",
        "Strict Background & Aadhaar/Police Clearance Verification",
      ],
      statutoryAssurance:
        "Audited monthly compliance packs (bank wage register, ECR TRRN, ESIC challan, PT & GST receipts) delivered before billing settlement.",
    },
    operationalCapabilities: [
      {
        title: "24x7 Technical MEP (Electricians, HVAC & Plumbers)",
        description:
          "Licensed 3-phase/HT/LT electricians, BMS/chiller technicians, and commercial plumbers maintaining Tier-A tower uptime.",
      },
      {
        title: "Groomed Office Boys, Peons, Pantry & Executive Support",
        description:
          "Uniformed, etiquette-trained corporate office support staff, pantry stewards, boardroom attendants, and mailroom runners.",
      },
      {
        title: "Weekend Commercial Office Shifting & IT Moving Crews",
        description:
          "Zero-downtime Friday-to-Sunday office furniture, server rack, and workstation shifting teams.",
      },
      {
        title: "Concierge Guarding & Mechanized Deep Cleaning",
        description:
          "Bilingual front-desk security officers paired with ride-on scrubbers and IRATA facade cleaning teams.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "12-24 Hours",
      benchStrength: "1,200+ Greater Kolkata & Barrackpore Personnel",
      supervisoryRatio: "1 Operations Officer per Campus",
      patrolTechnology: "Turnstile Biometrics + Daily Digital FM Checklists",
    },
    faqs: [
      {
        question: "Can ACS manage both corporate housekeeping, office boys, and MEP electricians under one vendor code?",
        answer:
          "Yes. ACS functions as a single-vendor IFM and manpower partner across Sector V, New Town, and Kolkata CBD, consolidating electricians, HVAC techs, plumbers, cleaners, pantry/peon staff, and PSARA guards on one compliant invoice.",
      },
      {
        question: "Do you handle commercial office shifting in Salt Lake Sector V and Park Street?",
        answer:
          "Yes. Our commercial shifting division executes after-hours and weekend office relocations, server rack handling, and modular furniture movement with trained packers and supervisors.",
      },
    ],
  },
];



export const MAHARASHTRA_CORRIDORS: CorridorData[] = [
  {
    slug: "pune-chakan-talegaon-auto-axis",
    name: "Pune – Chakan – Talegaon – Ranjangaon Auto & Engineering Corridor",
    tagline: "Automotive, Heavy Engineering & EV Manufacturing Workforce & Security Network",
    state: "Maharashtra",
    region: "Western Maharashtra (Pune Belt)",
    heroHeadline: "Integrated B2B Industrial Workforce, Technical Manpower & PSARA Security for Maharashtra Premier Automotive Hub",
    description:
      "Advance Corporate Security is an Integrated B2B Industrial Workforce & Facility Partner delivering PSARA-compliant enterprise guarding, automated gate logistics, factory blue-collar assembly workers, licensed HT/LT electricians, and Mathadi-compliant loading gangs across Chakan, Talegaon, Bhosari, and Ranjangaon MIDC.",
    strategicImportance:
      "As the Detroit of India, the Pune-Chakan-Talegaon-Ranjangaon axis generates over 20% of the nation automobile and EV output. ACS provides high-reliability 24x7 workforce solutions that prevent production downtime, cargo hijackings along highway bottlenecks, and local union friction.",
    keyIndustrialZones: [
      {
        name: "Chakan MIDC (Phases I–V)",
        focus: "Automotive OEMs (Mercedes, VW, Bajaj, Mahindra), EV Battery Assembly, Heavy Engineering",
        location: "NH-60 / Chakan-Talegaon Highway Axis",
      },
      {
        name: "Talegaon MIDC (Industrial & Floriculture)",
        focus: "Heavy Fabrication, Automobile Assembly (General Motors Node), Logistics Parks",
        location: "Old Mumbai-Pune Highway (NH-48)",
      },
      {
        name: "Bhosari & Pimpri MIDC Engineering Complex",
        focus: "High-Precision Machining, Tool & Die Making, Auto Components, Hydraulics",
        location: "PCMC Municipal Corporation Core",
      },
      {
        name: "Ranjangaon 5-Star MIDC",
        focus: "White Goods (LG, Whirlpool), Automotive Powertrains (Stellantis/Fiat), Electronics",
        location: "Pune-Ahmednagar Highway (SH-27)",
      },
      {
        name: "Shirwal & Khandala MIDC",
        focus: "Consumer Durables (Godrej), Industrial Refrigeration, Auto Ancillaries",
        location: "Pune-Satara Highway Axis",
      },
    ],
    targetSectors: [
      "Automobile OEMs & Tier-1/Tier-2 Ancillaries",
      "Electric Vehicle (EV) Powertrain & Battery Assembly",
      "White Goods & Heavy Consumer Electronics",
      "Precision CNC Machining, Tooling & Hydraulics",
      "Mega Logistics Parks & Grade-A Automated Warehousing",
    ],
    stateComplianceFramework: {
      psaraRule: "Maharashtra Private Security Agencies Rules, 2007 (Home Department Controlling Authority)",
      minimumWageAuthority: "Office of the Labour Commissioner, Government of Maharashtra (Engineering & Shops/Commercial Zone I Notifications)",
      clraRequirements: "Mandatory registration under Contract Labour (Regulation & Abolition) Maharashtra Rules with Unified Portal Form V principal verification.",
      keyRegulations: [
        "Maharashtra Mathadi, Hamal and Other Manual Workers Act, 1969 (Section 5 / Section 22 Captive Exemption Compliance)",
        "Maharashtra Fire Prevention and Life Safety Measures Act, 2006 (Form B Biannual Audit Certification)",
        "The Factories Act, 1948 (Maharashtra Rules 1963 — Section 2(n) Occupier Strict Liability Protection)",
        "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 106 Negligence Indemnity & Section 112 Cargo Theft Protection",
        "Maharashtra Labour Welfare Fund (MLWF) Act (2024/2026 Revised Rates: Employee ₹25 / Employer ₹75 Biannual)",
      ],
      statutoryAssurance:
        "100% transparent statutory compliance dossiers with bank transfer proof, monthly EPF ECRs, ESIC payment challans, and MLWF filings delivered prior to monthly invoicing, guaranteeing zero joint-and-several liability for the Principal Employer.",
    },
    operationalCapabilities: [
      {
        title: "Integrated Industrial Workforce Deployment",
        description:
          "Turnkey provision of machine operators, assembly helpers, fitters, welders, and licensed HT/LT electricians with complete EHS training and LOTO (Lockout/Tagout) certification.",
      },
      {
        title: "Mathadi-Compliant & Mechanized Loading Operations",
        description:
          "Dispute-free container loading/unloading, reach truck and pallet jack operations operating under verified captive handling exemptions to prevent wildcat toli extortion.",
      },
      {
        title: "24x7 Quick Reaction & Perimeter Security",
        description:
          "PSARA-licensed armed sentries, automated boom barrier gate automation, AI-powered CCTV surveillance for PPE compliance, and roving night highway patrols.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "2 Hours (Emergency Mobilization across Chakan, Bhosari & Talegaon)",
      benchStrength: "650+ Active Industrial Guards & Blue-Collar Tradesmen on Standby",
      supervisoryRatio: "1:8 Dedicated Field Officer-to-Guard Ratio",
      patrolTechnology: "GPS Real-Time Geofenced Guard Tour Patrol & RFID Checkpoints",
    },
    faqs: [
      {
        question: "How does ACS resolve Mathadi toli disputes in Chakan and Talegaon MIDC?",
        answer:
          "ACS employs mechanized material handling crews (forklifts, reach trucks, dock levelers) operated by certified industrial technicians. Under Section 5 and Section 22 of the Mathadi Act, mechanized internal warehouse handling by regular staff is legally differentiated from manual headloading, preventing unauthorized toli extortion while remaining 100% compliant.",
      },
      {
        question: "Can ACS provide licensed HT electricians and STP operators in Pune MIDC?",
        answer:
          "Yes. ACS supplies state-certified industrial electricians holding PWD 'A' and 'B' licenses for 33kV/11kV substations, transformer maintenance, DG synchronization, and STP/ETP operations with continuous safety oversight.",
      },
    ],
  },
  {
    slug: "mumbai-thane-raigad-jnpt-corridor",
    name: "Mumbai – Thane – Raigad – JNPT Petrochem & Maritime Logistics Corridor",
    tagline: "Port Logistics, TAPA FSR Warehousing & Red-Zone Hazchem Industrial Manpower",
    state: "Maharashtra",
    region: "Konkan / Mumbai Metropolitan Region (MMR)",
    heroHeadline: "Turnkey Workforce Outsourcing & Maritime Gate Logistics for Nhava Sheva, Bhiwandi & Taloja",
    description:
      "Advance Corporate Security operates as an Integrated B2B Workforce & Facility Partner across the MMR freight belt, supplying TAPA FSR-compliant warehouse security, container freight destuffing gangs, Hazchem-certified chemical plant helpers, and corporate IFM from Nhava Sheva to Bhiwandi.",
    strategicImportance:
      "Handling over 50% of India containerized maritime trade via JNPT Nhava Sheva and hosting over 40 million sq. ft. of Grade-A warehousing in Bhiwandi alongside Taloja chemical park, this corridor requires enterprise-level physical security and strict statutory compliance.",
    keyIndustrialZones: [
      {
        name: "Bhiwandi Warehousing & Fulfillment Hub",
        focus: "Mega E-Commerce Distribution (Amazon, Flipkart), 3PL Logistics, Retail Supply Chains",
        location: "Mumbai-Nashik Highway (NH-160)",
      },
      {
        name: "JNPT Nhava Sheva Port & CFS Axis",
        focus: "Container Freight Stations, Bonded Warehouses, Customs Cargo Examination",
        location: "Uran / Raigad Coastal Corridor",
      },
      {
        name: "Taloja Industrial Area (MIDC Red Zone)",
        focus: "Petrochemicals, Specialty Chemicals, Bulk Drug Intermediates, Glass & Fertilizers",
        location: "Navi Mumbai-Panvel Link",
      },
      {
        name: "Trans-Thane Creek (TTC) Industrial Area",
        focus: "Data Centers, IT/ITES Campuses, Specialty Engineering, Cold Storage",
        location: "Thane-Belapur Road Axis",
      },
      {
        name: "Tarapur Industrial Area",
        focus: "Bulk Drug APIs, Fine Chemicals, Textile Processing",
        location: "Palghar Coastal Highway",
      },
    ],
    targetSectors: [
      "3PL, Cold Chain & E-Commerce Freight Fulfillment",
      "Maritime Container Logistics & Inland Container Depots (ICDs)",
      "Petrochemicals, Hazardous Chemicals & Bulk Drugs",
      "Hyperscale Data Centers & Corporate Technology Parks",
      "Heavy Marine Engineering & Ship Repair Facilities",
    ],
    stateComplianceFramework: {
      psaraRule: "Maharashtra Private Security Agencies Rules, 2007 (Controlling Authority, Mumbai/Thane)",
      minimumWageAuthority: "Labour Commissionerate Maharashtra (Zone I Shops & Establishments and Chemical Schedules)",
      clraRequirements: "Comprehensive CLRA contractor licensing with Form V principal validation and ESIC/EPF sub-codes.",
      keyRegulations: [
        "TAPA (Transported Asset Protection Association) FSR Level-A Physical Security Protocols",
        "Maharashtra Fire Prevention and Life Safety Measures Act, 2006 (Form B Mandate for Chemical Parks)",
        "The Factories Act, 1948 & Major Accident Hazards (MAH) Rules",
        "Bharatiya Nyaya Sanhita, 2023 — Section 112 Cargo Theft Syndicate Suppression",
        "Maharashtra Labour Welfare Fund (MLWF) Compliance",
      ],
      statutoryAssurance:
        "Complete immunity for logistics park occupiers and plant heads through audited monthly wage transfers, ECR filings, and statutory register maintenance.",
    },
    operationalCapabilities: [
      {
        title: "TAPA FSR Logistics & Container Gate Security",
        description:
          "Automated ANPR vehicle logging, container bolt seal verification, driver biometric screening, and anti-shrinkage sentry governance across high-velocity loading docks.",
      },
      {
        title: "Hazchem & Confined Space Industrial Helpers",
        description:
          "Specially trained workforce equipped with level-appropriate PPE, breathing apparatus, and HAZWOPER protocols for chemical manufacturing in Taloja and Tarapur.",
      },
      {
        title: "Mechanized Logistics Warehouse Staffing",
        description:
          "Bulk deployment of WMS barcode scanner associates, sortation line helpers, high-reach forklift operators, and 24x7 shift loading crews across Bhiwandi.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "2 Hours (Immediate response across Bhiwandi, Taloja & Navi Mumbai)",
      benchStrength: "800+ Vetted Logistics Associates & Armed Marine Guards",
      supervisoryRatio: "1:10 Field Officer Ratio with 24x7 Control Room Monitoring",
      patrolTechnology: "AI-Enabled CCTV Thermal Perimeter Monitoring & GPS Roving Patrols",
    },
    faqs: [
      {
        question: "Do you provide TAPA FSR compliant security for warehouses in Bhiwandi?",
        answer:
          "Yes. ACS designs and executes TAPA FSR Level-A and Level-B compliant security programs for 3PL and e-commerce warehouses in Bhiwandi, including high-security dock controls, CCTV coverage, vehicle undercarriage mirrors, and dual-sentry gate inspections.",
      },
      {
        question: "Are ACS chemical plant workers trained for Hazchem safety in Taloja?",
        answer:
          "Yes. All workforce members deployed to Taloja and Tarapur chemical estates undergo certified industrial safety induction covering chemical splash response, eye-wash stations, gas detection awareness, and Factory Rule 73 EHS procedures.",
      },
    ],
  },
  {
    slug: "aurangabad-auric-dmic-corridor",
    name: "Chhatrapati Sambhajinagar (Aurangabad) – AURIC Smart City Corridor",
    tagline: "DMIC Greenfield Node, EV Manufacturing & Precision Tooling Workforce Hub",
    state: "Maharashtra",
    region: "Marathwada / Samruddhi Expressway Belt",
    heroHeadline: "Industrial Manpower Outsourcing & Enterprise Facility Management for AURIC Shendra-Bidkin & Waluj",
    description:
      "Advance Corporate Security delivers integrated blue-collar workforce solutions, precision machine operators, licensed substation electricians, and PSARA security across AURIC (Shendra-Bidkin) and the Waluj auto manufacturing cluster.",
    strategicImportance:
      "As India first greenfield smart industrial city under the Delhi-Mumbai Industrial Corridor (DMIC) spanning 10,000 acres, Chhatrapati Sambhajinagar is a global hub for auto engineering, defense hardware, and pharmaceutical synthesis connected by the Samruddhi Mahamarg.",
    keyIndustrialZones: [
      {
        name: "AURIC Shendra Smart City Node",
        focus: "Electric Vehicles, Green Hydrogen, Electronics System Design (ESDM), Precision Auto Components",
        location: "Jalna Road / Samruddhi Mahamarg Access",
      },
      {
        name: "AURIC Bidkin Industrial Node",
        focus: "Mega Manufacturing, Heavy Metallurgy, Defense Hardware, Food Processing",
        location: "Bidkin-Paithan Highway Corridor",
      },
      {
        name: "Waluj Industrial Area (MIDC)",
        focus: "Automotive Two-Wheeler Cluster (Bajaj Ecosystem), White Goods, Foundry & Stamping",
        location: "Pune-Aurangabad Highway (SH-60)",
      },
      {
        name: "Chikalthana MIDC",
        focus: "Pharmaceutical Formulations, Bulk Drugs, Electrical Engineering",
        location: "Chhatrapati Sambhajinagar Urban Periphery",
      },
      {
        name: "Jalna MIDC & Steel Cluster",
        focus: "Steel Re-Rolling Mills, Heavy Ingot Furnaces, Seed Biotechnology",
        location: "Jalna Industrial Highway",
      },
    ],
    targetSectors: [
      "Electric Vehicles (EV) & Smart Mobility Infrastructure",
      "Two-Wheeler & Three-Wheeler Auto Component Stamping",
      "Heavy Steel Re-Rolling, Forging & Metallurgy",
      "Pharmaceutical Formulations & Biotechnology",
      "Electronics Manufacturing Services (EMS)",
    ],
    stateComplianceFramework: {
      psaraRule: "Maharashtra Private Security Agencies Rules, 2007 (Chhatrapati Sambhajinagar Police Jurisdiction)",
      minimumWageAuthority: "Deputy Labour Commissioner Office, Aurangabad Division (Engineering Zone I/II Rates)",
      clraRequirements: "Form V principal verification, centralized wage register maintenance, and CLRA statutory licensing.",
      keyRegulations: [
        "DMIC Smart Industrial Township Life Safety & Environmental Regulations",
        "Maharashtra Factories Rules, 1963 — Occupier Liability Protection",
        "Industrial Employment (Standing Orders) Central / State Model",
        "Maharashtra Labour Welfare Fund (MLWF) Remittance",
      ],
      statutoryAssurance:
        "Comprehensive legal indemnity for plant heads and project managers through verified biometric muster rolls, direct bank salary credits, and zero-defect audit compliance.",
    },
    operationalCapabilities: [
      {
        title: "Smart City Utility & Substation Maintenance",
        description:
          "Turnkey deployment of licensed HT/LT electricians, underground utility line inspectors, DG set operators, and water treatment technicians for AURIC plug-and-play estates.",
      },
      {
        title: "Automotive Assembly & Stamping Blue-Collar Gangs",
        description:
          "Vetted machine helpers, press operators, robotic line loaders, and packaging associates trained for high-speed auto manufacturing in Waluj and Shendra.",
      },
      {
        title: "High-Security Industrial Gate Logistics",
        description:
          "ANPR vehicle tracking, 100-ton weighbridge verification, visitor access control, and 24x7 motorized patrol networks.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "3 Hours (Rapid deployment across Shendra, Waluj & Chikalthana)",
      benchStrength: "450+ Certified Industrial Operators & Security Personnel",
      supervisoryRatio: "1:8 Field Supervisor-to-Worker Ratio",
      patrolTechnology: "Smart City Integrated CCTV Monitoring & Geofenced RFID Guard Tour",
    },
    faqs: [
      {
        question: "Can ACS support greenfield industrial unit setups in AURIC Shendra-Bidkin?",
        answer:
          "Yes. ACS provides end-to-end workforce mobilization for greenfield plants in AURIC, starting with construction-phase security, machinery rigging and positioning labor, electrical substation commissioning, through to permanent operational workforce.",
      },
      {
        question: "What are the minimum wage rates applicable to industrial workers in Waluj MIDC?",
        answer:
          "Under the Maharashtra Minimum Wages Act (Engineering Schedule Zone I), unskilled workers earn a minimum basic+VDA of ₹16,800/mo, semi-skilled ₹17,815/mo, and skilled ₹19,240/mo (effective July–Dec 2026), complete with 13% EPF, 3.25% ESIC, and MLWF contributions.",
      },
    ],
  },
  {
    slug: "nagpur-vidarbha-heavy-logistics-corridor",
    name: "Nagpur – Vidarbha Heavy Industry, Steel & Multi-Modal Logistics Belt",
    tagline: "Central India Cargo Transit, 5-Star MIDC Metallurgy & Aerospace Workforce",
    state: "Maharashtra",
    region: "Vidarbha (Zero-Mile India Logistics Hub)",
    heroHeadline: "Enterprise Security Guarding & Heavy Industrial Blue-Collar Staffing for Butibori & MIHAN SEZ",
    description:
      "Advance Corporate Security operates as an Integrated Industrial Workforce & Facility Partner across Central India, providing heavy metallurgy helpers, weighbridge security guards, rail-siding cargo handlers, and aerospace facility staff in Nagpur.",
    strategicImportance:
      "Located at the geographical crossroads of India (North-South and East-West corridors), Nagpur is home to Butibori Five-Star MIDC (2,428 hectares), MIHAN SEZ (Boeing MRO, Dassault Reliance), and major multi-modal logistics terminals.",
    keyIndustrialZones: [
      {
        name: "Butibori Five-Star MIDC",
        focus: "Heavy Metallurgy, Transmission Towers, Paper Mills, Synthetic Textiles, Heavy Fabrication",
        location: "NH-44 (Nagpur-Hyderabad Highway)",
      },
      {
        name: "MIHAN SEZ & Multi-Modal Cargo Hub",
        focus: "Aerospace MRO (Boeing), Aviation Components (Dassault), Global IT/ITES Campuses",
        location: "Wardha Road / Nagpur Airport Corridor",
      },
      {
        name: "Hingna MIDC",
        focus: "Engineering, Foundry, Packaging, FMCG Manufacturing",
        location: "Nagpur Urban Western Belt",
      },
      {
        name: "Chandrapur Heavy Industrial Axis",
        focus: "Cement Plants (UltraTech, ACC), Thermal Power Generation, Coal Mining Support",
        location: "Nagpur-Chandrapur Corridor (SH-264)",
      },
    ],
    targetSectors: [
      "Heavy Metallurgy, Structural Steel & Transmission Towers",
      "Multi-Modal Logistics, Rail Rakes & Air Cargo Freight",
      "Aerospace Manufacturing, Maintenance & Defense SEZ",
      "Cement Manufacturing, Power Generation & Mining Services",
      "Synthetic Textiles & Industrial Packaging",
    ],
    stateComplianceFramework: {
      psaraRule: "Maharashtra Private Security Agencies Rules, 2007 (Nagpur Police Commissionerate)",
      minimumWageAuthority: "Additional Labour Commissioner Office, Nagpur Division (Zone I / Group D+ Schedules)",
      clraRequirements: "Full CLRA registration with statutory Form V verification, computerized wage slip delivery.",
      keyRegulations: [
        "Factories Act, 1948 — High-Temperature Metallurgy Safety & EHS Rules",
        "MIDC Group D+ Special Incentive Compliance Regulations",
        "Bharatiya Nyaya Sanhita, 2023 — Section 303 Heavy Scrap Anti-Theft Protection",
        "Maharashtra Labour Welfare Fund (MLWF) Filings",
      ],
      statutoryAssurance:
        "Complete statutory protection with monthly proof of bank transfers, EPF/ESIC remittance, and safety indemnity protecting the factory Occupier from personal liability.",
    },
    operationalCapabilities: [
      {
        title: "Heavy Metallurgy & Foundry Workforce",
        description:
          "Deployment of furnace helpers, crane operators, structural fitters, and certified riggers with continuous high-temperature PPE enforcement.",
      },
      {
        title: "100-Ton Weighbridge & Rail Siding Guarding",
        description:
          "Strict gross/tare weighbridge inspection, rail-rake loading verification, scrap yard anti-shrinkage sentries, and perimeter drone monitoring.",
      },
      {
        title: "Aerospace & Tech Campus Facility Management",
        description:
          "Cleanroom maintenance, mechanized floor scrubbing, BMS control, and executive security for MIHAN aviation and software centers.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "3 Hours (Rapid mobilization across Butibori, Hingna & MIHAN)",
      benchStrength: "500+ Heavy Industry Workers & Security Guards on Standby",
      supervisoryRatio: "1:8 Supervisory Ratio with Mobile Patrol Command",
      patrolTechnology: "GPS Geofenced Patrols & High-Mast Infrared Perimeter Cameras",
    },
    faqs: [
      {
        question: "Do you provide scrap pilferage protection for steel plants in Butibori?",
        answer:
          "Yes. ACS specializes in heavy metallurgy security across Butibori and Chandrapur, utilizing double-check weighbridge protocols, randomized tare-weight verification, magnet-free gate checks, and 24x7 scrap yard physical sentries backed by BNS Section 303 anti-theft prosecution SOPs.",
      },
      {
        question: "Can ACS supply blue-collar labor under MIDC Group D+ incentive schemes in Vidarbha?",
        answer:
          "Yes. ACS manages full statutory compliance documentation required by industrial units to claim state government SGST reimbursements and electricity duty exemptions under Maharashtra Package Scheme of Incentives (PSI).",
      },
    ],
  },
  {
    slug: "nashik-ambad-precision-engineering-corridor",
    name: "Nashik – Ambad – Satpur Precision Engineering & Defense Cluster",
    tagline: "Aerospace Tooling, Electrical Switchgear & Agro-Industrial Workforce Network",
    state: "Maharashtra",
    region: "North Maharashtra (Khandesh Belt)",
    heroHeadline: "Specialized Technical Blue-Collar Contractors & Corporate Security for Ambad, Satpur & Sinnar MIDC",
    description:
      "Advance Corporate Security is an Integrated B2B Industrial Workforce & Facility Partner across North Maharashtra, supplying certified CNC operators, high-voltage electrical switchgear technicians, agricultural processing manpower, and PSARA security.",
    strategicImportance:
      "Nashik is a premier manufacturing triangle hosting Hindustan Aeronautics Limited (HAL Ozar), major defense aerospace suppliers, Bosch, ABB, Schneider Electric, and Mahindra & Mahindra, requiring high-precision technical talent and secure installations.",
    keyIndustrialZones: [
      {
        name: "Ambad MIDC Precision Cluster",
        focus: "Automotive Electricals, Tool & Die Making, Precision Machining, Starter Motors",
        location: "Mumbai-Agra Highway (NH-848)",
      },
      {
        name: "Satpur MIDC Heavy Fabrication Belt",
        focus: "Electrical Switchgear, Transmission Equipment, Heavy Auto Components",
        location: "Trimbak Road Axis",
      },
      {
        name: "Sinnar MIDC & SEZ",
        focus: "Textiles, Agro-Processing, Thermal Power Equipment, Light Engineering",
        location: "Nashik-Pune Highway (NH-60)",
      },
      {
        name: "Ozar Defense Aerospace Node",
        focus: "Fighter Aircraft Assembly (HAL), Avionics, Defense Research & Testing",
        location: "Nashik Airport Corridor",
      },
    ],
    targetSectors: [
      "Precision Tooling, Dies & Hydraulic Components",
      "High-Voltage Electrical Switchgear & Transformer Assembly",
      "Aerospace & Defense Hardware Manufacturing",
      "Automotive Tier-1 & Tier-2 Component Fabrication",
      "Winery, Beverage & Modern Agro-Food Processing",
    ],
    stateComplianceFramework: {
      psaraRule: "Maharashtra Private Security Agencies Rules, 2007 (Nashik Police Commissionerate)",
      minimumWageAuthority: "Deputy Labour Commissioner Office, Nashik Division (Zone I / II Schedules)",
      clraRequirements: "Mandatory Form V principal employer validation, wage register Form B compliance.",
      keyRegulations: [
        "The Factories Act, 1948 & Maharashtra Factories Rules 1963",
        "Industrial Employment (Standing Orders) Framework",
        "Maharashtra Labour Welfare Fund (MLWF) Compliance",
      ],
      statutoryAssurance:
        "100% statutory transparency backed by computerized payroll registers, EPF ECRs, ESIC challans, and complete occupier indemnity.",
    },
    operationalCapabilities: [
      {
        title: "Precision CNC Operators & Tooling Technicians",
        description:
          "Provision of ITI-certified CNC lathe operators, VMC technicians, grinding specialists, and assembly line fitters with EHS induction.",
      },
      {
        title: "Industrial Electrical & Switchgear Maintenance",
        description:
          "Substation electricians, control panel wirers, and transformer maintenance technicians certified for industrial high-voltage facilities.",
      },
      {
        title: "Facility Security & Defense-Grade Guarding",
        description:
          "PSARA-licensed perimeter guards, access control, material inward/outward gate pass tracking, and 24x7 control room surveillance.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "3 Hours (Rapid mobilization across Ambad, Satpur & Sinnar)",
      benchStrength: "400+ Industrial Technicians & Guarding Personnel",
      supervisoryRatio: "1:8 Supervisory Ratio",
      patrolTechnology: "RFID Checkpoint Logging & Mobile Patrol Units",
    },
    faqs: [
      {
        question: "Do you provide skilled CNC machine operators in Ambad MIDC?",
        answer:
          "Yes. ACS supplies screened, trade-tested CNC and VMC machine operators, quality inspectors, and assembly line helpers in Ambad and Satpur MIDC with full statutory compliance under the Engineering Minimum Wage schedule.",
      },
      {
        question: "Can ACS provide defense-adjacent facility security near HAL Ozar?",
        answer:
          "Yes. ACS deploys ex-servicemen security guards with rigorous background verification through Maharashtra Police for high-security defense engineering and aerospace ancillary installations.",
      },
    ],
  },
];



export const KARNATAKA_CORRIDORS: CorridorData[] = [
  {
    slug: "bengaluru-tumakuru-mega-manufacturing-axis",
    name: "Bengaluru – Tumakuru Mega Manufacturing & High-Tech Axis (NH-48)",
    tagline: "Machine Tools, CBIC Priority Nodes & Mega Logistics Workforce Shield",
    state: "Karnataka",
    region: "South-Central Karnataka (NH-48 Axis)",
    heroHeadline: "Integrated B2B Industrial Workforce, Technical MEP & PSARA Security for Peenya to Vasanthanarasapura",
    description:
      "Advance Corporate Security operates as an Integrated B2B Industrial Workforce & Facility Partner across NH-48, supplying factory assembly labor, licensed HT/LT electricians, container unloading hamali gangs, and PSARA security from Peenya to Tumakuru.",
    strategicImportance:
      "The heaviest manufacturing and freight logistics spine in South India connecting Bengaluru to Mumbai along Asian Highway 47. Houses over 12,000 factories across Peenya (South Asia largest MSME estate), Nelamangala logistics parks, and the 8,484-acre CBIC node at Vasanthanarasapura.",
    keyIndustrialZones: [
      {
        name: "Peenya Industrial Area (Phases 1–4)",
        focus: "CNC Machine Tools, Hydraulic Valves, Electroplating, Precision Automotive Parts (40 Sq. Km)",
        location: "NH-48 / Tumkur Road, Bengaluru Urban",
      },
      {
        name: "Nelamangala Logistics & Warehousing Hub",
        focus: "3PL Mega Warehouses, E-Commerce Fulfillment, Container Freight Stations",
        location: "Bengaluru Rural Highway Junction",
      },
      {
        name: "Dobbaspet Industrial Area",
        focus: "Heavy Machine Fabrication, Pre-Engineered Buildings (PEB), Electrical Equipment",
        location: "NH-48 / NH-648 Junction",
      },
      {
        name: "Vasanthanarasapura Mega Industrial Park",
        focus: "Chennai-Bengaluru Industrial Corridor (CBIC) Mega Node, Food Park, Machine Tool Park (8,484 Acres)",
        location: "Tumakuru (120 km from Bengaluru)",
      },
    ],
    targetSectors: [
      "Machine Tools, CNC Machining & Precision Fabrication",
      "Automotive Stamping, Hydraulics & Electrical Switchgear",
      "Mega E-Commerce Warehousing & Logistics Fulfillment",
      "Pre-Engineered Steel Structures (PEB) & Heavy Engineering",
      "Food Processing, Cold Chains & Agricultural Packaging",
    ],
    stateComplianceFramework: {
      psaraRule: "Karnataka Private Security Agencies Rules, 2008 (ADGP Internal Security Division Controlling Authority)",
      minimumWageAuthority: "Government of Karnataka Labour Department (Notification No. KAE 411 LWA 2023 - May 2026 Consolidated Sched)",
      clraRequirements: "Mandatory registration under Contract Labour (Regulation & Abolition) Karnataka Rules with Form V principal verification.",
      keyRegulations: [
        "Karnataka Factories Rules, 1969 — Section 2(n) Occupier Strict Liability Protection & Rule 88/91 Safety Mandates",
        "Karnataka Industrial Employment (Standing Orders) Rules, 1961 (Fixed Term Employment Parity)",
        "Bharatiya Nyaya Sanhita, 2023 — Section 112 Cargo Theft Syndicate Suppression",
        "Karnataka Labour Welfare Fund (KLWF) Act (2025 Revised Rate: Employee ₹50 / Employer ₹100 Annual Remittance)",
        "Peenya Industrial Association (PIA) Labor Dispute & Unrest Mitigation SOPs",
      ],
      statutoryAssurance:
        "Guaranteed 7th-of-the-month bank wage payouts backed by ACS liquid float, monthly EPF ECRs, ESIC slips, and KLWF challans eliminating union strikes and occupier liability.",
    },
    operationalCapabilities: [
      {
        title: "Peenya Union-Mitigated Factory Staffing",
        description:
          "Turnkey supply of machine operators, assembly helpers, fitters, and welders with strict biometric attendance, 100% PF/ESI compliance, and local police station liaison.",
      },
      {
        title: "High-Capacity Warehouse Hamali & Dock Labor",
        description:
          "Dedicated crews for container stuffing/destuffing, pallet jack movement, godown stacking, and inventory putaway across Nelamangala and Dobbaspet warehouses.",
      },
      {
        title: "PSARA Enterprise Guarding & Weighbridge Audit",
        description:
          "Licensed security personnel, automated boom barrier gate passes, weighbridge gross/tare audit, and roving highway night patrols.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "2 Hours (Immediate response across Peenya, Nelamangala & Dobbaspet)",
      benchStrength: "700+ Vetted Industrial Workers & Guards on Active Roster",
      supervisoryRatio: "1:8 Field Supervisor-to-Guard Ratio",
      patrolTechnology: "RFID Geofenced Checkpoints & Mobile QR Patrol System",
    },
    faqs: [
      {
        question: "How does ACS prevent labor disputes and union friction in Peenya Industrial Area?",
        answer:
          "ACS mitigates labor friction through strict 7th-of-the-month direct bank wage transfers, biometric muster verification, complete EPF/ESIC transparency delivered directly to the plant HR, and active coordination with Peenya and Nelamangala police stations.",
      },
      {
        question: "What are the statutory minimum wage rates in Karnataka Zone 1 for security and factory workers?",
        answer:
          "Under Karnataka May 2026 unified notification, Zone 1 (Greater Bengaluru Authority) prescribes minimum monthly wages of ₹24,407 for unskilled workers, ₹26,745 for semi-skilled/security guards, ₹29,316 for skilled electricians, and ₹32,145 for highly skilled supervisors, inclusive of ₹1,030.80 monthly VDA.",
      },
    ],
  },
  {
    slug: "bengaluru-airport-kolar-aerospace-corridor",
    name: "Bengaluru Airport, Aerospace & Defense Corridor (NH-44 / NH-75)",
    tagline: "Cleanroom Aerospace Janitorial, Avionics Security & Two-Wheeler OEM Manpower",
    state: "Karnataka",
    region: "Eastern Karnataka (Bengaluru Rural & Kolar)",
    heroHeadline: "High-Precision Technical Workforce & AS9100/ISO-Compliant Facility Services for Devanahalli to Narasapura",
    description:
      "Advance Corporate Security is an Integrated B2B Workforce & Facility Partner across eastern Karnataka, delivering cleanroom sanitization, avionics facility security, automotive assembly line staffing, and mega-warehouse pickers from Devanahalli to Narasapura.",
    strategicImportance:
      "India premier aerospace, defense electronics, and automobile manufacturing belt. Hosts Kempegowda International Airport (BLR), the 3,000-acre Devanahalli Aerospace Park (Boeing, Airbus Tier-1s, Collins), and massive automotive plants in Narasapura (Honda, Scania).",
    keyIndustrialZones: [
      {
        name: "Devanahalli KIADB Aerospace Park & SEZ",
        focus: "Avionics R&D, Aircraft Components, Defense Electronics, Aviation Logistics (3,000+ Acres)",
        location: "Adjacent to BLR Airport / NH-44",
      },
      {
        name: "Hoskote Industrial Area",
        focus: "Automotive OEMs, Commercial Trucks, Heavy Auto Stamping, 3PL Warehousing",
        location: "Old Madras Road (NH-75)",
      },
      {
        name: "Narasapura Industrial Area",
        focus: "Two-Wheeler OEM (Honda), Commercial Vehicles (Scania), Auto Ancillaries (1,800 Acres)",
        location: "NH-75 / Bengaluru-Tirupati Highway",
      },
      {
        name: "Vemgal Industrial Area",
        focus: "Aerospace Machining, Defense Components, Electric Vehicles",
        location: "Kolar Industrial Belt",
      },
      {
        name: "Malur Logistics & Industrial Hub",
        focus: "Warehousing, FMCG Packaging, Food Processing, Cold Storage Units",
        location: "Kolar-Bengaluru Border Axis",
      },
    ],
    targetSectors: [
      "Aerospace, Defense Electronics & Avionics Hardware",
      "Automotive OEMs & Tier-1 Stamping Suppliers",
      "Air Cargo Warehousing & Cold Chain Logistics",
      "Electronics System Design & Manufacturing (ESDM)",
      "Cleanroom Pharmaceutical Formulations & Medical Devices",
    ],
    stateComplianceFramework: {
      psaraRule: "Karnataka Private Security Agencies Rules, 2008 (ADGP Internal Security Division, Palace Road)",
      minimumWageAuthority: "Labour Department Karnataka (Zone 1 Devanahalli / Zone 2 Hoskote & Narasapura Schedules)",
      clraRequirements: "Mandatory Form V principal employer issuance, computerized wage registers, and digital ECRs.",
      keyRegulations: [
        "AS9100 / ISO 27001 Physical Security & Cleanroom Hygiene Standards",
        "Karnataka Factories Rules, 1969 & Hazardous Process Disclosure (Sec 41B)",
        "Bharatiya Nyaya Sanhita, 2023 — Section 303 & Section 112 Cargo Theft Suppression",
        "Karnataka Labour Welfare Fund (KLWF) Remittance",
      ],
      statutoryAssurance:
        "100% background-verified staff with police clearance, digital attendance, and comprehensive Workmen Compensation / ESIC coverage protecting enterprise occupiers.",
    },
    operationalCapabilities: [
      {
        title: "Aerospace Cleanroom Janitorial & Facility Management",
        description:
          "ISO Class 7 and Class 8 cleanroom sanitization, anti-static ESD floor care, Diversey-certified chemical protocols, and BMS technician support.",
      },
      {
        title: "Automotive OEM Assembly Line Workforce",
        description:
          "Turnkey deployment of assembly helpers, CNC operators, quality sorters, and high-voltage maintenance electricians across Hoskote and Narasapura.",
      },
      {
        title: "Airport-Adjacent High Security & Air Cargo Escorts",
        description:
          "Armed sentries, biometric turnstile integration, bonded cargo transit escorts, and 24x7 control room CCTV monitoring.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "2 Hours (Immediate response across Devanahalli, Hoskote & Narasapura)",
      benchStrength: "600+ Screened Industrial Technicians & Security Officers",
      supervisoryRatio: "1:8 Dedicated Field Officer Ratio",
      patrolTechnology: "Automated ANPR Boom Barriers & Real-Time GPS Guard Tour Tracking",
    },
    faqs: [
      {
        question: "Do you provide cleanroom janitorial services for aerospace facilities in Devanahalli?",
        answer:
          "Yes. ACS supplies trained cleanroom housekeeping personnel certified in particle-control protocols, lint-free wiping procedures, ESD grounding, and hospital/aviation-grade disinfectant standards.",
      },
      {
        question: "Can ACS handle assembly workforce scaling for automotive OEMs in Narasapura?",
        answer:
          "Yes. ACS has mobilised 100 to 500+ semi-skilled assembly helpers, material handlers, and packaging associates within 48 to 72 hours for automotive plants in Narasapura and Hoskote.",
      },
    ],
  },
  {
    slug: "mysuru-bidadi-auto-precision-corridor",
    name: "Mysuru – Bidadi Automotive & Precision Engineering Corridor (NH-275)",
    tagline: "10-Lane Expressway Auto Cluster, JIT Dock Labor & Biopharma Facility Support",
    state: "Karnataka",
    region: "Southern Karnataka (Bengaluru-Mysuru Expressway)",
    heroHeadline: "Just-In-Time Assembly Helpers, Wastewater STP/ETP Techs & Plant Security for Bidadi & Mysuru",
    description:
      "Advance Corporate Security operates as an Integrated Industrial Workforce & Facility Partner along the 10-lane expressway, providing Toyota-ecosystem dock labor, biopharma ETP operators, and PSARA security from Bidadi to Nanjangud.",
    strategicImportance:
      "Home to Toyota Kirloskar Motor (TKM), Bosch, Coca-Cola, specialty plastics in Harohalli, and large pharmaceutical formulation plants in Nanjangud (Jubilant, Nestlé), connected by the high-speed NH-275 expressway.",
    keyIndustrialZones: [
      {
        name: "Bidadi Industrial Area (Phases 1 & 2)",
        focus: "Automotive OEMs (Toyota), Powertrains, Stamping, Auto Electronics, Beverages (1,410 Acres)",
        location: "Bengaluru-Mysuru Expressway (NH-275), Ramanagara",
      },
      {
        name: "Harohalli Industrial Area (Phases 1–5)",
        focus: "Polymers, Rubber Molding, Electrical Equipment & Packaging (3,500 Acres)",
        location: "Kanakapura Road (NH-948)",
      },
      {
        name: "Hebbal & Koorgalli Industrial Areas (Mysuru)",
        focus: "Precision Automotive Components, Pharmaceuticals, Optics & IT SEZ",
        location: "Mysuru Ring Road Industrial Belt",
      },
      {
        name: "Nanjangud Industrial Area",
        focus: "Bulk Drug APIs, Formulations, FMCG Bottling & Specialty Chemicals",
        location: "Mysuru-Ooty Highway (NH-766)",
      },
    ],
    targetSectors: [
      "Automotive OEMs, Powertrains & Press Stamping",
      "Polymers, Rubber Injection Molding & Packaging Materials",
      "Pharmaceutical Bulk Drugs, APIs & Formulations",
      "Precision Optics, Heavy Hydraulics & Electrical Machinery",
      "FMCG Beverage Bottling & Food Processing Plants",
    ],
    stateComplianceFramework: {
      psaraRule: "Karnataka Private Security Agencies Rules, 2008 (Ramanagara / Mysuru Police Commissionerate)",
      minimumWageAuthority: "Labour Department Karnataka (Zone 2 Mysuru & Ramanagara Municipal Schedules)",
      clraRequirements: "Complete CLRA contractor licensing with Form V principal validation and digital muster rolls.",
      keyRegulations: [
        "Karnataka Factories Rules, 1969 — Rule 88 (Safety Committee) & Rule 91 (Safety Officers)",
        "Karnataka State Pollution Control Board (KSPCB) Environmental Operator Standards",
        "Payment of Wages Act — Mandatory 7th-of-the-Month Direct Bank Credit",
        "Karnataka Labour Welfare Fund (KLWF) Remittance",
      ],
      statutoryAssurance:
        "Zero liability for plant directors through monthly delivery of bank transfer receipts, EPF ECRs, and comprehensive Workmen Compensation insurance policies.",
    },
    operationalCapabilities: [
      {
        title: "Just-In-Time (JIT) Automotive Dock Staffing",
        description:
          "Synchronized dock loading/unloading gangs, sequencing helpers, and forklift drivers trained to maintain zero buffer-stock delays for Toyota suppliers.",
      },
      {
        title: "Wastewater STP, WTP & ETP Plant Operations",
        description:
          "Certified environmental technicians managing chemical dosing, clarifiers, filter press dewatering, and KSPCB log compliance for biopharma units in Nanjangud.",
      },
      {
        title: "Factory Perimeter Guarding & Emergency QRT",
        description:
          "PSARA-licensed security guards, fire safety wardens, vehicle inspection mirrors, and quick reaction motorized patrols along the expressway.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "3 Hours (Rapid deployment across Bidadi, Harohalli & Mysuru)",
      benchStrength: "500+ Industrial Associates & Security Personnel on Standby",
      supervisoryRatio: "1:8 Field Officer Ratio with Centralized Operations Desk",
      patrolTechnology: "Biometric Gate Turnstiles & GPS Geofenced Patrol Logging",
    },
    faqs: [
      {
        question: "Can ACS provide ETP and STP operators for pharmaceutical factories in Nanjangud?",
        answer:
          "Yes. ACS provides trained, certified wastewater operators for industrial Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP), ensuring continuous biological monitoring, chemical dosing, and compliance with KSPCB discharge standards.",
      },
      {
        question: "How fast can ACS scale blue-collar manpower for automotive suppliers in Bidadi?",
        answer:
          "With our regional command hub in Bidadi, ACS deploys 50 to 200+ trained assembly helpers, material handlers, and press operators within 24 to 48 hours, fully covered under statutory EPF, ESIC, and safety PPE.",
      },
    ],
  },
  {
    slug: "bmic-dharwad-belagavi-economic-node",
    name: "Bengaluru–Mumbai Industrial Corridor (BMIC) Dharwad Anchor Node (NH-48)",
    tagline: "Commercial Vehicles, Foundries & Precision Hydraulics Industrial Workforce",
    state: "Karnataka",
    region: "North Karnataka (Hubballi-Dharwad & Belagavi)",
    heroHeadline: "Bulk Blue-Collar Factory Labor, Riggers & Industrial Guarding for Dharwad & Belagavi Foundries",
    description:
      "Advance Corporate Security operates as an Integrated B2B Workforce Partner across North Karnataka, supplying commercial vehicle assembly helpers, foundry molders, heavy machinery riggers, and PSARA security across the 6,042-acre BMIC Dharwad node.",
    strategicImportance:
      "A flagship national manufacturing hub under the Bengaluru-Mumbai Industrial Corridor (NICDC/KIADB). Anchored by Tata Motors Commercial Vehicles, Marcopolo bus body building, precision foundries in Belagavi, and multi-modal freight logistics.",
    keyIndustrialZones: [
      {
        name: "Belur & Mummigatti Industrial Area (Dharwad BMIC Node)",
        focus: "Commercial Vehicles (Tata Motors), Heavy Engineering, Consumer Durables (6,042 Acres)",
        location: "NH-48 / Hubballi-Dharwad Twin Cities",
      },
      {
        name: "Belagavi Foundry & Precision Engineering Cluster",
        focus: "Cast Iron Foundries, Hydraulic Cylinders, Machining, Aerospace Forgings",
        location: "Machhe & Udyambag Industrial Estates, Belagavi",
      },
      {
        name: "Tarihal & Rayapur Industrial Estates",
        focus: "MSME Fabrication, Food Processing, Agricultural Machinery",
        location: "Hubballi Urban Industrial Belt",
      },
      {
        name: "Davangere Industrial Estate",
        focus: "Textiles, Agro-Processing, Light Engineering Units",
        location: "NH-48 Central Axis",
      },
    ],
    targetSectors: [
      "Commercial Vehicle & Automotive Bus Body Assembly",
      "Cast Iron Foundries, Heavy Forging & Metallurgy",
      "Precision Hydraulic Cylinders & Valves Manufacturing",
      "Multi-Modal Logistics Parks & Freight Terminals",
      "Agro-Machinery & Textile Manufacturing",
    ],
    stateComplianceFramework: {
      psaraRule: "Karnataka Private Security Agencies Rules, 2008 (Hubballi-Dharwad Police Commissionerate)",
      minimumWageAuthority: "Labour Department Karnataka (Zone 2 Municipal Corporation Schedules)",
      clraRequirements: "Comprehensive CLRA contractor licensing with Form V principal validation.",
      keyRegulations: [
        "Karnataka Factories Rules, 1969 — Foundry & High-Heat Metallurgy Safety EHS",
        "Industrial Employment (Standing Orders) Rules",
        "Bharatiya Nyaya Sanhita, 2023 — Section 303 Scrap Anti-Pilferage Enforcement",
        "Karnataka Labour Welfare Fund (KLWF) Remittance",
      ],
      statutoryAssurance:
        "100% statutory transparency backed by direct bank salary credits, EPF ECRs, ESIC challans, and full occupier legal indemnity.",
    },
    operationalCapabilities: [
      {
        title: "Heavy Foundry & Commercial Vehicle Blue-Collar Labor",
        description:
          "Screened foundry molders, coremakers, robotic welding helpers, and chassis assembly line workers equipped with heavy-duty PPE.",
      },
      {
        title: "Heavy Machinery Rigging & Equipment Relocation",
        description:
          "Certified riggers, crane operators, and hydraulic jack crews executing safe machinery positioning, press dismantling, and line re-erection.",
      },
      {
        title: "Industrial Perimeter Guarding & Weighbridge Security",
        description:
          "PSARA-licensed guards, material gate pass verification, weighbridge anti-pilferage sentries, and 24x7 roving motorized patrols.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "3 Hours (Rapid deployment across Belur, Mummigatti & Belagavi)",
      benchStrength: "450+ Skilled Industrial Laborers & Security Personnel",
      supervisoryRatio: "1:8 Supervisory Ratio",
      patrolTechnology: "RFID Guard Tour System & High-Definition CCTV Gate Logging",
    },
    faqs: [
      {
        question: "Do you supply foundry helpers and furnace laborers in Belagavi?",
        answer:
          "Yes. ACS provides screened, medically fit foundry workers, molders, fettling helpers, and furnace crews trained in high-heat PPE, molten metal safety, and continuous EHS protocols across Belagavi industrial estates.",
      },
      {
        question: "Can ACS handle heavy machinery rigging in Dharwad BMIC node?",
        answer:
          "Yes. Our specialized rigging division executes turnkey factory machine positioning, CNC lathe leveling, and heavy hydraulic press relocation with certified rigging foremen, crane operators, and load-tested slings.",
      },
    ],
  },
  {
    slug: "ballari-chitradurga-steel-minerals-belt",
    name: "Ballari – Chitradurga Steel, Metallurgy & Mineral Belt (NH-67 / NH-50)",
    tagline: "Extreme-Environment Integrated Steel Guarding & Rail-Rake Loading Gangs",
    state: "Karnataka",
    region: "Central & Northern Mining Corridor",
    heroHeadline: "High-Temperature Metallurgy Workforce, Weighbridge Audit & Security for Toranagallu JSW & Ballari",
    description:
      "Advance Corporate Security is an Integrated Industrial Workforce Partner across Karnataka mineral belt, supplying high-temperature blast furnace helpers, rail-rake loading gangs, weighbridge security, and scrap anti-pilferage sentries in Ballari.",
    strategicImportance:
      "Home to JSW Steel Toranagallu complex (one of the world largest integrated steel plants at 12+ MTPA), major sponge iron clusters, iron ore handling rail yards, and heavy cement manufacturing along NH-67 and NH-50.",
    keyIndustrialZones: [
      {
        name: "Toranagallu JSW Integrated Steel Complex",
        focus: "Integrated Steel (12+ MTPA), Blast Furnaces, Hot Strip Mills, Pellet Plants",
        location: "NH-67 between Ballari and Hosapete",
      },
      {
        name: "Ballari Industrial Area & Sponge Iron Belt",
        focus: "Sponge Iron Plants, Induction Furnaces, Steel Rolling Mills, Mining Equipment",
        location: "Ballari Urban & Rural Belt",
      },
      {
        name: "Hosapete Freight & Mineral Yard Axis",
        focus: "Railway Freight Sidings, Iron Ore Beneficiation, Mineral Logistics",
        location: "Vijayanagara District Corridor",
      },
      {
        name: "Chitradurga Mining & Cement Cluster",
        focus: "Cement Plants, Mining Machinery, Renewable Energy Equipment",
        location: "NH-48 / NH-50 Junction",
      },
    ],
    targetSectors: [
      "Integrated Steel Manufacturing & Continuous Casting",
      "Sponge Iron, Direct Reduced Iron (DRI) & Pelletization",
      "Railway Rake Bulk Freight Loading & Unloading",
      "Heavy Mining Equipment Maintenance & Transport",
      "Cement Manufacturing & Mineral Extraction",
    ],
    stateComplianceFramework: {
      psaraRule: "Karnataka Private Security Agencies Rules, 2008 (Ballari / Vijayanagara District Police)",
      minimumWageAuthority: "Labour Department Karnataka (Zone 2 District Headquarters / Metallurgy Schedules)",
      clraRequirements: "Mandatory Form V principal issuance, computerized wage slips, and ESI/WC coverage.",
      keyRegulations: [
        "The Mines Act, 1952 & Factories Act, 1948 High-Temperature Safety Protocols",
        "Central Motor Vehicles Act (Overloading & Mineral Transport Surveillance)",
        "Bharatiya Nyaya Sanhita, 2023 — Section 303 Scrap Metal Theft Suppression",
        "Karnataka Labour Welfare Fund (KLWF) Remittance",
      ],
      statutoryAssurance:
        "100% legal compliance with documented safety inductions, high-heat PPE supply, and zero-default payroll management protecting plant management.",
    },
    operationalCapabilities: [
      {
        title: "Extreme-Environment Steel & Furnace Labor",
        description:
          "Provision of furnace helpers, tundish preparers, slag rakers, and billet handling crews with mandatory high-heat aluminized PPE.",
      },
      {
        title: "Rail-Rake Bulk Loading & Unloading Gangs",
        description:
          "24x7 heavy cargo labor gangs for box-wagon iron ore destuffing, coal unloading, and finished steel coil lashing onto freight rakes.",
      },
      {
        title: "Weighbridge Integrity & Scrap Anti-Pilferage Sentries",
        description:
          "Randomized tare weighbridge checks, CCTV monitoring of scrap dumping bays, under-vehicle scanning, and anti-shrinkage patrols.",
      },
    ],
    deploymentMetrics: {
      turnaroundHours: "4 Hours (Emergency deployment across Toranagallu, Ballari & Hosapete)",
      benchStrength: "400+ Metallurgy Laborers & Armed Industrial Sentries",
      supervisoryRatio: "1:8 Dedicated Field Officer Ratio",
      patrolTechnology: "Long-Range Thermal Cameras & Geofenced Sentry Checkpoints",
    },
    faqs: [
      {
        question: "How does ACS prevent scrap metal theft in integrated steel plants in Ballari?",
        answer:
          "ACS enforces a strict multi-tier anti-shrinkage protocol: dual-scale gross and tare weighbridge cross-verification, magnetic scanning at egress gates, undercover scrap yard audit sentries, and legal coordination with local police under BNS Section 303.",
      },
      {
        question: "Do you provide high-temperature PPE trained labor for induction furnaces?",
        answer:
          "Yes. All workforce personnel assigned to blast furnaces and rolling mills in Ballari and Toranagallu are certified in heat exhaustion prevention, wear mandatory Kevlar/aluminized protective gear, and undergo daily EHS tool-box talks.",
      },
    ],
  },
];


export const ALL_CORRIDORS: CorridorData[] = [
  ...EASTERN_CORRIDORS,
  ...MAHARASHTRA_CORRIDORS,
  ...KARNATAKA_CORRIDORS,
];

export const CORRIDORS = ALL_CORRIDORS;

export function getAllCorridors(): CorridorData[] {
  return ALL_CORRIDORS;
}

export function getCorridorBySlug(slug: string): CorridorData | undefined {
  return ALL_CORRIDORS.find((c) => c.slug === slug);
}
