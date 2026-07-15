"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, ChevronDown, Grid2x2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/nav-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const svcTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const prjTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setProjectsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const openSvc = () => {
    clearTimeout(svcTimer.current);
    setServicesOpen(true);
    setProjectsOpen(false);
  };

  const closeSvc = () => {
    svcTimer.current = setTimeout(() => setServicesOpen(false), 180);
  };

  const openPrj = () => {
    clearTimeout(prjTimer.current);
    setProjectsOpen(true);
    setServicesOpen(false);
  };

  const closePrj = () => {
    prjTimer.current = setTimeout(() => setProjectsOpen(false), 180);
  };

  const specialProjects = NAV_LINKS.find((link) => link.hasSubLinks)?.subLinks ?? [];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/97 shadow-[0_4px_28px_rgba(23,23,23,0.09)] backdrop-blur-md" : "bg-white/92 backdrop-blur-sm"}`}>
        <div
          className="h-[3px] w-full"
          style={{ background: "linear-gradient(90deg, #6f1c28 0%, #b38a5b 50%, #1f3d2b 100%)" }}
        />

        <Container>
          <div className="flex h-[68px] items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="IQ Syndicate"
                width={500}
                height={217}
                priority
                className="h-9 w-auto object-contain md:h-10"
              />
            </Link>

            <nav className="hidden items-center xl:flex" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || (link.href !== "#" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div key={link.href} className="relative" onMouseEnter={openSvc} onMouseLeave={closeSvc}>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className={`group flex items-center gap-1 rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${isActive || servicesOpen ? "text-primary" : "text-charcoal/65 hover:text-primary"}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                    </div>
                  );
                }

                if (link.hasSubLinks) {
                  const isSpActive = (link.subLinks ?? []).some((subLink) => pathname.startsWith(subLink.href));
                  return (
                    <div key={link.label} className="relative" onMouseEnter={openPrj} onMouseLeave={closePrj}>
                      <button
                        type="button"
                        aria-expanded={projectsOpen}
                        aria-haspopup="true"
                        className={`group flex items-center gap-1 rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${isSpActive || projectsOpen ? "text-primary" : "text-charcoal/65 hover:text-primary"}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${projectsOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setServicesOpen(false);
                      setProjectsOpen(false);
                    }}
                    className={`group relative rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${isActive ? "text-primary" : "text-charcoal/65 hover:text-primary"}`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 origin-left ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/apply"
                onClick={() => {
                  setServicesOpen(false);
                  setProjectsOpen(false);
                }}
                className="hidden xl:inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Apply Now <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream text-charcoal transition-colors hover:border-primary hover:text-primary xl:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </Container>

        <div
          onMouseEnter={openSvc}
          onMouseLeave={closeSvc}
          className={`absolute left-0 right-0 top-full border-t border-border bg-white transition-all duration-300 ${servicesOpen ? "pointer-events-auto translate-y-0 opacity-100 shadow-2xl shadow-black/12" : "pointer-events-none -translate-y-3 opacity-0"}`}
        >
          <Container className="py-7">
            <div className="grid grid-cols-4 gap-4">
              {NAV_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.n}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className={`group relative overflow-hidden rounded-2xl p-6 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/18 ${service.tone}`}
                  >
                    <span className="pointer-events-none absolute right-3 top-2 select-none font-heading text-[5.5rem] leading-none text-white/8">
                      {service.n}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.iconTone}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-heading text-[1.35rem] leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-white/70">{service.body}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-white/75 transition-colors group-hover:text-white">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <p className="text-[12px] text-ink/52">Four integrated services across the full investment journey.</p>
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary-light"
              >
                View all services <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </Container>
        </div>

        <div
          onMouseEnter={openPrj}
          onMouseLeave={closePrj}
          className={`absolute left-0 right-0 top-full border-t border-border bg-white transition-all duration-300 ${projectsOpen ? "pointer-events-auto translate-y-0 opacity-100 shadow-2xl shadow-black/12" : "pointer-events-none -translate-y-3 opacity-0"}`}
        >
          <Container className="py-7">
            <div className="grid grid-cols-3 gap-4">
              {specialProjects.map((sub, index) => {
                const tones = ["bg-primary", "bg-forest", "bg-gold-dark"] as const;
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setProjectsOpen(false)}
                    className={`group relative overflow-hidden rounded-2xl p-6 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/18 ${tones[index % tones.length]}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">Special Project</p>
                        <h3 className="mt-3 font-heading text-[1.35rem] leading-tight text-white">{sub.label}</h3>
                      </div>
                      <Grid2x2 className="h-5 w-5 text-white/55" />
                    </div>
                    {sub.desc && <p className="mt-4 max-w-sm text-[12px] leading-5 text-white/78">{sub.desc}</p>}
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-white/78">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-[12px] text-ink/52">Three focused initiatives across climate intelligence and finance.</p>
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
