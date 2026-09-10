import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { ACS_SERVICES, getServiceBySlug, ACS_SERVICE_CATEGORIES } from "@/lib/services";
import { ACS_CITIES } from "@/lib/cities";
import { buildBreadcrumbSchema, buildServiceSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";

// Fallback parent category definitions
const categoryData: Record<string, { title: string; shortName: string; heroImage: string; description: string; longDescription: string; features: string[]; faqs: { question: string; answer: string }[] }> = {
  "security-safety": {
    title: "Security & Safety Services",
    shortName: "Security Services",
    heroImage: "/images/security-service-slider.jpg",
    description: "Advance Corporate Services provides professional security guard services, 24×7 surveillance, CCTV monitoring, night patrolling, and fire fighting services across pan India.",
    longDescription: "Digital and manual safety and security are a matter of grave concern today in all organizations, industries, corporate houses, educational institutes, commercial complexes, malls, and government offices. ACS provides battle-tested, PSARA-licensed security guards for offices, factories, hospitals, banks, and government buildings across India.",
    features: [
      "Armed & Unarmed Security Guards",
      "24×7 CCTV Surveillance & Monitoring",
      "Night Patrolling Services",
      "Fire Fighting & Emergency Response",
      "Metal Detector & Boom Barrier Operation",
      "Event Security Management",
      "VIP Protection & Escort Services",
      "Industrial Security Solutions",
    ],
    faqs: [
      { question: "What types of security guards does ACS provide?", answer: "ACS provides armed guards, unarmed guards, CISF-trained personnel, retired defence personnel, female security guards, and fire fighting staff — all trained and certified for client environments." },
      { question: "Does ACS provide security services to government offices?", answer: "Yes. ACS is empanelled with Central & State Government bodies and provides security to Indian Air Force, BSF, Defence Ministry, CBEC, and multiple government hospitals." },
      { question: "How quickly can ACS deploy security personnel?", answer: "ACS maintains a trained reserve workforce for rapid deployment. We can typically deploy security staff within 24-48 hours of signing a contract." },
    ],
  },
  "facility-management": {
    title: "Facility Management Services",
    shortName: "Facility Management",
    heroImage: "/images/facility-management-slider-new.jpg",
    description: "ACS provides comprehensive hard and soft facility management services including housekeeping, janitorial, building maintenance, and infrastructure management across pan India.",
    longDescription: "Advance Corporate Services provides facility management services that ensure the comfort, functionality, efficiency, and safety of buildings, grounds, real estate, and infrastructure. We cover both Hard Facility Management (structural and mechanical maintenance) and Soft Facility Management (housekeeping, janitorial, and support services).",
    features: [
      "Professional Housekeeping & Cleaning",
      "Janitorial & Deep Cleaning Services",
      "MEP (Mechanical, Electrical, Plumbing) Maintenance",
      "Pest Control & Sanitation Services",
      "Facade & High-Rise Glass Cleaning",
      "Waste Management & Recycling Solutions",
      "Hospital & Clinical Facility Management",
      "Industrial Facility Upkeep",
    ],
    faqs: [
      { question: "What is the difference between hard and soft facility management?", answer: "Hard facility management covers the physical structure — electrical, plumbing, HVAC, and building fabric. Soft facility management includes housekeeping, janitorial services, pest control, and landscaping." },
      { question: "Can ACS manage large hospital or industrial facilities?", answer: "Yes. ACS has extensive experience managing hospitals, industrial plants, government offices, and large commercial complexes with dedicated teams for each facility type." },
      { question: "Does ACS provide housekeeping staff on a contract basis?", answer: "Yes. ACS provides housekeeping personnel on monthly or annual contract basis, fully trained and supervised by our experienced managers." },
    ],
  },
  "placement-services": {
    title: "Placement & Manpower Outsourcing Services",
    shortName: "Placement Services",
    heroImage: "/images/placement-service-slider.jpg",
    description: "ACS provides expert manpower outsourcing and placement services — connecting qualified candidates with corporates, industries, and government organizations across pan India.",
    longDescription: "Manpower is of primary importance in managing an organization. Advance Corporate Services plays an integral role in ensuring employers find the best person for the job. We supply skilled, semi-skilled, and unskilled contract manpower for industrial, logistics, and corporate operations with full PF and ESIC compliance.",
    features: [
      "Skilled & Semi-Skilled Manpower Supply",
      "Blue Collar & White Collar Staffing",
      "Temporary & Permanent Placement",
      "Government Sector Manpower",
      "Hospital & Healthcare Staffing",
      "Industrial Labour Supply",
      "Background Verification & Onboarding",
      "Complete Payroll & Statutory EPF/ESI Management",
    ],
    faqs: [
      { question: "What industries does ACS provide placement services to?", answer: "ACS provides manpower to Government offices, Defence establishments, Hospitals, Industries, IT companies, Educational institutions, and Warehouses across India." },
      { question: "Does ACS handle EPF and ESI for deployed manpower?", answer: "Yes. ACS handles all statutory compliance including EPF, ESI, Provident Fund contributions, and labour law requirements for all deployed personnel." },
      { question: "Can ACS provide manpower for short-term or project-based work?", answer: "Absolutely. ACS offers flexible deployment models — from short-term project staffing to long-term contractual placement, with full compliance management." },
    ],
  },
  horticulture: {
    title: "Horticulture Services",
    shortName: "Horticulture",
    heroImage: "/images/horticulture-slider.jpg",
    description: "ACS provides professional landscaping, garden and lawn design, grounds keeping, and farm development services for corporates, hospitals, and institutions across India.",
    longDescription: "Advance Corporate Services provides professional horticulture services designed to enhance the aesthetic value, functionality, and sustainability of outdoor spaces. Our skilled team delivers comprehensive landscaping, grounds management, and garden design to corporate campuses, hospitals, and government establishments across India.",
    features: [
      "Landscape & Garden Design",
      "Lawn Development & Maintenance",
      "Indoor Plant Care & Maintenance",
      "Tree Pruning & Grounds Keeping",
      "Irrigation & Sprinkler Setup",
      "Roof Garden & Vertical Garden",
      "Organic Composting & Soil Management",
    ],
    faqs: [
      { question: "Does ACS provide horticulture services to corporate campuses?", answer: "Yes. ACS provides complete grounds keeping and landscaping services to corporate campuses, hospitals, government buildings, and industrial facilities across India." },
      { question: "Can ACS design a new garden or lawn from scratch?", answer: "Yes. ACS provides end-to-end horticulture services from initial space planning and design to implementation and ongoing maintenance." },
    ],
  },
};

export async function generateStaticParams() {
  const categorySlugs = Object.keys(categoryData);
  const subServiceSlugs = ACS_SERVICES.map(s => s.slug);
  const allSlugs = Array.from(new Set([...categorySlugs, ...subServiceSlugs]));
  return allSlugs.map(slug => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subService = getServiceBySlug(slug);
  const category = categoryData[slug];

  const title = subService
    ? `${subService.name} | Advance Corporate Services`
    : category
    ? `${category.title} | Advance Corporate Services`
    : "Corporate Services | ACS";

  const description = subService?.description || category?.description || siteConfig.description;
  const heroImage = subService?.heroImage || category?.heroImage || "/images/security-service-slider.jpg";
  const url = `${siteConfig.url}/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subService = getServiceBySlug(slug);
  const category = categoryData[slug];

  if (!subService && !category) notFound();

  const title = subService ? subService.name : category.title;
  const shortName = subService ? subService.shortName : category.shortName;
  const description = subService ? subService.description : category.description;
  const longDescription = subService ? subService.longDescription : category.longDescription;
  const heroImage = subService ? subService.heroImage : category.heroImage;
  const features = subService ? subService.features : category.features;
  const faqs = subService
    ? [
        {
          question: `Is ACS licensed and certified for ${title}?`,
          answer: `Yes. Advance Corporate Services is PSARA licensed (for security services) and ISO 9001:2015 certified across all operations. We have 25+ years of operational excellence.`,
        },
        {
          question: `How quickly can ${shortName} be deployed?`,
          answer: `We can deploy trained and verified personnel within 24 to 72 hours across major Indian cities through our pan-India network.`,
        },
        {
          question: `Does ACS handle statutory compliance for ${shortName}?`,
          answer: `Yes. ACS takes 100% employer-of-record responsibility including PF, ESIC, Minimum Wages, and Professional Tax compliance.`,
        },
      ]
    : category.faqs;

  const pageUrl = `${siteConfig.url}/services/${slug}`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: title, url: pageUrl },
  ];

  const faqSchema = buildFaqSchema(faqs);
  const serviceSchema = buildServiceSchema({
    name: title,
    description,
    slug,
    schemaType: subService?.schemaType,
  });

  // Top cities to feature for this service
  const topCities = ACS_CITIES.filter(c => c.tier === 1).slice(0, 16);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden bg-navy">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        <div className="container-acs relative z-10 pb-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-gray-300">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-sky transition-colors">{crumb.name}</Link>
                      <span>/</span>
                    </>
                  ) : (
                    <span className="text-sky font-semibold">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="badge-sky">ISO 9001:2015</span>
            <span className="badge-gold">25+ Years Experience</span>
          </div>
          <h1 className="text-white font-roboto font-black text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="section-label">Service Overview</p>
              <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold mb-4">{title}</h2>
              <div className="divider-sky" />
              <p className="text-gray-700 leading-relaxed text-base mb-6 font-medium">{description}</p>
              <p className="text-gray-600 leading-relaxed text-base mb-8 whitespace-pre-line">{longDescription}</p>

              <h3 className="text-navy text-xl font-roboto font-bold mb-4">Core Capabilities &amp; Specifications</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-sky font-bold">✓</span>
                    <span className="text-gray-800 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="card-acs p-6 bg-gradient-to-br from-navy to-navy-dark text-white rounded-xl">
                <h3 className="font-roboto font-bold text-white text-xl mb-3">Request a Proposal</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Get a comprehensive commercial quote for {shortName} deployment. Our team delivers custom site solutions within 24 hours.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center text-center">
                  Get Free Quote
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <span className="text-xs text-gray-400">Call Us Anytime:</span>
                  <p className="text-sm font-bold text-sky mt-0.5">{siteConfig.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Cities Grid for this Service */}
      <section className="section-py bg-gray-50 border-t border-gray-100">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Pan-India Availability</p>
            <h2 className="text-navy text-2xl font-roboto font-bold">
              {shortName} Across Major Indian Cities
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3">Select a city to view local deployment specifications, pricing, and PSARA compliance.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${slug}/${city.slug}`}
                className="p-2.5 bg-white border border-gray-200 rounded-lg text-center hover:border-sky hover:bg-sky-50 transition-all text-xs font-medium text-navy group"
              >
                <div className="group-hover:text-sky transition-colors">{city.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{city.state}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/location" className="text-sky text-sm font-semibold hover:underline">
              View All 580+ City Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py bg-white">
        <div className="container-acs max-w-3xl">
          <div className="text-center mb-8">
            <p className="section-label">FAQs</p>
            <h2 className="text-navy text-2xl font-roboto font-bold">Frequently Asked Questions</h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-sky-50/50 transition-colors list-none text-base">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}