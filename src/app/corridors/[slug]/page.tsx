import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Scale,
  Users,
  AlertCircle,
  Truck,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getAllCorridors, getCorridorBySlug } from "@/lib/corridors";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const corridors = getAllCorridors();
  return corridors.map((c) => ({
    slug: c.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const corridor = getCorridorBySlug(slug);

  if (!corridor) {
    return {
      title: "Industrial Corridor Not Found | Advance Corporate Security",
    };
  }

  const title = `${corridor.name} Security & Manpower | ACS`;
  const description = `${corridor.heroHeadline} PSARA-licensed, 24-48 hr supervisory mobilization, 100% statutory ECR compliance across ${corridor.state} industrial zones.`;
  const canonical = `${siteConfig.url}/corridors/${slug}`;

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
      type: "website",
    },
  };
}

export default async function CorridorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridorBySlug(slug);

  if (!corridor) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Eastern Industrial Corridors", url: `${siteConfig.url}/corridors/${slug}` },
    { name: corridor.name, url: `${siteConfig.url}/corridors/${slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: `Industrial Security Services - ${corridor.name}`,
    description: corridor.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${corridor.state}, India`,
    },
  };

  const faqSchema = buildFaqSchema(corridor.faqs);

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
          __html: serializeJsonLd(serviceSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(faqSchema),
          }}
        />
      )}

      <article className="min-h-screen bg-[#fafbfc] text-slate-800 pb-20">
        {/* Corridor Hero Header */}
        <section className="relative overflow-hidden bg-[#071429] text-white pt-14 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-800">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "32px 32px",
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
                <li className="text-slate-400">Regional Corridors</li>
                <li>/</li>
                <li className="text-sky font-medium truncate max-w-xs">
                  {corridor.slug}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-sky/15 text-sky-light text-xs font-semibold tracking-wide uppercase border border-sky/30">
                <ShieldCheck className="w-3.5 h-3.5 text-sky" />
                PSARA Licensed Operations
              </span>
              <span className="px-3 py-1 rounded bg-white/10 text-slate-300 text-xs font-medium">
                {corridor.region}, {corridor.state}
              </span>
              <span className="px-3 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-semibold">
                24-48 Hr Supervisory Mobilization
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl">
              {corridor.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8 font-light">
              {corridor.description}
            </p>

            {/* Mobilization Guarantee Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-white mb-8">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Mobilization Time
                </span>
                <span className="text-xl sm:text-2xl font-bold text-sky-light font-mono">
                  {corridor.deploymentMetrics.turnaroundHours}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Regional Bench
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {corridor.deploymentMetrics.benchStrength}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Supervision Span
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {corridor.deploymentMetrics.supervisoryRatio}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Tour Technology
                </span>
                <span className="text-sm font-semibold text-amber-300">
                  {corridor.deploymentMetrics.patrolTechnology}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky hover:bg-sky-dark text-white font-medium text-sm transition-colors shadow-sm"
              >
                <span>Request Corridor Security Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/request-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-sky" />
                <span>Schedule Confidential Site Survey</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="container-acs max-w-6xl mx-auto pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Columns: Strategic Overview & Operational Layers */}
            <div className="lg:col-span-8 space-y-12">
              {/* Strategic Ecosystem Overview */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Industrial Landscape & Strategic Ecosystem
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-6">
                  {corridor.strategicImportance}
                </p>

                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                  Key Industrial Estates & Growth Nodes Covered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {corridor.keyIndustrialZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-sky-dark shrink-0" />
                        <h4 className="font-semibold text-slate-900 text-sm">
                          {zone.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 mb-2 pl-6">
                        {zone.focus}
                      </p>
                      <span className="text-[11px] font-mono text-slate-400 pl-6 block">
                        Location: {zone.location}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* State Statutory Compliance Framework */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {corridor.state} Statutory Compliance Framework
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Operating in {corridor.state} requires strict adherence to state-specific PSARA rules, scheduled employment minimum wage rates, and contract labor laws. ACS insulates principal employers from compliance defaults.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      Governing PSARA License:
                    </span>
                    <span className="text-slate-700">
                      {corridor.stateComplianceFramework.psaraRule}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      Minimum Wages Authority:
                    </span>
                    <span className="text-slate-700">
                      {corridor.stateComplianceFramework.minimumWageAuthority}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      Contract Labour (R&A) Provision:
                    </span>
                    <span className="text-slate-700">
                      {corridor.stateComplianceFramework.clraRequirements}
                    </span>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero Joint-Liability Guarantee</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {corridor.stateComplianceFramework.statutoryAssurance}
                    </p>
                  </div>
                </div>
              </section>

              {/* Operational Security & FM Capabilities */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  Corridor-Specific Operational Protocols
                </h2>
                <div className="space-y-4">
                  {corridor.operationalCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-sky-dark" />
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  Frequently Asked Questions ({corridor.name})
                </h2>
                <div className="space-y-4">
                  {corridor.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <h3 className="font-semibold text-slate-900 text-sm mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right 4 Columns: Sticky Quick Contact & Corridor Quick Specs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Contact Box */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl sticky top-24 shadow-lg border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-sky block mb-2">
                  Regional Command Desk
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  Mobilize Guards in {corridor.state}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                  Direct liaison with our regional operations superintendent for {corridor.name}.
                </p>

                <div className="space-y-4 mb-6 text-xs">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-sky shrink-0" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Guaranteed 24-48 Hr Deployment</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% PSARA & ECR Certified</span>
                  </div>
                </div>

                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky hover:bg-sky-dark text-white font-medium text-xs transition-colors mb-3"
                >
                  <span>Request Deployment Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/case-studies/dankuni-heavy-industrial-logistics-park"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Review Heavy Industrial Case Study</span>
                </Link>
              </div>

              {/* Target Industries Pill Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Corridor Industries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {corridor.targetSectors.map((sec, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
