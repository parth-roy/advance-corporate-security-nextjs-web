"use client";

import { useState } from "react";
import Image from "next/image";
import { ACS_GALLERY, GALLERY_CATEGORIES, GalleryCategory, GalleryItem } from "@/lib/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? ACS_GALLERY
    : ACS_GALLERY.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    if (direction === "prev") {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex]);
    }
  };

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = category === "All"
            ? ACS_GALLERY.length
            : ACS_GALLERY.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-navy text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Click to Expand
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-navy/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-roboto font-bold text-navy text-base sm:text-lg group-hover:text-sky transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="relative max-w-4xl w-full bg-navy-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full max-h-[70vh] bg-black">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 sm:p-6 bg-navy text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10">
              <div>
                <span className="badge-sky text-[11px] mb-1 inline-block">
                  {selectedItem.category}
                </span>
                <h4 className="font-roboto font-bold text-lg sm:text-xl text-white">
                  {selectedItem.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
                  {selectedItem.description}
                </p>
              </div>
              <div className="shrink-0 text-xs text-gray-400">
                {filteredItems.findIndex((i) => i.id === selectedItem.id) + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
