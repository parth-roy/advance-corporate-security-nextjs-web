// src/app/location/[city]/page.tsx
// ============================================================
// ACS — City Hub Page (580+ routes)
// Scenario 3: /location/[city]
// All ACS services for one city
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_SERVICES } from "@/lib/services";
import { ACS_CITIES } from "@/lib/cities";
import { generateCityHubFaqs } from "@/lib/locationFaqHelper";
import { buildFaqSchema, buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import CityMap from "@/components/common/CityMap";

interface Params { city: string; }

export async function generateStaticParams(): Promise<Params[]> {
  return ACS_CITIES.map((c) => ({ city: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = ACS_CITIES.find((c) => c.slug === citySlug);
  if (!cityData) return {};
  const { name: cityName, state: stateName } = cityData;
  const title = `Security & Facility Management Services in ${cityName} | PSARA Licensed - ACS`;
  const description = `Advance Corporate Security in ${cityName}, ${stateName} — PSARA-licensed security guards, facility management, manpower outsourcing, and horticulture. ISO 9001:2015 certified. Get free quote.`;
  const canonical = `${siteConfig.url}/location/${citySlug}`;
  return {
    title, description,
    keywords: [`security services in ${cityName}`, `facility management ${cityName}`, `manpower outsourcing ${cityName}`, `security guard agency ${cityName}`, `corporate housekeeping ${cityName}`, `PSARA licensed security ${cityName}`],
    alternates: { canonical },
    openGraph: { title, description, url: canonical },
  };
}

export default async function CityHubPage({ params }: { params: Promise<Params> }) {
  const { city: citySlug } = await params;
  const cityData = ACS_CITIES.find((c) => c.slug === citySlug);
  if (!cityData) notFound();
  const { name: cityName, state: stateName, stateSlug } = cityData;

  const faqs = generateCityHubFaqs(cityName, stateName);
  const faqSchema = buildFaqSchema(faqs);
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/location` },
    { name: stateName, url: `${siteConfig.url}/location/state/${stateSlug}` },
    { name: cityName, url: `${siteConfig.url}/location/${citySlug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <><Link href={crumb.url} className="hover:text-sky-400">{crumb.name}</Link><span aria-hidden="true">/</span></>
                  ) : (
                    <span className="text-sky-400 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-sky">📍 {cityName}</span>
            <span className="badge-gold">🏛️ {stateName}</span>
          </div>
          <h1 className="text-white font-roboto font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 max-w-4xl">
            PSARA Licensed Security &amp; Facility Management Services in {cityName}
          </h1>
          <p className="text-sky-200 text-lg mb-8 max-w-2xl">
            ISO 9001:2015 certified B2B services — Security Guards, Corporate Housekeeping, Manpower Outsourcing &amp; more — deployed across {cityName}, {stateName}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get Free Quote in {cityName}</Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary">📞 {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      {/* GEO Fact Box */}
      <section className="py-5 bg-sky-50 border-b border-sky-100">
        <div className="container-acs">
          <div className="geo-fact-box">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-3 font-roboto">📋 ACS in {cityName} — Quick Facts</p>
            <div className="grid sm:grid-cols-4 gap-3 text-xs">
              {[
                { label: "PSARA License", value: "Government of India" },
                { label: "ISO Certification", value: "9001:2015 + IAF/IAS" },
                { label: "Experience", value: "25+ Years (Since 2000)" },
                { label: "Statutory Compliance", value: "PF, ESIC, Min. Wage Act" },
              ].map((f) => (
                <div key={f.label} className="bg-white rounded p-2.5 border border-sky-100 text-center">
                  <div className="font-black text-navy text-sm">{f.value}</div>
                  <div className="text-sky-600 text-xs mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Available Services</p>
            <h2 className="text-navy">All ACS Services in <span className="text-sky">{cityName}</span></h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACS_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${citySlug}`}
                className="p-5 border border-gray-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0" aria-hidden="true">{service.icon}</span>
                  <div>
                    <div className="font-roboto font-bold text-navy text-sm group-hover:text-sky transition-colors">{service.name}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{service.description}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-sky font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                  View in {cityName} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic City Deployment Map */}
      <section className="section-py bg-gray-50 border-t border-gray-200/70" aria-label={`Operational map of ACS in ${cityName}`}>
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Operational Network</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold">
              ACS Operational Footprint — <span className="text-sky">{cityName}</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
              24×7 rapid deployment coverage across {cityName}, {stateName} commercial districts, tech parks, and industrial corridors.
            </p>
          </div>
          <CityMap cityName={cityName} stateName={stateName} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-off-white">
        <div className="container-acs max-w-3xl">
          <div className="text-center mb-8">
            <p className="section-label">FAQs</p>
            <h2 className="text-navy text-2xl font-roboto font-bold">ACS in {cityName} — Common Questions</h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-600 text-navy hover:bg-sky-50 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-navy text-white text-center">
        <div className="container-acs">
          <h2 className="text-white font-roboto font-bold text-2xl mb-3">Get ACS Services in {cityName} Today</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm">Free site assessment. Customised proposal in 24–48 hours. 25+ years of trusted service.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Free Quote</Link>
            <Link href={`/location/state/${stateSlug}`} className="btn-secondary">More cities in {stateName}</Link>
          </div>
        </div>
      </section>
    </>
  );
}