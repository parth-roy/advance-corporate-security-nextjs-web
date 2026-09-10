"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export interface SlideItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  serviceSlug: string;
}

const SLIDES: SlideItem[] = [
  {
    id: "facility-management",
    image: "/images/facility-management-slider-new.jpg",
    alt: "ACS Facility Management Services — Housekeeping, Payroll, Janitorial & Maintenance",
    title: "Facility Management Services",
    serviceSlug: "facility-management",
  },
  {
    id: "security-safety",
    image: "/images/security-service-slider.jpg",
    alt: "ACS Security & Safety Services — Security Guards, Surveillance & Executive Protection",
    title: "Security & Safety Services",
    serviceSlug: "security-safety",
  },
  {
    id: "placement-services",
    image: "/images/placement-service-slider.jpg",
    alt: "ACS Placement Services — Career & Employment Placement, Staffing Solutions",
    title: "Placement & Manpower Outsourcing",
    serviceSlug: "placement-services",
  },
  {
    id: "horticulture",
    image: "/images/horticulture-slider.jpg",
    alt: "ACS Horticulture Services — Landscaping, Grounds Keeping & Garden Design",
    title: "Horticulture & Landscaping",
    serviceSlug: "horticulture",
  },
];

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per slide

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic slide rotation (autoplay)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <section
      className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] max-h-[88vh] flex items-center justify-center overflow-hidden select-none bg-navy-dark"
      aria-label="ACS Hero Banner Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 100% Crystal-Clear Background Slides — No Blurry / Cloudy Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <Link
              key={slide.id}
              href={`/services/${slide.serviceSlug}`}
              aria-label={`View ${slide.title}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
                isActive ? "opacity-100 z-1 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </Link>
          );
        })}
      </div>

      {/* SEO & AI Crawler Layer — 100% INVISIBLE to human eye & UNSELECTABLE by mouse drag, but fully indexed by search engines */}
      <div
        className="sr-only select-none pointer-events-none"
        aria-hidden="false"
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
      >
        <p>Trusted Since {siteConfig.foundedYear}</p>
        <h1 id="hero-heading">
          India&apos;s Trusted Security &amp; Facility Management Experts
        </h1>
        <p>
          ISO 9001:2015 certified. 25+ years. 5000+ trained professionals. Serving Government, Corporate &amp; Industrial clients across pan India — 24&times;7.
        </p>
        <div>
          <Link href="/contact">Get Free Consultation</Link>
          <Link href="/services">Our Services</Link>
        </div>
        <div>
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div>
          <h2>Our Core Services Pan India</h2>
          {SLIDES.map((slide) => (
            <div key={slide.id}>
              <h3>{slide.title}</h3>
              <p>{slide.alt}</p>
              <Link href={`/services/${slide.serviceSlug}`}>{slide.title}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Slide Controls: Previous & Next Glassmorphic Buttons */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          goToPrev();
        }}
        aria-label="Previous Slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-navy-dark/60 hover:bg-gold hover:text-navy-dark text-white border border-white/20 hover:border-gold backdrop-blur-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold shadow-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          goToNext();
        }}
        aria-label="Next Slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-navy-dark/60 hover:bg-gold hover:text-navy-dark text-white border border-white/20 hover:border-gold backdrop-blur-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold shadow-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators & Service Showing Dial (Translucent Glassmorphic Modal elevated inside hero) */}
      <div className="absolute bottom-10 sm:bottom-14 md:bottom-18 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-navy-dark/80 hover:bg-navy-dark/90 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-200 pointer-events-auto">
        {/* Active Slide / Service Title */}
        <span className="text-white text-xs sm:text-sm font-roboto font-semibold tracking-wide flex items-center gap-2 select-none">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" aria-hidden="true" />
          <span className="max-w-[150px] sm:max-w-[240px] md:max-w-none truncate">{activeSlide.title}</span>
        </span>

        <span className="text-white/30 text-xs select-none" aria-hidden="true">|</span>

        {/* Dots + Slide Numbers */}
        <div className="flex items-center gap-2 shrink-0">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                  isActive
                    ? "w-7 sm:w-8 h-2 sm:h-2.5 bg-gold shadow-[0_0_8px_rgba(200,153,58,0.8)]"
                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            );
          })}
          <span className="text-white/85 text-[11px] sm:text-xs font-mono ml-1 font-medium select-none">
            {currentIndex + 1} / {SLIDES.length}
          </span>
        </div>
      </div>

      {/* Bottom Slanted Dimensional Shape Break — Replicating user screenshot */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 md:h-18 lg:h-22 block align-bottom"
        >
          <path d="M0 90L1440 0V90H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
