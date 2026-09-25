import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { EnterpriseQuotationForm, FreeSiteAuditForm } from "@/components/forms/QuotationForm";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Request Security Guard Quotation | ACS — Get Quote in 24 Hours",
  description:
    "Get a custom quote for PSARA-licensed security guards, facility management & manpower services. Specify manpower count, shift type & location. 24-hour turnaround guaranteed.",
  alternates: { canonical: `${siteConfig.url}/quote` },
  openGraph: {
    title: "Request Security Guard Quotation | ACS — Get Quote in 24 Hours",
    description:
      "Get a custom quote for PSARA-licensed security guards, facility management & manpower services. 24-hour turnaround guaranteed.",
    url: `${siteConfig.url}/quote`,
    siteName: siteConfig.name,
    type: "website",
  },
};

// ─── Trust Signals Data ───────────────────────────────────────────────────────

const trustSignals = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "24-Hour Quote Turnaround",
    sublabel: "Guaranteed response",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "PSARA Licensed",
    sublabel: "West Bengal, Delhi & Jharkhand",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: "ISO 9001:2015 Certified",
    sublabel: "Internationally recognised",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "25+ Years Experience",
    sublabel: "In operation since 2000",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Trusted by IAF, BSF, CPCB",
    sublabel: "Indian Oil & top PSUs",
  },
];

// ─── Quote Page (Server Component) ───────────────────────────────────────────

