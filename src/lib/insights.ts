// ============================================================
// ACS — Enterprise Editorial & Regulatory Insights Data Hub
// Section 30 Implementation — Authoritative Content Engine
// ============================================================

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Regulatory Compliance" | "Industrial Security" | "Public Procurement" | "Facility Operations";
  author: {
    name: string;
    role: string;
  };
  keywords: string[];
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaways?: string[];
      callout?: {
        title: string;
        text: string;
      };
    }[];
  };
}

export const ACS_INSIGHTS: InsightArticle[] = [
  {
    slug: "epf-section-7a-compliance-guide",
    title: "EPF Section 7A & Principal Employer Liability: How to Audit Your Security Agency",
    excerpt: "Enterprise guide for CFOs and HR heads to eliminate vicarious financial liability under the Employees' Provident Funds Act 1952 through monthly ECR and TRRN verification.",
    date: "October 2026",
    readTime: "8 min read",
    category: "Regulatory Compliance",
    author: {
      name: "Adv. S. K. Mukherjee",
      role: "Senior Labour Law Advisor & ACS Statutory Consultant",
    },
    keywords: ["EPF Section 7A", "Principal Employer Liability", "Security Agency EPF Compliance", "ECR TRRN verification", "Contract Labour PF Audit"],
    content: {
      lead: "Under Section 7A of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, the Principal Employer bears joint and several liability for any provident fund contribution defaults committed by third-party security and facility management vendors.",
      sections: [
        {
          heading: "The Doctrine of Principal Employer Co-Liability",
          body: [
            "Many corporate buyers assume that contracting an independent security agency shields them from direct labor liabilities. Under Indian jurisprudence, this assumption is false.",
            "If a contractor fails to deposit 12% employee share or 13% employer contribution, the EPFO assessing officer has statutory power to freeze the Principal Employer's commercial bank accounts and attach revenue under Section 8B through 8G.",
          ],
          callout: {
            title: "Statutory Rule",
            text: "Liability follows the physical establishment where services were rendered, regardless of contractor indemnification clauses.",
          },
        },
        {
          heading: "The 3-Step Monthly Audit Protocol",
          body: [
            "Step 1: Demand the specific Electronic Challan cum Return (ECR) showing individual UANs corresponding exactly to guards stationed at your premises.",
            "Step 2: Reconcile the Transaction Reference Return Number (TRRN) against the authorized bank debit statement to prevent dummy challans.",
            "Step 3: Mandate that monthly vendor billing invoices are cleared ONLY upon submission of previous month's verified bank payment receipt.",
          ],
          keyTakeaways: [
            "Never accept aggregate company-wide EPF challans without site-specific employee schedules.",
            "Cross-verify the TRRN on the unified EPFO employer portal.",
            "Ensure vendor maintains a valid Form V under CLRA Act 1970.",
          ],
        },
      ],
    },
  },
  {
    slug: "west-bengal-minimum-wages-zone-a-zone-b",
    title: "West Bengal Minimum Wage Revisions 2026: Zone A vs Zone B Budgetary Analysis",
    excerpt: "Strategic breakdown of West Bengal labour commissioner wage notifications. Impact of Variable Dearness Allowance (VDA) on factory and commercial facility security budgets.",
    date: "October 2026",
    readTime: "6 min read",
    category: "Regulatory Compliance",
    author: {
      name: "Jai Gopal Roy",
      role: "Managing Director, Advance Corporate Security",
    },
    keywords: ["West Bengal Minimum Wages 2026", "Zone A vs Zone B security wages", "WB Labour Gazette VDA", "Security guard minimum salary Kolkata"],
    content: {
      lead: "West Bengal categorizes private security and contract labor wages into two distinct zones: Zone A (Corporations, Municipalities, and SEZs) and Zone B (Rural and semi-urban panchayat regions).",
      sections: [
        {
          heading: "Zonal Classification Differences",
          body: [
            "Zone A covers Kolkata Municipal Corporation, Bidhannagar, Howrah, Asansol, Durgapur, Siliguri, and notified industrial growth centers including Haldia and Kharagpur.",
            "Zone B encompasses all non-municipal rural areas, agricultural belts, and gram panchayat territories across Bengal.",
          ],
        },
        {
          heading: "Mandatory Wage Multipliers",
          body: [
            "Statutory costing must factor in: Basic Wage + Variable Dearness Allowance (VDA) revised semi-annually (January and July), 13.00% EPF (including EDLI and admin), 3.25% ESIC, 8.33% Bonus under Payment of Bonus Act, 4.81% Gratuity accrual, and 1/6th National & Festival Paid Holidays.",
            "Bids that collapse or omit these heads violate Section 12 of the Minimum Wages Act 1948 and expose buyers to prosecution.",
          ],
          keyTakeaways: [
            "Ensure security vendor updates service rates immediately upon semi-annual VDA gazette notification.",
            "Budget approximately 8–10% higher for Zone A deployments compared to Zone B facilities.",
          ],
        },
      ],
    },
  },
  {
    slug: "gem-4-public-procurement-security-guidelines",
    title: "GeM 4.0 Security Guard Procurement: Navigating the 3.85% Service Charge Floor",
    excerpt: "Comprehensive guide for PSU and Government procurement committees to navigate Department of Expenditure OM rules, eliminating zero-percent predatory bidding on GeM.",
    date: "October 2026",
    readTime: "7 min read",
    category: "Public Procurement",
    author: {
      name: "Tender Operations Cell",
      role: "B2G Strategic Bidding Unit, ACS",
    },
    keywords: ["GeM security guard procurement", "GeM 3.85 percent service charge", "DoE OM F.6/1/2023-PPD", "Public sector security tender evaluation"],
    content: {
      lead: "Following widespread issues of contractor abandonment and statutory non-compliance, the Ministry of Finance issued Office Memorandum No. F.6/1/2023-PPD mandating a 3.85% minimum floor on administrative service charges in manpower bids.",
      sections: [
        {
          heading: "Why Zero-Percent Bidding Failed",
          body: [
            "Historically, unorganized contractors bid 0.01% or zero service charges to capture L1 status on the Government e-Marketplace (GeM), intending to recover profits by illegally deducting uniforms, PF shares, and statutory allowances from guards' earnings.",
            "This caused high attrition, post abandonment, strikes, and widespread audit objections from CAG and vigilance departments.",
          ],
        },
        {
          heading: "Current Evaluation Matrix",
          body: [
            "Under the revised GeM 4.0 framework, any bid quoting below 3.85% is auto-rejected by the portal algorithm as non-responsive.",
            "Procurement committees are encouraged to deploy quality-cum-cost-based selection (QCBS) or enforce rigorous pre-qualification parameters: minimum 5 years of PSARA operational history, CA-certified turnover with valid UDIN, and proven experience managing 500+ personnel.",
          ],
          keyTakeaways: [
            "Bids below 3.85% service charge are void ab initio.",
            "PSUs must verify valid state-specific PSARA Form V licensing during technical envelope evaluation.",
          ],
        },
      ],
    },
  },
  {
    slug: "warehouse-industrial-security-sop-weighbridge-protocol",
    title: "Logistics Park Security SOP: Eliminating Dock Shrinkage in Eastern Corridors",
    excerpt: "Standard Operating Procedures for Grade-A warehousing complexes, container freight stations, and multimodal logistics hubs along Dankuni, Uluberia, and NH-16.",
    date: "October 2026",
    readTime: "9 min read",
    category: "Industrial Security",
    author: {
      name: "Capt. A. Banerjee (Retd.)",
      role: "Chief of Field Operations, ACS",
    },
    keywords: ["Warehouse security SOP", "Dock shrinkage prevention", "Weighbridge security protocol", "Dankuni logistics security", "Industrial park gate pass system"],
    content: {
      lead: "Material shrinkage in large-scale logistics parks typically occurs at four vulnerable transit junctions: weighbridges, dock levelers, driver rest areas, and perimeter blind spots.",
      sections: [
        {
          heading: "The Four Shrinkage Vulnerabilities",
          body: [
            "1. Weighbridge Manipulation: Axle-weight fraud and double-axle positioning on platform edges.",
            "2. False Gate Passes: Re-utilization of stamped paper delivery challans for unbilled merchandise.",
            "3. Loading Docks: Unauthorized break-bulk pilferage during pallet staging and trailer container sealing.",
            "4. Yard & Perimeter: Blind spots along boundary walls exploited for nocturnal stock toss-overs.",
          ],
        },
        {
          heading: "Actionable 5-Tier Protection SOP",
          body: [
            "Tier 1: Biometric driver verification and digitized gate pass generation with mandatory container seal number logging.",
            "Tier 2: Automated weighbridge gross/tare recording with high-resolution overhead cameras capturing truck alignment.",
            "Tier 3: Tamper-evident numbered security seal verification before departure, signed jointly by guard supervisor and dispatch manager.",
            "Tier 4: RFID electronic patrol wands requiring security guards to physically scan checkpoints along the 50-acre perimeter every 45 minutes.",
            "Tier 5: 24/7 centralized control room monitoring with two-way radio dispatch for instantaneous alarm response.",
          ],
          keyTakeaways: [
            "Eliminate manual paper gate passes in favor of digitized ERP integration.",
            "Ensure weighbridge operators and gate security personnel are rotated every 90 days to prevent familiarity risks.",
            "Conduct unannounced supervisor audits during night-shift turnaround.",
          ],
        },
      ],
    },
  },
  {
    slug: "jan-vishwas-act-impact-on-psara",
    title: "Jan Vishwas Act 2026 vs. Principal Employer Strict Liability: What Factory & Facility Heads Must Know",
    excerpt:
      "How the Jan Vishwas (Amendment of Provisions) Act 2026 replaces minor administrative imprisonment with civil penalties under PSARA — and why Principal Employers still face strict liability under CLRA Section 21(4) and EPF Section 7A across security, IFM, and blue-collar manpower contracts.",
    date: "2026-11-10",
    readTime: "7 min read",
    category: "Regulatory Compliance",
    author: {
      name: "ACS Statutory & Labor Law Desk",
      role: "CLRA, PSARA & EPF/ESIC Governance Practice",
    },
    keywords: [
      "Jan Vishwas Act 2026 PSARA",
      "Principal Employer strict liability CLRA Section 21(4)",
      "EPF Section 7A vicarious liability India",
      "blue collar contract labour compliance West Bengal",
      "PSARA licensed security & factory manpower vendor",
    ],
    content: {
      lead: "The Jan Vishwas (Amendment of Provisions) Act 2026 decriminalizes minor technical and procedural contraventions across labour and licensing statutes — converting procedural paperwork defaults into graded civil monetary penalties. However, many manufacturing directors, logistics heads, and procurement teams misread this reform as a relaxation of vendor vetting. In reality, Principal Employer strict financial and prosecutorial exposure under CLRA Section 21(4), EPF Section 7A, and ESIC 45A remains completely intact across private security, integrated facility management (IFM), and factory/warehouse blue-collar manpower contracts.",
      sections: [
        {
          heading: "1. What the Jan Vishwas Act 2026 Actually Changes for PSARA & Contract Licensing",
          body: [
            "Historically, minor administrative lapses — such as delayed register formatting, notice-board display omissions, or clerical license renewal endorsement lags — carried legacy criminal imprisonment clauses on statute books, creating disproportionate compliance anxiety for regional agencies and corporate HR teams.",
            "Under the 2026 Jan Vishwas framework, purely procedural and record-keeping defaults migrate toward adjudicating-officer civil penalties and compounded fines, aligning ease-of-doing-business standards with digital Shram Suvidha and state labour portals. Operating without a valid state-specific PSARA license for guarding, or deploying unverified manpower, however, remains a disqualifying tender and statutory breach.",
          ],
          callout: {
            title: "Crucial Distinction for Procurement Teams",
            text: "Decriminalizing minor clerical infractions for a vendor does NOT insulate the Principal Employer from paying 100% unpaid wages, EPF arrears, 12% Section 7Q interest, and up to 100% Section 14B penal damages if the manpower or security vendor defaults.",
          },
        },
        {
          heading: "2. Why Principal Employer Vicarious Liability Is Unchanged (CLRA Sec 21(4) & EPF Sec 7A)",
          body: [
            "Whether your plant engages armed/unarmed PSARA guards, mechanized housekeeping crews, warehouse Hamali/loading gangs, ITI electricians, HVAC technicians, or assembly-line helpers, the Principal Employer holds statutory backstop responsibility at the establishment level.",
            "Under Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970 (and corresponding Industrial Relations / Social Security Code provisions), if a contractor short-pays notified minimum wages — such as West Bengal Zone A/B basic + VDA — or delays salary past the 7th/10th wage cycle, the Principal Employer must disburse the shortfall and recover it from vendor bills.",
            "Simultaneously, EPFO Regional Commissioners routinely attach Principal Employer bank accounts under EPF Section 7A & 8F when fly-by-night blue-collar or guarding contractors submit lump-sum challans rather than employee-wise Electronic Challan-cum-Return (ECR) proofs matched with bank UTRs.",
          ],
          keyTakeaways: [
            "Verify individual UAN-seeded ECR lines — not only summary TRRN payment screenshots — for every guard, cleaner, loader, and factory helper.",
            "Demand active state-by-state PSARA certificates (West Bengal, Delhi NCR, Maharashtra, Odisha, Jharkhand) before gate mobilization.",
            "Benchmark vendor quotes against current WB Zone A/B & Central Labour Commissioner minimum wage ceilings; predatory sub-statutory pricing is the #1 audit red flag.",
          ],
        },
        {
          heading: "3. Extending the Compliance Shield Beyond Security to All Blue-Collar & MEP Trades",
          body: [
            "While PSARA governs private security deployment, Indian industrial estates face acute compliance leakage in non-PSARA blue-collar trades: warehouse pickers, loading/unloading Hamali crews, packaging line workers, HT/LT electrical operators, STP/WTP plumbers, cold-storage HVAC technicians, and pantry/peon support.",
            "Many facilities split vendors — hiring one national guard agency and unorganized local labour brokers for factory floor and housekeeping staff. That fragmented structure multiplies CLRA Form XIII/V audit risk, ESIC medical liability during shift accidents, and factory gate disruption.",
            "Consolidating Corporate Security, Soft IFM, and Blue-Collar Manpower under a single GeM-empanelled, ISO 9001:2015 certified partner with unified biometric attendance, EPF/ESIC 100% pass-through billing, and an Integrated Command and Response Hub eliminates Principal Employer exposure across every shift and trade.",
          ],
        },
      ],
    },
  },
];

export const INSIGHTS = ACS_INSIGHTS;

export function getAllInsights(): InsightArticle[] {
  return ACS_INSIGHTS;
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return ACS_INSIGHTS.find((i) => i.slug === slug);
}
