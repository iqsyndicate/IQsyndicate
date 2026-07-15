import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Heart,
  Building2,
  Check,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Mobilist Facility",
  description:
    "A blended finance vehicle that transforms philanthropic capital into returnable investment, funding Africa's next generation of climate infrastructure.",
};

const facilityTerms = [
  { label: "Facility Type", value: "Blended finance Facility" },
  { label: "Target Fund Size", value: "USD $10 million" },
  { label: "Instrument Mix", value: " Philanthropic · Concessional debt" },
  { label: "First Tranche", value: "$50,000 In convertible Technical Assistance" },
  { label: "Second Tranche", value: "Up to $400,000 in debt instrument" },
  { label: "Debt Tenor", value: "5-10 years" },
  
  
];

const blendedStats = [
  { value: "USD 2.5B", label: "Total climate finance Nigeria received in 2021/22" },
  { value: "8%", label: "Of the USD 29.7B annually needed through 2030" },
  { value: "USD 27.2B", label: "Annual financing gap, the structural vacuum Mobilist fills" },
];

const markets = [
  {
    label: "TAM",
    title: "Total Addressable Market",
    value: "USD 29.7B / yr",
    body: "Nigeria's full estimated annual climate finance needs through 2030, mitigation, adaptation, energy transition, and infrastructure.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
    size: "w-full",
  },
  {
    label: "SAM",
    title: "Serviceable Addressable Market",
    value: "USD 1.5B / yr",
    body: "Early-stage indigenous ventures needing advisory, TA, and blended finance at sub-$5M ticket sizes. 300–500 active ventures.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
    size: "w-full",
  },
  {
    label: "SOM",
    title: "Serviceable Obtainable Market",
    value: "USD 30–50M / yr",
    body: "We Years 1–5 capture: 20–30 ventures per cohort at $400K average annual engagement value.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
    size: "w-full",
  },
];

const lpCriteria = [
  "Have an existing commitment to African climate finance or sustainable development",
  "Are open to deploying philanthropic or concessional capital as a first-loss or returnable instrument",
  "Are motivated by both financial return and catalytic impact on the broader African climate finance ecosystem",
  "Can commit at the facility level rather than to individual projects",
];

const whyBlended = [
  {
    icon: ShieldCheck,
    title: "First-Loss Protection",
    body: "The philanthropic tranche absorbs the first losses, protecting commercial co-investors and enabling capital to reach ventures that commercial finance alone would not touch.",
  },
  {
    icon: RefreshCw,
    title: "Recyclable Capital",
    body: "By structuring philanthropic capital as a returnable instrument, the Mobilist Facility creates a self-sustaining cycle: capital is deployed, ventures grow, debt is repaid, and proceeds fund the next cohort.",
  },
  {
    icon: TrendingUp,
    title: "Below-Market Returns",
    body: "The debt instrument targets 17% per annum, significantly below the 30% market rate, making it viable for indigenous climate ventures while still generating real returns for patient investors.",
  },
  {
    icon: Globe2,
    title: "Catalytic Leverage",
    body: "Every dollar of philanthropic capital deployed through the facility unlocks additional concessional and commercial co-investment, multiplying the overall impact beyond the facility's own size.",
  },
];

