// src/app/services/page.tsx
// Services hub — all 4 parent categories + all 17 sub-services
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ACS_SERVICE_CATEGORIES } from "@/lib/services";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "All Services | Security, Facility Management & Manpower | ACS",
  description:
    "Explore all Advance Corporate Security offerings — PSARA-licensed security guards, facility management, manpower outsourcing, pest control, MEP maintenance, fire fighting, horticulture across pan India.",
  keywords: [
    "corporate security services India",
    "facility management company India",
    "manpower outsourcing India",
    "PSARA licensed security agency",
    "ISO 9001 facility management",
  ],
  alternates: { canonical: `${siteConfig.url}/services` },
};

const serviceFaqs = [
  { question: "Does ACS provide all services pan India?", answer: "Yes. ACS provides security, facility management, manpower outsourcing, and horticulture services across all major cities in India — from Mumbai, Delhi, and Bengaluru to smaller tier-2 and tier-3 cities. Contact us for your city." },
  { question: "Can ACS handle integrated facility management contracts?", answer: "Absolutely. ACS specializes in integrated facility management contracts combining security, housekeeping, MEP maintenance, pest control, and horticulture under a single service agreement — simplifying vendor management for your organization." },
  { question: "Are all ACS services PF and ESIC compliant?", answer: "Yes. ACS assumes complete employer-of-record responsibility for all outsourced staff. We manage PF deposits, ESIC contributions, Minimum Wage Act compliance, Professional Tax, and Bonus Act for all personnel." },
];

export default function ServicesHubPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
  ];
  const faqSchema = buildFaqSchema(serviceFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16">
        <div className="container-acs">
          <span className="badge-sky mb-4 inline-block">🏢 All Services</span>
          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl leading-tight mb-4">
            PSARA Licensed Security &amp; Facility Management Services
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl">
            17 specialized B2B services. ISO 9001:2015 certified. Deployed pan India with full PF, ESIC &amp; statutory compliance.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {ACS_SERVICE_CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="card-acs p-6 group">
                <div className="text-3xl mb-3" aria-hidden="true">{cat.icon}</div>
                <h2 className="font-roboto font-bold text-navy text-lg mb-2 group-hover:text-sky transition-colors">{cat.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sky text-sm font-medium">View Services →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mb-10">
            <p className="section-label">All Sub-Services</p>
            <h2 className="text-navy">Complete Service Catalog</h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="p-5 border border-gray-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{service.icon}</span>
                  <div>
                    <div className="font-roboto font-bold text-navy text-sm group-hover:text-sky transition-colors">{service.name}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{service.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Marquee */}
      <ClientMarquee bgClass="bg-white" />

      <section className="section-py bg-off-white">
        <div className="container-acs max-w-3xl">
          <div className="text-center mb-8">
            <p className="section-label">FAQs</p>
            <h2 className="text-navy text-2xl font-roboto font-bold">Common Questions About ACS Services</h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="space-y-4">
            {serviceFaqs.map((faq, i) => (
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

      <section className="py-10 bg-navy text-white text-center">
        <div className="container-acs">
          <h2 className="text-white font-roboto font-bold text-2xl mb-3">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm">Get a free consultation. Our team responds within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Security Audit</Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary">📞 {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}