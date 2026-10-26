import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  FileText,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Scale,
  Users,
  Download,
  Printer,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Award,
  Phone,
  Building,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Advance Corporate Security",
    };
  }

  const title = `${study.title} | Enterprise Case Study - ACS`;
  const description = `${study.subtitle} Read the verified operational report, statutory compliance score, and before/after metrics from Advance Corporate Security.`;
  const canonical = `${siteConfig.url}/case-studies/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Enterprise Case Studies", url: `${siteConfig.url}/case-studies` },
    { name: study.title, url: `${siteConfig.url}/case-studies/${slug}` },
  ];

  const jsonLdReport = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: study.title,
    headline: study.subtitle,
    description: study.executiveSummary,
    url: `${siteConfig.url}/case-studies/${slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/acs-official-logo.avif`,
    },
    about: {
      "@type": "Thing",
      name: study.sector,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLdReport),
        }}
      />

      <article className="min-h-screen bg-[#fafbfc] text-slate-800 pb-24">
        {/* Whitepaper Top Bar */}
        <div className="bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-2.5">
          <div className="container-acs max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sky tracking-wider font-semibold">
                {study.whitepaperCode}
              </span>
              <span className="text-slate-600">|</span>
              <span className="hidden sm:inline text-slate-400">
                ACS Loss Prevention & Enterprise FM Directorate
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/case-studies"
                className="hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Whitepaper Document Header */}
        <header className="bg-white border-b border-slate-200/80 pt-12 pb-14">
          <div className="container-acs max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
                <li>
                  <Link href="/" className="hover:text-sky transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-sky transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>/</li>
                <li className="text-sky font-medium truncate max-w-xs sm:max-w-md">
                  {study.slug}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 font-semibold text-xs tracking-wide uppercase">
                {study.sector}
              </span>
              <span className="px-3 py-1 rounded bg-sky-50 text-sky-dark font-medium text-xs">
                {study.location}
              </span>
              <span className="px-3 py-1 rounded bg-emerald-50 text-emerald-800 font-medium text-xs">
                Verified Enterprise Audit
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.18] mb-6">
              {study.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-4xl">
              {study.subtitle}
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Client Profile
                </span>
                <span className="text-slate-900 font-medium">{study.client}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Deployment Scope
                </span>
                <span className="text-slate-900 font-medium">{study.deploymentScope}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Guarding Strength
                </span>
                <span className="text-slate-900 font-medium">{study.personnelStrength}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Operational Term
                </span>
                <span className="text-slate-900 font-medium">{study.timeline}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="container-acs max-w-5xl mx-auto pt-12">
          {/* Executive Quantitative Metrics Dashboard */}
          <section className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky" />
              Verified Performance Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {study.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative overflow-hidden"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-mono mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-dark mb-2">
                    {metric.label}
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Executive Summary */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-4 tracking-tight">
              1. Executive Summary & Strategic Context
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>{study.executiveSummary}</p>
            </div>
          </section>

          {/* Section: Operational Challenges & Risk Matrix */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                2. Operational Challenges & Threat Assessment
              </h2>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Initial Facility Diagnostics
              </span>
            </div>

            <div className="space-y-4">
              {study.challenges.map((ch, idx) => {
                const severityColors = {
                  Critical: "bg-red-50 text-red-700 border-red-200",
                  High: "bg-amber-50 text-amber-700 border-amber-200",
                  Moderate: "bg-blue-50 text-blue-700 border-blue-200",
                };

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 flex flex-col sm:flex-row items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                          {ch.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                        {ch.description}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border shrink-0 ${severityColors[ch.riskSeverity]}`}
                    >
                      {ch.riskSeverity} Risk
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Solution Architecture */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 tracking-tight">
              3. ACS Solution Architecture & Deployment Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              A synchronized five-layer physical and electronic security model designed for zero single points of failure.
            </p>

            <div className="space-y-6">
              {study.solutionArchitecture.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-dark font-bold">
                      Layer 0{idx + 1} • {sol.layer}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {sol.title}
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-slate-800">
                        Technical Specification:
                      </span>{" "}
                      <span className="text-slate-600">{sol.specification}</span>
                    </div>
                    <div className="p-3 bg-sky-50/50 rounded-lg border border-sky-100 text-slate-800">
                      <span className="font-semibold text-sky-dark">
                        Operational Outcome:
                      </span>{" "}
                      <span>{sol.operationalOutcome}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Statutory Compliance & Wage Verification */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-sky" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                4. Statutory Governance & West Bengal Wage Alignment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Industrial unrest and principal employer liability in Eastern India stem overwhelmingly from informal vendor payroll slippages. Advance Corporate Security guarantees total transparency under West Bengal statutory frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Wage Zone Classification
                </span>
                <p className="text-sm font-semibold text-slate-900 mb-4">
                  {study.statutoryComplianceFramework.minimumWageZone}
                </p>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Governing Acts & Statutes
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {study.statutoryComplianceFramework.actsGoverned.map(
                    (act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Compliance Audit Score
                    </span>
                    <span className="text-xl font-bold font-mono text-emerald-700">
                      {study.statutoryComplianceFramework.complianceRate}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {study.statutoryComplianceFramework.auditVerification}
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-200/60 text-[11px] text-emerald-800 font-medium">
                  Verified with Monthly Bank Disbursement Mandate & EPFO ECR TRRN Confirmation Receipts.
                </div>
              </div>
            </div>
          </section>

          {/* Section: Standard Operating Procedures (SOPs) */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 tracking-tight">
              5. Standard Operating Procedures (SOPs) & Audit Cadence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Codified operational protocols executed consistently across day and night operational shifts.
            </p>

            <div className="space-y-4">
              {study.operationalSOPs.map((sop, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <div className="flex-1">
                    <span className="font-semibold text-slate-900 block mb-1">
                      {sop.category}
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sop.protocol}
                    </p>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Audit Cadence
                    </span>
                    <span className="font-mono text-xs font-semibold text-sky-dark">
                      {sop.auditCycle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Measurable Outcomes & Quantitative Comparison Table */}
          <section className="mb-14 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 tracking-tight">
              6. Quantified Operational Outcomes: Before vs. After
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Independent audit findings and operational telemetry comparing incumbent vendor baselines against ACS performance.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 text-slate-500 uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4 font-semibold">Key Metric</th>
                    <th className="py-3 px-4 font-semibold text-red-600">Prior Baseline</th>
                    <th className="py-3 px-4 font-semibold text-emerald-600">Post-ACS Outcome</th>
                    <th className="py-3 px-4 font-semibold">Measurement Window</th>
                    <th className="py-3 px-4 font-semibold">Verification Body</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {study.measurableImpact.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-medium text-slate-900">
                        {row.metric}
                      </td>
                      <td className="py-4 px-4 text-slate-600 font-mono">
                        {row.before}
                      </td>
                      <td className="py-4 px-4 font-bold text-emerald-700 font-mono">
                        {row.after}
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        {row.timeframe}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-xs">
                        {row.verifiedBy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Client Testimonial */}
          <section className="mb-14 rounded-2xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs uppercase font-bold tracking-wider text-sky mb-4 block">
                Executive Testimonial
              </span>
              <blockquote className="text-lg sm:text-xl font-light italic leading-relaxed text-slate-100 mb-6">
                &ldquo;{study.clientTestimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-slate-800 pt-4">
                <div className="font-semibold text-white text-sm">
                  {study.clientTestimonial.author}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {study.clientTestimonial.organizationType}
                </div>
              </div>
            </div>
          </section>

          {/* Related ACS Services */}
          <section className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Integrated Services Deployed in this Case Study
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {study.relatedServices.map((svc, idx) => (
                <Link
                  key={idx}
                  href={`/services/${svc.slug}`}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-dark transition-all duration-200 group flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-slate-800 group-hover:text-sky-dark">
                    {svc.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-dark group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>

          {/* Action Callout */}
          <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Facing Similar Security or Facility Challenges?
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
              Our regional operations directors can perform an initial site vulnerability audit and provide a transparent, statutory-compliant rate analysis within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-950 text-white font-medium text-sm transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-sky" />
                <span>Request Site Vulnerability Survey</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Contact Operations Team</span>
              </Link>
            </div>
          </section>
        </main>
      </article>
    </>
  );
}
