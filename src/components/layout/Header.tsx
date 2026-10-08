"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config";
import { useCity } from "@/context/CityContext";
import { trackEvent } from "@/lib/analytics";

interface NavLinkItem {
  label: string;
  href: string;
  mobileOnly?: boolean;
  children?: { label: string; href: string }[];
}

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Statutory Credentials Vault", href: "/credentials" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Leadership Team", href: "/about#team" },
      { label: "Founder's Desk", href: "/about#founder" },
      { label: "Careers & Hiring", href: "/careers" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Security & Safety", href: "/services/security-safety" },
      { label: "Facility Management", href: "/services/facility-management" },
      { label: "Integrated Facility Mgmt (IFM)", href: "/services/integrated-facility-management" },
      { label: "Workforce Outsourcing", href: "/services/placement-services" },
      { label: "Horticulture Services", href: "/services/horticulture" },
    ],
  },
  { label: "Sectors", href: "/sectors" },
  {
    label: "Govt & PSU",
    href: "/procurement",
    children: [
      { label: "Procurement Center", href: "/procurement" },
      { label: "Rate Card Calculator", href: "/rate-card-calculator" },
      { label: "Tender Bids & Alerts", href: "/tenders" },
      { label: "Statutory Compliance", href: "/compliance" },
      { label: "Book Compliance Audit", href: "/request-audit" },
      { label: "GeM Security Guide", href: "/procurement#gem" },
    ],
  },
  { label: "Locations", href: "/location" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers", mobileOnly: true },
];

const TOP_EMAILS = [
  "admin@advancecorporatesecurity.com",
  "advancedcorporatesecurityj@gmail.com",
];

