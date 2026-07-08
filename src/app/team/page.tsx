import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Globe2, Scale, Users2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "A founding team with deep roots in climate finance, structured investment, and development impact - supported by an advisory board with unparalleled institutional reach across Africa and beyond.",
};

const founders = [
  {
    name: "Ghenzini Arigor",
    role: "Co-Founder & Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    bio: [
      "Arigor leads executive function, overseeing our strategic direction, instrument design, deal origination and structuring, and investor relations. He is an economist with hands-on experience across the full investment value chain for clean energy infrastructure.",
      "He has originated and structured capital mobilisation initiatives for climate ventures across donor-funded programmes and contributed to national carbon market policy development in Nigeria. His work is driven by the conviction that mobilising private capital for critical development infrastructure is the defining lever for Africa's economic transformation.",
    ],
    tone: "photo-duotone-burgundy",
  },
  {
    name: "Gift Adaugo",
    role: "Co-Founder & Development Impact Lead",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    bio: [
      "Gift Adaugo leads Development Impact, ESG strategy, impact measurement, and stakeholder engagement at we. She works at the intersection of climate finance, gender equity, and governance policy.",
      "She serves as Climate Finance Analyst at Climate Policy Initiative (CPI) London, where she maps subnational climate finance flows in South Africa. She is a MasterCard Scholar at Cambridge and the founder of Policies Vault, a climate finance and gender policy think tank.",
    ],
    tone: "photo-duotone-forest",
  },
];

const advisors = [
  {
    name: "Wola Asase",
    focus: "Capital Mobilisation & Syndications",
    role: "Deputy Director & Head of Syndications, Africa Finance Corporation (AFC)",
    credentials: [
      "Built AFC's syndications franchise from inception, mobilising over USD 8.5 billion",
      "Previously at IFC, mobilising over USD 2.6 billion in third-party capital across Africa",
      "Earlier career in investment banking at UBS, New York",
      "MBA, University of Chicago Booth School of Business",
    ],
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
    icon: Briefcase,
  },
  {
    name: "Ope Onibokun",
    focus: "Project Finance & Infrastructure Investment",
    role: "Managing Partner, Highstreams Investments",
    credentials: [
      "Former Head of Project Finance at Arise; Investment Director at BII (British International Investment)",
      "Part of the Emerging Africa Infrastructure Fund (USD 1 billion debt fund)",
      "Participated in financing valued at over USD 2 billion across power, transport, logistics, and telecoms",
      "Earlier roles at Citigroup's Project & Infrastructure Finance (New York, Seoul, Hong Kong) and Booz & Company",
    ],
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
    icon: Globe2,
  },
  {
    name: "Hans Verolme",
    focus: "International Climate Policy & NDC Alignment",
    role: "Founder, Climate Advisers Network",
    credentials: [
      "Partner in the UK-funded Climate Finance Accelerator, supporting blended finance solutions for NDC-aligned projects",
      "Led NDC development processes for Suriname and Nigeria, including Nigeria's INDC",
      "Former global and US Climate Change Director for WWF",
      "Former adviser to the British Ambassador in Washington, DC",
    ],
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
    icon: Globe2,
  },
  {
    name: "Miguel Schloss",
    focus: "Governance, Extractives & Latin America",
    role: "President, Surinvest Ltda.",
    credentials: [
      "30-year career at the World Bank leading divisions across Telecommunications & Mining (global), Industry & Energy (Africa), and Country Programmes (Latin America)",
      "Rose to Director of Strategic, Corporate, and Budget Planning at the World Bank",
      "Former Executive Director of Transparency International during its formative phase",
      "Board: Dalberg Global Development Advisors (Expert Panel) · GLIN Foundation (Trustee)",
    ],
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
    icon: Scale,
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO - cream background, editorial split
          Headline left · credentials strip right
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream pb-20 pt-36 md:pb-28 md:pt-44">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-forest/8 blur-3xl"
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">The Team</p>
              <h1 className="mt-5 max-w-xl text-charcoal">
                The Team Behind IQ Syndicate
              </h1>
            </Reveal>
            
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          FOUNDING TEAM
          Two cards side by side, each with photo +
          full bio. Photos are placeholders - replace
          with actual founder photography before launch.
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="mb-12">
            <p className="institutional-eyebrow">Founding Team</p>
            <h2 className="mt-4 max-w-lg text-charcoal">
              Two founders. One shared conviction.
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((founder, i) => (
              <Reveal
                key={founder.name}
                direction={i === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <div className="card-float h-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10 ring-1 ring-border/60">
                  {/* Photo */}
                  <div className="relative h-72">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className={`absolute inset-0 ${founder.tone}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                        {founder.role}
                      </p>
                      <h3 className="mt-1 font-heading text-3xl text-white">
                        {founder.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4 p-7">
                    {founder.bio.map((para, j) => (
                      <p key={j} className="text-[14.5px] leading-7 text-ink/72">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CLOSING CTA
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Want to work with us?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  We are always open to conversations with climate
                  founders, institutional investors, and partner
                  organisations building Africa's climate future.
                </p>
              </div>
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}