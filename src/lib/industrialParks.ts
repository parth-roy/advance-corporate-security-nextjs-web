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
  wageZone: "Zone A" | "Zone B" | "Zone I" | "Zone II" | "Zone III" | "Zone 1" | "Zone 2" | "Zone 3";
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
      "ESR Uluberia is one of Eastern India's most modern Grade-A institutional logistics parks, strategically located along National Highway 16 in Howrah and directly benefiting from the West Bengal Investment Promotion Policy 2026 (WBIP 2026) logistics and industrial corridor incentives. Hosting multinational 3PL operators, e-commerce distribution centers, and national FMCG supply chains, ESR Uluberia demands rigorous single-vendor governance: rapid freight truck ingress, zero dock queueing, 100% weighbridge integrity, certified warehouse loading/unloading & Hamali manpower, and absolute alignment with West Bengal Zone A statutory labor wages.",
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
      "SFA Logistics & Industrial Park is situated at the epicenter of Eastern India's rail-and-road freight convergence in Dankuni, Hooghly, within the priority expansion belt of the West Bengal Investment Promotion Policy 2026 (WBIP 2026). Located in immediate proximity to the Eastern Dedicated Freight Corridor (EDFC) terminus and National Highway 19, this hub processes massive volumes of consumer electronics, retail apparel, and industrial machinery. ACS delivers integrated single-vendor 24/7 gate security, computerized weighbridge management, synchronized RFID perimeter tours, and statutory warehouse pickers, loaders, and electrical/MEP maintenance teams.",
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



