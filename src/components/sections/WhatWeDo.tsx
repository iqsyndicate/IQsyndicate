"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Investment Readiness",
    description:
      "Preparing ventures and enterprises for engagement with institutional, commercial and impact investors through strategic positioning, financial preparation and transaction support.",
    href: "/services#investment-readiness",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    imageAlt: "Business professional reviewing investment documents",
  },
  {
    number: "02",
    title: "Capital Mobilization",
    description:
      "Connecting high-potential opportunities with aligned funding partners, development finance institutions and catalytic capital providers.",
    href: "/services#capital-mobilization",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    imageAlt: "Financial growth and capital markets",
  },
  {
    number: "03",
    title: "Technical Assistance",
    description:
      "Providing operational, strategic and capacity-building support that strengthens execution and long-term sustainability.",
    href: "/services#technical-assistance",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    imageAlt: "Team collaboration and technical support",
  },
  {
    number: "04",
    title: "Strategic Partnerships",
    description:
      "Convening stakeholders, ecosystem actors and implementation partners to unlock scalable impact and sustainable growth.",
    href: "/services#strategic-partnerships",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80",
    imageAlt: "Strategic partnership and collaboration",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#faf9f7" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-gold rounded-r-full -mt-px" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12 py-20 md:py-28">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[4rem] text-charcoal leading-[1.05]">
            Strategic Support
            <br />
            Across The Investment{" "}
            <span className="italic text-gold">Lifecycle</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/60 max-w-lg">
            We work alongside ventures, investors and development partners to
            strengthen opportunities, mobilize resources and generate
            sustainable outcomes across Africa.
          </p>
        </div>

        {/* Image cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
            >
              <Link href={service.href} className="block w-full h-full">
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Always-on dark base overlay - light, enough to show number */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay - darker so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number - visible at rest, slides up and fades on hover */}
                <div className="absolute bottom-5 left-5 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                  <span className="font-heading text-6xl text-white/25 leading-none select-none">
                    {service.number}
                  </span>
                </div>

                {/* Title only - visible at rest at bottom */}
                <div className="absolute bottom-5 left-5 right-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="font-heading text-xl text-white font-semibold leading-tight drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* Full content - slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                  {/* Arrow */}
                  <div className="absolute top-4 md:top-5 right-4 md:right-5 h-8 md:h-9 w-8 md:w-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="h-3.5 md:h-4 w-3.5 md:w-4 text-white" />
                  </div>

                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2 md:mb-3">
                    {service.number}
                  </span>

                  <h3 className="font-heading text-lg md:text-2xl text-white font-semibold leading-tight mb-2 md:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-5 md:leading-6 text-white/80 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-3 md:mt-5 h-px w-full bg-white/20" />

                  <span className="mt-2 md:mt-4 text-xs text-white/60 uppercase tracking-wider font-medium">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Thesis strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 rounded-3xl bg-gold px-10 md:px-14 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <p className="font-heading text-2xl md:text-3xl text-white leading-snug max-w-2xl">
            Capital alone does not create transformation - the right
            structure, partnerships and execution capacity are{" "}
            <span className="italic">equally essential.</span>
          </p>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 bg-white text-gold-dark hover:bg-charcoal hover:text-white pl-6 pr-2 py-2 rounded-full font-semibold transition-all text-sm tracking-wide whitespace-nowrap flex-shrink-0"
          >
            View All Services
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-gold/10 group-hover:bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}