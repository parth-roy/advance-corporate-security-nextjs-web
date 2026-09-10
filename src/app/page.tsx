import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import HeroSlider from "@/components/home/HeroSlider";

export const metadata: Metadata = {
  title: "India's Trusted Security & Facility Management Company Since 2000",
  description:
    "Advance Corporate Services (ACS) — ISO 9001:2015 certified Security Guard Services, Facility Management, Manpower Outsourcing & Placement Services across pan India since 2000.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Advance Corporate Services | Security & Facility Management",
    description: "25+ years of trusted security and facility management services across pan India.",
    url: siteConfig.url,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

const homeFaqs = [
  {
    question: "What services does Advance Corporate Services provide?",
    answer:
      "Advance Corporate Services provides Security & Safety Services, Facility Management (housekeeping, janitorial, maintenance), Manpower Outsourcing & Placement Services, and Horticulture services across pan India.",
  },
  {
    question: "Is Advance Corporate Services ISO certified?",
    answer:
      "Yes. Advance Corporate Services is ISO 9001:2015 certified, ensuring the highest standards in service delivery, quality management, and customer satisfaction.",
  },
  {
    question: "How long has Advance Corporate Services been in operation?",
    answer:
      "Advance Corporate Services was founded in 2000 and has over 25 years of experience in the security and facility management industry across India.",
  },
  {
    question: "Does ACS provide security services across India?",
    answer:
      "Yes. ACS provides security guard services, surveillance, and facility management across major cities in India including Kolkata, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Patna, Bhubaneswar, and many more.",
  },
  {
    question: "Who are the major clients of Advance Corporate Services?",
    answer:
      "ACS serves government organizations (Indian Air Force, BSF, Defence Ministry), hospitals (ESI Hospital, BMRC), industrial companies (Bhushan Power & Steel, Indian Oil), and educational institutions (Kendriya Vidyalaya, NIELIT).",
  },
];

const clients = [
  "Indian Air Force",
  "BSF (Ministry of Home Affairs)",
  "Central Pollution Control Board",
  "Indian Oil Corporation Ltd.",
  "Bhushan Power & Steel",
  "BMRC Hospital",
  "ESI Hospital",
  "Kendriya Vidyalaya",
  "HAL Barrackpore",
  "CBEC",
  "Metro Railway",
  "NIELIT",
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

      {/* ===== HERO SLIDER SECTION ===== */}
      <HeroSlider />

      {/* ===== SERVICES GRID ===== */}
      <section className="section-py bg-white" aria-labelledby="services-heading">
        <div className="container-acs">
          <div className="text-center mb-12">
            <p className="section-label">What We Do</p>
            <h2 id="services-heading" className="text-navy">
              Our <span className="text-gold">Core Services</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From security guard deployment to complete facility management — we deliver trained, reliable, and disciplined workforce solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="font-roboto font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-gold text-sm font-medium group-hover:gap-2 transition-all">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="about-heading" className="text-navy mb-4">
                India&apos;s Trusted Manpower &amp; <span className="text-gold">Facility Management</span> Since 2000
              </h2>
              <div className="divider-gold" />
              <p className="text-gray-700 mt-4 leading-relaxed">
                Advance Corporate Services (ACS) is a professionally managed, <strong>ISO 9001:2015 certified</strong> Facility Management and Manpower Outsourcing company. From humble beginnings in Barrackpore, Kolkata, we have grown into one of Eastern India&apos;s most trusted names — delivering trained, disciplined, and reliable workforce solutions to corporates, industries, malls, hospitals, educational institutions, and government offices.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                With over <strong>25 years of operational excellence</strong>, a pan-India presence, and thousands of dedicated professionals deployed across multiple sectors, ACS stands for one promise — <strong className="text-navy">Quality Placement, 24/7.</strong>
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/about" className="btn-primary">Know More About Us</Link>
                <Link href="/clients" className="btn-navy">Our Clients</Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-[var(--shadow-card-hover)]">
                <Image
                  src="/images/about-us.jpg"
                  alt="About Advance Corporate Services — 25 years of service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy-dark font-roboto font-900 px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-black">25+</div>
                <div className="text-xs uppercase tracking-wider font-bold">Years of Excellence</div>
              </div>
              {/* ISO badge */}
              <div className="absolute -top-3 -right-3 bg-navy text-white font-roboto text-xs px-3 py-2 rounded-lg shadow-lg text-center">
                <div className="font-bold">ISO 9001:2015</div>
                <div className="text-gold text-xs">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-py bg-navy text-white" aria-labelledby="why-heading">
        <div className="container-acs">
          <div className="text-center mb-12">
            <p className="section-label">Why Choose ACS</p>
            <h2 id="why-heading" className="text-white">
              The <span className="text-gold">ACS Advantage</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "25+ Years Experience", desc: "Founded in 2000, we bring unmatched expertise to every contract across India.", icon: "🏆" },
              { title: "ISO 9001:2015 Certified", desc: "Certified quality management ensuring consistent, high-standard service delivery.", icon: "✅" },
              { title: "Government Empanelled", desc: "Validated by Central & State Government. Serving Air Force, BSF, Defence Ministry and more.", icon: "🏛️" },
              { title: "24×7 Operations", desc: "Round-the-clock deployment with night patrolling, CCTV monitoring, and emergency response.", icon: "🕐" },
              { title: "Trained Professionals", desc: "All personnel are specifically recruited, trained, and certified for client environments.", icon: "👮" },
              { title: "Pan India Presence", desc: "From Kolkata to Mumbai, Delhi to Chennai — we serve across all major Indian cities.", icon: "🗺️" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-roboto font-bold text-gold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section className="section-py bg-off-white" aria-labelledby="clients-heading">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Who We Serve</p>
            <h2 id="clients-heading" className="text-navy">
              Our <span className="text-gold">Trusted Clients</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm">
              Proudly serving Government bodies, Defence establishments, Hospitals, and Industries across India.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {clients.map((client) => (
              <span
                key={client}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm hover:border-gold hover:text-navy transition-all duration-200 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/clients" className="btn-primary">
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section-py bg-white" aria-labelledby="faq-heading">
        <div className="container-acs max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label">FAQs</p>
            <h2 id="faq-heading" className="text-navy">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-lg overflow-hidden"
              >
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
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="section-py text-center"
        style={{ background: "linear-gradient(135deg, var(--color-navy-dark), var(--color-navy-light))" }}
        aria-labelledby="cta-heading"
      >
        <div className="container-acs">
          <h2 id="cta-heading" className="text-white mb-4">
            Ready to Partner with <span className="text-gold">India&apos;s Best</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact our team today for a free consultation and customised manpower & facility management solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
