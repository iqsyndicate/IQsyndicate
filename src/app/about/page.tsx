import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Target as TargetIcon,
  Eye,
  Compass,
  Settings2,
  Shuffle,
  Boxes,
  Handshake,
  Search,
  Layers,
  Hourglass,
  Scale,
  ShieldCheck,
  Users,
  BookOpen,
  Quote,
  Sprout,
  TrendingUp,
  Globe2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AfricaMap from "@/components/ui/AfricaMap";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a specialised climate infrastructure and advisory firm established to close the financing gap for locally led climate ventures in Africa.",
};

const modelStages = [
  {
    icon: Compass,
    title: "Climate Advisory",
    body: "Strategic support across project design, market intelligence, and product validation for climate founders and institutional partners.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Settings2,
    title: "Technical Assistance",
    body: "A 6–18 month bespoke programme deploying specialists in financial modelling, legal structuring, operations, and market strategy.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Shuffle,
    title: "Mobilist Facility",
    body: "A blended finance vehicle combining philanthropic first-loss capital with concessional debt to fund investment-ready climate ventures.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Boxes,
    title: "Portfolio Aggregation",
    body: "Bundling performing ventures into institutional-grade vehicles and connecting them to large-scale capital through structured deal rooms.",
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
  {
    icon: Handshake,
    title: "Investment Facilitation",
    body: "Connecting investment-ready ventures with the institutional and commercial investors positioned to fund their next stage of growth.",
    tone: "bg-primary-light text-white",
    iconTone: "bg-white/15 text-white",
  },
];

const modelDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
  "left",
];

