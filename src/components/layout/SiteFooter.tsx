import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Investment Process", href: "/investment-process" },
  { label: "Mobilist Facility", href: "/special-projects/mobilist-facility" },
  { label: "Africa Energy Market Intelligence", href: "/special-projects/africa-energy-market-intelligence" },
  { label: "Consumer Financing Project", href: "/special-projects/consumer-financing-project" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Apply", href: "/apply" },
];

const services = [
  { label: "Climate Advisory", href: "/services#advisory" },
  { label: "Technical Assistance", href: "/services#technical-assistance" },
  { label: "Mobilist Facility", href: "/services#mobilist" },
  { label: "Portfolio Aggregation", href: "/services#aggregation" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">

      {/* ── Full-width tagline band ── */}
      <div className="border-b border-white/8">
        <Container className="py-14 md:py-18">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              {/* Logo */}
              <Image
                src="/images/logo.png"
                alt="IQ Syndicate"
                width={500}
                height={217}
                className="h-11 w-auto object-contain brightness-0 invert"
              />
              <h2
                className="mt-6 max-w-2xl font-heading leading-[1.02] text-white"
                style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)" }}
              >
                Enabling African-Led Climate Infrastructure to Scale
              </h2>
              <p className="mt-5 max-w-lg text-[14.5px] leading-7 text-white/62">
                A climate investment and advisory institution delivering
                technical assistance, blended finance pathways, and
                portfolio structuring for indigenous ventures across Africa.
              </p>
            </div>

            <Link
              href="/apply"
              className="group inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
            >
              Apply Now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Four-column grid ── */}
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/8 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1: Site Map */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/36">
              Site Map
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13.5px] text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-gold-light" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/36">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13.5px] text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-gold-light" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institution */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/36">
              Institution
            </p>
            <div className="mt-5 space-y-4">
              {[
                { icon: MapPin, label: "Head Office", value: "Abuja, Nigeria" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-light/60" strokeWidth={1.75} />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/36">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[13.5px] text-white/65">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 pt-2 space-y-2">
                {[
                  { label: "Company Type", value: "Private Limited Liability Company" },
                  { label: "Sector", value: "Climate Infrastructure and Finance" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/36">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[13.5px] text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Contact + Legal */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/36">
              Contact
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@iqsyndicate.com"
                className="flex items-center gap-2.5 text-[13.5px] text-white/65 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-gold-light/60" strokeWidth={1.75} />
                hello@iqsyndicate.com
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13.5px] text-white/65 transition-colors hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-gold-light/60" strokeWidth={1.75} />
                LinkedIn
              </a> */}
            </div>

            <div className="mt-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/36">
                Legal
              </p>
              <p className="mt-4 text-[12.5px] leading-6 text-white/50">
                Information on this site is for general informational
                purposes only and does not constitute an offer to invest.
              </p>
              <Link
                href="/privacy"
                className="mt-3 inline-block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-light transition-colors hover:text-white"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            © {year} we. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            Institutional Climate Finance Platform
          </p>
        </div>
      </Container>

      {/* Thin tri-colour brand gradient rule at very bottom */}
      <div
        className="h-[3px] w-full"
        style={{ backgroundImage: "linear-gradient(90deg, #6f1c28 0%, #b38a5b 50%, #1f3d2b 100%)" }}
      />
    </footer>
  );
}
