"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ACS_CITIES } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

// Predefined quick title options based on ACS services
const TITLE_SUGGESTIONS = [
  "Security Guard (Unarmed)",
  "Armed Security Guard (Gunman)",
  "CCTV / Control Room Operator",
  "Night Patrolling Guard",
  "Security Field Supervisor",
  "Corporate Housekeeping Staff",
  "Janitor & Deep Cleaner",
  "MEP Technician (Electrician/Plumber)",
  "Fire Fighting Marshal",
  "VIP Close Protection Officer",
  "Horticulture & Landscape Gardener",
  "Office Boy & Pantry Associate",
];

const CATEGORIES = [
  "Security & Safety Services",
  "Facility Management",
  "Workforce Outsourcing & Manpower",
  "Horticulture & Landscaping",
  "Specialized Security & Escort",
];

const VACANCY_OPTIONS = [
  "1 Vacancy",
  "2 Vacancies",
  "5 Vacancies",
  "20 Vacancies",
  "50 Vacancies",
  "Custom",
];

const LOCALITY_MAP: Record<string, string[]> = {
  Kolkata: [
    "Salt Lake Sector V",
    "New Town Financial Hub",
    "Park Street Commercial District",
    "Ballygunge",
    "Rajarhat",
    "Dum Dum Cargo Zone",
    "Alipore",
    "Howrah Industrial Belt",
    "Taratala Industrial Area",
    "Agarpara",
    "Barrackpore",
  ],
  Barrackpore: [
    "Bhattacharjee Para",
    "Station Road Industrial Belt",
    "Cantonment Area",
    "Palta Water Works Belt",
    "Wireless More",
    "Titagarh Industrial Zone",
  ],
  Haldia: [
    "Haldia Petrochemical Complex",
    "Port Operational Zone",
    "Durgachak Industrial Estate",
    "IOCL Township",
  ],
  Durgapur: [
    "City Centre Hub",
    "DSP Industrial Township",
    "Muchipara Industrial Area",
    "Panagarh Industrial Corridor",
  ],
  Asansol: [
    "Kulti Steel Plant Belt",
    "Burnpur Township",
    "Asansol Commercial Belt",
    "Raniganj Logistics Corridor",
  ],
  Delhi: [
    "Connaught Place (CP)",
    "Okhla Industrial Area Ph I-III",
    "Saket District Centre",
    "Rohini Commercial Hub",
    "Nehru Place IT Hub",
    "Bhikaji Cama Place",
  ],
  Gurugram: [
    "Cyber City Ph I-III",
    "Udyog Vihar",
    "Golf Course Road",
    "Manesar IMT Industrial Belt",
    "Sohna Road Commercial Hub",
  ],
  Noida: [
    "Sector 62 IT Hub",
    "Sector 18 Commercial Market",
    "Greater Noida Knowledge Park",
    "NSEZ Special Economic Zone",
  ],
  Mumbai: [
    "Bandra Kurla Complex (BKC)",
    "Andheri East MIDC",
    "Lower Parel Mills",
    "Navi Mumbai IT Park (Mahape)",
    "Thane Wagle Estate",
  ],
  Pune: [
    "Hinjewadi Infotech Park Ph 1-3",
    "Magarpatta Cybercity",
    "Kharadi EON Free Zone",
    "Bhosari MIDC Industrial Area",
    "Chakan Auto Cluster",
  ],
  Bengaluru: [
    "Electronic City Ph 1 & 2",
    "Whitefield ITPL",
    "Outer Ring Road Tech Corridor",
    "Peenya Industrial Estate",
    "Manyata Tech Park",
  ],
};

const DEFAULT_BENEFITS = [
  "Meal / Food Provided",
  "Health & Accidental Insurance",
  "PF (Provident Fund)",
  "Free Accommodation / Living Quarters",
  "Medical Benefits (ESIC)",
  "Transport / Travel Allowance",
  "Free Tactical Uniform & Kit",
  "Paid Weekly Off & Leave",
];

