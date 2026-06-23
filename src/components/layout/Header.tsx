"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Investment Process", href: "/investment-process" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-40 bg-[#f7f5f0]
          border-b transition-shadow duration-300
          ${scrolled ? "border-border shadow-sm" : "border-transparent"}
        `}
      >
        <Container>
          <div className="h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpeg"
                alt="IQ Syndicate"
                width={300}
                height={117}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative text-sm tracking-wide transition-colors py-1
                      ${active ? "text-gold" : "text-charcoal hover:text-gold"}
                      after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                      after:bg-gold after:transition-all after:duration-300
                      ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="
                  group inline-flex items-center gap-3
                  bg-gold hover:bg-gold-dark text-white
                  pl-5 pr-2 py-2 rounded-full
                  text-sm font-semibold tracking-wide
                  transition-all shadow-md shadow-gold/20
                  hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5
                "
              >
                Partner With Us
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <button
              className="lg:hidden text-charcoal relative z-50"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu size={26} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}