const pillars = [
  {
    icon: TargetIcon,
    title: "Risk-First Thinking",
    body: "We seek to understand, absorb, and effectively price early-stage risk, not avoid it. Our returns are compensation for genuine risk-taking.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Search,
    title: "Deep Diligence",
    body: "We work alongside founders for months before deploying capital. Our due diligence is qualitative, AI-driven, and longitudinal, not just documentary.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Layers,
    title: "Aligned Instruments",
    body: "Convertible instruments reflect our belief that the instrument must fit the venture's stage, and not the other way around.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Hourglass,
    title: "Patient Capital",
    body: "We define success over a 5–10 year horizon, not a 24-month return cycle. Our LPs share this horizon.",
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const pillarDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
];

const theoryOfChange = [
  {
    icon: Sprout,
    label: "If",
    body: "Early-stage African climate ventures receive structured technical assistance and fit-for-purpose capital,",
  },
  {
    icon: TrendingUp,
    label: "Then",
    body: "They will achieve the project maturity, revenue scale, and documentation standards required to attract commercial capital,"
  },
  {
    icon: Globe2,
    label: "Therefore",
    body: "The communities they serve will gain sustained access to clean energy, climate adaptation tools, and economic opportunity.",
  },
];

const governance = [
  {
    icon: Scale,
    title: "Legal Structure",
    body: "Private limited liability company (Ltd.), incorporated in Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Investment Committee",
    body: "Minimum three members, including at least one independent member. Sole authority over all capital deployment decisions. No capital may be disbursed without formal IC approval.",
  },
  {
    icon: Users,
    title: "Board of Directors",
    body: "Constituted by a founding partner, the Executive Chairman, and independent non-executive directors. Provides strategic oversight of operations, financial health, and stakeholder obligations.",
  },
  {
    icon: BookOpen,
    title: "Advisory Board",
    body: "Senior practitioners in African infrastructure finance, climate policy, project finance, and international development. Formal terms of reference, bi-annual meetings, and ad hoc transaction support.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────────────────────── HERO ─────────────────────────
          Bespoke split layout for this page - text on a warm surface,
          a floating framed photograph instead of a full-bleed image. */}
      <section className="relative overflow-hidden bg-cream pb-10 pt-24 md:pb-14 md:pt-28">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-gold-light/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-forest/10 blur-3xl"
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">About Us</p>
              <h1 className="mt-5 max-w-lg text-charcoal">Who We Are</h1>
              <p className="mt-6 max-w-md text-[15.5px] leading-7 text-ink/74">
                We are a specialised climate infrastructure and
                advisory firm established to close the financing gap for
                locally led climate ventures in Africa.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-7">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
                >
                  See Our Services
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal"
                >
                  Apply for Support
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" className="relative mt-6 md:mt-10 lg:mt-12">
              <div className="card-float relative h-[320px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/20 md:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
                  alt="Solar infrastructure under construction in Nigeria"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                />
                <div className="photo-duotone-burgundy absolute inset-0" />
              </div>

              {/* Floating badge card overlapping the image corner */}
              {/* <div className="card-float absolute -bottom-8 -left-6 max-w-[220px] rounded-2xl bg-white p-5 shadow-xl shadow-black/15 md:-left-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Incorporated
                </p>
                <p className="mt-1 font-heading text-2xl text-charcoal">
                  Nigeria
                </p>
                <p className="mt-1 text-[12px] leading-5 text-ink/60">
                  A bridge institution for African-led climate capital.
                </p>
              </div> */}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── MISSION & VISION ───────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal direction="left">
              <div className="card-float h-full rounded-3xl bg-primary p-9 text-white shadow-xl shadow-black/10 md:p-11">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <TargetIcon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Mission
                </p>
                <h2
                  className="mt-3 leading-tight text-white"
                  style={{ fontSize: "clamp(1.35rem, 2.1vw, 1.8rem)", lineHeight: 1.2 }}
                >
                  To provide the right liquidity, prepared to take on
                  appropriate risk.
                </h2>
                <p className="mt-4 max-w-md text-[14.5px] leading-7 text-white/82">
                  That enables the scalability of African-led climate
                  infrastructure.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="card-float h-full rounded-3xl bg-forest p-9 text-white shadow-xl shadow-black/10 md:p-11">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Eye className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Vision
                </p>
                <h2
                  className="mt-3 leading-tight text-white"
                  style={{ fontSize: "clamp(1.35rem, 2.1vw, 1.8rem)", lineHeight: 1.2 }}
                >
                  A thriving, self-sustaining climate venture ecosystem.
                </h2>
                <p className="mt-4 max-w-md text-[14.5px] leading-7 text-white/82">
                  Where African-led climate ventures scale globally,
                  delivering sustainable prosperity and measurable
                  investment returns to communities and investors alike.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── THE PROBLEM WE SOLVE ───────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <div className="grid gap-10">
            <Reveal direction="left">
              <p className="institutional-eyebrow">The Problem We Solve</p>
              <h2 className="mt-4 max-w-3xl text-charcoal">A Market Failure by Design</h2>
              <p className="mt-5 max-w-4xl text-[15px] leading-7 text-ink/74">
                The African climate finance landscape is constrained by a critical shortage of fit-for-purpose capital that addresses the financing needs of locally led climate infrastructure projects. Although hundreds of billions of dollars are committed globally to climate finance each year, the overwhelming majority of these resources are directed toward large-scale infrastructure projects and foreign-led developers that offer the revenue certainty, institutional track record, and risk profile preferred by conventional investors. As a result, small-scale, locally led climate infrastructure projects, despite delivering essential climate solutions and serving underserved communities, remain systematically underserved by existing financing mechanisms.
              </p>
            </Reveal>

            <Reveal direction="right" className="max-w-4xl text-[15px] leading-7 text-ink/76">
              <p>
                This structural mismatch prevents capital from reaching enterprises that are well positioned to address local climate and energy challenges. The lack of appropriately structured financing, combined with limited access to technical assistance, constrains product innovation, business growth, operational scalability, and long-term sustainability, even where strong market demand already exists. Ultimately, this financing gap slows the deployment of climate infrastructure, limits access to affordable clean energy and other essential climate solutions, suppresses local job creation and development, and leaves vulnerable communities disproportionately exposed to the impacts of climate change.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── PULL QUOTE ─────────────────────────
          A pill/semi-circular panel paired with a floating, gently
          animated continent illustration. */}
      <section className="bg-primary py-10 text-white md:py-14">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-4">
            <Reveal direction="left">
              <div className="card-float relative overflow-hidden rounded-[2rem] bg-primary-deep p-8 pl-8 shadow-2xl shadow-black/20 sm:p-10 sm:pl-10 md:rounded-r-3xl md:rounded-l-[999px] md:p-12 md:pl-14">
                <Quote className="h-8 w-8 text-gold-light sm:h-9 sm:w-9" strokeWidth={1.5} />
                <p className="mt-5 w-full max-w-full font-heading text-[1.05rem] leading-[1.45] text-white sm:text-[1.2rem] md:mt-6 md:text-[1.7rem] md:leading-[1.4]">
                  Africa does not have a liquidity problem in climate finance. It has a risk valuation problem. We design instruments that deal with risk, not just liquidity.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" className="mx-auto mt-8 block h-[220px] w-[220px] md:mt-0 md:h-[260px] md:w-[240px]">
              <AfricaMap className="h-full w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── OUR MODEL ─────────────────────────
          A compact connected timeline - every stage stays visible at
          once, no scroll-pinning, no overlap with neighboring sections. */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <p className="institutional-eyebrow">Core Service Areas</p>
            <p className="mt-3 text-[15px] leading-7 text-ink/72">
              We do not simply deploy capital. We help build a replicable, self-sustaining ecosystem for Africa-owned climate infrastructure, with depth and inclusion at its centre
            </p>
          </Reveal>

          <div className="relative">
            {/* connecting line, desktop only */}
            <svg
              className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px w-full md:block"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#b38a5b"
                strokeDasharray="2 6"
                style={{ animation: "dash-flow 2.4s linear infinite" }}
              />
            </svg>

            <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-5 md:gap-x-4">
              {modelStages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <Reveal key={stage.title} direction={modelDirections[i]} delay={i * 90}>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                      <div className="relative z-10">
                        <div
                          className={`card-float flex h-16 w-16 items-center justify-center rounded-full shadow-lg shadow-black/15 ${stage.tone}`}
                        >
                          <Icon className="h-7 w-7" strokeWidth={1.75} />
                        </div>
                        <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary shadow-md shadow-black/10">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg leading-tight text-charcoal md:text-xl">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-5 text-ink/62">
                        {stage.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── INVESTMENT PHILOSOPHY ─────────────────────────
          Same pattern as the homepage section, for consistency across the site. */}
      {/* <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Investment Philosophy</p>
            <h2 className="mt-4 text-charcoal">
              Risk Absorption at the Earliest Stage
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              Our investment philosophy rests on a single premise: risk
              absorption at the earliest stage of climate infrastructure
              project development is the most valuable and scarce input
              in Africa. Every structural decision we make - from
              instrument design to fee model - flows from this premise.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} direction={pillarDirections[i]} delay={i * 110}>
                  <div
                    className={`card-float h-full rounded-3xl p-8 shadow-xl shadow-black/15 md:p-10 ${pillar.tone}`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconTone}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-7 text-3xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-sm text-[14.5px] leading-7 opacity-82">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section> */}

      {/* ───────────────────────── THEORY OF CHANGE ───────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-10 text-white md:py-14">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-light/10 blur-3xl"
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow-on-dark">Theory of Change</p>
            <h2 className="mt-4 text-white">
              If Foundations Are Built, Scale Follows
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/76">
              Our Theory of Change is grounded in the
              recognition that the structural exclusion of indigenous
              African climate ventures from fit-for-purpose capital is
              not an isolated financing challenge. It is the proximate
              cause of a broader development failure.
            </p>
          </Reveal>

          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
            {theoryOfChange.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-1 items-stretch gap-4">
                  <Reveal direction="up" delay={i * 140} className="flex-1">
                    <div className="card-float glass-card flex h-full flex-col rounded-2xl p-7 shadow-xl shadow-black/20">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                        <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                      </div>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                        {step.label}
                      </p>
                      <p className="mt-3 text-[14.5px] leading-7 text-white/88">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                  {i < theoryOfChange.length - 1 && (
                    <div className="flex items-center justify-center">
                      <ArrowRight className="hidden h-6 w-6 shrink-0 text-gold-light md:block" />
                      <ArrowDown className="h-6 w-6 shrink-0 text-gold-light md:hidden" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── GOVERNANCE ───────────────────────── */}
      {/* <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Governance</p>
            <h2 className="mt-4 text-charcoal">
              Built for institutional scrutiny from day one.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {governance.map((item, i) => {
              const Icon = item.icon;
              const directions: ("left" | "right")[] = ["left", "right", "left", "right"];
              return (
                <Reveal key={item.title} direction={directions[i]} delay={i * 100}>
                  <div className="card-float h-full rounded-2xl bg-cream p-8 shadow-md shadow-black/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 text-2xl text-charcoal">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-6 text-ink/68">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section> */}

      {/* ───────────────────────── CLOSING CTA ───────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Ready to Close the Gap?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  Whether you are a founder seeking capital, an investor
                  looking for impact-aligned returns, or a partner
                institution, we were built for you.
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
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
