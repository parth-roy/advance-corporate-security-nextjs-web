/**
 * ACS Enterprise Workforce Capacity & Operating Float Model
 *
 * Implements the mathematical workforce supply capacity and financial float
 * constraints defined in Section 12 of the ACS Enterprise Blueprint:
 *
 * Operational Capacity = Active Approved Supervisors * Sites per Supervisor * Available Verified Staff * Affordable Payroll Float
 *
 * Unlike hotel inventory (fixed physical room counts), enterprise security and facility
 * management capacity is strictly constrained by human supervisory span-of-control,
 * statutory reliever rosters (1/6th rule), and working capital (60-day payroll float).
 */

export interface SourcingTier {
  category: "standard_unarmed" | "armed_ex_servicemen" | "fire_safety_first_aid" | "executive_protection" | "facility_housekeeping";
  name: string;
  sourcingLeadTimeDays: { min: number; max: number };
  sourcingLeadTimeLabel: string;
  averageMonthlyGrossCTC: number; // INR per worker (Basic + VDA + EPF + ESIC + Bonus + Reliever)
  minTrainingHours: number; // MHA/PSARA mandated
}

export const SOURCING_TIERS: Record<string, SourcingTier> = {
  standard_unarmed: {
    category: "standard_unarmed",
    name: "Standard Unarmed Security Guard (PSARA Certified)",
    sourcingLeadTimeDays: { min: 1, max: 2 },
    sourcingLeadTimeLabel: "24–48 Hours Rapid Mobilisation",
    averageMonthlyGrossCTC: 19500,
    minTrainingHours: 160,
  },
  armed_ex_servicemen: {
    category: "armed_ex_servicemen",
    name: "Armed Security Guard / Ex-Servicemen (ESM / PBOR)",
    sourcingLeadTimeDays: { min: 5, max: 7 },
    sourcingLeadTimeLabel: "5–7 Business Days",
    averageMonthlyGrossCTC: 28500,
    minTrainingHours: 200,
  },
  fire_safety_first_aid: {
    category: "fire_safety_first_aid",
    name: "Industrial Fire Safety & First Responder Marshal",
    sourcingLeadTimeDays: { min: 5, max: 7 },
    sourcingLeadTimeLabel: "5–7 Business Days",
    averageMonthlyGrossCTC: 24500,
    minTrainingHours: 180,
  },
  executive_protection: {
    category: "executive_protection",
    name: "Executive Protection Officer / Armed Close Protection (CPO)",
    sourcingLeadTimeDays: { min: 7, max: 10 },
    sourcingLeadTimeLabel: "7–10 Business Days",
    averageMonthlyGrossCTC: 45000,
    minTrainingHours: 240,
  },
  facility_housekeeping: {
    category: "facility_housekeeping",
    name: "Corporate Housekeeper & Facility Technical Attendant",
    sourcingLeadTimeDays: { min: 2, max: 3 },
    sourcingLeadTimeLabel: "48–72 Hours",
    averageMonthlyGrossCTC: 16800,
    minTrainingHours: 80,
  },
};

export interface OperationalHubCapacity {
  hubId: string;
  name: string;
  state: string;
  zone: string;
  psaraJurisdiction: "DIRECT_FORM_V" | "EMPANELLED_NETWORK";
  activeSupervisors: number;
  maxSitesPerSupervisor: number; // Standard: 8 to 10
  currentDeployedSites: number;
  activeVerifiedGuards: number;
  maxGuardsCapacity: number;
  currentUtilizationPercentage: number;
  monthlyPayrollReserveHeldINR: number;
}

/**
 * Operational District Hubs Supply Inventory
 * Represents ACS verified ground infrastructure across core operating regions.
 */
