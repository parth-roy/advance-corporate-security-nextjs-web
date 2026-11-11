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
  // ─── Additional WBIDC / SEZ Industrial Parks (5 Added -> 8 Total) ─────────
  {
    slug: "panagarh-industrial-park",
    name: "Panagarh Industrial Park (WBIDC)",
    parkDeveloper: "West Bengal Industrial Development Corporation (WBIDC)",
    tagline: "NH-19 Heavy Manufacturing, Chemical, Fertilizer & Bulk Factory Manpower Hub",
    location: "Panagarh, Kanksa, Paschim Bardhaman, West Bengal",
    district: "Paschim Bardhaman",
    wageZone: "Zone A",
    totalArea: "1,445 Acres of Heavy & Medium Industrial Estate",
    heroHeadline: "Bulk Factory Workforce, Skilled Industrial Trades & Gate Security for Panagarh Industrial Park",
    overview:
      "Spanning 1,445 acres directly along National Highway 19 (old NH-2) in Paschim Bardhaman, WBIDC's Panagarh Industrial Park hosts anchor fertilizer, chemical, engineering, and textile installations near Kazi Nazrul Islam Airport (Andal). ACS provides CLRA-licensed factory floor helpers, ITI welders and fitters, HT/LT electricians, heavy rigging labor, and 24/7 anti-pilferage gate guarding.",
    proximities: [
      {
        destination: "National Highway 19 (NH-19 / GT Road)",
        distance: "0.3 km",
        travelTime: "Direct Access",
        significance: "Seamless freight connectivity linking Kolkata/Dankuni with Jharkhand and North India.",
      },
      {
        destination: "Kazi Nazrul Islam Airport (Andal)",
        distance: "18 km",
        travelTime: "22 minutes",
        significance: "Regional air cargo and corporate executive transit corridor.",
      },
      {
        destination: "Durgapur Industrial Hub",
        distance: "16 km",
        travelTime: "20 minutes",
        significance: "Access to steel/alloy ancillary network and ACS Durgapur Command Desk.",
      },
      {
        destination: "Panagarh Railway Freight Station",
        distance: "3.5 km",
        travelTime: "8 minutes",
        significance: "Raw material rake handling and rail siding logistics.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Hazchem & Tanker Safety Inspection",
        procedure: "Checking spark arrestors, Hazchem placards, driver PPE, and breathalyzer clearance before chemical plant ingress.",
        techEnabler: "Digital Safety Checklist Tablets & ATEX Torches",
      },
      {
        step: "Contract Laborer Biometric Form-B Screening",
        procedure: "Every factory helper, fitter, and loader authenticates via biometric turnstiles ensuring zero unauthorized entry.",
        techEnabler: "Biometric Optical Turnstiles synced to CLRA Muster Roll",
      },
      {
        step: "Outbound Raw Material & Scrap Audit",
        procedure: "Gross-tare weighbridge matching against dispatch ERP challans and serialized gate-pass verification.",
        techEnabler: "Weighbridge Dual-Custody Logger",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Bulk Fertilizer & Bagged Dispatch Tally",
        description: "Physical bag/pallet tally at dock doors cross-checked against computer weighbridge gross weights.",
      },
      {
        protocol: "Authorized Tool & Copper Scrap Escort",
        description: "Strict gate-pass control over electrical cables, valve scrap, and engineering spares leaving manufacturing blocks.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "High-Mast Boundary RFID Sweeps",
        detail: "Synchronized 45-minute motorized and foot patrols along boundary walls adjoining NH-19 and feeder roads.",
      },
      {
        feature: "Plant Night Supervision Audits",
        detail: "Twice-weekly surprise midnight audits by ACS Field Officers ensuring 100% post alertness.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (WBIDC Notified Industrial Park, Paschim Bardhaman)",
      applicableSchedule: "Scheduled Employment: Heavy Engineering, Chemicals & Manufacturing",
      ecrTransparency: "Monthly EPFO ECR challan with UAN breakdown and ESIC remittance schedule delivered with every tax invoice.",
      auditGuarantee: "100% Principal Employer indemnification under Section 21 of the Contract Labour (R&A) Act.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Site Manpower Coordinator & Compliance Officer",
        ratioOrCount: "1 dedicated plant coordinator",
        responsibilities: "CLRA Form-V muster tracking, PPE enforcement, shift handover coordination.",
      },
      {
        role: "Factory Helpers, Bagging & Loading Laborers",
        ratioOrCount: "20 to 150+ per plant roster",
        responsibilities: "Production line assistance, raw material feeding, warehouse palletization, truck loading.",
      },
      {
        role: "Licensed Industrial Electricians, Welders & Guards",
        ratioOrCount: "Scaled to plot acreage",
        responsibilities: "HT/LT panel maintenance, pipe fitting, and 24/7 perimeter & gate control.",
      },
    ],
    faqs: [
      {
        question: "Can ACS mobilize factory floor helpers and ITI trades at Panagarh Industrial Park within 48 hours?",
        answer:
          "Yes. From our nearby Durgapur-Andal staging hub, ACS deploys tested factory helpers, ITI fitters/welders, electricians, and PSARA guards within 24 to 48 hours.",
      },
      {
        question: "Which wage zone applies to Panagarh Industrial Park?",
        answer:
          "Notified industrial estates under WBIDC/ADDA in the Durgapur-Panagarh corridor are remunerated under West Bengal Zone A schedules with 13% EPF and 3.25% ESIC.",
      },
    ],
  },
  {
    slug: "vidyasagar-industrial-park",
    name: "Vidyasagar Industrial Park, Kharagpur (WBIDC)",
    parkDeveloper: "West Bengal Industrial Development Corporation (WBIDC)",
    tagline: "1,166-Acre Heavy Machinery, Engineering & Haldia-Linked Manufacturing Hub on NH-16",
    location: "Kharagpur, Paschim Medinipur, West Bengal",
    district: "Paschim Medinipur",
    wageZone: "Zone A",
    totalArea: "1,166 Acres of Heavy Industrial & Engineering Estate",
    heroHeadline: "Skilled Machine Operators, Rigging Labor & Plant Security for Vidyasagar Industrial Park",
    overview:
      "Strategically developed across 1,166 acres along NH-16 (old NH-6) just 60 km from Haldia Port, WBIDC's Vidyasagar Industrial Park hosts earthmoving machinery giants, auto-ancillaries, and heavy engineering plants. ACS deploys CNC/lathe helpers, ITI welders, heavy shifting crews, industrial plumbers, and PSARA security forces.",
    proximities: [
      {
        destination: "National Highway 16 (NH-16 / Bombay Road)",
        distance: "0.5 km",
        travelTime: "2 minutes",
        significance: "Direct heavy-haul freight link toward Kolkata, Odisha, and Mumbai.",
      },
      {
        destination: "Haldia Deep-Water Port",
        distance: "60 km",
        travelTime: "75 minutes",
        significance: "Primary export-import ocean terminal for industrial machinery.",
      },
      {
        destination: "Kharagpur Railway Junction",
        distance: "8 km",
        travelTime: "15 minutes",
        significance: "Major eastern rail logistics hub and IIT Kharagpur talent corridor.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Heavy ODC Vehicle & Component Manifest Audit",
        procedure: "Escort logging for over-dimensional machinery trailers, spare components, and factory dispatch passes.",
        techEnabler: "Digital Gate Register & Barcode Challan Sync",
      },
      {
        step: "Shop-Floor PPE & Safety Helmet Gate Enforcement",
        procedure: "Mandatory steel-toe boots, safety vest, and hardhat checks for all third-party contractors.",
        techEnabler: "Daily Safety Induction Tracking",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Ferrous Scrap & Turning Swarf Segregation Audits",
        description: "Supervision of high-value steel scrap weighing and certified carrier dispatch to eliminate metal pilferage.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "24/7 Perimeter Boundary Patrols",
        detail: "RFID checkpoint patrols covering expansive 10+ acre industrial plot perimeters and equipment yards.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Kharagpur Notified Industrial Corridor)",
      applicableSchedule: "Engineering, Heavy Machinery & Metal Trades Schedule",
      ecrTransparency: "Zero-defect monthly EPFO ECR & ESIC statutory dossier provided to plant HR heads.",
      auditGuarantee: "Complete CLRA Form-V Principal Employer compliance assurance.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Skilled ITI Fitters, Welders & Crane Helpers",
        ratioOrCount: "10 to 80 per engineering bay",
        responsibilities: "Fabrication support, component assembly, material rigging, and floor maintenance.",
      },
      {
        role: "PSARA Industrial Guards & Weighbridge Controllers",
        ratioOrCount: "4 per shift",
        responsibilities: "Access screening, tool-room loss prevention, and trailer weighment audit.",
      },
    ],
    faqs: [
      {
        question: "Do you supply specialized engineering labor and welders in Kharagpur?",
        answer:
          "Yes. ACS supplies ITI-certified welders, structural fabricators, assembly helpers, and maintenance electricians for facilities across Vidyasagar Industrial Park and Kharagpur.",
      },
    ],
  },
  {
    slug: "bantala-leather-complex",
    name: "Bantala Kolkata Leather Complex (KLC)",
    parkDeveloper: "West Bengal Industrial Infrastructure Development / MLCL",
    tagline: "1,150-Acre Integrated Leather, Footwear, Export Processing & IT Hub in East Kolkata",
    location: "Bantala, South 24 Parganas / East Kolkata, West Bengal",
    district: "South 24 Parganas",
    wageZone: "Zone A",
    totalArea: "1,150 Acres (400+ Operational Export Units & IT Zones)",
    heroHeadline: "Bulk Factory Labor, ETP Utility Staff, Loading Gangs & Security for Bantala Leather Complex",
    overview:
      "Asia's largest integrated leather complex across 1,150 acres on the Basanti Highway corridor east of EM Bypass, Bantala houses hundreds of export-oriented tanneries, footwear manufacturing units, effluent treatment plants (CETPs), and emerging IT parks. ACS supplies bulk production helpers, packing/container loading teams, ETP plumbing/mechanical technicians, and 24/7 export gate security.",
    proximities: [
      {
        destination: "EM Bypass (Science City – Ruby Crossing)",
        distance: "14 km",
        travelTime: "22 minutes",
        significance: "Direct urban link to Central Kolkata and Sector V IT Hub.",
      },
      {
        destination: "Kolkata Port (Netaji Subhas Dock)",
        distance: "24 km",
        travelTime: "40 minutes",
        significance: "Export container haulage corridor via Maa Flyover / Taratala.",
      },
      {
        destination: "Salt Lake Sector V",
        distance: "12 km",
        travelTime: "20 minutes",
        significance: "Rapid commute corridor for IT & managerial workforce.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Export Carton Sealing & Customs Manifest Match",
        procedure: "Verification of finished leather & footwear export container seals against factory packing lists.",
        techEnabler: "Digital Gate Register with Seal Photo Proof",
      },
      {
        step: "Shift Attendance & Contractor Turnstile Control",
        procedure: "Biometric shift check-in for batch production workers, helpers, and chemical handling crews.",
        techEnabler: "Aadhaar/Biometric Attendance Logging",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Finished Export Goods & Chemical Inventory Control",
        description: "Strict gate-pass auditing preventing unauthorized pilferage of finished hides, dyes, and leather accessories.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "ETP Utility & Perimeter Night Rounds",
        detail: "24/7 patrolling covering tannery loading docks, chemical warehouses, and perimeter lanes.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Bantala KLC Notified Industrial Estate / KMDA)",
      applicableSchedule: "Leather, Tannery, Export Goods & Commercial IT Schedule",
      ecrTransparency: "Full EPF 13%, ESIC 3.25%, and WB LWF documentation supporting buyer CSR / SA8000 social audits.",
      auditGuarantee: "Audit-ready wage & welfare records tailored for European and US export buyer compliance inspections.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Packing, Sorting & Container Loading Crews",
        ratioOrCount: "10 to 100+ per export factory",
        responsibilities: "Export carton packing, container stuffing, material movement, and floor cleanliness.",
      },
      {
        role: "ETP Plumbers, Electricians & PSARA Sentries",
        ratioOrCount: "Tailored per unit shift",
        responsibilities: "Effluent pump operation, electrical switchboard upkeep, and gate access control.",
      },
    ],
    faqs: [
      {
        question: "Do your compliance records pass European/US export buyer social audits (BSCI / SEDEX) at Bantala?",
        answer:
          "Yes. Our payroll files provide complete bank payment proofs, verified ECRs, ESIC cards, age verification, and weekly rest day reliever logs required by international footwear and leather audit standards.",
      },
    ],
  },
  {
    slug: "falta-sez",
    name: "Falta Special Economic Zone (FSEZ)",
    parkDeveloper: "Ministry of Commerce & Industry (FSEZ Authority)",
    tagline: "Eastern India's Export Processing SEZ Manpower, Customs Gate & Packing Workforce Hub",
    location: "Falta, Sector II–IV, South 24 Parganas, West Bengal",
    district: "South 24 Parganas",
    wageZone: "Zone A",
    totalArea: "275+ Acres of Multi-Product Export Processing SEZ",
    heroHeadline: "SEZ-Verified Assembly Workforce, Export Loaders & Customs Gate Security for Falta SEZ",
    overview:
      "Located along the Hooghly Riverfront in South 24 Parganas, Falta SEZ houses leading export-oriented units manufacturing engineering products, food & agro-commodities, apparel, plastics, and pharmaceuticals. Operating inside a Customs-bonded zone requires police-cleared contract personnel, seamless container loading/stuffing labor, HVAC/MEP upkeep, and strict SEZ pass accountability.",
    proximities: [
      {
        destination: "Diamond Harbour Road (NH-117)",
        distance: "9 km",
        travelTime: "15 minutes",
        significance: "Main highway link northward toward Budge Budge and Kolkata.",
      },
      {
        destination: "Kolkata Port (Syama Prasad Mookerjee Port)",
        distance: "45 km",
        travelTime: "70 minutes",
        significance: "Container drayage corridor for customs-sealed export cargo.",
      },
      {
        destination: "Budge Budge Industrial Hub",
        distance: "28 km",
        travelTime: "45 minutes",
        significance: "Linked coastal & oil logistics belt.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "SEZ Customs Gate Pass Reconciliation",
        procedure: "Verification of temporary contractor passes, bonded cargo shipping bills, and exit security clearance.",
        techEnabler: "Digital Visitor & Contractor Pass Register",
      },
      {
        step: "Frisking & Finished Export Protection",
        procedure: "Trained male/female frisking sentries conducting shift-end checks for export manufacturing units.",
        techEnabler: "HHMD Screening & Biometric Shift Logs",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Customs Container Seal Verification",
        description: "End-to-end logging of bottle seal serial numbers and loaded carton tallies at SEZ loading bays.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Riverfront & Warehouse Perimeter Security",
        detail: "Synchronized guard tours protecting customs bonded godowns and power backup zones.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone A (Falta SEZ Notified Industrial Zone)",
      applicableSchedule: "SEZ Manufacturing & Export Logistics Schedule",
      ecrTransparency: "Zero-defect monthly ECR & ESIC schedules ready for SEZ Development Commissioner reviews.",
      auditGuarantee: "100% police-verified labor force ensuring hassle-free SEZ ID card issuance.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Export Production Helpers & Container Loaders",
        ratioOrCount: "15 to 120 per unit",
        responsibilities: "Sorting, shrink-wrapping, palletizing, and bonded container loading.",
      },
      {
        role: "Technical MEP & Female Frisking / Security Staff",
        ratioOrCount: "6 to 20 per shift",
        responsibilities: "Chiller/electrical maintenance, gate frisking, and round-the-clock unit security.",
      },
    ],
    faqs: [
      {
        question: "Can ACS provide police-verified workers eligible for Falta SEZ customs entry passes?",
        answer:
          "Yes. Every ACS worker deployed in Falta SEZ carries verified Aadhaar KYC, police clearance dossiers, and ESIC cards enabling smooth SEZ pass issuance.",
      },
    ],
  },
  {
    slug: "barjora-industrial-park",
    name: "Barjora Industrial Park (WBIDC)",
    parkDeveloper: "West Bengal Industrial Infrastructure Development Corp (WBIIDC)",
    tagline: "Bankura's Heavy Sponge Iron, Ferro-Alloy, Plastic & Engineering Growth Centre",
    location: "Barjora, Bankura District (Durgapur Link Highway), West Bengal",
    district: "Bankura",
    wageZone: "Zone B",
    totalArea: "300+ Acres of Medium & Heavy Industrial Growth Centre",
    heroHeadline: "Foundry Helpers, Maintenance Fitters & Loss Prevention Security for Barjora Industrial Park",
    overview:
      "Located just south of the Damodar River opposite Durgapur, Barjora Industrial Park is Bankura's flagship industrial cluster, anchored by ferro-alloy units, sponge iron plants, rolling mills, polymer factories, and logistics yards. ACS extends Durgapur-backed rapid deployment to supply furnace helpers, ITI fitters/electricians, weighbridge auditors, and armed/unarmed guards.",
    proximities: [
      {
        destination: "Durgapur Industrial City (via Durgapur Barrage)",
        distance: "14 km",
        travelTime: "20 minutes",
        significance: "Direct bridge connection to NH-19 and ACS Durgapur Command Desk.",
      },
      {
        destination: "Bankura Town",
        distance: "34 km",
        travelTime: "45 minutes",
        significance: "District administrative headquarters and regional labor workforce pool.",
      },
      {
        destination: "Mejia Thermal Power Station (DVC)",
        distance: "18 km",
        travelTime: "25 minutes",
        significance: "Industrial power & fly-ash supply synergy.",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Coal, Iron Ore & Finished Alloy Weighbridge Gate Check",
        procedure: "Dual verification of inward mineral trucks and outward steel ingot/alloy dispatches.",
        techEnabler: "Digital Weighbridge Register & Under-Vehicle Mirrors",
      },
      {
        step: "PPE & Foundry Heat-Zone Safety Audit",
        procedure: "Checking protective footwear, masks, and reflective gear at rolling mill entry gates.",
        techEnabler: "Shift Supervisor Inspection Logs",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Ferro-Alloy & Metal Billet Theft Deterrence",
        description: "Armed patrol supervision and strict driver-out-of-cab weighing protocols minimizing metal shrinkage.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Motorized Boundary Patrol & Raw Material Yard Watch",
        detail: "24/7 watchtowers and patrol circuits protecting bulk mineral dumps and substation transformers.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "West Bengal Zone B (Bankura Rural Industrial Block)",
      applicableSchedule: "Scheduled Employment: Iron & Steel Foundries, Engineering & General Labor",
      ecrTransparency: "Monthly EPFO ECR, ESIC cards, and WB LWF records furnished transparently with every bill.",
      auditGuarantee: "Full CLRA Form-V indemnity shielding factory owners against joint labor liabilities.",
    },
    recommendedPersonnelStructure: [
      {
        role: "Factory Helpers, Loaders & Rolling Mill Hands",
        ratioOrCount: "15 to 100 per unit",
        responsibilities: "Material feeding, finished goods bundling, scrap clearing, and warehouse loading.",
      },
      {
        role: "Electricians, Fitters & Weighbridge Security",
        ratioOrCount: "Scaled per furnace shift",
        responsibilities: "Panel/motor maintenance, weighbridge calibration checks, and 24/7 perimeter guarding.",
      },
    ],
    faqs: [
      {
        question: "How fast can ACS deploy factory manpower to Barjora Industrial Park?",
        answer:
          "Because Barjora is just 20 minutes across the Damodar Barrage from our Durgapur Operations Command, ACS mobilizes vetted factory helpers, electricians, and security guards within 24 to 48 hours.",
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
