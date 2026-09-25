import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_INDUSTRIES, getIndustryBySlug } from "@/lib/industries";
import { getServiceBySlug } from "@/lib/services";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import ClientMarquee from "@/components/common/ClientMarquee";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return ACS_INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const title = `${industry.name} Security Services | PSARA Licensed - ACS`;
  const description = `${industry.description} ISO 9001:2015 certified, background-verified security guards and supervisors for ${industry.shortName}. Request free site survey.`;
  const canonical = `${siteConfig.url}/sectors/${slug}`;

  return {
    title,
    description,
    keywords: industry.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: industry.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Sectors", url: `${siteConfig.url}/sectors` },
    { name: industry.shortName, url: `${siteConfig.url}/sectors/${slug}` },
  ];

  const relevantServices = industry.relevantServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-sky transition-colors">{crumb.name}</Link>
                      <span aria-hidden="true" className="text-gray-600">/</span>
                    </>
                  ) : (
                    <span className="text-sky font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge-sky">{industry.icon} {industry.shortName}</span>
            <span className="badge-gold">PSARA Licensed</span>
            <span className="badge-navy border border-white/20">ISO 9001:2015</span>
          </div>

          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-4xl">
            {industry.name} <span className="text-sky">Security Services</span>
          </h1>

          <p className="text-sky-200 font-roboto text-base sm:text-lg md:text-xl font-normal mb-8 max-w-3xl leading-relaxed">
            {industry.tagline}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact" className="btn-primary text-xs sm:text-sm px-7 py-3.5 shadow-lg">
              Get {industry.shortName} Proposal
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary text-xs sm:text-sm px-6 py-3.5">
              📞 Call Operations: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Threat Challenges */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="section-label">Sector Overview</span>
              <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold mb-4">
                Specialized Security Management for {industry.name}
              </h2>
              <div className="divider-sky mb-6" />
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                {industry.longDescription}
              </p>

              {/* Threat Matrix */}
              <div className="mb-10">
                <h3 className="font-roboto font-bold text-navy text-xl mb-4">
                  Key Threat Vectors &amp; Operational Challenges
                </h3>
                <div className="space-y-3">
                  {industry.keyChallenges.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-red-500 font-bold text-base shrink-0 mt-0.5">⚠️</span>
                      <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">{ch}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACS Solutions */}
              <div className="mb-10">
                <h3 className="font-roboto font-bold text-navy text-xl mb-4">
                  Tailored ACS Guarding &amp; Technology Solutions
                </h3>
                <div className="space-y-3">
                  {industry.acsSolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                      <span className="text-sky font-bold text-base shrink-0 mt-0.5">🛡️</span>
                      <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">{sol}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Compliance */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-roboto font-bold text-navy text-base mb-3">
                  Statutory &amp; Regulatory Compliance Matrix
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {industry.complianceRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Case Study & Consultation */}
            <div className="lg:col-span-5 space-y-6">
              {/* Case Study Card */}
              <div className="bg-gradient-to-br from-slate-900 to-navy text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-gold text-[10px]">Documented Case Study</span>
                  <span className="text-xs text-gray-400 font-medium">Verified Client Outcome</span>
                </div>
                <h3 className="font-roboto font-bold text-white text-lg mb-2">
                  {industry.caseStudy.title}
                </h3>
                <p className="text-sky-300 text-xs font-semibold mb-4">
                  Client Profile: {industry.caseStudy.clientType}
                </p>
                <div className="space-y-3 text-xs leading-relaxed border-t border-white/15 pt-4">
                  <div>
                    <span className="text-gray-400 font-bold block mb-0.5">THE CHALLENGE:</span>
                    <p className="text-gray-200">{industry.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sky font-bold block mb-0.5">ACS DEPLOYMENT:</span>
                    <p className="text-gray-200">{industry.caseStudy.solution}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                    <span className="text-emerald-400 font-bold block mb-0.5">MEASURABLE RESULT:</span>
                    <p className="text-white font-medium">{industry.caseStudy.result}</p>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-roboto font-bold text-navy text-base mb-2">
                  Request {industry.shortName} Assessment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Our risk consultants conduct comprehensive on-site threat audits across India. Receive a custom operational proposal within 24–48 hours.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center text-center text-xs py-3">
                  Book Site Survey
                </Link>
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <span className="text-[11px] text-slate-400">Direct Inquiries:</span>
                  <p className="text-xs font-bold text-navy mt-0.5">{siteConfig.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      {relevantServices.length > 0 && (
        <section className="section-py bg-slate-50 border-t border-slate-200">
          <div className="container-acs">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <p className="section-label">Integrated Capabilities</p>
                <h2 className="text-navy text-xl sm:text-2xl font-roboto font-bold">
                  Recommended ACS Services for {industry.shortName}
                </h2>
              </div>
              <Link href="/services" className="text-sky text-xs font-semibold hover:underline mt-2 sm:mt-0">
                View All Services →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relevantServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="p-5 bg-white border border-slate-200 rounded-xl hover:border-sky-300 hover:shadow-sm transition-all group"
                >
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <h3 className="font-roboto font-bold text-navy text-sm group-hover:text-sky transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {svc.description}
                  </p>
                  <span className="text-xs text-sky font-semibold mt-3 inline-block group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clients Marquee */}
      <ClientMarquee bgClass="bg-white" />

      {/* Bottom CTA */}
      <section className="section-py bg-navy text-white text-center">
        <div className="container-acs max-w-2xl">
          <h2 className="text-white font-roboto font-black text-2xl sm:text-3xl mb-3">
            Secure Your {industry.shortName} Premises with ACS
          </h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            PSARA licensed, ISO 9001:2015 certified operations with zero statutory liability. Get an itemized commercial proposal today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-sm px-8 py-3.5">
              Contact Risk Desk
            </Link>
            <Link href="/sectors" className="btn-secondary text-sm px-8 py-3.5">
              Explore All Sectors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
