import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-off-white flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-lg text-center">
        {/* Brand Logo */}
        <div className="relative h-16 sm:h-20 w-48 sm:w-56 mx-auto mb-6">
          <Image
            src="/images/acs-official-logo.avif"
            alt={`${siteConfig.name} Logo`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="inline-block badge-gold text-xs font-semibold px-3 py-1 mb-4">
          Error 404
        </div>

        <h1 className="font-roboto font-black text-navy text-3xl sm:text-4xl mb-3">
          Page Not Found
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Use the links below to navigate our services.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-navy mb-8">
          <Link href="/" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            🏠 Home
          </Link>
          <Link href="/services" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            🛡️ Services
          </Link>
          <Link href="/clients" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            🎖️ Clients
          </Link>
          <Link href="/gallery" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            📸 Gallery
          </Link>
          <Link href="/careers" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            💼 Careers
          </Link>
          <Link href="/contact" className="p-3 bg-gray-50 hover:bg-sky-50 hover:text-sky rounded-xl border border-gray-100 transition-colors">
            📞 Contact
          </Link>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto btn-navy text-white font-bold px-7 py-3 rounded-xl transition-colors shadow-md text-sm"
          >
            Return to Homepage →
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="w-full sm:w-auto btn-primary font-bold px-7 py-3 rounded-xl transition-colors shadow-md text-sm"
          >
            Call Support: {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
