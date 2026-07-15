"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  Wallet,
  Wrench,
  Repeat,
  Home,
  Users,
  Leaf,
  Briefcase,
  Zap,
  Building2,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { icon: ClipboardCheck, title: "Apply",                    body: "Get assessed through our quick, Open-Banking-powered credit tool." },
  { icon: Wallet,          title: "Pay 20% Upfront",           body: "Your contribution secures your commitment and unlocks the financing." },
  { icon: Wrench,          title: "Get Installed",             body: "An accredited partner installs a quality-assured solar system tailored to your energy needs." },
  { icon: Repeat,          title: "Repay at 9% Interest",       body: "Monthly installments are matched to your income or business revenue — typically lower than what you already spend on fuel." },
  { icon: Home,            title: "Own It Outright",           body: "Once you complete repayment, the system is yours. Your former fuel spend becomes permanent savings." },
];

const impact = [
  { value: "1,000+",  label: "Households and MSMEs financed within two years", tone: "burgundy" as const },
  { value: "6,500+",  label: "Individuals reached with improved energy access", tone: "forest" as const },
  { value: "60–70%",  label: "Reduction in monthly energy costs for customers", tone: "gold" as const },
  { value: "800+",    label: "Tonnes of CO₂ avoided every year",                tone: "burgundy" as const },
  { value: "40–50",   label: "Green jobs created across sales, installation, and maintenance", tone: "forest" as const },
  { value: "≥40%",    label: "Women-led MSME participation",                    tone: "gold" as const },
];

const impactTone: Record<string, string> = {
  burgundy: "bg-primary text-white",
  forest:   "bg-forest text-white",
  gold:     "bg-gold-dark text-white",
};

const audiences = [
  { icon: Zap,       title: "Band A Consumers",       body: "Electricity consumers paying premium tariffs for unreliable grid power." },
  { icon: UserCheck, title: "Working Professionals",  body: "Individuals with stable, verifiable income seeking to cut recurring fuel costs." },
  { icon: Building2, title: "MSMEs",                  body: "Businesses spending thousands of naira daily on generator fuel, including women-led enterprises." },
];

export default function ConsumerFinancingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="grain relative flex min-h-[72vh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=80"
            alt="Solar panels installed on a Nigerian household roof"
            fill
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 pb-12 pt-28 md:pb-16 md:pt-32">
          <Reveal direction="down">
            <span className="eyebrow-pill mb-7 inline-flex">
              Special Projects
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-white">
              Consumer Financing Project
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/88">
              Financing solar power for Nigerian households and businesses.
            </p>
          </Reveal>
          <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Apply Now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Partner With Us
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── The Challenge ─────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">The Challenge</p>
              <h2 className="mt-4 text-charcoal">
                The technology exists. The financing doesn't.
              </h2>
            </Reveal>
            <Reveal direction="right">
              <p className="text-[15.5px] leading-7 text-ink/74">
                Over 85 million Nigerians lack reliable electricity. Households
                and businesses spend billions each year running petrol and
                diesel generators, yet the solar systems that could replace them
                remain out of reach — not because the technology is unavailable,
                or because demand is lacking, but because affordable financing
                does not exist. Commercial interest rates of{" "}
                <span className="font-semibold text-charcoal">27–33%</span> can
                nearly double the cost of a solar system, locking out the very
                customers who would benefit most.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              { v: "85M+",   l: "Nigerians lack reliable electricity" },
              { v: "27–33%", l: "Typical commercial interest rates on solar financing" },
              { v: "2x",     l: "Cost increase caused by high-rate financing" },
              { v: "9%",     l: "IQ Syndicate's interest rate for eligible customers" },
            ].map((s, i) => (
              <Reveal key={s.l} direction="up" delay={i * 90}>
                <div className="card-float rounded-2xl bg-cream p-6 shadow-md shadow-black/5">
                  <p className="font-heading text-4xl text-primary md:text-5xl">{s.v}</p>
                  <p className="mt-3 text-[12.5px] leading-5 text-ink/60">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="bg-forest py-10 text-white md:py-14">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow-on-dark">How It Works</p>
            <h2 className="mt-4 text-white">
              Five steps from application to ownership.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/76">
              We bridge the gap between clean-energy providers and the
              customers who need affordable financing.
            </p>
          </Reveal>

          {/* Connecting line */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px w-full bg-white/15 md:block" />

            <div className="grid gap-8 md:grid-cols-5 md:gap-5">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} direction="up" delay={i * 100}>
                    <div className="relative">
                      <div className="relative z-10 flex h-13 w-13 items-center justify-center rounded-full bg-primary shadow-lg shadow-black/25">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                      </div>
                      <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1.5 text-xl text-white">{step.title}</h3>
                      <p className="mt-2.5 text-[13px] leading-6 text-white/70">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why It Works ──────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Why It Works</p>
              <h2 className="mt-4 text-charcoal">
                Cash-flow positive from month one.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/74">
                A standard solar system meets up to 85% of your energy needs.
                Because your monthly installment is typically lower than what
                you already spend on generator fuel, you are cash-flow positive
                from month one — you start saving before you finish paying.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-ink/74">
                No new money required. We simply convert your existing fuel
                expense into ownership of a clean, reliable asset.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="card-float relative h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-black/15">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1400&q=80"
                  alt="Solar-powered household with reduced energy costs"
                  fill
                  className="object-cover"
                />
                <div className="photo-duotone-gold absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                    85% Energy Coverage
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white">
                    Your fuel spend becomes permanent savings.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Our Impact ────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Our Impact</p>
            <h2 className="mt-4 text-charcoal">Target outcomes over two years.</h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impact.map((m, i) => {
              const dirs = ["left", "up", "right", "left", "up", "right"] as const;
              return (
                <Reveal key={m.label} direction={dirs[i]} delay={i * 80}>
                  <div className={`card-float h-full rounded-2xl p-7 shadow-lg shadow-black/10 ${impactTone[m.tone]}`}>
                    <p className="font-heading text-4xl md:text-5xl">{m.value}</p>
                    <p className="mt-3 text-[13px] leading-5 opacity-85">{m.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Who We Serve</p>
            <h2 className="mt-4 text-charcoal">
              Built for the customers who need it most.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              const dirs = ["left", "up", "right"] as const;
              return (
                <Reveal key={a.title} direction={dirs[i]} delay={i * 100}>
                  <div className="card-float h-full rounded-2xl bg-white p-7 shadow-md shadow-black/6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-xl text-charcoal">{a.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-6 text-ink/68">{a.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Ready to Switch to Clean Energy?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  Stop paying for fuel. Start owning your power. Apply today and
                  join thousands of Nigerians making the switch to affordable,
                  reliable solar energy.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Apply Now
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 border-b border-white/40 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

