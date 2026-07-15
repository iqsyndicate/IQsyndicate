import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  Briefcase,
  Leaf,
  Users,
  Home,
  Cloud,
  Flame,
  UserCheck,
  TrendingUp,
  ShieldAlert,
  Users2,
  Map,
  Eye,
  ThermometerSun,
  BookOpen,
  Globe2,
  BarChart3,
  Scale,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Every venture we support is screened, measured, and reported against internationally recognised impact standards. Impact is not a byproduct of our model - it is the reason for it.",
};

// Official UN SDG colours - used verbatim in the hero tiles and SDG cards
const sdgs = [
  {
    n: "7",
    title: "Affordable & Clean Energy",
    body: "We work in accordance with SDG 7 and aim to ensure universal access to affordable, reliable, sustainable, and modern energy by 2030. Our key targets include ensuring access to electricity and clean cooking, increasing the share of renewable energy, and doubling energy efficiency improvements.",
    icon: Zap,
    // Official SDG 7 colour - yellow; use dark text
    sdgColor: "#FCC30B",
    textDark: true,
    image: "/images/sdgs/sdg 7.png",
    imageTone: "photo-duotone-gold",
  },
  {
    n: "8",
    title: "Decent Work & Economic Growth",
    body: "Sustainable Development Goal 8 (SDG 8) is the UN’s blueprint to promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all. We are aligned with the goal as our work focuses on eradicating poverty by ensuring quality jobs, fair wages, safe workplaces, and the eradication of forced and child labor.",
    icon: Briefcase,
    // Official SDG 8 colour - wine/maroon; white text
    sdgColor: "#A21942",
    textDark: false,
    image: "/images/sdgs/sdg 8.png",
    imageTone: "photo-duotone-burgundy",
  },
  {
    n: "13",
    title: "Climate Action",
    body: "We are aligned with Sustainable Development Goal 13 (SDG 13) which calls for urgent, global action to combat climate change and its impacts. We focus on mitigating greenhouse gas emissions, building resilience against climate-related disasters, mobilizing climate finance, and integrating climate awareness through our advisory and technical assistance into national policies and education.",
    icon: Leaf,
    // Official SDG 13 colour - forest green; white text
    sdgColor: "#3F7E44",
    textDark: false,
    image: "/images/sdgs/sdg 13.png",
    imageTone: "photo-duotone-forest",
  },
  {
    n: "10",
    title: "Reduced Inequalities",
    body: "Sustainable Development Goal 10 aims to reduce inequalities within and among countries by 2030. Our work aligns with the goal as we focus on empowering marginalized groups, eliminating discriminatory practices, protecting labor incomes, and ensuring a greater voice for Africa as a developing nations in global decision-making. We align with the key targets of SDG 10 which include reducing income inequality for the bottom 40%, ensuring universal social and economic inclusion, and promoting fair policies.",
    icon: Users,
    // Official SDG 10 colour - magenta; white text
    sdgColor: "#DD1367",
    textDark: false,
    image: "/images/sdgs/sdg 10.png",
    imageTone: "photo-duotone-forest",
  },
];

