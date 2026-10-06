"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  className?: string;
  /** Override label element classes. Default: small, uppercase, tracking-wider. */
  labelClassName?: string;
  /** Override value element classes. Default: text-3xl/4xl, font-black, text-navy. */
  valueClassName?: string;
  disableAnimation?: boolean;
}

export default function AnimatedStat({
  value,
  label,
  className = "",
  labelClassName,
  valueClassName,
  disableAnimation = false,
}: AnimatedStatProps) {
  // Server-render the actual value directly so SSR and slow-loading JS never display 0
  const [displayValue, setDisplayValue] = useState<string>(value);
  const hasAnimatedRef = useRef<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse number and suffix e.g. "5000+" -> number: 5000, suffix: "+"
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const isNumeric = targetNumber !== null;

  useEffect(() => {
    if (!isNumeric || disableAnimation) return;

    // Respect prefers-reduced-motion setting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const duration = 1400; // ms
          const startTimestamp = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * (targetNumber as number));

            setDisplayValue(current.toString() + suffix);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue((targetNumber as number).toString() + suffix);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [targetNumber, suffix, isNumeric, disableAnimation]);

  return (
    <div ref={elementRef} className={className} role="listitem">
      <div
        className={
          valueClassName ??
          "text-3xl xl:text-4xl font-black text-navy font-roboto tracking-tight"
        }
      >
        {displayValue}
      </div>
      <div
        className={
          labelClassName ??
          "text-xs text-slate-500 font-bold uppercase tracking-wider mt-1"
        }
      >
        {label}
      </div>
    </div>
  );
}
