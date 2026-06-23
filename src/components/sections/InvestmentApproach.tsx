"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Opportunity Discovery",
    description:
      "Identifying ventures, initiatives and opportunities with strong growth and impact potential across African markets. We scan ecosystems, build pipelines and surface the deals others miss.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
    tag: "Discover",
  },
  {
    id: "02",
    title: "Investment Assessment",
    description:
      "Evaluating investment readiness, strategic fit, financial viability and growth prospects with rigorous and empathetic due diligence built for emerging market realities.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    tag: "Assess",
  },
  {
    id: "03",
    title: "Structuring",
    description:
      "Designing capital frameworks, technical assistance and partnership structures that are fit-for-purpose — balancing investor requirements with founder sustainability.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    tag: "Structure",
  },
  {
    id: "04",
    title: "Capital Mobilization",
    description:
      "Connecting opportunities with aligned investors, DFIs and catalytic funding sources at the right stage, in the right structure, with the right terms.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    tag: "Mobilize",
  },
  {
    id: "05",
    title: "Growth & Impact",
    description:
      "Supporting implementation, scale and measurable long-term economic and environmental outcomes. We stay engaged beyond the transaction.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    tag: "Scale",
  },
];

export default function InvestmentApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
  };

  useEffect(() => {
    if (autoplay) startAutoplay();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setAutoplay(false);
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#faf9f7" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      <div className="absolute top-0 right-0 w-32 h-1 bg-gold rounded-l-full -mt-px" />

      {/* ── MOBILE ── */}
      <div className="lg:hidden px-5 pt-16 pb-16">
        {/* Header */}
        <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
          Investment Approach
        </p>
        <h2 className="mt-4 font-heading text-4xl text-charcoal leading-[1.05]">
          How We Turn Opportunity Into{" "}
          <span className="italic text-gold">Impact</span>
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/55 mb-10">
          Our approach combines investment expertise, strategic partnerships
          and technical support to help high-potential ventures scale
          sustainably.
        </p>

        {/* Each step = full card with image inside */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const active = index === activeStep;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <button
                  onClick={() => handleStepClick(index)}
                  className={`
                    w-full text-left rounded-2xl overflow-hidden border transition-all duration-300
                    ${active
                      ? "border-gold shadow-lg shadow-gold/10"
                      : "border-border bg-white"
                    }
                  `}
                >
                  {/* Image inside card — expands when active */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 200 }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full overflow-hidden"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold uppercase tracking-wider">
                          {step.id} — {step.tag}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Text row */}
                  <div className="flex items-center gap-4 px-5 py-4 bg-white">
                    <span
                      className={`font-heading text-2xl flex-shrink-0 transition-colors duration-300 ${active ? "text-gold" : "text-charcoal/25"}`}
                    >
                      {step.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-heading text-lg transition-colors duration-300 ${active ? "text-charcoal" : "text-charcoal/60"}`}
                      >
                        {step.title}
                      </h3>
                      <AnimatePresence>
                        {active && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden text-sm leading-6 text-ink/60 mt-2"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 transition-all duration-300 ${active ? "text-gold rotate-180" : "text-charcoal/30"}`}
                    />
                  </div>

                  {/* Progress bar */}
                  {active && (
                    <div className="h-0.5 bg-border overflow-hidden">
                      <motion.div
                        className="h-full bg-gold"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        key={`mob-prog-${index}`}
                      />
                    </div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          
            <a href="/investment-process"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white pl-7 pr-2 py-2 rounded-full font-semibold transition-all text-sm tracking-wide shadow-lg shadow-gold/20"
          >
            Explore Our Full Process
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>

      {/* ── DESKTOP ── true split, image panel is fixed-position sibling */}
      <div className="hidden lg:block">
        <div className="flex min-h-screen">

          {/* Left: scrollable content — exactly half viewport */}
          <div
            className="w-1/2 flex flex-col py-20 px-12 xl:px-16"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div>
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
                Investment Approach
              </p>
              <h2 className="mt-4 font-heading text-5xl xl:text-6xl text-charcoal leading-[1.05]">
                How We Turn
                <br />
                Opportunity Into{" "}
                <span className="italic text-gold">Impact</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/55 max-w-sm">
                Our approach combines investment expertise, strategic
                partnerships and technical support to help high-potential
                ventures scale sustainably.
              </p>
            </div>

            {/* Steps */}
            <div className="mt-12 flex flex-col gap-2 flex-1">
              {steps.map((step, index) => {
                const active = index === activeStep;
                return (
                  <button
                    key={step.id}
                    onMouseEnter={() => handleStepClick(index)}
                    onClick={() => handleStepClick(index)}
                    className={`
                      group relative w-full text-left rounded-2xl p-5 xl:p-6
                      transition-all duration-300
                      ${active
                        ? "bg-white shadow-xl shadow-black/6 border border-border"
                        : "border border-transparent hover:bg-white/70 hover:border-border"
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className={`font-heading text-3xl xl:text-4xl leading-none flex-shrink-0 transition-colors duration-300 ${active ? "text-gold" : "text-charcoal/20 group-hover:text-charcoal/40"}`}
                      >
                        {step.id}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h3
                            className={`font-heading text-xl xl:text-2xl transition-colors duration-300 ${active ? "text-charcoal" : "text-charcoal/55 group-hover:text-charcoal/80"}`}
                          >
                            {step.title}
                          </h3>
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${active ? "bg-gold border-gold" : "border border-border group-hover:border-charcoal/30"}`}
                          >
                            <ArrowUpRight
                              className={`h-3.5 w-3.5 transition-all duration-300 ${active ? "text-white translate-x-0.5 -translate-y-0.5" : "text-charcoal/30"}`}
                            />
                          </div>
                        </div>

                        <AnimatePresence>
                          {active && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm xl:text-base leading-7 text-ink/60">
                                {step.description}
                              </p>
                              <div className="mt-4 h-0.5 bg-border overflow-hidden rounded-full">
                                <motion.div
                                  className="h-full bg-gold"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={
                                    autoplay
                                      ? { duration: 4, ease: "linear" }
                                      : { duration: 0.3 }
                                  }
                                  key={`progress-${activeStep}-${autoplay}`}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10">
              
                <a href="/investment-process"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white pl-7 pr-2 py-2 rounded-full font-semibold transition-all text-sm tracking-wide shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                Explore Our Full Process
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: fixed image — exactly half viewport, pinned to screen */}
          <div className="w-1/2 sticky top-0 h-screen overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={steps[activeStep].image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Overlay content on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 xl:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-white text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                    {steps[activeStep].id} — {steps[activeStep].tag}
                  </span>
                  <h3 className="font-heading text-3xl xl:text-4xl text-white leading-tight max-w-sm">
                    {steps[activeStep].title}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* Step dots */}
              <div className="flex items-center gap-2 mt-6">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`transition-all duration-300 rounded-full ${i === activeStep ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}