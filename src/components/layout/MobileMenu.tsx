"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Investment Process", href: "/investment-process" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-stone flex flex-col"
          style={{ backgroundColor: "var(--stone)" }}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Image
              src="/images/logo.jpeg"
              alt="IQ Syndicate"
              width={300}
              height={117}
              className="h-12 w-auto object-contain"
            />

            <button onClick={onClose} aria-label="Close menu" className="text-charcoal">
              <X size={26} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-10 overflow-y-auto">
            <ul className="space-y-6">
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`
                        font-heading text-3xl transition-colors
                        ${active ? "text-gold" : "text-charcoal hover:text-gold"}
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-6 border-t border-border"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="
                group flex items-center justify-center gap-3
                bg-gold hover:bg-gold-dark text-white
                pl-7 pr-2 py-3 rounded-full
                text-sm font-semibold tracking-wide
                transition-all shadow-md shadow-gold/20
                w-full
              "
            >
              Partner With Us
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}