export const OPERATIONAL_HUBS: OperationalHubCapacity[] = [
  {
    hubId: "wb-kolkata-central",
    name: "Kolkata Metropolitan & North 24 Parganas (Barrackpore HQ)",
    state: "West Bengal",
    zone: "Zone A",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 18,
    maxSitesPerSupervisor: 10,
    currentDeployedSites: 112,
    activeVerifiedGuards: 1420,
    maxGuardsCapacity: 1800,
    currentUtilizationPercentage: 78.8,
    monthlyPayrollReserveHeldINR: 58000000, // 5.8 Crore reserve
  },
  {
    hubId: "wb-howrah-hooghly",
    name: "Howrah Logistics & Hooghly Industrial Corridor (NH-16 / NH-19)",
    state: "West Bengal",
    zone: "Zone A",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 14,
    maxSitesPerSupervisor: 10,
    currentDeployedSites: 84,
    activeVerifiedGuards: 980,
    maxGuardsCapacity: 1400,
    currentUtilizationPercentage: 70.0,
    monthlyPayrollReserveHeldINR: 39000000, // 3.9 Crore reserve
  },
  {
    hubId: "wb-durgapur-asansol",
    name: "Paschim Bardhaman Steel & Mining Belt (Durgapur-Asansol)",
    state: "West Bengal",
    zone: "Zone B",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 10,
    maxSitesPerSupervisor: 8,
    currentDeployedSites: 52,
    activeVerifiedGuards: 680,
    maxGuardsCapacity: 1000,
    currentUtilizationPercentage: 68.0,
    monthlyPayrollReserveHeldINR: 25000000,
  },
  {
    hubId: "wb-siliguri-north",
    name: "Siliguri & North Bengal Tea & Logistics Hub",
    state: "West Bengal",
    zone: "Zone B",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 8,
    maxSitesPerSupervisor: 8,
    currentDeployedSites: 36,
    activeVerifiedGuards: 420,
    maxGuardsCapacity: 650,
    currentUtilizationPercentage: 64.6,
    monthlyPayrollReserveHeldINR: 16000000,
  },
  {
    hubId: "ncr-delhi-gurgaon",
    name: "Delhi NCR Corporate & Warehousing Hub (Gurugram / Manesar / Noida)",
    state: "Delhi NCR",
    zone: "Delhi Sphere",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 12,
    maxSitesPerSupervisor: 8,
    currentDeployedSites: 60,
    activeVerifiedGuards: 720,
    maxGuardsCapacity: 1100,
    currentUtilizationPercentage: 65.4,
    monthlyPayrollReserveHeldINR: 32000000,
  },
  {
    hubId: "jh-ranchi-jamshedpur",
    name: "Jharkhand Heavy Engineering Corridor (Jamshedpur / Adityapur / Ranchi)",
    state: "Jharkhand",
    zone: "Area B",
    psaraJurisdiction: "DIRECT_FORM_V",
    activeSupervisors: 8,
    maxSitesPerSupervisor: 8,
    currentDeployedSites: 44,
    activeVerifiedGuards: 490,
    maxGuardsCapacity: 750,
    currentUtilizationPercentage: 65.3,
    monthlyPayrollReserveHeldINR: 18000000,
  },
];

export interface WorkforceCapacityConstraints {
  maxSitesPerSupervisor: number; // 8 - 10 client sites
  maxGuardsPerSupervisor: number; // 15 - 20 guards
  mandatoryRelieverRatio: number; // 0.1667 (1/6th) for 24x7 rosters
  minPayrollFloatMonths: number; // 2 months (60 days) working capital reserve
  standardCreditTermsDays: number; // 30, 45, or 60 days
}

export const CAPACITY_RULES: WorkforceCapacityConstraints = {
  maxSitesPerSupervisor: 10,
  maxGuardsPerSupervisor: 18,
  mandatoryRelieverRatio: 1 / 6, // 16.67%
  minPayrollFloatMonths: 2.0, // 60 days payroll cash backing
  standardCreditTermsDays: 45,
};

export interface DeploymentEvaluationRequest {
  hubId: string;
  numberOfPosts: number;
  shiftCoverage: "8h_single" | "12h_single" | "12h_dual" | "24x7_continuous";
  category: keyof typeof SOURCING_TIERS;
  clientCreditDays: 30 | 45 | 60 | 90;
}

