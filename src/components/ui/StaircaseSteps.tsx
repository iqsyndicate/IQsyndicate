"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Step = {
  n: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  tone: string;
};

// ─── Layout constants ──────────────────────────────────────────────────────────
const CARD_W     = 162;   // compact card width
const CARD_H     = 340;   // compact card height
const STEP_X     = 171;   // CARD_W + 9px gap → zero horizontal overlap
const STEP_Y     = 52;    // vertical rise per step
const PAD        = 24;    // container padding
const LINE_OFFSET = 11;   // gap between climbing line and card edges
const POPUP_W    = 300;   // full-size popup card width
const POPUP_H    = 420;   // full-size popup card height (fixed so we can centre it)

const COUNT   = 7;
const TOTAL_W = PAD * 2 + CARD_W + (COUNT - 1) * STEP_X + LINE_OFFSET;
const TOTAL_H = PAD * 2 + CARD_H + (COUNT - 1) * STEP_Y + LINE_OFFSET;

function cardPos(i: number) {
  return {
    left: PAD + i * STEP_X,
    top:  PAD + LINE_OFFSET + (COUNT - 1 - i) * STEP_Y,
  };
}

// SVG path with LINE_OFFSET breathing room from card edges
function buildPath(): string {
  const segs: string[] = [];
  const c0 = cardPos(0);
  segs.push(`M ${c0.left - LINE_OFFSET} ${c0.top + CARD_H + LINE_OFFSET}`);
  for (let i = 0; i < COUNT; i++) {
    const c = cardPos(i);
    segs.push(`L ${c.left - LINE_OFFSET} ${c.top - LINE_OFFSET}`);
    if (i < COUNT - 1) {
      const cn = cardPos(i + 1);
      segs.push(`L ${cn.left - LINE_OFFSET} ${c.top - LINE_OFFSET}`);
    }
  }
  return segs.join(" ");
}

const PATH     = buildPath();
const PATH_LEN = CARD_H + LINE_OFFSET + (COUNT - 1) * (STEP_Y + STEP_X) + 60;

// ─── Per-card colours ──────────────────────────────────────────────────────────
const ACCENT_COLORS = [
  "#6f1c28","#1f3d2b","#8a6a45",
  "#171717","#6f1c28","#1f3d2b","#8a6a45",
];

const POPUP_SHADOWS = [
  "0 32px 64px rgba(111,28,40,0.28), 0 8px 24px rgba(0,0,0,0.14)",
  "0 32px 64px rgba(31,61,43,0.28),  0 8px 24px rgba(0,0,0,0.14)",
  "0 32px 64px rgba(138,106,69,0.28),0 8px 24px rgba(0,0,0,0.14)",
  "0 36px 72px rgba(23,23,23,0.26),  0 8px 24px rgba(0,0,0,0.14)",
  "0 32px 64px rgba(111,28,40,0.24), 0 8px 24px rgba(0,0,0,0.12)",
  "0 32px 64px rgba(31,61,43,0.24),  0 8px 24px rgba(0,0,0,0.12)",
  "0 32px 64px rgba(138,106,69,0.26),0 8px 24px rgba(0,0,0,0.12)",
];

const BASE_SHADOW = "0 10px 28px rgba(0,0,0,0.11), 0 2px 8px rgba(0,0,0,0.07)";
const HOVER_CARD_SHADOW = "0 16px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.10)";

