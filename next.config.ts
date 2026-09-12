import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false, // Suppress X-Powered-By: Next.js
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "advancecorporatesecurity.com",
      },
      {
        protocol: "https",
        hostname: "advancecorporate.in",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; connect-src 'self' https://maps.googleapis.com;",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // WordPress legacy URL → New clean URLs (301 Permanent)
      { source: "/home/", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-us-3/", destination: "/about", permanent: true },
      { source: "/about-us-3", destination: "/about", permanent: true },
      { source: "/our-mission-2/", destination: "/about#mission", permanent: true },
      { source: "/our-mission-2", destination: "/about#mission", permanent: true },
      { source: "/our-vision-2/", destination: "/about#vision", permanent: true },
      { source: "/our-vision-2", destination: "/about#vision", permanent: true },
      { source: "/core-value-2/", destination: "/about#values", permanent: true },
      { source: "/core-value-2", destination: "/about#values", permanent: true },
      { source: "/from-the-desk-of-founder/", destination: "/about#founder", permanent: true },
      { source: "/from-the-desk-of-founder", destination: "/about#founder", permanent: true },
      { source: "/our-team-our-forte/", destination: "/about#team", permanent: true },
      { source: "/our-team-our-forte", destination: "/about#team", permanent: true },
      { source: "/security-safety-services/", destination: "/services/security-safety", permanent: true },
      { source: "/security-safety-services", destination: "/services/security-safety", permanent: true },
      { source: "/facility-management-services/", destination: "/services/facility-management", permanent: true },
      { source: "/facility-management-services", destination: "/services/facility-management", permanent: true },
      { source: "/placement-services/", destination: "/services/placement-services", permanent: true },
      { source: "/placement-services", destination: "/services/placement-services", permanent: true },
      { source: "/horticulture-2/", destination: "/services/horticulture", permanent: true },
      { source: "/horticulture-2", destination: "/services/horticulture", permanent: true },
      { source: "/our-clients/", destination: "/clients", permanent: true },
      { source: "/our-clients", destination: "/clients", permanent: true },
      { source: "/our-gallery/", destination: "/gallery", permanent: true },
      { source: "/our-gallery", destination: "/gallery", permanent: true },
      { source: "/contact-us-2/", destination: "/contact", permanent: true },
      { source: "/contact-us-2", destination: "/contact", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
      { source: "/quote/", destination: "/contact", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/career/", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