export interface DeploymentEvaluationResult {
  feasible: boolean;
  status: "FEASIBLE_IMMEDIATE" | "FEASIBLE_WITH_SUPERVISOR_ALLOCATION" | "FEASIBLE_WITH_CREDIT_BACKING" | "CAPACITY_CONSTRAINED";
  hubName: string;
  baseGuardsNeeded: number;
  relieversNeeded: number;
  totalHeadcountDeployed: number;
  supervisorsRequired: number;
  sourcingLeadTimeLabel: string;
  estimatedMonthlyWageBillINR: number;
  requiredPayrollFloatReserveINR: number; // 60-day working capital float
  advisoryNote: string;
  statutoryChecklist: {
    psaraJurisdictionVerified: boolean;
    relieverMandateMet: boolean;
    supervisorRatioWithinLimit: boolean;
    floatBackingSatisfied: boolean;
  };
}

/**
 * Evaluates whether ACS operational infrastructure can fulfill an enterprise deployment
 * without violating supervisor span-of-control, weekly-off relievers, or payroll liquidity.
 */
export function evaluateDeploymentFeasibility(
  request: DeploymentEvaluationRequest
): DeploymentEvaluationResult {
  const hub = OPERATIONAL_HUBS.find((h) => h.hubId === request.hubId) || OPERATIONAL_HUBS[0];
  const tier = SOURCING_TIERS[request.category] || SOURCING_TIERS.standard_unarmed;

  // 1. Calculate Headcount & Relievers
  let postsMultiplier = 1;
  let isContinuous24x7 = false;

  switch (request.shiftCoverage) {
    case "8h_single":
      postsMultiplier = 1;
      break;
    case "12h_single":
      postsMultiplier = 1.5;
      break;
    case "12h_dual":
      postsMultiplier = 2;
      break;
    case "24x7_continuous":
      postsMultiplier = 3;
      isContinuous24x7 = true;
      break;
  }

  const baseGuards = Math.ceil(request.numberOfPosts * postsMultiplier);
  // Reliever calculation: 1/6th mandatory for 24x7 operations to cover weekly offs without post abandonment
  const relievers = isContinuous24x7 ? Math.ceil(baseGuards * CAPACITY_RULES.mandatoryRelieverRatio) : 0;
  const totalHeadcount = baseGuards + relievers;

  // 2. Supervisor Span of Control
  const supervisorsNeeded = Math.max(1, Math.ceil(totalHeadcount / CAPACITY_RULES.maxGuardsPerSupervisor));

  // 3. Financial Float (Payroll float requirement)
  // Enterprise clients pay in 30 to 60 days. Wages must be paid by 7th/10th. Float = (Gross CTC * headcount) * (creditDays / 30)
  const creditMonths = Math.max(CAPACITY_RULES.minPayrollFloatMonths, request.clientCreditDays / 30);
  const monthlyWageBill = totalHeadcount * tier.averageMonthlyGrossCTC;
  const requiredFloat = Math.round(monthlyWageBill * creditMonths);

  // 4. District Hub Supply Feasibility
  const availableGuardsCapacity = hub.maxGuardsCapacity - hub.activeVerifiedGuards;
  const availableSupervisorsCapacity = hub.activeSupervisors * hub.maxSitesPerSupervisor - hub.currentDeployedSites;

  let status: DeploymentEvaluationResult["status"] = "FEASIBLE_IMMEDIATE";
  let advisoryNote = `Deployment fully feasible within ${hub.name}. Mobilisation SLA: ${tier.sourcingLeadTimeLabel}.`;

  if (totalHeadcount > availableGuardsCapacity) {
    status = "CAPACITY_CONSTRAINED";
    advisoryNote = `Requested headcount (${totalHeadcount}) exceeds immediate unallocated reserve (${availableGuardsCapacity}). Requires phased recruitment wave of ${tier.sourcingLeadTimeDays.max + 5} days.`;
  } else if (availableSupervisorsCapacity < 1) {
    status = "FEASIBLE_WITH_SUPERVISOR_ALLOCATION";
    advisoryNote = `Deployment feasible with assignment of 1 dedicated site supervisor to maintain the 1:18 supervision ratio.`;
  } else if (request.clientCreditDays > 60) {
    status = "FEASIBLE_WITH_CREDIT_BACKING";
    advisoryNote = `Extended enterprise credit terms (${request.clientCreditDays} days) require corporate treasury float allocation of ₹${(requiredFloat / 100000).toFixed(1)} Lakhs.`;
  }

  return {
    feasible: status !== "CAPACITY_CONSTRAINED",
    status,
    hubName: hub.name,
    baseGuardsNeeded: baseGuards,
    relieversNeeded: relievers,
    totalHeadcountDeployed: totalHeadcount,
    supervisorsRequired: supervisorsNeeded,
    sourcingLeadTimeLabel: tier.sourcingLeadTimeLabel,
    estimatedMonthlyWageBillINR: monthlyWageBill,
    requiredPayrollFloatReserveINR: requiredFloat,
    advisoryNote,
    statutoryChecklist: {
      psaraJurisdictionVerified: hub.psaraJurisdiction === "DIRECT_FORM_V",
      relieverMandateMet: !isContinuous24x7 || relievers > 0,
      supervisorRatioWithinLimit: totalHeadcount / supervisorsNeeded <= CAPACITY_RULES.maxGuardsPerSupervisor,
      floatBackingSatisfied: hub.monthlyPayrollReserveHeldINR >= requiredFloat,
    },
  };
}

