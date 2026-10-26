// ============================================================
// ACS — West Bengal High-Value Industrial Parks Data Layer
// Dedicated facility intelligence, proximity matrices,
// gate security SOPs, and Zone A statutory wage compliance.
// ============================================================

export interface ProximityMetric {
  destination: string;
  distance: string;
  travelTime: string;
  significance: string;
}

export interface GateSecuritySOP {
  step: string;
  procedure: string;
  techEnabler: string;
}

export interface IndustrialParkData {
  slug: string;
  name: string;
  parkDeveloper: string;
  tagline: string;
  location: string;
  district: string;
  wageZone: "Zone A" | "Zone B";
  totalArea: string;
  heroHeadline: string;
  overview: string;
  proximities: ProximityMetric[];
  gateSecuritySOPs: GateSecuritySOP[];
  weighbridgeShrinkageControls: {
    protocol: string;
    description: string;
  }[];
  perimeterPatrolProtocols: {
    feature: string;
    detail: string;
  }[];
  statutoryCompliance: {
    minimumWageZone: string;
    applicableSchedule: string;
    ecrTransparency: string;
    auditGuarantee: string;
  };
  recommendedPersonnelStructure: {
    role: string;
    ratioOrCount: string;
    responsibilities: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const WB_INDUSTRIAL_PARKS: IndustrialParkData[] = [
  {
    slug: "esr-uluberia",
    name: "ESR Uluberia Logistics Park",
    parkDeveloper: "ESR India (Asia-Pacific Logistics Real Estate)",
    tagline: "Grade-A Logistics Security & Automated Gate Management on NH-16",
    location: "Uluberia Industrial Corridor, Howrah, West Bengal",
    district: "Howrah",
    wageZone: "Zone A",
    totalArea: "38+ Acres of Grade-A Pre-Engineered Warehouses",
    heroHeadline: "Institutional Security & Dock Logistics Management for ESR Uluberia Logistics Park",
    overview:
      "ESR Uluberia is one of Eastern India's most modern Grade-A institutional logistics parks, strategically located along National Highway 16 in Howrah. Hosting multinational 3PL operators, e-commerce distribution centers, and national FMCG supply chains, ESR Uluberia demands rigorous security governance: rapid freight truck ingress, zero dock queueing, 100% weighbridge integrity, and absolute alignment with West Bengal Zone A statutory labor wages.",
    proximities: [
      {
        destination: "National Highway 16 (NH-16 / Mumbai Road)",
        distance: "0.2 km",
        travelTime: "Direct Access",
        significance: "Seamless multi-axle freight movement towards Western and Southern India.",
      },
      {
        destination: "Kona Expressway",
        distance: "22 km",
        travelTime: "25 minutes",
        significance: "Direct arterial access to Vidyasagar Setu and South/Central Kolkata.",
      },
      {
        destination: "Syama Prasad Mookerjee Port (Kolkata Dock System)",
        distance: "38 km",
        travelTime: "55 minutes",
        significance: "Crucial for import/export container drayage and customs bonded movements.",
      },
      {
        destination: "Netaji Subhash Chandra Bose International Airport (CCU)",
        distance: "48 km",
        travelTime: "60 minutes",
        significance: "Rapid transit for high-value air cargo and corporate leadership.",
      },
      {
        destination: "Uluberia Railway Junction",
        distance: "4.5 km",
        travelTime: "10 minutes",
        significance: "Enables dependable shift commuting for park operational workforce.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Inbound Freight Staging & OCR Registration",
        procedure: "Heavy trucks enter designated deceleration lane; guards capture vehicle registration number, driver Aadhaar/DL KYC, and digital seal status.",
        techEnabler: "OCR Number Plate Recognition & Handheld Tablet Logging",
      },
      {
        step: "Driver Health & Sobriety Screen",
        procedure: "Mandatory breathalyzer check for all long-haul drivers prior to raising electronic boom barrier into the marshalling yard.",
        techEnabler: "Calibrated Digital Breathalyzer Units",
      },
      {
        step: "Turnstile Biometric Shift Access",
        procedure: "Warehouse pickers and contract laborers authenticate via biometric fingerprint / facial scanners; zero manual paper registers.",
        techEnabler: "Full-Height Optical Turnstiles with Anti-Passback",
      },
      {
        step: "Outbound Dispatch Seal & Challan Sign-off",
        procedure: "Physical inspection of container bolt seals, comparison with ERP gate pass numbers, and dual verification by ACS supervisor and tenant dispatcher.",
        techEnabler: "Barcode Scanner & ERP API Sync",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Computerized Zero-Tare Calibration",
        description: "Mandatory zero-point verification before every gross and tare cycle, eliminating manual operator zero-suppression exploits.",
      },
      {
        protocol: "Under-Chassis Mirror & Cabin Searches",
        description: "Physical inspection using high-magnification trolley mirrors to ensure no concealed scrap or high-value pallets bypass weight logging.",
      },
      {
        protocol: "Tamper-Evident Bolt Seal Audits",
        description: "Checking that high-security bolt seals match bill of lading serial numbers down to the last digit; any cut or scratched seal triggers instant QRT halt.",
      },
      {
        protocol: "Dual-Signoff Custody Logs",
        description: "Digital weigh-slip requires cryptographic electronic confirmation from both the weighing officer and tenant shift logistics manager.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Synchronized RFID Patrol Wand Network",
        detail: "22 geofenced checkpoints stationed every 40 meters along boundary walls, with mandatory guard tours every 45 minutes during night hours.",
      },
      {
        feature: "High-Beam Infrared Perimeter Sweeps",
        detail: "Thermal and night-vision spot checks directed toward low-illumination marshland boundaries adjoining agrarian parcels.",
      },
      {
        feature: "24/7 Mobile Quick Reaction Vehicle (QRV)",
        detail: "Manned 4WD response vehicle equipped with VHF base stations, heavy searchlights, and first-aid kits stationed at the central gatehouse.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Uluberia Municipality / Howrah Industrial Belt)",
      applicableSchedule: "Commercial Establishments & Logistics Industry Schedule",
      ecrTransparency: "Monthly ECR TRRN receipts, EPFO member passbooks, and ESIC payment challans furnished with every tax invoice.",
      auditGuarantee: "ACS assumes 100% legal indemnity against joint statutory liabilities under the Contract Labour (R&A) Act.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Assistant Security Officer (ASO) / Shift In-Charge",
        ratioOrCount: "1 per shift (3 total)",
        responsibilities: "Overall gatehouse operations, liaison with park facility managers, ERP dispatch reconciliation.",
      },
      {
        role: "Main Gate Freight & Weighbridge Guards",
        ratioOrCount: "4 guards per shift",
        responsibilities: "Heavy vehicle boom barriers, chassis inspection, breathalyzer, weighbridge dual-signoff.",
      },
      {
        role: "Perimeter RFID Mobile Patrolling Guards",
        ratioOrCount: "2 guards per shift",
        responsibilities: "Continuous wand scanning, boundary fence checks, dock door seal verification.",
      },
      {
        role: "Turnstile & Visitor Concierge Guard",
        ratioOrCount: "1 guard per shift",
        responsibilities: "Biometric attendance verification, vendor visitor badges, baggage scanner monitoring.",
      },
    ],
    faqs: [
      {
        question: "Is ESR Uluberia located in West Bengal Wage Zone A or Zone B?",
        answer:
          "Uluberia Municipality is strictly classified as West Bengal Zone A under the Minimum Wages Act. ACS bills and pays all personnel in full compliance with Zone A rates plus PF, ESIC, and statutory bonuses.",
      },
      {
        question: "How do you manage peak truck congestion along the NH-16 frontage?",
        answer:
          "Our gate marshals use a pre-staging lane procedure that processes incoming documentation in under 50 seconds per vehicle, preventing tractor-trailers from spilling onto the highway service lane.",
      },
      {
        question: "Can ACS integrate with our tenant warehouse warehouse management software (WMS)?",
        answer:
          "Yes. Our supervisors are trained on major logistics software including SAP, Oracle WMS, and custom gatehouse cloud portals for real-time dispatch reconciliation.",
      },
    ],
  },
  {
    slug: "sfa-dankuni",
    name: "SFA Logistics & Industrial Park, Dankuni",
    parkDeveloper: "SFA Group (Eastern India Logistics & Warehousing)",
    tagline: "Dedicated Freight Corridor (EDFC) Terminal Security & High-Throughput Warehousing",
    location: "Dankuni Multi-Modal Logistics Belt, Hooghly, West Bengal",
    district: "Hooghly",
    wageZone: "Zone A",
    totalArea: "45+ Acres of High-Throughput Industrial & Distribution Facilities",
    heroHeadline: "Multi-Modal Freight Security & Anti-Shrinkage Operations for SFA Logistics Park, Dankuni",
    overview:
      "SFA Logistics & Industrial Park is situated at the epicenter of Eastern India's rail-and-road freight convergence in Dankuni, Hooghly. Located in immediate proximity to the Eastern Dedicated Freight Corridor (EDFC) terminus and National Highway 19, this hub processes massive volumes of consumer electronics, retail apparel, and industrial machinery. ACS delivers rigorous 24/7 gate security, computerized weighbridge management, and synchronized RFID perimeter tours.",
    proximities: [
      {
        destination: "National Highway 19 (NH-19 / Delhi Highway)",
        distance: "1.2 km",
        travelTime: "3 minutes",
        significance: "Direct connection across the Eastern and Northern industrial belts of India.",
      },
      {
        destination: "Eastern Dedicated Freight Corridor (EDFC) Dankuni Terminus",
        distance: "3.2 km",
        travelTime: "7 minutes",
        significance: "High-speed rail freight terminus connecting to Ludhiana and northern manufacturing.",
      },
      {
        destination: "Belghoria Expressway / Nivedita Setu",
        distance: "8.5 km",
        travelTime: "12 minutes",
        significance: "High-speed bypass directly entering North Kolkata, Salt Lake Sector V, and Rajarhat.",
      },
      {
        destination: "Netaji Subhash Chandra Bose International Airport (CCU)",
        distance: "21 km",
        travelTime: "30 minutes",
        significance: "Rapid transit for high-value priority consignments and leadership delegations.",
      },
      {
        destination: "Kolkata Port (Syama Prasad Mookerjee Port Docks)",
        distance: "26 km",
        travelTime: "40 minutes",
        significance: "Direct truck access to Kolkata dock basins via Kona Expressway / Vidyasagar Setu.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Gate Marshalling & Lane Categorization",
        procedure: "Segregation of inbound traffic into 'Full Truckload Delivery', 'Empty Container Pickup', and 'Staff/Visitor Vehicles'.",
        techEnabler: "Dual-lane Automated Barrier Gates & Overhead Lane Indicators",
      },
      {
        step: "Driver Biometric KYC & OTP Verification",
        procedure: "Driver mobile number and driving license registered; instant OTP match against tenant advance shipping notice (ASN).",
        techEnabler: "Cloud-Connected Handheld Security POS Devices",
      },
      {
        step: "Weighbridge Gross Weighing & Video Logging",
        procedure: "Truck positioned on 100-ton platform; automated cameras record front license plate, container rear seal, and cargo top profile.",
        techEnabler: "3-Camera Integrated Weighbridge CCTV Capture",
      },
      {
        step: "Exit Inspection & Seal Tamper Audit",
        procedure: "ACS guard compares tare slip with gate pass, cuts invalid temporary seals, and applies high-security serialized cable seals.",
        techEnabler: "Tamper-Evident High-Security Barcoded Cable Seals",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Automated Gross-Tare Cross Verification",
        description: "Zero tolerance for unexplained weight deviations above 0.1%; automated alerts sent to tenant loss prevention heads.",
      },
      {
        protocol: "Driver Cabin & Fuel Tank Inspection",
        description: "Checking auxiliary diesel fuel tanks and driver toolboxes to prevent hidden contraband or siphoned inventory removal.",
      },
      {
        protocol: "Independent Security Weighbridge Register",
        description: "ACS maintains an immutable physical logbook alongside digital records to cross-check third-party calibration certificates.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "18-Point RFID Perimeter Wand Network",
        detail: "Guards complete full perimeter circuit every 45 minutes, with electronic verification at railway spur fence lines.",
      },
      {
        feature: "Perimeter Solar Floodlight Health Checks",
        detail: "Guards log any lumen dips or dead lighting zones on the perimeter wall during the 20:00 and 02:00 inspection rounds.",
      },
      {
        feature: "Dedicated QRT Motorcycle Unit",
        detail: "Rapid response motorcycle patrolling park perimeter and internal roads for immediate intervention.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Dankuni Municipality / Hooghly Belt)",
      applicableSchedule: "Freight Logistics & Warehousing Schedule",
      ecrTransparency: "100% on-time EPFO and ESIC filing by the 15th of each month, with copies attached to monthly client billing.",
      auditGuarantee: "Zero legal non-compliances across past 10 years of industrial guarding operations in the Dankuni corridor.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Field Security Supervisor (Ex-Serviceman)",
        ratioOrCount: "1 per shift (3 total)",
        responsibilities: "Shift discipline, incident command, QRT dispatch, and client operations liaison.",
      },
      {
        role: "Weighbridge & Inbound Cargo Controllers",
        ratioOrCount: "3 guards per shift",
        responsibilities: "Gross-tare recording, chassis scanning, driver breathalyzer, and documentation sign-off.",
      },
      {
        role: "Perimeter Mobile Tour Guards",
        ratioOrCount: "2 guards per shift",
        responsibilities: "RFID wand patrol tours, railway boundary security, floodlight integrity.",
      },
    ],
    faqs: [
      {
        question: "Why is Zone A wage compliance critical in Dankuni?",
        answer:
          "Dankuni falls directly under West Bengal Zone A. Non-compliant agencies paying Zone B rates risk retrospective penalties, labor commissioner notices, and sudden gate strikes that disrupt supply chains.",
      },
      {
        question: "How do your guards handle emergency labor friction or strikes?",
        answer:
          "Our supervisors are trained in non-violent de-escalation, immediate gate hardening, and coordinated liaison with Dankuni police station to maintain dispatch continuity.",
      },
      {
        question: "Can ACS deploy armed guards at SFA Dankuni?",
        answer:
          "Yes, we provide licensed armed guards (retainer gunners) for high-value electronics, pharmaceuticals, and precious cargo warehousing.",
      },
    ],
  },
  {
    slug: "transindia-dankuni",
    name: "Transindia Logistics Park, Dankuni",
    parkDeveloper: "Transindia Real Estate (Allcargo Group)",
    tagline: "Grade-A Multimodal Supply Chain Security & Container Logistics Governance",
    location: "Delhi Road Axis, Dankuni, Hooghly, West Bengal",
    district: "Hooghly",
    wageZone: "Zone A",
    totalArea: "50+ Acres of Grade-A Industrial Real Estate",
    heroHeadline: "Enterprise Security & Container Integrity for Transindia Logistics Park, Dankuni",
    overview:
      "Transindia Logistics Park (developed by Allcargo Group) is an institutional Grade-A distribution hub on the Delhi Road corridor in Dankuni. Housing world-class fulfilment operations for multinational retail, automotive spare parts, and pharmaceuticals, this 50+ acre park requires comprehensive perimeter security, synchronized guard touring, advanced CCTV surveillance monitoring, and absolute statutory cleanliness.",
    proximities: [
      {
        destination: "National Highway 19 (NH-19 / Delhi Road)",
        distance: "0.5 km",
        travelTime: "2 minutes",
        significance: "Immediate arterial connectivity to the Golden Quadrilateral highway system.",
      },
      {
        destination: "Dankuni DFC Rail Yard",
        distance: "3.8 km",
        travelTime: "8 minutes",
        significance: "Direct intermodal interchange for rail container rakes.",
      },
      {
        destination: "Nivedita Setu / Belghoria Expressway",
        distance: "9.2 km",
        travelTime: "14 minutes",
        significance: "Express passage to Kolkata urban retail markets and Salt Lake.",
      },
      {
        destination: "Howrah Railway Station",
        distance: "18 km",
        travelTime: "30 minutes",
        significance: "Central passenger and parcel rail hub of Eastern India.",
      },
      {
        destination: "Netaji Subhash Chandra Bose International Airport (CCU)",
        distance: "23 km",
        travelTime: "35 minutes",
        significance: "Direct air freight route via Belghoria Expressway.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Inbound Manifest Validation",
        procedure: "Cross-checking commercial invoice, e-way bill numbers, and driver authorization before opening vehicle access barriers.",
        techEnabler: "QR Code E-Way Bill Reader & Tablet Portal",
      },
      {
        step: "Physical Container Seal Audit",
        procedure: "Inspection of ISO 17712 certified container seals for microscopic cuts, re-welding marks, or duplicate serial numbers.",
        techEnabler: "High-Intensity Macro Inspection Torches",
      },
      {
        step: "Biometric Workforce Entry",
        procedure: "All contract pickers, warehouse packers, and forklift operators enter through biometric turnstiles, preventing identity substitution.",
        techEnabler: "Biometric Optical Turnstiles",
      },
      {
        step: "Outbound Dual-Signoff Check",
        procedure: "Physical count of loaded pallets against warehouse dispatch challan, signed by tenant dispatcher and ACS gate sergeant.",
        techEnabler: "Digital Gate Register with Photo Proof",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Pre-Weighing Zero Baseline Check",
        description: "Checking that the weighbridge platform is completely clear of debris, mud, and external interference before truck ingress.",
      },
      {
        protocol: "Driver-Out-of-Cab Protocol",
        description: "Mandatory driver exit to the weighing booth during both tare and gross weighing to ensure uniform calibration.",
      },
      {
        protocol: "Automated Weight Drift Alerting",
        description: "Instant SMS/email alert sent to park facility management if tare weight varies by more than 25 kg compared to historical registry.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Synchronized Cloud RFID Patrol System",
        detail: "20 RFID tags scanned sequentially every 40 minutes along the estate's 2.6 km perimeter boundary.",
      },
      {
        feature: "Night QRT Mobile Patrol Unit",
        detail: "High-clearance patrol vehicle manned by an armed guard and supervisor conducting continuous sweeps of outer estate roads.",
      },
      {
        feature: "Emergency Siren & Intercom Stations",
        detail: "Immediate alarm stations installed at perimeter corners connected to the central gatehouse command station.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Dankuni Municipality)",
      applicableSchedule: "Commercial Logistics & Warehousing Schedule",
      ecrTransparency: "Full ECR transparency with EPF UAN credit confirmation and ESIC contribution schedules delivered monthly.",
      auditGuarantee: "Pass score guaranteed on all institutional and third-party statutory audits (e.g. PwC, EY, KPMG client audits).",
    },
    recommendedPersonnelStructure: [
      {
        role: "Security Officer & Compliance Lead",
        ratioOrCount: "1 dedicated estate in-charge",
        responsibilities: "Overall security administration, police liaison, client ECR submissions, and emergency planning.",
      },
      {
        role: "Gatehouse Controllers & Weighbridge Staff",
        ratioOrCount: "4 guards per shift (12 total)",
        responsibilities: "Vehicle ingress/egress, e-way bill verification, weighbridge dual-signoff, breathalyzer tests.",
      },
      {
        role: "Perimeter & Night Armed Patrol Gunners",
        ratioOrCount: "2 guards + 1 armed guard per shift",
        responsibilities: "Perimeter wand patrol, QRT escalation, armed protection of high-value transit stock.",
      },
    ],
    faqs: [
      {
        question: "How does ACS guarantee 100% compliance with West Bengal Zone A minimum wages?",
        answer:
          "All security personnel deployed at Transindia Dankuni are paid strictly via bank transfer under West Bengal Zone A wage rates. We provide clients with bank transaction logs, ECR receipts, and ESIC schedules prior to every invoice payment.",
      },
      {
        question: "What measures prevent cargo shrinkage at Transindia Dankuni?",
        answer:
          "We enforce a strict 4-point shrinkage control model: computerized weighbridge zero-calibration, driver-out-of-cab weigh rules, ISO 17712 container seal audits, and under-chassis mirror searches.",
      },
      {
        question: "How fast can you augment guarding manpower for seasonal e-commerce surges (e.g., Durga Puja / Diwali)?",
        answer:
          "With our permanent training center in Barrackpore and regional staging bench, we can scale guard strength by 20 to 50 additional verified guards within 48 to 72 hours for peak holiday surges.",
      },
    ],
  },
];

export const INDUSTRIAL_PARKS = WB_INDUSTRIAL_PARKS;

export function getAllIndustrialParks(): IndustrialParkData[] {
  return WB_INDUSTRIAL_PARKS;
}

export function getIndustrialParkBySlug(slug: string): IndustrialParkData | undefined {
  return WB_INDUSTRIAL_PARKS.find((p) => p.slug === slug);
}
