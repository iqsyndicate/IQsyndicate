"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetClass: Record<Direction, string> = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "translate-x-12",
  right: "-translate-x-12",
  none: "",
};

/**
 * Reveal - fades/slides a block in once it enters the viewport.
 * Used in place of a single fixed "fade up" so different sections can
 * assemble from different directions (top, bottom, side) as requested.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${offsetClass[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}