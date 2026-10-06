"use client";

// src/components/home/IntegratedSolutionsSection.tsx
// ============================================================
// ACS — Integrated Solutions for a Safer, Cleaner and More Productive Tomorrow
// Pixel-perfect replication of Image 2 reference design with compressed WebP images,
// floating colored-ring icon badges (#0052cc / #da1e25), semi-bold descriptions,
// compact vertical rhythm, and smooth elevation.
// ============================================================

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cog, Users, Leaf, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  iconType: "shield" | "cog" | "users" | "leaf";
  ringColor: "blue" | "red";
}

const SERVICES: ServiceItem[] = [
  {
    id: "security",
    title: "Security & Safety Services",
    description:
      "Trained, vigilant and technology-enabled security solutions for people, assets and premises.",
    href: "/services/security-safety",
    image: "/images/services/service-security.webp",
    iconType: "shield",
    ringColor: "blue",
  },
  {
    id: "facility",
    title: "Facility Management Services",
    description:
      "Comprehensive facility management for clean, safe and efficient work environments.",
    href: "/services/facility-management",
    image: "/images/services/service-facility.webp",
    iconType: "cog",
    ringColor: "red",
  },
  {
    id: "placement",
    title: "Placement / Manpower Outsourcing",
    description:
      "Skilled and semi-skilled manpower for diverse business needs across industries.",
    href: "/services/placement-services",
    image: "/images/services/service-placement.webp",
    iconType: "users",
    ringColor: "blue",
  },
  {
    id: "horticulture",
    title: "Horticulture",
    description:
      "Professional landscaping and horticulture services for greener, healthier and more vibrant spaces.",
    href: "/services/horticulture",
    image: "/images/services/service-horticulture.webp",
    iconType: "leaf",
    ringColor: "red",
  },
];

function ServiceBadgeIcon({ type }: { type: ServiceItem["iconType"] }) {
  if (type === "shield") {
    return (
      <Shield
        className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0052cc]"
        strokeWidth={2.4}
        aria-hidden="true"
      />
    );
  }
  if (type === "cog") {
    return (
      <Cog
        className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#da1e25] fill-[#da1e25]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    );
  }
  if (type === "users") {
    return (
      <Users
        className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0052cc] fill-[#0052cc]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    );
  }
  return (
    <Leaf
      className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#da1e25]"
      strokeWidth={2.4}
      aria-hidden="true"
    />
  );
}

export default function IntegratedSolutionsSection() {
  return (
    <section
      className="pt-5 pb-6 sm:pt-6 sm:pb-7 bg-white relative"
      aria-labelledby="solutions-heading"
    >
      <div className="container-acs">
        {/* Section Header */}
        <div className="mb-4 sm:mb-5 max-w-4xl">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-[2px] bg-[#da1e25] rounded-full shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase text-[#0d2458]">
              OUR SERVICES
            </span>
          </div>
          <h2
            id="solutions-heading"
            className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0d2458] tracking-tight leading-snug font-roboto"
          >
            Integrated Solutions for a Safer, Cleaner and More Productive Tomorrow
          </h2>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(13,36,88,0.06)] hover:shadow-[0_10px_26px_rgba(13,36,88,0.12)] hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#0052cc]/40"
            >
              {/* Top Banner Image with 16:10 Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Floating Circular Badge Overlapping Bottom Boundary of Image */}
              <div className="relative px-4 sm:px-5">
                <div
                  className={`-mt-5 relative z-10 w-10.5 h-10.5 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border-2 ${
                    service.ringColor === "blue" ? "border-[#0052cc]" : "border-[#da1e25]"
                  } flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <ServiceBadgeIcon type={service.iconType} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 pt-2.5 sm:p-5 sm:pt-3 flex flex-col flex-1">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0d2458] mb-1.5 leading-snug group-hover:text-[#0052cc] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-[#0d2458]/75 font-medium mb-3.5 flex-1">
                  {service.description}
                </p>

                {/* Know More CTA with Sliding Arrow */}
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-[#0052cc] group-hover:text-[#0041a8] group-hover:gap-2 transition-all">
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
