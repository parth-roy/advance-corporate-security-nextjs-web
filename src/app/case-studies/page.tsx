import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  TrendingUp,
  Building2,
  Truck,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Award,
  Layers,
  Scale,
  Users,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enterprise Case Studies & Operational Audits | Advance Corporate Security (ACS)",
  description:
    "Whitepaper-grade enterprise case studies detailing risk mitigation, 100% statutory ECR compliance, and SLA execution across heavy industrial parks, Grade-A IT facilities, and healthcare networks in Eastern India.",
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
  openGraph: {
    title: "Enterprise Security & FM Case Studies | Advance Corporate Security",
    description:
      "Real, measurable operational outcomes from Eastern India's premier PSARA-licensed security and facility management enterprise.",
    url: `${siteConfig.url}/case-studies`,
  },
};

export default function CaseStudiesIndexPage() {
  const caseStudies = getAllCaseStudies();

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Enterprise Case Studies", url: `${siteConfig.url}/case-studies` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071429] text-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-800">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-acs relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-sky font-medium">Enterprise Case Studies</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky/10 border border-sky/30 text-sky-light text-xs font-semibold tracking-wide uppercase mb-6">
            <Award className="w-4 h-4 text-sky" />
            Verified Operational Audits & Performance Reports
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Evidence-Based Security & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky via-sky-light to-amber-200">
              Facility Management Outcomes
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-light">
            We reject unverifiable marketing claims. Explore whitepaper-grade operational case studies detailing how Advance Corporate Security eliminates material shrinkage, enforces 100% statutory ECR compliance, and maintains 99.8%+ uptime across critical commercial assets.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">42%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Average Shrinkage Drop</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-sky-light tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Statutory ECR Audit Score</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">99.8%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Mission-Critical MEP Uptime</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight">25+ Yrs</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Industrial Operating Pedigree</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Listing */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="container-acs max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-dark">
                Operational Reports
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured Enterprise Deployments
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Every case study includes verified deployment parameters, before/after metrics, statutory frameworks, and operational architectures.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => {
              const iconMap: Record<string, React.ReactNode> = {
                "cs-01": <Truck className="w-5 h-5 text-sky" />,
                "cs-02": <Building2 className="w-5 h-5 text-sky" />,
                "cs-03": <HeartPulse className="w-5 h-5 text-sky" />,
              };

              return (
                <article
                  key={study.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Visual & Core Stats Panel */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0b1f3f] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                          backgroundImage:
                            "linear-gradient(45deg, #0ea5e9 25%, transparent 25%, transparent 75%, #0ea5e9 75%, #0ea5e9)",
                          backgroundSize: "20px 20px",
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-sky-light text-xs font-mono tracking-wider uppercase backdrop-blur-xs">
                            <FileText className="w-3.5 h-3.5" />
                            {study.whitepaperCode}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            Case 0{idx + 1}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                          {iconMap[study.id]}
                          {study.sector}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {study.title}
                        </h3>

                        <p className="text-sm text-slate-300 mt-3 font-light leading-relaxed">
                          {study.subtitle}
                        </p>
                      </div>

                      {/* Primary Metrics Highlight */}
                      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        {study.keyMetrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-2xl sm:text-3xl font-extrabold text-sky-light tracking-tight">
                              {m.value}
                            </div>
                            <div className="text-xs font-medium text-slate-300 mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Overview & Content Panel */}
                    <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 mb-6">
                          <div>
                            <span className="font-semibold text-slate-700">Location:</span>{" "}
                            {study.location}
                          </div>
                          <span className="text-slate-300">•</span>
                          <div>
                            <span className="font-semibold text-slate-700">Scope:</span>{" "}
                            {study.deploymentScope}
                          </div>
                          <span className="text-slate-300">•</span>
                          <div>
                            <span className="font-semibold text-slate-700">Strength:</span>{" "}
                            {study.personnelStrength}
                          </div>
                        </div>

                        {/* Executive Synopsis */}
                        <div className="mb-6">
                          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                            Executive Overview
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {study.executiveSummary}
                          </p>
                        </div>

                        {/* Challenges Solved Pills */}
                        <div className="mb-6">
                          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                            Key Operational Challenges Addressed
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {study.challenges.slice(0, 2).map((ch, cIdx) => (
                              <div
                                key={cIdx}
                                className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-800"
                              >
                                <CheckCircle2 className="w-4 h-4 text-sky-dark shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-semibold block text-slate-900">
                                    {ch.title}
                                  </span>
                                  <span className="text-slate-500 text-[11px] line-clamp-2 mt-0.5">
                                    {ch.description}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Statutory Indicator */}
                        <div className="p-3 rounded-lg bg-sky-50/70 border border-sky-100 text-xs text-slate-700 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Scale className="w-4 h-4 text-sky-dark" />
                            <span className="font-semibold text-slate-900">
                              Statutory Wage Zone:
                            </span>
                            <span>{study.statutoryComplianceFramework.minimumWageZone}</span>
                          </div>
                          <span className="font-bold text-sky-dark font-mono">
                            {study.statutoryComplianceFramework.complianceRate}
                          </span>
                        </div>
                      </div>

                      {/* CTA Action */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-slate-400 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>Complete whitepaper & audit metrics available</span>
                        </div>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-sky-dark text-white font-medium text-sm transition-colors duration-200 group-hover:bg-slate-950"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Audit & Due Diligence Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-acs max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 inline-block">
                For Procurement Committees & Asset Managers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Require a Site-Specific Security Vulnerability & Statutory Audit?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-8 font-light leading-relaxed">
                Our senior security directors conduct physical perimeter surveys, weighbridge loophole diagnostics, and statutory wage cross-verifications across West Bengal, Odisha, and Jharkhand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/request-audit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky text-white font-medium text-sm hover:bg-sky-dark transition-colors shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Confidential Site Audit</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors backdrop-blur-xs"
                >
                  <span>Speak with Field Operations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
