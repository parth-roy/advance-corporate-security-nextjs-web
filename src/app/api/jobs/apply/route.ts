// src/app/api/jobs/apply/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      jobId,
      jobTitle,
      jobCity,
      applicantName,
      applicantPhone,
      applicantEmail,
      applicantCity,
      applicantExperience,
      applicantQualification,
      message,
    } = body;

    if (!applicantName || !applicantPhone || !applicantEmail) {
      return NextResponse.json(
        { success: false, message: "Required fields: Full Name, Phone Number, Email Address" },
        { status: 400 }
      );
    }

    const applicationRecord = {
      id: `app-${Date.now()}`,
      jobId,
      jobTitle: jobTitle || "Security & Facility Role",
      jobCity: jobCity || "Pan-India",
      applicantName: applicantName.trim(),
      applicantPhone: applicantPhone.trim(),
      applicantEmail: applicantEmail.trim(),
      applicantCity: applicantCity?.trim() || "",
      applicantExperience: applicantExperience?.trim() || "Fresher",
      applicantQualification: applicantQualification?.trim() || "10th Pass",
      message: message?.trim() || "",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    };

    // Forward to backend API asynchronously
    const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://localhost:4000";
    fetch(`${backendUrl}/api/jobs/${jobId || "general"}/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our recruitment desk will contact you within 24 hours.",
      data: applicationRecord,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Failed to submit application" },
      { status: 500 }
    );
  }
}
