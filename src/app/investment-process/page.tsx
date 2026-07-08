import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  ClipboardList,
  FileSignature,
  Wrench,
  ShieldCheck,
  Banknote,
  LineChart,
  Zap,
  Wheat,
  Flame,
  Droplets,
  Recycle,
  Truck,
  Check,
  UserCheck,
  TrendingUp,
  Building2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StaircaseSteps from "@/components/ui/StaircaseSteps";

export const metadata: Metadata = {
  title: "Investment Process",
  description:
    "our seven-step investment process progressively reduces risk while building venture value - creating a de-risked, investment-grade asset ready for commercial capital at exit.",
};

const steps = [
  {
    n: "01",
    title: "Founder Identification & Origination",
    body: "The team actively scouts ventures via accelerators, referrals, and climate events. Six eligibility criteria are applied: sector focus, geographic scope, founder profile, revenue stage, climate impact type, and ESG risk profile.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    alt: "Climate founders at an accelerator event being scouted and identified",
    imageSide: "right" as const,
    tone: "photo-duotone-forest",
  },
  {
    n: "02",
    title: "Project Scoping & Gap Analysis",
    body: "A deep-dive gap analysis assesses bankability across six technical assistance modules. The origination scoring matrix is applied, weighting climate impact materiality, founder quality, market opportunity, TA tractability, revenue traction, and ESG risk profile.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    alt: "Data analysis and scoring matrix - project gap analysis",
    imageSide: "left" as const,
    tone: "photo-duotone-burgundy",
  },
  {
    n: "03",
    title: "Term Sheet & TA Agreement",
    body: "A convertible instrument is signed to fund the Technical Assistance programme. The term sheet formalises our conversion rights and sets the parameters for the preparation phase.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    alt: "Legal term sheet and agreement being signed between parties",
    imageSide: "right" as const,
    tone: "photo-duotone-gold",
  },
  {
    n: "04",
    title: "Project Preparation (6–18 months)",
    body: "A specialist team is deployed across five TA modules: financial modelling, legal and corporate structuring, operational design, business model and market strategy, and technology systems.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    alt: "Specialist team working on financial models and business strategy",
    imageSide: "left" as const,
    tone: "photo-duotone-forest",
  },
  {
    n: "05",
    title: "Independent Stress Testing & IC Review",
    body: "The venture undergoes independent stress testing, covering downside scenarios, ESG criteria, and competitive risk. The Investment Committee conducts formal review and must reach a quorum decision before capital can be deployed.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    alt: "Investment committee conducting formal review and due diligence",
    imageSide: "right" as const,
    tone: "photo-duotone-burgundy",
  },
  {
    n: "06",
    title: "Capital Deployment",
    body: "A debt instrument is deployed per annum, with ticket sizes of $400K and a 5-10 year tenor. TA conversion rights to equity are retained, providing we with upside participation. Portfolio monitoring is activated immediately.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    alt: "Clean energy infrastructure funded by deployed capital - solar and wind installation",
    imageSide: "left" as const,
    tone: "photo-duotone-gold",
  },
  {
    n: "07",
    title: "Monitoring & Exit",
    body: "Quarterly KPI reviews track financial performance, milestone completion, and impact metrics. Exit is achieved through full debt repayment, institutional refinancing, or direct sales.",
    image: "https://images.unsplash.com/photo-1611273426858-450fa1a1f08d?w=1200&q=80",
    alt: "Portfolio performance monitoring and impact tracking dashboard",
    imageSide: "right" as const,
    tone: "photo-duotone-forest",
  },
];

const instruments = [
  {
    title: "Convertible Technical Assistance",
    stage: "Pre-investment / TA deployment",
    terms: "Principal funds TA programme; converts to equity at next round at 3–5% within 12–24 months.",
    upside: "Equity participation in venture valuation at next financing round.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
    icon: FileSignature,
  },
  {
    title: "Venture Debt",
    stage: "Post-TA / growth capital",
    terms: "$250K–$400K ticket; 17% p.a. interest; 3–5 year tenor.",
    upside: "Interest income and principal repayment over the debt tenor.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
    icon: Banknote,
  },
  {
    title: "Asset-Backed Financing",
    stage: "Revenue-generating ventures",
    terms: "Variable % of monthly cash flow until principal and target interest are recovered.",
    upside: "Monthly return stream from repayments tied to real revenue performance.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
    icon: Building2,
  },
];

