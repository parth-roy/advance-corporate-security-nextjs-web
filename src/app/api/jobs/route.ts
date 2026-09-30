// src/app/api/jobs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

// In-memory store for newly posted jobs on Next.js side for zero-latency localhost rendering
let localPostedJobs: any[] = [
  {
    _id: "job-p1",
    title: "Commercial Security Supervisor",
    category: "Security & Safety",
    vacancy: "5 Vacancies",
    jobType: "Full-time",
    isContractual: false,
    workLocationType: "Field Job",
    city: "Kolkata",
    locality: "Salt Lake Sector V",
    salaryMin: 22000,
    salaryMax: 28000,
    hasIncentives: true,
    incentivesText: "₹2,500 Monthly Attendance & Night Shift Bonus",
    salaryBreakdown: {
      basePay: 20000,
      pfDeduction: 1800,
      esicDeduction: 150,
      incentivesAmount: 2500,
      estimatedGross: 24350,
    },
    benefits: ["Health Insurance", "PF", "Meal / Food", "Free Uniform & Shoes", "Medical Benefits"],
    shift: "Rotational",
    workingDays: "6 Days Working",
    requiresDeposit: false,
    gender: "Any",
    qualification: "12th Pass",
    expMin: 2,
    expMax: 5,
    skills: ["CCTV Monitoring", "Fire Safety", "Access Control", "Team Management"],
    assetsNeeded: ["Bike / Two-Wheeler", "Smartphone"],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Two-Wheeler Driving License", "Bank Passbook"],
    description: "Advance Corporate Security is hiring experienced Security Supervisors to oversee physical guarding, access control, and 24x7 gate security operations across premier IT parks in Salt Lake Sector V.",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "job-p2",
    title: "Armed Guard (Ex-Servicemen / CAPF)",
    category: "Security & Safety",
    vacancy: "2 Vacancies",
    jobType: "Full-time",
    isContractual: true,
    workLocationType: "Work from Office",
    city: "Barrackpore",
    locality: "Bhattacharjee Para",
    salaryMin: 26000,
    salaryMax: 34000,
    hasIncentives: true,
    incentivesText: "₹3,000 High-Value Escort & Overtime Allowance",
    salaryBreakdown: {
      basePay: 24000,
      pfDeduction: 1800,
      esicDeduction: 180,
      incentivesAmount: 3000,
      estimatedGross: 28820,
    },
    benefits: ["PF", "Health Insurance", "Free Accommodation", "Uniform & Gear"],
    shift: "Day",
    workingDays: "6 Days Working",
    requiresDeposit: false,
    gender: "Male",
    qualification: "10th Pass",
    expMin: 3,
    expMax: 8,
    skills: ["Valid Gun License", "Weapon Handling", "Cash-in-Transit Protection"],
    assetsNeeded: ["Valid Firearms / Gun"],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Gun License", "Discharge Book"],
    description: "Urgent opening for licensed Armed Security Guards (Retd. Army, Navy, Air Force, or BSF/CISF) for high-value banking and cash-transit protection.",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "job-p3",
    title: "Corporate Housekeeping Team Lead",
    category: "Facility Management",
    vacancy: "10 Vacancies",
    jobType: "Full-time",
    isContractual: false,
    workLocationType: "Work from Office",
    city: "Kolkata",
    locality: "New Town Financial Hub",
    salaryMin: 16000,
    salaryMax: 20000,
    hasIncentives: false,
    salaryBreakdown: {
      basePay: 15500,
      pfDeduction: 1800,
      esicDeduction: 120,
      incentivesAmount: 0,
      estimatedGross: 15500,
    },
    benefits: ["PF", "ESIC Medical", "Free Uniform", "Paid Leave"],
    shift: "Day",
    workingDays: "6 Days Working",
    requiresDeposit: false,
    gender: "Any",
    qualification: "10th Pass",
    expMin: 1,
    expMax: 3,
    skills: ["Deep Cleaning", "Floor Machine Scrubbing", "Chemical Handling (Diversey/Taski)"],
    assetsNeeded: [],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Bank Account Passbook"],
    description: "Immediate requirement for Corporate Housekeeping Executives to manage mechanized cleaning and hygiene standards across multi-national corporate offices.",
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const category = searchParams.get("category");
    const jobType = searchParams.get("jobType");

    // Try backend API first
    const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://localhost:4000";
    try {
      const backendRes = await fetch(`${backendUrl}/api/jobs?${searchParams.toString()}`, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (backendRes.ok) {
        const json = await backendRes.json();
        if (json.data && json.data.length > 0) {
          // Merge local posted jobs if any are missing
          const backendIds = new Set(json.data.map((j: any) => String(j._id)));
          const combined = [
            ...localPostedJobs.filter((j) => !backendIds.has(String(j._id))),
            ...json.data,
          ];
          return NextResponse.json({ success: true, data: combined });
        }
      }
    } catch {
      // Backend not running; fallback to localPostedJobs
    }

    // Filter local jobs
    let filtered = [...localPostedJobs];
    if (city && city !== "All") {
      filtered = filtered.filter((j) => j.city.toLowerCase().includes(city.toLowerCase()));
    }
    if (category && category !== "All") {
      filtered = filtered.filter((j) => j.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (jobType && jobType !== "All") {
      filtered = filtered.filter((j) => j.jobType === jobType);
    }

    return NextResponse.json({ success: true, count: filtered.length, data: filtered });
  } catch (err: any) {
    return NextResponse.json({ success: true, data: localPostedJobs });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.category || !body.city || !body.description) {
      return NextResponse.json(
        { success: false, message: "Required fields: title, category, city, description" },
        { status: 400 }
      );
    }

    const newJob = {
      _id: `job-${Date.now()}`,
      title: body.title.trim(),
      category: body.category.trim(),
      vacancy: body.vacancy || "1 Vacancy",
      jobType: body.jobType || "Full-time",
      isContractual: Boolean(body.isContractual),
      workLocationType: body.workLocationType || "Work from Office",
      city: body.city.trim(),
      locality: body.locality?.trim() || "",
      salaryMin: Number(body.salaryMin) || 12000,
      salaryMax: Number(body.salaryMax) || 18000,
      hasIncentives: Boolean(body.hasIncentives),
      incentivesText: body.incentivesText?.trim() || "",
      salaryBreakdown: body.salaryBreakdown || {},
      benefits: Array.isArray(body.benefits) ? body.benefits : [],
      shift: body.shift || "Day",
      workingDays: body.workingDays?.trim() || "6 Days Working",
      requiresDeposit: Boolean(body.requiresDeposit),
      depositDetails: body.depositDetails?.trim() || "",
      gender: body.gender || "Any",
      qualification: body.qualification?.trim() || "10th Pass",
      expMin: Number(body.expMin) || 0,
      expMax: Number(body.expMax) || 2,
      skills: Array.isArray(body.skills) ? body.skills : [],
      assetsNeeded: Array.isArray(body.assetsNeeded) ? body.assetsNeeded : [],
      documentsRequired: Array.isArray(body.documentsRequired) ? body.documentsRequired : [],
      description: body.description.trim(),
      status: "active",
      createdAt: new Date().toISOString(),
    };

    // Store in local memory immediately
    localPostedJobs.unshift(newJob);

    // Forward to backend API asynchronously
    const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://localhost:4000";
    fetch(`${backendUrl}/api/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);

    return NextResponse.json({
      success: true,
      message: "Job posted successfully and added to Careers page.",
      data: newJob,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Failed to post job" },
      { status: 500 }
    );
  }
}
