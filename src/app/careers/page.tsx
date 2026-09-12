import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";
import CareersForm from "@/components/careers/CareersForm";

export const metadata: Metadata = {
  title: "Careers & Future Opportunities | Advance Corporate Security (ACS)",
  description:
    "Explore career opportunities with Advance Corporate Security (ACS). Register your profile with our talent database for upcoming security guard, supervisor, and facility management deployments across India.",
  alternates: { canonical: `${siteConfig.url}/careers` },
};

const PERKS = [
  {
    icon: "💰",
    title: "100% On-Time Salary",
    desc: "Fixed monthly salary credited directly to your bank account with complete transparency.",
  },
  {
    icon: "🛡️",
    title: "Full Statutory Benefits",
    desc: "100% EPF (Provident Fund), ESIC medical cover, gratuity, statutory bonus & paid leaves.",
  },
  {
    icon: "👔",
    title: "Free Uniform & Gear",
    desc: "High-grade tactical uniforms, boots, belts, badges, lanyards & safety gear provided free.",
  },
  {
    icon: "🏥",
    title: "Accidental Insurance",
    desc: "Group accidental insurance coverage provided from Day 1 of deployment for your family's safety.",
  },
  {
    icon: "🎖️",
    title: "Ex-Servicemen Privilege",
    desc: "Higher starting grade, supervisory tracks, and priority posting for Defence & CAPF veterans.",
  },
  {
    icon: "📈",
    title: "Fast Career Promotion",
    desc: "Dedicated internal promotions from Security Guard to Head Guard, Supervisor, and Area Field Officer.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Profile Registration",
    desc: "Submit your basic details online or send your bio-data directly to our recruitment team via WhatsApp.",
  },
  {
    step: "02",
    title: "Document & Background Verification",
    desc: "Physical verification, police background verification, and identity documentation review.",
  },
  {
    step: "03",
    title: "PSARA Training & Conditioning",
    desc: "Undergo professional fire safety, emergency response, unarmed combat, and hospitality etiquette drills.",
  },
  {
    step: "04",
    title: "Client Site Deployment",
    desc: "Receive uniform, equipment kit, and official deployment letter upon contract onboarding.",
  },
];

export default function CareersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Careers", url: `${siteConfig.url}/careers` },
  ];

  const webPageSchema = buildWebPageSchema({
    title: "Careers & Talent Opportunities | Advance Corporate Security",
    description: metadata.description as string,
    url: `${siteConfig.url}/careers`,
  });

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
              <li className="text-gold font-medium" aria-current="page">Careers</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 badge-gold mb-3">
            <span>💼</span>
            <span>Join India&apos;s Trusted Security & Facility Force</span>
          </div>
          <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            Careers & <span className="text-sky">Talent Opportunities</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Advance Corporate Security offers stable employment, 100% statutory PF & ESIC benefits, timely bank payouts, and guaranteed career advancement across 580+ cities in India.
          </p>
        </div>
      </section>

      {/* Status: No Current Openings Notice */}
      <section className="section-py bg-off-white" aria-labelledby="status-heading">
        <div className="container-acs">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xs text-center">
              <div className="w-16 h-16 bg-sky-50 text-sky rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl">
                📢
              </div>
              <span className="badge-sky text-xs font-semibold mb-3 inline-block">
                Recruitment Status
              </span>
              <h2 id="status-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl mb-3">
                No Active Openings Currently
              </h2>
              <div className="divider-sky mx-auto" />
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
                All operational security, supervisory, and facility management positions across our client deployments are currently fulfilled.
              </p>

              <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5 max-w-2xl mx-auto mb-8 text-left text-xs sm:text-sm text-gray-700 space-y-2">
                <p className="font-semibold text-navy flex items-center gap-2">
                  <span className="text-sky text-base">💡</span> Join Our Talent Pipeline
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We regularly recruit personnel as new government, PSU, and corporate contracts are launched. You can register your profile below or submit your resume directly to our recruitment team via WhatsApp. When a vacancy arises in your preferred city, talent pool candidates are given first priority.
                </p>
              </div>

              <a
                href="#profile-form"
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md text-sm inline-flex items-center gap-2"
              >
                Register Your Profile Below ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with ACS */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Employee Welfare</p>
            <h2 className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl">
              Why Work With <span className="text-sky">Advance Corporate Security?</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
              We treat our guards and field staff as our frontline ambassadors with industry-leading benefits, dignifying work conditions, and complete statutory protection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="bg-off-white rounded-2xl p-6 border border-gray-200/80 hover:border-sky/40 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h3 className="font-roboto font-bold text-navy text-lg mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Registration Form & HR Helplines */}
      <section id="profile-form" className="section-py bg-off-white">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Talent Pipeline</p>
            <h2 className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl">
              Register for <span className="text-sky">Future Deployments</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
              Submit your credentials to our recruitment database. Our HR team will reach out directly when openings arise in your region.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <CareersForm />
            </div>

            {/* Recruitment Helplines */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs">
                <h4 className="font-roboto font-bold text-navy text-lg mb-3">
                  Direct HR Recruitment Cell
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                  Have questions about upcoming recruitment drives or eligibility criteria? Contact our recruitment officers directly.
                </p>

                <div className="space-y-3 text-sm">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2.5 text-navy hover:text-sky font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`https://wa.me/919339988999?text=${encodeURIComponent("Hello ACS HR, I want to inquire about upcoming security/facility job opportunities.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    <span>💬</span> WhatsApp HR: +91 93399 88999
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-gray-600 hover:text-sky text-xs transition-colors break-all"
                  >
                    <svg className="w-4 h-4 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Ex-Servicemen Privilege Card */}
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-white border border-white/10 shadow-md">
                <div className="flex items-center gap-2 text-gold font-bold text-sm mb-2">
                  <span>🎖️</span> Special Veteran Track
                </div>
                <h4 className="font-roboto font-bold text-white text-base mb-2">
                  Ex-Servicemen & Defence Personnel
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  Army, Navy, Air Force, and Paramilitary veterans receive priority supervisory placement, enhanced allowances, and choice of central government / PSU postings.
                </p>
                <div className="text-xs text-sky font-semibold">
                  Direct Veteran Desk: +91 93399 88999
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Process */}
          <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="badge-gold text-xs mb-2 inline-block">Standard Onboarding</span>
              <h3 className="font-roboto font-black text-2xl sm:text-3xl text-white">
                Our 4-Step Onboarding Process
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((s) => (
                <div key={s.step} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="text-gold font-roboto font-black text-2xl mb-2">
                    {s.step}
                  </div>
                  <h4 className="font-roboto font-bold text-white text-base mb-2">
                    {s.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
