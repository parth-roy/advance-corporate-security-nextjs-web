// ============================================================
// ACS — West Bengal Industry Risk Profiles & Compliance Standards
// Covers all 13 sectors with specialized B2B procurement data
// ============================================================

export interface IndustryRiskProfile {
  slug: string;
  name: string;
  wbRiskContext: string;
  statutoryRegulations: string[];
  criticalLiabilities: string[];
  acsSOPModules: string[];
  kpisGuaranteed: Array<{
    metric: string;
    target: string;
    description: string;
  }>;
  procurementChecklist: string[];
}

export const INDUSTRY_PAINPOINTS: Record<string, IndustryRiskProfile> = {
  construction: {
    slug: 'construction',
    name: 'Construction Sites & Infrastructure Projects',
    wbRiskContext:
      'West Bengal infrastructure projects face severe challenges with monsoon inundation, unauthorized scrap salvage syndicates, copper cable theft, and unvetted subcontractor labor entry. Tight project delivery deadlines leave zero room for material inventory shrinkage.',
    statutoryRegulations: [
      'The Building and Other Construction Workers (BOCW) Act, 1996',
      'Contract Labour (Regulation & Abolition) Act, 1970 (West Bengal Rules)',
      'National Building Code (NBC) 2016 Part 4 Fire and Life Safety',
      'West Bengal Minimum Wages Act (Schedule Employment in Construction)',
    ],
    criticalLiabilities: [
      'Principal employer liability for un-registered subcontractor labor injury',
      'Material theft disputes during concrete pouring and structural fabrication',
      'Work stoppage from un-vetted localized labor union incursions',
      'Non-compliance fines under BOCW Cess and safety equipment audits',
    ],
    acsSOPModules: [
      'Biometric and photo QR contractor gate pass issuance at perimeter turnstiles',
      'Mandatory double-sign weighbridge cross-verification for raw steel & cement transit',
      'GPS wand perimeter patrols covering sprawling unlit boundaries every 45 minutes',
      'Designated First-Aid and NBC-certified fire wardens stationed at hot-works zones',
    ],
    kpisGuaranteed: [
      { metric: 'Material Shrinkage Rate', target: '< 0.05%', description: 'Near-zero raw material pilferage across all site gates' },
      { metric: 'Contractor Verification', target: '100%', description: 'Zero un-registered daily laborers inside hazardous zones' },
      { metric: 'Emergency Response SLA', target: '< 3 Mins', description: 'Immediate containment of perimeter incursions or safety breaches' },
    ],
    procurementChecklist: [
      'Valid PSARA License with West Bengal jurisdiction',
      'BOCW and CLRA Form VI labour registration certificate',
      'Mandatory personal accident and third-party liability insurance',
      'Proof of 100% PF/ESIC monthly ECR bank deposits',
    ],
  },

  hotels: {
    slug: 'hotels',
    name: 'Hotels, Resorts & Hospitality Establishments',
    wbRiskContext:
      'Hospitality venues in Kolkata, Siliguri, and Darjeeling balance welcoming warmth with strict vigil. Banqueting crowds, intoxicated guest de-escalation, VIP escort logistics, and luggage scanning require diplomatic, bilingual personnel.',
    statutoryRegulations: [
      'West Bengal Police Hotel & Entertainment Licensing Regulations',
      'Private Security Agencies (Regulation) Act, 2005 (PSARA WB)',
      'Food Safety and Standards Authority of India (FSSAI) hygiene norms',
      'West Bengal Fire Services Act, 1950 & NBC Fire Safety Norms',
    ],
    criticalLiabilities: [
      'Valet parking vehicular damage or theft disputes',
      'Public relations damage from heavy-handed guest confrontations',
      'Banquet hall party-crashers and un-ticketed entry in luxury suites',
      'Female guest safety incidents in elevators and isolated corridors',
    ],
    acsSOPModules: [
      'Grooming and etiquette-trained bilingual greeting concierges and guards',
      'Under-Vehicle Surveillance Mirrors (UVSM) & calibrated DFMD baggage scanning',
      'Trained female security marshals deployed across guest floors and spa areas',
      'Discreet verbal de-escalation protocols for late-night lobby or bar disturbances',
    ],
    kpisGuaranteed: [
      { metric: 'Guest Conflict Resolution', target: '100% Verbal', description: 'Discreet de-escalation without public lobby disruption' },
      { metric: 'Vehicle Screening Rate', target: '100%', description: 'Thorough inspection of all incoming hotel and banquet vehicles' },
      { metric: 'Grooming Audit Compliance', target: '99%+', description: 'Strict adherence to 5-star hospitality uniform standards' },
    ],
    procurementChecklist: [
      'Police Character Verification certificates for all deployed guards',
      'Hospitality soft-skills and English/Bengali/Hindi language certification',
      'Fire fighting and CPR first-aid certification for lobby supervisors',
      'Valid PSARA registration with Kolkata / State Police Controlling Authority',
    ],
  },

  warehouses: {
    slug: 'warehouses',
    name: 'Warehouses, Logistics & Supply Chain Hubs',
    wbRiskContext:
      'Logistics corridors like Dankuni, Dhulagarh, Uluberia, and Sevoke Road process thousands of trucks daily. Key operational risks include dock bay collusion, driver carton pilferage, container seal tampering, and warehouse fire hazards from corrugated packaging.',
    statutoryRegulations: [
      'Warehousing (Development and Regulation) Act, 2007',
      'Factories Act, 1948 or West Bengal Shops & Establishments Act, 1963',
      'Contract Labour (Regulation & Abolition) Act, 1970',
      'Motor Vehicles Act & Logistics Transshipment Safety Protocols',
    ],
    criticalLiabilities: [
      'Inventory shrinkage during shift handovers and carton repackaging',
      'Driver collusion with internal pickers during high-velocity dispatch',
      'Catastrophic warehouse fires from faulty battery charging or discarded cigarette butts',
      'Delivery turnaround delay penalties from unorganized dock gate processing',
    ],
    acsSOPModules: [
      'Mandatory double-blind container bolt-seal verification and digital logging',
      'Full-body frisking with metal detectors and clear-bag policy at staff turnstiles',
      'High-definition CCTV control room operators watching dock bays 24x7',
      'Dedicated logistics traffic marshals maintaining smooth yard truck throughput',
    ],
    kpisGuaranteed: [
      { metric: 'Inventory Shrinkage', target: '< 0.01%', description: 'Elimination of internal theft across high-value SKUs' },
      { metric: 'Gate In/Out Cycle Time', target: '< 6 Mins', description: 'Fast truck turnaround without compromising physical inspections' },
      { metric: 'Seal Integrity Compliance', target: '100%', description: 'Zero un-verified seal departures from fulfillment centers' },
    ],
    procurementChecklist: [
      'Valid West Bengal PSARA License',
      'Round-the-clock supervisor availability and GPS patrol wand tracking',
      'Third-party fidelity guarantee insurance for deployed warehouse personnel',
      '100% statutory compliance track record with audited EPF/ESIC ECRs',
    ],
  },

  residential: {
    slug: 'residential',
    name: 'Residential Societies & Gated Communities',
    wbRiskContext:
      'High-rise residential townships across Kolkata, New Town, and Rajarhat require polite yet firm security. Unscreened delivery executives, resident parking disputes, nighttime amenity trespass, and emergency medical response represent primary daily concerns.',
    statutoryRegulations: [
      'West Bengal Apartment Ownership Act, 1972',
      'Private Security Agencies (Regulation) Act, 2005 (PSARA WB)',
      'Local Municipal Corporation & Fire Safety Guidelines',
      'Statutory Minimum Wages Act (Zone A/B Residential Sector)',
    ],
    criticalLiabilities: [
      'Un-vetted domestic help or delivery agent intrusions and theft',
      'RWA disputes over guard absenteeism and night-shift sleeping on duty',
      'Basement water pump or electrical panel vandalism during late hours',
      'Delayed emergency evacuation during lift failures or localized fires',
    ],
    acsSOPModules: [
      'Seamless integration with digital visitor apps (MyGate, NoBrokerHood)',
      'Hourly night patrol clocking along society boundary walls with RFID tags',
      'Resident vehicle RFID/boom barrier management with designated guest parking slots',
      'First-aid, CPR, and automated external defibrillator (AED) certified supervisors',
    ],
    kpisGuaranteed: [
      { metric: 'Visitor Verification Rate', target: '100%', description: 'Zero un-logged visitors or delivery executives entering towers' },
      { metric: 'Guard Shift Attendance', target: '99.5%+', description: 'Automated biometric attendance with instant replacement relief' },
      { metric: 'Night Patrol Verification', target: '100%', description: 'Daily digital supervisor patrol logs submitted to RWA committee' },
    ],
    procurementChecklist: [
      '100% Police verification records on all residential guards',
      'Uniformity, smart turn-out, and bilingual polite communication skills',
      '24x7 roving mobile patrol supervisor support',
      'Compliance with minimum wage, bonus, and EPF/ESIC guidelines',
    ],
  },

  corporate: {
    slug: 'corporate',
    name: 'Corporate Offices, IT Parks & BFSI',
    wbRiskContext:
      'Campuses in Salt Lake Sector V and New Town Rajarhat demand pristine corporate appearances combined with stringent access control. Critical priorities include preventing badge tailgating, server room security, confidential data protection, and executive safety.',
    statutoryRegulations: [
      'ISO 27001 Information Security Management (Physical Security Controls)',
      'West Bengal Shops and Commercial Establishments Act, 1963',
      'National Building Code 2016 Fire Safety Standards for Commercial High-Rises',
      'The Sexual Harassment of Women at Workplace (POSH) Act, 2013',
    ],
    criticalLiabilities: [
      'Unauthorized physical access to proprietary server rooms and trading floors',
      'Tailgating at optical turnstiles during peak morning arrival surges',
      'Damage to reputation from mishandling agitated visitors or dismissed staff',
      'Non-compliance notices during multinational enterprise client audits',
    ],
    acsSOPModules: [
      'Smart-uniformed, corporate-trained front-desk concierges and security officers',
      'Two-factor biometric and keycard turnstile verification protocols',
      'Dedicated server room dual-custody access authorization registers',
      'BMS and CCTV control room operators with automated escalation trees',
    ],
    kpisGuaranteed: [
      { metric: 'Tailgating Incidents', target: 'Zero Tolerance', description: 'Zero unauthorized entries through lobby speed gates' },
      { metric: 'Client Audit Compliance', target: '100%', description: 'Flawless physical security ratings on third-party ISO audits' },
      { metric: 'Incident Escalation SLA', target: '< 60 Secs', description: 'Immediate alerting of facility management for any alarm triggers' },
    ],
    procurementChecklist: [
      'ISO 9001:2015 certified Quality Management System in place',
      'Corporate etiquette and soft skills training certification',
      'Ex-defence officers heading corporate security operations',
      'Comprehensive statutory compliance file with zero PF/ESIC default history',
    ],
  },

  hospitals: {
    slug: 'hospitals',
    name: 'Hospitals & Healthcare Institutions',
    wbRiskContext:
      'Hospitals across Kolkata and district hubs operate in emotionally charged environments. Agitated patient kin, emergency room confrontations, ambulance bay blockages, and sterile ward access restrictions demand trained, empathetic de-escalation teams.',
    statutoryRegulations: [
      'National Accreditation Board for Hospitals & Healthcare Providers (NABH)',
      'West Bengal Clinical Establishments (Registration and Regulation) Act, 2017',
      'West Bengal Medicare Service Persons & Institutions (Prevention of Violence) Act',
      'Bio-Medical Waste Management Rules, 2016',
    ],
    criticalLiabilities: [
      'Violent assaults on doctors and nursing staff following critical patient events',
      'Blockade of emergency ambulance bays causing patient transit delays',
      'Infant abduction risks in neonatal intensive care units (NICU) and maternity wards',
      'Cross-contamination from unauthorized entry into surgical and quarantine units',
    ],
    acsSOPModules: [
      'Dedicated verbal de-escalation squads stationed 24x7 at Triage and Emergency gates',
      'Strict visitor pass limitation (1 patient, 1 attendant) at ICU & NICU access doors',
      'Traffic marshals continuously clearing emergency ambulance entry and exit ramps',
      'NABH-compliant security protocols with integrated panic button alarms at nursing stations',
    ],
    kpisGuaranteed: [
      { metric: 'Violence Mitigation', target: '100% Contained', description: 'Immediate de-escalation of agitated groups without physical harm' },
      { metric: 'Ambulance Bay Clearance', target: 'Zero Delay', description: '100% unobstructed transit for emergency ambulances' },
      { metric: 'NABH Audit Compliance', target: '100%', description: 'Full adherence to hospital physical security and safety standards' },
    ],
    procurementChecklist: [
      'Healthcare security and patient sensitivity training records',
      'Vaccination and health check compliance for all deployed hospital guards',
      '24x7 direct linkage with local police station for emergency reinforcement',
      'Full compliance with statutory wage, bonus, and EPF/ESIC mandates',
    ],
  },

  'industrial-zones': {
    slug: 'industrial-zones',
    name: 'Industrial Plants, Manufacturing & SEZs',
    wbRiskContext:
      'Heavy manufacturing units in Asansol, Durgapur, Kharagpur, and Haldia deal with union strike picketing, scrap metal mafia intrusion, hazardous chemical risks, and shift change crowd friction. Robust paramilitary-style guarding is essential.',
    statutoryRegulations: [
      'Factories Act, 1948 (West Bengal Directorate of Factories Rules)',
      'Petroleum and Explosives Safety Organization (PESO) Rules',
      'Contract Labour (Regulation & Abolition) Act, 1970',
      'West Bengal Fire Services Act, 1950 and Industrial Disputes Act',
    ],
    criticalLiabilities: [
      'Finished product and raw scrap material theft from plant perimeters',
      'Illegal gate lockouts and plant blockades during labor union friction',
      'Catastrophic industrial fires and hazardous chemical release emergencies',
      'Severe regulatory penalties during Factory Inspectorate audits',
    ],
    acsSOPModules: [
      'Ex-servicemen led industrial security hierarchy with strict sentry discipline',
      'Automated weighbridge integration with under-truck mirror inspections',
      'On-site industrial fire fighting crews and certified hazmat first-responders',
      'Motorized perimeter patrols with high-intensity searchlights and dog squads',
    ],
    kpisGuaranteed: [
      { metric: 'Perimeter Breaches', target: 'Zero Tolerance', description: '100% secure plant boundaries with continuous sentry coverage' },
      { metric: 'Weighbridge Reconciliation', target: '100%', description: 'Zero tonnage discrepancy between weighbridge and gate registers' },
      { metric: 'Shift Turnaround Time', target: '< 15 Mins', description: 'Smooth, disciplined throughput of 1,000+ workers per shift' },
    ],
    procurementChecklist: [
      'Valid PSARA West Bengal license with industrial guarding authorization',
      'DGR empanelment and heavy representation of ex-defence personnel',
      'Comprehensive workplace accident insurance and third-party indemnity',
      'Audited monthly statutory wage, PF, ESI, and LWF compliance dossiers',
    ],
  },

  government: {
    slug: 'government',
    name: 'Government, Secretariats & PSU Facilities',
    wbRiskContext:
      'State secretariats, PSU headquarters, and administrative collectorates experience intense public footfall, delegations, protests, and strict audit scrutiny. Non-negotiable priorities include GeM compliance, vigilance audit proof, and disciplined access control.',
    statutoryRegulations: [
      'General Financial Rules (GFR) 2017 & GeM General Terms and Conditions (GTC)',
      'Private Security Agencies (Regulation) Act, 2005 (Form V License)',
      'Central and State Sphere Minimum Wages Act Notifications',
      'Right to Information (RTI) and CAG Audit Transparency Mandates',
    ],
    criticalLiabilities: [
      'Public demonstration breaches into sensitive administrative chambers',
      'Theft of confidential government documents, records, or digital servers',
      'Adverse CAG audit observations regarding statutory PF/ESIC wage underpayment',
      'Disruption of public services from uncoordinated visitor queues',
    ],
    acsSOPModules: [
      'GeM-registered vendor credentials with flawless past performance certifications',
      'Multi-tier public access scanning with DFMD, HHMD, and x-ray baggage portals',
      'DGR ex-servicemen cadres providing dignified, disciplined sentry details',
      'Transparent online payroll disbursals with 100% verifiable bank credit receipts',
    ],
    kpisGuaranteed: [
      { metric: 'CAG / Vigilance Audit', target: '100% Clear', description: 'Flawless statutory compliance files with zero audit queries' },
      { metric: 'Public Queue Turnaround', target: '< 90 Secs', description: 'Efficient visitor vetting without compromising security checks' },
      { metric: 'VIP Protocol Adherence', target: '100%', description: 'Flawless ceremonial greeting and security cordons for dignitaries' },
    ],
    procurementChecklist: [
      'GeM verified seller profile with active vendor assessment rating',
      'Valid PSARA Form V License covering the administrative district',
      'ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications',
      'Solvency certificate and audited balance sheets showing strong financial health',
    ],
  },

  'defence-establishments': {
    slug: 'defence-establishments',
    name: 'Defence Bases, Cantonments & Military Depots',
    wbRiskContext:
      'Defence bases, MES depots, and ordnance facilities in Barrackpore, Panagarh, and Hasimara demand the highest standard of perimeter sanctity, veteran leadership, and strict intelligence-verified personnel.',
    statutoryRegulations: [
      'Official Secrets Act, 1923 and Defence Security Guidelines',
      'Arms Act, 1959 and Weapon Custody Regulations',
      'Directorate General Resettlement (DGR) Guidelines',
      'Central Sphere Defence Establishment Minimum Wage Circulars',
    ],
    criticalLiabilities: [
      'Breach of military perimeter fence by unauthorized intruders or spies',
      'Pilferage of ammunition, ordnance spares, or strategic fuel reserves',
      'Deployment of unverified personnel posing intelligence risks',
      'Non-compliance with military station standing security orders',
    ],
    acsSOPModules: [
      'Ex-servicemen (ESM) security cadre led by retired Junior Commissioned Officers (JCOs)',
      'Licensed armed sentries with validated annual firing range requalification',
      'Biometric and photo smart-pass verification at cantonment barrier gates',
      'Synchronized joint perimeter patrols with military station security officers',
    ],
    kpisGuaranteed: [
      { metric: 'Perimeter Sanctity', target: '100%', description: 'Zero unauthorized breaches across vast cantonment borders' },
      { metric: 'Personnel Verification', target: '100% Vetted', description: 'Ex-servicemen with verified military discharge books and IB clearance' },
      { metric: 'Sentry Alertness', target: '24x7 Constant', description: 'Continuous vigilance in all weather conditions' },
    ],
    procurementChecklist: [
      'DGR / Ex-servicemen registration certificates',
      'Valid Arms Licenses with regular police ballistic verifications',
      'Past performance certificates from Indian Army, IAF, or MES formations',
      'Full compliance with Central Sphere defence worker statutory wages',
    ],
  },

  railways: {
    slug: 'railways',
    name: 'Railways, Metro & Transit Infrastructure',
    wbRiskContext:
      'Transit corridors across Howrah, Sealdah, and Metro stations handle millions of commuters daily. Goods sheds, locomotive repair yards, and signaling lines are vulnerable to scrap theft, wire vandalism, and stampede risks.',
    statutoryRegulations: [
      'Indian Railways Standard Security Guidelines and Manual',
      'Public Premises (Eviction of Unauthorized Occupants) Act',
      'Railway Protection Force (RPF) and GRP Coordination Protocols',
      'Central Sphere Minimum Wages Act for Transit & Railway Workers',
    ],
    criticalLiabilities: [
      'Theft of signaling copper cables causing train delays and safety hazards',
      'Commuter stampedes on platform stairwells and foot overbridges during peak rush',
      'Unauthorized access to active railway yards and locomotive workshops',
      'Consignment shrinkage at railway freight terminals and transshipment sheds',
    ],
    acsSOPModules: [
      'Transit crowd marshals directing commuter flow and escalator safety',
      'Heavy-duty goods shed sentry units preventing scrap metal and cargo pilferage',
      'Handheld metal detector screening and baggage scanner operations at concourses',
      'Direct radio communication link with on-duty RPF and GRP personnel',
    ],
    kpisGuaranteed: [
      { metric: 'Signaling Cable Theft', target: 'Zero Incidents', description: 'Uncompromising sentry vigilance along yard tracks' },
      { metric: 'Crowd Flow Regulation', target: '100% Streamlined', description: 'Orderly queuing at booking counters and entry turnstiles' },
      { metric: 'Emergency Evacuation SLA', target: '< 4 Mins', description: 'Rapid concourse clearance during emergency drills' },
    ],
    procurementChecklist: [
      'Experience in public transit crowd management and infrastructure security',
      'Valid West Bengal PSARA License',
      'First-aid and disaster response certification for all station supervisors',
      '100% EPF and ESIC statutory compliance record for deployed manpower',
    ],
  },

  airports: {
    slug: 'airports',
    name: 'Airports, Aviation Cargo & Transport Hubs',
    wbRiskContext:
      'Aviation facilities in Kolkata and Bagdogra involve customs-bonded cargo, high-security landside zones, heavy passenger vehicular congestion, and strict Bureau of Civil Aviation Security (BCAS) oversight.',
    statutoryRegulations: [
      'Bureau of Civil Aviation Security (BCAS) AVSEC Regulations',
      'Airports Authority of India (AAI) Operational Guidelines',
      'Contract Labour (Regulation & Abolition) Act, 1970',
      'Central Sphere Aviation Minimum Wage Circulars',
    ],
    criticalLiabilities: [
      'Security breaches across landside-airside boundary gates',
      'Tampering or theft of customs-bonded international cargo consignments',
      'Traffic bottlenecks at departure ramps causing flight delays for passengers',
      'Severe fines from civil aviation authorities for un-badged personnel',
    ],
    acsSOPModules: [
      '100% BCAS-cleared and background-verified auxiliary security personnel',
      'Bonded cargo container escort squads with double-checked digital seal logging',
      'Dedicated traffic marshals streamlining departure curbsides and commercial taxi lanes',
      '24x7 control room operators coordinating with CISF airport command units',
    ],
    kpisGuaranteed: [
      { metric: 'Cargo Seal Integrity', target: '100%', description: 'Zero tampering across all processed airborne cargo containers' },
      { metric: 'Curbside Traffic Flow', target: '< 3 Min Dwell', description: 'Smooth vehicular turnaround at airport departure terminals' },
      { metric: 'Security Audit Pass Rate', target: '100%', description: 'Flawless compliance during unannounced BCAS audits' },
    ],
    procurementChecklist: [
      'BCAS background clearance approval certificates for all staff',
      'Proven track record in airport auxiliary security or aviation logistics',
      'Valid PSARA License and Central Sphere labour compliance certificates',
      'High-level corporate indemnity insurance coverage',
    ],
  },

  'educational-institutions': {
    slug: 'educational-institutions',
    name: 'Universities, Colleges & Educational Campuses',
    wbRiskContext:
      'Educational campuses across West Bengal require polite, reassuring guardians who ensure student safety, protect female hostels, prevent unauthorized intrusions, and manage traffic during peak dispersal hours without feeling restrictive.',
    statutoryRegulations: [
      'Protection of Children from Sexual Offences (POCSO) Act Guidelines',
      'UGC / AICTE Safety and Security Advisory Guidelines for Campuses',
      'West Bengal Fire Services Act, 1950 & NBC Campus Life Safety Norms',
      'State Minimum Wages Act (Educational & Institutional Sector)',
    ],
    criticalLiabilities: [
      'Unauthorized external trespassers entering student zones and hostels',
      'Safety and privacy breaches in female student residential wings',
      'Traffic accidents during school bus arrival and student dispersal periods',
      'Campus unrest or student clashes during student elections or examinations',
    ],
    acsSOPModules: [
      'Polite, background-verified security guards and trained female security wardens',
      'Visitor badge provisioning and parent ID cross-verification at campus gates',
      '24x7 CCTV monitoring of campus boundaries, parking zones, and hostel portals',
      'Traffic marshals ensuring safe passage for school buses and pedestrians',
    ],
    kpisGuaranteed: [
      { metric: 'Visitor Verification Rate', target: '100%', description: 'Zero un-screened external visitors inside campus buildings' },
      { metric: 'Hostel Perimeter Sanctity', target: '100%', description: 'Strict female warden supervision with electronic access logs' },
      { metric: 'Bus Dispersal Safety', target: 'Zero Accidents', description: 'Orderly vehicle flow during morning and afternoon rushes' },
    ],
    procurementChecklist: [
      '100% Police verification records with clear criminal record certificates',
      'POCSO sensitivity and student safety training documentation',
      'Valid PSARA West Bengal license',
      'Audited statutory compliance files with 100% PF/ESIC deposits',
    ],
  },

  malls: {
    slug: 'malls',
    name: 'Retail Malls, Multiplexes & Shopping Centers',
    wbRiskContext:
      'Retail destinations across Kolkata, Howrah, and Asansol experience massive weekend footfalls, shoplifting risks, parking basement bottlenecks, and family safety emergencies. Professional presentation and vigilant loss prevention are paramount.',
    statutoryRegulations: [
      'West Bengal Cinemas & Entertainment Establishments Regulations',
      'National Building Code (NBC) Fire & Emergency Evacuation Norms',
      'West Bengal Shops & Establishments Act, 1963',
      'Private Security Agencies (Regulation) Act, 2005 (PSARA WB)',
    ],
    criticalLiabilities: [
      'Organized shoplifting and internal inventory loss across major retail anchors',
      'Lost children or medical emergencies causing panic during holiday sales',
      'Severe traffic gridlock in multi-level parking basements and access ramps',
      'Public disputes with disruptive patrons damaging mall brand reputation',
    ],
    acsSOPModules: [
      'Smartly uniformed greeting guards at portals with DFMD and HHMD gear',
      'Plainclothes loss prevention officers patrolling fashion aisles and food courts',
      'First-aid and CPR-certified mall marshals equipped with wireless walkie-talkies',
      'Parking marshals directing smooth traffic flow through boom barriers and bays',
    ],
    kpisGuaranteed: [
      { metric: 'Loss Prevention Efficacy', target: '> 85% Reduction', description: 'Sharp drop in retail shrinkage and inventory theft' },
      { metric: 'Parking Turnaround Time', target: '< 4 Mins', description: 'Streamlined basement entry and parking bay guidance' },
      { metric: 'Emergency Incident Response', target: '< 2 Mins', description: 'Immediate supervisor arrival for medical or lost child reports' },
    ],
    procurementChecklist: [
      'Customer service and retail loss prevention training certification',
      'Valid PSARA License with West Bengal jurisdiction',
      'Public liability and third-party property damage insurance coverage',
      'Full statutory compliance dossier with monthly PF/ESIC ECRs',
    ],
  },
};

export function getIndustryRiskProfile(slug: string): IndustryRiskProfile | undefined {
  return INDUSTRY_PAINPOINTS[slug];
}
