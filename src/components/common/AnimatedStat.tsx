"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  className?: string;
}

export default function AnimatedStat({
  value,
  label,
  className = "",
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse number and suffix e.g. "5000+" -> number: 5000, suffix: "+"
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const isNumeric = targetNumber !== null;

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // ms
          const startTimestamp = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve: 1 - Math.pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * targetNumber);

            setDisplayValue(current.toString() + suffix);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(targetNumber.toString() + suffix);
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
  }, [targetNumber, suffix, isNumeric, hasAnimated, value]);

  return (
    <div ref={elementRef} className={className}>
      <div className="text-3xl xl:text-4xl font-black text-navy font-roboto tracking-tight">
        {isNumeric ? displayValue : value}
      </div>
      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}
