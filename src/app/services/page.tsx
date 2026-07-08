import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  BarChart2,
  FlaskConical,
  Lightbulb,
  Calculator,
  Scale,
  Cog,
  Target,
  Layers,
  Building2,
  Users2,
  BookOpen,
  Gift,
  X,
  Check,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four integrated services designed to provide end-to-end support - from founder identification and project preparation, through to institutional capital facilitation and exit.",
};

const taModules = [
  {
    icon: Calculator,
    n: "01",
    title: "Financial Modelling",
    body: "Validating financial models; business valuation; sensitivity analysis; revenue forecasting.",
  },
  {
    icon: Scale,
    n: "02",
    title: "Legal & Corporate Structuring",
    body: "Policy and regulatory compliance; ESG compliance; corporate governance structuring; investor documentation.",
  },
  {
    icon: Cog,
    n: "03",
    title: "Operational Design",
    body: "Operational processes; supply chain and logistics; quality management systems.",
  },
  {
    icon: Target,
    n: "04",
    title: "Business Model & Market Strategy",
    body: "Business model validation; customer segmentation; go-to-market strategy; competitive positioning.",
  },
];

const facilityStats = [
  { value: "USD $10M", label: "Target Fund Size (Nigeria)" },
  { value: "17%", label: "Return target per annum on debt tranche" },
  { value: "65%", label: "Philanthropic first-loss tranche" },
  { value: "3–5%", label: "Equity conversion reference from TA" },
];

const aggregationSteps = [
  {
    n: "01",
    title: "Project Origination & Preparation",
    body: "Individual ventures enter our seven-step process, with technical assistance deployed and capital invested to ready each project.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    alt: "Specialists working on financial models and project documentation",
  },
  {
    n: "02",
    title: "Portfolio Construction",
    body: "we select performing infrastructure projects based on complementary sectors and shared risk-return profiles.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    alt: "Data analytics and portfolio construction charts",
  },
  {
    n: "03",
    title: "Structuring & Documentation",
    body: "Legal advisors structure the aggregated project vehicle. Standardised investment documentation is prepared to meet institutional investor requirements.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    alt: "Legal documents being reviewed and signed",
  },
  {
    n: "04",
    title: "Deal Rooms & Roadshows",
    body: "The portfolio vehicle is presented to qualifying institutional investors via structured deal rooms, both online and in-person.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    alt: "Institutional investors in a deal room presentation",
  },
  {
    n: "05",
    title: "Term Negotiation & Close",
    body: "we advisors support founders and investors through term sheet negotiation and final close.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    alt: "Deal closing - handshake between parties",
  },
  {
    n: "06",
    title: "Refinancing & Exit",
    body: "Institutional investors take over the project portfolio. Capital is recycled into new ventures for the next aggregation cycle.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    alt: "Institutional investment building representing capital deployment",
  },
];