const sectors = [
  {
    icon: Zap,
    title: "Off-grid & Distributed Energy",
    body: "Solar home systems, mini-grids, energy-as-a-service, PAYG models",
    tone: "bg-primary/8 text-primary border-primary/15",
    iconTone: "bg-primary/12 text-primary",
  },
  {
    icon: Wheat,
    title: "Climate-Smart Agriculture",
    body: "Precision irrigation, cold chain, smallholder advisory, agri-insurance, drought-resistant inputs",
    tone: "bg-forest/8 text-forest border-forest/15",
    iconTone: "bg-forest/12 text-forest",
  },
  {
    icon: Flame,
    title: "Clean Cooking",
    body: "Improved cookstoves, ethanol, biogas, and last-mile distribution",
    tone: "bg-gold-dark/8 text-gold-dark border-gold-dark/15",
    iconTone: "bg-gold-dark/12 text-gold-dark",
  },
  {
    icon: Droplets,
    title: "Climate Adaptation & Resilience",
    body: "Flood early-warning, heat management, WASH, climate insurance, nature-based solutions",
    tone: "bg-primary/8 text-primary border-primary/15",
    iconTone: "bg-primary/12 text-primary",
  },
  {
    icon: Recycle,
    title: "Circular Economy & Waste",
    body: "E-waste recovery, plastics recycling, bio-materials, waste-to-energy",
    tone: "bg-forest/8 text-forest border-forest/15",
    iconTone: "bg-forest/12 text-forest",
  },
  {
    icon: Truck,
    title: "Sustainable Mobility & Transport",
    body: "Electric mobility, last-mile logistics for climate goods, cargo e-bikes",
    tone: "bg-gold-dark/8 text-gold-dark border-gold-dark/15",
    iconTone: "bg-gold-dark/12 text-gold-dark",
  },
];

const founderCriteria = [
  "The founding CEO and at least one co-founder must be African nationals, resident in or operationally based in Africa.",
  "Founders must be actively operating within their target market, not managing remotely.",
  "Founders must have committed a minimum of 12 months to the venture.",
  "The founding team must possess relevant technical or sectoral expertise in their climate domain.",
  "Founders must be willing to participate in the 6–18 month technical assistance programme.",
];

const revenueIndicators = [
  "Active revenue generation from real customers in the target market.",
  "Validated product-market fit through at least one pilot or commercial deployment.",
  "At least one operational asset deployed in the field (for capital-intensive ventures).",
];

