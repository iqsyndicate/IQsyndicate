"use client";

import { motion } from "framer-motion";
import { Landmark, Sprout, Leaf, Users } from "lucide-react";

const nodes = [
  {
    title: "Capital",
    description:
      "Investors, development finance institutions and funding partners.",
    icon: Landmark,
    position: "top-0 left-1/2 -translate-x-1/2",
    from: { x: 0, y: -60 },
  },
  {
    title: "Ventures",
    description:
      "High-potential businesses positioned for growth and scale.",
    icon: Sprout,
    position: "top-1/2 right-0 -translate-y-1/2",
    from: { x: 60, y: 0 },
  },
  {
    title: "Impact",
    description:
      "Jobs, resilience, sustainability and economic transformation.",
    icon: Leaf,
    position: "bottom-0 left-1/2 -translate-x-1/2",
    from: { x: 0, y: 60 },
  },
  {
    title: "Partners",
    description:
      "Technical assistance providers, ecosystem actors and advisors.",
    icon: Users,
    position: "top-1/2 left-0 -translate-y-1/2",
    from: { x: -60, y: 0 },
  },
];

export default function StrategicEcosystem() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Section divider accent at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gold rounded-full -mt-px" />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Fade mask so texture is subtle at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Decorative background blobs for depth */}
      <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-forest/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Our Ecosystem
          </p>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
            Connecting Capital,
            <br />
            Capability &amp; Opportunity
          </h2>

          <p className="mt-4 text-lg text-ink/70 leading-8">
            IQ Syndicate operates at the centre of an ecosystem designed to
            mobilize capital, strengthen enterprises and generate sustainable
            outcomes.
          </p>
        </div>

        {/* Desktop Hub */}
        <div className="hidden lg:flex justify-center mt-12">
          <div className="relative w-[1000px] h-[760px]">
            {/* Lines */}
            <div className="absolute left-1/2 top-[150px] bottom-[150px] w-px bg-border -translate-x-1/2" />
            <div className="absolute top-1/2 left-[150px] right-[150px] h-px bg-border -translate-y-1/2" />

            {/* Animated pulse along lines */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[300px] h-[300px]
                rounded-full
                bg-primary
                text-white
                flex flex-col justify-center items-center
                shadow-2xl
                z-10
              "
            >
              <span className="text-gold-light text-xs tracking-[0.25em] uppercase font-semibold">
                Core Platform
              </span>

              <h3 className="mt-3 font-heading text-4xl">IQ Syndicate</h3>

              <p className="mt-4 text-center text-sm leading-6 px-10 text-white/75 max-w-[220px]">
                Structuring opportunities, mobilizing capital and enabling
                growth.
              </p>
            </motion.div>

            {/* Outer Nodes - assemble from their respective directions */}
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{
                  opacity: 0,
                  x: node.from.x * 4,
                  y: node.from.y * 4,
                  scale: 0.85,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${node.position}`}
              >
                <div className="w-[260px] bg-white border border-border rounded-3xl p-7 shadow-lg hover:shadow-xl hover:border-gold/40 transition-all">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 text-gold-dark mb-5">
                    <node.icon className="h-6 w-6" />
                  </div>

                  <h4 className="font-heading text-xl font-semibold text-charcoal">
                    {node.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-ink/65">
                    {node.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Version - mini diagram */}
        <div className="lg:hidden mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* Lines */}
            <div className="absolute left-1/2 top-[18%] bottom-[18%] w-px bg-border -translate-x-1/2" />
            <div className="absolute top-1/2 left-[18%] right-[18%] h-px bg-border -translate-y-1/2" />

            {/* Pulse */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[34%] aspect-square
                rounded-full
                bg-primary
                text-white
                flex flex-col justify-center items-center
                shadow-xl
                z-10
                p-2
              "
            >
              <span className="text-gold-light text-[7px] tracking-[0.2em] uppercase font-semibold">
                Core
              </span>
              <h3 className="font-heading text-sm md:text-base leading-tight text-center">
                IQ Syndicate
              </h3>
            </motion.div>

            {/* Outer Nodes - mini cards */}
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{
                  opacity: 0,
                  x: node.from.x * 1.5,
                  y: node.from.y * 1.5,
                  scale: 0.85,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${node.position}`}
              >
                <div className="w-[100px] sm:w-[120px] bg-white border border-border rounded-2xl p-3 shadow-md">
                  <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-gold/10 text-gold-dark mb-1.5">
                    <node.icon className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="font-heading text-xs font-semibold text-charcoal leading-tight">
                    {node.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Descriptions below, listed for accessibility/readability */}
          <div className="mt-10 grid grid-cols-1 gap-4 w-full">
            {nodes.map((node) => (
              <div
                key={node.title}
                className="flex items-start gap-3 bg-white border border-border rounded-2xl p-4"
              >
                <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-gold/10 text-gold-dark flex-shrink-0">
                  <node.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-charcoal">
                    {node.title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-ink/65">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}