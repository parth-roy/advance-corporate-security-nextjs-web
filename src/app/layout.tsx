import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { buildOrganizationSchema, serializeJsonLd } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CityProviderWrapper from "@/components/common/CityProviderWrapper";
import FloatingContact from "@/components/layout/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | India's Trusted Security & Facility Management Company`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "security guard services India",
    "facility management company India",
    "manpower outsourcing India",
    "security services Kolkata",
    "facility management Kolkata",
    "ISO 9001 security company India",
    "placement services India",
    "horticulture services India",
    "Advance Corporate Security",
    "ACS security",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | India's Trusted Security & Facility Management`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Security & Facility Management`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Security & Facility Management`,
    description: siteConfig.description,
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/small-logo-150x94.png", type: "image/png", sizes: "32x32" },
      { url: "/images/small-logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/images/small-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "", // TODO: Add Google Search Console verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(buildOrganizationSchema()),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-white text-gray-900">
        <CityProviderWrapper>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </CityProviderWrapper>
      </body>
    </html>
  );
}