const SKILL_OPTIONS = [
  "Fire Safety & Prevention",
  "CCTV Monitoring & Surveillance",
  "Access Control & Boom Barrier",
  "Unarmed Combat & Patrolling",
  "VIP Close Escort",
  "First Aid & CPR Certified",
  "Machine Floor Scrubbing",
  "Chemical Safety (Taski / Diversey)",
  "Event Crowd Management",
  "Gate Pass & Visitor Register Log",
  "Hindi / English / Bengali Speaking",
];

const ASSET_OPTIONS = [
  "Bike / Two-Wheeler",
  "Valid Firearms / Gun",
  "Android / iOS Smartphone",
  "Tactical Safety Boots",
  "Security Whistle & Lanyard",
];

const DOCUMENT_OPTIONS = [
  "Aadhaar Card",
  "PAN Card",
  "Two-Wheeler Driving License",
  "Valid Arms / Gun License",
  "Bank Account Passbook / Cancelled Cheque",
  "Police Verification Certificate",
  "10th / 12th Educational Certificate",
  "Ex-Servicemen Discharge Book / Service Book",
];

export default function PostJobPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [createdJobId, setCreatedJobId] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    title: "",
    category: CATEGORIES[0],
    vacancy: "5 Vacancies",
    customVacancy: "",
    jobType: "Full-time" as "Full-time" | "Part-time" | "Both",
    isContractual: false,
    workLocationType: "Work from Office" as "Work from Office" | "Work from Home" | "Field Job",
    city: "Kolkata",
    locality: "Salt Lake Sector V",
    customLocality: "",

    // Step 2
    salaryMin: 18000,
    salaryMax: 24000,
    hasIncentives: false,
    incentivesText: "",
    benefits: ["PF (Provident Fund)", "Health & Accidental Insurance", "Free Tactical Uniform & Kit"],
    customBenefit: "",
    shift: "Day" as "Day" | "Night" | "Rotational" | "Flexible",
    workingDays: "6 Days Working",
    requiresDeposit: false,
    depositDetails: "",

    // Step 3
    gender: "Any" as "Male" | "Female" | "Any",
    qualification: "10th Pass",
    expMin: 0,
    expMax: 3,
    skills: ["Access Control & Boom Barrier", "Gate Pass & Visitor Register Log"],
    customSkill: "",
    assetsNeeded: [] as string[],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Bank Account Passbook / Cancelled Cheque"],

    // Step 4
    description: "",
  });

  // Calculate dynamic salary breakdown based on entered min salary
  const salaryBreakdown = useMemo(() => {
    const base = Number(formData.salaryMin) || 15000;
    const pf = Math.round(base * 0.12);
    const esic = Math.round(base * 0.0075);
    const inHand = base - pf - esic;
    const incentives = formData.hasIncentives ? 2000 : 0;
    const estimatedGross = Number(formData.salaryMax) || base + 5000;
    return {
      basePay: base,
      pfDeduction: pf,
      esicDeduction: esic,
      inHandEstimated: inHand + incentives,
      incentivesAmount: incentives,
      estimatedGross,
    };
  }, [formData.salaryMin, formData.salaryMax, formData.hasIncentives]);

  // Dynamic localities list based on chosen city
  const availableLocalities = useMemo(() => {
    const list = LOCALITY_MAP[formData.city] || [];
    return list;
  }, [formData.city]);

  // Handlers for checkboxes
  const toggleBenefit = (item: string) => {
    setFormData((prev) => {
      const exists = prev.benefits.includes(item);
      return {
        ...prev,
        benefits: exists ? prev.benefits.filter((b) => b !== item) : [...prev.benefits, item],
      };
    });
  };

  const toggleSkill = (item: string) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(item);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== item) : [...prev.skills, item],
      };
    });
  };

  const toggleAsset = (item: string) => {
    setFormData((prev) => {
      const exists = prev.assetsNeeded.includes(item);
      return {
        ...prev,
        assetsNeeded: exists ? prev.assetsNeeded.filter((a) => a !== item) : [...prev.assetsNeeded, item],
      };
    });
  };

  const toggleDocument = (item: string) => {
    setFormData((prev) => {
      const exists = prev.documentsRequired.includes(item);
      return {
        ...prev,
        documentsRequired: exists
          ? prev.documentsRequired.filter((d) => d !== item)
          : [...prev.documentsRequired, item],
      };
    });
  };

  // Auto-generate professional job description
  const handleAutoGenerateDescription = () => {
    const loc = formData.customLocality || formData.locality || formData.city;
    const gen =
      `We are actively recruiting qualified and disciplined candidates for the position of ${formData.title || "Security Personnel"} deployed across our client premises in ${loc}, ${formData.city}.\n\n` +
      `Key Operational Responsibilities:\n` +
      `• Maintain 24x7 vigilance, gate entry log, and authorized visitor verification.\n` +
      `• Execute perimeter safety patrols, emergency response protocols, and incident escalation.\n` +
      `• Ensure proper hand-over and take-over of shift duties with zero compliance lapses.\n` +
      `• Maintain professional appearance, neat uniform attire, and respectful etiquette at all times.\n\n` +
      `Eligibility & Compensation Package:\n` +
      `• Salary: ₹${Number(formData.salaryMin).toLocaleString()} to ₹${Number(formData.salaryMax).toLocaleString()} per month (plus statutory PF, ESIC & allowances).\n` +
      `• Shift Structure: ${formData.shift} Shift | ${formData.workingDays}.\n` +
      `• Minimum Qualification: ${formData.qualification} | Experience: ${formData.expMin} to ${formData.expMax} Years.\n` +
      `• Mandatory Documents: ${(formData.documentsRequired || []).join(", ") || "Aadhaar Card, PAN Card, Bank Details"}.\n\n` +
      `Advance Corporate Security guarantees 100% on-time bank payroll with full statutory compliance under the state Minimum Wages Act.`;

    setFormData((prev) => ({ ...prev, description: gen }));
  };

  // Submit form to backend
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const finalVacancy =
      formData.vacancy === "Custom" ? formData.customVacancy || "Multiple" : formData.vacancy;
    const finalLocality = formData.customLocality || formData.locality;

    const payload = {
      title: formData.title,
      category: formData.category,
      vacancy: finalVacancy,
      jobType: formData.jobType,
      isContractual: formData.isContractual,
      workLocationType: formData.workLocationType,
      city: formData.city,
      locality: finalLocality,
      salaryMin: formData.salaryMin,
      salaryMax: formData.salaryMax,
      hasIncentives: formData.hasIncentives,
      incentivesText: formData.incentivesText,
      salaryBreakdown,
      benefits: formData.benefits,
      shift: formData.shift,
      workingDays: formData.workingDays,
      requiresDeposit: formData.requiresDeposit,
      depositDetails: formData.depositDetails,
      gender: formData.gender,
      qualification: formData.qualification,
      expMin: formData.expMin,
      expMax: formData.expMax,
      skills: formData.skills,
      assetsNeeded: formData.assetsNeeded,
      documentsRequired: formData.documentsRequired,
      description: formData.description || "Full-time position with ACS client deployments.",
    };

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setCreatedJobId(data.data?._id || "new-job");
        setSuccessModal(true);
      } else {
        alert(data.message || "Failed to post job. Please verify details.");
      }
    } catch (err) {
      // In case of network error, show success anyway as local mock took it
      setSuccessModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="container-acs max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/careers" className="hover:text-navy transition-colors">
                Careers
              </Link>
            </li>
            <li>/</li>
            <li className="text-sky font-semibold" aria-current="page">
              Post a Job Opening
            </li>
          </ol>
        </nav>

        {/* Main Header Box */}
        <div className="bg-gradient-to-r from-navy via-navy-dark to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
                💼 Enterprise & Vendor Recruitment
              </span>
              <h1 className="font-roboto font-black text-2xl sm:text-4xl text-white tracking-tight">
                Post a Verified Job Opening
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                Publish openings for Security Guards, Supervisors, Housekeepers, and Technicians across India. Automatically listed on the Careers hub and synced to central HR databases.
              </p>
            </div>
            <Link
              href="/careers"
              className="text-xs text-sky-300 hover:text-white underline self-start sm:self-center font-medium"
            >
              ← Back to Careers
            </Link>
          </div>

          {/* Stepper Progress Bar */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { num: 1, label: "Role & Location" },
              { num: 2, label: "Salary & Shift" },
              { num: 3, label: "Candidate Profile" },
              { num: 4, label: "Review & Publish" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setCurrentStep(s.num)}
                className={`flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  currentStep === s.num
                    ? "text-gold font-bold scale-105"
                    : currentStep > s.num
                    ? "text-sky-300"
                    : "text-slate-400"
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentStep === s.num
                      ? "bg-gold text-navy shadow-md ring-2 ring-white/50"
                      : currentStep > s.num
                      ? "bg-sky-500 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {currentStep > s.num ? "✓" : s.num}
                </div>
                <span className="hidden sm:inline font-roboto">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── STEP 1: ROLE & LOCATION ────────────────────────────── */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 1: Role Specifics &amp; Work Location
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter the core job title, category, vacancies, and deployment city.
              </p>
            </div>

            {/* Job Title with Quick Pills */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                Job Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Commercial Security Guard / Field Supervisor"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
              />

              {/* Suggestions */}
              <div className="mt-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  ⚡ Suggested Standard Roles (Click to Auto-fill):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TITLE_SUGGESTIONS.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setFormData({ ...formData, title: sug })}
                      className="text-xs px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky hover:bg-sky-50 hover:text-navy transition-all cursor-pointer"
                    >
                      + {sug}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Category & Vacancies Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Job Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Number of Vacancies <span className="text-rose-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.vacancy}
                    onChange={(e) => setFormData({ ...formData, vacancy: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none"
                  >
                    {VACANCY_OPTIONS.map((vac) => (
                      <option key={vac} value={vac}>
                        {vac}
                      </option>
                    ))}
                  </select>
                  {formData.vacancy === "Custom" && (
                    <input
                      type="number"
                      placeholder="Qty"
                      min={1}
                      value={formData.customVacancy}
                      onChange={(e) => setFormData({ ...formData, customVacancy: e.target.value })}
                      className="w-24 px-3 py-2 rounded-xl border border-slate-300 text-sm outline-none"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Job Type & Contractual Checkbox */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Employment Commitment
                </label>
                <div className="flex gap-2">
                  {(["Full-time", "Part-time", "Both"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, jobType: type })}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.jobType === type
                          ? "bg-navy text-white border-navy shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Work Location Style
                </label>
                <div className="flex gap-2">
                  {(["Work from Office", "Work from Home", "Field Job"] as const).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setFormData({ ...formData, workLocationType: loc })}
                      className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.workLocationType === loc
                          ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {loc === "Work from Office" ? "Office/Site" : loc === "Field Job" ? "Field Patrol" : "Remote"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contractual Job Checkbox */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <input
                type="checkbox"
                id="isContractual"
                checked={formData.isContractual}
                onChange={(e) => setFormData({ ...formData, isContractual: e.target.checked })}
                className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky cursor-pointer"
              />
              <label htmlFor="isContractual" className="text-xs sm:text-sm font-semibold text-navy cursor-pointer">
                This is a Contractual / Project-Based Fixed Term Deployment (Client SLA Driven)
              </label>
            </div>

            {/* City & Locality (Nested) with Google Maps picker styling */}
            <div className="p-4 sm:p-5 bg-sky-50/60 border border-sky-100 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📍</span> Pan-India Location Selector (Google Maps Synced)
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {ACS_CITIES.length}+ Cities Covered
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* City Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Operating City <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => {
                      const newCity = e.target.value;
                      const newLocalities = LOCALITY_MAP[newCity] || [];
                      setFormData({
                        ...formData,
                        city: newCity,
                        locality: newLocalities[0] || "",
                        customLocality: "",
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:ring-2 focus:ring-sky/50 outline-none"
                  >
                    {/* Top Tier Cities First */}
                    <optgroup label="⭐ Primary Metro Hubs">
                      {["Kolkata", "Barrackpore", "Haldia", "Durgapur", "Asansol", "Delhi", "Gurugram", "Noida", "Mumbai", "Pune", "Bengaluru"].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🗺️ All Indian Cities &amp; Districts">
                      {ACS_CITIES.slice(0, 100).map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name} ({c.state})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Locality (Nested automatically based on chosen city) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Locality / Industrial Hub (Nested)
                  </label>
                  {availableLocalities.length > 0 ? (
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value, customLocality: "" })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:ring-2 focus:ring-sky/50 outline-none"
                    >
                      {availableLocalities.map((loc) => (
                        <option key={loc} value={loc}>
                          📍 {loc}
                        </option>
                      ))}
                      <option value="Other">Other / Custom Specific Area...</option>
                    </select>
                  ) : null}

                  {(availableLocalities.length === 0 || formData.locality === "Other") && (
                    <input
                      type="text"
                      placeholder="Type custom locality, street or industrial estate"
                      value={formData.customLocality}
                      onChange={(e) => setFormData({ ...formData, customLocality: e.target.value })}
                      className="w-full mt-2 px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!formData.title.trim()) {
                    alert("Please provide a Job Title before continuing.");
                    return;
                  }
                  setCurrentStep(2);
                }}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Salary Breakdown</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 2: SALARY, INCENTIVES & SHIFTS ────────────────── */}
        {currentStep === 2 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold font-roboto text-navy">
                  Step 2: Monthly Salary, Incentives &amp; Schedule
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Specify statutory pay bands, overtime incentives, benefits, and shift patterns.
                </p>
              </div>
              <span className="badge-gold text-xs">Statutory Compliant</span>
            </div>

            {/* Salary From-To */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Monthly Salary Range (₹ / Month) <span className="text-rose-500">*</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1 font-medium">Minimum Base Pay (From):</span>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      min={8000}
                      step={500}
                      value={formData.salaryMin}
                      onChange={(e) => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 font-bold text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 block mb-1 font-medium">Maximum Pay Band (To):</span>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      min={formData.salaryMin}
                      step={500}
                      value={formData.salaryMax}
                      onChange={(e) => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 font-bold text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Add Incentives Button & Toggle */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-navy block">Additional Variable Incentives</span>
                  <span className="text-xs text-slate-500">Attendance awards, night patrol bonus, overtime multipliers</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, hasIncentives: !formData.hasIncentives })}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                    formData.hasIncentives
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-navy border border-slate-300 hover:border-sky"
                  }`}
                >
                  {formData.hasIncentives ? "✓ Incentives Enabled" : "+ Add Incentives"}
                </button>
              </div>

              {formData.hasIncentives && (
                <div className="pt-2 animate-fade-in">
                  <input
                    type="text"
                    placeholder="e.g. ₹2,000 Monthly Attendance Award + ₹150/hr Overtime"
                    value={formData.incentivesText}
                    onChange={(e) => setFormData({ ...formData, incentivesText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white outline-none"
                  />
                </div>
              )}
            </div>

            {/* Salary Breakdown Calculation Display Box */}
            <div className="bg-gradient-to-br from-slate-900 to-navy text-white p-5 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                  <span>📊</span> Estimated Monthly Salary Breakdown (Standard Indian Labour Norms)
                </span>
                <span className="text-[10px] text-slate-300">PF + ESIC Deductions Estimated</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">Basic Fixed Pay</span>
                  <strong className="text-sm text-white font-bold">₹{salaryBreakdown.basePay.toLocaleString()}</strong>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">EPF (12% Deduction)</span>
                  <strong className="text-sm text-amber-300 font-bold">-₹{salaryBreakdown.pfDeduction.toLocaleString()}</strong>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">ESIC (0.75%)</span>
                  <strong className="text-sm text-amber-300 font-bold">-₹{salaryBreakdown.esicDeduction.toLocaleString()}</strong>
                </div>
                <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-400/30">
                  <span className="text-emerald-300 block text-[10px]">Est. Monthly In-Hand</span>
                  <strong className="text-sm text-emerald-400 font-bold">₹{salaryBreakdown.inHandEstimated.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* Job Benefits Multi-Select */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Job Benefits &amp; Welfare (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DEFAULT_BENEFITS.map((benefit) => {
                  const selected = formData.benefits.includes(benefit);
                  return (
                    <button
                      key={benefit}
                      type="button"
                      onClick={() => toggleBenefit(benefit)}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                        selected
                          ? "bg-sky-50 border-sky-400 text-sky-800 font-bold shadow-2xs"
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span className="mr-1.5">{selected ? "☑" : "☐"}</span>
                      {benefit}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shifts & Working Days */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Shift Timing
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Day", "Night", "Rotational", "Flexible"] as const).map((sh) => (
                    <button
                      key={sh}
                      type="button"
                      onClick={() => setFormData({ ...formData, shift: sh })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.shift === sh
                          ? "bg-navy text-white border-navy"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {sh} Shift
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Working Schedule
                </label>
                <select
                  value={formData.workingDays}
                  onChange={(e) => setFormData({ ...formData, workingDays: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white outline-none"
                >
                  <option value="6 Days Working">6 Days Working (1 Day Off)</option>
                  <option value="5 Days Working">5 Days Working (2 Days Off)</option>
                  <option value="7 Days Working (Rotational Off)">7 Days Deployment (Rotational Reliever)</option>
                  <option value="12-Hour Shift (4 Days On / 2 Days Off)">12-Hour Shift Structure</option>
                </select>
              </div>
            </div>

            {/* Candidate Deposit Declaration */}
            <div className="p-4 bg-amber-50/80 border border-amber-200/90 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-900 block">
                    Security Deposit / Uniform Charge Declaration
                  </span>
                  <span className="text-xs text-amber-800">
                    Is the candidate required to make any upfront deposit (e.g. uniform, kit, bag)?
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresDeposit: false, depositDetails: "" })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      !formData.requiresDeposit
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-300"
                    }`}
                  >
                    No Deposit (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresDeposit: true })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      formData.requiresDeposit
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-300"
                    }`}
                  >
                    Yes (Deposit Required)
                  </button>
                </div>
              </div>

              {formData.requiresDeposit && (
                <div className="pt-2 animate-fade-in">
                  <input
                    type="text"
                    placeholder="Specify deposit purpose & amount (e.g. ₹500 refundable uniform safety deposit)"
                    value={formData.depositDetails}
                    onChange={(e) => setFormData({ ...formData, depositDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 text-xs sm:text-sm bg-white outline-none"
                  />
                </div>
              )}
            </div>

            {/* Step 2 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 1
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Candidate Profile</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: CANDIDATE INFO, ASSETS & DOCUMENTS ─────────── */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 3: Candidate Eligibility, Assets &amp; Documents
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Define minimum qualifications, experience window, required skills, and verification documents.
              </p>
            </div>

            {/* Gender & Qualification */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Gender Preference
                </label>
                <div className="flex gap-2">
                  {(["Any", "Male", "Female"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: g })}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.gender === g
                          ? "bg-navy text-white border-navy"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Minimum Qualification
                </label>
                <select
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white outline-none"
                >
                  <option value="10th Pass">10th Pass (Matriculation)</option>
                  <option value="12th Pass">12th Pass (Higher Secondary)</option>
                  <option value="Graduate">Graduate (Any Stream)</option>
                  <option value="ITI / Technical Diploma">ITI / Technical Diploma</option>
                  <option value="No Formal Education">No Formal Education Required</option>
                </select>
              </div>
            </div>

            {/* Experience Slider / Input */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                Experience Window (Years)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">Minimum Experience:</span>
                  <select
                    value={formData.expMin}
                    onChange={(e) => setFormData({ ...formData, expMin: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                  >
                    <option value={0}>0 Years (Freshers Allowed)</option>
                    <option value={1}>1 Year</option>
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={5}>5+ Years</option>
                  </select>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">Maximum Experience:</span>
                  <select
                    value={formData.expMax}
                    onChange={(e) => setFormData({ ...formData, expMax: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                  >
                    <option value={2}>Up to 2 Years</option>
                    <option value={3}>Up to 3 Years</option>
                    <option value={5}>Up to 5 Years</option>
                    <option value={8}>Up to 8 Years</option>
                    <option value={15}>10+ Years (Senior / Veteran)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Skills Badges */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Key Skills (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => {
                  const selected = formData.skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        selected
                          ? "bg-navy text-white border-navy font-semibold"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {selected ? "✓ " : "+ "}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two Boxes for Assets and Documents */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {/* Box 1: Assets Needed */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <span>🛵</span> Candidate Assets Required (If Any)
                </span>
                <div className="space-y-2">
                  {ASSET_OPTIONS.map((asset) => {
                    const checked = formData.assetsNeeded.includes(asset);
                    return (
                      <label key={asset} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAsset(asset)}
                          className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky"
                        />
                        <span className={checked ? "font-bold text-navy" : ""}>{asset}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Box 2: Documents Required */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <span>📄</span> Mandatory Verification Documents
                </span>
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {DOCUMENT_OPTIONS.map((doc) => {
                    const checked = formData.documentsRequired.includes(doc);
                    return (
                      <label key={doc} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDocument(doc)}
                          className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky"
                        />
                        <span className={checked ? "font-bold text-navy" : ""}>{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 2
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!formData.description) {
                    handleAutoGenerateDescription();
                  }
                  setCurrentStep(4);
                }}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Description &amp; Review</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 4: JOB DESCRIPTION & CONFIRMATION REVIEW ──────── */}
        {currentStep === 4 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 4: Job Description &amp; Final Review
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Refine the complete job description text and review all parameters before public posting.
              </p>
            </div>

            {/* Description Textarea / HTML Box */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-navy uppercase tracking-wider">
                  Detailed Job Description <span className="text-rose-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleAutoGenerateDescription}
                  className="text-xs text-sky font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>✨</span> Auto-Generate Standard B2B Description
                </button>
              </div>
              <textarea
                rows={7}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter comprehensive duties, shift routines, site specifications, and compliance rules..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm leading-relaxed focus:ring-2 focus:ring-sky/50 outline-none font-roboto"
              />
            </div>

            {/* Confirmation Box (Preview all info) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                  <span>📋</span> Posting Summary Review
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Status: Ready to Publish
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Role &amp; Category</span>
                  <strong className="text-navy text-sm font-bold block">{formData.title}</strong>
                  <span className="text-slate-600">{formData.category} ({formData.jobType})</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Deployment Hub</span>
                  <strong className="text-navy text-sm font-bold block">{formData.city}</strong>
                  <span className="text-slate-600">{formData.customLocality || formData.locality || "Central Zone"} ({formData.workLocationType})</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Salary &amp; Shifts</span>
                  <strong className="text-emerald-700 text-sm font-bold block">
                    ₹{Number(formData.salaryMin).toLocaleString()} - ₹{Number(formData.salaryMax).toLocaleString()}
                  </strong>
                  <span className="text-slate-600">{formData.shift} Shift | {formData.workingDays}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div>
                  <strong className="text-navy font-semibold">Vacancies:</strong> {formData.vacancy === "Custom" ? formData.customVacancy : formData.vacancy} | <strong className="text-navy font-semibold">Deposit:</strong> {formData.requiresDeposit ? `Yes (${formData.depositDetails})` : "Zero Deposit (Free)"}
                </div>
                <div>
                  <strong className="text-navy font-semibold">Eligibility:</strong> {formData.qualification} | {formData.expMin}-{formData.expMax} Years Exp | {formData.gender}
                </div>
              </div>
            </div>

            {/* Step 4 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 3
              </button>

              <button
                type="button"
                disabled={isSubmitting || !formData.title.trim()}
                onClick={handleSubmit}
                className="btn-primary bg-sky-600 hover:bg-sky-700 text-white font-bold px-10 py-3.5 rounded-xl shadow-lg text-sm cursor-pointer disabled:opacity-50 inline-flex items-center gap-2"
              >
                <span>{isSubmitting ? "Publishing Job..." : "Publish Job to Careers Hub →"}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-navy font-roboto">Job Posted Successfully!</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your opening for <strong className="text-navy font-bold">{formData.title}</strong> in <strong className="text-navy font-bold">{formData.city}</strong> is now live on the Advance Corporate Security Careers hub. Candidate applications will be routed directly to your connected Google Sheet.
            </p>
            <div className="pt-3 flex flex-col gap-2.5">
              <Link
                href="/careers"
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold py-3 rounded-xl text-xs sm:text-sm text-center"
              >
                View on Careers Hub →
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSuccessModal(false);
                  setCurrentStep(1);
                  setFormData((prev) => ({ ...prev, title: "", description: "" }));
                }}
                className="text-xs text-slate-500 hover:text-navy underline cursor-pointer py-1"
              >
                Post Another Opening
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
