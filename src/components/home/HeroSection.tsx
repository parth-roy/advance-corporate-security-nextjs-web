// src/components/home/HeroSection.tsx
// ============================================================
// ACS Hero Section — Static Split-Layout (Server Component)
// Replaces the JS-heavy HeroSlider carousel
// Design: MetroMitra-style split hero | ACS Navy+SkyBlue+Gold brand
// SEO keywords: PSARA licensed security services India, facility management company India
// ============================================================

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

const TRUST_BADGES = [
  { label: "PSARA Licensed", icon: "🛡️" },
  { label: "ISO 9001:2015", icon: "✅" },
  { label: "25+ Years", icon: "🏆" },
  { label: "Govt. Empanelled", icon: "🏛️" },
];

const HERO_STATS = [
  { value: "25+", label: "Years of Excellence" },
  { value: "5000+", label: "Trained Professionals" },
  { value: "50+", label: "Govt. Clients" },
  { value: "Pan India", label: "Presence" },
];

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#f0f9ff] via-white to-[#eef4fb] overflow-hidden border-b border-slate-200"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0b1f3f 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-acs relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 xl:gap-16 items-center py-14 sm:py-16 lg:py-20 xl:py-24">

          {/* ── LEFT: Text content ── */}
          <div className="max-w-2xl">
            {/* Trust badge row */}
            <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Certifications">
              {TRUST_BADGES.map((badge) => (
                <span key={badge.label} className="badge-sky" role="listitem">
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-roboto font-black text-slate-900 leading-[1.05] mb-5 tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              India&apos;s Trusted{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-sky), var(--color-sky-dark))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Corporate Security
              </span>{" "}
              &amp;{" "}
              <span className="text-navy">Facility Management</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-3 leading-relaxed font-medium max-w-lg">
              PSARA-licensed. ISO 9001:2015 certified. Serving Government,
              Defence, Corporate &amp; Industrial clients across{" "}
              <strong className="text-navy">Pan India</strong> since{" "}
              {siteConfig.foundedYear}.
            </p>
            <p className="text-base text-slate-500 mb-8 max-w-md leading-relaxed">
              Security Guards · Facility Management · Manpower Outsourcing ·
              Horticulture — complete B2B workforce solutions with zero statutory exposure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5"
                aria-label="Get a free consultation from ACS"
              >
                Get Free Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-roboto font-600 text-navy border-2 border-navy hover:bg-navy hover:text-white transition-all duration-200 text-base"
                aria-label="Explore all ACS services"
              >
                Explore Services
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded font-roboto font-600 text-sky-700 border-2 border-sky-200 hover:bg-sky-50 transition-all duration-200 text-base"
                aria-label={`Call ACS at ${siteConfig.phone}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {siteConfig.phone}
              </a>
            </div>

            {/* Stats Strip (mobile — inline below CTAs) */}
            <div
              className="flex flex-wrap gap-6 lg:hidden"
              role="list"
              aria-label="Company statistics"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} role="listitem">
                  <div className="text-2xl font-black text-navy font-roboto">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Image + floating badges ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Main image */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(11,31,63,0.18)]">
              <Image
                src="/images/security-service-slider.jpg"
                alt="ACS security and facility management professionals on duty"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay — bottom only for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-roboto font-bold text-sm">
                  Serving 50+ Government &amp; Defence clients across India
                </p>
              </div>
            </div>

            {/* Floating: 25+ Years badge */}
            <div className="absolute -bottom-4 -left-4 bg-gold text-navy-dark font-roboto px-5 py-4 rounded-xl shadow-xl z-10">
              <div className="text-3xl font-black leading-none">25+</div>
              <div className="text-xs uppercase tracking-wider font-bold mt-0.5">
                Years of Excellence
              </div>
            </div>

            {/* Floating: ISO badge */}
            <div className="absolute -top-3 -right-3 bg-navy text-white font-roboto text-xs px-3.5 py-2.5 rounded-xl shadow-lg text-center z-10 border border-sky-400/20">
              <div className="font-black text-sky-400 text-base">ISO</div>
              <div className="font-bold text-[11px]">9001:2015</div>
              <div className="text-gold text-[10px] font-bold mt-0.5">
                CERTIFIED
              </div>
            </div>

            {/* Floating: PSARA badge */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-sky-600 text-white font-roboto text-xs px-3 py-2 rounded-xl shadow-lg text-center z-10 hidden sm:block">
              <div className="font-black text-sm">PSARA</div>
              <div className="text-[10px] font-medium opacity-90">Licensed</div>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP (desktop only — full width below content) ── */}
        <div
          className="hidden lg:grid grid-cols-4 gap-0 border-t border-slate-200 py-6 mb-0"
          role="list"
          aria-label="Company statistics"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              role="listitem"
              className={`text-center px-6 ${i < HERO_STATS.length - 1 ? "border-r border-slate-200" : ""}`}
            >
              <div className="text-3xl xl:text-4xl font-black text-navy font-roboto">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave shape break */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-10 md:h-12 block align-bottom"
        >
          <path d="M0 48L1440 0V48H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}