// ============================================================
// ACS — Enterprise Case Studies Knowledge Base
// Whitepaper-grade operational reports and deployment analyses
// Demonstrating PSARA-licensed execution, SLA compliance,
// and measurable risk mitigation across Eastern India.
// ============================================================

export interface CaseStudyMetric {
  value: string;
  label: string;
  description: string;
}

export interface OperationalChallenge {
  title: string;
  description: string;
  riskSeverity: 'Critical' | 'High' | 'Moderate';
}

export interface SolutionComponent {
  layer: string;
  title: string;
  specification: string;
  operationalOutcome: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  whitepaperCode: string;
  title: string;
  subtitle: string;
  sector: string;
  client: string;
  location: string;
  state: string;
  deploymentScope: string;
  personnelStrength: string;
  timeline: string;
  heroImage: string;
  executiveSummary: string;
  keyMetrics: CaseStudyMetric[];
  challenges: OperationalChallenge[];
  solutionArchitecture: SolutionComponent[];
  statutoryComplianceFramework: {
    minimumWageZone: string;
    actsGoverned: string[];
    complianceRate: string;
    auditVerification: string;
  };
  operationalSOPs: {
    category: string;
    protocol: string;
    auditCycle: string;
  }[];
  measurableImpact: {
    metric: string;
    before: string;
    after: string;
    timeframe: string;
    verifiedBy: string;
  }[];
  clientTestimonial: {
    quote: string;
    author: string;
    role: string;
    organizationType: string;
  };
  relatedServices: {
    title: string;
    slug: string;
  }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-01",
    slug: "dankuni-heavy-industrial-logistics-park",
    whitepaperCode: "ACS-WP-2024-DANKUNI-IND",
    title: "Securing a 50-Acre Heavy Industrial & Logistics Park in the Dankuni Corridor",
    subtitle: "Eliminating material shrinkage, formalizing gate access, and establishing zero-tolerance statutory ECR compliance across multi-modal freight terminals.",
    sector: "Logistics, Warehousing & Heavy Industry",
    client: "Multinational Logistics & Warehousing Conglomerate",
    location: "Dankuni Logistics Belt, Hooghly, West Bengal",
    state: "West Bengal",
    deploymentScope: "50-Acre Industrial Logistics Park with 6 Grade-A Warehouses & 100-Ton Weighbridge",
    personnelStrength: "65 Armed & Unarmed Security Guards, 4 Field Supervisors, 2 QRT Patrol Units",
    timeline: "24-Month Ongoing Contract (Mobilized in 48 Hours)",
    heroImage: "/images/guarding.jpg",
    executiveSummary:
      "A tier-one international supply chain developer operating a 50-acre multi-tenant distribution park along NH-19 (Dankuni Corridor) faced severe material shrinkage during offloading, recurring labor friction at shift turnovers, and unauthorized vehicular staging along the feeder perimeter. ACS was commissioned to overhaul physical security, enforce biometric and RFID perimeter patrol tracking, align all personnel with West Bengal Zone A Minimum Wages, and integrate computerized weighbridge gross-tare reconciliation.",
    keyMetrics: [
      {
        value: "42%",
        label: "Shrinkage Reduction",
        description: "Decrease in unexplained weighbridge and transit inventory shrinkage within 90 days of deployment.",
      },
      {
        value: "100%",
        label: "Statutory ECR Score",
        description: "Flawless compliance across EPFO, ESIC, and WB Labour Commissioner wage audits.",
      },
      {
        value: "Zero",
        label: "Peak Gate Congestion",
        description: "Eliminated turnstile bottlenecks across 1,200+ daily truck turnarounds and 800+ shift workers.",
      },
      {
        value: "18",
        label: "RFID Patrol Checkpoints",
        description: "Active digital geofenced wand scanning posts synchronized to 45-minute supervisory guard tours.",
      },
    ],
    challenges: [
      {
        title: "Weighbridge Material Shrinkage & Document Tampering",
        description:
          "High-value raw metals and FMCG freight experienced persistent cargo pilferage between inbound weighbridge gross recording and secondary loading bay verification, exacerbated by manual paper pass manipulations.",
        riskSeverity: "Critical",
      },
      {
        title: "Perimeter Incursions Along Low-Illumination Railway Spurs",
        description:
          "The estate's 2.4 km rear boundary adjoined dedicated freight railway lines with intermittent municipal lighting, inviting nocturnal trespassing and fuel siphoning from idle tractor-trailers.",
        riskSeverity: "High",
      },
      {
        title: "Informal Contract Labor Disputes & Wildcat Gate Blockades",
        description:
          "Prior vendor non-compliance with statutory provident fund contributions and delayed pay-cycles triggered spontaneous gate demonstrations that paralyzed dispatch schedules for top e-commerce tenants.",
        riskSeverity: "High",
      },
      {
        title: "Lack of Coordinated Night Emergency Escalation",
        description:
          "On-site guards operated without integrated radio frequencies, direct supervisory escalation, or quick reaction vehicular support during after-hours perimeter incidents.",
        riskSeverity: "Moderate",
      },
    ],
    solutionArchitecture: [
      {
        layer: "Physical & Biometric Perimeter Access",
        title: "Dual-Barrier Access Control & Digital Driver Verification",
        specification:
          "Installed optical turnstiles with biometric fingerprint/face authentication for shift labor, integrated with automated boom barriers and OCR license-plate capture at Inbound/Outbound truck gates.",
        operationalOutcome:
          "Eliminated proxy sign-ins and unauthorized cab helpers, slashing processing time from 4.2 minutes to 54 seconds per container vehicle.",
      },
      {
        layer: "Guard Tour Verification & Night Patrols",
        title: "Synchronized RFID Patrol Wand Network with 45-Minute Cycles",
        specification:
          "Installed 18 tamper-proof RFID tags along perimeter fences, transformer yards, and remote fuel depots. Guard tour data synced live via cloud-connected mobile readers.",
        operationalOutcome:
          "Achieved 99.4% patrol route completion rate with zero nocturnal blind spots; immediate supervisory alerts triggered if any tag scan missed its 45-minute window.",
      },
      {
        layer: "Cargo & Weighbridge Governance",
        title: "Dual-Signoff Tare-Gross Calibration & Tamper-Evident Seals",
        specification:
          "Stationed specialized ACS Weighbridge Security In-charges trained in ERP log entry, physical seal inspection, under-chassis mirror searches, and tamper-evident container locking.",
        operationalOutcome:
          "Directly eliminated discrepancy loopholes between weighbridge readings and delivery challans, identifying 14 attempted cargo diversion attempts in the initial 60 days.",
      },
      {
        layer: "Statutory Transparency & Labor Peace",
        title: "100% On-Time Zone A Wage & ECR Deposit Transparency",
        specification:
          "Guaranteed salary disbursement by the 7th of every calendar month with transparent salary slips reflecting PF UAN, ESIC IP numbers, and West Bengal Zone A industrial rates.",
        operationalOutcome:
          "Completely eradicated vendor-related labor disputes, establishing a loyal, disciplined guarding corps with under 2% voluntary monthly attrition.",
      },
      {
        layer: "Rapid Incident Response",
        title: "Dedicated 24/7 Mobile Quick Reaction Team (QRT)",
        specification:
          "Deployed a high-clearance patrol vehicle manned by an armed ex-serviceman guard and field supervisor equipped with high-beam searchlights, VHF radios, and first-aid kits.",
        operationalOutcome:
          "Average containment time for boundary alarms dropped to under 3.5 minutes across the entire 50-acre facility.",
      },
    ],
    statutoryComplianceFramework: {
      minimumWageZone: "West Bengal Zone A (Hooghly Industrial / Dankuni Municipality Belt)",
      actsGoverned: [
        "Private Security Agencies (Regulation) Act, 2005 (PSARA)",
        "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (EPFO)",
        "Employees' State Insurance Act, 1948 (ESIC)",
        "Contract Labour (Regulation & Abolition) Act, 1970 (CLRA)",
        "Payment of Wages Act, 1936 & Minimum Wages Act, 1948",
      ],
      complianceRate: "100.0% Audited Score",
      auditVerification:
        "Every month, ACS submits Electronic Challan cum Return (ECR) receipts, bank transfer confirmation records, and ESIC contribution schedules before invoice processing.",
    },
    operationalSOPs: [
      {
        category: "Weighbridge Logistics SOP",
        protocol: "Mandatory zero-weight calibration check, gross weighing, chassis inspection, digital seal log, and dual-custody driver sign-off.",
        auditCycle: "Daily Shift Change (3x Daily)",
      },
      {
        category: "Perimeter Geofenced Patrol SOP",
        protocol: "18-tag RFID perimeter scan sequence, solar perimeter light checking, boundary fence integrity inspection, rail spur thermal scan.",
        auditCycle: "Every 45 Minutes (Night Window 19:00 - 06:00)",
      },
      {
        category: "Emergency & Strike De-escalation SOP",
        protocol: "Immediate gate perimeter hardening, QRT dispatch to command post, local police liaison notification, non-lethal crowd dispersal protocol.",
        auditCycle: "Monthly Unannounced Drill",
      },
    ],
    measurableImpact: [
      {
        metric: "Cargo & Material Shrinkage Rate",
        before: "3.8% of invoiced pallet volume",
        after: "0.04% (within standard industrial tolerance)",
        timeframe: "First 90 Days post-deployment",
        verifiedBy: "Client Internal Loss Prevention Directorate",
      },
      {
        metric: "Statutory Labor Audit Finding",
        before: "3 Non-conformances (Prior Vendor ECR lapses)",
        after: "Zero Non-conformances (100% Pass)",
        timeframe: "Annual Global Statutory Compliance Audit",
        verifiedBy: "Big-4 Independent Audit Firm",
      },
      {
        metric: "Gate Entry Processing Time (Freight)",
        before: "4 min 12 sec per heavy vehicle",
        after: "54 seconds per heavy vehicle",
        timeframe: "60 Days post biometric-RFID rollout",
        verifiedBy: "Park Logistics Operations Lead",
      },
      {
        metric: "Unresolved Perimeter Breaches",
        before: "11 incidents logged in previous quarter",
        after: "0 unauthorized incursions in past 18 months",
        timeframe: "18 Consecutive Months",
        verifiedBy: "Hooghly District Police & Estate Security Log",
      },
    ],
    clientTestimonial: {
      quote:
        "Managing a multi-tenant logistics park spanning 50 acres in the Dankuni belt requires unwavering discipline. ACS brought total statutory cleanliness, eliminated the informal pilferage syndicates that plagued our weighbridge, and gave our global anchor tenants the peace of mind they demand. Their supervisory rigor is unmatched in Eastern India.",
      author: "Vice President of Infrastructure & Asset Protection",
      role: "VP Operations",
      organizationType: "Global Logistics Real Estate Investment Fund",
    },
    relatedServices: [
      { title: "Armed & Unarmed Security Guard Services", slug: "security-guard-services" },
      { title: "Industrial Manpower Outsourcing", slug: "manpower-outsourcing" },
      { title: "Electronic Surveillance & CCTV Management", slug: "surveillance" },
      { title: "Statutory Payroll & Compliance Management", slug: "payroll-management" },
    ],
  },
  {
    id: "cs-02",
    slug: "salt-lake-sector-v-corporate-it-park",
    whitepaperCode: "ACS-WP-2024-SECTOR-V-IT",
    title: "Integrated Facility Management & Critical Asset Security for a Grade-A IT Park",
    subtitle: "Delivering 99.8% MEP operational uptime, computerized visitor management for 6,000+ daily tech professionals, and mechanized hotel-grade housekeeping.",
    sector: "Commercial Real Estate & Information Technology",
    client: "Institutional Commercial Real Estate Fund",
    location: "Salt Lake Sector V, Kolkata",
    state: "West Bengal",
    deploymentScope: "350,000 sq. ft. Multi-Tenant Grade-A Commercial IT/ITES Tower (18 Floors)",
    personnelStrength: "48 Executive Security Guards, 32 Mechanized Housekeeping Staff, 6 BMS/MEP Technicians",
    timeline: "36-Month Master Facility Services Agreement",
    heroImage: "/images/facility-management-image.jpg",
    executiveSummary:
      "A flagship Grade-A commercial complex located in Kolkata's premier technology corridor (Salt Lake Sector V) houses Fortune 500 engineering centers, financial back-offices, and international BPO operations. The property required a unified Integrated Facility Management (IFM) partner capable of combining executive front-of-house security, rapid computerized visitor processing, round-the-clock BMS/HVAC monitoring, and hospital-grade mechanized housekeeping across high-traffic common areas.",
    keyMetrics: [
      {
        value: "99.8%",
        label: "MEP Operational Uptime",
        description: "Zero unplanned power or cooling outages across mission-critical 24/7 client server rooms.",
      },
      {
        value: "10 min",
        label: "Incident Resolution SLA",
        description: "Mean time to respond and rectify tenant-reported facility tickets across 18 floors.",
      },
      {
        value: "96%",
        label: "Tenant Satisfaction",
        description: "Quarterly independent facility survey score averaged across 14 enterprise tenants.",
      },
      {
        value: "6,000+",
        label: "Daily Guest Processing",
        description: "Seamless biometric, QR-pass, and visitor desk handling without lobby queue buildup.",
      },
    ],
    challenges: [
      {
        title: "Complex High-Volume Visitor Flow During Peak Tech Shift Changes",
        description:
          "Simultaneous arrivals of 2,500+ shift workers, gig contractors, and international corporate guests created severe turnstile bottlenecks and security blind spots during morning peak (08:00–10:00).",
        riskSeverity: "High",
      },
      {
        title: "Stringent Mechanized Housekeeping SLAs in Triple-Height Lobbies",
        description:
          "Italian marble atrium lobbies and high-density elevator landings required continuous shine and anti-slip friction indices without disrupting heavy foot-traffic patterns.",
        riskSeverity: "Moderate",
      },
      {
        title: "Mission-Critical HVAC, Chiller & MEP Monitoring",
        description:
          "Data-sensitive IT tenants running continuous US/European financial shifts required 100% cooling redundancy and instantaneous BMS alarm escalation during grid dips.",
        riskSeverity: "Critical",
      },
      {
        title: "Contractor Compliance Across Multiple Fit-Out Contractors",
        description:
          "Continuous interior fit-outs by interior sub-contractors introduced fire hazards, hot-work risks, and unverified worker entries into secure corporate tenant floors.",
        riskSeverity: "High",
      },
    ],
    solutionArchitecture: [
      {
        layer: "Executive Front-of-House Guarding",
        title: "Bilingual Corporate Concierge & Computerized QR Visitor Management",
        specification:
          "Deployed immaculate corporate-uniformed security officers trained in executive hospitality, integrated with cloud-based tablet visitor check-in issuing instant SMS OTP passes and tenant pre-authorization.",
        operationalOutcome:
          "Lobby dwell time reduced from 6 minutes to under 40 seconds per visitor; unauthorized entry attempts dropped to absolute zero.",
      },
      {
        layer: "Mechanized Soft Services & Housekeeping",
        title: "Scheduled Scrubber-Drier Cycles & Green Chemical Sanitation",
        specification:
          "Equipped staff with industrial ride-on and walk-behind automatic scrubber-driers, HEPA-filtered backpack vacuums, and Diversey eco-certified microfiber sanitation systems.",
        operationalOutcome:
          "Maintained mirror-finish lobby floors with zero slip hazards; achieved a certified 98.4% hygiene index during swab test audits across cafeteria and washroom zones.",
      },
      {
        layer: "Hard Services & BMS Operations",
        title: "24/7 Embedded MEP Emergency Technicians & Preventative Maintenance",
        specification:
          "Stationed certified electricians and HVAC technicians inside the central Building Management System (BMS) room to continuously log chiller loads, diesel generator synchronization, and AHU air quality.",
        operationalOutcome:
          "Achieved 99.8% MEP uptime with zero server room thermal anomalies; diesel generator changeover latency maintained under 12 seconds during CESC power fluctuations.",
      },
      {
        layer: "Fit-Out & Fire Safety Oversight",
        title: "Hot-Work Permit Protocols & Night Guard Patrol Sweeps",
        specification:
          "Established strict vendor hot-work permit sign-offs, fire extinguisher standby stations, and thermal camera sweeps of active fit-out floors prior to night lockup.",
        operationalOutcome:
          "Zero fire incidents or property damage across 14 independent corporate tenant architectural fit-outs spanning 36 months.",
      },
    ],
    statutoryComplianceFramework: {
      minimumWageZone: "West Bengal Zone A (Salt Lake / Bidhannagar Municipal Corporation)",
      actsGoverned: [
        "Private Security Agencies (Regulation) Act, 2005 (PSARA)",
        "Contract Labour (Regulation & Abolition) Act, 1970",
        "West Bengal Fire Services Act, 1950",
        "The Building and Other Construction Workers (BOCW) Act",
        "EPFO, ESIC, and Professional Tax Regulations",
      ],
      complianceRate: "100.0% Audited Score",
      auditVerification:
        "All 86 on-site personnel are enrolled on unified payroll, covered by ESIC health protection and statutory PF accounts verified quarterly by the landlord's asset manager.",
    },
    operationalSOPs: [
      {
        category: "Executive Front Desk SOP",
        protocol: "Pre-scheduled guest fast-track, photo ID capture, baggage X-ray screening, and tenant host auto-notification via Slack/Teams webhook.",
        auditCycle: "Continuous Real-Time",
      },
      {
        category: "Mechanized Housekeeping Cycle SOP",
        protocol: "Pre-shift machine sanitization, hourly washroom check-sheets (accessible via QR code), bi-weekly deep crystallization of lobby marble.",
        auditCycle: "Hourly & Daily Check-sheets",
      },
      {
        category: "MEP & Emergency Escalation SOP",
        protocol: "Round-the-clock chiller parameter logging, hourly diesel fuel level check, 6-minute elevator entrapment drill response SLA.",
        auditCycle: "Hourly Logging + Bi-weekly Simulation",
      },
    ],
    measurableImpact: [
      {
        metric: "Commercial Tenant Facility Satisfaction",
        before: "74% satisfaction rating under previous vendor",
        after: "96.2% overall satisfaction rating",
        timeframe: "First 6 Months of ACS Operations",
        verifiedBy: "JLL / Cushman & Wakefield Facility Benchmark Audit",
      },
      {
        metric: "Average MEP Incident Rectification SLA",
        before: "48 minutes average turnaround",
        after: "10.4 minutes average turnaround",
        timeframe: "Rolling 12-Month Average",
        verifiedBy: "Automated Facility Helpdesk Ticketing System",
      },
      {
        metric: "Peak Morning Lobby Queue Time",
        before: "8.5 minutes peak queue per visitor",
        after: "Under 45 seconds average dwell time",
        timeframe: "30 Days post QR-gate integration",
        verifiedBy: "Turnstile Analytics Data",
      },
      {
        metric: "Common Area Power Factor & Energy Saving",
        before: "0.91 PF with excessive lighting draw",
        after: "0.99 PF with automated lux-based dimming",
        timeframe: "Annualized Sustainability Review",
        verifiedBy: "Building Energy Efficiency Committee",
      },
    ],
    clientTestimonial: {
      quote:
        "In a Grade-A tech tower, the margin for error is non-existent. A 10-minute chiller shutdown or a chaotic morning lobby can forfeit enterprise leases. ACS has operated our 350,000 sq. ft. campus like clockwork. Their staff look, act, and execute like true corporate professionals.",
      author: "Senior Director of Asset Management",
      role: "Asset Director",
      organizationType: "Global Real Estate Investment Trust (REIT)",
    },
    relatedServices: [
      { title: "Corporate Housekeeping & Facility Management", slug: "corporate-housekeeping" },
      { title: "Executive Security Guarding", slug: "security-guard-services" },
      { title: "MEP & Building Maintenance", slug: "mep-maintenance" },
      { title: "Fire Fighting & Emergency Response", slug: "fire-fighting" },
    ],
  },
  {
    id: "cs-03",
    slug: "greater-kolkata-multispeciality-hospital",
    whitepaperCode: "ACS-WP-2024-HEALTHCARE-NABH",
    title: "Specialized Hospital Guarding & Infection-Controlled Soft Services for a 300-Bed Medical Facility",
    subtitle: "Zero physical altercations in emergency wards over 24 months, 100% NABH biomedical waste segregation, and engineered 35% ambulance gate clearance.",
    sector: "Healthcare & Critical Medical Infrastructure",
    client: "Leading Private Healthcare Provider",
    location: "Greater Kolkata Metropolitan Area",
    state: "West Bengal",
    deploymentScope: "300-Bed Tertiary Care Hospital, 6 Modular Operating Theatres, Level-1 Trauma Emergency Care Unit",
    personnelStrength: "52 De-escalation Trained Security Officers, 44 Infection-Control Housekeeping Specialists",
    timeline: "Ongoing 4-Year Retainer (Renewed Annually)",
    heroImage: "/images/housekeeping.jpg",
    executiveSummary:
      "A premier 300-bed tertiary multispeciality hospital in Greater Kolkata required a comprehensive overhaul of its hospital guarding, patient security, and clinical infection-control soft services. Hospital security requires a calibrated balance: absolute firm physical deterrence to safeguard doctors and nursing staff from volatile family flare-ups during emergencies, coupled with compassionate, empathetic guidance. On the soft-services front, the hospital demanded zero-contamination sanitation adhering strictly to NABH accreditation guidelines.",
    keyMetrics: [
      {
        value: "Zero",
        label: "Emergency Ward Altercations",
        description: "Zero physical assaults on clinical medical staff across 24 consecutive operating months.",
      },
      {
        value: "100%",
        label: "NABH Bio-Waste Compliance",
        description: "Flawless score across 4 consecutive National Accreditation Board for Hospitals inspections.",
      },
      {
        value: "35%",
        label: "Ambulance Ingress Acceleration",
        description: "Reduction in emergency vehicle transit delays at the main entry ramp and trauma triage bay.",
      },
      {
        value: "44",
        label: "Certified Bio-Clean Staff",
        description: "Housekeeping specialists trained in multi-bucket color-coding and terminal cleaning protocols.",
      },
    ],
    challenges: [
      {
        title: "Emotional Patient Disputes & Mob Intimidation in Emergency Casualty",
        description:
          "Critical care fatalities and triage delays regularly generated volatile flashpoints where grieving family mobs gathered, posing physical threats to duty doctors and damaging triage equipment.",
        riskSeverity: "Critical",
      },
      {
        title: "Strict Color-Coded Biomedical Waste & Infection Transmission Risks",
        description:
          "Cross-contamination risks between infectious isolation wards, operating suites, and general outpatient corridors demanded rigorous adherence to 4-color waste segregation and OT terminal cleans.",
        riskSeverity: "Critical",
      },
      {
        title: "Severe Traffic & Unauthorized Parking Blocking Emergency Ambulance Bays",
        description:
          "General visitor vehicles and local app-cabs continually congested the single entry ramp, trapping inbound critical trauma ambulances in avoidable 4-to-8 minute delays.",
        riskSeverity: "High",
      },
      {
        title: "Infant Abduction Risks & High-Security Maternity Access",
        description:
          "High patient turnover in neonatal ICU (NICU) and maternity wards required airtight mother-infant biometric tag matching and restricted 24/7 access control.",
        riskSeverity: "High",
      },
    ],
    solutionArchitecture: [
      {
        layer: "Tactical & Psychological Security",
        title: "Certified De-Escalation Officers & Emergency Panic Interlock",
        specification:
          "Stationed physically imposing yet emotionally intelligent officers trained in verbal conflict de-escalation, backed by silent foot-pedal panic buttons in doctor triage booths that trigger instant 4-officer containment.",
        operationalOutcome:
          "Successfully de-escalated 87 agitated crowd situations in 24 months before physical contact occurred; zero doctor strikes or ward closures.",
      },
      {
        layer: "Clinical Infection-Control Soft Services",
        title: "NABH-Standard Color-Coded 3-Bucket System & Terminal Cleaning",
        specification:
          "Implemented strict red/yellow/blue/black biomedical segregation using auto-clavable mop heads, non-carcinogenic Virex II 256 disinfectants, and ultraviolet terminal sanitation in modular OTs.",
        operationalOutcome:
          "Achieved hospital-acquired infection (HAI) rates below 0.12%, earning perfect scores across NABH and State Health Department clinical inspections.",
      },
      {
        layer: "Traffic & Ingress Engineering",
        title: "Dedicated Green Ambulance Corridor & One-Way Valet Flow",
        specification:
          "Re-engineered hospital vehicular circulation: installed clear physical bollards creating an exclusive 'Green Lane' for emergency vehicles, staffed by dedicated traffic marshalling guards equipped with high-decibel whistles and LED traffic wands.",
        operationalOutcome:
          "Ambulance gate-to-triage transit time dropped by 35%, ensuring zero cardiac or trauma cases were held up at the peripheral gate.",
      },
      {
        layer: "Maternity & Pediatric High-Security Access",
        title: "Barcoded Mother-Child Verification & 24/7 Female Guard Coverage",
        specification:
          "Female security officers stationed inside NICU and maternity wings cross-checking barcoded wristbands before any newborn discharge or transfer to pediatric wards.",
        operationalOutcome:
          "100% compliance across 4,200+ infant births with zero custody discrepancies or unauthorized ward entries.",
      },
    ],
    statutoryComplianceFramework: {
      minimumWageZone: "West Bengal Zone A (Greater Kolkata Urban Agglomeration)",
      actsGoverned: [
        "Private Security Agencies (Regulation) Act, 2005 (PSARA)",
        "The West Bengal Clinical Establishments Act, 2017",
        "Bio-Medical Waste Management Rules, 2016 (Ministry of Environment)",
        "NABH Standards for Hospitals (5th Edition)",
        "EPFO, ESIC, and Minimum Wages Act, 1948",
      ],
      complianceRate: "100.0% Audited Score",
      auditVerification:
        "All security and soft services staff undergo pre-employment police verification, hepatitis-B vaccination, and monthly biomedical hygiene health check-ups.",
    },
    operationalSOPs: [
      {
        category: "Trauma Ward Code Purple (Aggression) SOP",
        protocol: "Immediate alarm buzz, 60-second perimeter containment by 4 de-escalation guards, physical isolation of doctor station, polite containment of agitated kin to designated counselling room.",
        auditCycle: "Weekly Simulation & Debrief",
      },
      {
        category: "Operating Suite Terminal Clean SOP",
        protocol: "Post-surgery top-to-bottom bio-wash, antimicrobial fogging, contact-time validation (10 minutes minimum), UV-C light sterilization sweep.",
        auditCycle: "After Every High-Infection Surgery + Nightly Full Terminal",
      },
      {
        category: "Ambulance Priority Ingress SOP",
        protocol: "Visual siren alert triggers gate boom lift, green-light corridor signal, clearance of delivery vans, and trauma stretcher pre-positioning.",
        auditCycle: "Continuous 24/7 Protocol",
      },
    ],
    measurableImpact: [
      {
        metric: "Physical Altercations in Casualty / ER",
        before: "8 to 12 incidents annually (prior to ACS)",
        after: "Zero physical incidents in 24 months",
        timeframe: "24-Month Continuous Audit",
        verifiedBy: "Hospital Medical Superintendent & Police Liaison Register",
      },
      {
        metric: "NABH Biomedical Waste Segregation Audit",
        before: "84% compliance with occasional color mixing",
        after: "100% flawless score on NABH unannounced visits",
        timeframe: "4 Successive Inspection Cycles",
        verifiedBy: "NABH Hospital Accreditation Council",
      },
      {
        metric: "Ambulance Gate-to-Triage Transit Time",
        before: "5 min 45 sec average gate dwell",
        after: "3 min 40 sec average transit (35% faster)",
        timeframe: "60 Days post Green Lane roll-out",
        verifiedBy: "Emergency Medicine Department Time-Logs",
      },
      {
        metric: "Hospital-Acquired Infection (HAI) Rate",
        before: "0.68% across post-operative wards",
        after: "0.11% in wards cleaned under ACS protocol",
        timeframe: "Annual Clinical Quality Board Review",
        verifiedBy: "Department of Clinical Microbiology & Epidemiology",
      },
    ],
    clientTestimonial: {
      quote:
        "Hospital security is not just about muscle; it is about medical empathy, legal maturity, and rapid crisis de-escalation. ACS has protected our clinical staff from hostile mobs without ever losing compassion for grieving families. In tandem, their infection-control housekeeping has made our NABH re-accreditation painless. They are true partners in healthcare delivery.",
      author: "Chief Operating Officer & Medical Director",
      role: "COO & Medical Director",
      organizationType: "Leading Private Multispeciality Hospital Network",
    },
    relatedServices: [
      { title: "Specialized Healthcare Security & Guarding", slug: "security-guard-services" },
      { title: "Hospital Infection-Control Housekeeping", slug: "corporate-housekeeping" },
      { title: "Healthcare Manpower & Paramedical Support", slug: "manpower-outsourcing" },
      { title: "Disinfection & Pest Management", slug: "pest-control" },
    ],
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
