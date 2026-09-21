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
      desc: "Fully licensed under the Private Security Agencies (Regulation) Act across pan-India state jurisdictions. All deployed guards undergo mandatory police verification and training per MHA guidelines.",
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
    <section className={`section-py bg-slate-900 text-white relative overflow-hidden ${className}`} aria-labelledby="compliance-trust-heading">
      {/* Decorative subtle background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-acs relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Statutory Immunity &amp; Enterprise Trust</span>
          </div>
          <h2 id="compliance-trust-heading" className="text-white font-roboto font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Zero Legal Liability for {cityName ? `${cityName} Enterprises` : "Principal Employers"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-sky mx-auto my-4 rounded-full" />
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-gold/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-light/90 border border-slate-700 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-navy transition-all shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/60 uppercase tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-roboto font-bold text-base sm:text-lg mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
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
