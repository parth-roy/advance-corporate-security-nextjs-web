// src/components/common/ComplianceTrustSection.tsx
// ============================================================
// ACS — Enterprise Statutory Compliance & Trust Architecture
// Directly addresses Principal Employer Liability (Contract Labour Act, 1970),
// PSARA State Licensing, ISO 9001:2015, and EPF/ESIC TRRN Challan transparency.
// ============================================================

import React from "react";
import Link from "next/link";
import { ShieldCheck, FileCheck, CheckCircle2, Lock, Scale, Building, Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface ComplianceTrustSectionProps {
  className?: string;
  cityName?: string;
}

export default function ComplianceTrustSection({ className = "", cityName }: ComplianceTrustSectionProps) {
  const compliancePoints = [
    {
      icon: ShieldCheck,
      title: "PSARA Government License",
      tag: "Controlling Authority Certified",
      desc: "Fully licensed under the Private Security Agencies (Regulation) Act in West Bengal, Delhi & Jharkhand — with operational reach across India. All deployed guards undergo mandatory police verification and training per MHA guidelines.",
    },
    {
      icon: Scale,
      title: "Principal Employer Liability Shield",
      tag: "CLRA Act 1970 Indemnity",
      desc: "Complete legal protection against vicarious liability under Section 21(4) of the Contract Labour (Regulation & Abolition) Act, 1970. Clients bear zero risk of statutory liability or back-wage claims.",
    },
    {
      icon: FileCheck,
      title: "100% EPF & ESIC Challan Transparency",
      tag: "Electronic TRRN Verified",
      desc: "Monthly computerized deposit receipts, electronic TRRN challans, and ECR filed on time and delivered directly to your HR/Accounts department with every billing cycle.",
    },
    {
      icon: Award,
      title: "ISO 9001:2015 Certified QMS",
      tag: "IAF / IAS Accredited",
      desc: "Documented Standard Operating Procedures (SOPs) for recruitment, guard patrol logs, shift handovers, surprise night checks, and digital incident reporting.",
    },
    {
      icon: Building,
      title: "Minimum Wages & Bonus Adherence",
      tag: "Audit-Ready Payroll",
      desc: "Strict compliance with State & Central Minimum Wages notifications, Payment of Wages Act, and Payment of Bonus Act. Zero wage undercutting.",
    },
    {
      icon: Lock,
      title: "24×7 Central Command & Control",
      tag: "Zero-Downtime Response",
      desc: "Direct escalation matrix connected to our 24×7 Rapid Response desk and field area inspectors for emergency perimeter deployment and relief guards.",
    },
  ];

  return (
    <section className={`section-py bg-slate-50 border-y border-slate-200/80 text-navy relative overflow-hidden ${className}`} aria-labelledby="compliance-trust-heading">
      {/* Decorative subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0b1f3f 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-acs relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-gold-dark" />
            <span>Statutory Immunity &amp; Enterprise Trust</span>
          </div>
          <h2 id="compliance-trust-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Zero Legal Liability for {cityName ? `${cityName} Enterprises` : "Principal Employers"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-sky mx-auto my-3.5 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            In corporate security and facility outsourcing, compliance failure directly exposes your management to prosecution under Indian labour laws. Advance Corporate Security delivers bulletproof, audit-ready statutory compliance.
          </p>
        </div>

        {/* 6-Grid Compliance Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {compliancePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-sky-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 group-hover:scale-105 group-hover:bg-sky group-hover:text-white transition-all shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 uppercase tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-roboto font-bold text-navy text-base sm:text-lg mb-2 group-hover:text-sky transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Verifiable Documentation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verifiable Documentation Strip */}
        <div className="bg-gradient-to-r from-navy-dark via-navy to-navy-light rounded-2xl p-6 sm:p-8 border border-gold/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h4 className="text-white font-roboto font-black text-lg sm:text-xl mb-1">
              Need Audit Verification for Vendor Empanelment?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We provide digital copies of our PSARA License, ISO 9001:2015 Certificate, PAN, GST, EPF/ESIC Registration codes, and sample electronic challans directly to enterprise procurement teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-primary text-xs sm:text-sm px-6 py-3 font-bold"
            >
              Request Compliance Dossier
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="btn-secondary text-xs sm:text-sm px-5 py-3 font-bold"
            >
              Call Legal Desk: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
