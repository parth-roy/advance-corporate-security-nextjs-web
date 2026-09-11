// src/app/services/[slug]/[city]/page.tsx
// ============================================================
// ACS — Service × City PSEO Page
// Pan-India B2B, Enterprise, and B2G Landing Pages
// Integrates full B2B Keyword Matrix, GEO Fact Box, FAQPage JSON-LD
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_SERVICES, getServiceBySlug, ACS_SERVICE_CATEGORIES } from "@/lib/services";
import { ACS_CITIES } from "@/lib/cities";
import { generateServiceCityFaqs } from "@/lib/locationFaqHelper";
import { buildFaqSchema, buildBreadcrumbSchema, buildServiceSchema, serializeJsonLd } from "@/lib/schema";
import CityMap from "@/components/common/CityMap";

interface Params {
  slug: string;
  city: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  // Generate static routes across all brochure services and cities
  return ACS_SERVICES.flatMap((service) =>
    ACS_CITIES.map((city) => ({
      slug: service.slug,
      city: city.slug,
    }))
  );
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug) || ACS_SERVICES.find(s => s.category === slug) || ACS_SERVICES[0];
  const cityObj = ACS_CITIES.find((c) => c.slug === citySlug);
  if (!cityObj) return {};

  const cityName = cityObj.name;
  const state = cityObj.state;

  const title = service.metaTitleTemplate
    ? service.metaTitleTemplate.replace(/\[City\]/g, cityName)
    : `Reliable ${service.name} in ${cityName}, ${state} | PSARA Licensed - ACS`;

  const description = service.metaDescTemplate
    ? service.metaDescTemplate.replace(/\[City\]/g, cityName)
    : `Looking for professional ${service.name.toLowerCase()} in ${cityName}, ${state}? Advance Corporate Security (ACS) provides PSARA-licensed, ISO 9001:2015 certified 24×7 workforce solutions. 25+ years experience. Get a free quote.`;

  const url = `${siteConfig.url}/services/${slug}/${citySlug}`;

  const keywords = service.keywords
    ? service.keywords.map((k) => k.replace(/\[City\]/g, cityName))
    : [
        `${service.name} in ${cityName}`,
        `PSARA licensed security services in ${cityName}`,
        `corporate ${service.name.toLowerCase()} ${cityName}`,
        `facility management ${cityName}`,
        `contract labor in ${cityName}`,
      ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: service.heroImage || "/images/security-service-slider.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug) || ACS_SERVICES.find(s => s.category === slug) || ACS_SERVICES.find(s => s.slug === "security-guard")!;
  const cityObj = ACS_CITIES.find((c) => c.slug === citySlug);
  if (!cityObj) notFound();

  const { name: cityName, state, stateSlug } = cityObj;
  const pageUrl = `${siteConfig.url}/services/${slug}/${citySlug}`;

  const h1 = service.h1Template
    ? service.h1Template.replace(/\[City\]/g, cityName)
    : `Top PSARA-Licensed ${service.name} in ${cityName}`;

  const h2 = service.h2Template
    ? service.h2Template.replace(/\[City\]/g, cityName)
    : `24×7 Deployment & Statutory Compliant Solutions for ${cityName} Businesses`;

  // Dynamic FAQs matching the SEO Research Report
  const faqs = generateServiceCityFaqs({
    cityName,
    stateName: state,
    serviceSlug: service.slug,
    serviceName: service.name,
    serviceShortName: service.shortName,
    schemaType: service.schemaType,
  });

  const faqSchema = buildFaqSchema(faqs);
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.name, url: `${siteConfig.url}/services/${slug}` },
    { name: cityName, url: pageUrl },
  ];

  const serviceSchema = buildServiceSchema({
    name: service.name,
    description: service.description,
    slug,
    cityName,
    schemaType: service.schemaType,
  });

  // Nearby & related cities for SEO crawl graph
  const sameStateCities = ACS_CITIES
    .filter((c) => c.slug !== citySlug && c.state === state)
    .slice(0, 8);

  const displayCities = sameStateCities.length > 0
    ? sameStateCities
    : ACS_CITIES.filter((c) => c.slug !== citySlug && c.tier === 1).slice(0, 8);

  // Other related services
  const relatedServices = ACS_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-light text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
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

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-sky">{service.icon} {service.shortName}</span>
            <span className="badge-gold">📍 {cityName}, {state}</span>
            <span className="badge-navy border border-white/20">PSARA Licensed</span>
          </div>

          <h1 className="text-white font-roboto font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 max-w-4xl">
            {h1}
          </h1>

          <h2 className="text-sky-300 font-roboto text-lg sm:text-xl font-normal mb-8 max-w-3xl leading-relaxed">
            {h2}
          </h2>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Get Quotation in {cityName}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary text-base px-6 py-3.5">
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── GEO FACT BOX (AI Overview / GEO Bait) ── */}
      <section className="py-6 bg-sky-50 border-b border-sky-100" aria-label="Quick procurement specifications">
        <div className="container-acs">
          <div className="geo-fact-box">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider font-roboto">
                📋 ACS {service.shortName} in {cityName} — Corporate Procurement Fact Sheet
              </p>
              <span className="text-[11px] text-sky-800 bg-sky-100/80 px-2.5 py-0.5 rounded-full font-medium">
                Verified B2B / B2G Vendor
              </span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              {[
                { label: "PSARA License", value: "Verified Govt. Permit" },
                { label: "Quality Standards", value: "ISO 9001:2015" },
                { label: "Mobilization Time", value: "24–72 Hours" },
                { label: "Statutory Law", value: "100% PF & ESIC Compliant" },
                { label: "Operations Support", value: "24×7 Control Room" },
                { label: "Industry Track", value: "25+ Years Experience" },
              ].map((f) => (
                <div key={f.label} className="bg-white rounded-lg p-3 border border-sky-100 shadow-xs">
                  <div className="font-roboto font-black text-navy text-sm">{f.value}</div>
                  <div className="text-sky-600 text-[11px] font-medium mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT & FEATURES ── */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="section-label">Service Overview</p>
              <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold mb-4">
                Enterprise {service.name} for {cityName} Organizations
              </h2>
              <div className="divider-sky" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Advance Corporate Security provides end-to-end <strong>{service.name.toLowerCase()}</strong> tailored for corporate offices, commercial complexes, manufacturing units, hospitals, and government establishments in <strong>{cityName}, {state}</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3 className="text-navy text-xl font-roboto font-bold mb-4">
                What&apos;s Included in {service.shortName} Deployment
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-sky text-base shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-800 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff] rounded-xl border border-sky-100">
                <h4 className="font-roboto font-bold text-navy text-base mb-2">
                  Zero Statutory Risk for {cityName} Employers
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We assume complete legal employer responsibility. All staff deployed across {cityName} receive monthly salaries per the {state} Minimum Wages Act, with digital receipts for EPF, ESIC, and statutory bonuses made available on audit demand.
                </p>
              </div>
            </div>

            {/* Sidebar / Client Types */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-acs p-6 border border-gray-100">
                <h3 className="font-roboto font-bold text-navy text-lg mb-3">
                  Sectors Served in {cityName}
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Customized protocols designed for specific operating environments:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.clientTypes.map((type) => (
                    <span key={type} className="text-xs font-semibold px-3 py-1.5 rounded-md bg-sky-50 text-sky-800 border border-sky-100">
                      🏢 {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-xl bg-navy text-white shadow-lg">
                <span className="badge-gold text-[10px] mb-3 inline-block">Free Site Survey</span>
                <h3 className="font-roboto font-bold text-white text-xl mb-2">
                  Need Staff in {cityName}?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Schedule a complimentary on-site evaluation in {cityName}. We deliver itemized service quotes within 24 hours.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center text-center">
                  Request Free Quote
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <span className="text-xs text-gray-400">Direct Procurement Desk (24×7):</span>
                  <div className="mt-1 space-y-1">
                    {siteConfig.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^+\d]/g, "")}`}
                        className="block text-sm font-bold text-sky hover:underline"
                        aria-label={`Call ${p}`}
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DYNAMIC CITY DEPLOYMENT MAP (URL-Driven) ── */}
      <section className="section-py bg-gray-50 border-t border-gray-200/70" aria-label={`Operational footprint in ${cityName}`}>
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Deployment Footprint</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold">
              ACS {service.shortName} Deployment Base — <span className="text-sky">{cityName}</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
              Dynamic operational coverage across {cityName}, {state} and surrounding commercial parks, manufacturing zones, and logistics corridors.
            </p>
          </div>
          <CityMap cityName={cityName} stateName={state} serviceName={service.shortName} />
        </div>
      </section>

      {/* ── DYNAMIC FAQs (AEO / FAQPage Schema) ── */}
      <section className="section-py bg-off-white" aria-labelledby="faq-heading">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">Questions & Answers</p>
            <h2 id="faq-heading" className="text-navy text-2xl sm:text-3xl font-roboto font-bold">
              Frequently Asked Questions — {service.shortName} in {cityName}
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3">
              Common procurement inquiries regarding licensing, deployment speed, pricing, and compliance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-sky-50/50 transition-colors list-none text-base">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES IN THIS CITY ── */}
      <section className="section-py bg-white border-t border-gray-100">
        <div className="container-acs">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <p className="section-label">Cross-Service Capability</p>
              <h2 className="text-navy text-xl sm:text-2xl font-roboto font-bold">
                Other Integrated Services Available in {cityName}
              </h2>
            </div>
            <Link href={`/location/${citySlug}`} className="text-sky text-sm font-semibold hover:underline mt-2 md:mt-0">
              View All Services in {cityName} →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}/${citySlug}`}
                className="p-5 border border-gray-200 rounded-xl hover:border-sky-300 hover:bg-sky-50/40 transition-all group block"
              >
                <div className="text-2xl mb-2.5">{svc.icon}</div>
                <h3 className="font-roboto font-bold text-navy text-sm group-hover:text-sky transition-colors">
                  {svc.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {svc.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-sky font-semibold mt-3 group-hover:translate-x-1 transition-transform">
                  Deploy in {cityName} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY CITIES IN STATE (Internal Linking Matrix) ── */}
      <section className="py-10 bg-gray-50 border-t border-gray-200/70">
        <div className="container-acs">
          <h3 className="font-roboto font-bold text-navy text-sm uppercase tracking-wider mb-3">
            {service.shortName} in Nearby {state} Cities:
          </h3>
          <div className="flex flex-wrap gap-2">
            {displayCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${slug}/${city.slug}`}
                className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-sky hover:text-navy transition-all"
              >
                {service.shortName} in {city.name}
              </Link>
            ))}
            <Link
              href={`/location/state/${stateSlug}`}
              className="text-xs px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-semibold hover:bg-sky-100 transition-colors"
            >
              All {state} Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 text-center bg-navy text-white">
        <div className="container-acs max-w-2xl">
          <h2 className="text-white font-roboto font-black text-2xl sm:text-3xl mb-3">
            Hire PSARA-Licensed {service.shortName} in {cityName}
          </h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            Get an instant commercial quote with transparent per-shift or monthly billing. ISO 9001:2015 certified operations with zero compliance friction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Contact {cityName} Branch
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary text-base px-8 py-3.5">
              Call Support: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}