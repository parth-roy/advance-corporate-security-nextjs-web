import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import CityMap from "@/components/common/CityMap";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote for Security & Facility Management",
  description: "Contact Advance Corporate Services (ACS) for professional security guard services, facility management, and manpower outsourcing. Get a free consultation today.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Contact Us", url: `${siteConfig.url}/contact` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container-acs">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className="font-roboto font-900 text-white text-3xl md:text-5xl mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-gray-300 max-w-xl">
            Reach out to our team for a free consultation and customised security or facility management solution for your organisation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <p className="section-label">Send a Message</p>
              <h2 className="text-navy mb-6">Get a <span className="text-gold">Free Quote</span></h2>
              <div className="divider-gold mb-8" />
              <form
                id="contact-form"
                action={`${siteConfig.apiUrl}/api/contact`}
                method="POST"
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="your@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Organisation / Company
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    autoComplete="organization"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Company or Organisation name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {siteConfig.services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                    City / Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="City where service is required"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Describe your requirements in detail..."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We will respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="text-navy mb-6">Our <span className="text-gold">Contact Details</span></h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-off-white rounded-lg">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-navy text-sm mb-1">Head Office</h3>
                    <address className="not-italic text-gray-600 text-sm">
                      {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},<br />
                      {siteConfig.address.addressRegion} — {siteConfig.address.postalCode}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-off-white rounded-lg">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-navy text-sm mb-1.5">Phone Numbers</h3>
                    <div className="space-y-1">
                      {siteConfig.phones.map((p) => (
                        <div key={p}>
                          <a
                            href={`tel:${p.replace(/[^+\d]/g, "")}`}
                            className="text-gray-600 text-sm hover:text-gold transition-colors font-medium"
                            aria-label={`Call ${p}`}
                          >
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-2">Available 24×7 for Security & Facility Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-off-white rounded-lg">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-navy text-sm mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-600 text-sm hover:text-gold transition-colors">{siteConfig.email}</a>
                    <p className="text-gray-500 text-xs mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Head Office Map */}
              <div className="mt-8">
                <CityMap cityName="Barrackpore" stateName="West Bengal" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