export default function Header() {
  const { currentCity, setIsCityModalOpen } = useCity();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [emailIndex, setEmailIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setEmailIndex((prev) => (prev + 1) % TOP_EMAILS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
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
      {/* Top Bar — Exactly One Line, Slim Vertical Height */}
      <div className="bg-[#071f43] text-white text-[11px] sm:text-xs py-1.5 border-b border-white/10 hidden md:block select-none">
        <div className="container-acs flex items-center justify-between whitespace-nowrap overflow-hidden">
          {/* Left items: Phones + Sliding Emails */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 shrink-0">
            {/* Phones — Responsive display based on screen width */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919339988999" className="hover:text-sky-300 transition-colors font-medium hidden 2xl:inline">
                +91 93399 88999
              </a>
              <span className="text-white/30 font-light hidden 2xl:inline">|</span>
              <a href="tel:+917980147044" className="hover:text-sky-300 transition-colors font-medium hidden xl:inline">
                +91 79801 47044
              </a>
              <span className="text-white/30 font-light hidden xl:inline">|</span>
              <a href="tel:+919477006681" className="hover:text-sky-300 transition-colors font-medium">
                +91 94770 06681
              </a>
            </div>

            <span className="text-white/30 font-light">|</span>

            {/* Email with smooth vertical slide animation */}
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="relative h-4 overflow-hidden w-[220px] sm:w-[245px] xl:w-[265px]">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${emailIndex * 16}px)` }}
                >
                  {TOP_EMAILS.map((email) => (
                    <div key={email} className="h-4 flex items-center">
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-sky-300 transition-colors font-medium truncate block leading-none"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right item: Description with responsive length */}
          <div className="flex items-center shrink-0 ml-3 sm:ml-4">
            <span className="text-white/90 font-medium text-[11px] sm:text-xs">
              <span className="hidden xl:inline">India&apos;s Trusted Security &amp; Facility Management Since 2000 | </span>
              <span>PSARA Licensed</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav — 100% Rock-Solid Fixed Height, Zero Layout Shift, Zero Glitch */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
          isScrolled
            ? "shadow-[var(--shadow-nav)] bg-white/95 backdrop-blur-md border-b border-gray-200/80"
            : "border-b border-gray-100"
        }`}
        role="banner"
      >
        <nav
          className="container-acs flex items-center justify-between h-20 sm:h-22 md:h-24"
          aria-label="Main navigation"
        >
          {/* Logo — Tightly wrapped to exact image bounds with comfortable gap before Home */}
          <Link
            href="/"
            className="inline-flex items-center shrink-0 group focus:outline-none mr-5 xl:mr-7 2xl:mr-9"
            aria-label="ACS Home"
          >
            <Image
              src="/images/acs-official-logo.avif"
              alt={`${siteConfig.name} Logo`}
              width={1313}
              height={536}
              className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain block transform group-hover:scale-[1.02] transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Nav Links (Visible from xl: 1280px breakpoint) */}
          <ul className="hidden xl:flex items-center gap-0.5 2xl:gap-1" role="list">
            {navLinks.filter((link) => !link.mobileOnly).map((link) => {
              const hasDropdown = Boolean(link.children && link.children.length > 0);
              const isOpen = activeDropdown === link.label;

              return (
                <li
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={link.href}
                    className="relative px-2 xl:px-2.5 2xl:px-3 py-1.5 font-roboto font-semibold text-[13px] 2xl:text-sm text-slate-700 hover:text-[#0d2458] transition-colors duration-200 flex items-center gap-1 whitespace-nowrap group/link cursor-pointer"
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={hasDropdown ? isOpen : undefined}
                  >
                    <span>{link.label}</span>

                    {/* Dropdown Chevron (> rotated down vertically) */}
                    {hasDropdown && (
                      <svg
                        className={`w-3.5 h-3.5 text-slate-400 group-hover/link:text-[#0d2458] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#0052cc]" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}

                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0052cc] rounded-full transition-transform duration-300 ease-out origin-left pointer-events-none ${
                        isOpen ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>

                  {/* Dropdown Menu Container — Seamless hover bridge + shadow */}
                  {hasDropdown && link.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200 ease-out ${
                        isOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible translate-y-1.5 pointer-events-none"
                      }`}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul
                        className="bg-white rounded-xl shadow-[0_12px_36px_-6px_rgba(13,36,88,0.18)] border border-slate-100 py-2.5 overflow-hidden ring-1 ring-black/5"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              onClick={() => {
                                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-[#edf6fd] hover:text-[#0052cc] border-l-2 border-transparent hover:border-[#0052cc] transition-all duration-150 mx-1.5 rounded-md"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Actions: City Selector + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 shrink-0">
            {/* City Selector Pill Button (Desktop & Mobile) */}
            <button
              type="button"
              onClick={() => setIsCityModalOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border border-sky-200 bg-sky-50/90 text-navy hover:bg-sky-100 hover:border-sky-300 transition-all active:scale-95 cursor-pointer shadow-2xs group shrink-0"
              title="Change Deployment City"
              aria-label="Change current city"
            >
              <Image
                src="/google-maps-icon.webp"
                alt="Location"
                width={13}
                height={13}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <span suppressHydrationWarning className="max-w-[46px] xs:max-w-[70px] sm:max-w-[110px] truncate font-semibold text-slate-800">
                {currentCity?.name || "Kolkata"}
              </span>
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600 shrink-0 transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Post Job Button (Desktop & Tablet) */}
            <Link
              href="/post-job"
              onClick={() => trackEvent("post_job_click", { source: "header_desktop" })}
              className="hidden sm:inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-roboto font-semibold text-xs xl:text-sm py-2 px-3 xl:px-4 rounded-xl shadow-xs border border-sky-400/40 transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
              aria-label="Post a Job"
            >
              <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              <span>Post Job</span>
            </Link>

            {/* Get Quote CTA */}
            <Link
              href="/quote"
              onClick={() => trackEvent("quote_request", { source: "header_cta" })}
              className="btn-primary hidden sm:inline-flex text-xs xl:text-sm py-2 px-3.5 sm:px-4 xl:px-5 shrink-0 whitespace-nowrap font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
              aria-label="Get a free corporate quote"
            >
              Get Quote
            </Link>

            {/* Mobile / Tablet Hamburger (visible below xl: 1280px) */}
            <button
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[100] flex xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center py-1">
                <div className="relative h-14 w-52">
                  <Image
                    src="/images/acs-official-logo.avif"
                    alt={`${siteConfig.name} Logo`}
                    fill
                    className="object-contain object-left"
                    sizes="220px"
                  />
                </div>
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

            {/* Mobile City Selector Row */}
            <div className="p-3 bg-sky-50/80 border-b border-sky-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/google-maps-icon.webp"
                  alt="Location"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain shrink-0"
                />
                <span className="text-xs text-slate-600 font-medium">Hub:</span>
                <span suppressHydrationWarning className="text-xs font-bold text-navy">{currentCity?.name || "Kolkata"}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsCityModalOpen(true);
                }}
                className="text-xs text-sky-600 font-bold underline hover:text-sky-800 cursor-pointer"
              >
                Change
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

            <div className="p-4 border-t border-gray-100 space-y-2.5">
              <Link
                href="/post-job"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-roboto font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-xs"
              >
                <span>💼</span> Post Job
              </Link>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get Quote
              </Link>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-navy">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <div className="space-y-1.5 pt-1">
                  {siteConfig.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2 hover:text-navy"
                      aria-label={`Call ${p}`}
                    >
                      <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
