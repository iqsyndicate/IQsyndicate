"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counter - animates a numeric value up from 0 once it scrolls into view.
 * Accepts the figure pre-formatted (e.g. "27.2", prefix "USD ", suffix "B")
 * so odd formats like "<1" or "300-500" can bypass animation entirely.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

          if (prefersReduced) {
            setDisplay(value);
            return;
          }

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}