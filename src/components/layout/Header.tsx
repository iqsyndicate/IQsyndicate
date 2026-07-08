"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/nav-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setServicesOpen(false); }, [pathname]);

  const openServices  = () => { clearTimeout(closeTimer.current); setServicesOpen(true); };
  const closeServices = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 180); };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 shadow-[0_4px_28px_rgba(23,23,23,0.09)] backdrop-blur-md"
            : "bg-white/92 backdrop-blur-sm"
        }`}
      >
        {/* Thin tri-colour brand accent line */}
        <div
          className="h-[3px] w-full"
          style={{ background: "linear-gradient(90deg, #6f1c28 0%, #b38a5b 50%, #1f3d2b 100%)" }}
        />

        <Container>
          <div className="flex h-[68px] items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="we"
                width={500}
                height={217}
                priority
                className="h-9 w-auto object-contain md:h-10"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden items-center xl:flex" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/services" && pathname.startsWith("/services"));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                    >
                      <button
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className={`group flex items-center gap-1 rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                          isActive || servicesOpen
                            ? "text-primary"
                            : "text-charcoal/65 hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            servicesOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive ? "text-primary" : "text-charcoal/65 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 origin-left ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + burger ── */}
            <div className="flex items-center gap-3">
              <Link
                href="/apply"
                className="group hidden xl:inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Apply Now
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <button
                className="xl:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream text-charcoal transition-colors hover:border-primary hover:text-primary"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </Container>

        {/* ── Services mega-menu ── */}
        <div
          aria-hidden={!servicesOpen}
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
          className={`absolute left-0 right-0 top-full border-t border-border bg-white transition-all duration-300 ease-out ${
            servicesOpen
              ? "pointer-events-auto translate-y-0 opacity-100 shadow-[0_20px_60px_rgba(23,23,23,0.12)]"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <Container className="pb-8 pt-7">
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
                    {/* Large watermark number */}
                    <span className="pointer-events-none absolute right-3 top-2 font-heading text-[5.5rem] leading-none text-white/8 select-none">
                      {service.n}
                    </span>

                    {/* Icon */}
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.iconTone}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>

                    <h3 className="mt-4 font-heading text-[1.35rem] leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-white/70">
                      {service.body}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-white/75 transition-colors group-hover:text-white">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Dropdown footer */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <p className="text-[12px] text-ink/48">
                Four integrated services across the full investment journey.
              </p>
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-light"
              >
                View all services
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}