const competitors = [
  {
    actor: "Accelerators",
    examples: "CcHUB, Tony Elumelu Foundation, Antler",
    provide: "Mentorship, grants ($50K–$100K), early-stage community",
    missing: "No long-term capital; no equity stake; limited TA; no exit pathway",
  },
  {
    actor: "Multilateral DFIs",
    examples: "AfDB, IFC, GCF, World Bank",
    provide: "Large-ticket debt/equity ($15M+); policy leverage",
    missing: "No pre-bankability engagement; minimum ticket too large for early-stage ventures",
  },
  {
    actor: "Advisory Firms",
    examples: "Big 4; boutique climate advisors",
    provide: "Financial modelling; structuring services",
    missing: "No capital provision; no equity stake; no risk-sharing with founders",
  },
  {
    actor: "NGOs / Philanthropy",
    examples: "UNDP, GIZ, ClimateWorks",
    provide: "Grants, capacity building, policy support",
    missing: "Non-returnable capital; no investment discipline; no commercial exit pathway",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO - directory style: headline top, the four
          service jump-links anchor the bottom of the frame
          so visitors can navigate immediately.
      ───────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=2400&q=80"
            alt="Transmission towers and power infrastructure in Nigeria"
            fill
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 flex min-h-[90vh] flex-col justify-between py-36 pb-0">
          {/* Top: headline */}
          <div>
            <Reveal direction="down">
              <span className="eyebrow-pill mb-7 inline-flex">
                Full-Cycle Services
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1
                className="max-w-3xl text-white"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1.05 }}
              >
                Full-Cycle Support for
                <br className="hidden sm:block" /> Climate Ventures
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/85">
                Four integrated services designed to provide end-to-end
                support - from founder identification and project
                preparation, through to institutional capital
                facilitation and exit.
              </p>
            </Reveal>
          </div>

          {/* Bottom: service index anchors flush to section edge */}
          <Reveal delay={260}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4">
              {[
                { n: "01", title: "Climate Advisory", href: "#advisory" },
                { n: "02", title: "Technical Assistance", href: "#technical-assistance" },
                { n: "03", title: "Mobilist Facility", href: "#mobilist" },
                { n: "04", title: "Portfolio Aggregation", href: "#aggregation" },
              ].map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`group flex flex-col justify-between border-t border-white/20 p-5 transition-colors hover:bg-white/8 md:p-7 ${i > 0 ? "border-l border-white/20 md:border-l" : ""}`}
                >
                  <span className="font-heading text-lg text-white/50 group-hover:text-gold-light">
                    {s.n}
                  </span>
                  <div className="mt-8 flex items-end justify-between">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 group-hover:text-white">
                      {s.title}
                    </span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-y-1 group-hover:text-gold-light" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE 01 - CLIMATE ADVISORY
          Text left · Image right · Three offering panels
      ───────────────────────────────────────────── */}
      <section id="advisory" className="scroll-mt-24 bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left: content */}
            <Reveal direction="left">
              <p className="institutional-eyebrow">Service 01</p>
              <h2 className="mt-4 text-charcoal">Climate Advisory</h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/74">
                our Advisory service provides climate
                infrastructure project developers and institutional
                partners with strategic support across three
                dimensions: project design, market intelligence, and
                product validation.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Lightbulb,
                    title: "Project Design Mapping",
                    body: "We support founders in gathering market data and identifying specific market gaps in their innovation. We test whether the founder's product or service is optimally designed for its target market, including customer discovery support and pilot programme design.",
                  },
                  {
                    icon: BarChart2,
                    title: "Market Intelligence",
                    body: "We assist partner institutions in turning data into meaningful insights to properly understand policy, projects, and investment risk - enabling informed business and deployment decisions.",
                  },
                  {
                    icon: Compass,
                    title: "Bespoke Special Projects",
                    body: "Investment projects designed for retail and institutional clients, combining investment in renewable energy products and models developed by the firm to service the needs of a target market segment.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} direction="left" delay={i * 100}>
                      <div className="card-float flex gap-5 rounded-2xl bg-cream p-6 shadow-sm shadow-black/5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal">{item.title}</p>
                          <p className="mt-1.5 text-[13.5px] leading-6 text-ink/68">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Link
                href="/apply"
                className="group mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Discuss an Advisory Mandate
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            {/* Right: image */}
            <Reveal direction="right" className="lg:sticky lg:top-28">
              <div className="card-float relative h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-black/15 md:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
                  alt="Strategic advisory session - climate project design and market intelligence"
                  fill
                  className="object-cover"
                />
                <div className="photo-duotone-burgundy absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                    Climate Advisory
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white">
                    Strategy before capital. Design before deployment.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE 02 - TECHNICAL ASSISTANCE
          Dark bg · Image left · Text right · Four TA modules
      ───────────────────────────────────────────── */}
      <section id="technical-assistance" className="scroll-mt-24 bg-ink py-20 text-white md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left: image */}
            <Reveal direction="left" className="order-2 lg:order-1 lg:sticky lg:top-28">
              <div className="card-float relative h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-black/30 md:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80"
                  alt="Technical specialist conducting financial modelling and analysis"
                  fill
                  className="object-cover"
                />
                <div className="photo-duotone-forest absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                    Technical Assistance
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white">
                    6–18 months of hands-on venture transformation.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: content */}
            <Reveal direction="right" className="order-1 lg:order-2">
              <p className="eyebrow-on-dark">Service 02</p>
              <h2 className="mt-4 text-white">Technical Assistance</h2>
              <p className="mt-5 text-[15px] leading-7 text-white/76">
                The Technical Assistance service addresses the most
                acute gap in Nigeria's climate finance landscape: the
                absence of skilled transaction intermediaries willing
                to engage with indigenous ventures before they reach
                bankability.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-white/76">
                Over a period of 6 to 18 months, we deploys
                a bespoke team of specialists across five modules to
                build ventures from pre-bankable to investment-ready.
              </p>

              {/* Four TA modules */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {taModules.map((mod, i) => {
                  const Icon = mod.icon;
                  return (
                    <Reveal key={mod.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                      <div className="card-float h-full rounded-2xl bg-white/6 p-6 shadow-lg shadow-black/20 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-light/15 text-gold-light">
                            <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            Module {mod.n}
                          </span>
                        </div>
                        <p className="mt-4 font-semibold text-white">{mod.title}</p>
                        <p className="mt-2 text-[13px] leading-5 text-white/64">
                          {mod.body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* TA instrument terms */}
              {/* <Reveal direction="up" delay={150}>
                <div className="mt-8 rounded-2xl border border-gold-light/25 bg-gold-light/8 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    How the TA Instrument Works
                  </p>
                  <p className="mt-3 text-[14px] leading-6 text-white/80">
                    Technical assistance is deployed at the firm's cost
                    and is designed to convert to early-stage equity in
                    the venture - typically at{" "}
                    <span className="font-semibold text-gold-light">
                      3–5%
                    </span>{" "}
                    at the valuation established at the next financing
                    round, within a 12–24-month period.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">Duration</p>
                      <p className="mt-1 font-heading text-xl text-white">6–18 months</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">Conversion</p>
                      <p className="mt-1 font-heading text-xl text-white">3–5% equity</p>
                    </div>
                  </div>
                </div>
              </Reveal> */}

              <Link
                href="/apply"
                className="group mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:border-white hover:bg-white hover:text-ink"
              >
                Apply for Technical Assistance
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE 03 - MOBILIST FACILITY
          Full-bleed photo with dark overlay · Glass stat cards
      ───────────────────────────────────────────── */}
      <section
        id="mobilist"
        className="scroll-mt-24 relative overflow-hidden py-24 md:py-32"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80"
            alt="Solar panels - the clean energy infrastructure financed through the Mobilist Facility"
            fill
            className="object-cover"
          />
          <div className="photo-duotone-gold absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90" />
        </div>

        <Container className="relative z-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-on-dark">Service 03</p>
            <h2 className="mt-4 text-white">Mobilist Facility</h2>
            <p className="mt-5 text-[15px] leading-7 text-white/85">
              The Mobilist Facility is a special-purpose investment
              vehicle that mobilises philanthropic capital -
              historically deployed as grants - blended with
              concessional instruments into well-prepared climate
              infrastructure projects.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-white/85">
              The facility is structured to deploy philanthropic capital
              as a returnable instrument, combining technical assistance
              and debt financing to generate financial returns that are
              recycled into new ventures.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {facilityStats.map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={i * 100}>
                <div className="card-float glass-card h-full rounded-2xl p-6 shadow-xl shadow-black/25">
                  <p className="font-heading text-3xl text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[12px] leading-5 text-white/68">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10">
            <Link
              href="/mobilist-facility"
              className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              View Full Facility Details
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE 04 - PORTFOLIO AGGREGATION
          Intro text · Six-step process with matched images
      ───────────────────────────────────────────── */}
      <section id="aggregation" className="scroll-mt-24 bg-cream py-20 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="institutional-eyebrow">Service 04</p>
            <h2 className="mt-4 text-charcoal">Portfolio Aggregation</h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/74">
              we bridge the gap between small-scale climate
              infrastructure projects and large institutional capital.
              We bundle individual performing projects into an
              investment-grade portfolio vehicle, then facilitate
              capital raising by connecting them to institutional
              investors via structured deal rooms and roadshows.
            </p>
          </Reveal>

          {/* 6-step process: alternating image / text layout */}
          <div className="space-y-8">
            {aggregationSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={step.n} direction={isEven ? "left" : "right"} delay={60}>
                  <div
                    className={`grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/8 md:grid-cols-[2fr_3fr] ${!isEven ? "md:grid-cols-[3fr_2fr]" : ""}`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-52 md:h-auto ${!isEven ? "md:order-2" : ""}`}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Text */}
                    <div
                      className={`flex flex-col justify-center p-7 md:p-9 ${!isEven ? "md:order-1" : ""}`}
                    >
                      <span className="font-heading text-4xl text-primary/20 md:text-5xl">
                        {step.n}
                      </span>
                      <h3 className="mt-2 text-2xl text-charcoal md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-ink/68">
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
          CLOSING CTA - burgundy card (same pattern across site)
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Ready to work with us?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  Whether you are a founder seeking capital, an
                  investor looking for impact-aligned returns, or a
                  partner institution - we were built for you.
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