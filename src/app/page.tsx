import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  TrendingDown,
  Users,
  Target,
  Search,
  Layers,
  Hourglass,
  Home as HomeIcon,
  Cloud,
  Briefcase,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import HeroSlider, { type HeroSlide } from "@/components/ui/HeroSlider";

export const metadata: Metadata = {
  title: "we",
  description:
    "We bridge the financing gap between indigenous climate founders and institutional capital, through technical assistance, patient capital, and structured aggregation.",
};

const heroSlides: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80",
    alt: "Solar infrastructure under construction in Nigeria",
    eyebrow: "Africa First Climate Finance",
    headlineLines: ["Enabling African-Led", "Climate Infrastructure to Scale"],
    body: "We bridge the financing gap between indigenous climate founders and institutional capital, through technical assistance, patient capital, and structured aggregation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2400&q=80",
    alt: "Aerial view of agricultural land in Nigeria",
    eyebrow: "Closing the Climate Finance Gap",
    headlineLines: ["$250 Billion in Unmet", "Climate Finance, Every Year"],
    body: "Indigenous climate entrepreneurs are systematically excluded from capital calibrated for mature businesses. We exist to close that gap.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=80",
    alt: "Wind turbines at sunset",
    eyebrow: "Patient Capital, Structured Risk",
    headlineLines: ["Built for Founders the", "Market Was Never Designed For"],
    body: "We absorb early-stage risk that conventional finance won't price, so institutional capital can safely follow where it's needed most.",
  },
];

const stats = [
  {
    icon: Landmark,
    value: 250,
    decimals: 0,
    prefix: "$",
    suffix: "B",
    label: "Annual climate finance gap in Africa",
    tone: "burgundy" as const,
    direction: "left" as const,
  },
  {
    icon: TrendingDown,
    value: 23,
    decimals: 0,
    prefix: "< ",
    suffix: "%",
    label: "Of global climate finance directly reaches indigenous ventures",
    tone: "neutral" as const,
    direction: "up" as const,
  },
  {
    icon: Users,
    value: null,
    prefix: "> ",
    display: "> 1000",
    label: "Active climate ventures in Africa, the majority pre-Series A",
    tone: "gold" as const,
    direction: "right" as const,
  },
];

const services = [
  {
    n: "01",
    title: "Climate Advisory",
    body: "Strategic support across project design, market intelligence, and product validation for climate founders and institutional partners.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
    tone: "burgundy" as const,
    size: "lg" as const,
    href: "/services#advisory",
    direction: "left" as const,
  },
  {
    n: "02",
    title: "Technical Assistance",
    body: "A 6–18 month bespoke programme deploying specialists in financial modelling, legal structuring, operations, and market strategy.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    tone: "forest" as const,
    size: "sm" as const,
    href: "/services#technical-assistance",
    direction: "right" as const,
  },
  {
    n: "03",
    title: "Mobilist Facility",
    body: "A blended finance vehicle combining philanthropic first-loss capital with concessional debt to fund investment-ready climate ventures.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    tone: "gold" as const,
    size: "sm" as const,
    href: "/services#mobilist",
    direction: "up" as const,
  },
  {
    n: "04",
    title: "Portfolio Aggregation",
    body: "Bundling performing ventures into institutional-grade vehicles and connecting them to large-scale capital through structured deal rooms.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
    tone: "burgundy" as const,
    size: "lg" as const,
    href: "/services#aggregation",
    direction: "down" as const,
  },
];

