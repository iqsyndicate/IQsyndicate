"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Globe2,
  ShieldCheck,
} from "lucide-react";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    function tick(now: number) {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

function useTypewriter(text: string, start: boolean, speed = 35) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [start, text, speed]);

  return displayed;
}

export default function Hero() {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const pipeline = useCountUp(250, statsInView);
  const ventures = useCountUp(30, statsInView);

  const typed = useTypewriter(
    "IQ Syndicate bridges the financing gap between indigenous climate founders and institutional capital — through technical assistance, patient capital, and structured aggregation.",
    true,
    18
  );

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-stone overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12 pt-20 pb-16 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Headline block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              id="hero-heading"
              className="font-heading text-charcoal text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold tracking-tight max-w-xl"
            >
              Enabling{" "}
              <span className="text-gold">African-Led</span> Climate Ventures
              to Scale
            </h1>

            <p className="mt-7 max-w-md text-lg md:text-xl leading-8 text-ink/70 font-medium min-h-[8rem] md:min-h-[7rem]">
              {typed}
              <span
                className="inline-block w-[2px] h-5 bg-gold ml-1 align-middle"
                style={{ animation: "blink-caret 0.8s step-end infinite" }}
              />
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/model"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white pl-7 pr-2 py-2 rounded-full font-semibold transition-all text-sm tracking-wide shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5"
              >
                Explore Our Model
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 text-charcoal text-sm font-semibold border-b-2 border-charcoal/20 pb-1 hover:border-gold hover:text-gold-dark hover:gap-3 transition-all"
              >
                Apply for Support →
              </Link>
            </div>
          </motion.div>

          {/* Right: Blob image + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Eyebrow tag floating above blob */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-border"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-gold"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
                Nigeria · Africa-First Climate Finance
              </span>
            </motion.div>

            {/* Blob image - rounded with one squared corner, like reference */}
            <motion.div
              className="relative aspect-[16/11] w-full overflow-hidden shadow-2xl"
              style={{
                borderRadius: "3rem 0.75rem 3rem 3rem",
              }}
            >
              <Image
                src="/images/hero.png"
                alt="Climate finance growth represented by coins and a growing plant"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
            </motion.div>

            {/* Animated dotted route line */}
            <svg
              className="absolute top-[12%] left-[8%] w-[55%] h-[45%] pointer-events-none z-10"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M8 85 Q35 30 95 22"
                stroke="var(--amber)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                style={{ animation: "dash-flow 1.5s linear infinite" }}
              />
              <circle cx="8" cy="85" r="3.5" fill="var(--amber)" />
              <circle cx="95" cy="22" r="3.5" fill="var(--amber)" />
            </svg>

            {/* Floating stat card */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ animation: "float-slow 6s ease-in-out infinite" }}
              className="absolute -bottom-8 right-2 md:right-6 bg-white rounded-2xl shadow-2xl border border-border px-7 py-5 flex items-center gap-6 z-20"
            >
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-none">
                  ${pipeline}M+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-ink/50 mt-1.5 whitespace-nowrap">
                  Pipeline mobilized
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-none">
                  {ventures}+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-ink/50 mt-1.5 whitespace-nowrap">
                  Ventures supported
                </p>
              </div>
            </motion.div>

            {/* Decorative blurred accent shape behind image */}
            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 rounded-full bg-gold/15 blur-2xl" />
            <div className="absolute -z-10 bottom-1/4 -left-10 w-28 h-28 rounded-full bg-forest/10 blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom strip - service offerings, popped against background */}
      <div className="relative bg-sand border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12 py-10 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                label: "Capital Mobilization",
                desc: "Connecting capital to opportunity",
              },
              {
                icon: Globe2,
                label: "Investment Advisory",
                desc: "Strategic guidance for growth",
              },
              {
                icon: ShieldCheck,
                label: "Sustainable Impact",
                desc: "Outcomes that endure",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-border px-5 py-5 shadow-md hover:shadow-xl hover:border-gold/40 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 text-gold-dark flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-charcoal text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-xs text-ink/50 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}