export default function MobilistFacilityPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO - split layout unique to this page:
          headline + CTA left; capital structure
          bar chart right, built in JSX so no image needed.
      ───────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80"
            alt="Solar infrastructure, the climate projects funded by the Mobilist Facility"
            fill
            sizes="100vw"
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 grid min-h-[88vh] items-center gap-10 py-36 md:grid-cols-[1.1fr_0.9fr]">
          {/* Left: headline + CTA */}
          <div>
            <Reveal direction="down">
              <span className="eyebrow-pill mb-7 inline-flex">
                Our Blended Finance Vehicle
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-white">The Mobilist Facility</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/88">
                Blended finance that transforms philanthropic capital into
                returnable investment, funding Africa's next generation
                of climate infrastructure.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-9">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Request LP Information Pack
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          FACILITY OVERVIEW
      ───────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Facility Overview</p>
              <div className="mt-3 space-y-5 text-[15px] leading-7 text-ink/74">
                <p>
                  The Mobilist Facility is designed as a special-purpose investment vehicle that mobilises philanthropic capital, historically deployed as grants; We blend these with concessional instruments into well-prepared climate infrastructure projects with positive financial and environmental returns.
                </p>
                <p>
                 The facility's blended structure ensures that while concessional capital from DFIs is repaid at facility close, the philanthropic component is recycled back into the vehicle, ensuring financial sustainability and continuity for new ventures.
                </p>
              </div>
              <Link
                href="/apply"
                className="group mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Request LP Information Pack
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal direction="right">
              <div className="card-float relative h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-black/15">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                  alt="Wind turbines, the clean energy infrastructure financed through the Mobilist Facility"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="photo-duotone-gold absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-heading text-2xl text-white">
                    Capital deployed. Ventures grow. Proceeds recycled.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          FACILITY TERMS - card grid, no raw table
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Facility Terms</p>
            <h2 className="mt-4 text-charcoal">
              The structure, at a glance.
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityTerms.map((term, i) => (
              <Reveal
                key={term.label}
                direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                delay={i * 60}
              >
                <div className="card-float h-full rounded-2xl bg-white p-6 shadow-md shadow-black/6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {term.label}
                  </p>
                  <p className="mt-3 font-heading text-xl leading-snug text-charcoal md:text-2xl">
                    {term.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          WHY BLENDED FINANCE
          Forest-green surface; four benefit cards
      ───────────────────────────────────────────── */}
      {/* <section className="bg-forest py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="left">
              <p className="eyebrow-on-dark">Why Blended Finance?</p>
              <h2 className="mt-4 text-white">
                The gap is too large for one type of capital alone.
              </h2>
              <div className="mt-8 space-y-5">
                {blendedStats.map((stat, i) => (
                  <Reveal key={stat.label} direction="left" delay={i * 100}>
                    <div className="card-float glass-card rounded-2xl p-5 shadow-lg shadow-black/20">
                      <p className="font-heading text-3xl text-white md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[13px] leading-5 text-white/68">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 content-start">
              {whyBlended.map((item, i) => {
                const Icon = item.icon;
                const dirs = ["up", "right", "left", "up"] as const;
                return (
                  <Reveal key={item.title} direction={dirs[i]} delay={i * 110}>
                    <div className="card-float glass-card h-full rounded-2xl p-6 shadow-xl shadow-black/20">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-5 text-xl text-white">{item.title}</h3>
                      <p className="mt-2.5 text-[13.5px] leading-6 text-white/75">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section> */}

      {/* ─────────────────────────────────────────────
          MARKET SIZING - TAM / SAM / SOM
          Nested visual: each market is a concentric
          band, with card details beside it.
      ───────────────────────────────────────────── */}

      {/* ─────────────────────────────────────────────
          FOR ANCHOR LPs
          Photo + eligibility criteria + CTA
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left: photo */}
            <Reveal direction="left">
              <div className="card-float relative h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-black/15">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                  alt="Institutional investors in a meeting, anchor LP engagement"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="photo-duotone-burgundy absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-5 w-5 text-gold-light" strokeWidth={1.75} />
                    <Building2 className="h-5 w-5 text-gold-light" strokeWidth={1.75} />
                  </div>
                  <p className="font-heading text-2xl text-white">
                    Foundations & Development Partners welcomed as anchor LPs.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: criteria + CTA */}
            <Reveal direction="right">
              <p className="institutional-eyebrow">For Anchor LPs</p>
              <p className="mt-3 text-[15px] leading-7 text-ink/74">
                The Mobilist Facility is actively seeking anchor LP
                commitments from philanthropic foundations and development
                finance institutions. Target anchor LPs are institutions
                that:
              </p>

              <ul className="mt-7 space-y-4">
                {lpCriteria.map((criterion, i) => (
                  <Reveal key={i} direction="right" delay={i * 80}>
                    <li className="card-float flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md shadow-black/6">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </div>
                      <p className="text-[14px] leading-6 text-ink/74">{criterion}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Link
                href="/apply"
                className="group mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Request LP Information Pack
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CLOSING CTA - burgundy card
      ───────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">
                  Ready to deploy capital that works harder?
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  Whether you are a philanthropic foundation, a DFI, or a
                  concessional lender - the Mobilist Facility was
                  structured for institutions ready to move beyond grants.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Request LP Information Pack
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