const pillars = [
  {
    icon: Target,
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

const audiences = [
  {
    label: "For Founders",
    headline: "Are you an indigenous African climate entrepreneur?",
    body: "If you are building a climate infrastructure venture in Nigeria and need technical assistance and patient capital to reach institutional readiness, we were designed for you.",
    cta: "Apply for Support",
    href: "/apply",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    tone: "burgundy" as const,
  },
  {
    label: "For Investors",
    headline: "Invest in Africa's Climate Future",
    body: "The Mobilist Facility deploys philanthropic and concessional capital into well-prepared climate ventures generating measurable impact and risk-adjusted financial returns.",
    cta: "View the Mobilist Facility",
    href: "/special-projects/mobilist-facility",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    tone: "forest" as const,
  },
  {
    label: "For Partners",
    headline: "Partner with us",
    body: "Development agencies, bilateral institutions, and accelerators can co-deliver our technical assistance programme or refer high-potential ventures from your networks.",
    cta: "Partner With Us",
    href: "/apply",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80",
    tone: "gold" as const,
  },
];

const impactMetrics = [
  { icon: HomeIcon, value: 150000, label: "Households with improved clean energy access" },
  { icon: Cloud, value: 800, unit: " tCO₂e", label: "Greenhouse gas emissions avoided per year" },
  { icon: Briefcase, value: 500, label: "Full-time equivalent jobs created" },
  { icon: UserCheck, value: 40, display: "40%+", label: "Women-led ventures in our portfolio" },
];

const pillarDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
];

const toneClasses: Record<"burgundy" | "forest" | "gold", string> = {
  burgundy: "photo-duotone-burgundy",
  forest: "photo-duotone-forest",
  gold: "photo-duotone-gold",
};

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO ─────────────────────────
          Rotating slider: three background/copy sets crossfade
          automatically; scrim is darker and burgundy-tinted. */}
      <HeroSlider slides={heroSlides} />

      {/* ───────────────────────── THE FINANCING GAP ─────────────────────────
          No rules/borders, separation comes from card elevation. */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="institutional-eyebrow">The Problem</p>
            <h2 className="mt-4 text-charcoal">
              The Financing Gap Is Structural
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-7 text-ink/72">
              Despite hundreds of billions committed to climate finance
              globally, indigenous African climate entrepreneurs are
              systematically excluded from the capital they need. The
              investment criteria of commercial banks, venture capital
              funds, and development finance institutions are calibrated
              for mature businesses, leaving early-stage African climate
              founders invisible to the very capital markets that should
              serve them.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              const isDark = stat.tone === "burgundy";
              const bgClass =
                stat.tone === "burgundy"
                  ? "bg-primary text-white"
                  : stat.tone === "gold"
                    ? "bg-gold-dark text-white"
                    : "bg-cream text-charcoal";
              const iconBg =
                stat.tone === "neutral" ? "bg-primary/10 text-primary" : "bg-white/15 text-white";
              const valueColor = stat.tone === "neutral" ? "text-primary" : "text-white";
              const labelColor = isDark || stat.tone === "gold" ? "text-white/78" : "text-ink/62";

              return (
                <Reveal key={stat.label} direction={stat.direction} delay={i * 120}>
                  <div className={`card-float h-full rounded-2xl p-8 shadow-md shadow-black/5 ${bgClass}`}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <p className={`mt-6 font-heading text-5xl ${valueColor}`}>
                      {stat.display ?? (
                        <Counter
                          value={stat.value as number}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                        />
                      )}
                    </p>
                    <p className={`mt-3 text-[13px] leading-5 ${labelColor}`}>
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── WHAT WE DO ─────────────────────────
          Cards assemble from alternating directions; card 04 tucks up
          against card 02 to close the masonry gap. */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="institutional-eyebrow">What We Do</p>
            <h2 className="mt-4 text-charcoal">
              Four Integrated Services. One End-to-End Pathway.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              We provide full-cycle support to climate
              infrastructure projects. Each service addresses a specific
              failure point in the African climate finance ecosystem and
              creates a comprehensive pathway from founder identification
              to institutional capital readiness.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                direction={service.direction}
                delay={i * 100}
                className={i === 3 ? "md:-mt-36 lg:-mt-44" : ""}
              >
                <Link
                  href={service.href}
                  className={`card-float group relative block overflow-hidden rounded-2xl shadow-lg shadow-black/10 ${
                    service.size === "lg" ? "h-[420px] md:h-[480px]" : "h-[280px] md:h-[300px]"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${toneClasses[service.tone]}`} />
                  <div className="absolute inset-0 bg-black/14" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/34 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
                    <span className="font-heading text-2xl text-white/70">
                      {service.n}
                    </span>
                    <div>
                      <h3 className="text-3xl text-white md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-[14px] leading-6 text-white/85">
                        {service.body}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                        Learn More
                        {/* <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> */}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── INVESTMENT PHILOSOPHY ─────────────────────────
          Section pins while the four colored cards reveal one by one. */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Our Investment Philosophy</p>
            <h2 className="mt-4 text-charcoal">
              Risk absorption is the scarcest input in Africa.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              Our philosophy rests on a single premise: risk absorption
              at the earliest stage of climate infrastructure project
              development is the most valuable and scarce input in
              Africa.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} direction={pillarDirections[i]} delay={i * 110}>
                  <div className={`card-float h-full min-h-[300px] rounded-3xl p-8 shadow-xl shadow-black/15 md:min-h-[320px] md:p-10 ${pillar.tone}`}>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconTone}`}>
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-7 text-[1.55rem] leading-tight md:text-[1.8rem]">{pillar.title}</h3>
                    <p className="mt-4 max-w-sm text-[14.5px] leading-7 opacity-82">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── AUDIENCE PATHWAYS ───────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Three Ways In</p>
            <h2 className="mt-4 text-charcoal">
              Whichever side of the gap you stand on
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.label} direction="up" delay={i * 130}>
                <Link
                  href={a.href}
                  className="card-float group relative block h-[440px] overflow-hidden rounded-2xl shadow-xl shadow-black/15"
                >
                  <Image
                    src={a.image}
                    alt={a.headline}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/72 pointer-events-none" />
                  <div className={`absolute inset-0 ${toneClasses[a.tone]} opacity-100`} />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      {a.label}
                    </span>
                    <div>
                      <h3 className="text-2xl leading-[1.08] text-white">
                        {a.headline}
                      </h3>
                      <p className="mt-3 text-[13.5px] leading-6 text-white/85">
                        {a.body}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                        {a.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── IMPACT NUMBERS ─────────────────────────
          Glass cards floating over the photo instead of flat overlay text. */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2400&q=80"
            alt="Aerial view of agricultural land in Nigeria"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="photo-duotone-burgundy absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/55" />
        </div>

        <Container className="relative z-10">
          <Reveal className="mx-auto mb-14 max-w-lg text-center">
            <p className="eyebrow-on-dark">Our Target Impact by Year 5</p>
            <h2 className="mt-4 text-white">
              Measured against the standards investors already trust.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {impactMetrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <Reveal key={metric.label} direction="up" delay={i * 110}>
                  <div className="card-float glass-card h-full rounded-2xl p-6 shadow-xl shadow-black/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-gold-light">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-5 font-heading text-3xl text-white md:text-4xl">
                      {metric.display ?? (
                        <Counter
                          value={Number(metric.value)}
                          prefix={(metric as { prefix?: string }).prefix}
                          suffix={(metric as { suffix?: string }).suffix}
                          decimals={(metric as { decimals?: number }).decimals ?? 0}
                        />
                      )}
                      {metric.unit && (
                        <span className="text-lg text-gold-light md:text-xl">
                          {metric.unit}
                        </span>
                      )}
                    </p>
                    <p className="mt-3 text-[12px] leading-5 text-white/72">
                      {metric.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────── PRE-FOOTER CTA ─────────────────────────
          A single burgundy card, not a full-bleed band. */}
      <section className="bg-white py-10 md:py-14">
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
                  {/* <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> */}
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