export const MAHARASHTRA_INDUSTRIAL_PARKS: IndustrialParkData[] = [
  {
    slug: "chakan-midc",
    name: "Chakan MIDC Industrial Area (Phases I–V)",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Automotive OEM, EV Powertrains & High-Security Gate Logistics in Chakan",
    location: "Chakan Industrial Area, Pune District, Maharashtra",
    district: "Pune",
    wageZone: "Zone I",
    totalArea: "7,500+ Acres across Phases I, II, III, IV & V",
    heroHeadline: "Integrated Industrial Workforce, Assembly Technicians & PSARA Security for Chakan MIDC",
    overview:
      "Chakan MIDC is the nerve center of Indian automotive manufacturing, housing global OEMs including Mercedes-Benz, Volkswagen Group, Bajaj Auto, and Mahindra. ACS operates as an Integrated B2B Workforce & Facility Partner, deploying automated ANPR gate security, dispute-free loading gangs, licensed HT electricians, and assembly helpers.",
    proximities: [
      {
        destination: "Pune City Center / Railway Station",
        distance: "32 km",
        travelTime: "50 mins",
        significance: "Corporate HQ and senior engineering talent transit corridor",
      },
      {
        destination: "JNPT Nhava Sheva Sea Port",
        distance: "128 km",
        travelTime: "2 hrs 30 mins",
        significance: "Primary maritime export gateway for CKD/CBU automobile shipments",
      },
      {
        destination: "Talegaon Industrial Area",
        distance: "18 km",
        travelTime: "30 mins",
        significance: "Heavy fabrication and tier-1 vendor supply chain link",
      },
      {
        destination: "Bhosari / PCMC MSME Cluster",
        distance: "20 km",
        travelTime: "35 mins",
        significance: "Precision machining, tooling and press component hub",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Automated ANPR & FASTag Vehicle Gate Logging",
        procedure:
          "High-speed automatic number plate recognition cross-checked against ERP dispatch manifests with driver biometric capture.",
        techEnabler: "Optical ANPR Cameras & Automated Heavy-Duty Boom Barriers",
      },
      {
        step: "Dual-Sentry Dock & Under-Vehicle Inspection",
        procedure:
          "Undercarriage trolley mirrors, cargo bolt seal verification, and digital seal serialization logging before trailer entry.",
        techEnabler: "High-Resolution Under-Vehicle Inspection System (UVIS)",
      },
      {
        step: "Mathadi-Exempt Mechanized Material Handling",
        procedure:
          "Unloading operations handled exclusively by certified forklift and reach truck operators under Section 5 captive handling compliance.",
        techEnabler: "Digital Dock Scheduling & Fleet Management Interface",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Dual-Scale Gross/Tare Audit",
        description:
          "Mandatory randomized re-weighing on certified 100-ton electronic weighbridges to prevent scrap pilferage and raw steel skimming.",
      },
      {
        protocol: "Anti-Tampering Magnet & Sensor Scan",
        description:
          "Inspection of weighbridge load-cells and junction boxes with anti-tamper security seals logged daily.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Motorized Highway & Boundary Patrol",
        detail:
          "Armed ex-servicemen patrols operating along perimeter fences and adjacent highway bottlenecks to suppress BNS Section 112 cargo theft.",
      },
      {
        feature: "GPS Roving Night Quick Reaction Teams (QRT)",
        detail:
          "High-speed interceptor vehicles equipped with VHF comms and emergency medical response gear stationed at main industrial junctions.",
      },
      {
        feature: "Thermal PTZ Perimeter Surveillance",
        detail:
          "Night-vision thermal cameras integrated with fence vibration sensors detecting unauthorized breach attempts in real-time.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Engineering & Commercial Schedules)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Engineering Schedule (₹16,800 to ₹19,240/mo)",
      ecrTransparency: "Monthly EPF ECR, ESIC challans, and MLWF filings submitted with every tax invoice",
      auditGuarantee: "100% legal indemnity protecting the factory Occupier under Factories Act Section 2(n)",
    },
    recommendedPersonnelStructure: [
      {
        role: "Assistant Security Officer (ASO) / Shift In-Charge",
        ratioOrCount: "1 Per 8-Hour Shift",
        responsibilities: "Gate operations oversight, emergency response coordination, and local police liaison.",
      },
      {
        role: "Gate & Weighbridge Security Sentries",
        ratioOrCount: "4 to 8 Personnel per Gate",
        responsibilities: "Inward/outward material gate passes, UVIS scanning, and driver breathalyzer screening.",
      },
      {
        role: "Certified Industrial Electricians (HT/LT)",
        ratioOrCount: "2 to 4 Per Plant",
        responsibilities: "Substation 33kV switchgear, transformer monitoring, and DG set synchronization.",
      },
      {
        role: "Mechanized Material Handling Operators",
        ratioOrCount: "10 to 50 Per Shift",
        responsibilities: "Reach truck driving, container palletization, and dock leveler operation.",
      },
    ],
    faqs: [
      {
        question: "How does ACS eliminate Mathadi union extortion at factory gates in Chakan?",
        answer:
          "ACS equips client facilities with certified mechanized handling equipment (forklifts, powered pallet trucks) operated by trained internal staff. Under Section 5 and Section 22 of the Mathadi Act, this mechanical material handling is legally distinct from manual headloading, preventing unauthorized toli extortion.",
      },
      {
        question: "Can ACS supply assembly line operators for automotive plants in Chakan?",
        answer:
          "Yes. ACS deploys pre-screened, trade-tested assembly helpers, spot welding assistants, and machine operators with full statutory CLRA licensing and EHS safety certifications within 24 to 48 hours.",
      },
    ],
  },
  {
    slug: "butibori-five-star-midc",
    name: "Butibori Five-Star MIDC Industrial Area",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Heavy Metallurgy, Transmission Towers & Multi-Modal Freight Security in Nagpur",
    location: "Butibori Industrial Area, Nagpur District, Maharashtra",
    district: "Nagpur",
    wageZone: "Zone I",
    totalArea: "2,428 Hectares (~6,000 Acres)",
    heroHeadline: "Heavy Industry Workforce, Blast Furnace Labor & Security for Butibori 5-Star MIDC",
    overview:
      "Spanning over 2,428 hectares, Butibori is one of Asia largest industrial estates, housing steel mills, transmission tower fabricators, paper complexes, and textile manufacturers. ACS operates as an Integrated Industrial Partner, providing metallurgy helpers, rail-siding labor, weighbridge guards, and 24x7 security.",
    proximities: [
      {
        destination: "Nagpur City Center & Railway Junction",
        distance: "28 km",
        travelTime: "40 mins",
        significance: "Major freight railway junction on Central & South East Central Railway",
      },
      {
        destination: "MIHAN SEZ & Multi-Modal Cargo Hub",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "Air cargo transshipment and Boeing/Dassault aerospace node",
      },
      {
        destination: "Wardha Heavy Industrial Area",
        distance: "45 km",
        travelTime: "50 mins",
        significance: "Heavy steel forging and agricultural machinery corridor",
      },
      {
        destination: "Chandrapur Cement & Power Hub",
        distance: "130 km",
        travelTime: "2 hrs 15 mins",
        significance: "Primary source of thermal coal, lime, and raw cement clinker",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "100-Ton Weighbridge Dual Gross/Tare Screening",
        procedure:
          "Automated weighing linked to weighbridge software with zero driver intervention to prevent scrap and steel theft.",
        techEnabler: "Digital Electronic Weighbridge System with CCTV Snapshot Logging",
      },
      {
        step: "Material Gate Pass Digitization",
        procedure:
          "RFID barcode verification of raw scrap inputs and finished structural steel consignments.",
        techEnabler: "Handheld RFID Terminals & ERP Cloud Gateway",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Under-Chassis Scrap Concealment Search",
        description:
          "Physical inspection of truck battery boxes, spare tire wells, and false toolboxes before exit tare weighing.",
      },
      {
        protocol: "Randomized Tare Calibration",
        description:
          "Random zero-weight calibration checks between consecutive truck weighings to prevent software fraud.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Extensive Boundary Wall Watch",
        detail:
          "High-mast searchlight sentry posts and roving motorized patrols along Butibori expansive 2,428-hectare perimeter.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I / MIDC Group D+ Special Incentive Zone",
      applicableSchedule: "Maharashtra Minimum Wages Act — Engineering Schedule",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and Group D+ incentive documentation assistance",
      auditGuarantee: "Zero statutory liability for the Principal Employer under CLRA Section 21(4)",
    },
    recommendedPersonnelStructure: [
      {
        role: "Heavy Metallurgy Security Guard",
        ratioOrCount: "10 to 30 Guards per Facility",
        responsibilities: "Furnace gate access, scrap yard sentry, and weighbridge verification.",
      },
      {
        role: "High-Heat Furnace & Rigging Helpers",
        ratioOrCount: "20 to 100 Personnel per Plant",
        responsibilities: "Blast furnace assistance, slag raking, heavy plate lashing, and crane rigging.",
      },
      {
        role: "Licensed Industrial Electrician",
        ratioOrCount: "2 to 6 Technicians",
        responsibilities: "Substation maintenance, arc furnace switchgear, and capacitor bank monitoring.",
      },
    ],
    faqs: [
      {
        question: "Can ACS handle rail-siding cargo loading in Butibori?",
        answer:
          "Yes. ACS provides 24x7 bulk labor gangs for box-wagon and flat-car loading of steel coils, transmission angles, and bulk bags with dedicated safety foremen.",
      },
      {
        question: "What are the safety standards for ACS workers in Butibori heavy industry?",
        answer:
          "All workers deployed to metallurgy and fabrication plants undergo mandatory safety induction covering molten metal PPE, heat exhaustion mitigation, safety harnesses, and Factories Act Rule 73 compliance.",
      },
    ],
  },
  {
    slug: "auric-shendra-bidkin",
    name: "AURIC Shendra – Bidkin Smart Industrial City",
    parkDeveloper: "Aurangabad Industrial Township Limited (AITL) / DMIC",
    tagline: "DMIC 10,000-Acre Greenfield Smart City Workforce & High-Tech Security",
    location: "AURIC City, Chhatrapati Sambhajinagar District, Maharashtra",
    district: "Chhatrapati Sambhajinagar",
    wageZone: "Zone I",
    totalArea: "10,000 Acres (Shendra & Bidkin Nodes)",
    heroHeadline: "Smart City Workforce, Industrial Electricians & Security for AURIC Shendra-Bidkin",
    overview:
      "AURIC is India first planned greenfield smart industrial city under the Delhi-Mumbai Industrial Corridor (DMIC), featuring 10,000 acres of underground plug-and-play utilities, optical fiber networking, and smart drainage. ACS provides high-tech facility management, electrical technicians, and PSARA security.",
    proximities: [
      {
        destination: "Chhatrapati Sambhajinagar Airport / Railway",
        distance: "15 km",
        travelTime: "20 mins",
        significance: "Domestic air cargo and express rail passenger connections",
      },
      {
        destination: "Samruddhi Mahamarg (Expressway)",
        distance: "5 km",
        travelTime: "8 mins",
        significance: "Direct 4-hour expressway transit to JNPT Port and Mumbai MMR",
      },
      {
        destination: "Waluj Industrial Area",
        distance: "30 km",
        travelTime: "45 mins",
        significance: "Two-wheeler and automotive component supplier ecosystem",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Smart City RFID Gate Card Verification",
        procedure:
          "Centralized smart city ID badge integration with automated biometric turnstiles.",
        techEnabler: "AURIC Integrated City Command Center (ICCC) Gateway",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Integrated Smart Weighbridge Data Feed",
        description:
          "Direct electronic transfer of weighbridge readings to corporate cloud ERP with zero manual entry.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Smart City Geofenced Mobile Patrols",
        detail:
          "Electric patrol vehicles equipped with real-time GPS tracking and live video feed to ACS Command Desk.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Engineering & S&E Schedules)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Engineering Schedule",
      ecrTransparency: "100% digital wage slips, EPF ECRs, and ESIC records generated monthly",
      auditGuarantee: "Full statutory indemnity for foreign MNCs and domestic OEMs in AURIC",
    },
    recommendedPersonnelStructure: [
      {
        role: "Smart Utility Maintenance Technician",
        ratioOrCount: "4 to 12 Technicians",
        responsibilities: "Underground electrical cable diagnostics, transformer maintenance, and STP operation.",
      },
      {
        role: "EV Assembly & Cleanroom Blue-Collar Staff",
        ratioOrCount: "20 to 150 Personnel",
        responsibilities: "Precision wiring harness assembly, battery module handling, and cleanroom sanitization.",
      },
    ],
    faqs: [
      {
        question: "Does ACS support international MNCs establishing plants in AURIC?",
        answer:
          "Yes. ACS provides multinational enterprises with bilingual supervisors, international EHS-compliant safety protocols, and fully audited statutory wage dossiers conforming to global ESG guidelines.",
      },
    ],
  },
  {
    slug: "taloja-midc",
    name: "Taloja Industrial Area (MIDC Red Zone)",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Hazchem Safety, Petrochemical Manpower & Industrial Fire Defense in Taloja",
    location: "Taloja MIDC, Raigad District, Maharashtra",
    district: "Raigad",
    wageZone: "Zone I",
    totalArea: "2,140+ Acres (Specialty Chemical, Fertilizer & Pharma Zone)",
    heroHeadline: "Hazchem Trained Blue-Collar Labor, ETP Technicians & Security for Taloja MIDC",
    overview:
      "Taloja MIDC is Maharashtra premier Red Zone chemical and metallurgical estate, housing major fertilizer plants, chemical synthesizers, and cold chain logistics. ACS provides certified Hazchem helpers, Effluent Treatment Plant (ETP) operators, fire safety wardens, and PSARA security.",
    proximities: [
      {
        destination: "JNPT Nhava Sheva Sea Port",
        distance: "30 km",
        travelTime: "45 mins",
        significance: "Critical port link for chemical and fertilizer liquid bulk export/import",
      },
      {
        destination: "Navi Mumbai International Airport (NMIA)",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "New international air cargo and corporate logistics corridor",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Hazchem Tanker Safety Inspection",
        procedure:
          "Checking spark arrestors, earthing clamps, emergency shut-off valves, and TREM cards before chemical tanker entry.",
        techEnabler: "Digital Hazchem Inward Verification Checklist on Ruggedized Tablets",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Chemical Tanker Dip-Rod & Gross Verification",
        description:
          "Dual verification of dip-rod liquid levels and electronic weighbridge gross metrics to prevent solvent skimming.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Gas Leak & Fire Hazard Sentry Rounds",
        detail:
          "Security patrols equipped with multi-gas detectors and thermal imaging cameras to identify chemical leaks early.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Engineering & Chemical Schedules)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Chemical & Engineering Schedule",
      ecrTransparency: "100% EPF, ESIC, and MLWF compliance with certified Hazchem hazard allowances",
      auditGuarantee: "Strict Factories Act Occupier liability protection under Section 41B & Section 92",
    },
    recommendedPersonnelStructure: [
      {
        role: "Hazchem Trained Chemical Handler",
        ratioOrCount: "10 to 40 per Chemical Unit",
        responsibilities: "Drum filling, solvent transfer, scrubber monitoring, and emergency spill containment.",
      },
      {
        role: "Certified Industrial Fire Safety Warden",
        ratioOrCount: "2 to 4 per Shift",
        responsibilities: "Hydrant testing, fire extinguisher audit, and Form B compliance verification.",
      },
    ],
    faqs: [
      {
        question: "Can ACS assist with Form B biannual fire safety audits in Taloja?",
        answer:
          "Yes. ACS facility teams conduct pre-audit inspections of fire suppression, hydrant pressure, and sprinkler lines to ensure smooth Form B certification twice a year under the Maharashtra Fire Act.",
      },
    ],
  },
  {
    slug: "ranjangaon-five-star-midc",
    name: "Ranjangaon Five-Star MIDC Industrial Area",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "White Goods, Electronics Manufacturing & Automotive Powertrain Workforce",
    location: "Ranjangaon, Shirur Taluka, Pune District, Maharashtra",
    district: "Pune",
    wageZone: "Zone I",
    totalArea: "2,200+ Acres (Electronics Cluster & Auto Hub)",
    heroHeadline: "Electronics Assembly Helpers, HT Substation Electricians & Security for Ranjangaon",
    overview:
      "Ranjangaon Five-Star MIDC is an advanced electronics and white goods manufacturing cluster hosting LG Electronics, Whirlpool, Stellantis/Fiat, and Haier. ACS provides assembly line workers, licensed HT electricians, warehouse pickers, and corporate security.",
    proximities: [
      {
        destination: "Pune City Center",
        distance: "50 km",
        travelTime: "1 hr 10 mins",
        significance: "Direct link via Pune-Ahmednagar Highway (SH-27)",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Anti-Static ESD Footwear & Component Scan",
        procedure:
          "Screening cleanroom workers for ESD wrist straps and conducting anti-pilferage scans for electronic microchips.",
        techEnabler: "ESD Verification Station & High-Sensitivity Metal Detection Gate",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "High-Value Consumer Appliance Serial Tracking",
        description:
          "Barcoded container verification against ERP shipping orders to eliminate shipping discrepancies.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "24x7 Factory Outer Perimeter Guarding",
        detail: "Roving night security patrols preventing unauthorized access along highway-facing boundaries.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Engineering & Electronics Schedules)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Engineering Schedule",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and MLWF filings delivered before billing",
      auditGuarantee: "100% statutory indemnity under CLRA and Factories Act Section 2(n)",
    },
    recommendedPersonnelStructure: [
      {
        role: "Electronics Assembly Associate",
        ratioOrCount: "20 to 100 per Production Line",
        responsibilities: "Printed circuit board insertion, wiring harness routing, and visual inspection.",
      },
      {
        role: "Substation Maintenance Electrician",
        ratioOrCount: "2 to 4 per Plant",
        responsibilities: "Transformer maintenance, 33kV switchgear, and capacitor bank logging.",
      },
    ],
    faqs: [
      {
        question: "Do you provide cleanroom assembly workers in Ranjangaon?",
        answer:
          "Yes. ACS supplies ESD-trained blue-collar staff for electronics and home appliance manufacturing with full statutory benefits and shift attendance tracking.",
      },
    ],
  },
  {
    slug: "kagal-five-star-midc",
    name: "Kagal Five-Star MIDC Industrial Area",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Foundry Castings, Automotive Ancillaries & Textile Export Manpower",
    location: "Kagal-Hatkanangale, Kolhapur District, Maharashtra",
    district: "Kolhapur",
    wageZone: "Zone II",
    totalArea: "3,500+ Acres (Foundry, Textile & Auto Cluster)",
    heroHeadline: "Foundry Labor, Heavy Machine Riggers & Security for Kagal 5-Star MIDC",
    overview:
      "Kagal Five-Star MIDC in Kolhapur is a powerhouse for automotive castings, foundries, and export textiles. ACS provides heavy foundry helpers, pattern shop workers, ETP operators, and PSARA security across the Kolhapur-Belagavi industrial corridor.",
    proximities: [
      {
        destination: "Kolhapur City Center / Railway",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "Direct connectivity via NH-48 (Bengaluru-Mumbai Highway)",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Raw Scrap & Metal Pig Iron Gate Audit",
        procedure:
          "Gross weighing and visual grading of incoming foundry scrap and pig iron consignments.",
        techEnabler: "Digital Weighbridge System with High-Angle Overhead Cameras",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Cast Iron Scrap Anti-Skimming Check",
        description:
          "Randomized tare weighbridge audits to eliminate internal theft of high-grade alloy scrap.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Foundry Perimeter Sentry Network",
        detail: "Watchtower sentry posts and infrared perimeter lighting covering scrap yards.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone II (Engineering Schedule)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Engineering Schedule Zone II",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and MLWF compliance submitted with invoices",
      auditGuarantee: "Comprehensive Occupier indemnity under Maharashtra Factories Rules 1963",
    },
    recommendedPersonnelStructure: [
      {
        role: "Foundry Molder & Furnace Helper",
        ratioOrCount: "15 to 50 per Unit",
        responsibilities: "Sand molding, core preparation, slag clearing, and casting fettling.",
      },
    ],
    faqs: [
      {
        question: "Can ACS handle foundry labor turnover in Kolhapur?",
        answer:
          "Yes. ACS maintains a dedicated bench of medically screened, heat-conditioned foundry helpers in Kolhapur, ensuring zero downtime for blast furnace operations.",
      },
    ],
  },
  {
    slug: "hinjawadi-infotech-park",
    name: "Hinjawadi Rajiv Gandhi Infotech Park",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Tier-1 IT/ITES Campus Security, Cleanroom Janitorial & Corporate IFM",
    location: "Hinjawadi, Pune District, Maharashtra",
    district: "Pune",
    wageZone: "Zone I",
    totalArea: "2,800+ Acres across Phases I, II & III",
    heroHeadline: "Corporate Security, Office Support & Integrated Facility Management for Hinjawadi",
    overview:
      "Hinjawadi is one of India premier software technology parks, housing Infosys, Wipro, TCS, Cognizant, and major GCCs. ACS provides corporate security, background-verified office peons, mechanized floor scrubbing, and 24x7 BMS technicians.",
    proximities: [
      {
        destination: "Pune City Center",
        distance: "18 km",
        travelTime: "35 mins",
        significance: "Direct link via Pune-Mumbai Expressway bypass",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Corporate Visitor & Asset Badge Management",
        procedure:
          "Digital visitor management with QR code passes, laptop asset serial verification, and biometric turnstiles.",
        techEnabler: "Cloud Visitor Management System & Optical Turnstiles",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "IT Asset Egress & Server Relocation Audit",
        description:
          "Strict multi-point authorization before any decommissioned server, laptop, or switch leaves the campus.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Campus Perimeter Foot & Bicycle Patrol",
        detail: "Smart-uniformed security officers patrolling campus perimeters and multi-level parking structures.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Shops & Commercial Establishments)",
      applicableSchedule: "Maharashtra Minimum Wages Act — S&E Schedule Zone I",
      ecrTransparency: "100% EPF, ESIC, and MLWF compliance with zero contractor wage disputes",
      auditGuarantee: "Absolute compliance protecting corporate real estate directors and facility heads",
    },
    recommendedPersonnelStructure: [
      {
        role: "Corporate Security Officer",
        ratioOrCount: "10 to 40 per Campus",
        responsibilities: "Turnstile governance, executive protection, and fire control room monitoring.",
      },
      {
        role: "Corporate Office Boy & Pantry Staff",
        ratioOrCount: "5 to 30 per Building",
        responsibilities: "Conference room setup, pantry beverage service, and executive mail handling.",
      },
    ],
    faqs: [
      {
        question: "Do you provide background-verified pantry and office boy staff in Hinjawadi?",
        answer:
          "Yes. All ACS corporate support staff undergo dual-level police verification, identity background checks, and hospitality grooming for corporate IT environments.",
      },
    ],
  },
  {
    slug: "tarapur-midc",
    name: "Tarapur MIDC Industrial Area",
    parkDeveloper: "Maharashtra Industrial Development Corporation (MIDC)",
    tagline: "Asia Largest Chemical SEZ, Bulk Drug APIs & Hazardous Material Workforce",
    location: "Tarapur-Boisar, Palghar District, Maharashtra",
    district: "Palghar",
    wageZone: "Zone I",
    totalArea: "3,000+ Acres (Specialty Chemicals & Pharma)",
    heroHeadline: "Chemical Plant Helpers, Zero Liquid Discharge ETP Techs & Security for Tarapur",
    overview:
      "Tarapur MIDC in Palghar is one of Asia largest chemical synthesis clusters, housing over 1,200 manufacturing units spanning active pharmaceutical ingredients (APIs), dyes, and heavy chemicals. ACS provides Hazchem-trained plant helpers, ZLD ETP technicians, and industrial security.",
    proximities: [
      {
        destination: "Mumbai Suburban Core / Borivali",
        distance: "90 km",
        travelTime: "1 hr 45 mins",
        significance: "Direct coastal connectivity via Western Express Highway / Western Railway",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Hazardous Material Tanker & Drum Inspection",
        procedure:
          "Verification of PESO petroleum licenses, chemical TREM cards, spark arrestors, and emergency PPE.",
        techEnabler: "Digital Chemical Inward Gate Pass Protocol",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Electronic Weighbridge Chemical Verification",
        description:
          "Dual weighing to verify net solvent intake against refinery supply invoices.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Coastal Chemical Zone Security Patrols",
        detail: "24x7 security sentries monitoring boundaries adjacent to public water discharge channels.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone I (Engineering & Chemical Schedules)",
      applicableSchedule: "Maharashtra Minimum Wages Act — Chemical Schedule Zone I",
      ecrTransparency: "100% EPF, ESIC, and MLWF compliance with hazardous duty allowances",
      auditGuarantee: "Strict compliance protecting the Occupier under Section 41B of the Factories Act",
    },
    recommendedPersonnelStructure: [
      {
        role: "Certified Chemical Plant Laborer",
        ratioOrCount: "10 to 30 per Plant",
        responsibilities: "Raw material charging, centrifuge operation, and emergency leak containment.",
      },
    ],
    faqs: [
      {
        question: "Can ACS provide Zero Liquid Discharge (ZLD) ETP operators in Tarapur?",
        answer:
          "Yes. ACS deploys experienced wastewater technicians trained in multi-effect evaporators (MEE), reverse osmosis (RO), and filter presses complying with MPCB norms.",
      },
    ],
  },
];



export const KARNATAKA_INDUSTRIAL_PARKS: IndustrialParkData[] = [
  {
    slug: "peenya-industrial-area",
    name: "Peenya Industrial Area (Phases 1–4)",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB) & KSSIDC",
    tagline: "Machine Tools, Precision Hydraulics & South Asia Largest MSME Manufacturing Hub",
    location: "Peenya, Tumkur Road, Bengaluru Urban, Karnataka",
    district: "Bengaluru Urban",
    wageZone: "Zone 1",
    totalArea: "40+ Square Kilometers (10,000+ Manufacturing Units)",
    heroHeadline: "Integrated Industrial Workforce, CNC Machine Operators & PSARA Security for Peenya",
    overview:
      "Peenya is South Asia largest small-to-medium manufacturing estate, housing precision engineering, CNC tooling, aerospace machining, and electroplating. ACS delivers union-mitigated contract labor, licensed HT/LT electricians, machine fitters, and 24x7 enterprise security.",
    proximities: [
      {
        destination: "Bengaluru City Railway Station (SBC)",
        distance: "12 km",
        travelTime: "25 mins",
        significance: "Direct rail link and central talent transit corridor",
      },
      {
        destination: "Kempegowda International Airport (BLR)",
        distance: "38 km",
        travelTime: "45 mins",
        significance: "Express airport connectivity via NICE Road & Outer Ring Road",
      },
      {
        destination: "Nelamangala Logistics Corridor",
        distance: "15 km",
        travelTime: "20 mins",
        significance: "Major freight warehousing and container depot hub along NH-48",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Automated Biometric & RFID Turnstile Gate Access",
        procedure:
          "Digital muster roll capture eliminating ghost labor and unauthorized union entry.",
        techEnabler: "Biometric Turnstiles with Cloud Payroll Attendance Sync",
      },
      {
        step: "Scrap Material Egress & Weighbridge Audit",
        procedure:
          "Strict physical inspection of metal shavings, copper windings, and brass scrap before exit pass generation.",
        techEnabler: "High-Precision Digital Weighbridge & Overhead Recording",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Dual Tare Weighbridge Verification",
        description:
          "Cross-checking empty vehicle tare weights to eliminate hidden scrap pilferage in truck underbodies.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Peenya 24x7 Motorized Night Patrol",
        detail:
          "Mobile security units patrolling industrial blocks to suppress theft and protect midnight manufacturing shifts.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 1 (Greater Bengaluru Authority)",
      applicableSchedule: "Karnataka Minimum Wages Act (May 2026 Notification — ₹24,407 to ₹29,316/mo)",
      ecrTransparency: "Monthly EPF ECRs, ESIC slips, and KLWF remittances submitted before invoicing",
      auditGuarantee: "100% legal indemnity protecting factory Occupiers under Karnataka Factories Rules 1969",
    },
    recommendedPersonnelStructure: [
      {
        role: "Certified Industrial Electrician (HT/LT)",
        ratioOrCount: "2 to 6 Technicians",
        responsibilities: "Substation maintenance, CNC power distribution, and LOTO safety enforcement.",
      },
      {
        role: "CNC Machine Operator & Assembly Helper",
        ratioOrCount: "10 to 50 Workers",
        responsibilities: "Lathe loading, deburring, drilling, component washing, and quality checks.",
      },
      {
        role: "PSARA Industrial Security Guard",
        ratioOrCount: "4 to 12 Guards per Gate",
        responsibilities: "Biometric access control, vehicle search, and material inward/outward registers.",
      },
    ],
    faqs: [
      {
        question: "How does ACS mitigate union unrest and contract labor disputes in Peenya?",
        answer:
          "ACS enforces a strict 7th-of-the-month direct digital bank payout backed by our 60-day liquid float, transparent EPF/ESIC challan delivery, and close coordination with Peenya Industrial Association (PIA) protocols.",
      },
    ],
  },
  {
    slug: "devanahalli-aerospace-park",
    name: "Devanahalli KIADB Aerospace Park & SEZ",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB)",
    tagline: "Aviation Hardware, Defense Electronics & Cleanroom AS9100 Facilities",
    location: "Devanahalli, Bengaluru Rural District, Karnataka",
    district: "Bengaluru Rural",
    wageZone: "Zone 1",
    totalArea: "3,000+ Acres (Hi-Tech Defense & Aerospace SEZ)",
    heroHeadline: "Aerospace Cleanroom Janitorial, Defense Security & Technical Staffing for Devanahalli",
    overview:
      "Adjacent to Kempegowda International Airport (BLR), Devanahalli Aerospace Park is India foremost aerospace and avionics cluster, housing Boeing, Airbus Tier-1 suppliers, Collins Aerospace, and HAL. ACS delivers ISO Class 7/8 cleanroom janitorial services, AS9100 security, and technical facility support.",
    proximities: [
      {
        destination: "Kempegowda International Airport (BLR)",
        distance: "4 km",
        travelTime: "8 mins",
        significance: "Immediate runway access for bonded air freight and express courier export",
      },
      {
        destination: "Bengaluru City Core / MG Road",
        distance: "35 km",
        travelTime: "45 mins",
        significance: "Direct connectivity via 6-lane elevated Airport Expressway (NH-44)",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "High-Security Defense Biometric Turnstiles",
        procedure:
          "Multi-factor authentication (smart card + biometric fingerprint) with visitor escort protocols.",
        techEnabler: "Optical Turnstiles & Integrated Security Operations Center (SOC)",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Bonded Cargo Air Freight Transit Audit",
        description:
          "Tamper-evident high-security bolt seal logging for sensitive avionics cargo transiting to BLR Airport cargo terminal.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Thermal PTZ Perimeter Defense",
        detail:
          "Long-range thermal cameras and vibration detection sensors guarding aerospace SEZ boundaries.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 1 (Greater Bengaluru Authority)",
      applicableSchedule: "Karnataka Minimum Wages Act — Engineering Schedule Zone 1",
      ecrTransparency: "100% digital wage slips, EPF ECRs, and KLWF annual remittances",
      auditGuarantee: "ADGP Internal Security Division PSARA license compliance and strict background vetting",
    },
    recommendedPersonnelStructure: [
      {
        role: "Cleanroom Janitorial Specialist",
        ratioOrCount: "10 to 30 Personnel",
        responsibilities: "ISO Class 7/8 particulate control, lint-free surface decontamination, and ESD floor maintenance.",
      },
      {
        role: "Armed Aerospace Security Sentry",
        ratioOrCount: "4 to 12 Armed Sentries",
        responsibilities: "Perimeter defense, bonded vault escort, and server room access monitoring.",
      },
    ],
    faqs: [
      {
        question: "Do you provide cleanroom certified housekeeping in Devanahalli Aerospace Park?",
        answer:
          "Yes. ACS cleanroom technicians are trained in particulate hygiene, HEPA filter air lock procedures, and chemical safety conforming to aerospace and pharmaceutical cleanroom standards.",
      },
    ],
  },
  {
    slug: "vasanthanarasapura-industrial-park",
    name: "Vasanthanarasapura Industrial Area (Tumakuru / CBIC Node)",
    parkDeveloper: "KIADB & NICDC (Tumakuru Industrial Township Limited)",
    tagline: "8,484-Acre CBIC Mega Node, Machine Tool Park & Food Processing Workforce",
    location: "Vasanthanarasapura, Tumakuru District, Karnataka",
    district: "Tumakuru",
    wageZone: "Zone 2",
    totalArea: "8,484 Acres (India Largest Planned Industrial Corridor Node)",
    heroHeadline: "Bulk Factory Labor, Industrial Electricians & PSARA Security for Vasanthanarasapura",
    overview:
      "Vasanthanarasapura is an 8,484-acre mega manufacturing node under the Chennai-Bengaluru Industrial Corridor (CBIC) and National Industrial Corridor Development Corporation (NICDC). Houses a Japan Industrial Township (JIT), machine tool parks, and mega food parks. ACS provides bulk blue-collar staffing, logistics gangs, and security.",
    proximities: [
      {
        destination: "Bengaluru City Core / Peenya",
        distance: "90 km",
        travelTime: "1 hr 30 mins",
        significance: "Direct transit via 6-lane NH-48 (Bengaluru-Mumbai Highway)",
      },
      {
        destination: "Dhabaspet Industrial Junction",
        distance: "45 km",
        travelTime: "40 mins",
        significance: "Heavy engineering and pre-engineered steel building cluster",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Automated ANPR & FASTag Gate Automation",
        procedure:
          "Automated boom barrier logging of raw material trucks and container freight trailers.",
        techEnabler: "Optical ANPR Cameras & Cloud Access Gateway",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "100-Ton Electronic Weighbridge Audit",
        description:
          "Automated weight logging with synchronized CCTV snapshots of license plate and cargo bay.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Mega-Estate Motorized Roving Patrols",
        detail: "GPS-tracked patrol vehicles operating 24x7 across Vasanthanarasapura multi-thousand-acre sectors.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 2 (District Headquarters Schedule)",
      applicableSchedule: "Karnataka Minimum Wages Act — Zone 2 Consolidated Schedule",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and KLWF compliance submitted with bills",
      auditGuarantee: "Complete statutory indemnity protecting the Occupier under Karnataka Factories Rules",
    },
    recommendedPersonnelStructure: [
      {
        role: "Factory Machine Helper & Assembler",
        ratioOrCount: "20 to 100 Workers",
        responsibilities: "Machine loading, palletizing, component deburring, and packaging.",
      },
      {
        role: "Container Loading Hamali Gang",
        ratioOrCount: "10 to 30 Workers per Shift",
        responsibilities: "Container unstuffing, pallet jack handling, and godown stacking.",
      },
    ],
    faqs: [
      {
        question: "Can ACS handle large-scale manpower ramp-up in Vasanthanarasapura Tumakuru?",
        answer:
          "Yes. ACS operates a dedicated Tumakuru regional desk capable of mobilizing 100 to 300+ screened blue-collar factory workers and security sentries within 48 to 72 hours for new plant setups.",
      },
    ],
  },
  {
    slug: "bidadi-industrial-area",
    name: "Bidadi Industrial Area (Toyota Manufacturing Hub)",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB)",
    tagline: "Automotive OEM Stamping, Powertrain Assembly & Just-In-Time Logistics",
    location: "Bidadi, Ramanagara District, Karnataka",
    district: "Ramanagara",
    wageZone: "Zone 2",
    totalArea: "1,410+ Acres across Phases 1 & 2",
    heroHeadline: "JIT Assembly Helpers, Wastewater ETP Techs & Plant Security for Bidadi",
    overview:
      "Located on the 10-lane Bengaluru-Mysuru Expressway, Bidadi is the automotive epicenter of Karnataka, anchored by Toyota Kirloskar Motor (TKM), Bosch, and Coca-Cola. ACS delivers Just-In-Time (JIT) dock helpers, press stamping assistants, ETP operators, and PSARA security.",
    proximities: [
      {
        destination: "Bengaluru City Core / Kengeri",
        distance: "25 km",
        travelTime: "30 mins",
        significance: "Express transit via 10-lane Bengaluru-Mysuru Expressway (NH-275)",
      },
      {
        destination: "Harohalli Industrial Area",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "Specialty plastics, polymers and injection molding supplier link",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Just-In-Time (JIT) Vendor Dock Verification",
        procedure:
          "Barcode scanning of sequencing racks to ensure zero buffer-stock dock delays for Toyota suppliers.",
        techEnabler: "Handheld RFID Scanner & Gate-Pass Synchronization",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Auto Stamping Scrap Audit",
        description:
          "Electronic weighbridge gross/tare logging of sheet metal stamping scrap and rejected press blanks.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Expressway Boundary Patrol",
        detail: "Roving night security patrols preventing unauthorized intrusions along highway-facing perimeters.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 2 (Mahanagara / Ramanagara Schedule)",
      applicableSchedule: "Karnataka Minimum Wages Act — Engineering Schedule Zone 2",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and KLWF annual contribution proof",
      auditGuarantee: "100% compliance with Factories Act Rule 88/91 safety officer requirements",
    },
    recommendedPersonnelStructure: [
      {
        role: "JIT Automotive Dock Helper",
        ratioOrCount: "10 to 40 Workers per Shift",
        responsibilities: "Component sequencing, returnable crate handling, and dock leveler operation.",
      },
      {
        role: "Wastewater STP/ETP Operator",
        ratioOrCount: "2 to 4 Technicians",
        responsibilities: "Clarifier monitoring, chemical dosing, and KSPCB log maintenance.",
      },
    ],
    faqs: [
      {
        question: "Do you provide shift-based assembly helpers for Tier-1 auto suppliers in Bidadi?",
        answer:
          "Yes. ACS supplies trained, uniformed assembly line helpers and material handlers operating on 3-shift 24x7 rosters with biometric attendance and zero absenteeism buffers.",
      },
    ],
  },
  {
    slug: "bommasandra-jigani-complex",
    name: "Bommasandra – Jigani Industrial Complex",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB)",
    tagline: "Biopharmaceuticals, Precision Sheet Metal & Granite Manufacturing Hub",
    location: "Hosur Road (NH-44) & Jigani Link Road, Bengaluru Urban, Karnataka",
    district: "Bengaluru Urban",
    wageZone: "Zone 1",
    totalArea: "2,200+ Acres (Bommasandra Phases 1–4, Jigani Industrial Layout)",
    heroHeadline: "Biopharma Facility Services, Heavy Machinery Rigging & Security for Bommasandra-Jigani",
    overview:
      "Bommasandra-Jigani is an established industrial powerhouse hosting biopharma leaders (Biocon), granite and marble processing, medical electronics, and heavy sheet metal. ACS provides biopharma cleanroom janitorial services, heavy machinery rigging crews, ETP operators, and PSARA security.",
    proximities: [
      {
        destination: "Electronic City Tech Park",
        distance: "6 km",
        travelTime: "10 mins",
        significance: "Immediate IT/EMS integration via Hosur Road elevated highway",
      },
      {
        destination: "Bengaluru City Core / Silk Board",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "Direct arterial link via NH-44 express corridor",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Biopharma & Granite Gate Screening",
        procedure:
          "Multi-point inspection of chemical solvent tankers and heavy granite flatbed trailers.",
        techEnabler: "Digital Access Logging & Under-Vehicle Mirror Inspection",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Heavy Stone & Steel Weight Verification",
        description:
          "Dual electronic weighbridge verification preventing weight discrepancies on raw materials.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Industrial Perimeter Guard Tour",
        detail: "Hourly RFID checkpoint tagging along boundary walls and raw material storage yards.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 1 (Greater Bengaluru Authority)",
      applicableSchedule: "Karnataka Minimum Wages Act — Zone 1 Engineering & S&E Schedules",
      ecrTransparency: "Monthly EPF ECRs, ESIC payment challans, and KLWF filings submitted with every invoice",
      auditGuarantee: "Full statutory protection under CLRA and Karnataka Factories Rules",
    },
    recommendedPersonnelStructure: [
      {
        role: "Biopharma Cleanroom Janitor",
        ratioOrCount: "10 to 30 Workers",
        responsibilities: "Controlled surface wiping, autoclave prep, and sterile zone housekeeping.",
      },
      {
        role: "Heavy Machinery Rigging Specialist",
        ratioOrCount: "4 to 8 Riggers per Project",
        responsibilities: "Hydraulic jack positioning, crane slinging, and press machinery relocation.",
      },
    ],
    faqs: [
      {
        question: "Can ACS handle factory machinery relocation in Bommasandra?",
        answer:
          "Yes. Our rigging team executes turnkey machinery shifting, leveling, and positioning for heavy CNC machines and granite cutting equipment with certified rigging foremen and load-tested gear.",
      },
    ],
  },
  {
    slug: "narasapura-industrial-area",
    name: "Narasapura Industrial Area (Kolar Auto Cluster)",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB)",
    tagline: "Two-Wheeler Mega Plants, Commercial Trucks & Tier-1 Stamping Ancillaries",
    location: "Narasapura, Kolar District, Karnataka",
    district: "Kolar",
    wageZone: "Zone 2",
    totalArea: "1,800+ Acres (Honda OEM & Auto Ancillary Park)",
    heroHeadline: "Automotive Assembly Workforce, 3PL Warehouse Gangs & Security for Narasapura",
    overview:
      "Narasapura is one of India largest two-wheeler manufacturing clusters, housing Honda Motorcycle & Scooter India (HMSI), Scania Commercial Vehicles, and tier-1 auto suppliers along NH-75. ACS supplies high-velocity assembly helpers, 3PL warehouse logistics manpower, and industrial security.",
    proximities: [
      {
        destination: "Bengaluru City Core / KR Puram",
        distance: "45 km",
        travelTime: "50 mins",
        significance: "Direct connectivity via 6-lane NH-75 (Bengaluru-Chennai Expressway link)",
      },
      {
        destination: "Hoskote Logistics & Warehousing Hub",
        distance: "25 km",
        travelTime: "25 mins",
        significance: "Major freight consolidation and auto vendor feeder corridor",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Automated Gate Barrier & Dispatch Logging",
        procedure:
          "Automated boom barrier release synchronized with ERP gate pass barcode scans.",
        techEnabler: "Optical ANPR Cameras & Barcode Gate Pass Terminals",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Finished Vehicle Carrier Gate Inspection",
        description:
          "Physical count and chassis number cross-check of finished two-wheelers and commercial trucks.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Highway Perimeter Motorized Patrol",
        detail: "Roving night patrols suppressing cargo theft along NH-75 highway boundaries.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 2 (District Industrial Belt)",
      applicableSchedule: "Karnataka Minimum Wages Act — Zone 2 Engineering Schedule",
      ecrTransparency: "Monthly EPF ECRs, ESIC challans, and KLWF annual compliance delivered with invoices",
      auditGuarantee: "Complete statutory protection insulating the Occupier from criminal liability",
    },
    recommendedPersonnelStructure: [
      {
        role: "Assembly Line Blue-Collar Associate",
        ratioOrCount: "20 to 150 Workers",
        responsibilities: "Pneumatic tool operation, chassis sub-assembly, and packaging.",
      },
      {
        role: "3PL Logistics Warehouse Helper",
        ratioOrCount: "10 to 50 Workers",
        responsibilities: "Order picking, barcoding, pallet strapping, and container staging.",
      },
    ],
    faqs: [
      {
        question: "Can ACS supply assembly workers during seasonal peak demand in Narasapura?",
        answer:
          "Yes. ACS manages seasonal production surges by ramping up 50 to 200+ trained assembly helpers within 48 to 72 hours, all backed by active CLRA licensing and EHS compliance.",
      },
    ],
  },
  {
    slug: "dharwad-bmic-mega-cluster",
    name: "Dharwad KIADB Mega Cluster / Belur Industrial Area",
    parkDeveloper: "KIADB & National Industrial Corridor Development Corporation (NICDC)",
    tagline: "6,042-Acre BMIC Flagship Node, Commercial Vehicles & Heavy Metallurgy",
    location: "Belur & Mummigatti, Dharwad District, Karnataka",
    district: "Dharwad",
    wageZone: "Zone 2",
    totalArea: "6,042 Acres (Bengaluru-Mumbai Industrial Corridor Anchor Node)",
    heroHeadline: "Commercial Vehicle Labor, Foundry Riggers & Enterprise Guarding for Dharwad BMIC",
    overview:
      "Dharwad is the primary anchor node of the Bengaluru-Mumbai Industrial Corridor (BMIC) in Karnataka, home to Tata Motors Commercial Vehicles, Marcopolo bus body building, and heavy engineering foundries. ACS provides bulk blue-collar workers, machinery riggers, and PSARA security.",
    proximities: [
      {
        destination: "Hubballi Airport / Railway Junction",
        distance: "18 km",
        travelTime: "25 mins",
        significance: "South Western Railway headquarters and regional commercial airport",
      },
      {
        destination: "Belagavi Foundry & Precision Machining Hub",
        distance: "75 km",
        travelTime: "1 hr 15 mins",
        significance: "Heavy casting and precision hydraulic supplier network along NH-48",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Chassis Egress & Heavy Equipment Gate Log",
        procedure:
          "Engine and chassis serial number physical verification against factory dispatch orders.",
        techEnabler: "Digital Dispatch Gateway & High-Resolution Vehicle Camera",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Raw Steel Ingot & Scrap Audit",
        description:
          "100-ton electronic weighbridge dual weighing to eliminate raw metal inventory shrinkage.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Large-Acreage Motorized Security Patrol",
        detail: "Roving 4WD security patrols covering expansive multi-thousand-acre manufacturing boundaries.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 2 (Hubballi-Dharwad Municipal Corporation)",
      applicableSchedule: "Karnataka Minimum Wages Act — Engineering Schedule Zone 2",
      ecrTransparency: "Monthly EPF ECRs, ESIC slips, and KLWF remittances submitted before billing",
      auditGuarantee: "100% statutory transparency protecting the factory Occupier under Factories Act",
    },
    recommendedPersonnelStructure: [
      {
        role: "Commercial Vehicle Assembly Helper",
        ratioOrCount: "20 to 100 Workers",
        responsibilities: "Chassis riveting, wiring harness routing, sheet metal drilling, and painting prep.",
      },
      {
        role: "Certified Heavy Machinery Rigger",
        ratioOrCount: "4 to 8 Riggers",
        responsibilities: "Crane slinging, press positioning, and heavy foundry die handling.",
      },
    ],
    faqs: [
      {
        question: "Do you provide foundry and bus body assembly workers in Dharwad?",
        answer:
          "Yes. ACS provides screened, trade-tested assembly helpers, spot welders, fitters, and foundry workers adhering to strict EHS guidelines across the Belur industrial layout.",
      },
    ],
  },
  {
    slug: "baikampady-industrial-area",
    name: "Baikampady Industrial Area (Mangaluru Port)",
    parkDeveloper: "Karnataka Industrial Areas Development Board (KIADB)",
    tagline: "Port Logistics, Petrochemicals, Fertilizers & Maritime Cold Storage",
    location: "Baikampady, Mangaluru, Dakshina Kannada District, Karnataka",
    district: "Dakshina Kannada",
    wageZone: "Zone 2",
    totalArea: "1,500+ Acres (Port-Adjacent Maritime & Chemical Estate)",
    heroHeadline: "Port Logistics Gangs, ETP Wastewater Techs & Marine Guarding for Baikampady",
    overview:
      "Adjacent to New Mangalore Port (NMPT), Baikampady is the premier coastal maritime and chemical manufacturing estate in Karnataka, housing fertilizer plants, petrochemical storage, export marine processing, and cold chains. ACS supplies port-adjacent security, ETP technicians, and cargo handlers.",
    proximities: [
      {
        destination: "New Mangalore Port (NMPT)",
        distance: "4 km",
        travelTime: "8 mins",
        significance: "Major all-weather deepwater sea port handling petroleum, LPG, and container cargo",
      },
      {
        destination: "Mangaluru International Airport (IXE)",
        distance: "15 km",
        travelTime: "25 mins",
        significance: "Air cargo link for perishable seafood exports and express parts",
      },
    ],
    gateSecuritySOPs: [
      {
        step: "Port Corridor Container & Tanker Gate Audit",
        procedure:
          "Customs seal logging, container damage inspection, and driver breathalyzer testing.",
        techEnabler: "Digital Gate Inspection Gateway with ANPR Cameras",
      },
    ],
    weighbridgeShrinkageControls: [
      {
        protocol: "Bulk Fertilizer & Petrochemical Weighing",
        description:
          "Strict dual gross/tare weighbridge audits to verify bulk tanker and cargo manifest weights.",
      },
    ],
    perimeterPatrolProtocols: [
      {
        feature: "Coastal Marine Security Patrol",
        detail: "24x7 security sentry watchtowers guarding maritime-facing cargo boundaries.",
      },
    ],
    statutoryCompliance: {
      minimumWageZone: "Zone 2 (Mangaluru City Corporation)",
      applicableSchedule: "Karnataka Minimum Wages Act — Chemical & Port Schedules",
      ecrTransparency: "Monthly EPF ECRs, ESIC payments, and KLWF annual remittances",
      auditGuarantee: "Comprehensive Occupier indemnity under Karnataka Factories Rules",
    },
    recommendedPersonnelStructure: [
      {
        role: "Port Warehouse Cargo Handler",
        ratioOrCount: "10 to 40 Workers",
        responsibilities: "Pallet stacking, cold storage cargo handling, and container lashing.",
      },
      {
        role: "Effluent Treatment Plant (ETP) Operator",
        ratioOrCount: "2 to 4 Technicians",
        responsibilities: "Marine discharge chemical testing, clarifier dosing, and KSPCB logging.",
      },
    ],
    faqs: [
      {
        question: "Can ACS handle cold chain and marine cargo handling in Baikampady?",
        answer:
          "Yes. ACS provides cold-room conditioned handlers, reach truck operators, and container lashing gangs trained in perishable seafood logistics and sub-zero storage safety.",
      },
    ],
  },
];


export const ALL_INDUSTRIAL_PARKS: IndustrialParkData[] = [
  ...WB_INDUSTRIAL_PARKS,
  ...MAHARASHTRA_INDUSTRIAL_PARKS,
  ...KARNATAKA_INDUSTRIAL_PARKS,
];

export const INDUSTRIAL_PARKS = ALL_INDUSTRIAL_PARKS;

export function getAllIndustrialParks(): IndustrialParkData[] {
  return ALL_INDUSTRIAL_PARKS;
}

export function getIndustrialParkBySlug(slug: string): IndustrialParkData | undefined {
  return ALL_INDUSTRIAL_PARKS.find((p) => p.slug === slug);
}
