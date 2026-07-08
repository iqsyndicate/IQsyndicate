"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Direction = "up" | "down" | "left" | "right";

const offsetStyle: Record<Direction, (active: boolean) => string> = {
  up: (active) => (active ? "translateY(0)" : "translateY(40px)"),
  down: (active) => (active ? "translateY(0)" : "translateY(-40px)"),
  left: (active) => (active ? "translateX(0)" : "translateX(-50px)"),
  right: (active) => (active ? "translateX(0)" : "translateX(50px)"),
};

/**
 * PinnedStack - on desktop, the section pins while scroll progress through
 * it reveals each child in sequence, sliding in from its assigned
 * direction. Progress is measured from the moment the section enters the
 * viewport (not from the moment it locks to the top), so the stagger
 * begins immediately instead of waiting for the card to hit the page's
 * top edge.
 *
 * On mobile, sticky-pin math is unreliable (dynamic browser chrome), so
 * cards instead reveal individually as each scrolls into view - same
 * directional slide-in, just without the pin.
 */
export default function PinnedStack({
  children,
  directions,
}: {
  children: React.ReactNode[];
  directions: Direction[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = children.length;

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const vh = window.innerHeight;

      // Progress runs from the moment the section's top crosses the
      // bottom of the viewport (entering) to the moment it's fully
      // scrolled past (scrollable distance consumed).
      const span = Math.max(vh + scrollable, 1);
      const progress = Math.min(Math.max((vh - rect.top) / span, 0), 1);
      const idx = Math.min(count - 1, Math.floor(progress * count));
      setActive(idx);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  return (
    <>
      {/* Desktop: pinned, sequential directional reveal */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `${count * 55 + 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="grid w-full gap-6 sm:grid-cols-2">
            {children.map((child, i) => {
              const isActive = i <= active;
              return (
                <div
                  key={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: offsetStyle[directions[i] ?? "up"](isActive),
                  }}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: animated staggered reveal, no pinning */}
      <div className="grid gap-5 md:hidden">
        {children.map((child, i) => (
          <Reveal key={i} direction={directions[i] ?? "up"} delay={i * 90}>
            {child}
          </Reveal>
        ))}
      </div>
    </>
  );
}