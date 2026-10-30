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
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Sectors", href: "/sectors" },
      { label: "Enterprise Case Studies", href: "/case-studies" },
      { label: "Enterprise Regulatory Insights", href: "/insights" },
      { label: "Statutory Credentials Vault", href: "/credentials" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Leadership Team", href: "/about#team" },
      { label: "Founder's Desk", href: "/about#founder" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Look All Services", href: "/services" },
      { label: "Security & Safety", href: "/services/security-safety" },
      { label: "Facility Management", href: "/services/facility-management" },
      { label: "Integrated Facility Mgmt (IFM)", href: "/services/integrated-facility-management" },
      { label: "Workforce Outsourcing", href: "/services/placement-services" },
      { label: "Horticulture Services", href: "/services/horticulture" },
    ],
  },
  {
    label: "Govt & PSU",
    href: "/procurement",
    children: [
      { label: "Procurement Center", href: "/procurement" },
      { label: "Agency Comparison Matrix", href: "/procurement/agency-comparison" },
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

interface MegaMenuItem {
  label: string;
  href: string;
  desc: string;
}

interface MegaMenuData {
  title: string;
  tagline: string;
  subcategories?: string[];
  featuredLink?: { label: string; href: string };
  items: MegaMenuItem[];
}

const MEGA_MENUS: Record<string, MegaMenuData> = {
  About: {
    title: "About ACS",
    tagline:
      "India's compliance-first corporate security, facility management & workforce partner since 2000.",
    subcategories: [
      "PSARA & STATUTORY ACCREDITATIONS",
      "ENTERPRISE REGULATORY INSIGHTS",
      "25+ YEARS INDUSTRY LEGACY",
      "EXECUTIVE GOVERNANCE",
    ],
    featuredLink: {
      label: "Explore Credentials Vault",
      href: "/credentials",
    },
    items: [
      {
        label: "About Us",
        href: "/about",
        desc: "Corporate profile, accreditations, PSARA licenses, and nationwide operational footprint.",
      },
      {
        label: "Industry Sectors",
        href: "/sectors",
        desc: "Tailored protection & facility solutions for healthcare, IT, retail, and manufacturing.",
      },
      {
        label: "Enterprise Case Studies",
        href: "/case-studies",
        desc: "Proven deployment blueprints and measurable SLA milestones across client sites.",
      },
      {
        label: "Regulatory Insights",
        href: "/insights",
        desc: "In-depth compliance intelligence, labor codes, and PSARA security advisories.",
      },
      {
        label: "Credentials Vault",
        href: "/credentials",
        desc: "Verified PSARA licenses, ISO certificates, ESIC/EPF filings, and GST compliance.",
      },
      {
        label: "Our Mission & Vision",
        href: "/about#mission",
        desc: "Delivering zero-incident operations through vigilance, training, and ethical leadership.",
      },
      {
        label: "Leadership Team",
        href: "/about#team",
        desc: "Armed forces veterans and corporate security professionals steering day-to-day operations.",
      },
      {
        label: "Founder's Desk",
        href: "/about#founder",
        desc: "Executive vision, 25-year milestone message, and customer-first governance.",
      },
    ],
  },
  Services: {
    title: "Enterprise Solutions",
    tagline:
      "Comprehensive security, facility management, and workforce outsourcing tailored to your operational scale.",
    subcategories: [
      "SECURITY & MANNED GUARDING",
      "CORPORATE FACILITY MANAGEMENT",
      "INTEGRATED IFM CONTRACTS",
      "TECHNICAL WORKFORCE OUTSOURCING",
    ],
    featuredLink: {
      label: "Request Corporate Proposal",
      href: "/quote",
    },
    items: [
      {
        label: "Look All Services",
        href: "/services",
        desc: "Full portfolio of integrated guarding, housekeeping, IFM, and workforce services.",
      },
      {
        label: "Security & Safety",
        href: "/services/security-safety",
        desc: "PSARA armed & unarmed guards, mobile patrol, and 24/7 central control room surveillance.",
      },
      {
        label: "Facility Management",
        href: "/services/facility-management",
        desc: "Corporate housekeeping, deep cleaning, MEP engineering maintenance, and sanitization.",
      },
      {
        label: "Integrated Facility Mgmt (IFM)",
        href: "/services/integrated-facility-management",
        desc: "Unified single-contract delivery combining guarding, cleaning, and regulatory compliance.",
      },
      {
        label: "Workforce Outsourcing",
        href: "/services/placement-services",
        desc: "Background-verified front desk, logistics, technical, and industrial staffing.",
      },
      {
        label: "Horticulture Services",
        href: "/services/horticulture",
        desc: "Commercial landscape design, lawn maintenance, indoor greenery, and campus grounds.",
      },
    ],
  },
  "Govt & PSU": {
    title: "Govt & PSU Procurement",
    tagline:
      "Specialized procurement desk for GeM bids, PSU tenders, and statutory wage compliance audits.",
    subcategories: [
      "GeM TENDER BIDDING DESK",
      "PSU COMPLIANCE ADHERENCE",
      "MINIMUM WAGE RATE CARD",
      "STATUTORY AUDIT & VETTING",
    ],
    featuredLink: {
      label: "Explore Live Tender Alerts",
      href: "/tenders",
    },
    items: [
      {
        label: "Procurement Center",
        href: "/procurement",
        desc: "Centralized bidding portal, GeM vendor profiles, and tender submission documentation.",
      },
      {
        label: "Agency Comparison Matrix",
        href: "/procurement/agency-comparison",
        desc: "Benchmark ACS against unorganized agencies across GeM compliance and reliability metrics.",
      },
      {
        label: "Rate Card Calculator",
        href: "/rate-card-calculator",
        desc: "Transparent wage estimation with minimum wage, EPF, ESIC, and statutory breakdown.",
      },
      {
        label: "Tender Bids & Alerts",
        href: "/tenders",
        desc: "Real-time updates on active public tenders for security, housekeeping, and manpower.",
      },
      {
        label: "Statutory Compliance",
        href: "/compliance",
        desc: "100% adherence to Central/State labor laws, provident fund, insurance, and GST.",
      },
      {
        label: "Book Compliance Audit",
        href: "/request-audit",
        desc: "Schedule an on-site audit to identify statutory liabilities and vendor compliance gaps.",
      },
      {
        label: "GeM Security Guide",
        href: "/procurement#gem",
        desc: "Step-by-step buyer guide for procuring compliant security services on GeM.",
      },
    ],
  },
};

export default function Header() {
  const { currentCity, setIsCityModalOpen } = useCity();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [emailIndex, setEmailIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

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
    }, 220);
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
      setMobileExpandedSection(null);
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
          className="container-acs !px-2.5 sm:!px-6 flex items-center justify-between h-16 sm:h-20 md:h-24"
          aria-label="Main navigation"
        >
          {/* Logo — Tightly wrapped to exact image bounds */}
          <Link
            href="/"
            className="inline-flex items-center shrink-0 group focus:outline-none mr-1.5 xs:mr-2 sm:mr-4 xl:mr-7 2xl:mr-9"
            aria-label="ACS Home"
          >
            <Image
              src="/images/acs-official-logo.avif"
              alt={`${siteConfig.name} Logo`}
              width={1313}
              height={536}
              className="h-8 xs:h-9 sm:h-11 md:h-13 lg:h-14 w-auto object-contain block transform group-hover:scale-[1.02] transition-transform duration-200"
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
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isOpen ? null : link.label)}
                      className="relative px-2 xl:px-2.5 2xl:px-3 py-1.5 font-roboto font-semibold text-[13px] 2xl:text-sm text-slate-700 hover:text-[#0d2458] transition-colors duration-200 flex items-center gap-1 whitespace-nowrap group/link cursor-pointer bg-transparent border-0 select-none focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{link.label}</span>

                      {/* Dropdown Chevron (> rotated down vertically) */}
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

                      {/* Animated Underline */}
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0052cc] rounded-full transition-transform duration-300 ease-out origin-left pointer-events-none ${
                          isOpen ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative px-2 xl:px-2.5 2xl:px-3 py-1.5 font-roboto font-semibold text-[13px] 2xl:text-sm text-slate-700 hover:text-[#0d2458] transition-colors duration-200 flex items-center gap-1 whitespace-nowrap group/link cursor-pointer"
                    >
                      <span>{link.label}</span>

                      {/* Animated Underline */}
                      <span
                        className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0052cc] rounded-full transition-transform duration-300 ease-out origin-left pointer-events-none scale-x-0 group-hover/link:scale-x-100"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Actions: City Selector + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2 lg:gap-3 shrink-0">
            {/* City Selector Pill Button (Desktop & Tablet only - Mobile has dedicated selector in drawer) */}
            <button
              type="button"
              onClick={() => setIsCityModalOpen(true)}
              className="hidden md:flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold border border-sky-200 bg-sky-50/90 text-navy hover:bg-sky-100 hover:border-sky-300 transition-all active:scale-95 cursor-pointer shadow-2xs group shrink-0"
              title="Change Deployment City"
              aria-label="Change current city"
            >
              <Image
                src="/google-maps-icon.webp"
                alt="Location"
                width={13}
                height={13}
                className="w-3.5 h-3.5 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <span suppressHydrationWarning className="max-w-[70px] sm:max-w-[110px] truncate font-semibold text-slate-800">
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

            {/* Glowing Urgent Vacancies Button (Direct Job Seeker Magnet - Big & Bold on Mobile & Desktop) */}
            <Link
              href="/careers"
              onClick={() => trackEvent("job_apply", { source: "header_urgent_vacancies" })}
              className="btn-urgent-glow inline-flex items-center gap-1.5 sm:gap-2 text-white font-roboto font-bold text-xs sm:text-xs xl:text-sm py-1.5 sm:py-2 px-3 sm:px-3.5 xl:px-4 rounded-xl shadow-md transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer group"
              title="Immediate & Urgent Job Vacancies Available Now"
              aria-label="Urgent Job Vacancies - Apply Now"
            >
              <span className="tracking-tight">Urgent Vacancies</span>

              {/* HIRING NOW Pill Badge (Always visible - prominent on mobile & desktop) */}
              <span className="inline-flex items-center text-[10px] bg-white/20 text-white border border-white/30 px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider shadow-2xs">
                Hiring Now
              </span>
            </Link>

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
              className="xl:hidden p-1 xs:p-1.5 sm:p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Full-Width Enterprise Mega Menu (Desktop xl: 1280px+) */}
        <div
          className={`hidden xl:block absolute top-full left-0 right-0 w-full bg-white border-t border-slate-100 border-b border-slate-200 shadow-[0_20px_50px_rgba(11,31,63,0.1)] transition-all duration-200 ease-out z-50 ${
            activeDropdown && MEGA_MENUS[activeDropdown]
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          {activeDropdown && MEGA_MENUS[activeDropdown] && (
            <div className="container-acs py-9 xl:py-10 px-8 xl:px-12">
              <div className="grid grid-cols-12 gap-10 xl:gap-12 items-start">
                {/* Left Category Info / Overview Panel */}
                <div className="col-span-3 border-r border-slate-200/90 pr-8 xl:pr-10">
                  <h3 className="text-2xl font-bold font-roboto text-[#0b1f3f] tracking-tight">
                    {MEGA_MENUS[activeDropdown].title}
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-3 leading-relaxed font-normal">
                    {MEGA_MENUS[activeDropdown].tagline}
                  </p>

                  {/* Sub-category Anchor Highlights (like Mynd reference) */}
                  {MEGA_MENUS[activeDropdown].subcategories && (
                    <div className="mt-7 space-y-3 pt-5 border-t border-slate-100">
                      {MEGA_MENUS[activeDropdown].subcategories!.map((sub, idx) => (
                        <div
                          key={sub}
                          className={`text-[11px] font-bold tracking-wider uppercase ${
                            idx === 0 ? "text-[#0052cc]" : "text-slate-500 hover:text-slate-800"
                          } transition-colors select-none`}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}

                  {MEGA_MENUS[activeDropdown].featuredLink && (
                    <Link
                      href={MEGA_MENUS[activeDropdown].featuredLink!.href}
                      onClick={() => setActiveDropdown(null)}
                      className="mt-7 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0052cc] hover:text-[#0b1f3f] group/cta transition-colors"
                    >
                      <span>{MEGA_MENUS[activeDropdown].featuredLink!.label}</span>
                      <div className="w-7 h-7 rounded-full border border-[#0052cc]/30 text-[#0052cc] flex items-center justify-center group-hover/cta:bg-[#0052cc] group-hover/cta:text-white group-hover/cta:border-[#0052cc] transition-all duration-200">
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/cta:translate-x-0.5 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Right Items Grid — Clean, unboxed typography & circular buttons */}
                <div className="col-span-9 pl-2 xl:pl-6">
                  <div
                    className={`grid gap-x-8 xl:gap-x-10 gap-y-8 xl:gap-y-9 ${
                      MEGA_MENUS[activeDropdown].items.length <= 6
                        ? "grid-cols-3"
                        : "grid-cols-4"
                    }`}
                  >
                    {MEGA_MENUS[activeDropdown].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          if (timeoutRef.current) clearTimeout(timeoutRef.current);
                          setActiveDropdown(null);
                        }}
                        className="group/item flex flex-col justify-between py-1 cursor-pointer transition-all duration-150"
                      >
                        <div>
                          <h4 className="text-[14px] xl:text-[15px] font-bold font-roboto text-slate-900 group-hover/item:text-[#0052cc] transition-colors leading-snug">
                            {item.label}
                          </h4>
                          <p className="text-[12px] text-slate-500 mt-1.5 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>

                        {/* Circular Arrow Button with smooth hover animation */}
                        <div className="w-7 h-7 rounded-full border border-sky-400/50 text-sky-600 flex items-center justify-center group-hover/item:border-[#0052cc] group-hover/item:bg-[#0052cc] group-hover/item:text-white transition-all duration-200 mt-4 self-start">
                          <svg
                            className="w-3.5 h-3.5 transform group-hover/item:translate-x-0.5 transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
          <nav
            className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto no-scrollbar shadow-2xl flex flex-col animate-in slide-in-from-left duration-200"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
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
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
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

            {/* Quick Action CTAs: Urgent Vacancies, Post Job, Get Quote */}
            <div className="p-3 bg-slate-50/70 border-b border-gray-100 space-y-2">
              <Link
                href="/careers"
                onClick={() => {
                  trackEvent("job_apply", { source: "mobile_drawer_urgent_vacancies" });
                  setMobileOpen(false);
                }}
                className="btn-urgent-glow w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl text-white font-roboto font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  Urgent Vacancies
                </span>
                <span className="text-[10px] bg-white/20 text-white border border-white/30 px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide shadow-2xs">
                  Hiring Now
                </span>
              </Link>

              <Link
                href="/post-job"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-roboto font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-xs active:scale-[0.98]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
                <span>Post Job</span>
              </Link>

              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-center shadow-xs active:scale-[0.98]"
              >
                Get Quote
              </Link>
            </div>

            {/* Navigation Collapsible Accordion List */}
            <ul className="flex-1 py-2 px-3 divide-y divide-gray-100/80" role="list">
              {navLinks
                .filter((link) => link.label !== "Careers")
                .map((link) => {
                  const hasChildren = Boolean(link.children && link.children.length > 0);
                  const isExpanded = mobileExpandedSection === link.label;

                  return (
                    <li key={link.label} className="py-1">
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleMobileSection(link.label)}
                            className="w-full flex items-center justify-between px-3 py-2.5 font-roboto font-bold text-navy hover:bg-slate-50 rounded-lg transition-colors text-left"
                            aria-expanded={isExpanded}
                          >
                            <span className="text-sm uppercase tracking-wide text-slate-800">
                              {link.label}
                            </span>
                            <svg
                              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-navy" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {isExpanded && (
                            <ul className="pl-3 pr-1 py-1.5 space-y-1 border-l-2 border-sky-200 ml-4 mb-1 animate-in fade-in slide-in-from-top-1 duration-150">
                              {link.children!.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-navy hover:bg-sky-50 rounded-md transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between px-3 py-2.5 font-roboto font-bold text-navy hover:bg-slate-50 rounded-lg transition-colors text-sm uppercase tracking-wide text-slate-800"
                        >
                          <span>{link.label}</span>
                          <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </li>
                  );
                })}
            </ul>

            {/* Bottom Contact Footer */}
            <div className="p-4 border-t border-gray-100 mt-auto bg-slate-50/50 space-y-2 text-xs text-gray-600">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-navy font-medium text-slate-700">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{siteConfig.email}</span>
              </a>
              <div className="space-y-1.5 pt-1">
                {siteConfig.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2 hover:text-navy font-medium text-slate-700"
                    aria-label={`Call ${p}`}
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{p}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
