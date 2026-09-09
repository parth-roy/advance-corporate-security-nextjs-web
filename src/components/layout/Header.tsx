"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Core Values", href: "/about#values" },
      { label: "From The Desk of Founder", href: "/about#founder" },
      { label: "Our Team", href: "/about#team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Security & Safety Services", href: "/services/security-safety" },
      { label: "Facility Management", href: "/services/facility-management" },
      { label: "Placement Services", href: "/services/placement-services" },
      { label: "Horticulture", href: "/services/horticulture" },
    ],
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block">
        <div className="container-acs flex justify-between items-center">
          <span className="text-gray-300">
            India&apos;s Trusted Security & Facility Management Since {siteConfig.foundedYear}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gold transition-colors duration-200"
              aria-label="Email us"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-gold transition-colors duration-200"
              aria-label="Call us"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-[var(--shadow-nav)]"
            : "bg-white border-b border-gray-100"
        }`}
        role="banner"
      >
        <nav className="container-acs flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="ACS Home">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/logomew.png"
                alt={`${siteConfig.name} Logo`}
                fill
                className="object-contain"
                priority
                sizes="56px"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-roboto font-900 text-navy text-base leading-tight">
                Advance Corporate
              </div>
              <div className="font-roboto font-500 text-gold text-xs tracking-widest uppercase">
                Security Services
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded font-roboto font-500 text-sm text-gray-700 hover:text-navy hover:bg-gray-50 transition-colors duration-200 flex items-center gap-1"
                  aria-haspopup={link.children ? "true" : undefined}
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3.5 h-3.5 text-gold transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <ul
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-[var(--shadow-card-hover)] border border-gray-100 py-2 z-50 animate-fade-in"
                    role="menu"
                  >
                    {link.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-off-white hover:text-navy border-l-2 border-transparent hover:border-gold transition-all duration-150 mx-2 rounded"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button (desktop) */}
          <Link
            href="/contact"
            className="btn-primary hidden lg:inline-flex text-sm py-2.5 px-5"
            aria-label="Get a free quote"
          >
            Get Free Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded text-navy hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 flex lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="relative w-80 max-w-full bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <Image src="/images/logomew.png" alt="ACS Logo" fill className="object-contain" />
                </div>
                <span className="font-roboto font-bold text-navy text-sm">Advance Corporate</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded hover:bg-gray-100 text-gray-500"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex-1 py-4 px-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 font-roboto font-500 text-navy hover:bg-off-white hover:text-navy rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-4 border-l-2 border-gray-100 mb-2">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 rounded transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="p-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get Free Quote
              </Link>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-navy">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-navy">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