export default function StaircaseSteps({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed]     = useState(0);
  const [hovered, setHovered]       = useState<number | null>(null);
  const [popupReady, setPopupReady] = useState(false);
  const triggered = useRef(false);

  // Stagger card reveals on scroll into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          steps.forEach((_, i) =>
            setTimeout(() => setRevealed(i + 1), i * 460)
          );
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [steps.length]);

  // Tiny delay so the popup transitions in rather than snapping
  useEffect(() => {
    if (hovered !== null) {
      const t = setTimeout(() => setPopupReady(true), 12);
      return () => clearTimeout(t);
    }
    setPopupReady(false);
  }, [hovered]);

  const dashOffset = PATH_LEN * (1 - revealed / COUNT);

  // Popup sits centred on the hovered card so it looks like a bigger
  // version of the card is popping up in-place.
  function popupStyle(i: number): React.CSSProperties {
    const { left, top } = cardPos(i);
    const popupLeft = left + (CARD_W - POPUP_W) / 2;   // negative → extends left of card
    const popupTop  = top  + (CARD_H - POPUP_H) / 2;   // negative → extends above card

    return {
      position: "absolute",
      width:    POPUP_W,
      height:   POPUP_H,
      left:     popupLeft,
      top:      popupTop,
      zIndex:   200,
      boxShadow: POPUP_SHADOWS[i],
      opacity:   popupReady ? 1 : 0,
      transform: popupReady ? "scale(1)" : "scale(0.88)",
      transformOrigin: "center center",
      transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.22,1,0.36,1)",
    };
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ width: TOTAL_W, height: TOTAL_H, overflow: "visible" }}
    >
      {/* ── Burgundy climbing line ─────────────────────────────── */}
      <svg
        className="pointer-events-none absolute inset-0 overflow-visible"
        width={TOTAL_W}
        height={TOTAL_H}
        aria-hidden
      >
        {/* Ghost */}
        <path
          d={PATH}
          fill="none"
          stroke="#6f1c28"
          strokeWidth="2"
          strokeOpacity="0.18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated line */}
        <path
          d={PATH}
          fill="none"
          stroke="#6f1c28"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={PATH_LEN}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.62s cubic-bezier(0.22,1,0.36,1)" }}
        />
        {/* Leading dot */}
        {revealed > 0 && (() => {
          const c = cardPos(revealed - 1);
          return (
            <circle
              cx={c.left - LINE_OFFSET}
              cy={c.top  - LINE_OFFSET}
              r="5"
              fill="#6f1c28"
              style={{ filter: "drop-shadow(0 0 7px rgba(111,28,40,0.8))" }}
            />
          );
        })()}
      </svg>

      {/* ── Compact staircase cards ────────────────────────────── */}
      {steps.map((step, i) => {
        const { left, top } = cardPos(i);
        const isVisible = i < revealed;
        const isHovered = hovered === i;

        return (
          <div
            key={step.n}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="absolute overflow-hidden rounded-2xl bg-white"
            style={{
              left,
              top,
              width:  CARD_W,
              height: CARD_H,
              zIndex: isHovered ? 50 : i + 1,
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(36px)",
              boxShadow: isHovered ? HOVER_CARD_SHADOW : BASE_SHADOW,
              transition: "opacity 0.62s ease, transform 0.62s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease",
              cursor: "default",
            }}
          >
            {/* Image - top 40% */}
            <div className="relative w-full" style={{ height: CARD_H * 0.40 }}>
              <Image
                src={step.image}
                alt={step.alt}
                fill
                className="object-cover"
                sizes="162px"
              />
              <div className={`absolute inset-0 ${step.tone}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <span
                className="absolute left-2.5 top-2.5 rounded-full bg-black/45 font-semibold text-white backdrop-blur-sm"
                style={{ fontSize: "0.59rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "2px 8px" }}
              >
                Step {step.n}
              </span>
            </div>

            {/* Text - bottom 60% */}
            <div className="flex flex-col justify-between p-4" style={{ height: CARD_H * 0.60 }}>
              <div className="overflow-hidden">
                <span className="font-heading text-primary/12 leading-none" style={{ fontSize: "2.2rem" }}>
                  {step.n}
                </span>
                <h3 className="mt-1 font-heading leading-tight text-charcoal" style={{ fontSize: "0.95rem" }}>
                  {step.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-ink/55 line-clamp-3" style={{ fontSize: "0.67rem" }}>
                  {step.body}
                </p>
              </div>
              <div
                className="mt-2 h-0.5 w-7 shrink-0 rounded-full"
                style={{ background: ACCENT_COLORS[i], opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease 0.3s" }}
              />
            </div>
          </div>
        );
      })}

      {/* ── Full-size popup card (mobile-equivalent layout) ────── */}
      {hovered !== null && (
        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ ...popupStyle(hovered), height: POPUP_H }}
          onMouseEnter={() => setHovered(hovered)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Full-width image - reduced height to give more room to text */}
          <div className="relative w-full" style={{ height: 130 }}>
              <Image
                src={steps[hovered].image}
                alt={steps[hovered].alt}
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className={`absolute inset-0 ${steps[hovered].tone}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3">
                <span
                  className="rounded-full bg-black/45 font-semibold text-white backdrop-blur-sm"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", padding: "2px 8px" }}
                >
                  Step {steps[hovered].n}
                </span>
              </div>
            </div>

          {/* Full content - tightened sizes so everything fits */}
          <div className="flex flex-col justify-between p-4" style={{ height: POPUP_H - 130 }}>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-primary/15 leading-none" style={{ fontSize: "2.5rem" }}>
                  {steps[hovered].n}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-2 font-heading leading-snug text-charcoal" style={{ fontSize: "1.25rem" }}>
                {steps[hovered].title}
              </h3>
              <p className="mt-2 text-ink/70" style={{ fontSize: "0.875rem", lineHeight: "1.55" }}>
                {steps[hovered].body}
              </p>
            </div>
            <div
              className="mt-3 h-0.5 w-8 shrink-0 rounded-full"
              style={{ background: ACCENT_COLORS[hovered] }}
            />
          </div>
        </div>
      )}
    </div>
  );
}