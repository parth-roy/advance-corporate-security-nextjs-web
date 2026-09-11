import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "About Us — 25 Years of Trusted Security & Facility Management",
  description:
    "Learn about Advance Corporate Security (ACS) — founded in 2000, ISO 9001:2015 certified, and serving pan India with Security, Facility Management, and Manpower Outsourcing services.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "About Us", url: `${siteConfig.url}/about` },
  ];
  const webPageSchema = buildWebPageSchema({
    title: "About Advance Corporate Security | ACS",
    description: metadata.description as string,
    url: `${siteConfig.url}/about`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }} />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white pt-12 md:pt-16 pb-12 md:pb-16 relative overflow-hidden">
        {/* Subtle decorative glow & pattern */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />

        <div className="container-acs relative z-10">
          <div className="max-w-3xl mb-8">
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-400" role="list">
                <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li aria-hidden="true"><span>/</span></li>
                <li className="text-gold font-medium" aria-current="page">About Us</li>
              </ol>
            </nav>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge-gold">🎖️ Founded in 2000</span>
              <span className="badge-sky">🛡️ PSARA Licensed</span>
              <span className="badge-navy border border-white/20">✅ ISO 9001:2015</span>
            </div>

            <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3">
              About Advance Corporate Security
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              25 years of operational excellence delivering government-empanelled workforce outsourcing, PSARA-licensed security guards, and integrated facility management across 800+ cities pan India.
            </p>
          </div>

          {/* Panoramic Visual Banner Showcase — 100% Unclipped, Exact 1920:500 aspect ratio, White Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2 sm:p-3">
            <div className="relative w-full aspect-[1920/500] rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/about-us-header.jpg"
                alt="Advance Corporate Security Team — About Us"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-gold font-roboto font-black text-2xl sm:text-3xl">5,000+</div>
              <div className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">Deployed Staff</div>
            </div>
            <div>
              <div className="text-sky font-roboto font-black text-2xl sm:text-3xl">25+ Years</div>
              <div className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">Industry Track Record</div>
            </div>
            <div>
              <div className="text-white font-roboto font-black text-2xl sm:text-3xl">100%</div>
              <div className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">Statutory Compliant</div>
            </div>
            <div>
              <div className="text-gold font-roboto font-black text-2xl sm:text-3xl">800+ Cities</div>
              <div className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">Pan-India Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-py bg-white" id="about" aria-labelledby="about-heading">
        <div className="container-acs">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 id="about-heading" className="text-navy mb-4">One of the Best <span className="text-gold">Outsourcing & Facility Management</span> Companies in India</h2>
              <div className="divider-gold" />
              <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                <p>Advance Corporate Security is one of the best Outsourcing & Facility Management Company in pan India and is into manpower management services since inception in 2000. At Advance Corporate Security, we provide <strong>"one-stop innovative solutions"</strong> for the diverse requirements of the clients.</p>
                <p>Today after 25 years in this sector, we have created a niche and top-most spot to offer the best manpower and facility management service in India.</p>
                <p>Advance Corporate Security has grown to become one of the most reliable, recognized, and premier Manpower Outsourcing and Facility Management Companies not only in eastern India but at pan India level.</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label} className="bg-off-white rounded-lg p-4 text-center">
                    <div className="font-roboto font-900 text-gold text-2xl">{stat.value}</div>
                    <div className="text-gray-600 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/welcome-to-our-website.jpg"
                  alt="Advance Corporate Security staff during emergency response & fire safety training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-navy text-white font-roboto px-5 py-3.5 rounded-xl shadow-lg border border-white/15">
                <div className="text-gold text-xs uppercase font-bold tracking-wider">Since</div>
                <div className="font-black text-3xl">2000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section-py bg-off-white" aria-labelledby="mission-heading">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">Our Mission</p>
            <h2 id="mission-heading" className="text-navy">What <span className="text-gold">Drives Us</span></h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Deliver What We Promise", desc: "We deliver what we promise and only promise what we can deliver." },
              { title: "Honesty & Consistency", desc: "We value honesty and consistency in our words and actions." },
              { title: "Protecting Confidentiality", desc: "Protecting Confidentiality, Accessibility, and Integrity in all operations." },
              { title: "Value for Money", desc: "To give our clients complete value for money and peace of mind." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] border-l-4 border-gold">
                <h3 className="font-roboto font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="section-py bg-navy text-white" aria-labelledby="vision-heading">
        <div className="container-acs max-w-4xl text-center">
          <p className="section-label">Our Vision</p>
          <h2 id="vision-heading" className="text-white mb-6">Where We <span className="text-gold">Are Headed</span></h2>
          <div className="divider-gold mx-auto mb-8" />
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              "To be the most valued and respected Manpower Outsourcing & Facility Management Company in pan India.",
              "To ensure that we deliver best of the services and meet our clients' expectations at every step.",
              "To make our clients and our employees feel secure with us — building long-term trust and relationships.",
            ].map((vision, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-gold font-roboto font-black text-3xl mb-3">0{i + 1}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{vision}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section-py bg-white" aria-labelledby="values-heading">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">Core Values</p>
            <h2 id="values-heading" className="text-navy">The <span className="text-gold">Principles</span> We Live By</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Trust", "Ethics", "People Centric – Staff & Clients", "Lawfulness", "Service Spirit", "Continuous Improvement & Upgradation"].map((value) => (
              <span key={value} className="bg-off-white border border-gold/30 text-navy font-roboto font-600 text-sm px-5 py-3 rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-200">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* From the Desk of Founder */}
      <section id="founder" className="section-py bg-off-white" aria-labelledby="founder-heading">
        <div className="container-acs">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 bg-slate-50">
                <Image
                  src="/images/jai-gopal.jpg"
                  alt="Mr. Jai Gopal — Founder & Managing Director, Advance Corporate Security"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-roboto font-bold text-navy text-base">Mr. Jai Gopal</p>
                <p className="text-gold font-semibold text-xs uppercase tracking-wider">Founder &amp; Managing Director</p>
                <p className="text-gray-500 text-xs mt-0.5">Advance Corporate Security</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="section-label">From The Desk Of Founder</p>
              <h2 id="founder-heading" className="text-navy mb-4">A Message From <span className="text-gold">Our Leader</span></h2>
              <div className="divider-gold" />
              <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg italic text-gray-500">"Dear Friends,"</p>
                <p>We introduce ourselves as a professionally managed and scientifically organized Facility Management Services Provider. Since its inception in 2000, Advance Corporate Security has been a name to reckon with in the outsourcing industry within a short period.</p>
                <p>From a very humble beginning, the company has grown today to become one of the most reliable, recognized, and premier Manpower Outsourcing and Facility Management companies not only in eastern India but in pan India level.</p>
                <p>We have made organizational growth in various sectors by providing intelligence/surveillance, fire fighting, and janitorial services in addition to security services. Today with 25 years of experience, we are providing Trained Workforce to organizations in various ranks and levels as per their requirement.</p>
                <p>Our dedicated workforce is not only ranked No. 1 in reliability, ethics, speed of response, and adherence to rules and procedures but are also specifically recruited and trained to work in clients&apos; environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="section-py bg-white" aria-labelledby="team-heading">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Our Team</p>
            <h2 id="team-heading" className="text-navy">Together We Achieve the <span className="text-gold">Extraordinary</span></h2>
            <div className="divider-gold mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Advance Corporate Security is committed to providing the best outsourcing & facility management services in India with a strong team working 24×7. Our team of extremely knowledgeable and qualified managers always create tailor-made pre-determined plans to conquer any requirements of the clients.
            </p>
          </div>
          <div className="relative w-full aspect-[1920/500] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
            <Image
              src="/images/team.jpg"
              alt="Advance Corporate Security Deployed Guard Squad on Duty"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent text-white text-center">
              <p className="font-roboto font-bold text-xs sm:text-sm md:text-base text-gold">5,000+ Trained Professionals Deployed Across Pan-India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Esteemed Clients Marquee */}
      <ClientMarquee bgClass="bg-off-white" />

      {/* CTA */}
      <section className="section-py bg-navy text-white text-center">
        <div className="container-acs">
          <h2 className="text-white mb-4">Ready to Work with <span className="text-gold">India&apos;s Best?</span></h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Partner with ACS today for reliable, ISO-certified security and facility management services across India.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Consultation</Link>
            <Link href="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
