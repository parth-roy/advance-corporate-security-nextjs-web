import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import HeroSection from "@/components/home/HeroSection";
import DynamicGeoFactBox from "@/components/home/DynamicGeoFactBox";
import CoreServicesAccordionGrid from "@/components/home/CoreServicesAccordionGrid";
import IntegratedSolutionsSection from "@/components/home/IntegratedSolutionsSection";
import CorporateTrustSuite from "@/components/home/CorporateTrustSuite";
import DynamicHomeFaqs from "@/components/home/DynamicHomeFaqs";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Certified Corporate Security & Facility Management in Eastern India & NCR",
  description:
    "Advance Corporate Security (ACS) — PSARA Licensed in West Bengal, Delhi, Jharkhand with nationwide deployment. ISO 9001:2015 certified. Security Guard Services, Corporate Housekeeping, Manpower Outsourcing across Eastern India, NCR & 500+ cities. Get free consultation.",
  keywords: [
    "security guards",
    "facilities management",
    "security guard company",
    "facility management services",
    "building maintenance company",
    "facility maintenance company",
    "corporate security",
    "facility management company",
    "business security companies",
    "iso facility management",
    "PSARA licensed security services India",
    "Advance Corporate Security",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Advance Corporate Security | PSARA Licensed Security & Facility Management",
    description: "25+ years of trusted PSARA-licensed security and ISO-certified facility management services across Eastern India, NCR & 500+ cities. Serving Govt, Defence, Hospitals & Corporates.",
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
      "Yes. Advance Corporate Security holds valid PSARA licenses in West Bengal, Delhi, Jharkhand and other key states, issued by the respective State Governments as per the Private Security Agencies Regulation Act. All our security personnel are licensed, background-verified, and trained per Ministry of Home Affairs standards — with operational reach across 500+ Indian cities through our state-wise compliance framework.",
  },
  {
    question: "Is ACS ISO 9001:2015 certified?",
    answer:
      "Yes. Advance Corporate Security is ISO 9001:2015 certified, ensuring internationally recognized quality management standards in all our service deliveries — from security guard deployment to corporate housekeeping and manpower outsourcing.",
  },
  {
    question: "Does ACS provide security and facility services across India?",
    answer:
      "ACS provides services across all major Indian cities including Kolkata, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Patna, Bhubaneswar, Ahmedabad, Pune, and 500+ other cities. We hold PSARA licenses in key states with full deployment capability and statutory compliance across India.",
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

      {/* ===== CORE SERVICES ACCORDION GRID (Commented out per user request) ===== */}
      {/* <CoreServicesAccordionGrid /> */}

      {/* ===== INTEGRATED SOLUTIONS SECTION (Image 2 Design: Our Services) ===== */}
      <IntegratedSolutionsSection />

      {/* ===== CORPORATE TRUST & SOLUTIONS SUITE (Image 2 Design: Why Choose -> Industries -> Trusted Orgs -> Process -> CTA Banner) ===== */}
      <CorporateTrustSuite />

      {/* ===== ABOUT STRIP (Commented out per user request) ===== */}
      {/*
      <section className="section-py bg-off-white" aria-labelledby="about-heading">
        <div className="container-acs">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="about-heading" className="text-navy mb-2.5">
                India&apos;s Trusted <span className="text-sky">Security Guard Company</span> &amp; Facility Management Company
              </h2>
              <div className="divider-sky" />
              <p className="text-gray-700 mt-2.5 leading-relaxed text-sm sm:text-base">
                Advance Corporate Security (ACS) is a professionally managed, <strong>PSARA-licensed</strong> and <strong>ISO 9001:2015 certified</strong> Facility Management and Manpower Outsourcing company. From humble beginnings in Barrackpore, Kolkata, we have grown into one of Eastern India&apos;s most trusted names — delivering trained, disciplined, and reliable workforce solutions to corporates, industries, malls, hospitals, educational institutions, and government offices.
              </p>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                With over <strong>25 years of operational excellence</strong>, a verified multi-state presence and thousands of dedicated professionals deployed across multiple sectors, ACS stands for one promise — <strong className="text-navy">Quality Placement, 24/7.</strong>
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
      */}



      {/* ===== CLIENTS MARQUEE (Moved right after Industries We Serve per user request) ===== */}
      {/* <ClientMarquee /> */}

      {/* ===== DYNAMIC FAQ SECTION (Hyper-local to Selected City) ===== */}
      <DynamicHomeFaqs />


    </>
  );
}