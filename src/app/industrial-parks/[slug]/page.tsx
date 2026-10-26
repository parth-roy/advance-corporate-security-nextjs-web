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
  Navigation,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import {
  getAllIndustrialParks,
  getIndustrialParkBySlug,
} from "@/lib/industrialParks";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  serializeJsonLd,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const parks = getAllIndustrialParks();
  return parks.map((p) => ({
    slug: p.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const park = getIndustrialParkBySlug(slug);

  if (!park) {
    return {
      title: "Industrial Park Not Found | Advance Corporate Security",
    };
  }

  const title = `${park.name} Security & Gate Management | ACS`;
  const description = `${park.heroHeadline} 24/7 gatehouse SOPs, weighbridge shrinkage prevention, and 100% West Bengal Zone A wage compliance.`;
  const canonical = `${siteConfig.url}/industrial-parks/${slug}`;

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

export default async function IndustrialParkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const park = getIndustrialParkBySlug(slug);

  if (!park) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Industrial Parks", url: `${siteConfig.url}/industrial-parks/${slug}` },
    { name: park.name, url: `${siteConfig.url}/industrial-parks/${slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: `Industrial Logistics Security - ${park.name}`,
    description: park.overview,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "Place",
      name: park.location,
    },
  };

  const faqSchema = buildFaqSchema(park.faqs);

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
        {/* Hero Section */}
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
                <li className="text-slate-400">Industrial Parks</li>
                <li>/</li>
                <li className="text-sky font-medium truncate max-w-xs">
                  {park.slug}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-sky/15 text-sky-light text-xs font-semibold tracking-wide uppercase border border-sky/30">
                <Building2 className="w-3.5 h-3.5 text-sky" />
                {park.parkDeveloper}
              </span>
              <span className="px-3 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-semibold">
                West Bengal {park.wageZone} Statutory Wage Mandate
              </span>
              <span className="px-3 py-1 rounded bg-white/10 text-slate-300 text-xs font-medium">
                {park.totalArea}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl">
              {park.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8 font-light">
              {park.overview}
            </p>

            {/* Quick Strategic Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-white mb-8">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  {park.location}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Statutory Classification
                </span>
                <span className="text-sm sm:text-base font-bold text-amber-300">
                  WB {park.wageZone} Minimum Wages
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Gate Security Cadence
                </span>
                <span className="text-sm sm:text-base font-bold text-sky-light">
                  24/7 OCR & Weighbridge SOP
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Patrol Protocol
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  Synchronized Cloud RFID
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky hover:bg-sky-dark text-white font-medium text-sm transition-colors shadow-sm"
              >
                <span>Request Park Security Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/dankuni-heavy-industrial-logistics-park"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
              >
                <FileText className="w-4 h-4 text-sky" />
                <span>Read Dankuni Industrial Case Study</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="container-acs max-w-6xl mx-auto pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Operational Architecture & SOPs */}
            <div className="lg:col-span-8 space-y-12">
              {/* Proximity & Logistics Arteries */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Geospatial Connectivity & Supply Chain Proximities
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Strategic highway, port, and rail arterial distances governing transit logistics for {park.name}.
                </p>

                <div className="space-y-3">
                  {park.proximities.map((prox, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block text-sm mb-1">
                          {prox.destination}
                        </span>
                        <span className="text-slate-600 leading-normal">
                          {prox.significance}
                        </span>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="text-sm font-bold text-sky-dark font-mono block">
                          {prox.distance}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          ~ {prox.travelTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gate Security SOPs */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    24/7 Gatehouse Security SOPs & Inbound Control
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Every inbound truck, contract worker, and outbound container follows an audited, 4-stage verification SOP to ensure zero gate congestion and foolproof asset custody.
                </p>

                <div className="space-y-4">
                  {park.gateSecuritySOPs.map((sop, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-dark">
                          Step 0{idx + 1}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                          {sop.techEnabler}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                        {sop.step}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sop.procedure}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Weighbridge Management & Shrinkage Prevention */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Weighbridge Governance & Cargo Loss Prevention
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Raw material shrinkage and inventory diversion occur primarily during weighbridge transit. ACS enforces strict cryptographic and physical controls.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {park.weighbridgeShrinkageControls.map((wb, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {wb.protocol}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {wb.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Perimeter Patrolling Protocols */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Perimeter Patrolling & Mobile QRT Protocols
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Multi-acre logistics estates require dynamic, technology-verified perimeter tours that leave no blind spots along railway tracks or dark boundaries.
                </p>

                <div className="space-y-4">
                  {park.perimeterPatrolProtocols.map((patrol, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        {patrol.feature}
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {patrol.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* West Bengal Zone A Minimum Wage Mandate */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-sky-dark" />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    West Bengal {park.wageZone} Minimum Wage Compliance
                  </h2>
                </div>
                <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-slate-700 leading-relaxed mb-6">
                  <span className="font-bold text-amber-900 block mb-1">
                    Statutory Warning for Logistics Park Tenants & Landlords:
                  </span>
                  Both Dankuni (Hooghly) and Uluberia (Howrah) municipalities fall under <strong>West Bengal Zone A</strong>. Contracting agencies quoting lower Zone B wages creates severe joint legal liability for principal employers under the Contract Labour Act, leading to retrospective labor recovery notices and wildcat gate blockades.
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      Wage Schedule:
                    </span>
                    <span className="text-slate-700">
                      {park.statutoryCompliance.applicableSchedule}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      Monthly ECR Transparency:
                    </span>
                    <span className="text-slate-700">
                      {park.statutoryCompliance.ecrTransparency}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 inline mr-2" />
                    {park.statutoryCompliance.auditGuarantee}
                  </div>
                </div>
              </section>

              {/* Recommended Guarding Personnel Structure */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Recommended Deployment Matrix ({park.name})
                </h2>
                <div className="space-y-3">
                  {park.recommendedPersonnelStructure.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block mb-0.5">
                          {role.role}
                        </span>
                        <span className="text-slate-600 text-xs">
                          {role.responsibilities}
                        </span>
                      </div>
                      <div className="shrink-0 text-slate-500 font-mono text-xs sm:text-sm font-semibold">
                        {role.ratioOrCount}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Park FAQs */}
              <section className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  Estate Guarding FAQs ({park.name})
                </h2>
                <div className="space-y-4">
                  {park.faqs.map((faq, idx) => (
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

            {/* Right 4 Cols: Quick Contact & Park Overview Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl sticky top-24 shadow-lg border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-sky block mb-2">
                  Park Operations Desk
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  Deploy Security at {park.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                  Request a confidential site security survey, weighbridge audit, and statutory Zone A rate proposal.
                </p>

                <div className="space-y-4 mb-6 text-xs">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-sky shrink-0" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>24-48 Hr Fast Mobilization</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>PSARA Licensed & 100% ECR Certified</span>
                  </div>
                </div>

                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky hover:bg-sky-dark text-white font-medium text-xs transition-colors mb-3"
                >
                  <span>Request Park Rate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/case-studies/dankuni-heavy-industrial-logistics-park"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Review Dankuni 50-Acre Case Study</span>
                </Link>
              </div>

              {/* Nearby Hubs Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Other West Bengal Hubs
                </h4>
                <div className="space-y-2 text-xs">
                  {getAllIndustrialParks()
                    .filter((p) => p.slug !== park.slug)
                    .map((p, idx) => (
                      <Link
                        key={idx}
                        href={`/industrial-parks/${p.slug}`}
                        className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 block">
                          {p.name}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {p.district} • {p.wageZone}
                        </span>
                      </Link>
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
