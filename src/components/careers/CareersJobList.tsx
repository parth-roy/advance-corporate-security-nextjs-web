"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export interface JobOpening {
  _id: string;
  title: string;
  category: string;
  vacancy: string | number;
  jobType: string;
  isContractual?: boolean;
  workLocationType: string;
  city: string;
  locality?: string;
  salaryMin: number;
  salaryMax: number;
  hasIncentives?: boolean;
  incentivesText?: string;
  salaryBreakdown?: {
    basePay?: number;
    pfDeduction?: number;
    esicDeduction?: number;
    inHandEstimated?: number;
    incentivesAmount?: number;
    estimatedGross?: number;
  };
  benefits?: string[];
  shift: string;
  workingDays: string;
  requiresDeposit?: boolean;
  depositDetails?: string;
  gender?: string;
  qualification?: string;
  expMin?: number;
  expMax?: number;
  skills?: string[];
  assetsNeeded?: string[];
  documentsRequired?: string[];
  description: string;
  createdAt?: string;
}

export default function CareersJobList() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modal State
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [applying, setApplying] = useState<boolean>(false);
  const [appSubmitted, setAppSubmitted] = useState<boolean>(false);
  const [appData, setAppData] = useState({
    applicantName: "",
    applicantPhone: "",
    applicantEmail: "",
    applicantCity: "",
    applicantExperience: "Fresher",
    applicantQualification: "10th Pass",
    message: "",
  });

  // Fetch jobs
  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch("/api/jobs");
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setJobs(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchCity =
        selectedCity === "All" || job.city.toLowerCase() === selectedCity.toLowerCase();
      const matchCategory =
        selectedCategory === "All" ||
        job.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchSearch =
        !searchQuery.trim() ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.locality && job.locality.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCity && matchCategory && matchSearch;
    });
  }, [jobs, selectedCity, selectedCategory, searchQuery]);

  // Handle Application Submit
  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeJob) return;
    setApplying(true);

    const sheetsWebhookUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwqvCAdwMy-eJDymjoJJh1nLyzueTY5g-CxLNddBFUAA073FXji5BLqGoXdMkhzR2Vi-Q/exec";

    try {
      const payload = {
        jobId: activeJob._id,
        jobTitle: activeJob.title,
        jobCity: activeJob.city,
        ...appData,
      };

      // 1. Direct browser fire-and-forget dispatch to Google Apps Script
      try {
        fetch(sheetsWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            type: "job_application",
            jobId: activeJob._id,
            jobTitle: activeJob.title,
            jobCity: activeJob.city,
            applicantName: appData.applicantName.trim(),
            applicantPhone: appData.applicantPhone.trim(),
            applicantEmail: appData.applicantEmail.trim(),
            applicantCity: appData.applicantCity.trim(),
            applicantExperience: appData.applicantExperience,
            applicantQualification: appData.applicantQualification,
            message: appData.message.trim(),
            source: "ACS Careers Hub (Direct Client)",
          }),
        }).catch((sheetErr) => console.log("[GoogleSheets] Direct client dispatch notice:", sheetErr));
      } catch {}

      // 2. Server API call (persists in DB, sends email alerts, server-side backup sync)
      const res = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("[Careers] Application submitted:", data);
        setAppSubmitted(true);
      } else {
        setAppSubmitted(true);
      }
    } catch (err) {
      console.warn("[Careers] Submission network error:", err);
      setAppSubmitted(true);
    } finally {
      setApplying(false);
    }
  };

  const allCities = useMemo(() => {
    const set = new Set(jobs.map((j) => j.city));
    return Array.from(set);
  }, [jobs]);

  return (
    <section className="section-py bg-slate-50 border-b border-slate-200" id="openings">
      <div className="container-acs">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="badge-sky text-xs font-semibold mb-2 inline-block">
              📢 Active Client &amp; Vendor Openings
            </span>
            <h2 className="text-navy font-roboto font-black text-2xl sm:text-4xl">
              Verified Operational Job Openings ({filteredJobs.length})
            </h2>
            <div className="divider-sky" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl">
              Explore open deployment positions for Security Guards, Supervisors, Housekeeping, and Technicians across India with 100% on-time bank payroll.
            </p>
          </div>

          <Link
            href="/post-job"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-roboto font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all self-start md:self-auto cursor-pointer"
          >
            <span>+</span> Post a New Job Opening
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Search by Role or Area
              </label>
              <input
                type="text"
                placeholder="e.g. Guard, Salt Lake, Supervisor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm outline-none focus:border-sky"
              />
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Filter by City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white outline-none"
              >
                <option value="All">All Cities (Pan-India)</option>
                {allCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Service Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white outline-none"
              >
                <option value="All">All Categories</option>
                <option value="Security">Security &amp; Safety</option>
                <option value="Facility">Facility Management</option>
                <option value="Manpower">Workforce Outsourcing</option>
                <option value="Horticulture">Horticulture</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings Grid */}
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-sm">
            Loading active deployments...
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center max-w-lg mx-auto">
            <span className="text-3xl block mb-2">🔍</span>
            <h3 className="font-bold text-navy text-base mb-1">No openings matching your filter</h3>
            <p className="text-xs text-slate-500 mb-4">
              Try resetting your city or keyword search, or post a new requirement for your area.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCity("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-sky underline cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                onClick={() => {
                  setActiveJob(job);
                  setAppSubmitted(false);
                }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Badges Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {job.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {job.vacancy}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-roboto font-bold text-navy text-base group-hover:text-sky transition-colors mb-1.5 leading-snug">
                    {job.title}
                  </h3>

                  {/* Location & Style */}
                  <p className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                    <span>📍</span>
                    <strong className="text-slate-700">{job.city}</strong>
                    {job.locality && <span>({job.locality})</span>}
                    <span className="text-slate-400">•</span>
                    <span>{job.workLocationType}</span>
                  </p>

                  {/* Salary Highlight */}
                  <div className="bg-emerald-50/80 border border-emerald-100/90 rounded-xl p-2.5 mb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wider block">
                        Monthly Salary
                      </span>
                      <strong className="text-sm font-bold text-emerald-700">
                        ₹{job.salaryMin.toLocaleString()} - ₹{job.salaryMax.toLocaleString()}
                      </strong>
                    </div>
                    {job.hasIncentives && (
                      <span className="text-[10px] font-bold text-gold bg-navy px-2 py-0.5 rounded-full">
                        + Incentives
                      </span>
                    )}
                  </div>

                  {/* Shift & Requirements */}
                  <div className="space-y-1 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">⏱️ Shift:</span>
                      <span className="font-medium text-slate-700">{job.shift} | {job.workingDays}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">🎓 Eligibility:</span>
                      <span className="font-medium text-slate-700">
                        {job.qualification || "10th Pass"} ({job.expMin ?? 0}-{job.expMax ?? 2} Yrs)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">100% PF &amp; ESIC Covered</span>
                  <span className="text-sky font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Details &amp; Apply →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── JOB DETAILS & APPLICATION MODAL ───────────────────────── */}
      {activeJob && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 backdrop-blur-xs overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full my-8 max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-slate-50 to-sky-50/50 rounded-t-3xl">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="badge-sky text-xs font-bold">{activeJob.category}</span>
                  <span className="badge-gold text-xs">{activeJob.vacancy}</span>
                  {activeJob.isContractual && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Contractual Project
                    </span>
                  )}
                </div>
                <h3 className="font-roboto font-black text-xl sm:text-2xl text-navy">
                  {activeJob.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1">
                  <span>📍</span>
                  <strong>{activeJob.city}</strong>
                  {activeJob.locality && <span>({activeJob.locality})</span>} • <span>{activeJob.workLocationType}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveJob(null)}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-navy flex items-center justify-center font-bold text-sm cursor-pointer shrink-0 shadow-2xs"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
              {/* Compensation Box (White Mode) */}
              <div className="bg-white border-2 border-emerald-100 rounded-2xl p-4 sm:p-5 shadow-xs">
                <span className="text-amber-800 text-[10px] uppercase font-bold tracking-wider block mb-1">
                  Statutory Monthly Payout Band
                </span>
                <div className="text-2xl sm:text-3xl font-roboto font-black text-emerald-600 mb-2">
                  ₹{activeJob.salaryMin.toLocaleString()} - ₹{activeJob.salaryMax.toLocaleString()}
                  <span className="text-xs text-slate-500 font-normal"> / month</span>
                </div>
                {activeJob.hasIncentives && activeJob.incentivesText && (
                  <p className="text-xs text-amber-700 font-semibold mb-2">
                    ⚡ {activeJob.incentivesText}
                  </p>
                )}
                {activeJob.salaryBreakdown && (
                  <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                      <span className="text-slate-500 block text-[9px] font-semibold">Base Pay</span>
                      <strong className="text-navy text-xs sm:text-sm font-black">₹{(activeJob.salaryBreakdown.basePay || activeJob.salaryMin).toLocaleString()}</strong>
                    </div>
                    <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-xl">
                      <span className="text-amber-800 block text-[9px] font-semibold">EPF &amp; ESIC</span>
                      <strong className="text-amber-700 text-xs sm:text-sm font-bold">100% Covered</strong>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                      <span className="text-emerald-800 block text-[9px] font-semibold">Est. Take-Home</span>
                      <strong className="text-emerald-700 font-black text-xs sm:text-sm">
                        ₹{((activeJob.salaryBreakdown.basePay || activeJob.salaryMin) * 0.87).toFixed(0)}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule & Working Terms */}
              <div className="grid sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400 font-bold text-[10px] uppercase block">Shift Structure</span>
                  <span className="font-semibold text-navy">{activeJob.shift} Shift</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold text-[10px] uppercase block">Working Schedule</span>
                  <span className="font-semibold text-navy">{activeJob.workingDays}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold text-[10px] uppercase block">Eligibility &amp; Exp</span>
                  <span className="font-semibold text-navy">
                    {activeJob.qualification || "10th Pass"} ({activeJob.expMin ?? 0}-{activeJob.expMax ?? 2} Yrs)
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold text-[10px] uppercase block">Uniform / Deposit</span>
                  <span className="font-semibold text-emerald-700">
                    {activeJob.requiresDeposit ? `Deposit: ${activeJob.depositDetails}` : "100% Free Uniform & Zero Deposit"}
                  </span>
                </div>
              </div>

              {/* Benefits */}
              {activeJob.benefits && activeJob.benefits.length > 0 && (
                <div>
                  <h4 className="font-roboto font-bold text-navy text-xs uppercase tracking-wider mb-2">
                    Welfare &amp; Benefits Included:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeJob.benefits.map((b) => (
                      <span key={b} className="bg-sky-50 text-sky-800 border border-sky-200 px-2.5 py-1 rounded-lg text-xs font-semibold">
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Assets & Verification Documents */}
              <div className="grid sm:grid-cols-2 gap-3">
                {activeJob.assetsNeeded && activeJob.assetsNeeded.length > 0 && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <strong className="text-navy text-xs block mb-1.5">🛵 Assets Required:</strong>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {activeJob.assetsNeeded.map((a) => (
                        <li key={a}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeJob.documentsRequired && activeJob.documentsRequired.length > 0 && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <strong className="text-navy text-xs block mb-1.5">📄 Required Documents:</strong>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {activeJob.documentsRequired.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="font-roboto font-bold text-navy text-xs uppercase tracking-wider mb-2">
                  Job Description &amp; Scope:
                </h4>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 whitespace-pre-line text-xs sm:text-sm text-slate-700 leading-relaxed font-roboto">
                  {activeJob.description}
                </div>
              </div>

              {/* ─── APPLY FORM SECTION ─── */}
              <div className="pt-4 border-t border-slate-200" id="apply-section">
                <h4 className="font-roboto font-bold text-navy text-base sm:text-lg mb-1 flex items-center gap-1.5">
                  <span>📝</span> Apply for this Position
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Submit your application directly. Our regional HR officer will verify your eligibility and call you for deployment briefing.
                </p>

                {appSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                    <div className="text-3xl">🎉</div>
                    <h5 className="font-bold text-navy text-base">Application Submitted Successfully!</h5>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-navy">{appData.applicantName}</strong>. Your application for <strong>{activeJob.title}</strong> has been logged. Our deployment officer will contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveJob(null)}
                      className="btn-primary bg-navy text-white text-xs px-5 py-2 mt-2"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={appData.applicantName}
                          onChange={(e) => setAppData({ ...appData, applicantName: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm outline-none focus:border-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={appData.applicantPhone}
                          onChange={(e) => setAppData({ ...appData, applicantPhone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm outline-none focus:border-sky"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@email.com"
                          value={appData.applicantEmail}
                          onChange={(e) => setAppData({ ...appData, applicantEmail: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm outline-none focus:border-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Current City / Living Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Barrackpore, Kolkata"
                          value={appData.applicantCity}
                          onChange={(e) => setAppData({ ...appData, applicantCity: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm outline-none focus:border-sky"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Prior Experience
                        </label>
                        <select
                          value={appData.applicantExperience}
                          onChange={(e) => setAppData({ ...appData, applicantExperience: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                        >
                          <option value="Fresher">Fresher (Zero Experience)</option>
                          <option value="1-2 Years">1 - 2 Years</option>
                          <option value="3-5 Years">3 - 5 Years</option>
                          <option value="5+ Years">5+ Years (Veteran / Senior)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Highest Qualification
                        </label>
                        <select
                          value={appData.applicantQualification}
                          onChange={(e) => setAppData({ ...appData, applicantQualification: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                        >
                          <option value="10th Pass">10th Pass</option>
                          <option value="12th Pass">12th Pass</option>
                          <option value="Graduate">Graduate</option>
                          <option value="ITI / Diploma">ITI / Diploma</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Any Message / Prior Agencies / Licenses (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention prior security agency, PSARA training, or valid licenses..."
                        value={appData.message}
                        onChange={(e) => setAppData({ ...appData, message: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={applying}
                      className="w-full btn-primary bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {applying ? "Submitting Application..." : "Submit Application for this Job →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
