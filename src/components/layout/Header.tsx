"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/lib/nav-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
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

  const openPrj = (label: string) => {
    clearTimeout(prjTimer.current);
    setProjectsOpen(true);
    setServicesOpen(false);
    setActiveDropdown(label);
  };

  const closePrj = () => {
    prjTimer.current = setTimeout(() => {
      setProjectsOpen(false);
      setActiveDropdown(null);
    }, 180);
  };

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

                if (link.hasSubLinks) {
                  const isMenuActive = pathname.startsWith(link.href);
                  return (
                    <div key={link.label} className="relative" onMouseEnter={() => openPrj(link.label)} onMouseLeave={closePrj}>
                      <button
                        type="button"
                        aria-expanded={projectsOpen && activeDropdown === link.label}
                        aria-haspopup="true"
                        className={`group flex items-center gap-1 rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${isMenuActive || activeDropdown === link.label ? "text-primary" : "text-charcoal/65 hover:text-primary"}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180 text-primary" : ""}`} />
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
          onMouseEnter={() => clearTimeout(prjTimer.current)}
          onMouseLeave={closePrj}
          className={`absolute left-0 right-0 top-full border-t border-border bg-white transition-all duration-300 ${projectsOpen ? "pointer-events-auto translate-y-0 opacity-100 shadow-2xl shadow-black/12" : "pointer-events-none -translate-y-3 opacity-0"}`}
        >
          <Container className="py-3">
            <div className="flex flex-col">
              {(NAV_LINKS.find((link) => link.label === activeDropdown)?.subLinks ?? []).map((sub) => (
                <Link key={sub.href} href={sub.href} onClick={() => setProjectsOpen(false)} className="border-b border-border px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-charcoal/70 transition-colors last:border-b-0 hover:bg-cream hover:text-primary">
                  {sub.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
