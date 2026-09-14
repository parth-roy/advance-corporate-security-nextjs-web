"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
          <AlertTriangle size={28} />
        </div>
        <h2 className="text-xl font-black text-slate-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          An unexpected error occurred while displaying this page. You can retry or head back to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-navy-light transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            <Home size={14} />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
