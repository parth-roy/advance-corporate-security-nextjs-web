import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Post a Job Requirement | Hiring Security, Facility & Blue-Collar Staff | ACS",
  description:
    "Submit workforce, security guard, housekeeping, loading-unloading, or technical MEP manpower hiring requirements across West Bengal and pan-India.",
  alternates: {
    canonical: `${siteConfig.url}/post-job`,
  },
};

export default function PostJobLayout({ children }: { children: React.ReactNode }) {
  return children;
}
