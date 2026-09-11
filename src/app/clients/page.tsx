import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ACS_CLIENTS } from "@/lib/clients";
import ClientMarquee from "@/components/common/ClientMarquee";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Trusted Clients & Partners | Advance Corporate Security (ACS)",
  description:
    "Explore the esteemed client portfolio of Advance Corporate Security (ACS). Trusted by the Indian Air Force, Indian Navy, HAL, CPCB, ICMR, BSNL, Kendriya Vidyalaya, and leading industries across India.",
  alternates: { canonical: `${siteConfig.url}/clients` },
};

export default function ClientsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Our Clients", url: `${siteConfig.url}/clients` },
  ];

  const webPageSchema = buildWebPageSchema({
    title: "Our Clients & Partners | Advance Corporate Security",
    description: metadata.description as string,
    url: `${siteConfig.url}/clients`,
  });

  const categories = [
    "Defence & Armed Forces",
    "Govt & Ministries",
    "PSUs & Statutory Bodies",
    "Corporate & Industry",
  ] as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-light text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold font-medium" aria-current="page">Our Clients</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 badge-gold mb-3">
            <span>🎖️</span>
            <span>25+ Years of Proven Trust</span>
          </div>
          <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            Trusted by India&apos;s <span className="text-sky">Most Prestigious</span> Establishments
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            From high-security Defence installations and Central Ministries to premier PSUs and Fortune 500 manufacturing plants — ACS delivers unwavering reliability, statutory compliance, and operational excellence.
          </p>
        </div>
      </section>

      {/* Infinite Animated Marquee Showcase */}
      <ClientMarquee
        showHeading={false}
        bgClass="bg-white border-b border-gray-100"
        showCta={false}
      />

      {/* Categorized Client Portfolio Grid */}
      <section className="section-py bg-off-white" aria-labelledby="portfolio-heading">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Client Directory</p>
            <h2 id="portfolio-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl">
              Comprehensive <span className="text-sky">Client Portfolio</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
              A selected showcase of government bodies, defence establishments, public sector units, and industrial leaders who rely on ACS for security, facility management, and workforce outsourcing.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((cat) => {
              const clientList = ACS_CLIENTS.filter((c) => c.category === cat);
              return (
                <div key={cat} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-8 bg-gold rounded-full" />
                      <h3 className="font-roboto font-bold text-navy text-lg sm:text-xl">{cat}</h3>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {clientList.length} Esteemed Partners
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {clientList.map((client) => (
                      <div
                        key={client.id}
                        className="bg-slate-50/60 rounded-xl p-4 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div className="w-full h-20 bg-white rounded-lg p-3 flex items-center justify-center border border-slate-100 mb-3 group-hover:border-sky-100 transition-colors">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={client.logo}
                            alt={client.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div>
                          <span className="inline-block text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full mb-1 border border-sky-100">
                            {client.tag}
                          </span>
                          <h4 className="font-roboto font-bold text-navy text-sm leading-snug line-clamp-1 group-hover:text-sky transition-colors">
                            {client.shortName}
                          </h4>
                          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-2">
                            {client.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Compliance Credentials */}
      <section className="section-py bg-white" aria-labelledby="credentials-heading">
        <div className="container-acs">
          <div className="text-center mb-8">
            <p className="section-label">Why Establishments Trust ACS</p>
            <h2 id="credentials-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl">
              Rigorous Standards. <span className="text-sky">Zero Compromise.</span>
            </h2>
            <div className="divider-sky mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🛡️",
                title: "PSARA Compliance",
                desc: "Fully licensed under the Private Security Agencies (Regulation) Act across pan-India jurisdictions.",
              },
              {
                icon: "📜",
                title: "ISO 9001:2015",
                desc: "Strict quality management SOPs covering recruitment, training, supervision, and incident reporting.",
              },
              {
                icon: "⚖️",
                title: "Statutory Immunity",
                desc: "100% adherence to PF, ESIC, Minimum Wages Act, Bonus Act, and statutory documentation.",
              },
              {
                icon: "🚨",
                title: "24x7 Control Room",
                desc: "Dedicated emergency response and continuous supervisor field inspections for rapid incident handling.",
              },
            ].map((cred) => (
              <div
                key={cred.title}
                className="bg-off-white rounded-xl p-5 border border-gray-200/80 hover:border-sky-300 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{cred.icon}</div>
                <h3 className="font-roboto font-bold text-navy text-base mb-1">{cred.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Consultation CTA */}
      <section className="section-py bg-gradient-to-r from-navy-dark via-navy to-navy-light text-white text-center">
        <div className="container-acs max-w-3xl">
          <span className="badge-gold mb-3 inline-block">Get Enterprise Support</span>
          <h2 className="text-white font-roboto font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            Ready to Protect &amp; Manage Your Facility?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed max-w-xl mx-auto">
            Schedule an on-site security audit or facility assessment with our senior operations specialists. Tailored proposals delivered within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn-primary text-sm px-6 py-3">
              Request Site Assessment
            </Link>
            <a href="tel:+919477006681" className="btn-secondary text-sm px-6 py-3">
              Call: +91 94770 06681
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
