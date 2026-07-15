import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind IQ Syndicate — expertise in climate finance, platform engineering, private credit, market intelligence, and business development.",
};

const team = [
  { name: "Ghenzini Edet",   role: "Partner", focus: null,                                              tone: "photo-duotone-burgundy" },
  { name: "Gift Adaugo",     role: "Partner", focus: null,                                              tone: "photo-duotone-forest"   },
  { name: "Anietie Udoaka",  role: "Head",    focus: "Platform & Product Development",                  tone: "photo-duotone-gold"     },
  { name: "Ilem Ukem",       role: "Head",    focus: "Risk & Private Credit",                           tone: "photo-duotone-burgundy" },
  { name: "Regina Godwin",   role: "Lead",    focus: "Insights, Market Research & AI Intelligence",   tone: "photo-duotone-forest"   },
  { name: "James Nwefuru",   role: "Lead",    focus: "Renewable Energy Business Development",           tone: "photo-duotone-gold"     },
];

const roleStyle: Record<string, { chip: string; ring: string }> = {
  Partner: { chip: "bg-primary text-white",   ring: "ring-primary/30"   },
  Head:    { chip: "bg-forest text-white",    ring: "ring-forest/30"    },
  Lead:    { chip: "bg-gold-dark text-white", ring: "ring-gold-dark/30" },
};

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream pb-8 pt-20 md:pb-10 md:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-gold-light/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/6 blur-3xl" aria-hidden />
        <Container className="relative z-10">
          <Reveal direction="up">
            <p className="institutional-eyebrow">IQ Syndicate · The Team</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-charcoal">The People Behind IQ Syndicate</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-ink/72">
              A founding group united by a shared conviction — bringing together
              expertise in climate finance, platform engineering, private credit,
              market intelligence, and business development.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── Circle grid ── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {team.map((member, i) => {
              const { chip, ring } = roleStyle[member.role];
              const dirs = ["left","up","right","left","up","right"] as const;
              return (
                <Reveal key={member.name} direction={dirs[i]} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    {/* Circle photo */}
                    <div className={`card-float relative h-44 w-44 overflow-hidden rounded-full ring-4 shadow-xl shadow-black/12 ${ring} md:h-52 md:w-52`}>
                      <Image
                        src={`/images/team/${member.name}.png`}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width:640px) 176px, 208px"
                      />
                    </div>

                    {/* Role chip */}
                    <span className={`mt-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${chip}`}>
                      {member.role}
                    </span>

                    {/* Name */}
                    <h3 className="mt-3 font-heading text-xl leading-tight text-charcoal md:text-2xl">
                      {member.name}
                    </h3>

                    {/* Focus */}
                    {member.focus && (
                      <p className="mt-1.5 max-w-[18ch] text-[12px] leading-5 text-ink/55">
                        {member.focus}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-8 md:py-12">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Want to work with us?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  We are always open to conversations with climate founders,
                  institutional investors, and partner organisations.
                </p>
              </div>
              <Link href="/apply" className="group inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light">
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