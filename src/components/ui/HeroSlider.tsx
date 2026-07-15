"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  headlineLines: [string, string];
  body: string;
};

export default function HeroSlider({
  slides,
  interval = 6500,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const current = slides[active];

  return (
    <section className="grain relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-ink">
      {/* Background images crossfade between slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="hero-slide absolute inset-0"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={i === active ? "ken-burns object-cover" : "object-cover"}
            />
          </div>
        ))}
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 py-28 text-center md:px-10">
        <span
          key={`eyebrow-${active}`}
          className="hero-slide eyebrow-pill mx-auto mb-7"
        >
          {current.eyebrow}
        </span>

        <h1
          key={`headline-${active}`}
          className="hero-slide mx-auto max-w-3xl text-white"
        >
          <span>{current.headlineLines[0]}</span>
          <br className="hidden sm:block" />
          <span className="sm:inline"> {current.headlineLines[1]}</span>
        </h1>

        <p
          key={`body-${active}`}
          className="hero-slide mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/88"
        >
          {current.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-7">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Explore Our Model
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/apply"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Apply for Support
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
