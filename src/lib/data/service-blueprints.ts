// ============================================================
// ACS — Service Operational Blueprints & SOP Engine
// Standard Operating Procedures, deployed equipment, and SLAs
// for all 17 core services across West Bengal
// ============================================================

export interface ServiceBlueprint {
  slug: string;
  name: string;
  sopSteps: Array<{ stepNumber: number; title: string; detail: string }>;
  deployedEquipment: string[];
  personnelProfiles: string[];
  complianceGuarantees: string[];
  reportingCadence: string;
}

export const SERVICE_BLUEPRINTS: Record<string, ServiceBlueprint> = {
  'security-guard': {
    slug: 'security-guard',
    name: 'Security Guard Services',
    sopSteps: [
      { stepNumber: 1, title: 'Physical Post Manning', detail: 'Guards report 15 minutes prior to shift change for briefing, turn-out inspection, and logbook handover.' },
      { stepNumber: 2, title: 'Access Control & Vetting', detail: 'Strict visitor badge issuance, employee card scanning, and material gate pass authorization.' },
      { stepNumber: 3, title: 'Clocked Patrol Sweeps', detail: 'Perimeter and interior patrol sweeps conducted at 45-minute intervals using electronic RFID clocking wands.' },
      { stepNumber: 4, title: 'Incident Logging & Alert', detail: 'Instant radio escalation to on-duty Field Officer and immediate entry in digital occurrence registers.' },
    ],
    deployedEquipment: ['VHF/UHF Walkie-Talkies', 'Handheld Metal Detectors (HHMD)', 'LED Search Torches (1000m range)', 'Electronic Patrol Wands & RFID Checkpoints', 'Reflective High-Vis Jackets & Baton'],
    personnelProfiles: ['PSARA Certified Guards (minimum 160 hrs certified training)', 'Matriculate / Higher Secondary qualified', 'Police background checked with clear FIR record', 'Basic First-Aid & Fire Extinguisher certified'],
    complianceGuarantees: ['100% PSARA West Bengal Form V compliance', 'Wage Zone A/B minimum wage guarantee with bank transfer', 'Monthly PF ECR challan and ESIC contribution credit', 'West Bengal Labour Welfare Fund (LWF) deduction proof'],
    reportingCadence: 'Daily digital shift attendance, hourly patrol logbook, and weekly Field Officer audit reports.',
  },

  'armed-guard': {
    slug: 'armed-guard',
    name: 'Armed Guard Services',
    sopSteps: [
      { stepNumber: 1, title: 'Weapon Inspection & Chamber Check', detail: 'Daily ballistic and chamber clearing protocol under Supervisor supervision at designated sand pit clearing station.' },
      { stepNumber: 2, title: 'Static & Escort Sentry Duty', detail: 'Vigilant defensive positioning with 360-degree situational awareness during cash, bullion, or VIP transit.' },
      { stepNumber: 3, title: 'Threat Neutralization Protocol', detail: 'Standardized de-escalation posture transitioning to lawful defensive response per Arms Act and Indian Penal Code provisions.' },
      { stepNumber: 4, title: 'Armory Custody Handover', detail: 'Double-lock safe weapon and live ammunition deposit with registered armory log entries.' },
    ],
    deployedEquipment: ['12-Gauge DBBL / SBBL Shotgun or .32 Revolver', 'Valid All-India / West Bengal Gun License', 'Ballistic Tactical Vest (Level III-A)', 'Lanyard Weapon Holster & Gun Cleaning Kit', 'Two-Way Encrypted Radio'],
    personnelProfiles: ['Ex-Army / Ex-Paramilitary (BSF, CISF, CRPF) veterans', 'Annual firing range requalification certified', 'Psychologically evaluated and medically fit', 'Minimum 10 years disciplined military service'],
    complianceGuarantees: ['Arms Act 1959 valid firearm licensing', 'West Bengal Police Controlling Authority clearance', 'Complete personal accident and fidelity insurance coverage', 'Statutory central/state sphere armed security wage scales'],
    reportingCadence: 'Shift-by-shift live ammunition count log, weapon inspection certification, and quarterly ballistic audit.',
  },

  'surveillance-cctv': {
    slug: 'surveillance-cctv',
    name: 'Surveillance & CCTV Monitoring',
    sopSteps: [
      { stepNumber: 1, title: 'Camera & Feed Health Check', detail: 'Shift handover verification of all IP/analog channels, NVR storage arrays, and perimeter PTZ presets.' },
      { stepNumber: 2, title: 'Active Anomaly Detection', detail: 'Continuous observation of high-risk choke points, dock bays, cash counters, and boundary walls.' },
      { stepNumber: 3, title: 'Remote Guard Dispatch', detail: 'Instant radio alert to roving patrol guards upon detection of perimeter loitering or camera masking.' },
      { stepNumber: 4, title: 'Forensic Footage Archiving', detail: 'Time-stamped clip extraction, evidence watermarking, and secure cloud backup for compliance audits.' },
    ],
    deployedEquipment: ['Multi-Screen Video Wall Consoles', 'Network Video Recorders (NVR) with 30-day RAID storage', 'Perimeter AI intrusion detection analytic software', 'Uninterrupted Power Supply (UPS) backup', 'Dedicated intercom hotline to local police desk'],
    personnelProfiles: ['Certified CCTV & Electronic Security Operators', 'Trained in video analytics and blind-spot identification', 'Strict NDA & data confidentiality agreement certified', 'High mental focus and split-screen vigilance training'],
    complianceGuarantees: ['Data privacy and Indian IT Act 2000 compliance', 'Standardized footage retention and chain-of-custody protocols', 'ISO 27001 physical control alignment', 'Statutory wage and overtime compliance'],
    reportingCadence: '24x7 real-time incident ticketing, daily camera uptime log, and monthly analytical risk summary.',
  },

  'night-patrol': {
    slug: 'night-patrol',
    name: 'Night Patrolling Services',
    sopSteps: [
      { stepNumber: 1, title: 'Night Muster & Perimeter Reconnaissance', detail: 'Night squad briefing at 20:00 hrs with equipment testing, torch battery check, and sector allocation.' },
      { stepNumber: 2, title: 'Continuous Synchronized Patrols', detail: 'Clocked rounds along dark perimeter fences, godown rear walls, and isolated material yards.' },
      { stepNumber: 3, title: 'Lock & Seal Integrity Checks', detail: 'Physical inspection and logging of padlocks, container seals, and shutter sensors at all warehouse bays.' },
      { stepNumber: 4, title: 'Surprise Supervisor Visits', detail: 'Mobile Field Officer night checks conducted twice between 01:00 hrs and 04:30 hrs to ensure alert sentries.' },
    ],
    deployedEquipment: ['Long-Range LED Searchlights (1500m beam)', 'GPS-Enabled Patrol Logging Wands', 'Siren & Strobe Alert Units', 'Reinforced Polycarbonate Night Batons', 'Mobile Communication Android Terminals'],
    personnelProfiles: ['Physically robust, night-shift adapted security personnel', 'Trained guard dog handlers (where canine patrol deployed)', 'Emergency first-responder certified', 'Zero tolerance for sleeping on duty with automated check-in alarms'],
    complianceGuarantees: ['Statutory night shift allowance and welfare compliance', 'Full PSARA West Bengal registration', 'Comprehensive third-party liability coverage', 'Monthly statutory EPF and ESIC returns'],
    reportingCadence: 'GPS digital patrol logs sent at 06:00 hrs daily, accompanied by supervisor night audit stamps.',
  },

  'executive-protection': {
    slug: 'executive-protection',
    name: 'Executive & VIP Protection',
    sopSteps: [
      { stepNumber: 1, title: 'Advance Route Reconnaissance', detail: 'Pre-journey route survey, hospital and safe-house mapping, and alternate escape lane verification.' },
      { stepNumber: 2, title: 'Close Protection Cordon', detail: 'Discrete bodyguard positioning maintaining protective box around the principal at all times.' },
      { stepNumber: 3, title: 'Arrival & Venue Sanitization', detail: 'Pre-arrival sweep of meeting rooms, elevators, and vehicle disembarkation points.' },
      { stepNumber: 4, title: 'Emergency Extraction Protocol', detail: 'Instant vehicular or foot evacuation to designated safe zones upon threat escalation.' },
    ],
    deployedEquipment: ['Concealed Handgun / Defensive Gear', 'Tactical Earpieces & Covert Radios', 'Defensive Driving Equipped Vehicles', 'First-Aid Trauma Medical Kit', 'Level III Concealed Ballistic Vest'],
    personnelProfiles: ['Ex-Special Forces / Commando trained Personal Security Officers (PSOs)', 'Advanced defensive driving and evasive tactical training', 'Fluent in English, Hindi, and regional languages with corporate etiquette', 'Unblemished military service track record'],
    complianceGuarantees: ['All-India Firearms Carry Authorization', 'PSARA West Bengal PSO empanelment', 'Comprehensive executive life and accidental insurance', 'Full confidentiality and NDA enforcement'],
    reportingCadence: 'Pre-movement tactical security brief and end-of-day debriefing log.',
  },

  'fire-fighting': {
    slug: 'fire-fighting',
    name: 'Fire Fighting & Safety Services',
    sopSteps: [
      { stepNumber: 1, title: 'Daily Fire Equipment Audits', detail: 'Physical inspection of fire extinguisher pressure gauges, hydrant valves, hose reels, and diesel jockey pump starters.' },
      { stepNumber: 2, title: 'Hot Works & Permit Monitoring', detail: 'Stationing fire watch personnel with CO2/foam units during welding, cutting, and fuel transfer operations.' },
      { stepNumber: 3, title: 'Evacuation Drill Execution', detail: 'Conducting quarterly planned mock fire drills for facility occupants following NBC guidelines.' },
      { stepNumber: 4, title: 'Emergency Containment', detail: 'First-responder deployment to contain nascent fires, activate suppression systems, and guide West Bengal Fire Services engines.' },
    ],
    deployedEquipment: ['Breathing Apparatus (SCBA Sets)', 'CO2, ABC Dry Powder & Mechanical Foam Extinguishers', 'Fire Proximity Suits & Fire Blankets', 'Hydrant Hoses with Branch Pipes & Fog Nozzles', 'Emergency Megaphones & Sirens'],
    personnelProfiles: ['Certified Firemen from Recognized Fire Training Institutes', 'Trained in National Building Code (NBC) Part 4 standards', 'Industrial HAZMAT and smoke evacuation specialists', 'Experienced in high-rise and manufacturing plant fire management'],
    complianceGuarantees: ['West Bengal Fire Services Act, 1950 adherence', 'National Building Code 2016 safety alignment', 'Form C fire license inspection support', 'Statutory minimum wage and ESIC/PF compliance'],
    reportingCadence: 'Weekly fire asset health checklist, monthly pump-run test certificates, and drill observation records.',
  },

  'event-security': {
    slug: 'event-security',
    name: 'Event Security Services',
    sopSteps: [
      { stepNumber: 1, title: 'Perimeter Barrier & Portal Setup', detail: 'Establishing multi-tier entry cordons, barricades, and separate VIP, general, and media lanes.' },
      { stepNumber: 2, title: 'Frisking & Ticket Scanning', detail: 'Gender-segregated search booths equipped with DFMD portals and bag search tables.' },
      { stepNumber: 3, title: 'Stage & Green Room Protection', detail: 'Ironclad security cordon preventing stage invasion and managing celebrity exit pathways.' },
      { stepNumber: 4, title: 'Dispersal & Egress Management', detail: 'Controlled phased egress preventing bottleneck stampedes at exit gates and parking exits.' },
    ],
    deployedEquipment: ['Door Frame Metal Detectors (DFMD)', 'Handheld Scanners (HHMD)', 'Mojo & Barricade Cordon Systems', 'High-Output Walkie-Talkies on Event Frequencies', 'Crowd Control Megaphones & First-Aid Booths'],
    personnelProfiles: ['Physically imposing, disciplined event security bouncers and guards', 'Trained in verbal crowd psychology and de-escalation', 'Female security wardens for women attendee screening', 'Event safety supervisors coordinating directly with Local Police'],
    complianceGuarantees: ['Local Police Commissionerate event NOC compliance', 'Entertainment and municipal fire safety clearance alignment', 'Third-party event public liability insurance', 'Strict adherence to statutory wage guidelines'],
    reportingCadence: 'Pre-event security blueprint, hourly footfall estimate logs, and incident closure summary.',
  },

  'industrial-security': {
    slug: 'industrial-security',
    name: 'Industrial Security Services',
    sopSteps: [
      { stepNumber: 1, title: 'Weighbridge & Inward Gate Operations', detail: 'Verification of gross/tare truck weight, delivery challans, and physical inspection under truck bed mirrors.' },
      { stepNumber: 2, title: 'Hazardous Area Access Restrictions', detail: 'Enforcing mandatory PPE (safety helmet, goggles, steel-toe boots) before entry into chemical/smelter zones.' },
      { stepNumber: 3, title: 'Shift Gate Turnaround & Frisking', detail: 'Orderly biometric turnaround of shift labor with non-intrusive metal detector frisking.' },
      { stepNumber: 4, title: 'Boundary Sentry Watchtowers', detail: '24x7 watchtower manning overlooking railway sidings, scrap yards, and perimeter fence perimeters.' },
    ],
    deployedEquipment: ['Undercarriage Inspection Mirrors (UVSM)', 'Heavy-Duty Industrial Searchlights', 'Explosive & Hazmat Gas Detectors', 'Digital Weighbridge Cross-Verification Software', 'Motorized Boundary Patrol 4x4 / Bikes'],
    personnelProfiles: ['Ex-Servicemen industrial security supervisors', 'Heavy plant safety & Factories Act trained guards', 'Skilled in scrap metal theft detection', 'Disciplinary enforcement and labor dispute management trained'],
    complianceGuarantees: ['Factories Act 1948 West Bengal Rules compliance', 'Contract Labour (R&A) Act 1970 licensing', 'PESO & hazardous plant security norms', '100% PF, ESIC, and statutory wage adherence'],
    reportingCadence: 'Daily inward/outward vehicle register, scrap dispatch verification, and shift handover reports.',
  },

  housekeeping: {
    slug: 'housekeeping',
    name: 'Corporate Housekeeping Services',
    sopSteps: [
      { stepNumber: 1, title: 'Pre-Shift Briefing & Chemical Dilution', detail: 'Inspection of clean uniform, PPE, and precise dilution of Taski / Diversey eco-friendly cleaning agents.' },
      { stepNumber: 2, title: 'Daily Core Area Cleaning', detail: 'Sweeping, vacuuming, and damp mopping of workspaces, executive cabins, conference halls, and lift lobbies.' },
      { stepNumber: 3, title: 'Hourly Washroom Sanitization', detail: 'Rigorous 10-point washroom cleaning, faucet descaling, liquid soap replenishment, and inspection sheet sign-off.' },
      { stepNumber: 4, title: 'Waste Segregation & Disposal', detail: 'Color-coded bin clearance (wet, dry, recyclable, bio-medical) to municipal collection points.' },
    ],
    deployedEquipment: ['Single-Disc Floor Scrubbers', 'Industrial Wet & Dry Vacuum Cleaners', 'Color-Coded Microfiber Mops & Dusters', 'Janitor Carts & Squeeze Buckets', 'Eco-Friendly Cleaning Chemicals (Taski R1-R9 equivalent)'],
    personnelProfiles: ['Trained housekeeping professionals in crisp, neat uniforms', 'Knowledgeable in cross-contamination prevention and chemical dilution', 'Background checked and medically certified', 'Courteous, non-intrusive behavior in active office spaces'],
    complianceGuarantees: ['West Bengal Minimum Wages (Sweeping & Cleaning Sphere)', '100% EPF and ESIC contribution remittance', 'Compliance with Solid Waste Management Rules 2016', 'Full PPE provisioning (gloves, masks, rubber boots)'],
    reportingCadence: 'Hourly restroom inspection charts, daily consumption logs, and weekly client feedback ratings.',
  },

  janitorial: {
    slug: 'janitorial',
    name: 'Janitorial & Deep Cleaning Services',
    sopSteps: [
      { stepNumber: 1, title: 'Site Inspection & Surface Assessment', detail: 'Surveying marble, granite, epoxy, or tiled floor conditions to determine diamond polishing and cleaning protocols.' },
      { stepNumber: 2, title: 'Heavy Scrubbing & Degreasing', detail: 'Application of high-performance degreasers and mechanical scrubbing of oil stains, grime, and grout build-up.' },
      { stepNumber: 3, title: 'High-Pressure Jet Washing', detail: 'Deep washing of exterior walkways, basements, loading docks, and drain traps with 150-bar pressure jets.' },
      { stepNumber: 4, title: 'Buffing & Surface Crystallization', detail: 'Final diamond-pad crystallization buffing to restore mirror finish on luxury commercial floors.' },
    ],
    deployedEquipment: ['High-Pressure Jet Cleaners (150-200 bar)', 'Heavy-Duty Floor Buffers & Polishers (175 RPM)', 'Industrial Carpet Extraction Machines', 'Upholstery Steam Cleaners', 'Industrial Grout Scrubbers'],
    personnelProfiles: ['Specialized mechanical equipment operators', 'Stone floor restoration and crystallization experts', 'Safety-trained for chemical stripping and industrial cleaning', 'Experienced in post-construction handover deep cleans'],
    complianceGuarantees: ['Statutory skilled/semi-skilled wage compliance', 'Mandatory safety harness and eyewear protocols', '100% PF/ESIC deposit documentation', 'Eco-friendly biodegradable chemical certification'],
    reportingCadence: 'Pre/post photographic handover dossiers, square-footage progress reports, and client sign-off certificates.',
  },

  'pest-control': {
    slug: 'pest-control',
    name: 'Commercial Pest Control Services',
    sopSteps: [
      { stepNumber: 1, title: 'Pest Infestation Survey', detail: 'Thorough mapping of rodent burrows, cockroach harborage zones, termite mud tubes, and fly breeding grounds.' },
      { stepNumber: 2, title: 'Baiting & Targeted Gel Application', detail: 'Strategic placement of odorless cockroach gel baits in pantry cabinets and electrical control panels.' },
      { stepNumber: 3, title: 'Rodent Bait Station Monitoring', detail: 'Installing tamper-proof rodent bait stations along perimeters and monitoring bait consumption every 7 days.' },
      { stepNumber: 4, title: 'Cold Fogging & Residual Spraying', detail: 'Ultra-Low Volume (ULV) cold fogging of basements, garden shrubbery, and drainage lines for mosquito suppression.' },
    ],
    deployedEquipment: ['ULV Cold Fogging Machines', 'Thermal Mosquito Foggers', 'Tamper-Proof Rodent Bait Stations (RBS)', 'Stainless Steel Compression Sprayers', 'Moisture Meters & Termite Drills'],
    personnelProfiles: ['Certified Pest Control Operators licensed by Agriculture / Health Department', 'Knowledgeable in Integrated Pest Management (IPM) protocols', 'Trained in WHO and Central Insecticides Board (CIB) approved chemicals', 'Equipped with chemical cartridge respirators and hazmat overalls'],
    complianceGuarantees: ['Insecticides Act, 1968 compliance', '100% CIB approved chemicals (Bayer, Syngenta grade)', 'FSSAI hygiene audit compliant pest records for food/hospitality', 'Material Safety Data Sheets (MSDS) provided for all formulations'],
    reportingCadence: 'Pest sighting log analysis, bait consumption trends, and monthly pest-free certification.',
  },

  'facade-cleaning': {
    slug: 'facade-cleaning',
    name: 'Facade & Glass Cleaning Services',
    sopSteps: [
      { stepNumber: 1, title: 'Rope & Anchor Point Certification', detail: 'Rigorous inspection of rooftop parapet anchor points, counterweights, and static kernmantle ropes.' },
      { stepNumber: 2, title: 'Ground Safety Exclusion Zone', detail: 'Erecting high-vis warning tape and cones on ground level to protect pedestrians from falling water or tools.' },
      { stepNumber: 3, title: 'Descaling & De-ionized Washing', detail: 'Applying mineral-free pure water and specialist glass descalers to remove hard water stains and pollution film.' },
      { stepNumber: 4, title: 'Streak-Free Squeegee Finish', detail: 'Ergonomic squeegee wiping ensuring crystal-clear optical transparency across architectural glass curtain walls.' },
    ],
    deployedEquipment: ['IRATA-Certified Kernmantle Static Ropes', 'Full-Body Fall Arrest Harnesses & Descenders (Petzl/Camp)', 'Water-Fed Telescopic Carbon Fiber Poles (up to 60 ft)', 'Roof Anchor Weights & Gondola Suspension Systems', 'Reverse Osmosis De-ionized Pure Water Tanks'],
    personnelProfiles: ['IRATA Level 1 / 2 Certified Rope Access Technicians', 'Medical fitness certified for working at extreme heights (above 50m)', 'Trained in self-rescue and high-angle emergency descent', 'Strict zero-alcohol, zero-vertigo certified'],
    complianceGuarantees: ['Directorate of Industrial Safety & Health (DISH) height safety norms', 'Specialized High-Altitude Personal Accident Insurance of ₹15 Lakhs+ per worker', 'Factories Act / Building Construction safety rules', 'Statutory high-skilled wage rates with full EPF/ESIC'],
    reportingCadence: 'Daily drop count logs, weather safety wind-speed checks, and before/after elevation photos.',
  },

  'mep-maintenance': {
    slug: 'mep-maintenance',
    name: 'MEP Maintenance Services',
    sopSteps: [
      { stepNumber: 1, title: 'Daily Plant Room Walkthrough', detail: 'Logging voltage, current, power factor, water pump pressure, chiller flow rates, and DG set battery voltage.' },
      { stepNumber: 2, title: 'Preventive Maintenance (PPM)', detail: 'Carrying out scheduled servicing of air handling units (AHUs), filter cleaning, panel terminal torquing, and grease lubrication.' },
      { stepNumber: 3, title: 'Breakdown Troubleshooting', detail: 'Rapid response team resolving circuit breaker trips, plumbing leaks, or HVAC cooling failures within 20 minutes.' },
      { stepNumber: 4, title: 'Statutory Energy & Safety Logging', detail: 'Maintaining electrical logbooks, diesel stock consumption, earthing pit resistance measurements, and water tank sanitation.' },
    ],
    deployedEquipment: ['Digital Multimeters & Clamp Meters', 'Thermal Imaging Infrared Cameras (FLIR)', 'Earth Resistance Testers & Meggers', 'Plumbing Drain Snakes & Pipe Threading Kits', 'Refrigerant Manifold Gauges & Vacuum Pumps'],
    personnelProfiles: ['Licensed Electrical Supervisors (Workmen Permit Class B/C)', 'Certified HVAC & Chiller Technicians', 'Industrial Plumbers & Pump Mechanics', 'DG Set & Transformer Maintenance Specialists'],
    complianceGuarantees: ['Central Electricity Authority (CEA) Safety Regulations', 'West Bengal Electrical Licensing Board guidelines', 'National Building Code 2016 Building Services norms', 'Statutory technical skilled wage compliance with EPF/ESIC'],
    reportingCadence: 'Daily energy consumption graphs, weekly PPM completion tracker, and monthly equipment uptime index.',
  },

  'manpower-outsourcing': {
    slug: 'manpower-outsourcing',
    name: 'Manpower Outsourcing Services',
    sopSteps: [
      { stepNumber: 1, title: 'Role Profiling & Talent Sourcing', detail: 'Matching candidate skill matrices with client factory/warehouse operational requirements.' },
      { stepNumber: 2, title: 'Background Verification & KYC', detail: 'Aadhaar authentication, bank account linkage, and local police verification of all blue-collar recruits.' },
      { stepNumber: 3, title: 'Induction & EHS Training', detail: 'Mandatory workplace safety, PPE usage, 5S principles, and discipline briefing before deployment.' },
      { stepNumber: 4, title: 'On-Site Roster & Supervisor Management', detail: 'Daily biometric attendance tracking, shift rostering, and instant replacement buffer provisioning.' },
    ],
    deployedEquipment: ['Portable Biometric Thumbprint / Face Attendance Terminals', 'Digital Workforce Management & Shift Planning Portal', 'Standardized Safety Gear (Helmets, Safety Shoes, High-Vis)', 'ID Cards with Dynamic QR Verification'],
    personnelProfiles: ['Skilled Machine Operators, Welders, Electricians, and Fitters', 'Semi-Skilled Assembly Line & Packaging Staff', 'Unskilled Loading, Unloading & Material Handling Crew', 'Dedicated On-Site Floor Labour Supervisors'],
    complianceGuarantees: ['Contract Labour (Regulation & Abolition) Act, 1970 licensing (Form VI)', 'West Bengal Minimum Wages Act (Zone A/B) adherence', '100% PF ECR and ESIC monthly payment challans submitted with invoice', 'Zero legal liability indemnification for Principal Employer'],
    reportingCadence: 'Daily shift headcount reports, monthly attendance muster rolls, and statutory wage credit reconciliations.',
  },

  'placement-services': {
    slug: 'placement-services',
    name: 'Permanent & Temporary Placement Services',
    sopSteps: [
      { stepNumber: 1, title: 'Job Description Calibration', detail: 'Comprehensive intake meeting with client HR to define technical competencies, cultural fit, and salary bands.' },
      { stepNumber: 2, title: 'Multi-Channel Candidate Sourcing', detail: 'Leveraging ACS proprietary 25-year Eastern India candidate database, job boards, and referral networks.' },
      { stepNumber: 3, title: 'Technical Screening & Shortlisting', detail: 'Two-tier pre-interview evaluation assessing domain skills, communication ability, and employment stability.' },
      { stepNumber: 4, title: 'Offer Rollout & Retention Tracking', detail: 'Facilitating salary negotiations, background verification, onboarding, and 90-day post-placement follow-up.' },
    ],
    deployedEquipment: ['Applicant Tracking System (ATS)', 'Automated Resume Parsing & Screening Software', 'Psychometric & Skill Testing Platforms', 'Digital Reference Check Verification Tools'],
    personnelProfiles: ['Senior Technical & Executive Recruiters', 'Industry Specialists in Manufacturing, Logistics, IT, and Healthcare', 'Dedicated Account Managers for High-Volume Bulk Hiring', 'Candidate Onboarding & Document Verification Executives'],
    complianceGuarantees: ['Employment Exchange & Labour Department placement guidelines', 'Strict non-disclosure agreements regarding client organizational charts', 'Free candidate replacement guarantee (up to 90 days of joining)', 'Equal opportunity and fair hiring compliance'],
    reportingCadence: 'Weekly candidate pipeline dashboards, interview conversion ratios, and time-to-hire metric reviews.',
  },

  'payroll-management': {
    slug: 'payroll-management',
    name: 'Payroll & Compliance Management',
    sopSteps: [
      { stepNumber: 1, title: 'Attendance & Variable Ingestion', detail: 'Synchronizing biometric logs, overtime hours, leave records, and performance bonuses by the 25th of every month.' },
      { stepNumber: 2, title: 'Statutory Computation Engine', detail: 'Automated calculation of Basic, DA, HRA, PF (12%), ESIC (0.75%/3.25%), Professional Tax (PT), and TDS.' },
      { stepNumber: 3, title: 'Direct Bank NEFT/RTGS Disbursals', detail: 'One-click encrypted salary disbursement directly into employee bank accounts on the 1st of every month.' },
      { stepNumber: 4, title: 'Challan Generation & Filing', detail: 'Timely filing of EPFO ECR, ESIC returns, West Bengal PT Form VIII, and issuance of digital Form 16s.' },
    ],
    deployedEquipment: ['Cloud-Based Payroll & HRMS Software', 'Direct Bank API Integration for Bulk NEFT Disbursals', 'Self-Service Employee Mobile App for Payslip Downloads', 'Automated Statutory Challan Filing Bot'],
    personnelProfiles: ['Certified Payroll Managers & Chartered Accountants', 'Labour Law Compliance Legal Specialists', 'Employee Helpdesk Support Executives', 'Data Security & Audit Verification Officers'],
    complianceGuarantees: ['Employees Provident Funds & MP Act, 1952 compliance', 'Employees State Insurance Act, 1948 compliance', 'West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979', 'Payment of Wages Act, 1936 & Minimum Wages Act, 1948'],
    reportingCadence: 'Monthly salary register, bank disbursement confirmation receipts, and filed PF/ESIC/PT challan dossiers.',
  },

  horticulture: {
    slug: 'horticulture',
    name: 'Horticulture & Landscaping Services',
    sopSteps: [
      { stepNumber: 1, title: 'Soil & Micro-Climate Assessment', detail: 'Testing soil pH, drainage capacity, sun exposure, and choosing resilient native flora suited for Bengal weather.' },
      { stepNumber: 2, title: 'Lawn Mowing & Turf Care', detail: 'Weekly synchronized lawn mowing, aeration, edge trimming, and dethatching to maintain lush green carpets.' },
      { stepNumber: 3, title: 'Tree Pruning & Shrub Sculpting', detail: 'Seasonal pruning of avenue trees, hedge topiaries, and removing hazardous deadwood before monsoon gales.' },
      { stepNumber: 4, title: 'Organic Nutrition & Pest Defense', detail: 'Scheduled application of vermicompost, bone meal, neem-cake extract, and drip irrigation scheduling.' },
    ],
    deployedEquipment: ['Ride-On and Self-Propelled Rotary Lawn Mowers', 'Electric & Petrol Hedge Trimmers', 'Telescopic Tree Pruners & Chainsaws', 'Drip & Sprinkler Irrigation Timers', 'Motorized Knapsack Sprayers for Organic Nutrients'],
    personnelProfiles: ['Degree-Qualified Horticulturalists & Landscape Architects', 'Trained Corporate Gardeners (Malis) with 5+ years experience', 'Arborists skilled in tree conservation and high-branch trimming', 'Indoor plant care specialists managing boardroom air-purifying foliage'],
    complianceGuarantees: ['Environment Protection Act & Local Municipal Green Cover norms', 'West Bengal Minimum Wages (Agricultural / Horticultural sphere)', '100% EPF and ESIC contribution remittance', 'Safe usage of non-toxic eco-friendly organic inputs'],
    reportingCadence: 'Monthly lawn health index, seasonal planting schedule, and botanical inventory updates.',
  },

  'warehouse-manpower-supply': {
    slug: 'warehouse-manpower-supply',
    name: 'Warehouse Logistics Staffing & Helper Manpower',
    sopSteps: [
      { stepNumber: 1, title: 'WMS Role Profiling & Surge Staging', detail: 'Mapping bay volume to exact picker, packer, scanner, and MHE forklift operator headcount from regional logistics benches.' },
      { stepNumber: 2, title: 'Aadhaar KYC & Anti-Shrinkage Briefing', detail: 'Pre-deployment verification, pocketless uniform issuance, and standard 5S warehouse aisle training.' },
      { stepNumber: 3, title: 'RF-Scan Pick & Container Destuffing Execution', detail: 'Shift-wise execution across inbound docks, put-away bins, cold rooms, and dispatch staging lanes.' },
      { stepNumber: 4, title: 'Biometric Attendance & Throughput Audit', detail: 'Turnstile biometric sync feeding digital muster rolls, 1/6th reliever tracking, and shift-end challan reconciliation.' },
    ],
    deployedEquipment: ['Biometric Attendance Terminals', 'Safety Shoes (IS 15298) & High-Vis Vests', 'Cut-Resistant Nitrile Handling Gloves', 'Portable Hand Trolleys & Stretch-Wrap Dispensers', 'Walkie-Talkie Supervisor Coordination Radios'],
    personnelProfiles: ['RF-Gun Pickers, Packers & Inventory Sorters', 'Licensed Reach-Truck & Forklift (MHE) Operators', 'Inbound Container Destuffing & Palletizing Crews', 'On-Site Shift Supervisors & Dispatch Coordinators'],
    complianceGuarantees: ['CLRA Form-V license with Principal Employer indemnification', 'West Bengal Zone A/B minimum wages bank-credited by 7th', 'Day-1 ESIC injury cover & 13% EPFO ECR monthly reconciliation', '16.67% trained reliever buffer eliminating illegal overtime'],
    reportingCadence: 'Shift-wise bay attendance, hourly box/pallet throughput logs, and monthly statutory compliance dossier.',
  },

  'industrial-factory-workers': {
    slug: 'industrial-factory-workers',
    name: 'Industrial Factory Labor & Technical Machine Operators',
    sopSteps: [
      { stepNumber: 1, title: 'ITI Skill Assessment & Form 35 Medical Check', detail: 'Trade testing for CNC, lathe, press, welding, or assembly roles paired with registered Factory Act surgeon fitness certification.' },
      { stepNumber: 2, title: 'DISH Safety & LOTO Floor Induction', detail: 'Mandatory pre-shift training on machine guarding, Lockout/Tagout (LOTO), PPE usage, and shopfloor emergency stops.' },
      { stepNumber: 3, title: 'Production Line Shift Deployment', detail: 'Continuous 8-hour rotational shifts supervised by ACS floor marshalls aligned to target batch production quotas.' },
      { stepNumber: 4, title: 'Form-B Register & Statutory Reconciliation', detail: 'Daily overtime compliance tracking (Sec 59 double rate), bank wage transfer, and EPF/ESIC UAN credit filing.' },
    ],
    deployedEquipment: ['ANSI Z87.1 Safety Goggles & Hard Hats (IS 2925)', 'Leather Welding Aprons, Heat Gloves & Ear Muffs', 'Oil/Acid Resistant Steel-Toe Work Boots', 'Biometric Shift Terminals & Shopfloor Job Cards'],
    personnelProfiles: ['Certified CNC, Lathe & Hydraulic Press Operators', 'ITI Welders (ARC, MIG, TIG) & Maintenance Fitters', 'Semi-Skilled Assembly, Bottling & Grading Staff', 'General Karkhana Helpers & Raw Material Feeders'],
    complianceGuarantees: ['Factories Act 1948 & West Bengal Factories Rules compliance', 'Valid Form 35 Medical Certificates before floor deployment', '100% EPF (13%), ESIC (3.25%), Bonus (8.33%) & WB LWF', 'Complete Principal Employer insulation under CLRA Section 21'],
    reportingCadence: 'Daily shift attendance muster, line safety incident zero-logs, and monthly UAN/ESIC audit packs.',
  },

  'loading-unloading-labour': {
    slug: 'loading-unloading-labour',
    name: 'Warehouse Loading, Unloading & Hamali Labour Contractors',
    sopSteps: [
      { stepNumber: 1, title: 'Hamali Gang Assembly & Bay Allocation', detail: 'Staging experienced 6-to-12 worker loading squads with shift mukaddam (gang leader) at designated truck/rail bays.' },
      { stepNumber: 2, title: 'Container Seal & Vehicle Safety Chocking', detail: 'Placement of wheel chocks, ramp leveler inspection, and photographic container seal verification prior to door opening.' },
      { stepNumber: 3, title: 'Tonnage / Carton Stacking & Lorry Loading', detail: 'Damage-free manual or pallet-jack loading/destuffing in interlocking layers across sacks, cartons, drums, or crates.' },
      { stepNumber: 4, title: 'Challan Reconciliation & CLRA Form-V Signoff', detail: 'Count verification with warehouse supervisor, tonnage/piece log sign-off, and digital muster closure.' },
    ],
    deployedEquipment: ['Wheel Chocks & Mobile Dock Plates', 'Heavy-Duty Hand Trolleys & Pallet Jacks', 'Reinforced Shoulder Pads, Back-Support Belts & Gripped Gloves', 'Steel-Toe Safety Footwear & Fluorescent Vests'],
    personnelProfiles: ['Experienced Godown Mutia & Hamali Mazdoor Squads', 'Cold-Storage Thermal Suit Loading Hands', 'Container Stuffing/Destuffing Specialists', 'Gang Supervisors (Mukaddams) managing bay turnarounds'],
    complianceGuarantees: ['CLRA Form-V registered contract labour gang supply', 'Full ESIC medical & Workmen Compensation trauma cover', '13% EPF + 8.33% Bonus + WB Zone A/B minimum wages', 'Zero cash middleman leakage — direct worker bank transfers'],
    reportingCadence: 'Daily truck turnaround sheet, tonnage/carton count register, and monthly ECR compliance file.',
  },

  'industrial-electrician-contractors': {
    slug: 'industrial-electrician-contractors',
    name: 'Industrial & Commercial Electrician Contractors (HT/LT)',
    sopSteps: [
      { stepNumber: 1, title: 'Electrical LOTO & Voltage Isolation Audit', detail: 'De-energizing panels under Lockout/Tagout tags, insulated mat verification, and arc-flash PPE donning.' },
      { stepNumber: 2, title: 'Transformer, HT/LT Switchgear & DG Set PPM', detail: 'Checking transformer oil levels, tightening busbar lugs, inspecting APFC capacitors, and testing AMF DG auto-start.' },
      { stepNumber: 3, title: 'Rapid Breakdown & Earth-Fault Rectification', detail: 'Sub-15 minute fault isolation on VFD trips, MCC starter burnouts, and commercial lighting distribution boards.' },
      { stepNumber: 4, title: 'CEA Statutory Logbook & Energy Signoff', detail: 'Hourly voltage/ampere/PF logging, earth-pit megger values, and diesel run-hour audit reports.' },
    ],
    deployedEquipment: ['Fluke Digital Clamp Meters & True-RMS Multimeters', 'Infrared Thermal Imaging Cameras & Earth Meggers', '11kV Insulated Gloves, Arc-Flash Shields & Rubber Mats', 'LOTO Padlock Kits, Hydraulic Lug Crimpers & Insulated Tools'],
    personnelProfiles: ['Govt. Licensed Wireman Permit & Supervisor Permit Holders', 'HT/LT Panel, VCB/ACB & Busbar Maintenance Electricians', 'Diesel Generator (DG Set) & Synchronizing Panel Operators', 'Industrial Motor, Starter & Lighting Shift Wiremen'],
    complianceGuarantees: ['Central Electricity Authority (CEA) Safety Regulations adherence', 'West Bengal Electrical Licensing Board permit verification', 'Skilled Category Statutory Wages + 13% EPF + ESIC/WC Insurance', 'Strict Permit-to-Work (PTW) documentation on every site'],
    reportingCadence: 'Hourly electrical parameter log sheets, weekly IR thermography alerts, and monthly PPM health report.',
  },

  'commercial-plumbing-contractors': {
    slug: 'commercial-plumbing-contractors',
    name: 'Commercial Plumbing, Pipeline & STP/WTP Operator Staffing',
    sopSteps: [
      { stepNumber: 1, title: 'Pipeline Network & Utility Header Inspection', detail: 'Morning pressure gauge checks on borewell risers, booster pumps, RO plants, fire-hydrant wet risers, and overhead tanks.' },
      { stepNumber: 2, title: 'STP / WTP / ETP Daily Water Quality Testing', detail: 'Dosing alum/hypochlorite, monitoring MLSS/pH/TDS levels, cleaning bar screens, and logging pump amperages.' },
      { stepNumber: 3, title: 'Valve Repair, Pipe Joining & Drain Clearance', detail: 'Preventive gasket replacements, CPVC/GI/MS pipe threading, motorized drain snake rodding, and flush-valve calibration.' },
      { stepNumber: 4, title: 'PCB Effluent & Consumption Register Signoff', detail: 'Recording treated water reuse volumes, tank chlorination logs, and preventive valve checklists.' },
    ],
    deployedEquipment: ['Motorized Drain Cleaning Auger Snakes & Jetters', 'GI/MS Pipe Threading, CPVC Fusion & Flange Wrench Kits', 'Hydro-Testing Pressure Pumps & Flow Meters', 'Digital pH/TDS Testers & Confined-Space Gas Monitors'],
    personnelProfiles: ['Commercial Plumbers & Industrial Pipeline Fitters', 'STP, WTP & ETP Treatment Plant Shift Operators', 'Hydro-Pneumatic & Fire-Hydrant Pump Mechanics', 'Multi-Utility Sanitary & Washroom Maintenance Plumbers'],
    complianceGuarantees: ['WB Pollution Control Board STP/ETP operating logbook alignment', 'Confined-space safety harness & gas-detector SOP enforcement', 'Skilled/Semi-Skilled WB minimum wage + 13% EPF + ESIC', 'Zero subcontracting leakage — 100% ACS payroll staff'],
    reportingCadence: 'Daily water supply & STP/WTP parameter logbooks, leak-closure tracker, and monthly spares utilization sheet.',
  },

  'hvac-ac-maintenance-staffing': {
    slug: 'hvac-ac-maintenance-staffing',
    name: 'Commercial HVAC, Chiller & Cold Storage AC Technicians',
    sopSteps: [
      { stepNumber: 1, title: 'Chiller, Cooling Tower & AHU Walkthrough', detail: 'Recording chilled-water supply/return temps, condenser approach temperatures, refrigerant pressures, and cold-room setpoints.' },
      { stepNumber: 2, title: 'Coil Cleaning, Belt Tensioning & Filter PPM', detail: 'Weekly high-pressure AHU filter washing, blower belt tension checks, cooling tower basin descaling, and VRF drain flushing.' },
      { stepNumber: 3, title: 'Refrigeration Fault & Temperature Spike Response', detail: 'Nitrogen leak pressure testing, copper brazing, vacuum pulling, refrigerant top-up, and compressor relay replacement.' },
      { stepNumber: 4, title: 'BMS Thermal Compliance & Energy Logging', detail: 'Compiling cleanroom / cold-storage continuous temperature charts and chiller kW/TR efficiency audits.' },
    ],
    deployedEquipment: ['Digital Refrigerant Manifold Gauges & Two-Stage Vacuum Pumps', 'Oxy-Acetylene Brazing Torches & Leak Detectors', 'Anemometers, Psychrometers & Clamp Ammeters', 'High-Pressure Coil Jet Washers & Fin Combs'],
    personnelProfiles: ['Screw/Centrifugal Chiller Plant Shift Operators', 'Cold Storage Ammonia/Freon Refrigeration Technicians', 'VRF/VRV, Ductable & Split AC AMC Mechanics', 'AHU, FCU & Cleanroom HVAC Balancing Technicians'],
    complianceGuarantees: ['Ozone-depleting/HFC safe refrigerant handling practices', 'Cold-chain FSSAI / WHO GDP temperature log discipline', 'Skilled HVAC technician WB statutory wages with EPF & ESIC', '24x7 critical server-room & cold-storage standby rosters'],
    reportingCadence: '2-hourly chiller/cold-room temp logs, quarterly condenser descaling reports, and monthly uptime KPI deck.',
  },

  'carpentry-painting-civil-labour': {
    slug: 'carpentry-painting-civil-labour',
    name: 'Industrial Carpentry, Shed Painting & Civil Maintenance Labour',
    sopSteps: [
      { stepNumber: 1, title: 'Scope Survey & Material / PPE Mobilization', detail: 'Measuring wooden crate dimensions, epoxy floor surface cracks, or corporate partition hardware requirements.' },
      { stepNumber: 2, title: 'Surface Prep, Precision Joinery or Epoxy Coat', detail: 'Scarifying concrete slabs, primer-sealing factory trusses, cutting ISPM-15 export crates, or refitting modular desks.' },
      { stepNumber: 3, title: 'Work-at-Height Safety & Fume Ventilation Check', detail: 'Enforcing full-body safety harnesses above 6 ft and organic-vapor masks during PU/epoxy coating shifts.' },
      { stepNumber: 4, title: 'Cure Inspection & Client Snag Clearance', detail: 'Walking finished zones with plant/admin engineer, clearing debris, and signing job completion sheets.' },
    ],
    deployedEquipment: ['Industrial Nail Guns, Circular Saws & Mitre Cutters', 'Airless Paint Sprayers, Epoxy Rollers & Floor Scarifiers', 'Full-Body Height Harnesses, Scaffolding Tags & Masks', 'Drill/Driver Kits, Spirit Levels & Masonry Trowels'],
    personnelProfiles: ['Export Packing Crate & Pallet Carpenters', 'Industrial Epoxy Floor & Shed Structural Painters', 'Commercial Furniture, Lock, Hinge & Partition Carpenters', 'Masons, Plasterers, Waterproofers & Civil Helpers'],
    complianceGuarantees: ['DISH Height-Safety & Scaffolding Inspection adherence', 'WB Minimum Wages (Skilled Artisan vs Unskilled Helper tiers)', 'Mandatory ESIC & Group Accident policy before ladder/roof entry', '100% EPF ECR & Form-V CLRA contractor shield'],
    reportingCadence: 'Daily area-covered/crates-built tracker, safety toolbox talk attendance, and completion snag sign-offs.',
  },

  'office-support-peon-pantry-staff': {
    slug: 'office-support-peon-pantry-staff',
    name: 'Corporate Office Boys, Peons, Pantry & Facility Support Staff',
    sopSteps: [
      { stepNumber: 1, title: 'Morning Briefing & Pantry/Floor Readiness', detail: 'Roll-call turnout check at 08:30 AM, sanitization of coffee/tea vending machines, boardroom water setup, and stationery restock.' },
      { stepNumber: 2, title: 'Desk Hospitality, Courier & Document Routing', detail: 'Courteous guest refreshment service, inter-department file dispatch, mailroom couriers, and photocopying support.' },
      { stepNumber: 3, title: 'Hourly Restroom Inspection & Scrap Segregation', detail: 'Checked washroom odor/consumable sweeps and wet/dry/recyclable waste movement to designated collection bins.' },
      { stepNumber: 4, title: 'End-of-Day Appliance Switch-Off & Signoff', detail: 'Powering down pantry boilers, securing stationery closets, and submitting supervisor daily checklist.' },
    ],
    deployedEquipment: ['Crisp Corporate Waistcoats, Caps & Food-Grade Gloves', 'Microfiber Boardroom Wiping Cloths & Service Trays', 'Restroom Inspection Log Cards & Replenishment Trolleys', 'Color-Coded Waste Bags & Mailroom Dispatch Registers'],
    personnelProfiles: ['Groomed Corporate Office Boys & Executive Peons', 'Trained Pantry Stewards & Boardroom Hosts', 'Dedicated Restroom Janitors & Hygiene Attendants', 'Office Scrap Handlers, Mailroom & Banking Runners'],
    complianceGuarantees: ['100% Aadhaar KYC & Local Police Antecedent Verification', 'Minimum Wages Act (Commercial Establishment) Zone A/B parity', 'On-time 7th-of-month NEFT bank salary + EPF/ESIC credit', 'Immediate trained reliever cover within 2 hours for leave/absence'],
    reportingCadence: 'Hourly washroom checklists, pantry consumable usage logs, and monthly statutory attendance sheets.',
  },

  'commercial-shifting-relocation-labour': {
    slug: 'commercial-shifting-relocation-labour',
    name: 'Commercial Office Moving, Heavy Machinery & Warehouse Shifting Crew',
    sopSteps: [
      { stepNumber: 1, title: 'Pre-Move Inventory Tagging & Rigging Plan', detail: 'Barcode-tagging IT workstations, dismantling glass partitions, or calculating center-of-gravity & crane sling capacity for heavy machines.' },
      { stepNumber: 2, title: 'Protective Wrapping & Controlled Dismantling', detail: 'Anti-static bubble-wrapping servers/monitors, unbolting heavy warehouse pallet racks, and securing loose cables/drawers.' },
      { stepNumber: 3, title: 'Multi-Crew Loading, Skate Moving & Transit', detail: 'Synchronized trolley movement via freight lifts/ramps using hydraulic pallet jacks, crowbars, machine skates, and lashing belts.' },
      { stepNumber: 4, title: 'Floor Placement, Rack Re-Bolting & Handover', detail: 'Positioning desks, servers, or factory machinery per floor CAD layout, torque-tightening anchors, and clearing packing scrap.' },
    ],
    deployedEquipment: ['Heavy Machinery Rollers/Skates, Hydraulic Jacks & Chain Pulleys', 'Pallet Trucks, Stair-Climbing Dollies & Ratchet Lashing Straps', 'Anti-Static Bubble Rolls, Corrugated Sheets & Stretch Film', 'Cordless Impact Wrenches, Allen Keys & Crate-Sealing Tools'],
    personnelProfiles: ['Industrial Rigging Foremen & Heavy Equipment Movers', 'Corporate Workstation & IT Rack Shifting Technicians', 'Warehouse Racking Dismantling & Reinstallation Mechanics', 'Uniformed Bulk Packing & Container Loading Helpers'],
    complianceGuarantees: ['CLRA coverage with mandatory ESIC & Group Accident Insurance', 'Supervisor-led Toolbox Talk & pinch-point safety briefings', 'Strict Non-Disclosure (NDA) discipline for IT/banking moves', 'Clear invoice & bank-paid wage parity with statutory dues'],
    reportingCadence: 'Zone-by-zone asset tagging manifest, hour-by-hour shift progress logs, and damage-free completion signoff.',
  },
};

export function getServiceBlueprint(slug: string): ServiceBlueprint | undefined {
  return SERVICE_BLUEPRINTS[slug];
}
