import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import HeroSection from "@/components/home/HeroSection";
import DynamicGeoFactBox from "@/components/home/DynamicGeoFactBox";
import DynamicHomeFaqs from "@/components/home/DynamicHomeFaqs";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "India's Trusted Security & Facility Management Company Since 2000",
  description:
    "Advance Corporate Security (ACS) — PSARA licensed, ISO 9001:2015 certified. Security Guard Services, Corporate Housekeeping, Manpower Outsourcing & Facility Management across pan India since 2000. Get free consultation.",
  keywords: [
    "PSARA licensed security services India",
    "corporate security guard agency India",
    "ISO 9001 facility management company India",
    "manpower outsourcing India",
    "security guard services India",
    "corporate housekeeping services India",
    "B2B security services India",
    "government empanelled security company",
    "Advance Corporate Security",
    "ACS security India",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Advance Corporate Security | PSARA Licensed Security & Facility Management",
    description: "25+ years of trusted PSARA-licensed security and ISO-certified facility management services across pan India. Serving Govt, Defence, Hospitals & Corporates.",
    url: siteConfig.url,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

const homeFaqs = [
  {
    question: "What services does Advance Corporate Security provide?",
    answer:
      "Advance Corporate Security (ACS) provides PSARA-licensed Security & Safety Services (security guards, armed guards, CCTV surveillance, night patrolling, fire fighting), Facility Management (corporate housekeeping, pest control, MEP maintenance, facade cleaning), Manpower Outsourcing & Placement Services, Payroll Compliance Management, and Horticulture & Landscaping — all delivered across pan India with full PF, ESIC, and labour law compliance.",
  },
  {
    question: "Is Advance Corporate Security PSARA licensed?",
    answer:
      "Yes. Advance Corporate Security holds a valid PSARA (Private Security Agencies Regulation Act) license issued by the Government of India. All our security personnel are licensed, background-verified, and trained per Ministry of Home Affairs standards. This makes ACS fully compliant for corporate, industrial, and government security deployments.",
  },
  {
    question: "Is ACS ISO 9001:2015 certified?",
    answer:
      "Yes. Advance Corporate Security is ISO 9001:2015 certified, ensuring internationally recognized quality management standards in all our service deliveries — from security guard deployment to corporate housekeeping and manpower outsourcing.",
  },
  {
    question: "Does ACS provide security and facility services across India?",
    answer:
      "Yes. ACS provides services across all major Indian cities including Kolkata, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Patna, Bhubaneswar, Ahmedabad, Pune, and 500+ other cities. We are one of Eastern India's most experienced B2B service companies with 25+ years of pan-India operations.",
  },
  {
    question: "Who are the major clients of Advance Corporate Security?",
    answer:
      "ACS proudly serves government organizations (Indian Air Force, BSF, Ministry of Defence, CPCB), PSUs (Indian Oil, HAL Barrackpore), hospitals (ESI Hospital, BMRC), educational institutions (Kendriya Vidyalaya, NIELIT), and major corporate and industrial clients across pan India.",
  },
  {
    question: "Does ACS handle PF, ESIC, and labour law compliance?",
    answer:
      "Absolutely. ACS assumes complete employer-of-record responsibility for all outsourced staff. We manage PF deposits, ESIC contributions, Minimum Wage Act compliance, Professional Tax, Bonus Act, and all other statutory obligations — giving client organizations zero legal exposure.",
  },
];

const whyACS = [
  { title: "PSARA Licensed", desc: "All security deployments strictly comply with the Private Security Agencies Regulation Act — India's gold standard for security firms.", icon: "🛡️" },
  { title: "25+ Years Experience", desc: "Founded in 2000, we bring unmatched expertise and a proven track record to every contract across India.", icon: "🏆" },
  { title: "ISO 9001:2015 Certified", desc: "Certified quality management ensuring consistent, high-standard service delivery in every city we operate.", icon: "✅" },
  { title: "Government Empanelled", desc: "Trusted by Central & State Government, Defence establishments (IAF, BSF), and PSUs across India.", icon: "🏛️" },
  { title: "24×7 Control Room", desc: "Round-the-clock deployment with night patrolling, CCTV monitoring, and emergency response teams.", icon: "🕐" },
  { title: "Full Statutory Compliance", desc: "Complete PF, ESIC, Minimum Wage, Contract Labour Act compliance — zero legal exposure for your organization.", icon: "📋" },
];

export default function HomePage() {
  const breadcrumbs = [{ name: "Home", url: siteConfig.url }];
  const faqSchema = buildFaqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      {/* ===== NEW HERO SECTION (replaces HeroSlider) ===== */}
      <HeroSection />

      {/* ===== DYNAMIC GEO FACT BOX (Hyper-local to Selected City) ===== */}
      <DynamicGeoFactBox />

      {/* ===== SERVICES GRID ===== */}
      <section className="section-py bg-white" aria-labelledby="services-heading">
        <div className="container-acs">
          <div className="text-center mb-6">
            <p className="section-label">What We Do</p>
            <h2 id="services-heading" className="text-navy">
              Our <span className="text-sky">Core Services</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
              From PSARA-licensed security guard deployment to complete integrated facility management — we deliver trained, compliant, and reliable workforce solutions across pan India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-acs group overflow-hidden block"
                aria-label={`Learn about ${service.name}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white font-roboto font-bold text-sm">{service.shortName}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-roboto font-bold text-navy text-base mb-2 group-hover:text-sky transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sky text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT STRIP ===== */}
      <section className="section-py bg-off-white" aria-labelledby="about-heading">
        <div className="container-acs">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="about-heading" className="text-navy mb-2.5">
                India&apos;s Trusted Manpower &amp; <span className="text-sky">Facility Management</span> Since 2000
              </h2>
              <div className="divider-sky" />
              <p className="text-gray-700 mt-2.5 leading-relaxed text-sm sm:text-base">
                Advance Corporate Security (ACS) is a professionally managed, <strong>PSARA-licensed</strong> and <strong>ISO 9001:2015 certified</strong> Facility Management and Manpower Outsourcing company. From humble beginnings in Barrackpore, Kolkata, we have grown into one of Eastern India&apos;s most trusted names — delivering trained, disciplined, and reliable workforce solutions to corporates, industries, malls, hospitals, educational institutions, and government offices.
              </p>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                With over <strong>25 years of operational excellence</strong>, a pan-India presence, and thousands of dedicated professionals deployed across multiple sectors, ACS stands for one promise — <strong className="text-navy">Quality Placement, 24/7.</strong>
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Link href="/about" className="btn-primary">Know More About Us</Link>
                <Link href="/clients" className="btn-navy">Our Clients</Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/welcome-to-our-website.jpg"
                  alt="About Advance Corporate Security — 25 years of security and facility management service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-gold text-navy-dark font-roboto font-900 px-5 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-black">25+</div>
                <div className="text-[10px] uppercase tracking-wider font-bold">Years of Excellence</div>
              </div>
              <div className="absolute -top-2.5 -right-2.5 bg-navy text-white font-roboto text-xs px-3 py-1.5 rounded-xl shadow-lg border border-white/20 text-center">
                <div className="font-bold text-sky-400 text-xs">ISO 9001:2015</div>
                <div className="text-gold text-[10px]">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-py bg-navy text-white" aria-labelledby="why-heading">
        <div className="container-acs">
          <div className="text-center mb-6">
            <p className="section-label-gold">Why Choose ACS</p>
            <h2 id="why-heading" className="text-white">
              The <span className="text-sky">ACS Advantage</span>
            </h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyACS.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5 hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                <h3 className="font-roboto font-bold text-sky-400 text-base mb-1.5">{item.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS MARQUEE (MetroMitra-Style Infinite Sliding Cards with Pause on Hover) ===== */}
      <ClientMarquee />

      {/* ===== DYNAMIC FAQ SECTION (Hyper-local to Selected City) ===== */}
      <DynamicHomeFaqs />

      {/* ===== CTA SECTION ===== */}
      <section
        className="section-py text-center"
        style={{ background: "linear-gradient(135deg, var(--color-navy-dark), var(--color-navy-light))" }}
        aria-labelledby="cta-heading"
      >
        <div className="container-acs">
          <h2 id="cta-heading" className="text-white mb-2.5">
            Ready to Partner with <span className="text-sky">India&apos;s Best</span>?
          </h2>
          <p className="text-gray-300 mb-5 max-w-xl mx-auto text-xs sm:text-sm">
            Contact our team today for a free consultation and customised security, facility management, or manpower outsourcing solution tailored to your business.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn-primary text-base px-6 py-3">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-base px-6 py-3">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}