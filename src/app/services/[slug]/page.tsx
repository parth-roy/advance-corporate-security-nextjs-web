import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildServiceSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";

// Detailed data per service
const serviceData = {
  "security-safety": {
    title: "Security & Safety Services",
    shortName: "Security Services",
    heroImage: "/images/security-service-slider.jpg",
    heroAlt: "ACS Security Guards on duty",
    description: "Advance Corporate Services provides professional security guard services, 24×7 surveillance, CCTV monitoring, night patrolling, and fire fighting services across pan India.",
    longDescription: `Digital and manual safety and security are a matter of grave concern today in all organizations, industries, corporate houses, educational institutes, commercial complexes, malls, dwelling units, and both Central & State govt. offices.

Advance Corporate Services ensures all its clients the security services and facility management services through its thousands of strong and dedicated workforces. Our well-trained professionals provide 24×7 services — honest, dependable, and dedicated to their work, capable of handling adverse situations.

Our security personnel are trained to handle arms, webcams, metal detectors, jammers, Boom Barriers, Bollards, and other security equipment. We provide round-the-clock surveillance including night patrolling.`,
    features: [
      "Armed & Unarmed Security Guards",
      "24×7 CCTV Surveillance & Monitoring",
      "Night Patrolling Services",
      "Fire Fighting & Emergency Response",
      "Metal Detector & Boom Barrier Operation",
      "Intelligence & Surveillance Services",
      "Event Security Management",
      "VIP Protection & Escort Services",
      "Industrial Security Solutions",
      "Government & Defence Security",
    ],
    faqs: [
      {
        question: "What types of security guards does ACS provide?",
        answer: "ACS provides armed guards, unarmed guards, CISF-trained personnel, retired defence personnel, female security guards, and fire fighting staff — all trained and certified for client environments."
      },
      {
        question: "Does ACS provide security services to government offices?",
        answer: "Yes. ACS is empanelled with Central & State Government bodies and provides security to Indian Air Force, BSF, Defence Ministry, CBEC, and multiple government hospitals and offices."
      },
      {
        question: "How quickly can ACS deploy security personnel?",
        answer: "ACS maintains a trained reserve workforce for rapid deployment. We can typically deploy security staff within 24-48 hours of signing a contract."
      },
    ],
    image2: "/images/guarding.jpg",
    image3: "/images/executionprotection.jpg",
  },
  "facility-management": {
    title: "Facility Management Services",
    shortName: "Facility Management",
    heroImage: "/images/facility-management-slider-new.jpg",
    heroAlt: "ACS Facility Management team",
    description: "ACS provides comprehensive hard and soft facility management services including housekeeping, janitorial, building maintenance, and infrastructure management across pan India.",
    longDescription: `Your property… Our priority. Advance Corporate Services provides facility management services that help to ensure the comfort, functionality, efficiency, and safety of buildings, grounds, real estate, and infrastructure.

We provide two types of facility management — Hard Facility Management (structural and mechanical maintenance) and Soft Facility Management (housekeeping, janitorial, and support services).

Since our inception, we value the importance of a varied range of services and its significance in running a company or an organisation. We provide skilled professionals who are trained in managing different roles, so that no work is hindered and 100% work efficiency is guaranteed.`,
    features: [
      "Professional Housekeeping & Cleaning",
      "Janitorial Services",
      "Building & Infrastructure Maintenance",
      "Pantry & Cafeteria Management",
      "Pest Control Services",
      "Electrical & Plumbing Maintenance",
      "Waste Management Solutions",
      "Office Boys & Support Staff",
      "Hospital Facility Management",
      "Industrial Facility Management",
    ],
    faqs: [
      {
        question: "What is the difference between hard and soft facility management?",
        answer: "Hard facility management covers the physical structure — electrical, plumbing, HVAC, and building fabric. Soft facility management includes housekeeping, janitorial services, catering, and security support."
      },
      {
        question: "Can ACS manage large hospital or industrial facilities?",
        answer: "Yes. ACS has extensive experience managing hospitals, industrial plants, government offices, and large commercial complexes with dedicated teams for each facility type."
      },
      {
        question: "Does ACS provide housekeeping staff on a contract basis?",
        answer: "Yes. ACS provides housekeeping personnel on daily, weekly, monthly, or long-term contract basis, fully trained and supervised by our experienced managers."
      },
    ],
    image2: "/images/housekeeping.jpg",
    image3: "/images/facility-management-image.jpg",
  },
  "placement-services": {
    title: "Placement & Manpower Outsourcing Services",
    shortName: "Placement Services",
    heroImage: "/images/placement-service-slider.jpg",
    heroAlt: "ACS Placement and manpower outsourcing team",
    description: "ACS provides expert manpower outsourcing and placement services — connecting qualified candidates with corporates, industries, and government organizations across pan India.",
    longDescription: `The term "manpower outsourcing services" refers to a method in which our clients, small or large, collaborate with us to provide qualified candidates to perform assigned tasks for specific job positions.

Manpower is of primary importance in managing an organization as it drives a company's success and progress. The skills, knowledge, creativity, and flexibility of the personnel contribute directly to the competitiveness and high performance of the organization.

Advance Corporate Services plays an integral role in ensuring employers find the best person for the job. We ensure that candidates with specific skills, career goals, and qualities are selected for a position at the company. Generally, we work with companies and job seekers to connect qualified candidates with suitable employers.`,
    features: [
      "Skilled & Semi-Skilled Manpower Supply",
      "Blue Collar & White Collar Staffing",
      "Temporary & Permanent Placement",
      "Government Sector Manpower",
      "Hospital & Healthcare Staffing",
      "Industrial Labour Supply",
      "IT & Office Support Staffing",
      "Background Verification",
      "Payroll Management",
      "Compliance & EPF/ESI Management",
    ],
    faqs: [
      {
        question: "What industries does ACS provide placement services to?",
        answer: "ACS provides manpower to Government offices, Defence establishments, Hospitals, Industries, IT companies, Educational institutions, Retail, and Infrastructure projects across India."
      },
      {
        question: "Does ACS handle EPF and ESI for deployed manpower?",
        answer: "Yes. ACS handles all statutory compliance including EPF, ESI, Provident Fund contributions, and labour law requirements for all deployed personnel."
      },
      {
        question: "Can ACS provide manpower for short-term or project-based work?",
        answer: "Absolutely. ACS offers flexible deployment models — from short-term project staffing to long-term contractual placement, with full compliance management."
      },
    ],
    image2: "/images/placement-servicesw.jpg",
    image3: "/images/team.jpg",
  },
  horticulture: {
    title: "Horticulture Services",
    shortName: "Horticulture",
    heroImage: "/images/horticulture-slider.jpg",
    heroAlt: "ACS Horticulture and landscaping services",
    description: "ACS provides professional landscaping, garden and lawn design, grounds keeping, and farm development services for corporates, hospitals, and institutions across India.",
    longDescription: `Advance Corporate Services provides professional horticulture services designed to enhance the aesthetic value, functionality, and sustainability of your outdoor spaces.

Our team of skilled horticulture professionals delivers comprehensive landscaping, grounds management, and garden design services to corporate campuses, hospitals, educational institutions, and government establishments across India.

We combine practical expertise with creative vision to transform any outdoor area into a well-maintained, beautiful, and eco-friendly environment.`,
    features: [
      "Landscaping & Grounds Keeping",
      "Space Planning & Garden Design",
      "Lawn Development & Maintenance",
      "Development of Farms",
      "Tree Planting & Nursery Management",
      "Seasonal Flower Bed Design",
      "Irrigation System Installation",
      "Indoor Plant Management",
      "Roof Garden & Vertical Garden",
      "Organic Composting & Soil Management",
    ],
    faqs: [
      {
        question: "Does ACS provide horticulture services to corporate campuses?",
        answer: "Yes. ACS provides complete grounds keeping and landscaping services to corporate campuses, hospitals, government buildings, and industrial facilities across India."
      },
      {
        question: "Can ACS design a new garden or lawn from scratch?",
        answer: "Yes. ACS provides end-to-end horticulture services from initial space planning and design to implementation and ongoing maintenance of gardens, lawns, and outdoor spaces."
      },
      {
        question: "Does ACS handle farm development projects?",
        answer: "Yes. ACS provides farm development services including soil preparation, crop planning, irrigation setup, and ongoing farm management for institutional and corporate clients."
      },
    ],
    image2: "/images/horticulture.jpg",
    image3: "/images/our-vision.jpg",
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug as ServiceSlug];
  if (!data) return {};

  const title = `${data.title} | Advance Corporate Services`;
  const url = `${siteConfig.url}/services/${slug}`;

  return {
    title,
    description: data.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: data.description,
      url,
      images: [{ url: data.heroImage, width: 1200, height: 630, alt: data.heroAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = serviceData[slug as ServiceSlug];
  if (!data) notFound();

  const pageUrl = `${siteConfig.url}/services/${slug}`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: data.title, url: pageUrl },
  ];
  const faqSchema = buildFaqSchema(data.faqs);
  const serviceSchema = buildServiceSchema({ name: data.title, description: data.description, slug });

  // Cities for this service
  const serviceCities = siteConfig.cities.slice(0, 12);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-navy">
        <Image src={data.heroImage} alt={data.heroAlt} fill className="object-cover opacity-30" priority sizes="100vw" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" aria-hidden="true" />
        <div className="container-acs relative z-10 pb-8 md:pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold font-medium" aria-current="page">{data.title}</li>
            </ol>
          </nav>
          <h1 className="font-roboto font-900 text-white text-3xl md:text-5xl">{data.title}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">{data.longDescription}</p>

              {/* Features */}
              <h2 className="font-roboto font-bold text-navy text-2xl mb-6">
                What We <span className="text-gold">Offer</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {data.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-3 bg-off-white rounded-lg">
                    <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src={data.image2} alt={`${data.title} - service image`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src={data.image3} alt={`${data.title} - service work`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
                </div>
              </div>

              {/* FAQs */}
              <h2 className="font-roboto font-bold text-navy text-2xl mb-6">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Enquiry CTA */}
              <div className="bg-navy text-white rounded-lg p-6 sticky top-24">
                <h3 className="font-roboto font-bold text-white text-lg mb-2">Get a Free Quote</h3>
                <p className="text-gray-300 text-sm mb-4">Contact our team today for a customised {data.shortName} solution.</p>
                <Link href="/contact" className="btn-primary w-full justify-center mb-3 block text-center">
                  Request a Quote
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full justify-center block text-center">
                  Call Us Now
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400 space-y-2">
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> ISO 9001:2015 Certified</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> 25+ Years Experience</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> 24×7 Support</p>
                  <p className="flex items-center gap-2"><span className="text-gold">✓</span> Pan India Presence</p>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-off-white rounded-lg p-6">
                <h3 className="font-roboto font-bold text-navy text-base mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {siteConfig.services.filter((s) => s.slug !== slug).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-gray-700 text-sm hover:text-gold transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden="true" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="section-py bg-off-white" aria-labelledby={`${slug}-cities`}>
        <div className="container-acs">
          <div className="text-center mb-8">
            <p className="section-label">Pan India Coverage</p>
            <h2 id={`${slug}-cities`} className="text-navy">
              {data.shortName} Across <span className="text-gold">India</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${slug}/${city.slug}`}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
              >
                {data.shortName} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