const impactTargets = [
  {
    icon: Home,
    value: 150000,
    display: "150,000",
    suffix: "",
    label: "Households with improved energy access",
    definition: "Unique households gaining access to clean electricity or improved cooking solutions through portfolio ventures.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Cloud,
    value: 800,
    display: "800",
    suffix: " tCO₂e/yr",
    label: "GHG emissions avoided",
    definition: "Metric tonnes of CO₂-equivalent avoided relative to a business-as-usual baseline.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Flame,
    value: 100000,
    display: "100,000",
    suffix: "",
    label: "Clean cooking adopters",
    definition: "Households transitioning from solid biomass or kerosene to improved cookstoves through portfolio ventures.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Briefcase,
    value: 2500,
    display: "2,500",
    label: "Decent jobs created",
    definition: "Full-time-equivalent direct employment generated across portfolio ventures, disaggregated by gender and youth.",
    tone: "bg-primary-deep text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: UserCheck,
    value: 40,
    display: "40%+",
    suffix: "",
    label: "Women-owned or women-led ventures",
    definition: "Ventures where the CEO or majority of the founding team are women.",
    tone: "bg-forest-deep text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const standards = [
  {
    icon: BarChart3,
    label: "IRIS+",
    title: "IRIS+ Alignment",
    body: "our KPIs are mapped to the IRIS+ catalogue maintained by the Global Impact Investing Network (GIIN), enabling comparability across impact investors and facilitating third-party benchmarking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    imageTone: "photo-duotone-burgundy",
  },
  {
    icon: ShieldAlert,
    label: "IFC PS",
    title: "IFC Performance Standards",
    body: "Environmental and social risk screening is applied at origination against IFC Performance Standards PS1–PS8, covering E&S assessment, labour conditions, community health and safety, land, indigenous peoples, and cultural heritage.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    imageTone: "photo-duotone-forest",
  },
  {
    icon: Globe2,
    label: "UN PRI",
    title: "UN Principles for Responsible Investment",
    body: "We integrate ESG considerations into investment analysis, exercises active ownership, seeks appropriate ESG disclosure from portfolio ventures, and reports annually on ESG activities to Limited Partners.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
    imageTone: "photo-duotone-gold",
  },
];

const esgRisks = [
  {
    icon: Leaf,
    title: "Environmental Risk",
    body: "Hazardous waste, land degradation, water pollution, ecologically sensitive areas",
    tone: "bg-forest/8 border-forest/15 text-forest",
    iconTone: "bg-forest/12 text-forest",
  },
  {
    icon: Users2,
    title: "Social & Labour Risk",
    body: "Vulnerable group employment, labour practices, health and safety, worker rights",
    tone: "bg-primary/8 border-primary/15 text-primary",
    iconTone: "bg-primary/10 text-primary",
  },
  {
    icon: Map,
    title: "Land & Community Risk",
    body: "Land tenure impacts, community livelihoods, displacement, Free Prior and Informed Consent",
    tone: "bg-gold-dark/8 border-gold-dark/15 text-gold-dark",
    iconTone: "bg-gold-dark/10 text-gold-dark",
  },
  {
    icon: Eye,
    title: "Governance & Integrity Risk",
    body: "KYC/AML screening, PEP and sanctions checks, corporate registry verification",
    tone: "bg-ink/8 border-ink/15 text-ink",
    iconTone: "bg-ink/10 text-ink",
  },
  {
    icon: ThermometerSun,
    title: "Climate Transition Risk",
    body: "Resilience to regulatory shifts, technology disruption, and commodity price volatility",
    tone: "bg-forest/8 border-forest/15 text-forest",
    iconTone: "bg-forest/12 text-forest",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO - split layout unique to Impact page:
          large editorial headline left; four SDG
          number tiles right - immediately signals
          the alignment without a word of explanation.
      ───────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80"
            alt="Solar infrastructure in Nigeria - our climate impact in action"
            fill
            sizes="100vw"
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 grid min-h-[88vh] items-center gap-10 py-36 md:grid-cols-[1.15fr_0.85fr]">
          {/* Left: headline */}
          <div>
            <Reveal direction="down">
              <span className="eyebrow-pill mb-7 inline-flex">
                Our Impact by Design
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-white">Impact by Design</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/88">
                Every venture we support is screened, measured,
                and reported against internationally recognised impact
                standards. Impact is not a byproduct of our model, it is
                the reason for it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SDG ALIGNMENT
          Each SDG gets a photo card + full description.
          Two wide cards on top (01, 02), two on bottom.
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((sdg, i) => {
              const dirs = ["left", "right", "left", "right"] as const;
              const Icon = sdg.icon;
              return (
                <Reveal key={sdg.n} direction={dirs[i]} delay={i * 90}>
                  <div className="card-float h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/10">
                    <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                      <Image
                        src={sdg.image}
                        alt={sdg.title}
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="object-contain p-3 sm:p-4"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: sdg.sdgColor, color: sdg.textDark ? "#111111" : "#ffffff" }}>
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">SDG {sdg.n}</p>
                          <p className="font-heading text-[1.05rem] leading-tight text-charcoal">{sdg.title}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-[13px] leading-6 text-ink/68">{sdg.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="institutional-eyebrow">SDG Alignment</p>
            <h2 className="mt-4 text-charcoal">Our work is mapped to the global goals investors already recognise.</h2>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PRIMARY IMPACT TARGETS - Year 5
          Five metric cards, full-width alternating
          colors, counter animation on the numbers.
      ───────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Primary Impact Targets</p>
            <h2 className="mt-4 text-charcoal">Year 5 Commitments</h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              These are not aspirations - they are the measurable outcomes
              we are contractually accountable for delivering
              and reporting to LPs annually.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactTargets.map((metric, i) => {
              const Icon = metric.icon;
              const dirs = ["left", "up", "right", "left", "right"] as const;
              return (
                <Reveal
                  key={metric.label}
                  direction={dirs[i]}
                  delay={i * 100}
                  className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <div className={`card-float h-full rounded-3xl p-8 shadow-xl shadow-black/12 md:p-9 ${metric.tone}`}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.iconTone}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <p className="mt-6 font-heading text-4xl text-white md:text-5xl">
                      {metric.display}
                      {metric.suffix && (
                        <span className="text-2xl text-white/60 md:text-3xl">
                          {metric.suffix}
                        </span>
                      )}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      {metric.label}
                    </p>
                    <p className="mt-4 border-t border-white/15 pt-4 text-[13px] leading-5 text-white/70">
                      {metric.definition}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          IMPACT STANDARDS
          Photo + description for each of the four
          frameworks, in a 2×2 grid.
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Our Impact Standards</p>
            <h2 className="mt-4 text-charcoal">
              Aligned to the frameworks investors already use.
            </h2>
          </Reveal>

          <div className="space-y-4 lg:hidden">
            {standards.map((std, i) => {
              const Icon = std.icon;
              return (
                <Reveal key={std.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                  <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg shadow-black/8">
                    <div className="relative h-44">
                      <Image
                        src={std.image}
                        alt={std.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 ${std.imageTone}`} />
                      <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/75" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-5 text-white">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                          <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
                            Framework
                          </p>
                          <p className="font-heading text-lg text-white">{std.label}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-semibold text-charcoal">{std.title}</p>
                      <p className="mt-3 text-[13.5px] leading-6 text-ink/68">{std.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

            <div className="hidden gap-4 lg:grid lg:grid-cols-3">
              {standards.map((std, i) => {
                const Icon = std.icon;
                return (
                  <Reveal key={std.label} direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"} delay={i * 80}>
                  <div className="group relative h-[420px] overflow-hidden rounded-[2.25rem] shadow-xl shadow-black/10">
                    <Image
                      src={std.image}
                      alt={std.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className={`absolute inset-0 ${std.imageTone}`} />
                    <div className="absolute inset-0 bg-black/55 transition-opacity duration-300 group-hover:bg-black/82" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                        </div>
                        <p className="font-heading text-lg text-white">{std.label}</p>
                      </div>
                      <p className="mt-4 text-[14px] font-semibold">{std.title}</p>
                      <p className="mt-2 max-h-0 overflow-hidden text-[13.5px] leading-6 text-white/0 transition-all duration-300 group-hover:max-h-40 group-hover:text-white/88">
                        {std.body}
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
          ESG RISK MANAGEMENT
          Forest-green section, five risk categories
          as a clean card grid.
      ───────────────────────────────────────────── */}
      {/* <section className="bg-forest py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal direction="left">
              <p className="eyebrow-on-dark">ESG Risk Management</p>
              <h2 className="mt-4 text-white">
                Five risk categories. Applied at origination.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/76">
                All ventures entering our origination pipeline
                are subject to structured environmental and social risk
                screening at Steps 1 and 2. Material ESG risks that cannot
                be remediated within the TA scope and timeline result in
                automatic exclusion from the portfolio.
              </p>

              <div className="mt-8 card-float glass-card rounded-2xl p-6 shadow-xl shadow-black/20">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Exclusion Policy
                </p>
                <p className="mt-3 text-[14px] leading-6 text-white/85">
                  Material ESG risks that cannot be remediated within the
                  TA scope and timeline result in{" "}
                  <span className="font-semibold text-white">
                    automatic exclusion
                  </span>{" "}
                  from the portfolio.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {esgRisks.map((risk, i) => {
                const Icon = risk.icon;
                const dirs = ["right", "up", "right", "up", "right"] as const;
                return (
                  <Reveal key={risk.title} direction={dirs[i]} delay={i * 90}>
                    <div className={`card-float flex gap-5 rounded-2xl border p-5 shadow-lg shadow-black/20 ${risk.tone} bg-white`}>
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${risk.iconTone}`}>
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{risk.title}</p>
                        <p className="mt-1 text-[13px] leading-5 text-ink/65">{risk.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section> */}

      {/* ─────────────────────────────────────────────
          CLOSING CTA
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">
                  Want to see our impact reporting?
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  LP-level impact reports, ESG disclosures, and portfolio
                  KPI dashboards are available to qualified institutional
                  investors on request.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Request Impact Report
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