export default function InvestmentProcessPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO - large "07" numeral anchors the right half;
          headline and sub-headline dominate the left.
          Unique to this page - communicates "process" instantly.
      ───────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2400&q=80"
            alt="Aerial view of agricultural land representing the investment journey across Africa"
            fill
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 grid min-h-[88vh] items-center gap-8 py-36 md:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <div>
            <Reveal direction="down">
              <span className="eyebrow-pill mb-7 inline-flex">
               Our Investment Process
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-white">
                A Proprietary, Hands-On Investment Process
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/85">
                Our seven-step investment process is designed
                to progressively reduce risk while building venture
                value - creating a de-risked, investment-grade asset
                ready for commercial capital at exit.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-9">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Apply to Enter the Process
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* Right: large decorative "07" */}
          <Reveal direction="right" className="hidden justify-end md:flex">
            <div className="relative select-none text-right">
              <span
                className="font-heading leading-none text-white/10"
                style={{ fontSize: "clamp(8rem, 16vw, 14rem)" }}
              >
                07
              </span>
              <p className="absolute bottom-6 right-0 text-[12px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                Steps to Institutional Readiness
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          THE SEVEN STEPS
          Desktop: staircase with images + climbing burgundy line.
          Mobile: alternating image/text cards (original layout).
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <p className="institutional-eyebrow">The Process</p>
            <h2 className="mt-4 text-charcoal">The Seven-Step Process</h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              Every venture that enters our process moves
              through the same seven stages. Each stage has defined
              inputs, outputs, and decision outcomes, ensuring only
              investment-grade assets reach the capital deployment phase.
            </p>
          </Reveal>

          {/* ── Desktop: staircase component ── */}
          <Reveal direction="up">
            <div className="hidden md:flex md:justify-center md:overflow-visible">
              <StaircaseSteps steps={steps} />
            </div>
          </Reveal>

          {/* ── Mobile: alternating image/text cards ── */}
          <div className="space-y-6 md:hidden">
            {steps.map((step, i) => {
              const isRight = step.imageSide === "right";
              return (
                <Reveal
                  key={step.n}
                  direction={isRight ? "left" : "right"}
                  delay={60}
                >
                  <div className="card-float overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/12 ring-1 ring-border/60 transition-shadow hover:shadow-2xl hover:shadow-primary/15">
                    {/* Image always on top on mobile */}
                    <div className="relative h-52">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 ${step.tone}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        Step {step.n}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-7">
                      <div className="flex items-center gap-4">
                        <span className="font-heading text-4xl text-primary/20">
                          {step.n}
                        </span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="mt-3 text-2xl text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-7 text-ink/70">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          INSTRUMENT DESIGN
          Three colored cards, each representing one instrument.
          Forest background so it reads as a distinct chapter.
      ───────────────────────────────────────────── */}
      <section className="bg-forest py-20 text-white md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow-on-dark">Instrument Design</p>
            <h2 className="mt-4 text-white">
              Three fit-for-stage instruments
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/76">
              we design instruments that match the venture's
              stage - not the other way around. Each instrument provides
              a clear return pathway for the firm while aligning
              incentives directly with venture success.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {instruments.map((inst, i) => {
              const Icon = inst.icon;
              return (
                <Reveal key={inst.title} direction="up" delay={i * 120}>
                  <div
                    className={`card-float h-full rounded-3xl p-8 shadow-xl shadow-black/20 md:p-9 ${inst.tone}`}
                  >
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl ${inst.iconTone}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-65">
                      {inst.stage}
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl">{inst.title}</h3>
                    <div className="mt-5 space-y-4 border-t border-white/18 pt-5">
                     
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          ELIGIBILITY - WHO WE WORK WITH
          Three sub-sections: Sectors · Founder Profile · Revenue Stage
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal className="mb-5 max-w-2xl">
            <p className="institutional-eyebrow">Eligibility Criteria</p>
            <h2 className="mt-4 text-charcoal">Who We Work With</h2>
          </Reveal>

          {/* Sector Focus */}
          <div className="mb-20">
            <Reveal>
              <p className="mb-8 max-w-2xl text-[15px] leading-7 text-ink/72">
                we focus exclusively on ventures operating
                within climate infrastructure and climate-adjacent
                sectors, as defined by Nigeria's Energy Transition Plan
                and NDC sectors.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <Reveal
                    key={sector.title}
                    direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                    delay={i * 80}
                  >
                    <div
                      className={`card-float h-full rounded-2xl border p-6 shadow-sm shadow-black/4 ${sector.tone}`}
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${sector.iconTone}`}
                      >
                        <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                      </div>
                      <p className="mt-4 font-semibold text-charcoal">{sector.title}</p>
                      <p className="mt-2 text-[13px] leading-5 text-ink/62">{sector.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Founder Profile + Revenue Stage - two-column on desktop */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Founder Profile */}
            <Reveal direction="left">
              <div className="card-float h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/8">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80"
                    alt="Indigenous African climate entrepreneurs building local ventures"
                    fill
                    className="object-cover"
                  />
                  <div className="photo-duotone-burgundy absolute inset-0" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                        <UserCheck className="h-5.5 w-5.5 text-white" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-2xl text-white">Founder Profile</h3>
                    </div>
                  </div>
                </div>
                <div className="p-7">

                  <ul className="mt-3 space-y-3">
                    {founderCriteria.map((criterion, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13.5px] leading-5 text-ink/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Revenue Stage */}
            <Reveal direction="right">
              <div className="card-float h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/8">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1611273426858-450fa1a1f08d?w=1000&q=80"
                    alt="Revenue-generating climate infrastructure - grid-scale solar energy"
                    fill
                    className="object-cover"
                  />
                  <div className="photo-duotone-forest absolute inset-0" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                        <TrendingUp className="h-5.5 w-5.5 text-white" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-2xl text-white">Revenue Stage</h3>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-[14px] leading-6 text-ink/70">
                    Eligible ventures must satisfy at least{" "}
                    <span className="font-semibold text-charcoal">
                      two of the following three indicators
                    </span>
                    :
                  </p>
                  <ul className="mt-5 space-y-3">
                    {revenueIndicators.map((indicator, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13.5px] leading-5 text-ink/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={2.5} />
                        {indicator}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl bg-gold-dark/8 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                      Note on Exceptions
                    </p>
                    <p className="mt-2.5 text-[13px] leading-5 text-ink/68">
                      Ventures that are pre-revenue and in the concept
                      or early prototype stage are generally not
                      eligible. Exceptions may be made for highly
                      experienced founding teams in strategically
                      critical sectors where the Advisory service can
                      support the venture toward a pipeline-ready
                      position within a defined timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CLOSING CTA - same burgundy card across all pages
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Ready to enter the process?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  If you are an indigenous African climate entrepreneur
                  meeting our eligibility criteria, we want to hear
                  from you. Submit your opportunity and we will assess
                  it against our seven-step framework.
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