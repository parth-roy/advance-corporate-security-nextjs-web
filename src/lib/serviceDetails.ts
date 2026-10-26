// src/lib/serviceDetails.ts
// ============================================================
// ACS Enterprise Service Details Architecture
// Operational Scopes, Training Standards, Tactical Gear,
// SOPs, SLAs, Statutory Compliance Shields & Technical FAQs
// for all 17 ACS Services
// ============================================================

export interface ServiceSOP {
  code: string;
  title: string;
  objective: string;
  protocol: string;
}

export interface ServiceSLA {
  tier: string;
  metric: string;
  target: string;
  escalation: string;
}

export interface ServiceCompliance {
  regulation: string;
  standard: string;
  coverage: string;
}

export interface ServiceTraining {
  title: string;
  hours: string;
  certification: string;
  modules: string[];
}

export interface EnterpriseServiceDetail {
  slug: string;
  operationalScope: string[];
  trainingStandards: ServiceTraining;
  gearAndTechnology: string[];
  sops: ServiceSOP[];
  slaMatrix: ServiceSLA[];
  complianceShield: ServiceCompliance[];
  faqs: { question: string; answer: string }[];
}

export const ENTERPRISE_SERVICE_DETAILS: Record<string, EnterpriseServiceDetail> = {
  // 1. Security Guard
  'security-guard': {
    slug: 'security-guard',
    operationalScope: [
      'Access control and perimeter security for commercial, industrial, and government premises.',
      'Manual and computerized visitor registration, biometric badge issuance, and escort management.',
      'Inbound and outbound vehicle inspection, weighbridge monitoring, and material gatepass reconciliation.',
      'Scheduled physical patrol rounds with electronic RFID guard tour monitoring systems.',
      'First response containment during fire alarms, emergency evacuations, and unauthorized perimeter breach attempts.',
      'Static guard post duties at high-risk internal security doors, executive suites, and server rooms.'
    ],
    trainingStandards: {
      title: 'MHA PSARA Model Training Standard',
      hours: '160 Hours (100h Theory + 60h Field Drill)',
      certification: 'PSARA Form-V Certified & Police Antecedent Verified',
      modules: [
        'Physical fitness, drill, unarmed combat (UAC), and defensive baton maneuvers.',
        'Crowd control, conflict de-escalation, and dispute mediation techniques.',
        'First Aid, CPR certification, and Class-A/B/C/D fire extinguisher operation.',
        'Access control software, biometric scanners, and X-ray baggage inspection protocols.',
        'Indian Penal Code (IPC), Private Defense Rights, and Statutory Duty Notebook logging.'
      ]
    },
    gearAndTechnology: [
      'High-durability tactical security uniform with ACS brass insignia and photo ID lanyard',
      'Electronic RFID patrol wand reader with cloud sync docking station',
      'Handheld metal detector (HHMD) with audio-visual sensitivity control',
      'VHF/UHF two-way radio transceiver with noise-cancelling earpiece',
      'Rechargeable high-intensity LED tactical flashlight (1000+ lumens)',
      'High-decibel whistle, defensive baton, and emergency response pocket checklist'
    ],
    sops: [
      {
        code: 'SOP-SG-01',
        title: 'Visitor Verification & Escort Protocol',
        objective: 'Prevent unauthorized ingress while providing frictionless visitor onboarding.',
        protocol: 'All visitors must produce government-issued photo ID (Aadhaar/PAN/Voter/Passport). Guard enters details into VMS, obtains digital photo, calls host extension for authorization, and issues color-coded RFID guest pass.'
      },
      {
        code: 'SOP-SG-02',
        title: 'Material Gatepass Reconciliation (RGP / NRGP)',
        objective: 'Zero unauthorized inventory movement or material pilferage across loading docks.',
        protocol: 'Materials leaving premises must have authorized Returnable (RGP) or Non-Returnable (NRGP) gatepasses signed by authorized plant officials. Guard cross-verifies serial numbers, weight challans, and physical counts prior to barrier lift.'
      },
      {
        code: 'SOP-SG-03',
        title: 'Hourly RFID Guard Tour Monitoring',
        objective: 'Guarantee active guard alertness along critical perimeter blind spots.',
        protocol: 'Patrol guards scan wall-mounted RFID checkpoint tags at 45-to-60 minute randomized intervals. Unscanned checkpoints trigger an immediate SMS alert to the Shift Supervisor and Central Control Room.'
      }
    ],
    slaMatrix: [
      { tier: 'Critical', metric: 'Perimeter Breach / Incident Response', target: '< 3 Minutes', escalation: 'Immediate QRT Dispatch + Local Police Station liaison' },
      { tier: 'High', metric: 'Shift Guard Absenteeism Replacement', target: '< 45 Minutes', escalation: 'Branch Reserve Reliever Pool mobilized by Field Officer' },
      { tier: 'Standard', metric: 'Uniform & Turnout Quality Audit', target: '100% Pass Rate', escalation: 'Daily Morning Roll Call Inspection by Area Manager' },
      { tier: 'Administrative', metric: 'Monthly Incident & Patrol Analytics Report', target: 'By 3rd of Month', escalation: 'Operations Director review prior to client billing' }
    ],
    complianceShield: [
      { regulation: 'PSARA Act 2005', standard: 'State Controlling Authority Form-V License', coverage: '100% Licensed across West Bengal, Delhi NCR & partner states' },
      { regulation: 'EPF & MP Act 1952', standard: '13.00% Statutory Employer Remittance', coverage: 'Zero Section 7A default liability; monthly verifiable TRRN receipts provided' },
      { regulation: 'ESI Act 1948', standard: '3.25% Gross Contribution', coverage: 'Pehchan biometric insurance cards active from Day 1 of deployment' },
      { regulation: 'Payment of Wages Act', standard: 'Direct Bank NEFT by 7th of Every Month', coverage: 'Zero cash salary leakage; 100% bank transfer proof supplied with invoices' }
    ],
    faqs: [
      { question: 'What background verification process does ACS conduct for security guards?', answer: 'Every ACS security guard undergoes a rigorous 4-step background check: (1) Aadhaar biometric verification, (2) Local Police Station antecedent clearance report, (3) Permanent address verification via field enquiry, and (4) Previous employer reference checks.' },
      { question: 'Are ACS security guards trained under the PSARA Act?', answer: 'Yes. All guards complete mandatory 160-hour security training (100 hours classroom + 60 hours practical drill) at an accredited security training academy in compliance with the Private Security Agencies Central Model Rules and State PSARA regulations.' },
      { question: 'How does ACS handle guard absenteeism and sudden leave?', answer: 'ACS maintains a dedicated 10%–15% reserve reliever pool across all regional branch offices. In the event of illness or sudden absenteeism, a replacement guard is deployed on-post within 45 minutes.' },
      { question: 'Can ACS provide bilingual security guards for multinational corporate offices?', answer: 'Yes. For corporate headquarters, IT/ITES campuses, and international embassies, ACS deploys corporate-grade security personnel fluent in English, Hindi, and regional languages (Bengali/Odia).' },
      { question: 'Does ACS indemnify the client against labor law violations?', answer: 'Yes. ACS enters into a comprehensive Principal Employer Indemnity Agreement backed by monthly compliance dockets containing verified EPFO ECR/TRRN challans, ESIC bank receipts, and Form-B wage registers.' }
    ]
  },

  // 2. Armed Guard
  'armed-guard': {
    slug: 'armed-guard',
    operationalScope: [
      'Armed escort and stationary protection for bank vaults, currency chests, and cash-in-transit (CIT) vehicles.',
      'Deterrence and close protection for high-value retail environments including bullion merchants, jewelers, and luxury showrooms.',
      'Defensive perimeter positioning at heavy industrial smelting plants, mining depots, and government ordnance facilities.',
      'Escort for high-net-worth individuals during transfer of valuable negotiable instruments, gems, or confidential documents.'
    ],
    trainingStandards: {
      title: 'Armed Security Personnel & Weapon Safety Certification',
      hours: '180 Hours + Annual Live-Fire Range Qualification',
      certification: 'Valid Arms License (DM/Police Endorsed) & Ex-Servicemen / Paramilitary Pedigree',
      modules: [
        'Safe weapon handling, cleaning, retention drills, and accidental discharge prevention.',
        'Rules of engagement, minimum force doctrine, and Right of Private Defense under IPC Sections 96-106.',
        'Armed cash van ambush counter-tactics, roadblock evasion, and tactical defensive posture.',
        'Stress inoculation training, hostage de-escalation, and tactical liaison with armed police forces.'
      ]
    },
    gearAndTechnology: [
      'Validly licensed 12-bore DBBL/SBBL shotgun or .32 revolver with valid regional carry endorsement',
      'Tactical ammunition belt with factory-sealed ordnance rounds (inspected quarterly)',
      'Level-III ballistic body armor vest with trauma attenuation plates',
      'Armored communication headset and direct speed-dial wireless distress transmitter',
      'Weapon retention holster with secondary safety snap lock'
    ],
    sops: [
      {
        code: 'SOP-AG-01',
        title: 'Firearm Daily Turnout & Chamber Clearing',
        objective: 'Ensure weapon readiness while eliminating accidental discharge risk.',
        protocol: 'Armed guards must clear firearms into the certified sand-box clearing trap before and after each shift under the direct supervision of the Armoury Custodian or Senior Field Officer.'
      },
      {
        code: 'SOP-AG-02',
        title: 'Cash Transfer Transit & Vault Staging Protocol',
        objective: 'Establish impenetrable armed perimeter during cash replenishment.',
        protocol: 'Guard takes 180-degree defensive overwatch stance facing outward with weapon at low-ready. No civilian or unauthorized staff allowed within 10-meter radius during chest transfer.'
      }
    ],
    slaMatrix: [
      { tier: 'Emergency', metric: 'Weapon Distress Signal Response', target: 'Instant (< 60 Secs)', escalation: 'Armed QRT dispatch + Emergency Dial 112 trigger' },
      { tier: 'Operational', metric: 'Armed Guard Relief Mobilization', target: '< 60 Minutes', escalation: 'Standby Ex-Servicemen Armed Unit dispatched from central armory hub' },
      { tier: 'Compliance', metric: 'Arms License & Ammunition Audit', target: '100% Bi-Monthly', escalation: 'Legal Department audit of cartridge counts and renewal dates' }
    ],
    complianceShield: [
      { regulation: 'Arms Act 1959 & Arms Rules 2016', standard: 'District Magistrate / Police Commissioner Licensing', coverage: 'Individual gun licenses validly endorsed for security duty' },
      { regulation: 'PSARA Act 2005 (Section 10)', standard: 'Ex-Servicemen / Paramilitary Verification', coverage: '100% armed guards drawn from Indian Army, BSF, CRPF, or CISF veteran rolls' },
      { regulation: 'RBI Cash Logistics Guidelines', standard: 'Standard Operating Procedures for CIT Guards', coverage: 'Compliant with RBI/2017-18/152 cash replenishment security standards' }
    ],
    faqs: [
      { question: 'What background and military credentials do ACS armed guards possess?', answer: 'ACS armed guards are predominantly ex-servicemen honorably discharged from the Indian Armed Forces (Army, Navy, Air Force) or Central Armed Police Forces (CRPF, BSF, CISF) with clean conduct sheets (Exemplary/Very Good).' },
      { question: 'Are the firearms and ammunition licenses verified by local authorities?', answer: 'Yes. Every weapon deployed by ACS has an active arms license verified and registered with the respective District Magistrate or Police Commissionerate with proper jurisdiction endorsements.' },
      { question: 'Do armed guards receive regular shooting and weapon maintenance drills?', answer: 'Yes. ACS conducts mandatory bi-annual live-fire range practices, weapon stripping and cleaning inspections, and tactical judgment drills at authorized shooting facilities.' },
      { question: 'Can ACS provide armed security for cash-in-transit (CIT) and ATM operations?', answer: 'Yes. ACS is an empanelled armed security provider for leading national banks, NBFCs, and cash logistics firms adhering to RBI circular guidelines.' },
      { question: 'What is the liability framework if a weapon is fired in self-defense?', answer: 'ACS armed guards operate strictly under the legal umbrella of the Right of Private Defense (IPC Sections 96-106). ACS provides complete legal representation and documentation dockets.' }
    ]
  },

  // 3. Surveillance & CCTV
  'surveillance-cctv': {
    slug: 'surveillance-cctv',
    operationalScope: [
      '24/7 dedicated Central Security Operations Center (SOC) and on-site CCTV control room monitoring.',
      'Active video analytics surveillance: perimeter fence intrusion, loitering detection, license plate recognition (ANPR), and object abandonment.',
      'Integrated electronic access control monitoring, turnstile audit logging, and door forced open (DFO) alarms.',
      'Video evidence archiving, chain-of-custody forensic export, and police evidence liaison during investigations.',
      'Coordinated dispatch of ground security guards and Quick Reaction Teams (QRT) upon video alarm verification.'
    ],
    trainingStandards: {
      title: 'Electronic Security & SOC Operator Certification',
      hours: '120 Hours Technical & Analytical Training',
      certification: 'Certified Electronic Security Specialist (CESS) & ISO 27001 InfoSec Compliant',
      modules: [
        'VMS software platforms (Milestone, Genetec, HikCentral, Dahua DSS) and PTZ camera navigation.',
        'Behavioral anomaly recognition, shoplifting indicators, and industrial perimeter breach detection.',
        'Fire alarm control panel (FACP) cross-integration and HVAC damper coordination.',
        'Digital forensics, video clipping protocols, and non-disclosure data privacy compliance.'
      ]
    },
    gearAndTechnology: [
      'Industrial multi-monitor SOC video wall workstations (24/7 continuous duty rated)',
      'High-bandwidth NVR/SAN video storage servers with RAID-6 redundancy',
      'Direct line hot-key intercom to all plant security post gates and weighbridge booths',
      'Automated AI analytics software for tripwire crossing and unauthorized vehicle tracking',
      'Dual-redundant UPS power backup systems ensuring zero video feed interruption'
    ],
    sops: [
      {
        code: 'SOP-CCTV-01',
        title: 'Virtual Perimeter Video Guard Tour',
        objective: 'Conduct remote video sweeps of dark zones, back gates, and transformer yards.',
        protocol: 'Control room operator cycles through 16 pre-set PTZ camera tours every 30 minutes, recording pan-tilt sweeps in the digital SOC log and flagging non-functional illuminators.'
      },
      {
        code: 'SOP-CCTV-02',
        title: 'Forensic Video Extraction & Chain of Custody',
        objective: 'Preserve court-admissible electronic evidence for internal audits or legal proceedings.',
        protocol: 'Video clips of incidents are exported with cryptographic SHA-256 hash timestamps, logged in the Evidence Register with operator signatures, and sealed on write-once media.'
      }
    ],
    slaMatrix: [
      { tier: 'Critical', metric: 'Perimeter Intrusion Alarm Verification', target: '< 15 Seconds', escalation: 'Ground Guard Radio Alert + Audible Siren trigger' },
      { tier: 'High', metric: 'Camera Feed Blindness / Network Offline', target: '< 10 Minutes', escalation: 'Field IT Technician ticket + Guard posted to blind zone' },
      { tier: 'Standard', metric: 'Daily SOC Video Audit Summary', target: 'Every 24 Hours', escalation: 'Sent to Plant Operations Head every morning by 08:00 AM' }
    ],
    complianceShield: [
      { regulation: 'Digital Personal Data Protection (DPDP) Act 2023', standard: 'CCTV Data Privacy & Camera Angle Signage', coverage: 'All public surveillance zones sign-posted; restricted access to recorded footage' },
      { regulation: 'Indian Evidence Act (Section 65B)', standard: 'Electronic Evidence Certificate Compliance', coverage: 'Video footage exports accompanied by valid legal Section 65B compliance certificates' },
      { regulation: 'ISO 27001:2022', standard: 'Information Security Access Control', coverage: 'Restricted biometric entry into CCTV control rooms; zero mobile phone recording' }
    ],
    faqs: [
      { question: 'Can ACS monitor existing client CCTV camera installations?', answer: 'Yes. ACS operators are trained on all major Video Management Software (VMS) platforms and can seamlessly take over and monitor client-owned analog, IP, or hybrid camera networks.' },
      { question: 'How is client privacy and video footage confidentiality protected?', answer: 'ACS enforces strict ISO 27001 data governance. CCTV control rooms have biometric access restrictions, USB ports are physically disabled, and all operators sign legally binding Non-Disclosure Agreements (NDAs).' },
      { question: 'What happens when an operator detects an intruder on camera?', answer: 'The operator instantly locks the PTZ camera onto the target, alerts the nearest ground patrol guard via dedicated two-way VHF radio, triggers perimeter strobe lights, and escalates to the Shift Supervisor within 30 seconds.' },
      { question: 'Does ACS provide remote cloud-based off-site surveillance monitoring?', answer: 'Yes. ACS maintains a centralized 24/7 Command and Control Center capable of streaming and monitoring remote warehouse and plant feeds with automated AI tripwire detection.' },
      { question: 'Can ACS provide Section 65B electronic evidence certificates for police FIRs?', answer: 'Yes. ACS control room managers are certified to issue Section 65B certificates under the Indian Evidence Act to ensure video footage is legally admissible in court.' }
    ]
  },

  // 4. Night Patrol
  'night-patrol': {
    slug: 'night-patrol',
    operationalScope: [
      'Mobile and foot night security patrols covering expansive industrial parks, construction sites, and remote warehouses.',
      'Checking and securing all boundary gates, warehouse shutter padlocks, emergency exits, and scrap yards.',
      'Active deterrence of night-time perimeter trespass, copper cable theft, diesel siphonage, and illegal dumping.',
      'Supervisory midnight spot-checks to ensure all static on-duty guards remain awake, vigilant, and alert.'
    ],
    trainingStandards: {
      title: 'Tactical Night Patrolling & Perimeter Defense Specialist',
      hours: '140 Hours Specialized Night Operations Training',
      certification: 'Certified Guard Tour Specialist & Tactical Flashlight Operator',
      modules: [
        'Night vision tactics, stealth approach, and illumination techniques.',
        'Inspection of tamper-evident seal tags on container bays and warehouse roll-up shutters.',
        'High-risk night confrontation protocols and emergency QRT distress calls.',
        'Incident documentation and morning handover reporting.'
      ]
    },
    gearAndTechnology: [
      'Digital RFID guard tour data recorder wand with anti-tamper sensors',
      'Ultra-high lumen tactical searchlight with strobe defense capability',
      'Heavy-duty safety baton, reflective high-visibility night jacket (EN ISO 20471)',
      'GPS-tracked patrol vehicle / motorcycle for large industrial acreage',
      'Cellular-enabled body-worn camera with infrared night vision recording'
    ],
    sops: [
      {
        code: 'SOP-NP-01',
        title: 'Warehouse Shutter & Padlock Integrity Verification',
        objective: 'Zero unauthorized access into dark warehouses or store rooms after business hours.',
        protocol: 'Patrol officer physically shakes every padlock, inspects door seals, and logs the tag number on the mobile inspection checklist between 22:00 and 05:00 hours.'
      },
      {
        code: 'SOP-NP-02',
        title: 'Trespasser Apprehension & Safe Detainment Protocol',
        objective: 'Safely neutralize perimeter breaches without excessive use of force.',
        protocol: 'Officer maintains 5-meter safety buffer, activates body-worn video, commands suspect to halt, alerts partner via radio, and detains suspect at main security gate until local police arrival.'
      }
    ],
    slaMatrix: [
      { tier: 'Patrol Frequency', metric: 'Full Perimeter Circuit Sweeps', target: 'Every 45 Minutes', escalation: 'Missed checkpoint triggers automated SMS to Field Manager' },
      { tier: 'Supervisory', metric: 'Night Flying Squad Surprise Audits', target: '2x Every Night', escalation: 'Area Supervisor physical inspection logged on central portal' },
      { tier: 'Incident', metric: 'Midnight Intrusion Response Time', target: '< 4 Minutes', escalation: 'Immediate siren alarm + Mobile Patrol Vehicle intercept' }
    ],
    complianceShield: [
      { regulation: 'Factories Act 1948 (Section 36)', standard: 'Night Shift Occupational Safety & Illumination', coverage: 'All patrol personnel equipped with PPE, high-vis jackets & communication' },
      { regulation: 'State Private Security Agency Rules', standard: 'Night Guard Antecedent Verification', coverage: '100% night personnel thoroughly vetted with zero criminal records' },
      { regulation: 'Minimum Wages Act', standard: 'Statutory Night Shift Allowance Compliance', coverage: 'Compliant with all state overtime and night duty compensatory wage norms' }
    ],
    faqs: [
      { question: 'How do you verify that night guards do not fall asleep on duty?', answer: 'ACS enforces two foolproof accountability mechanisms: (1) Mandatory RFID checkpoint wanding every 45 minutes, where missed tags alert the 24/7 control room, and (2) Mobile Field Officers conduct random surprise spot checks between 01:00 AM and 04:30 AM.' },
      { question: 'What equipment do night patrol officers carry?', answer: 'Each night patrol guard is equipped with high-lumen tactical torches, two-way VHF radios, RFID wands, defensive batons, reflective safety jackets, and body-worn night-vision cameras.' },
      { question: 'Can ACS provide motorized mobile patrol vehicles for large industrial estates?', answer: 'Yes. For sprawling industrial estates, logistics parks, and SEZs exceeding 20 acres, ACS deploys GPS-tracked security patrol motorcycles or branded light four-wheelers.' },
      { question: 'How are perimeter wall breaches handled during night shifts?', answer: 'Guards immediately illuminate the breach zone, sound a warning horn, alert the gatehouse via radio, and cordon off the area while the mobile patrol intercepts the intruder.' },
      { question: 'Are daily night patrol logs shared with client management?', answer: 'Yes. An automated digital patrol report containing time-stamped RFID scans, shutter verification logs, and incident photos is emailed to client management by 07:30 AM every morning.' }
    ]
  },

  // 5. Executive Protection
  'executive-protection': {
    slug: 'executive-protection',
    operationalScope: [
      'Close protection details (CPD / Personal Security Officers - PSOs) for C-suite executives, visiting dignitaries, and ultra-high-net-worth individuals.',
      'Route reconnaissance, advance venue security sweeps, and secure transit planning.',
      'Close-in physical protection during public appearances, press conferences, and corporate shareholder meetings.',
      'Emergency extraction planning, motorcade security driving, and tactical threat avoidance.'
    ],
    trainingStandards: {
      title: 'Executive Protection & Close Protection Officer (CPO) Standard',
      hours: '200 Hours Advanced Protective Operations',
      certification: 'Certified Close Protection Officer (CPO) & Defensive Driving Certified',
      modules: [
        'Threat assessment, advance reconnaissance, and protective formation movements.',
        'Defensive and evasive motorcade driving, ambush breakout tactics.',
        'Unarmed combat, weapon disarming, and VIP shielding techniques.',
        'Corporate etiquette, international protocol, and confidential corporate communications.'
      ]
    },
    gearAndTechnology: [
      'Tailored corporate formal business suit or discreet covert executive attire',
      'Concealed firearm holster with licensed firearm (for armed PSOs)',
      'Concealed wireless acoustic earpiece and VIP distress communications button',
      'Tactical covert ballistic protection vest (Level IIIA ultra-lightweight)',
      'Secure encrypted mobile communications device with real-time GPS tracking'
    ],
    sops: [
      {
        code: 'SOP-EP-01',
        title: 'Advance Route & Venue Reconnaissance',
        objective: 'Identify threat vectors, primary and secondary hospital routes, and safe havens.',
        protocol: 'Advance security officer conducts physical sweep of destination 2 hours prior to VIP arrival, checks emergency exits, coordinates with hotel/event security, and verifies private elevators.'
      },
      {
        code: 'SOP-EP-02',
        title: 'Emergency VIP Extraction & Cover Protocol',
        objective: 'Instantly shield and evacuate VIP during hostile mobbing or violent threat.',
        protocol: 'Bodyguard executes body-cover technique shielding the principal, communicates code-red to the security driver, and directs VIP into armored transport via pre-cleared secondary exit.'
      }
    ],
    slaMatrix: [
      { tier: 'Strategic', metric: 'Executive Escort Mobilization Time', target: '< 6 Hours', escalation: 'Rapid deployment unit based in Tier-1 metros' },
      { tier: 'Tactical', metric: 'Threat Identification & Shielding', target: '< 2 Seconds', escalation: 'Immediate physical shielding and vehicle evacuation' },
      { tier: 'Operational', metric: 'VIP Itinerary Confidentiality', target: '100% Enforced', escalation: 'Strict NDA enforcement with zero social media footprint' }
    ],
    complianceShield: [
      { regulation: 'Arms Act 1959', standard: 'Concealed Carry License for Armed PSOs', coverage: 'All armed PSOs hold legally valid personal arms licenses endorsed for executive protection' },
      { regulation: 'PSARA Act 2005', standard: 'Registered PSO Deployment Model', coverage: 'All personnel deployed under authorized statutory private security empanelment' },
      { regulation: 'Corporate Governance & Indemnity', standard: 'Executive Liability & Professional Indemnity', coverage: 'Backed by comprehensive professional indemnity and third-party risk coverage' }
    ],
    faqs: [
      { question: 'What background and qualifications do ACS Personal Security Officers (PSOs) possess?', answer: 'ACS PSOs are elite veterans from the Indian Special Forces (Para SF, NSG, MARCOS), Special Protection Group (SPG), or state VIP protection wings with extensive close protection experience.' },
      { question: 'Can ACS provide discreet, suit-wearing security officers who blend into corporate boardrooms?', answer: 'Yes. Our executive protection officers are trained in corporate etiquette, discreet presence, and diplomacy, wearing sharp executive suits without drawing unwanted public attention.' },
      { question: 'Can ACS provide armed PSOs for outstation travel across India?', answer: 'Yes. ACS maintains a roster of armed PSOs holding all-India arms license endorsements, capable of providing seamless security coverage during interstate corporate travel.' },
      { question: 'Does ACS offer advance route reconnaissance and security drivers?', answer: 'Yes. Every executive detail includes advance route surveys, safe room identification, hospital liaisons, and certified defensive drivers skilled in evasive maneuvering.' },
      { question: 'How is client confidentiality guaranteed?', answer: 'Every executive protection officer signs a comprehensive Non-Disclosure Agreement (NDA). Officers are strictly barred from photography, social media usage, or discussing client schedules.' }
    ]
  },

  // 6. Fire Fighting
  'fire-fighting': {
    slug: 'fire-fighting',
    operationalScope: [
      '24/7 dedicated industrial and commercial fire station operations and fire watch squads.',
      'Daily maintenance and pressure testing of fire hydrant systems, diesel pump sets, and jockey pumps.',
      'Hot-work permit inspection and continuous fire watch during plant welding, cutting, and brazing operations.',
      'Execution of quarterly fire evacuation drills, employee fire safety training, and assembly point headcount audits.',
      'First response firefighting, hazardous chemical foam deployment, and smoke ventilation during fire emergencies.'
    ],
    trainingStandards: {
      title: 'Industrial Fire & Rescue Specialist Standard',
      hours: '160 Hours Certified Fire Academy Curriculum',
      certification: 'National Fire Service College (NFSC) / State Fire Service Certified',
      modules: [
        'Chemistry of combustion, Class A/B/C/D fire extinguishment techniques.',
        'Breathing Apparatus (SCBA) operation, smoke room search and rescue drills.',
        'Industrial fire tender pump operation, foam induction, and high-pressure hose laying.',
        'NBC (National Building Code 2016 Part 4) statutory compliance and fire audit protocols.'
      ]
    },
    gearAndTechnology: [
      'NFPA-compliant fire proximity turnout suits with flame-retardant Nomex/Kevlar layering',
      'Self-Contained Breathing Apparatus (SCBA) 300-bar positive pressure cylinders',
      'Heavy-duty fire axes, crowbars, hydraulic bolt cutters, and emergency evacuation ropes',
      'Thermal imaging camera (TIC) for hot-spot detection inside smoke-filled premises',
      'Calibrated combustible gas & oxygen deficiency atmospheric detectors'
    ],
    sops: [
      {
        code: 'SOP-FF-01',
        title: 'Daily Fire Pump House Testing & Logging',
        objective: 'Guarantee 100% automatic fire sprinkler and hydrant line pressure.',
        protocol: 'Fire technician tests jockey pump start pressure (7 kg/cm²), main electrical pump (5 kg/cm²), and diesel generator pump (4 kg/cm²) every morning at 08:30 AM, recording fuel levels and battery voltage.'
      },
      {
        code: 'SOP-FF-02',
        title: 'Hot-Work Fire Permit & Continuous Watch',
        objective: 'Prevent welding sparks from igniting flammable vapors or combustible inventory.',
        protocol: 'Technician conducts atmospheric gas test, removes combustibles within 10 meters, wets surrounding floors, stands by with 2x 9kg DCP extinguishers, and maintains fire watch for 60 minutes post-welding.'
      }
    ],
    slaMatrix: [
      { tier: 'Emergency', metric: 'Fire Alarm Turnout & Water Delivery', target: '< 60 Seconds', escalation: 'Full fire crew deployment + Civic Fire Station Dial 101 call' },
      { tier: 'Preventive', metric: 'Fire Extinguisher Monthly Inspection', target: '100% Asset Log', escalation: 'Pressure gauge and seal tag audit completed monthly' },
      { tier: 'Drill', metric: 'Plant-Wide Fire Evacuation Drill', target: 'Every 90 Days', escalation: 'Formal audit report submitted to Safety Committee' }
    ],
    complianceShield: [
      { regulation: 'National Building Code (NBC) 2016 Part 4', standard: 'Fire and Life Safety Code Compliance', coverage: 'Fire systems maintained in accordance with NBC occupancy guidelines' },
      { regulation: 'Factories Act 1948 (Section 38)', standard: 'Precautions in Case of Fire', coverage: 'Trained personnel on duty 24/7 ensuring full factory inspection compliance' },
      { regulation: 'State Fire Service Act & Rules', standard: 'Annual Fire Safety Audit Certification', coverage: 'Support provided for obtaining and renewing State Fire Department Fire NOCs' }
    ],
    faqs: [
      { question: 'Are ACS firefighting personnel certified by state fire academies?', answer: 'Yes. ACS fire officers hold certifications from recognized state fire academies or the National Fire Service College (NFSC) with rigorous training in industrial fire rescue.' },
      { question: 'Can ACS help our factory or commercial tower obtain a Fire NOC?', answer: 'Yes. Our fire safety engineers conduct end-to-end NBC Part 4 audits, test hydrant pressures, verify fire doors, and facilitate documentation required for Fire NOC issuance and renewal.' },
      { question: 'Does ACS conduct fire evacuation drills for our workforce?', answer: 'Yes. ACS organizes scheduled plant-wide and office fire evacuation drills, training employees on emergency escape routes, assembly point counts, and hand-operated fire extinguisher usage.' },
      { question: 'What is included in the daily fire pump room maintenance service?', answer: 'Our fire technicians inspect pressure switches, test jockey and diesel engine auto-starts, check fuel tanks and battery hydrometers, and log all readings in the official Fire Register.' },
      { question: 'Can ACS provide specialized chemical foam firefighting for chemical/solvent plants?', answer: 'Yes. ACS deploys specialized chemical foam induction equipment, AFFF foam concentrates, and hazardous material responders trained for Class-B hydrocarbon emergencies.' }
    ]
  },

  // 7. Event Security
  'event-security': {
    slug: 'event-security',
    operationalScope: [
      'Comprehensive crowd management and physical security for corporate AGMs, concerts, trade fairs, and exhibitions.',
      'Multi-gate attendee screening with Door Frame Metal Detectors (DFMD) and Handheld Metal Detectors (HHMD).',
      'VIP backstage security, green room protection, and speaker escort management.',
      'Stage perimeter barricade reinforcement and emergency medical evacuation lane management.'
    ],
    trainingStandards: {
      title: 'Crowd Dynamics & Event Security Management',
      hours: '100 Hours Event-Specific Training',
      certification: 'Certified Crowd Controller & Emergency Evacuation Marshal',
      modules: [
        'Crowd psychology, surge prevention, and bottleneck identification.',
        'Ticket and RFID wristband counterfeit detection, bag search legalities.',
        'De-escalation of intoxicated or disorderly patrons.',
        'Coordination with municipal authorities, traffic police, and medical EMS.'
      ]
    },
    gearAndTechnology: [
      'Multi-zone walkthrough Door Frame Metal Detectors (DFMD)',
      'Handheld metal detectors with audio and vibration alert settings',
      'Color-coded security wristbands, UV verification torches, and barcode scanners',
      'High-visibility security steward vests and crowd-control guide batons',
      'Multi-channel event control room radio network with discreet earpieces'
    ],
    sops: [
      {
        code: 'SOP-ES-01',
        title: 'Multi-Tier Ingress Screening Protocol',
        objective: 'Prevent contraband, weapons, and alcohol from entering event premises.',
        protocol: 'Tier 1 verifies tickets/wristbands; Tier 2 conducts gender-segregated frisking booths with female guards; Tier 3 inspects bags with metal detectors before turnstile admission.'
      },
      {
        code: 'SOP-ES-02',
        title: 'Stage Surge & Barricade Failure Containment',
        objective: 'Protect artists and VIPs from crowd collapse or stage jumping.',
        protocol: 'Buffer zone guards form interlocking arm barrier facing crowd; Quick Reaction Team extracts artist backstage while security marshals open lateral relief gates to relieve pressure.'
      }
    ],
    slaMatrix: [
      { tier: 'Deployment', metric: 'Full Event Security Detachment Mobilization', target: '< 24 Hours Notice', escalation: 'Central event reserve squad mobilized' },
      { tier: 'Throughput', metric: 'Per-Lane Ingress Screening Speed', target: '20 Attendees / Min', escalation: 'Additional screening lanes opened within 5 minutes' },
      { tier: 'Medical', metric: 'Injured Patron Extraction to First Aid Tent', target: '< 90 Seconds', escalation: 'On-site medical team handover with zero crowd panic' }
    ],
    complianceShield: [
      { regulation: 'Police Amusement & Public Performance Licensing', standard: 'City Police Commissionerate Permission', coverage: 'Security deployment plans coordinated with local police licensing officers' },
      { regulation: 'Disaster Management Act 2005', standard: 'Crowd Safety & Evacuation Norms', coverage: 'Compliant with National Disaster Management Authority (NDMA) crowd management guidelines' },
      { regulation: 'Female Guard Frisking Norms', standard: 'CrPC Female Search Privacy Protocols', coverage: 'Enclosed female frisking booths operated exclusively by verified female security guards' }
    ],
    faqs: [
      { question: 'How far in advance must we book event security services?', answer: 'While ACS can mobilize detachments of 50+ personnel within 24–48 hours for urgent requirements, we recommend 5–7 days advance booking for large events to allow site reconnaissance and police coordination.' },
      { question: 'Do you provide female security guards for female attendee frisking?', answer: 'Yes. ACS maintains dedicated squads of trained female security guards who manage private, enclosed frisking booths in full accordance with statutory guidelines.' },
      { question: 'Can ACS assist with local police permissions and traffic management?', answer: 'Yes. Our senior event managers liaise directly with the local Police Commissionerate, Traffic Police, and Municipal Fire Department to secure permissions and plan traffic flow.' },
      { question: 'What equipment does ACS supply for event security?', answer: 'ACS supplies walkthrough DFMD metal detectors, handheld scanners, crowd-control queue managers, two-way radios, baggage inspection tables, and UV ticket verifiers.' },
      { question: 'What is your maximum single-event personnel deployment capacity?', answer: 'ACS has successfully deployed up to 500+ security guards, bouncers, supervisors, and marshals for multi-day international expos and stadium-scale gatherings.' }
    ]
  },

  // 8. Industrial Security
  'industrial-security': {
    slug: 'industrial-security',
    operationalScope: [
      'Comprehensive plant protection for steel rolling mills, automotive manufacturing, chemical plants, and heavy engineering facilities.',
      'Weighbridge security, gross-tare truck weight calibration verification, and scrap metal anti-theft operations.',
      'Perimeter boundary defense against local union agitation, encroachment, and unauthorized material dumping.',
      'Contract labor biometric registration, gate pass issuance, and PPE enforcement (helmets, safety shoes, eye protection).'
    ],
    trainingStandards: {
      title: 'Heavy Industry & Plant Defense Security Standard',
      hours: '160 Hours Heavy Industrial Guard Training',
      certification: 'Certified Industrial Plant Guard (CIPG) & Hazmat First Responder',
      modules: [
        'Weighbridge fraud tactics: duplicate slips, axle hanging, and water ballast tricks.',
        'Material gate pass systems: Returnable (RGP), Non-Returnable (NRGP), scrap manifests.',
        'Hazardous material signage (Hazchem), chemical emergency evacuation protocols.',
        'Industrial labor dispute management, picket line containment, and peaceful gate control.'
      ]
    },
    gearAndTechnology: [
      'Heavy-duty industrial safety footwear (IS 15298 steel toe) and certified hard hat (IS 2925)',
      'Under-vehicle inspection trolley mirror (UVIM) with wide-angle convex mirror and LED bar',
      'Electronic weighbridge tamper-evident seal tags and computerized weight audit terminal',
      'Night-vision infrared binoculars for sprawling boundary wall observation',
      'Explosion-proof intrinsically safe two-way radio transceivers for chemical zones'
    ],
    sops: [
      {
        code: 'SOP-IND-01',
        title: 'Weighbridge Anti-Fraud Verification Protocol',
        objective: 'Eliminate payload fraud, scrap metal diversion, and tare weight tampering.',
        protocol: 'Guard verifies all four truck axles are on the scale, driver is outside the cab, checks for water tank drainage, records gross weight, and personally inspects empty tare weight upon departure.'
      },
      {
        code: 'SOP-IND-02',
        title: 'Scrap Yard Loading & Dispatch Escort',
        objective: 'Zero high-value copper, brass, or alloy pilferage concealed beneath scrap iron.',
        protocol: 'Dedicated security supervisor oversees entire scrap loading process, photographs cargo layers, seals container doors with numbered barcoded wire seals, and escorts truck to final exit.'
      }
    ],
    slaMatrix: [
      { tier: 'Shrinkage', metric: 'Material Gate Loss / Pilferage Rate', target: '0.00% Tolerated', escalation: 'Instant investigation + 100% financial liability recovery mechanism' },
      { tier: 'Mobilization', metric: 'Plant Emergency Strike / Agitation Squad', target: '< 90 Minutes', escalation: 'Specialized Industrial QRT detachment dispatched from regional hub' },
      { tier: 'Safety', metric: 'Plant Gate PPE Enforcement Rate', target: '100% Strict Entry', escalation: 'Zero admittance for workers lacking mandatory safety gear' }
    ],
    complianceShield: [
      { regulation: 'Factories Act 1948', standard: 'Occupational Safety, Health and Welfare', coverage: 'All personnel trained in factory health, safety, and hazardous material protocols' },
      { regulation: 'PSARA Act 2005 & State Rules', standard: 'Industrial Establishment Guarding License', coverage: '100% legal compliance across West Bengal industrial corridors & national zones' },
      { regulation: 'Contract Labour (R&A) Act 1970', standard: 'Form-V Principal Employer Registration', coverage: 'Full statutory compliance with contractor licensing and monthly audit dockets' }
    ],
    faqs: [
      { question: 'How does ACS prevent weighbridge and scrap metal theft at heavy industrial plants?', answer: 'ACS enforces strict two-man weighbridge verification: guards ensure all wheels are centered on the scale deck, inspect underneath truck chassis with convex mirrors, cross-check driver weight, and verify tare weights after unloading.' },
      { question: 'How do you handle contract labor unrest, gate gheraos, or union agitations?', answer: 'ACS guards are trained in disciplined, non-violent containment. Our senior officers maintain active intelligence with local police authorities to de-escalate tensions while keeping factory access open.' },
      { question: 'Are your industrial guards trained in factory safety and PPE compliance?', answer: 'Yes. All guards complete mandatory factory safety training and enforce strict PPE checks (safety helmets, steel-toe boots, high-vis vests) before admitting workers through plant turnstiles.' },
      { question: 'Can ACS provide specialized guards for chemical and explosive manufacturing units?', answer: 'Yes. We deploy guards trained in Hazchem codes, explosion-proof radio usage, static electricity precautions, and chemical plant safety protocols.' },
      { question: 'What documentation is provided to client audit committees?', answer: 'We supply weekly weighbridge discrepancy logs, visitor registers, scrap dispatch manifests, and monthly statutory wage compliance dockets.' }
    ]
  },

  // 9. Housekeeping
  'housekeeping': {
    slug: 'housekeeping',
    operationalScope: [
      'Daily mechanized cleaning and sanitation for corporate offices, IT parks, commercial complexes, and retail malls.',
      'Floor scrubbing, buffing, polishing, and restoration for Italian marble, granite, vitrified tile, and epoxy surfaces.',
      'Restroom hygiene management with scheduled hourly sanitization checklists and touchpoint disinfection.',
      'Solid waste collection, segregation (organic, recyclable, hazardous), and eco-friendly disposal management.'
    ],
    trainingStandards: {
      title: 'Corporate Housekeeping & Environmental Hygiene Specialist',
      hours: '80 Hours Mechanized Housekeeping Training',
      certification: 'Certified Cleaning Professional (CCP) & Chemical Dilution Specialist',
      modules: [
        'Color-coded microfiber cleaning protocols (Red: Toilet, Yellow: Washroom, Blue: General, Green: Pantry).',
        'Chemical dosing and safety data sheet (SDS) compliance using Diversey/Taski professional formulations.',
        'Single-disc floor scrubber, auto-scrubber dryer, and industrial wet/dry vacuum operation.',
        'Hospital-grade surface disinfection and touchpoint cross-contamination prevention.'
      ]
    },
    gearAndTechnology: [
      'Taski single-disc high-speed floor scrubbing and polishing machines',
      'Industrial wet & dry heavy-duty suction vacuum cleaners with HEPA filtration',
      'Professional janitorial caddy carts with color-coded microfiber wringer buckets',
      'Eco-friendly Diversey/Ecolab certified cleaning chemicals (Taski R1 to R9 series)',
      'Complete personal protective equipment (PPE): nitrile gloves, safety goggles, slip-resistant shoes'
    ],
    sops: [
      {
        code: 'SOP-HK-01',
        title: 'Restroom Hourly Disinfection & Checklist Protocol',
        objective: 'Maintain impeccable washroom hygiene, odor-free air, and stocked consumables.',
        protocol: 'Housekeeping associate sanitizes urinals, toilet bowls, sinks, mirrors, and handles every 60 minutes using Taski R1/R6, checks soap/tissue levels, and initials public-facing QR checklist.'
      },
      {
        code: 'SOP-HK-02',
        title: 'Color-Coded Microfiber Cross-Contamination Barrier',
        objective: 'Prevent transmission of bacteria between sanitary zones and office workstations.',
        protocol: 'Red microfiber cloths are strictly restricted to toilet fixtures. Blue cloths are used exclusively for desks and conference tables. Cloths are washed and sanitized in separate laundry cycles daily.'
      }
    ],
    slaMatrix: [
      { tier: 'Restroom Hygiene', metric: 'Restroom Inspection Pass Rate', target: '≥ 98.5% Score', escalation: 'Immediate re-cleaning within 10 minutes of notification' },
      { tier: 'Daily Turnaround', metric: 'Pre-Office Morning Deep Clean Completion', target: 'By 08:30 AM', escalation: 'Night/early-morning crew deployed with supervisor sign-off' },
      { tier: 'Spill Response', metric: 'Emergency Liquid / Coffee Spill Cleanup', target: '< 5 Minutes', escalation: 'Nearest floor associate dispatched via walkie-talkie' }
    ],
    complianceShield: [
      { regulation: 'Solid Waste Management Rules 2016', standard: 'Source Waste Segregation Standards', coverage: '3-bin waste segregation (Biodegradable, Dry/Recyclable, Domestic Hazardous)' },
      { regulation: 'Occupational Safety, Health & Working Conditions Code', standard: 'Chemical Handling & SDS Compliance', coverage: '100% eco-certified biodegradable cleaning chemicals; zero banned toxic acids' },
      { regulation: 'Minimum Wages Act (State Sphere)', standard: 'Skilled / Semi-Skilled Housekeeping Wages', coverage: '100% statutory minimum wage compliance + EPF + ESIC on-time transfer' }
    ],
    faqs: [
      { question: 'What professional cleaning chemicals and consumables does ACS use?', answer: 'ACS exclusively uses certified international cleaning chemical formulations (primarily Diversey Taski R1 to R9 series and Ecolab products) that are non-corrosive, eco-friendly, and safe for high-end office surfaces.' },
      { question: 'How is cross-contamination prevented between washrooms and workstations?', answer: 'We strictly enforce the 4-color microfiber cloth standard: Red for urinals and commodes, Yellow for sinks and tiles, Blue for general office desks, and Green for cafeterias and pantries.' },
      { question: 'Do you provide mechanized floor scrubbing and polishing machines?', answer: 'Yes. ACS equips facility management sites with Taski single-disc scrubbers, auto-scrubber dryers, high-pressure jet cleaners, and industrial HEPA-filter vacuum cleaners.' },
      { question: 'Can ACS provide daily consumables like tissue paper, hand wash, and air fresheners?', answer: 'Yes. ACS offers bundled facility management packages covering both skilled manpower and complete supply of premium corporate washroom consumables at wholesale rates.' },
      { question: 'How do you monitor housekeeping performance across large office buildings?', answer: 'We use digital QR-code checkpoint scanning in restrooms and public zones, verified daily by on-site facility supervisors who conduct joint audits with client admin teams.' }
    ]
  },

  // 10. Janitorial
  'janitorial': {
    slug: 'janitorial',
    operationalScope: [
      'Dedicated day-porter and ongoing janitorial sanitation for high-footfall commercial spaces.',
      'Continuous pantry hygiene management, cafeteria table wiping, and dishwashing operations.',
      'Immediate trash can clearing, recycling bin emptying, and shredder room waste collection.',
      'Mid-day spot cleaning of elevator cabs, lobby glass doors, conference rooms, and handrails.'
    ],
    trainingStandards: {
      title: 'Day-Porter & Commercial Janitorial Standard',
      hours: '60 Hours Customer-Facing Hygiene Training',
      certification: 'Certified Janitorial Specialist & Food Safety Hygiene Standard',
      modules: [
        'Discreet day-porter cleaning during active office working hours without disturbing staff.',
        'High-touch surface disinfection protocols (door knobs, elevator buttons, touchscreens).',
        'Cafeteria sanitation, food waste disposal, and pest prevention hygiene.',
        'Spill response, slip hazard warning signage placement, and immediate mop drying.'
      ]
    },
    gearAndTechnology: [
      'Silent rubber-wheeled multi-compartment janitorial cleaning trolleys',
      'Dual-bucket microfiber flat-mop systems with foot-pedal wringer',
      'ANSI-compliant bright yellow "Caution: Wet Floor" foldable safety cone signs',
      'Electrostatic surface sanitizer sprayers for rapid meeting room disinfection',
      'Smart sensor trash bin level monitors and automated replenishment kits'
    ],
    sops: [
      {
        code: 'SOP-JAN-01',
        title: 'Conference Room Turnaround Protocol',
        objective: 'Restore meeting rooms to pristine executive condition within 10 minutes of meeting end.',
        protocol: 'Porter clears used cups, wipes table surface with disinfectant, pushes in chairs uniformly, cleans whiteboard, aligns audio-visual cables, and sprays subtle ambient air neutralizer.'
      },
      {
        code: 'SOP-JAN-02',
        title: 'High-Touch Surface Sanitization Circuit',
        objective: 'Break the chain of viral and bacterial transmission across shared corporate spaces.',
        protocol: 'Porter sanitizes all elevator call buttons, access turnstiles, main glass push-bars, and staircase railings every 2 hours using hospital-grade quat disinfectant.'
      }
    ],
    slaMatrix: [
      { tier: 'Conference Room', metric: 'Meeting Room Turnaround Time', target: '< 10 Minutes', escalation: 'Designated floor porter alerted automatically' },
      { tier: 'Cafeteria', metric: 'Lunch Hour Table Clearing & Sanitizing', target: 'Continuous (< 60 Secs / Table)', escalation: 'Double-staffed during peak 12:30–14:30 lunch hours' },
      { tier: 'Waste', metric: 'Bin Overflow Prevention', target: 'Cleared at 75% Capacity', escalation: 'Regular corridor audit by janitorial supervisor' }
    ],
    complianceShield: [
      { regulation: 'FSSAI Food Safety Hygiene Guidelines', standard: 'Cafeteria & Pantry Sanitation Standards', coverage: 'Pantry porters maintain valid medical fitness certificates and wear hairnets/gloves' },
      { regulation: 'Labour Welfare Fund & Minimum Wages', standard: 'Statutory Day-Porter Wage Adherence', coverage: '100% compliant salary disbursement with complete ESI and PF benefits' },
      { regulation: 'OSHA / National Safety Council Norms', standard: 'Slip & Fall Prevention Protocol', coverage: 'Mandatory caution cone deployment during all wet floor cleaning operations' }
    ],
    faqs: [
      { question: 'What is the difference between housekeeping and janitorial services?', answer: 'Housekeeping primarily involves heavy morning/evening deep cleaning, mechanized floor scrubbing, and scheduled deep sanitization. Janitorial day-porters provide continuous during-the-day maintenance, restroom restocking, pantry assistance, and immediate spill response.' },
      { question: 'Do day-porters disrupt normal office work during business hours?', answer: 'No. Our janitorial staff are trained in silent day-cleaning techniques, using quiet rubber-wheeled caddies, low-noise equipment, and respectful customer-service etiquette.' },
      { question: 'Can janitorial staff manage corporate cafeteria and pantry services?', answer: 'Yes. ACS supplies trained pantry boys and cafeteria attendants certified in hygiene, equipped with aprons, gloves, and hairnets for food handling and dishwashing.' },
      { question: 'How quickly can a janitor respond to an accidental spill in a workspace?', answer: 'Our dedicated floor porters are stationed on each office zone and respond to liquid spills within 3 to 5 minutes, deploying wet-floor safety cones immediately.' },
      { question: 'Are all janitorial staff police-verified and medically examined?', answer: 'Yes. Every staff member undergoes Aadhaar police antecedent verification and annual medical fitness tests, including checks for communicable illnesses.' }
    ]
  },

  // 11. Pest Control
  'pest-control': {
    slug: 'pest-control',
    operationalScope: [
      'Comprehensive Integrated Pest Management (IPM) for corporate offices, warehouses, food processing facilities, and hospitals.',
      'Odorless gel baiting and residual micro-spraying for cockroach and ant eradication.',
      'Rodent management: bait stations, snap traps, glue boards, and structural entry burrow sealing.',
      'Pre-construction and post-construction anti-termite chemical soil barrier treatment.',
      'Mosquito fogging, larval suppression, fly killer unit maintenance, and bed bug thermal treatments.'
    ],
    trainingStandards: {
      title: 'Integrated Pest Management (IPM) Certified Applicator',
      hours: '100 Hours Chemical Safety & Entomology Training',
      certification: 'Certified Pest Control Applicator (Central Insecticides Board & Registration Committee - CIB&RC)',
      modules: [
        'Insect biology, breeding cycles, harborage identification, and exclusion techniques.',
        'Insecticide formulations, target-specific dosage calculation, and MSDS safety protocols.',
        'Non-chemical pest exclusion, structural sealing, and food plant HACCP guidelines.',
        'Rodent behavioral habits (neophobia) and tamper-resistant bait box installation.'
      ]
    },
    gearAndTechnology: [
      'Thermal fogging machines for outdoor vector control and drainage treatment',
      'Ultra-Low Volume (ULV) cold fogger machines for indoor microbial and mosquito misting',
      'Tamper-resistant lockable rodent bait stations with internal wire bar securing',
      'Bayer/Syngenta CIB&RC approved odorless gel baits and micro-encapsulated suspensions',
      'Respirators with multi-gas chemical vapor filter cartridges (EN 14387 standard)'
    ],
    sops: [
      {
        code: 'SOP-PC-01',
        title: 'Food-Area Non-Toxic Gel Baiting Protocol',
        objective: 'Eradicate cockroach infestations in pantries and server rooms without chemical odor.',
        protocol: 'Technician applies pinhead-sized drops of fipronil/imidacloprid gel bait in hidden hinges, cabinet corners, and electrical junctions at 1-meter intervals; zero spraying near exposed food surfaces.'
      },
      {
        code: 'SOP-PC-02',
        title: 'Warehouse Perimeter Rodent Defense Line',
        objective: 'Zero rodent entry into finished goods storage bays or server cable trays.',
        protocol: 'Technician installs tamper-resistant bait boxes along external perimeter wall every 15 meters, checks bromadiolone bait consumption weekly, logs bait station condition on the digital IPM map, and seals burrows.'
      }
    ],
    slaMatrix: [
      { tier: 'Infestation', metric: 'Active Pest Sighting Callback Service', target: '< 24 Hours', escalation: 'Emergency free re-treatment visit within 24 hours' },
      { tier: 'Odorless', metric: 'Indoor Workspace Chemical Odor', target: 'Zero VOC Odor', escalation: '100% odorless gel and micro-emulsion formulations used' },
      { tier: 'Audit', metric: 'HACCP / ISO Pest Audit Documentation', target: '100% Compliant', escalation: 'Pest trend analysis and SDS records updated monthly' }
    ],
    complianceShield: [
      { regulation: 'Insecticides Act 1968 & Rules 1971', standard: 'CIB&RC Registered Chemical Formulations', coverage: 'All pesticides certified by Central Insecticides Board; zero banned or toxic formulations' },
      { regulation: 'FSSAI Food Hygiene Regulations', standard: 'HACCP Pest Management for Food Premises', coverage: 'Fully documented IPM programs compliant with commercial food audits' },
      { regulation: 'Hazardous Waste Management Rules', standard: 'Safe Chemical Container Disposal', coverage: 'Used pesticide containers crushed, triple-rinsed, and disposed through authorized recyclers' }
    ],
    faqs: [
      { question: 'Are the pest control chemicals safe for corporate offices and IT server rooms?', answer: 'Yes. We exclusively use odorless, non-staining, CIB&RC-registered gel baits (such as Bayer Maxforce) and micro-encapsulated formulations that emit zero volatile organic compounds (VOCs) and require no staff evacuation.' },
      { question: 'How does ACS control severe rodent problems in large industrial warehouses?', answer: 'We implement a 3-line IPM rodent defense: (1) Tamper-proof bait stations along the external perimeter, (2) Mechanical multi-catch traps inside dock areas, and (3) Ultrasonic deterrents in server rooms combined with structural proofing of gnaw points.' },
      { question: 'How frequently should commercial pest control treatments be conducted?', answer: 'For standard corporate offices, we recommend monthly service. For food processing units, pharmaceutical plants, and logistics parks, bi-weekly or weekly monitoring is standard to ensure HACCP compliance.' },
      { question: 'Do you offer warranty or guarantees on termite control treatments?', answer: 'Yes. ACS provides a comprehensive 5-year written warranty on post-construction anti-termite treatments and a 10-year warranty on pre-construction soil treatment protocols.' },
      { question: 'Will pest control treatments disrupt our normal business operations?', answer: 'No. Treatments in sensitive office zones are scheduled during non-working hours, weekends, or late evenings, leaving the workspace completely ready for next-morning business.' }
    ]
  },

  // 12. Facade Cleaning
  'facade-cleaning': {
    slug: 'facade-cleaning',
    operationalScope: [
      'High-rise commercial building exterior glass curtain wall cleaning and facade restoration.',
      'Alucobond / Aluminum Composite Panel (ACP) pressure washing and chemical oxidation removal.',
      'Rope access spider-man cleaning operations for curved and complex architectural structures.',
      'Building Maintenance Unit (BMU) cradle and motorized gondola facade maintenance.',
      'Signage cleaning, high-level glazing mastic seal inspection, and bird-spike installation.'
    ],
    trainingStandards: {
      title: 'High-Rise Rope Access & Facade Technician Standard',
      hours: '120 Hours Rigorous Height Safety Training',
      certification: 'IRATA (Level 1/2) / ARAI Certified High-Rise Rope Access Specialist',
      modules: [
        'Rigging, dual-rope anchor systems (working line + safety backup line), and knot mechanics.',
        'Emergency rope rescue, partner retrieval, and suspension trauma prevention.',
        'High-pressure water jetting safety, chemical run-off capture, and glass scratch prevention.',
        'Wind speed monitoring, lightning safety, and sudden weather hazard abort protocols.'
      ]
    },
    gearAndTechnology: [
      'EN 1891 certified low-stretch kernmantle 11mm static working ropes (breaking strength > 30 kN)',
      'Petzl I\'D self-braking descender with anti-panic function and ASAP mobile fall arrester',
      'EN 361 certified full-body fall arrest harness with dorsal and sternal attachment points',
      'Ionic water-fed telescopic carbon-fiber reach poles (up to 60 feet height reach)',
      'Non-abrasive microfiber washers, ergonomic brass squeegees, and spot-free deionized pure water resin tanks'
    ],
    sops: [
      {
        code: 'SOP-FC-01',
        title: 'Roof-Top Dual-Anchor Rigging Verification',
        objective: '100% fail-safe anchor security before any technician suspends over building edge.',
        protocol: 'Rope access supervisor tests rooftop structural anchor points (minimum 15 kN rated), rigs independent main and backup lines, installs edge protectors, and signs Daily Rigging Clearance Certificate.'
      },
      {
        code: 'SOP-FC-02',
        title: 'Ground Drop-Zone Cordoning & Wind Speed Abort',
        objective: 'Prevent falling object injuries to pedestrians below and avoid swinging accidents.',
        protocol: 'Ground marshals establish a 10-meter barricaded exclusion perimeter with caution tape below the cleaning line. Operations are strictly suspended if rooftop wind speed exceeds 25 km/h (Beaufort scale 4).'
      }
    ],
    slaMatrix: [
      { tier: 'Safety', metric: 'Fall-Arrest Equipment Inspection', target: '100% Pre-Shift Check', escalation: 'Any frayed rope or damaged carabiner retired immediately' },
      { tier: 'Quality', metric: 'Glass Streak & Spot-Free Finish', target: '≥ 99% Visual Standard', escalation: 'Spot-check inspection from interior floor with immediate touch-up' },
      { tier: 'Weather', metric: 'High-Wind / Rain Safety Abort', target: 'Instant Suspension', escalation: 'Technicians recalled to roof within 2 minutes of wind alert' }
    ],
    complianceShield: [
      { regulation: 'Building and Other Construction Workers (BOCW) Act 1996', standard: 'Work at Height Safety Standards', coverage: '100% compliance with statutory work-at-height provisions, medical tests, and insurance' },
      { regulation: 'IRATA International Code of Practice (ICOP)', standard: 'Dual-Rope System Redundancy', coverage: 'Technicians tethered to two independent structural rope anchors at all times' },
      { regulation: 'Workmen Compensation & High-Risk Accidental Insurance', standard: 'Comprehensive High-Altitude Policy', coverage: 'All high-rise technicians insured under specialized ₹25 Lakhs accidental coverage' }
    ],
    faqs: [
      { question: 'What height safety certifications do your facade cleaners possess?', answer: 'All ACS high-rise cleaning technicians are IRATA (Industrial Rope Access Trade Association) or equivalent certified, having completed extensive rope access, knot mechanics, and emergency self-rescue training.' },
      { question: 'How is safety ensured for pedestrians and vehicles below the building?', answer: 'We establish an exclusion drop-zone cordoned off with high-visibility barricade tape and deploy dedicated ground marshals wearing hard hats to divert foot and vehicular traffic away from the facade work area.' },
      { question: 'What chemicals are used to clean glass and ACP panels without damaging them?', answer: 'We use pH-neutral, non-abrasive specialized glass cleaners and pure de-ionized water systems that dissolve mineral grime and airborne pollutants without corroding aluminum frames or scratching solar-reflective glass coatings.' },
      { question: 'Can ACS clean complex curved or angled architectural building facades?', answer: 'Yes. Our rope access spider-rigging techniques allow technicians to navigate complex architectural overhangs, domes, curtain wall recesses, and structures where conventional cradle systems cannot reach.' },
      { question: 'What insurance coverage does ACS maintain for high-rise facade operations?', answer: 'Every high-rise operative is backed by specialized high-altitude Workmen Compensation and Personal Accident Insurance up to ₹25 Lakhs per technician, alongside Comprehensive Third-Party Commercial General Liability.' }
    ]
  },

  // 13. MEP Maintenance
  'mep-maintenance': {
    slug: 'mep-maintenance',
    operationalScope: [
      'Comprehensive Mechanical, Electrical & Plumbing (MEP) operations and maintenance for commercial and industrial buildings.',
      'Operation and preventive maintenance of high-voltage sub-stations, transformers, HT/LT panels, and DG backup sets.',
      'HVAC chiller plant, cooling tower, VRV/VRF system, and AHU air-balancing management.',
      'Plumbing networks, water treatment plants (WTP), sewage treatment plants (STP), and hydro-pneumatic pumping systems.'
    ],
    trainingStandards: {
      title: 'Certified MEP Systems Engineer & Licensed Electrician',
      hours: '160 Hours Technical Systems Training',
      certification: 'ITI / Diploma in Electrical/Mechanical Engineering & State Electrical Supervisor License',
      modules: [
        'HT/LT switchgear operation, breaker maintenance (ACB/VCB), and relay testing.',
        'Lockout/Tagout (LOTO) life safety procedures and arc-flash risk mitigation.',
        'Psychrometric chart interpretation, refrigerant leak detection, and chiller COP optimization.',
        'STP microbial culture balancing, effluent parameter testing (BOD, COD, TSS), and chlorine dosing.'
      ]
    },
    gearAndTechnology: [
      'Fluke true-RMS digital multimeters and clamp meters (CAT-IV 600V rated)',
      'Infrared thermal imaging camera for electrical panel hot-spot detection',
      'Calibrated digital refrigerant manifold gauges and electronic halogen leak detectors',
      '11kV / 33kV certified electrical safety rubber insulating gloves and dielectric boots',
      'Lockout/Tagout (LOTO) safety padlocks, lockout hasps, and circuit breaker lockouts'
    ],
    sops: [
      {
        code: 'SOP-MEP-01',
        title: 'Lockout/Tagout (LOTO) De-energization Protocol',
        objective: 'Zero accidental electrocution or mechanical startup during electrical panel servicing.',
        protocol: 'Technician isolates main breaker, tests with calibrated multimeter to confirm zero potential, attaches personal LOTO padlock and danger tag, keeps key on person, and logs permit in LOTO register.'
      },
      {
        code: 'SOP-MEP-02',
        title: 'DG Set Auto-Mains Failure (AMF) Weekly Load Test',
        objective: 'Guarantee instantaneous backup power during unexpected grid power failure.',
        protocol: 'Technician simulates grid failure via AMF panel on Saturday evening, verifies DG start within 15 seconds, checks phase voltages, oil pressure (minimum 3.5 kg/cm²), and logs fuel consumption.'
      }
    ],
    slaMatrix: [
      { tier: 'Critical', metric: 'Power Outage / HT Breaker Tripping', target: '< 5 Minutes', escalation: 'DG auto-synchronization + Senior Electrical Engineer intervention' },
      { tier: 'HVAC', metric: 'Office Temperature Complaint Resolution', target: '< 30 Minutes', escalation: 'AHU VAV damper calibration and chiller setpoint check' },
      { tier: 'Plumbing', metric: 'Major Water Pipe Burst / Leakage Containment', target: '< 15 Minutes', escalation: 'Isolation valve shutdown + Extraction pump deployment' }
    ],
    complianceShield: [
      { regulation: 'Central Electricity Authority (CEA) Safety Regulations 2010', standard: 'Measures Relating to Safety and Electric Supply', coverage: 'All electricians hold valid state wireman licenses; electrical supervisor on-site' },
      { regulation: 'Pollution Control Board (PCB) Environmental Standards', standard: 'STP / ETP Treated Water Quality Limits', coverage: 'STP effluent parameters maintained strictly within State PCB discharge standards' },
      { regulation: 'Petroleum and Explosives Safety Organization (PESO)', standard: 'Diesel Storage Tank Licensing Compliance', coverage: 'Class-B petroleum storage for DG sets maintained under valid PESO guidelines' }
    ],
    faqs: [
      { question: 'What technical qualifications do your on-site MEP engineers possess?', answer: 'Our MEP teams are led by Degree/Diploma Engineers in Electrical or Mechanical Engineering, supported by ITI-certified technicians holding valid State Electrical Licensing Board Supervisor and Wireman licenses.' },
      { question: 'How do you handle sudden power cuts or DG synchronization failures?', answer: 'ACS technicians are stationed directly inside the main substation. In the event of AMF failure, our staff execute manual DG start-up and bus-coupler breaker changeover within 3 to 5 minutes.' },
      { question: 'Do you provide infrared thermographic testing of electrical panels?', answer: 'Yes. We conduct periodic infrared thermography audits across all LT/HT panels and transformer bushings to identify loose terminations and overheating hot-spots before electrical fires occur.' },
      { question: 'Can ACS operate and maintain our Sewage Treatment Plant (STP) and WTP?', answer: 'Yes. Our environmental technicians manage biological aeration tanks, test BOD/COD/pH levels daily, maintain sand/carbon filters, and ensure compliance with State Pollution Control Board discharge norms.' },
      { question: 'Do you manage HVAC chiller plants and energy optimization programs?', answer: 'Yes. Our HVAC technicians log hourly Chiller Coefficient of Performance (COP), clean condenser tubes, balance water flow rates, and calibrate AHU dampers to reduce commercial power consumption.' }
    ]
  },

  // 14. Manpower Outsourcing
  'manpower-outsourcing': {
    slug: 'manpower-outsourcing',
    operationalScope: [
      'Comprehensive contractual staffing and labor supply across unskilled, semi-skilled, skilled, and highly skilled categories.',
      'Deployment of warehouse pickers, packers, forklift operators, assembly line workers, and inventory counters.',
      'Administrative staffing: front-desk receptionists, data entry operators, office boys, and mailroom coordinators.',
      'Complete Employer of Record (EOR) management: attendance tracking, payroll, statutory benefits, and legal compliance.'
    ],
    trainingStandards: {
      title: 'Contract Workforce Onboarding & Industrial Safety Induction',
      hours: '40 Hours Skill & Workplace Safety Induction',
      certification: 'National Apprenticeship / Skill Council & Antecedent Verified',
      modules: [
        'Industrial 5S workplace organization, lean manufacturing principles, and productivity benchmarks.',
        'Material handling ergonomics, heavy lifting techniques, and back injury prevention.',
        'Punctuality, shift changeover protocols, and biometric punch-card adherence.',
        'POSH (Prevention of Sexual Harassment) training and workplace code of conduct.'
      ]
    },
    gearAndTechnology: [
      'Biometric fingerprint / face-recognition mobile attendance terminals with GPS geotagging',
      'Industrial PPE kits: ISI-marked safety shoes, protective gloves, earplugs, high-vis vests',
      'Employee self-service mobile app for viewing digital pay slips, PF balances, and leave records',
      'Automated digital payroll calculation engine with statutory minimum wage validation'
    ],
    sops: [
      {
        code: 'SOP-MO-01',
        title: 'Bulk Candidate Screening & Police Antecedent Verification',
        objective: 'Deploy 100% legitimate, crime-free workforce for industrial clients.',
        protocol: 'Candidates undergo Aadhaar verification, physical permanent address verification, previous employer reference checks, and local police station character verification before job offer.'
      },
      {
        code: 'SOP-MO-02',
        title: 'Biometric Daily Muster & Discrepancy Reconciliation',
        objective: 'Zero ghost workers or attendance payroll inflation.',
        protocol: 'Every outsourced employee punches biometric muster upon shift entry and exit. On-site ACS coordinator reconciles muster rolls with supervisor shift logs daily at 10:00 AM.'
      }
    ],
    slaMatrix: [
      { tier: 'Mobilization', metric: 'Bulk Labor Detachment (25–100 Workers)', target: 'Within 72 Hours', escalation: 'Regional recruitment talent bench mobilized' },
      { tier: 'Attendance', metric: 'Shift Staffing Fulfillment Rate', target: '≥ 98.0%', escalation: 'Reserve workforce deployed from local branch pool' },
      { tier: 'Payroll', metric: 'Salary Credit into Worker Bank Accounts', target: 'On or Before 7th', escalation: '100% direct bank NEFT transfer with SMS confirmation' }
    ],
    complianceShield: [
      { regulation: 'Contract Labour (Regulation & Abolition) Act 1970', standard: 'Form-VI Labor Contractor License', coverage: 'ACS holds valid CLRA licenses matching or exceeding site deployed manpower' },
      { regulation: 'Employees\' Provident Funds & MP Act 1952', standard: '12% EPF + 1% Admin/EDLI Remittance', coverage: '100% workers enrolled on EPFO portal with individual UAN numbers generated' },
      { regulation: 'Employees\' State Insurance Act 1948', standard: '3.25% ESIC Medical Insurance', coverage: 'All workers earning ≤ ₹21,000/mo covered with full family medical benefits' },
      { regulation: 'Payment of Bonus Act 1965', standard: '8.33% Annual Bonus Remittance', coverage: 'Statutory bonus calculated and paid on time or structured monthly per contract' }
    ],
    faqs: [
      { question: 'What categories of outsourced manpower can ACS supply?', answer: 'ACS supplies all four statutory labor classifications: Unskilled (helpers, loaders), Semi-Skilled (packers, inventory assistants), Skilled (forklift operators, electricians, welders), and Highly-Skilled (specialist technicians, admin managers).' },
      { question: 'How quickly can ACS deploy 50+ contract workers for a new warehouse or plant?', answer: 'Through our active regional talent bench across Eastern India and NCR, ACS can screen, verify, and mobilize 50 to 100 workers within 72 hours of receiving work orders.' },
      { question: 'Does ACS bear 100% statutory employer compliance responsibility?', answer: 'Yes. ACS is the primary Employer of Record (EOR). We handle PF, ESIC, professional tax, minimum wages, and bonus disbursements, shielding the client organization from principal employer liability.' },
      { question: 'How is worker salary payment verified by client procurement teams?', answer: 'With every monthly invoice, ACS provides a comprehensive Compliance Docket containing: (1) EPFO Electronic Challan (ECR) with TRRN bank receipt, (2) ESIC contribution receipt, and (3) Bank NEFT salary disbursement statements.' },
      { question: 'What happens if a deployed worker underperforms or exhibits behavioral misconduct?', answer: 'ACS provides a no-questions-asked 24-hour worker replacement guarantee. Any staff member deemed unsuitable by client management is replaced immediately.' }
    ]
  },

  // 15. Placement Services
  'placement-services': {
    slug: 'placement-services',
    operationalScope: [
      'Permanent executive search, lateral hiring, and specialized technical recruitment for corporates and manufacturing plants.',
      'Comprehensive candidate credential auditing: educational degree validation, employment verification, and criminal checks.',
      'Specialized hiring for plant managers, safety officers, supply chain leads, and facilities directors.',
      'Full recruitment lifecycle: job profiling, multi-channel sourcing, structured technical interviews, and salary negotiation.'
    ],
    trainingStandards: {
      title: 'Executive Recruitment & Behavioral Assessment Standard',
      hours: '80 Hours Structured Interviewing & Talent Search',
      certification: 'Certified Talent Acquisition Professional (CTAP)',
      modules: [
        'Competency-based behavioral interviewing (STAR methodology).',
        'Headhunting passive leadership talent via executive networks.',
        'Market compensation benchmarking and CTC structuring.',
        'Background check fraud detection and fake experience certificate screening.'
      ]
    },
    gearAndTechnology: [
      'Enterprise Applicant Tracking System (ATS) with automated resume parsing',
      'AI-powered background verification (BGV) platform for instant credential validation',
      'Proprietary candidate repository spanning 50,000+ verified professionals in Eastern India & NCR',
      'Digital psychometric and skill assessment testing portals'
    ],
    sops: [
      {
        code: 'SOP-PS-01',
        title: '3-Tier Background Verification (BGV) Verification',
        objective: 'Zero counterfeit resumes, fake credentials, or fraudulent employment claims.',
        protocol: 'ACS verifies: (1) 10th/12th/Degree certificates directly with university registrar portals, (2) Last 3 years Form 26AS/PF transfer records, and (3) Senior reporting manager reference calls.'
      },
      {
        code: 'SOP-PS-02',
        title: '90-Day Candidate Replacement Guarantee',
        objective: 'Protect client financial investment against premature candidate attrition.',
        protocol: 'If a placed candidate resigns or is terminated for cause within 90 calendar days of joining, ACS sources and presents qualified replacement candidates at zero additional service charge.'
      }
    ],
    slaMatrix: [
      { tier: 'Profile Delivery', metric: 'Qualified Candidate Shortlist Submission', target: '< 5 Business Days', escalation: 'Senior Talent Acquisition Partner dedicated to search' },
      { tier: 'Interview', metric: 'First-Round Candidate Quality Acceptance', target: '≥ 75% Interviewed', escalation: 'Refined job description calibration call with hiring manager' },
      { tier: 'Replacement', metric: 'Free 90-Day Replacement Sourcing', target: '< 14 Days Notice', escalation: 'Immediate re-activation of sourcing pipeline' }
    ],
    complianceShield: [
      { regulation: 'Ministry of Labour & Employment Guidelines', standard: 'Private Placement Agency Regulations', coverage: 'Licensed placement services operating under fair recruitment practices' },
      { regulation: 'Digital Personal Data Protection Act 2023', standard: 'Candidate Consent & Resume Privacy', coverage: 'Candidate data collected and shared strictly with explicit written consent' },
      { regulation: 'Equal Opportunity & Non-Discrimination Policy', standard: 'Ethical Workplace Diversity Norms', coverage: 'Zero discrimination across gender, caste, religion, or age in screening processes' }
    ],
    faqs: [
      { question: 'What executive and technical roles does ACS specialize in placing?', answer: 'ACS specializes in mid-to-senior leadership roles in manufacturing, logistics, facility management, security leadership, corporate administration, and industrial plant engineering.' },
      { question: 'What is your placement replacement guarantee period?', answer: 'ACS provides a comprehensive 90-day free replacement guarantee. If a placed candidate leaves or is separated within 90 days, we provide a qualified replacement at no extra charge.' },
      { question: 'How does ACS conduct background verification on candidates?', answer: 'We conduct a stringent 3-point check: educational certificate verification with universities, EPFO PF deposit history checks to prove authentic employment, and telephonic reference checks with past managers.' },
      { question: 'What is your commercial fee structure for permanent placement services?', answer: 'Our standard commercial success fee ranges from 8.33% to 12.5% of the candidate\'s Annual Gross Cost to Company (CTC), payable only upon successful onboarding of the selected candidate.' },
      { question: 'Can ACS manage bulk recruitment drives for new facility rollouts?', answer: 'Yes. ACS organizes turnkey campus and open recruitment drives, handling candidate screening, skill assessments, initial interviews, and onboarding logistics for 100+ positions simultaneously.' }
    ]
  },

  // 16. Payroll Management
  'payroll-management': {
    slug: 'payroll-management',
    operationalScope: [
      'End-to-end outsourced payroll processing for contract and corporate personnel.',
      'Monthly gross-to-net salary computation, overtime calculations, and statutory deductions.',
      'Generation of EPFO ECR files, ESIC monthly contribution challans, and Professional Tax filings.',
      'Generation of digitally signed Form-16, annual leave encashment calculations, and full & final (F&F) settlements.'
    ],
    trainingStandards: {
      title: 'Certified Statutory Payroll & Labor Compliance Specialist',
      hours: '100 Hours Advanced Labor Law & Tax Computation',
      certification: 'Certified Payroll Professional (CPP) & Labor Law Compliance Expert',
      modules: [
        'EPFO unified portal rules, UAN seeding, and Section 7A inquiry avoidance.',
        'State-wise minimum wage gazette notifications, VDA updates, and wage structuring.',
        'Income Tax TDS deductions (Section 192), new vs old tax regime calculations.',
        'Full and final settlement statutory timelines (Gratuity, Leave Encashment, Notice Pay).'
      ]
    },
    gearAndTechnology: [
      'Cloud-based enterprise HRMS and payroll computation software with automated tax algorithms',
      'Direct bank API integration for automated bulk NEFT salary disbursements',
      'Employee self-service portal and mobile app for instant pay slip downloads and tax declarations',
      'Automated statutory compliance reconciliation dashboard with discrepancy flagging'
    ],
    sops: [
      {
        code: 'SOP-PAY-01',
        title: 'Monthly Payroll Cut-Off & 3-Tier Audit Protocol',
        objective: '100% calculation accuracy with zero salary credit delays.',
        protocol: 'Attendance data locks on 25th; Junior Payroll Specialist runs gross-to-net calculations on 28th; Senior Compliance Officer audits statutory deduction formulas on 30th; CFO signs off for 1st-day bank transfer.'
      },
      {
        code: 'SOP-PAY-02',
        title: 'Statutory ECR Filing & Bank Challan Clearance',
        objective: 'Timely remittance of PF and ESI contributions on or before the 15th of every month.',
        protocol: 'Payroll team uploads ECR to EPFO and ESIC portals by the 10th of every month, initiates online bank RTGS clearance, archives verifiable TRRN receipts, and distributes compliance packs to clients.'
      }
    ],
    slaMatrix: [
      { tier: 'Disbursement', metric: 'Salary Credit to Employee Bank Accounts', target: 'By 7th of Every Month', escalation: 'Guaranteed liquidity buffer preventing any payroll delay' },
      { tier: 'Accuracy', metric: 'Payroll Calculation Error Rate', target: '< 0.05%', escalation: 'Instant supplemental payroll adjustment within 24 hours' },
      { tier: 'Compliance', metric: 'EPFO & ESIC Challan Deposit', target: 'By 12th (Before 15th)', escalation: 'Zero statutory penalty guarantee' }
    ],
    complianceShield: [
      { regulation: 'Employees\' Provident Funds & Miscellaneous Provisions Act 1952', standard: 'EPF ECR & TRRN Compliance', coverage: '100% statutory employer/employee deposit matching actual deployed attendance' },
      { regulation: 'Employees\' State Insurance Act 1948', standard: 'ESIC Contribution Compliance', coverage: 'Timely payment shielding clients from recovery orders and penal damages' },
      { regulation: 'Payment of Wages Act 1936', standard: 'Statutory Wage Disbursement Timeline', coverage: 'Wages credited into worker bank accounts strictly on or before 7th/10th' },
      { regulation: 'Payment of Gratuity Act 1972', standard: 'Statutory Gratuity Provisioning', coverage: 'Accurate 15-day per year gratuity provisioning and prompt settlement upon separation' }
    ],
    faqs: [
      { question: 'How does ACS ensure 100% error-free payroll processing?', answer: 'We employ a robust 3-tier audit protocol: attendance cross-verification, automated rule-based calculation, and a final manual review by a Senior Statutory Compliance Officer before salary disbursement.' },
      { question: 'How do you handle revisions in State Minimum Wages and VDA notifications?', answer: 'Our legal compliance desk monitors State Labour Department gazettes daily. When a Variable Dearness Allowance (VDA) or minimum wage notification is published, our payroll engine updates wage structures immediately.' },
      { question: 'What proof of statutory compliance is provided to client audit teams?', answer: 'With every monthly invoice, we provide an authenticated compliance docket including the EPFO ECR with bank TRRN receipt, ESIC payment receipt, and bank transaction confirmation sheets.' },
      { question: 'Can employees view and download their monthly pay slips online?', answer: 'Yes. Every employee receives access to the ACS Employee Self-Service mobile app and portal to download password-protected monthly pay slips, view PF balances, and track leave.' },
      { question: 'What is your timeline for processing Full & Final (F&F) settlements?', answer: 'ACS processes complete Full & Final settlements—including earned leave encashment, pending wages, and statutory gratuity calculations—within 30 days of employee separation.' }
    ]
  },

  // 17. Horticulture
  'horticulture': {
    slug: 'horticulture',
    operationalScope: [
      'Comprehensive landscape design, development, and ongoing grounds keeping for corporate parks, hospitals, and campuses.',
      'Lawn mowing, edging, aeration, organic fertilization, and seasonal top-dressing.',
      'Indoor plant supply, bi-weekly rotation, foliage polishing, and hydro-culture maintenance.',
      'Tree pruning, hedge trimming, weed suppression, and computerized drip/sprinkler irrigation maintenance.'
    ],
    trainingStandards: {
      title: 'Certified Commercial Horticulturist & Grounds Keeper',
      hours: '80 Hours Agronomy & Landscape Training',
      certification: 'Certified Landscape Professional & Organic Soil Management Specialist',
      modules: [
        'Soil pH testing, N-P-K mineral balancing, and organic vermicompost enrichment.',
        'Native species propagation, drought-tolerant xeriscaping, and seasonal flowerbed planning.',
        'Mechanized lawnmower, motorized brush-cutter, and high-reach hedge trimmer safe operation.',
        'Eco-friendly botanical pest control, neem oil formulation, and biological weed suppression.'
      ]
    },
    gearAndTechnology: [
      'Heavy-duty self-propelled commercial rotary lawnmowers with grass mulching bags',
      'Motorized high-torque brush-cutters and pole-mounted articulating hedge trimmers',
      'Automated timer-controlled drip irrigation systems with soil moisture sensors',
      'Organic vermicompost, bone-meal fertilizers, and cold-pressed neem-based bio-pesticides',
      'Complete operator PPE: eye protection visors, vibration-dampening gloves, steel-toe boots'
    ],
    sops: [
      {
        code: 'SOP-HORT-01',
        title: 'Weekly Lawn Aeration, Mowing & Edging',
        objective: 'Maintain lush, deep-green, carpet-like turf across corporate grounds.',
        protocol: 'Gardener mows grass to 2.5-inch height in alternating directional patterns, edges borders along pavement lines, rakes clippings into organic compost bins, and irrigates within 30 minutes.'
      },
      {
        code: 'SOP-HORT-02',
        title: 'Indoor Executive Plant Health & Rotation Protocol',
        objective: 'Ensure office plants maintain vibrant foliage without leaf yellowing or dust buildup.',
        protocol: 'Horticulturist inspects indoor plants twice weekly, checks soil moisture with probe, wipes leaves with organic foliar shine, and rotates indoor pots to the rooftop nursery every 21 days for sunlight recharge.'
      }
    ],
    slaMatrix: [
      { tier: 'Lawn Health', metric: 'Turf Greenery & Weed-Free Index', target: '≥ 95% Coverage', escalation: 'Aeration and organic nitrogen top-dressing applied within 48 hours' },
      { tier: 'Indoor Plants', metric: 'Unhealthy Indoor Plant Replacement', target: '< 24 Hours', escalation: 'Fresh nursery-acclimatized pot delivered immediately' },
      { tier: 'Irrigation', metric: 'Sprinkler / Drip Line Leak Repair', target: '< 4 Hours', escalation: 'Irrigation technician dispatched to prevent water wastage' }
    ],
    complianceShield: [
      { regulation: 'Green Building Rating System (IGBC / LEED)', standard: 'Water-Efficient Landscaping Standards', coverage: 'Landscapes designed with native flora and drip systems maximizing LEED water credits' },
      { regulation: 'Municipal Solid Waste Management Rules', standard: '100% On-Site Organic Composting', coverage: 'Garden green waste mulched and converted to organic compost on campus' },
      { regulation: 'Minimum Wages Act (Agricultural / Horticulture)', standard: 'Statutory Wage & Welfare Adherence', coverage: 'Full statutory wage compliance with EPF and ESIC coverage for all gardeners' }
    ],
    faqs: [
      { question: 'Does ACS handle both outdoor campus landscaping and indoor office plants?', answer: 'Yes. ACS provides end-to-end green solutions: outdoor lawn development, manicured hedges, tree arboriculture, and curated indoor potted plants with scheduled nursery rotation.' },
      { question: 'How do you keep indoor potted plants healthy in air-conditioned offices?', answer: 'We maintain dedicated acclimatization nurseries. Indoor plants are inspected twice weekly, wiped for dust, treated with organic nutrients, and rotated back to the nursery every 2 to 3 weeks for sunlight recovery.' },
      { question: 'Can ACS design water-efficient xeriscaping to earn IGBC or LEED green credits?', answer: 'Yes. Our landscape architects design eco-friendly green spaces using drought-tolerant native plants, organic mulching, and smart drip irrigation systems that reduce water consumption by up to 40%.' },
      { question: 'What mechanized equipment does ACS provide for grounds maintenance?', answer: 'We provide commercial motorized lawnmowers, hedge trimmers, brush-cutters, soil tillers, high-reach pole pruners, and leaf blowers to maintain expansive campuses efficiently.' },
      { question: 'Do you use chemical pesticides or organic fertilizers?', answer: 'ACS prioritizes environmental sustainability. We use organic vermicompost, bone meal, and natural neem-based bio-pesticides that are 100% safe for pets, birds, and corporate employees.' }
    ]
  }
};

export function getEnterpriseServiceDetails(slug: string): EnterpriseServiceDetail | undefined {
  return ENTERPRISE_SERVICE_DETAILS[slug];
}
