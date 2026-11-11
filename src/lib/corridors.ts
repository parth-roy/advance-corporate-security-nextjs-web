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
      "Converging the Eastern Dedicated Freight Corridor (EDFC) rail terminus in Dankuni with the NH-19 (Delhi Road) and NH-16 (Bombay Road) warehousing belts, the Hooghly-Howrah logistics axis processes over 60% of Eastern India's e-commerce, FMCG, cold storage, and automotive distribution volume. Operations here fail without zero-shrinkage gate controls and punctual 24/7 shift labor.",
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
      "Home to Haldia Petrochemicals, Indian Oil Refinery, edible oil refineries, chemical tank terminals, and Kolkata Port's deep-water dock system—linked inland via Kolaghat and NH-16 to Kharagpur's Vidyasagar Industrial Park—this corridor demands PPE-disciplined workers trained in ATEX/Hazchem safety, ISPS port protocols, and continuous 3-shift heavy plant uptime.",
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

export const CORRIDORS = EASTERN_CORRIDORS;

export function getAllCorridors(): CorridorData[] {
  return EASTERN_CORRIDORS;
}

export function getCorridorBySlug(slug: string): CorridorData | undefined {
  return EASTERN_CORRIDORS.find((c) => c.slug === slug);
}
