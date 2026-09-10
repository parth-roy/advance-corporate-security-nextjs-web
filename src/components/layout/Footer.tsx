import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

const footerServices = siteConfig.services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
}));

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission & Vision", href: "/about#mission" },
  { label: "From the Desk of Founder", href: "/about#founder" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

// Top 8 cities for footer linking (internal linking mesh)
const footerCities = siteConfig.cities.slice(0, 8);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* CTA Band */}
      <div className="bg-gold">
        <div className="container-acs py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-roboto font-900 text-navy-dark text-xl">
              Ready to Secure Your Business?
            </p>
            <p className="text-navy text-sm mt-1">
              Get a free consultation from India&apos;s trusted security experts.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-navy shrink-0"
            aria-label="Get free consultation"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-acs py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group" aria-label="ACS Home">
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg inline-flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
                <div className="relative h-20 sm:h-24 md:h-28 w-52 sm:w-60 md:w-72">
                  <Image
                    src="/images/acs-official-logo.webp"
                    alt={`${siteConfig.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 210px, (max-width: 1024px) 240px, 288px"
                  />
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ISO 9001:2015 certified Manpower Outsourcing & Facility Management company serving pan India since {siteConfig.foundedYear}.
            </p>
            <address className="not-italic text-gray-400 text-sm space-y-1.5">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">{siteConfig.phone}</a>
              </p>
            </address>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2" role="list">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2" role="list">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Served Column (Internal Linking Mesh) */}
          <div>
            <h3 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-4">
              Cities We Serve
            </h3>
            <ul className="space-y-2" role="list">
              {footerCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/security-safety/${city.slug}`}
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden="true" />
                    Security Services in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 mt-4 text-gold text-sm hover:text-gold-light transition-colors font-medium"
            >
              View all locations →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-acs py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. |{" "}
            <span className="text-gold">{siteConfig.certification} Certified</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