export default function QuotePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-sky/5 rounded-full blur-3xl" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="container-acs relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-gray-600">/</span>
              </li>
              <li className="text-gold" aria-current="page">
                Request a Quote
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-roboto font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              Get Your Custom Quote in 24 Hours
            </div>

            <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              Enterprise Security &amp; Facility{" "}
              <span className="text-gold">Quotation Request</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Tell us your manpower requirements, service type, and location — our operations team
              will deliver a tailored, PSARA-compliant quotation directly to your inbox or phone
              within <strong className="text-white">24 hours</strong>.
            </p>

            {/* Trust signal pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "⚡ 24-Hr Turnaround",
                "🛡️ PSARA Licensed",
                "✅ ISO 9001:2015",
                "🏛️ Trusted by IAF & BSF",
              ].map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center text-xs font-semibold bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Quote Section ── */}
      <section className="section-py bg-slate-50">
        <div className="container-acs">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-14 items-start">

            {/* ── Left Column: Form ── */}
            <div className="lg:col-span-3">
              {/* Form Card */}
              <div className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(11,31,63,0.10)] border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-navy to-navy-light px-6 py-5 sm:px-8 sm:py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-roboto font-black text-white text-lg sm:text-xl leading-tight">
                        Enterprise Quotation Form
                      </h2>
                      <p className="text-gold text-xs font-medium mt-0.5">
                        All required fields marked <span className="text-red-400 font-bold">*</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 sm:p-8">
                  <EnterpriseQuotationForm />
                </div>
              </div>

              {/* Direct contact fallback */}
              <div className="mt-4 p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-sky shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Prefer to speak directly?{" "}
                  <a href="tel:+919339988999" className="text-navy font-bold hover:text-gold transition-colors">
                    +91 93399 88999
                  </a>{" "}
                  or{" "}
                  <a
                    href={`https://wa.me/919339988999?text=${encodeURIComponent("Hello ACS, I need a security guard quotation for my organisation. Please assist.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:text-emerald-900 transition-colors"
                  >
                    WhatsApp us instantly
                  </a>
                  . Our ops team is available 24×7.
                </p>
              </div>
            </div>

            {/* ── Right Column: Trust Signals + Info ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why ACS Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(11,31,63,0.08)] overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <p className="section-label-gold">Why ACS</p>
                  <h2 className="font-roboto font-black text-navy text-lg leading-tight">
                    India&apos;s Trusted Security Partner
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {trustSignals.map((signal) => (
                    <div key={signal.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold shrink-0">
                        {signal.icon}
                      </div>
                      <div>
                        <p className="font-roboto font-bold text-navy text-sm">{signal.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{signal.sublabel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-roboto font-bold text-white text-base mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Happens Next
                </h3>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "We receive your quotation request and assign a dedicated account manager." },
                    { step: "2", text: "Our operations team analyses your manpower, shift, and location requirements." },
                    { step: "3", text: "A detailed, PSARA-compliant quote is prepared — including all statutory costs." },
                    { step: "4", text: "You receive the quote via phone call and email within 24 hours." },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-gold text-navy-dark text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {step}
                      </span>
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Notable Clients */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(11,31,63,0.08)] p-6">
                <p className="text-xs font-roboto font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Trusted by India&apos;s Finest
                </p>
                <div className="flex flex-wrap gap-2">
                  {["IAF", "BSF", "CPCB", "Indian Oil", "NHPC", "WBSEDCL", "RITES"].map((client) => (
                    <span
                      key={client}
                      className="inline-block text-xs font-bold bg-navy/5 border border-navy/10 text-navy px-3 py-1.5 rounded-lg"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Emergency CTA */}
              <a
                href="tel:+919339988999"
                className="flex items-center justify-between p-5 bg-gradient-to-r from-gold to-gold-light rounded-2xl shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div>
                  <p className="font-roboto font-black text-navy-dark text-base">Need Urgent Security?</p>
                  <p className="text-navy-dark/70 text-xs mt-0.5">Call our 24×7 operations hotline</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-roboto font-black text-navy-dark text-sm">+91 93399 88999</span>
                  <svg className="w-5 h-5 text-navy-dark group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Security Site Audit Section ── */}
      <section className="section-py bg-white border-t border-gray-100">
        <div className="container-acs">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <p className="section-label">Complimentary Service</p>
              <h2 className="text-navy mb-3">
                Free Security{" "}
                <span className="text-gold">Site Audit</span>
              </h2>
              <div className="divider-gold mx-auto mb-4" />
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Not sure what security setup your premises require? Our certified security consultants
                will visit your site at <strong>no cost</strong> and recommend the optimal manpower
                configuration, CCTV placement, and access control strategy.
              </p>
            </div>

            {/* Audit Highlights */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: "🔍",
                  title: "Risk Assessment",
                  desc: "Identify physical and operational security vulnerabilities at your premises.",
                },
                {
                  icon: "👮",
                  title: "Manpower Optimisation",
                  desc: "Right-size your guard deployment — no overstaffing, no coverage gaps.",
                },
                {
                  icon: "📋",
                  title: "Compliance Check",
                  desc: "Ensure your security setup meets PSARA, labour law, and ISO standards.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-slate-50 border border-gray-100 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-roboto font-bold text-navy text-base mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Audit Form Card */}
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 sm:p-10 shadow-xl shadow-navy/20">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-roboto font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                    🔒 100% Free — No Obligation
                  </div>
                  <h3 className="font-roboto font-black text-white text-xl sm:text-2xl">
                    Schedule Your Free Security Audit
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    Fill in your details below — our consultant will contact you within 24 hours.
                  </p>
                </div>

                {/* White form container */}
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <FreeSiteAuditForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section (SEO-rich) ── */}
      <section className="section-py bg-slate-50 border-t border-gray-100">
        <div className="container-acs">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="section-label">Frequently Asked</p>
              <h2 className="text-navy">
                Quotation{" "}
                <span className="text-gold">FAQs</span>
              </h2>
              <div className="divider-gold mx-auto" />
            </div>

            <dl className="space-y-4">
              {[
                {
                  q: "How quickly will I receive the security guard quotation?",
                  a: "ACS guarantees a detailed, PSARA-compliant quotation within 24 hours of form submission on all working days. For urgent or emergency deployments, please call our hotline directly at +91 93399 88999 for same-day pricing.",
                },
                {
                  q: "Does the quote include statutory costs like PF, ESIC, and bonus?",
                  a: "Yes. All ACS quotations are fully transparent and include Provident Fund (PF), ESIC, Bonus, Gratuity, Minimum Wages as per the applicable State schedule, and PSARA compliance costs. We have no hidden charges.",
                },
                {
                  q: "What is the minimum contract duration for security guard services?",
                  a: "ACS offers contracts starting from as short as 1 month (suitable for events or short-term project requirements). Long-term contracts (1 year+) come with priority pricing and dedicated account management.",
                },
                {
                  q: "Are your security guards trained and verified?",
                  a: "All ACS security personnel are background-verified, Aadhaar-linked, and trained at our own facility in Barrackpore, West Bengal. We provide ex-servicemen for high-security deployments upon request.",
                },
                {
                  q: "Can ACS provide armed guards for high-risk sites?",
                  a: "Yes. ACS provides licensed armed guards (gunmen) for high-value facilities, cash-in-transit, and high-risk industrial sites, subject to applicable state regulations and client-specific licensing requirements.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <dt className="font-roboto font-bold text-navy text-sm sm:text-base mb-2">{q}</dt>
                  <dd className="text-gray-600 text-sm leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-3">Have more questions?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="tel:+919339988999" className="btn-primary">
                  📞 Call +91 93399 88999
                </a>
                <Link href="/contact" className="btn-secondary text-navy border-navy hover:bg-navy hover:text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
