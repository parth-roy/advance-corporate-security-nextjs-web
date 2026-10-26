import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd, buildWebPageSchema } from "@/lib/schema";
import ProcurementChecklist from "@/components/procurement/ProcurementChecklist";
import EvidenceTrustEngine from "@/components/common/EvidenceTrustEngine";
import ClientMarquee from "@/components/common/ClientMarquee";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Scale,
  Users,
  MapPin,
  TrendingUp,
  FileCheck2,
  PhoneCall,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Agency Comparison Matrix | ACS vs. National Mega-Corporations vs. Local Contractors",
  description:
    "An authoritative, factual B2B procurement comparison between Advance Corporate Security (ACS), National Mega-Corporations (SIS, Quess, ISS), and Local Contractors across 6 critical evaluation pillars: Escalation, EPF/ESIC Indemnity, Supervisory Ratio, Regional Speed, Pricing, and Attrition.",
  keywords: [
    "Security agency comparison matrix",
    "ACS vs SIS vs Quess vs ISS",
    "Security contractor evaluation checklist",
    "Private security procurement guide",
    "EPF Section 7A principal employer liability",
    "Security supervisor to guard ratio",
    "GFR 2017 GeM minimum service charge security",
    "Industrial security vendor selection criteria",
    "Eastern India security agency mobilization",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/agency-comparison`,
  },
  openGraph: {
    title: "Security Agency Comparison Matrix: ACS vs. National Megacorps vs. Local Contractors",
    description:
      "Enterprise evaluation framework for Procurement Heads, Plant Directors, and CFOs. Side-by-side benchmark across 6 critical operational and statutory pillars.",
    url: `${siteConfig.url}/procurement/agency-comparison`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const COMPARISON_PILLARS = [
  {
    number: "01",
    pillar: "Response Time & Senior Management Escalation",
    icon: Clock,
    summary: "Speed of executive decision-making and crisis response during labour unrest, gate strikes, or critical emergencies.",
    acs: {
      rating: "Superior (30–60 Min Escalation)",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "Direct mobile access to Founding Director and Regional Field Controllers within 30–60 minutes. On-ground field officers deployed immediately without ticketing queues or corporate red tape.",
      bulletPoints: [
        "Direct founder/director 24×7 hotline access",
        "Autonomous regional dispatch without corporate ticketing",
        "Local operations commander on-site within 45 minutes",
      ],
    },
    national: {
      rating: "Bureaucratic (48–72 Hr Ticketing)",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "Escalations routed through remote CRM helpdesks, regional account executives, and corporate approval hierarchies. 48–72 hours typical turnaround for operational changes.",
      bulletPoints: [
        "Centralized CRM ticketing with multi-day ticket queues",
        "Account managers frequently re-assigned between branches",
        "Rigid contracts requiring legal amendment for ad-hoc shifts",
      ],
    },
    local: {
      rating: "High Risk (Unreachable / Unreliable)",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Single proprietor or informal manager who often becomes unreachable during strikes, union clashes, or night incidents. No dedicated replacement mechanism.",
      bulletPoints: [
        "No structured escalation protocol or backup operations team",
        "High abandonment during local community or union tensions",
        "Proprietor evasion during wage or compensation disputes",
      ],
    },
  },
  {
    number: "02",
    pillar: "Statutory EPF/ESIC Indemnity & TRRN Verification",
    icon: Scale,
    summary: "Legal protection against Principal Employer co-liability under EPF Section 7A and ESI Act 1948.",
    acs: {
      rating: "100% Indemnity Dossier",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "100% compliance dossier with verified monthly employee-wise ECR and bank TRRN payment receipts delivered with every invoice. Complete zero-liability indemnity backed by audited returns.",
      bulletPoints: [
        "Pre-billing ECR/TRRN verification matching site guard roster",
        "Notarized Section 7A non-liability indemnity certificate",
        "Zero default record across 25+ years since inception (2000)",
      ],
    },
    national: {
      rating: "Bulked Pan-India Deposits",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "Deposits made under massive consolidated national PF codes. Extracting site-specific guard records during local PF enforcement or vigilance audits often takes weeks of escalation.",
      bulletPoints: [
        "Bulked national ECR challans obscure site-specific contributions",
        "High corporate legal retainers push dispute costs back to client",
        "Delayed reconciliation during guard transfers between clients",
      ],
    },
    local: {
      rating: "Severe Vicarious Liability",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Predatory undercutting funded through phantom PF filings or total evasion. Principal Employer faces direct freezing of bank accounts and criminal proceedings under EPF Section 7A & 14B.",
      bulletPoints: [
        "Non-filing or dummy challans leaving guards uninsured",
        "Section 7A attachment notices served directly to client CFO",
        "Direct liability for catastrophic workplace injury compensation",
      ],
    },
  },
  {
    number: "03",
    pillar: "Supervisor-to-Guard Ratio & Night Inspection",
    icon: Users,
    summary: "Operational density of field monitoring, post inspections, and motorized nocturnal surveillance.",
    acs: {
      rating: "1:15 Dedicated Ratio",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "Industry-leading 1:15 supervisory ratio. Dedicated motorized field officers conduct mandatory surprise night rounds (01:00 AM – 04:30 AM), GPS patrol checks, and daily electronic muster checks.",
      bulletPoints: [
        "1 dedicated supervisor per 15 security personnel",
        "Mandatory 3–4 surprise night inspections per week",
        "RFID patrol wand synchronization and digital gate log audits",
      ],
    },
    national: {
      rating: "1:40+ Diluted Ratio",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "Area managers supervise 40 to 60+ guards scattered across large municipal zones. Physical visits are infrequent and typically confined to monthly attendance sheet sign-offs.",
      bulletPoints: [
        "Area officers stretched thin across multiple unrelated accounts",
        "Night visits rare, scheduled, or outsourced to third parties",
        "Rely entirely on client facility teams for post discipline",
      ],
    },
    local: {
      rating: "Zero Dedicated Night Supervision",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "No dedicated supervision. Area 'munshi' visits once a month merely to distribute wages in cash. Zero post audits, allowing rampant sleeping on duty and unauthorized absenteeism.",
      bulletPoints: [
        "No motorized field officers or nocturnal patrol squads",
        "Unmonitored post desertions and ghost-guard billing scams",
        "Complete lack of guard performance accountability",
      ],
    },
  },
  {
    number: "04",
    pillar: "Regional Deployment Speed in Eastern Corridors",
    icon: MapPin,
    summary: "Turnaround time to mobilize vetted, trained manpower across West Bengal, Odisha, Jharkhand, Bihar, and Assam.",
    acs: {
      rating: "24–48 Hour Mobilization",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "24–48 hour rapid mobilization across key eastern industrial belts (Haldia, Kharagpur, Durgapur, Asansol, Dankuni, Jamshedpur, Kalinganagar, Guwahati) backed by permanent regional barracks.",
      bulletPoints: [
        "Pre-verified standby manpower reserves in regional training hubs",
        "Deep local intelligence, dialect fluency, and union dynamics",
        "Immediate replacement guarantee within 4 hours of notification",
      ],
    },
    national: {
      rating: "2–3 Week Corporate Lead Time",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "Rigid procurement cycles, centralized HR approvals, inter-state logistics delays, and branch onboarding bureaucracy require 14 to 21 days for full site takeover.",
      bulletPoints: [
        "Centralized ERP onboarding creates multi-week rollout lags",
        "Relies on local sub-contractors when regional footprint is weak",
        "Slow response to sudden surge requirements or factory strikes",
      ],
    },
    local: {
      rating: "Ad-Hoc / Unvetted Day Labor",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Mobilizes within 24 hours, but uses ad-hoc, informal day-labor hired off the street without police verification, uniforms, or training. High first-week desertion rate.",
      bulletPoints: [
        "Zero antecedent vetting or police verification certificates",
        "Guards often walk off post without notice within 7 days",
        "Zero institutional capacity to scale beyond 10–15 guards",
      ],
    },
  },
  {
    number: "05",
    pillar: "Pricing Transparency & Service Charge Compliance",
    icon: FileSpreadsheet,
    summary: "Cost structure integrity, GFR / DoE guideline compliance, and elimination of hidden billing traps.",
    acs: {
      rating: "Clean GFR 5–10% Margin",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "Clean, GFR 2017 & GeM-compliant 5–10% administrative margin adhering to Ministry of Finance / DoE OM No. F.6/1/2023-PPD (minimum 3.85% floor). 100% itemized line items with zero hidden surcharges.",
      bulletPoints: [
        "Strict adherence to Central & State Sphere Minimum Wages + VDA",
        "Itemized 1/6th Relieving Charges, 8.33% Bonus, and Uniforms",
        "No arbitrary 'tech enablement' or 'administrative management' fees",
      ],
    },
    national: {
      rating: "15–25% Corporate Markups",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "Substantial corporate overheads, national branding costs, central HQ allocations, and opaque technology licensing charges inflated into client billing rates.",
      bulletPoints: [
        "15%–25% gross margins with heavy corporate overhead load",
        "Hidden administrative surcharges and billing adjustment clauses",
        "Rigid billing structures with punitive early termination fees",
      ],
    },
    local: {
      rating: "0% Predatory Undercutting",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Predatory 0% to 1% quotes. The unviable margin is recouped by skimming wages from guards, underpaying overtime, withholding bonuses, and pocketing statutory deductions.",
      bulletPoints: [
        "Violates Ministry of Finance / DoE 3.85% minimum service fee rule",
        "Guards are underpaid, creating immediate theft incentive on-site",
        "Audit scrutiny triggers retrospective back-wage recovery orders",
      ],
    },
  },
  {
    number: "06",
    pillar: "Guard Retention & Annual Attrition Rate",
    icon: TrendingUp,
    summary: "Workforce stability, on-time wage disbursement discipline, and continuity of site security protocols.",
    acs: {
      rating: "Low 12% Annual Turnover",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "Exceptional 12% annual turnover driven by guaranteed on-time statutory wage disbursement on or before the 7th of every month via Direct Bank Transfer (DBT), full welfare, and medical coverage.",
      bulletPoints: [
        "Wages credited by the 7th, independent of client payment cycles",
        "Guards retain intimate familiarity with plant layouts & safety SOPs",
        "Annual festival bonus and provident fund passbooks issued regularly",
      ],
    },
    national: {
      rating: "35%–45% Corporate Churn",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      description: "High 35%–45% turnover caused by remote payroll errors, bureaucratic grievance handling, and frequent involuntary site reassignments across corporate accounts.",
      bulletPoints: [
        "Impersonal corporate handling causes frequent guard walkouts",
        "Frequent post rotation destroys site-specific institutional memory",
        "Delayed dispute resolution for overtime and incentive pay",
      ],
    },
    local: {
      rating: ">60% Rampant Churn",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Extreme >60% irregular churn caused by delayed, chopped, or unpaid salaries, lack of healthcare benefits, and arbitrary terminations. Security posts manned by perpetual novices.",
      bulletPoints: [
        "Unpaid wages lead to spontaneous walkouts and gate vulnerabilities",
        "Constant new faces at security gates fail to spot unauthorized entries",
        "High vulnerability to insider theft collusion due to financial distress",
      ],
    },
  },
];

const COMPARISON_FAQS = [
  {
    question: "Why does engaging a local low-cost contractor create Section 7A liability under the EPF Act?",
    answer:
      "Under Section 7A of the Employees' Provident Funds & Miscellaneous Provisions Act 1952, the Principal Employer (the client establishment) carries joint and vicarious legal liability for any EPF default committed by an engaged contractor. If an unorganized contractor submits unverified or non-deposited challans, the EPFO issues direct recovery notices, freezes the client company's bank accounts, and initiates criminal proceedings against the Directors of the Principal Employer.",
  },
  {
    question: "What is the Department of Expenditure (DoE) 3.85% minimum service charge mandate?",
    answer:
      "Per Ministry of Finance Office Memorandum No. F.6/1/2023-PPD (and GeM procurement rules), administrative service charges quoted by security manpower agencies must be at least 3.85% of the total minimum wage base (ACS recommends a viable 5%–10% margin). Bids submitted with 0% or sub-3.85% margins are legally classified as predatory and non-responsive because contractors cannot sustain operations without unlawfully deducting wages from guards or defaulting on statutory contributions.",
  },
  {
    question: "How does ACS maintain a 1:15 supervisory ratio compared to national agencies operating at 1:40+?",
    answer:
      "ACS operates dedicated regional field operating clusters across West Bengal, Odisha, Jharkhand, and neighboring corridors. Rather than loading area officers with hundreds of posts across distant districts, our operational clusters assign a motorized field officer to a maximum of 15 security posts within a tight geographic radius. This ensures mandatory surprise night inspections (between 1:00 AM and 4:30 AM), active muster roll verification, and direct incident response.",
  },
  {
    question: "Can enterprise clients verify monthly ECR and TRRN deposits prior to releasing invoice payments?",
    answer:
      "Yes. ACS operates a strict 'Compliance-First Billing SOP'. Every monthly commercial invoice is accompanied by an itemized statutory compliance dossier containing: (1) The specific site employee attendance muster; (2) The corresponding EPFO Electronic Challan Cum Return (ECR) highlighting each guard's Universal Account Number (UAN); (3) The Bank TRRN payment confirmation receipt; (4) The ESIC monthly contribution receipt; and (5) A signed statutory indemnity certificate.",
  },
  {
    question: "How fast can ACS mobilize security personnel for a new industrial plant or warehouse?",
    answer:
      "ACS maintains active standby guard barracks and pre-verified candidate pools in key eastern logistics and industrial corridors including Kolkata, Howrah, Hooghly, Haldia, Kharagpur, Durgapur, Asansol, Jamshedpur, and Siliguri. For standard industrial plants and warehouses, full deployment is achieved within 24 to 48 hours of contract execution, including uniform issuance, site orientation, and biometric enrollment.",
  },
];

export default function AgencyComparisonPage() {
  const pageUrl = `${siteConfig.url}/procurement/agency-comparison`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "Security Agency Comparison Matrix", url: pageUrl },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
  const faqSchema = buildFaqSchema(COMPARISON_FAQS);
  const webPageSchema = buildWebPageSchema({
    title: "Security Agency Comparison Matrix | ACS vs. National Mega-Corporations vs. Local Contractors",
    description: "Enterprise evaluation framework for Procurement Heads, Plant Directors, and CFOs. Side-by-side benchmark across 6 critical operational and statutory pillars.",
    url: pageUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />

      {/* ── HERO BANNER (Clean, Apple/Google Aesthetic) ── */}
      <section className="bg-gradient-to-b from-slate-900 via-navy to-navy-dark text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="container-acs max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-300 flex-wrap">
              {breadcrumbs.map((b, i) => (
                <li key={b.url} className="flex items-center gap-2">
                  {i > 0 && <span className="text-slate-500">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url} className="hover:text-white transition-colors">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-sky-300 font-medium">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-5">
            <ShieldCheck size={14} className="text-sky-400" />
            <span>Chief Procurement Officer (CPO) Evaluation Docket</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white tracking-tight leading-tight max-w-4xl">
            Security Agency Comparison Matrix: Regional Specialist vs. Conglomerate vs. Local Contractor
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mt-4 max-w-3xl">
            An objective, data-backed operational benchmark evaluating <strong className="text-white">Advance Corporate Security (ACS)</strong> against <strong className="text-white">National Mega-Corporations</strong> and <strong className="text-white">Local Unorganized Contractors</strong> across 6 critical evaluation pillars.
          </p>

          {/* Quick Pillar Grid Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-8 pt-6 border-t border-slate-800/80 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">01. Escalation</span>
              Direct Founder Access
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">02. EPF/ESIC</span>
              100% TRRN Indemnity
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">03. Supervision</span>
              1:15 Dedicated Ratio
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">04. Mobilization</span>
              24–48h Eastern Speed
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">05. Pricing</span>
              Clean GFR 5–10% Margin
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-sky-400 font-bold block mb-0.5">06. Attrition</span>
              12% Low Annual Churn
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE SUMMARY / THE PROCUREMENT DILEMMA ── */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-acs max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm mb-3">
                ACS
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">Regional Tier-1 Enterprise Partner</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Combines Fortune-500 statutory governance with localized field responsiveness. Zero corporate bureaucracy, owner-level accountability, and 1:15 supervisory density across Eastern India.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                MEGA
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">National Mega-Corporations</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Massive brands with global footprints, but encumbered by 15–25% corporate markups, 1:40+ diluted supervisory spans, remote CRM ticketing, and slow 2–3 week regional mobilization.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-sm mb-3">
                LOCAL
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">Local Unorganized Contractors</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Appealing initial quotes funded through predatory undercutting, zero night supervision, and phantom PF/ESIC deposits that expose the Principal Employer to devastating Section 7A liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MASTER 6-PILLAR COMPARISON MATRIX ── */}
      <section className="py-16 bg-white">
        <div className="container-acs max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
              Direct Side-by-Side Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-navy mt-3 tracking-tight">
              The 6 Critical Vendor Evaluation Pillars
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              How the three vendor tiers perform when subjected to rigorous scrutiny by corporate vigilance, plant operations, and statutory audit committees.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-hidden border border-slate-200 rounded-3xl shadow-xl shadow-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th className="py-5 px-6 w-1/4 text-xs font-bold uppercase tracking-wider text-slate-300">
                    Evaluation Pillar
                  </th>
                  <th className="py-5 px-6 w-1/4 bg-sky-950/70 border-b-2 border-sky-500">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-roboto font-black text-white">Advance Corporate Security</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Recommended
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-1/4 text-xs font-bold uppercase tracking-wider text-slate-300">
                    National Mega-Corporations
                    <span className="block text-[10px] font-normal text-slate-400 mt-0.5">(SIS, Quess, ISS)</span>
                  </th>
                  <th className="py-5 px-6 w-1/4 text-xs font-bold uppercase tracking-wider text-slate-300">
                    Local Contractors
                    <span className="block text-[10px] font-normal text-slate-400 mt-0.5">(Unorganized Vendors)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <tr key={p.number} className="divide-x divide-slate-100 hover:bg-slate-50/50 transition-colors">
                      {/* Pillar Name & Summary */}
                      <td className="p-6 bg-slate-50/40 align-top">
                        <div className="flex items-center gap-2.5 text-navy font-bold mb-1">
                          <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-black shrink-0">
                            {p.number}
                          </span>
                          <span className="font-roboto text-sm font-extrabold text-navy leading-snug">
                            {p.pillar}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
                          {p.summary}
                        </p>
                      </td>

                      {/* ACS Cell */}
                      <td className="p-6 bg-sky-50/20 align-top border-l-2 border-r-2 border-sky-100">
                        <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold border mb-2.5 bg-emerald-50 text-emerald-800 border-emerald-200">
                          {p.acs.rating}
                        </div>
                        <p className="text-slate-700 text-xs leading-relaxed mb-3 font-medium">
                          {p.acs.description}
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-slate-600">
                          {p.acs.bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* National Megacorps Cell */}
                      <td className="p-6 align-top">
                        <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold border mb-2.5 bg-amber-50 text-amber-800 border-amber-200">
                          {p.national.rating}
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-3">
                          {p.national.description}
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-slate-500">
                          {p.national.bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <AlertTriangle size={13} className="text-amber-600 shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* Local Contractors Cell */}
                      <td className="p-6 align-top bg-rose-50/10">
                        <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold border mb-2.5 bg-rose-50 text-rose-800 border-rose-200">
                          {p.local.rating}
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-3">
                          {p.local.description}
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-slate-500">
                          {p.local.bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <XCircle size={13} className="text-rose-600 shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View (Crisp, Responsive) */}
          <div className="lg:hidden space-y-6">
            {COMPARISON_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.number} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-sky text-white flex items-center justify-center text-xs font-black">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-roboto font-bold text-navy text-base leading-tight">
                        {p.pillar}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">{p.summary}</p>
                    </div>
                  </div>

                  {/* ACS Section */}
                  <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-navy">Advance Corporate Security (ACS)</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {p.acs.rating}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {p.acs.description}
                    </p>
                    <ul className="space-y-1 text-[11px] text-slate-600 pt-1">
                      {p.acs.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* National Megacorps */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-700">National Mega-Corporations</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        {p.national.rating}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.national.description}
                    </p>
                  </div>

                  {/* Local Contractors */}
                  <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-700">Local Contractors</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                        {p.local.rating}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.local.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DEEP-DIVE PROCUREMENT INSIGHTS ── */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container-acs max-w-5xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
              Statutory Insights for C-Suite &amp; Procurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mt-1 tracking-tight">
              Why Enterprise Procurement Committees Choose the Regional Specialist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: The Section 7A Legal Trap */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <Scale size={18} />
                <span>EPF Section 7A &amp; The Phantom Challan Trap</span>
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">
                How Predatory Local Bids Create Joint Criminal Liability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a security contractor quotes below viable statutory minimums (e.g. 0% service charge), they invariably recoup margins by defaulting on monthly EPF or ESIC deposits. Under Section 7A of the EPF &amp; MP Act 1952, the Principal Employer is legally bound to satisfy all unpaid contributions, interest under Section 7Q, and penal damages up to 100% under Section 14B.
              </p>
              <div className="p-3.5 bg-rose-50 rounded-xl text-rose-900 text-xs border border-rose-200/80">
                <strong>ACS Safeguard:</strong> ACS guarantees pre-billing delivery of employee-wise ECR and bank TRRN receipts, accompanied by a notarized indemnity certificate protecting the client board of directors.
              </div>
            </div>

            {/* Box 2: The Megacorp Supervisory Span Problem */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Users size={18} />
                <span>The 1:40+ Supervisory Dilution Dilemma</span>
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">
                Why Conglomerates Fall Short in Industrial Perimeters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                National mega-corporations frequently suffer from supervisory spans exceeding 1:40 to 1:60 guards per area officer. In 24/7 manufacturing plants, warehouses, and steel processing yards, absence of midnight vigilance leads to sleep on duty, unchecked weighbridge fraud, and undetected perimeter intrusions.
              </p>
              <div className="p-3.5 bg-sky-50 rounded-xl text-sky-900 text-xs border border-sky-200/80">
                <strong>ACS Safeguard:</strong> ACS caps field supervisory spans at 1:15, with mandatory motorized surprise night inspections between 01:00 AM and 04:30 AM recorded via cloud-synced digital patrol waypoints.
              </div>
            </div>

            {/* Box 3: GFR Minimum Service Charge Mandate */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                <FileCheck2 size={18} />
                <span>DoE OM No. F.6/1/2023-PPD Compliance</span>
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">
                The 3.85% Administrative Floor in Public &amp; Private Bids
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Ministry of Finance Department of Expenditure (DoE) explicitly rules that bids with abnormally low or zero service fees violate public procurement principles because they guarantee service failure and wage exploitation. ACS provides fully audited 5% to 10% cost sheets reflecting 100% statutory dignity.
              </p>
              <div className="p-3.5 bg-slate-100 rounded-xl text-slate-700 text-xs border border-slate-200">
                <strong>Procurement Benefit:</strong> Clean GFR 2017 alignment ensures internal audit immunity and eliminates tender cancellation risks.
              </div>
            </div>

            {/* Box 4: The 24-48 Hour Eastern Mobilization Advantage */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <MapPin size={18} />
                <span>Regional Footprint vs. Pan-India Bureaucracy</span>
              </div>
              <h3 className="font-roboto font-bold text-navy text-base">
                Instant Escalation Across WB, Odisha, Jharkhand &amp; Bihar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                National providers require central HR sign-offs and multi-week onboarding pipelines. ACS operates permanent regional barracks and training centers in Kolkata, Durgapur, Haldia, Kharagpur, and Jamshedpur, allowing enterprise mobilization within 24–48 hours of contract award.
              </p>
              <div className="p-3.5 bg-emerald-50 rounded-xl text-emerald-900 text-xs border border-emerald-200/80">
                <strong>Rapid Turnaround:</strong> Site security surveys completed within 24 hours, followed by prompt deployment of uniformed, vetted personnel.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTERACTIVE PROCUREMENT DUE DILIGENCE CHECKLIST ── */}
      <section className="py-16 bg-white" id="due-diligence-checklist">
        <div className="container-acs max-w-5xl">
          <ProcurementChecklist />
        </div>
      </section>

      {/* ── SECTION 5: TRUST & EVIDENCE DATABASE (15 PARAMETERS) ── */}
      <EvidenceTrustEngine showTitle={true} />

      {/* ── SECTION 6: CLIENT MARQUEE ── */}
      <ClientMarquee bgClass="bg-slate-50" showHeading={true} />

      {/* ── SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
              Procurement Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mt-3 tracking-tight">
              Frequently Asked Questions on Agency Selection
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Clear answers to the most common questions raised by corporate procurement boards and vigilance officers.
            </p>
          </div>

          <div className="space-y-4">
            {COMPARISON_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs hover:border-sky-300 transition-colors"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-slate-50/70 transition-colors list-none text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL B2B PROCUREMENT CTA ── */}
      <section className="py-16 bg-navy text-white text-center border-t border-slate-800">
        <div className="container-acs max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            💼 Enterprise Procurement Advisory
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-white mb-4">
            Benchmark Your Existing Security Vendor Against ACS Standards
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm sm:leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule a confidential, no-obligation site security audit or request an itemized statutory cost sheet comparison from our Senior Operations Directorate.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-sky hover:bg-sky-dark text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              Request Site Security Survey
            </Link>
            <Link
              href="/procurement/how-to-read-a-manpower-cost-sheet"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              How to Read a Cost Sheet
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-lg"
            >
              <PhoneCall size={16} />
              <span>Call Operations: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap justify-center gap-6">
            <span>✓ PSARA Form-V Licensed</span>
            <span>✓ ISO 9001:2015 Certified</span>
            <span>✓ GeM Registered Seller</span>
            <span>✓ Zero Section 7A PF Default</span>
          </div>
        </div>
      </section>
    </>
  );
}
