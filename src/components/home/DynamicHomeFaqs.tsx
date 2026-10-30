"use client";

import React, { useState } from "react";
import { useCity } from "@/context/CityContext";
import { generateCityHubFaqs } from "@/lib/locationFaqHelper";
import { ChevronDown } from "lucide-react";

export default function DynamicHomeFaqs() {
  const { currentCity } = useCity();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = generateCityHubFaqs(currentCity.name, currentCity.state);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="section-py bg-off-white" aria-labelledby="home-faqs-heading">
      <div className="container-acs max-w-4xl">
        <div className="text-center mb-5">
          <p className="section-label">Common Questions</p>
          <h2 id="home-faqs-heading" suppressHydrationWarning className="text-navy">
            Frequently Asked Questions —{" "}
            <span className="text-sky">{currentCity.name} Hub</span>
          </h2>
          <div className="divider-sky mx-auto" />
          <p suppressHydrationWarning className="text-gray-600 mt-2 text-sm sm:text-base">
            Everything you need to know about PSARA licensing, ISO certification, statutory compliance, and deployments in {currentCity.name}, {currentCity.state}.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border shadow-2xs overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-sky-300 ring-1 ring-sky-200/50"
                    : "border-gray-200/90 hover:border-sky-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-roboto font-bold text-navy text-sm sm:text-base cursor-pointer transition-colors ${
                    isOpen ? "bg-sky-50/30" : "hover:bg-slate-50/50"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 bg-navy text-white shadow-xs"
                        : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
