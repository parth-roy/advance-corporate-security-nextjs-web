import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import WorkforceCapacityCalculator from "@/components/calculator/WorkforceCapacityCalculator";
import {
  SENSITIVITY_SCENARIOS,
  OPERATIONAL_HUBS,
  CAPACITY_RULES,
} from "@/lib/capacityModel";
import {
  ShieldCheck,
  Users,
  Coins,
  Clock,
  TrendingUp,
  AlertTriangle,
  Scale,
  FileCheck2,
  ArrowRight,
  ChevronRight,
  Layers,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workforce Supply Capacity & Payroll Float Model | ACS Procurement",
  description:
    "Enterprise workforce capacity governance: Supervisory span-of-control (1:15–20), mandatory 1/6th reliever rosters, 24–48h rapid sourcing SLAs, and 60-day payroll float liquidity protecting principal employers.",
  keywords: [
    "Workforce capacity model security",
    "Security guard supervisory ratio",
    "Reliever calculation 1/6th rule manpower",
    "Security agency payroll float reserve",
    "Enterprise security sourcing lead time",
    "PSARA operational capacity governance",
    "Manpower supply liquidity reserve",
    "West Bengal security guard capacity",
    "Principal employer CLRA Section 21 protection",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/workforce-capacity-and-payroll-model`,
  },
  openGraph: {
    title: "Workforce Supply Capacity & Payroll Float Model | Advance Corporate Security",
    description:
      "Enterprise framework replacing fixed inventory with workforce supply: supervisory span, reliever rosters, sourcing SLAs, and 60-day liquid payroll float reserves.",
    url: `${siteConfig.url}/procurement/workforce-capacity-and-payroll-model`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const capacityFaqs = [
  {
    question: "Why does ACS model capacity by workforce supply rather than fixed inventory?",
    answer:
      "Unlike hotels or airlines with fixed physical room or seat counts, industrial security and facility management capacity is fundamentally bounded by three human and financial variables: qualified supervisor span-of-control (1 supervisor per 8–10 sites or 15–20 guards), statutory reliever availability (1/6th extra personnel for weekly rest), and available working capital float to disburse salaries by the 7th or 10th of every month prior to enterprise invoice settlement.",
  },
  {
    question: "What is the mandatory 1/6th reliever roster rule in 24×7 security deployments?",
    answer:
      "Under Section 13 of the Minimum Wages Act 1948 and Chapter VI of the Factories Act 1948, every worker is entitled to one paid day of rest in every period of 7 days. For posts requiring continuous 24×7 protection (365 days a year), an agency must deploy 1 extra trained reliever for every 6 deployed guards (16.67% additional headcount). Agencies quoting for continuous posts without reliever allocations either illegally force guards into 30 consecutive 12-hour shifts or abandon posts on rest days.",
  },
  {
    question: "Why does ACS require a minimum 60-day payroll float reserve?",
    answer:
      "Enterprise corporate and PSU clients operate on credit cycles ranging from Net 30 to Net 60 days following monthly invoice submission and statutory reconciliation. However, the Payment of Wages Act 1936 mandates that workers must receive their full wages by the 7th or 10th of the calendar month, and EPFO/ESIC dues must be paid by the 15th. ACS maintains a committed liquid cash float in dedicated escrow reserves so that guard wages are disbursed on time regardless of client billing cycle delays.",
  },
  {
    question: "What are the standard sourcing and mobilization SLAs for new contracts?",
    answer:
      "For standard PSARA-certified unarmed industrial security guards, ACS maintains verified reserves in each operational hub allowing mobilization within 24–48 hours. For specialized personnel—including Armed Ex-Servicemen (ESM), Industrial Fire Safety Marshals, English-speaking Concierges, or Close Protection Officers (CPO)—sourcing, vetting, police verification, and post-specific drill training requires 5 to 7 business days.",
  },
  {
    question: "How does supervisor span-of-control protect the principal employer?",
    answer:
      "When security agencies over-commit and stretch 1 field supervisor across 25 or 30 client sites, night spot-checks collapse, guard sleeping on duty rises, attendance fraud occurs, and incident response times balloon. ACS strictly caps field supervisors to a maximum of 8 to 10 client sites (or 15 to 20 guards per shift), ensuring unannounced night checks at least twice weekly and immediate escalation management.",
  },
];

export default function WorkforceCapacityModelPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "Workforce Supply & Float Model", url: `${siteConfig.url}/procurement/workforce-capacity-and-payroll-model` },
  ];

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const faqSchema = buildFaqSchema(capacityFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      <main className="bg-slate-950 text-slate-100 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-800 bg-slate-900/50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/procurement" className="hover:text-white transition-colors">Procurement Center</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-blue-400 font-medium">Workforce Supply & Float Model</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="py-12 sm:py-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5" />
                Enterprise Operations Governance • Section 12
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Workforce Supply Capacity & Payroll Float Reserve Model
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Replacing hotel inventory heuristics with industrial workforce supply mathematics: 
                supervisory span-of-control, mandatory 1/6th reliever rosters, verified sourcing lead times, 
                and committed 60-day liquid payroll reserves.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 uppercase font-semibold">Supervisor Span</div>
                <div className="text-2xl font-bold text-white mt-1">1 : 15–20</div>
                <div className="text-xs text-slate-400 mt-0.5">Guards per field supervisor</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 uppercase font-semibold">Reliever Mandate</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">+16.67%</div>
                <div className="text-xs text-slate-400 mt-0.5">1/6th weekly-off roster reserve</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 uppercase font-semibold">Mobilisation SLA</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">24–48 Hours</div>
                <div className="text-xs text-slate-400 mt-0.5">Standard PSARA verified guards</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 uppercase font-semibold">Payroll Float Held</div>
                <div className="text-2xl font-bold text-blue-400 mt-1">60 Days</div>
                <div className="text-xs text-slate-400 mt-0.5">Guaranteed cash flow float reserve</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Core Formula Breakdown */}
        <section className="py-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The ACS Operational Capacity Equation
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                A security agency cannot simply &quot;accept any contract.&quot; Real operational capacity is governed 
                by the multiplication of 4 non-negotiable operational and financial constraints:
              </p>
            </div>

            {/* Formula Card */}
            <div className="bg-slate-900 border-2 border-blue-600/40 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl text-center">
              <div className="text-xs font-semibold uppercase text-blue-400 tracking-wider mb-2">
                Mathematical Capacity Constraint Formula
              </div>
              <div className="text-lg sm:text-2xl font-mono font-bold text-white py-4 px-2 sm:px-6 bg-slate-950/80 rounded-xl border border-slate-800 inline-block">
                Capacity = Active Supervisors × (Sites / Supervisor) × Verified Staff × Affordable Float
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 text-left">
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <Users className="w-4 h-4" />
                    <span>Active Supervisors</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Verified, full-time field supervisors licensed under PSARA Form-V with vehicle mobility.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Sites per Supervisor</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Strictly capped at 8 to 10 active client facilities to ensure biometric night audit capability.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Staff</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Roster of police-verified guards with 160h PSARA training certificates + 1/6th reliever reserves.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Coins className="w-4 h-4" />
                    <span>Affordable Float</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Liquid treasury reserve covering 60 days of total gross wages before client invoice collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Capacity Calculator */}
        <section className="py-12 sm:py-16 border-b border-slate-800 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Simulate Your Deployment Feasibility
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Configure your post requirements, shift timings, and invoicing credit terms to verify immediate 
                operational availability and financial liquidity backing.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <WorkforceCapacityCalculator />
            </div>
          </div>
        </section>

        {/* Section 3: Planning Sensitivity Model (Conservative / Base / Stretch) */}
        <section className="py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                Blueprint Page 6 Sensitivity Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                12-Month Enterprise Growth Sensitivity Analysis
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                How procurement intake volume compounds into deployed workforce headcount, supervisory 
                recruitment pipelines, and mandatory working capital reserves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SENSITIVITY_SCENARIOS.map((scenario) => (
                <div
                  key={scenario.scenarioName}
                  className={`rounded-2xl border p-6 flex flex-col justify-between ${
                    scenario.scenarioName === "Base"
                      ? "bg-slate-900/90 border-blue-500 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/40"
                      : "bg-slate-900/50 border-slate-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                        {scenario.scenarioName} Scenario
                      </span>
                      {scenario.scenarioName === "Base" && (
                        <span className="text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded-full">
                          Target Case
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mb-6">{scenario.description}</p>

                    <div className="space-y-3.5 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">Qualified Inbound Leads / Mo</span>
                        <span className="font-semibold text-white">{scenario.qualifiedLeadsPerMonth}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">Formal Proposals Issued</span>
                        <span className="font-semibold text-white">{scenario.proposalsSubmittedPerMonth} / mo</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">Contract Win Rate</span>
                        <span className="font-semibold text-white">{(scenario.contractWinRate * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">Won Enterprise Contracts</span>
                        <span className="font-semibold text-emerald-400">~{scenario.contractsWonPerMonth} / mo</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">Avg Headcount / Contract</span>
                        <span className="font-semibold text-white">{scenario.averageWorkersPerContract} Guards</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">12-Mo Cumulative Workforce</span>
                        <span className="font-bold text-blue-300 text-sm">{scenario.cumulative12MonthHeadcount} Guards</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">New Supervisors Recruited</span>
                        <span className="font-semibold text-indigo-300">+{scenario.newSupervisorsRequiredPerYear} Officers</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800">
                        <span className="text-slate-400">12-Mo Annualized Run-Rate (ARR)</span>
                        <span className="font-bold text-emerald-300 text-sm">{formatINR(scenario.cumulative12MonthARR_INR)}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-slate-400">Required 60-Day Cash Float</span>
                        <span className="font-bold text-amber-300 text-sm">{formatINR(scenario.requiredPayrollFloatReserveINR)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      <span>Inquire for Deployment</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Operational Hubs Capacity Table */}
        <section className="py-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Regional Hubs Infrastructure & Reserve Register
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Direct PSARA Form-V licensing presence and operational capacity metrics across eastern industrial corridors.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/60">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Regional Hub / Corridor</th>
                    <th className="py-3 px-3">State / Zone</th>
                    <th className="py-3 px-3">Licensing Status</th>
                    <th className="py-3 px-3 text-center">Active Supervisors</th>
                    <th className="py-3 px-3 text-center">Deployed Sites</th>
                    <th className="py-3 px-3 text-center">Active Guards</th>
                    <th className="py-3 px-3 text-center">Hub Utilization</th>
                    <th className="py-3 px-4 text-right">Payroll Reserve Held</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {OPERATIONAL_HUBS.map((hub) => (
                    <tr key={hub.hubId} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">{hub.name}</td>
                      <td className="py-3 px-3 text-slate-400">{hub.state} ({hub.zone})</td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          PSARA Form-V
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-200">{hub.activeSupervisors}</td>
                      <td className="py-3 px-3 text-center text-slate-400">{hub.currentDeployedSites}</td>
                      <td className="py-3 px-3 text-center font-bold text-blue-400">{hub.activeVerifiedGuards}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          hub.currentUtilizationPercentage > 75
                            ? "bg-amber-950/80 text-amber-300 border border-amber-800"
                            : "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                        }`}>
                          {hub.currentUtilizationPercentage}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-semibold text-emerald-400">
                        {formatINR(hub.monthlyPayrollReserveHeldINR)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Procurement FAQs */}
        <section className="py-12 border-b border-slate-800 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Procurement & Capacity Questions
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Critical governance questions every CFO and procurement head should ask before awarding a contract.
              </p>
            </div>

            <div className="space-y-4">
              {capacityFaqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <h3 className="text-base font-semibold text-white flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">Q{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-slate-300 mt-3 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <section className="py-12 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Site-Specific Capacity & Deployment Feasibility Study?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Our regional operations managers perform joint physical site reconnaissance, evaluate post risk profiles, 
              and present transparent statutory rate cards with guaranteed supervisor allocation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>Request Enterprise Procurement Intake</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/procurement/how-to-read-a-manpower-cost-sheet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 px-6 rounded-xl border border-slate-700 transition-all text-sm"
              >
                <span>Read Manpower Cost Sheet Guide</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
