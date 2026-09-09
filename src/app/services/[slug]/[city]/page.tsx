import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildServiceSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";

const serviceNames: Record<string, string> = {
  "security-safety": "Security & Safety Services",
  "facility-management": "Facility Management Services",
  "placement-services": "Placement Services",
  horticulture: "Horticulture Services",
};

const serviceShortNames: Record<string, string> = {
  "security-safety": "Security Services",
  "facility-management": "Facility Management",
  "placement-services": "Placement Services",
  horticulture: "Horticulture",
};

const serviceDescriptions: Record<string, string> = {
  "security-safety":
    "Professional security guard services, CCTV surveillance, night patrolling, and fire fighting services",
  "facility-management":
    "Comprehensive housekeeping, janitorial, building maintenance, and facility management services",
  "placement-services":
    "Expert manpower outsourcing, staffing, and placement services connecting qualified candidates with employers",
  horticulture:
    "Professional landscaping, garden design, lawn maintenance, and horticulture services",
};

const serviceHeroImages: Record<string, string> = {
  "security-safety": "/images/security-service-slider.jpg",
  "facility-management": "/images/facility-management-slider-new.jpg",
  "placement-services": "/images/placement-service-slider.jpg",
  horticulture: "/images/horticulture-slider.jpg",
};

export async function generateStaticParams() {
  return siteConfig.services.flatMap((service) =>
    siteConfig.cities.map((city) => ({
      slug: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;

  const serviceName = serviceNames[slug];
  const cityObj = siteConfig.cities.find((c) => c.slug === citySlug);
  if (!serviceName || !cityObj) return {};

  const cityName = cityObj.name;
  const state = cityObj.state;
  const title = `${serviceName} in ${cityName}, ${state} | ACS`;
  const description = `Looking for ${serviceDescriptions[slug]} in ${cityName}, ${state}? Advance Corporate Services (ACS) provides ISO-certified, 24×7 professional services. 25+ years of experience. Get a free quote today.`;
  const url = `${siteConfig.url}/services/${slug}/${citySlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: serviceHeroImages[slug], width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;

  const serviceName = serviceNames[slug];
  const serviceShortName = serviceShortNames[slug];
  const cityObj = siteConfig.cities.find((c) => c.slug === citySlug);
  if (!serviceName || !cityObj) notFound();

  const { name: cityName, state } = cityObj;
  const pageUrl = `${siteConfig.url}/services/${slug}/${citySlug}`;

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: serviceName, url: `${siteConfig.url}/services/${slug}` },
    { name: cityName, url: pageUrl },
  ];

  const faqs = [
    {
      question: `Does ACS provide ${serviceShortName} in ${cityName}?`,
      answer: `Yes. Advance Corporate Services provides professional ${serviceShortName} in ${cityName}, ${state}. Our trained workforce is deployed 24×7 across ${cityName} for government, corporate, industrial, and institutional clients.`,
    },
    {
      question: `How do I hire ${serviceShortName} in ${cityName}?`,
      answer: `Contact ACS through our website or call us directly. Our ${cityName} team will assess your requirements and provide a customised proposal within 24 hours. We are ISO 9001:2015 certified with 25+ years of experience.`,
    },
    {
      question: `Is ACS ${serviceShortName} available 24×7 in ${cityName}?`,
      answer: `Yes. ACS operates round-the-clock in ${cityName}. Our ${serviceShortName} personnel are available 24 hours a day, 7 days a week, including emergencies and night shifts.`,
    },
    {
      question: `What is the cost of ${serviceShortName} in ${cityName}?`,
      answer: `The cost of ${serviceShortName} in ${cityName} depends on the scope, number of personnel, duration, and specific requirements. Contact ACS for a free customised quote tailored to your needs in ${cityName}.`,
    },
  ];

  const faqSchema = buildFaqSchema(faqs);
  const serviceSchema = buildServiceSchema({
    name: serviceName,
    description: `${serviceDescriptions[slug]} in ${cityName}, ${state}`,
    slug,
    cityName,
  });

  // Nearby cities for internal linking
  const nearbyCities = siteConfig.cities
    .filter((c) => c.slug !== citySlug && c.state === state)
    .slice(0, 5);

  const otherCities = nearbyCities.length > 0
    ? nearbyCities
    : siteConfig.cities.filter((c) => c.slug !== citySlug).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-navy">
        <Image
          src={serviceHeroImages[slug]}
          alt={`${serviceName} in ${cityName}`}
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" aria-hidden="true" />
        <div className="container-acs relative z-10 pb-8 md:pb-12">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li><Link href={`/services/${slug}`} className="hover:text-gold transition-colors">{serviceName}</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold font-medium" aria-current="page">{cityName}</li>
            </ol>
          </nav>
          <h1 className="font-roboto font-900 text-white text-3xl md:text-4xl">
            {serviceName} in {cityName}
          </h1>
          <p className="text-gray-300 mt-2 text-sm">{state} | 24×7 | ISO 9001:2015 Certified</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Main intro */}
              <div className="bg-off-white border-l-4 border-gold rounded-r-lg p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Looking for reliable <strong>{serviceName}</strong> in <strong>{cityName}, {state}</strong>?
                  Advance Corporate Services (ACS) provides professional, ISO 9001:2015 certified {serviceShortName} in {cityName} with over <strong>25 years of experience</strong> serving government, corporate, industrial, and institutional clients across India.
                </p>
              </div>

              <h2 className="font-roboto font-bold text-navy text-2xl mb-4">
                Why Choose ACS for <span className="text-gold">{serviceShortName} in {cityName}?</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Advance Corporate Services has built a trusted reputation across pan India by delivering high-quality {serviceShortName} to clients in {cityName} and {state}. Our team in {cityName} consists of trained, vetted, and experienced professionals who are deployed 24×7 to meet your security and service requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you need {serviceShortName} for a corporate office, hospital, industrial plant, government building, or residential complex in {cityName}, ACS provides customised solutions with full compliance and management support.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  `ISO 9001:2015 certified ${serviceShortName}`,
                  `24×7 availability in ${cityName}`,
                  `Trained & verified personnel`,
                  `Government empanelled company`,
                  `25+ years of industry experience`,
                  `Free consultation & custom quote`,
                  `Full statutory compliance (EPF/ESI)`,
                  `Responsive local support team`,
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-3 bg-off-white rounded-lg">
                    <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <h2 className="font-roboto font-bold text-navy text-2xl mb-6">
                FAQs — {serviceShortName} in <span className="text-gold">{cityName}</span>
              </h2>
              <div className="space-y-4 mb-10">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-600 text-navy hover:bg-off-white transition-colors list-none">
                      <span>{faq.question}</span>
                      <svg className="w-5 h-5 text-gold shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              {/* Nearby cities internal linking */}
              <div className="bg-off-white rounded-lg p-6">
                <h3 className="font-roboto font-bold text-navy text-base mb-4">
                  {serviceShortName} in Nearby Cities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {otherCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/services/${slug}/${city.slug}`}
                      className="text-sm bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <Link
                    href={`/services/${slug}`}
                    className="text-sm text-gold hover:text-gold-dark font-medium px-3 py-1.5"
                  >
                    View All Cities →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-navy text-white rounded-lg p-6 sticky top-24">
                <h3 className="font-roboto font-bold text-white text-lg mb-1">
                  Need {serviceShortName}?
                </h3>
                <p className="text-gold text-sm font-medium mb-3">in {cityName}, {state}</p>
                <p className="text-gray-300 text-sm mb-5">
                  Get a free customised quote from our {cityName} team within 24 hours.
                </p>
                <Link href={`/contact?service=${slug}&city=${citySlug}`} className="btn-primary w-full justify-center block text-center mb-3">
                  Request Free Quote
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full justify-center block text-center">
                  Call Us Now
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> ISO 9001:2015 Certified</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> 25+ Years Experience</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> 24×7 Available in {cityName}</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> Govt. Empanelled</p>
                </div>
              </div>

              {/* All Services */}
              <div className="mt-6 bg-off-white rounded-lg p-6">
                <h3 className="font-roboto font-bold text-navy text-base mb-4">All Services</h3>
                <ul className="space-y-2">
                  {siteConfig.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/${citySlug}`}
                        className={`text-sm flex items-center gap-2 transition-colors ${s.slug === slug ? "text-gold font-medium" : "text-gray-700 hover:text-gold"}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.slug === slug ? "bg-gold" : "bg-gray-400"}`} aria-hidden="true" />
                        {s.name} in {cityName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
