// src/app/api/jobs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { syncToGoogleSheetsBackground } from "@/lib/sheetsSync";
import { ANSH_FURNITURE_JOBS } from "@/lib/anshJobsSeed";

// Dynamic in-memory store initialized with active client requirements (Ansh Furniture LLP, Kalyani)
let localPostedJobs: any[] = [...ANSH_FURNITURE_JOBS];

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
      salaryMin: Number(body.salaryMin) || 0,
      salaryMax: Number(body.salaryMax) || 0,
      isSalaryNegotiable: Boolean(body.isSalaryNegotiable ?? (Number(body.salaryMin) === 0)),
      salaryText: body.salaryText?.trim() || "",
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

    // Sync to Google Sheets "Posted Jobs" Tab
    syncToGoogleSheetsBackground({
      type: "job_post",
      id: newJob._id,
      jobTitle: newJob.title,
      jobCategory: newJob.category,
      city: newJob.city,
      locality: newJob.locality,
      workLocationType: newJob.workLocationType,
      vacancy: newJob.vacancy,
      jobType: newJob.jobType,
      isContractual: newJob.isContractual,
      salaryMin: newJob.salaryMin,
      salaryMax: newJob.salaryMax,
      incentives: newJob.incentivesText || (newJob.hasIncentives ? "Yes" : "None"),
      shift: newJob.shift,
      workingDays: newJob.workingDays,
      requiresDeposit: newJob.requiresDeposit,
      depositDetails: newJob.depositDetails,
      gender: newJob.gender,
      qualification: newJob.qualification,
      experience: `${newJob.expMin} - ${newJob.expMax} Years`,
      skills: Array.isArray(newJob.skills) ? newJob.skills.join(", ") : newJob.skills,
      assetsNeeded: Array.isArray(newJob.assetsNeeded) ? newJob.assetsNeeded.join(", ") : newJob.assetsNeeded,
      documentsRequired: Array.isArray(newJob.documentsRequired) ? newJob.documentsRequired.join(", ") : newJob.documentsRequired,
      description: newJob.description,
      source: "ACS Post Job Portal",
    });

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