/**
 * Planning Sensitivity Model from Blueprint Page 6
 * Contrasts Conservative, Base, and Stretch enterprise acquisition trajectories.
 */
export interface PlanningSensitivityScenario {
  scenarioName: "Conservative" | "Base" | "Stretch";
  description: string;
  qualifiedLeadsPerMonth: number;
  proposalSubmissionRate: number; // e.g. 0.40
  proposalsSubmittedPerMonth: number;
  contractWinRate: number; // e.g. 0.10
  contractsWonPerMonth: number;
  averageWorkersPerContract: number;
  monthlyNewHeadcount: number;
  cumulative12MonthHeadcount: number;
  averageMonthlyContractValueINR: number;
  cumulative12MonthARR_INR: number;
  requiredPayrollFloatReserveINR: number;
  newSupervisorsRequiredPerYear: number;
}

export const SENSITIVITY_SCENARIOS: PlanningSensitivityScenario[] = [
  {
    scenarioName: "Conservative",
    description: "Selective institutional contracts, strict credit vetting, organic inbound only.",
    qualifiedLeadsPerMonth: 10,
    proposalSubmissionRate: 0.4,
    proposalsSubmittedPerMonth: 4,
    contractWinRate: 0.1,
    contractsWonPerMonth: 0.4, // 1 won every 2.5 months (~5 contracts/year)
    averageWorkersPerContract: 8,
    monthlyNewHeadcount: 3.2,
    cumulative12MonthHeadcount: 38,
    averageMonthlyContractValueINR: 160000,
    cumulative12MonthARR_INR: 9120000, // ₹91.2 Lakhs ARR
    requiredPayrollFloatReserveINR: 1520000, // ₹15.2 Lakhs
    newSupervisorsRequiredPerYear: 3,
  },
  {
    scenarioName: "Base",
    description: "Targeted industrial corridor capture, GeM tenders, active outbound sales.",
    qualifiedLeadsPerMonth: 25,
    proposalSubmissionRate: 0.5,
    proposalsSubmittedPerMonth: 12.5,
    contractWinRate: 0.15,
    contractsWonPerMonth: 1.88, // ~22 won contracts/year
    averageWorkersPerContract: 15,
    monthlyNewHeadcount: 28.2,
    cumulative12MonthHeadcount: 338,
    averageMonthlyContractValueINR: 300000,
    cumulative12MonthARR_INR: 81000000, // ₹8.10 Crores ARR
    requiredPayrollFloatReserveINR: 13500000, // ₹1.35 Crores
    newSupervisorsRequiredPerYear: 19,
  },
  {
    scenarioName: "Stretch",
    description: "Multi-hub integrated facility management (IFM) contracts, pan-state industrial parks.",
    qualifiedLeadsPerMonth: 50,
    proposalSubmissionRate: 0.55,
    proposalsSubmittedPerMonth: 27.5,
    contractWinRate: 0.2,
    contractsWonPerMonth: 5.5, // ~66 won contracts/year
    averageWorkersPerContract: 20,
    monthlyNewHeadcount: 110,
    cumulative12MonthHeadcount: 1320,
    averageMonthlyContractValueINR: 420000,
    cumulative12MonthARR_INR: 316800000, // ₹31.68 Crores ARR
    requiredPayrollFloatReserveINR: 52800000, // ₹5.28 Crores
    newSupervisorsRequiredPerYear: 74,
  },
];
