"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/nav-data";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setServicesExpanded(false);
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on route change
  useEffect(() => { onClose(); }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-ink"
          role="dialog"
          aria-modal
          aria-label="Navigation menu"
        >
          {/* ── Top bar ── */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white px-6 py-4">
            <Image
              src="/images/logo.png"
              alt="we"
              width={500}
              height={217}
              className="h-9 w-auto object-contain"
            />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream text-charcoal transition-colors hover:border-primary hover:text-primary"
            >
              <X size={18} />
            </button>
          </div>

          {/* ── Nav links ── */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/30">
              Navigation
            </p>

            <nav className="mt-6 space-y-1.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href ||
                  (link.href === "/services" && pathname.startsWith("/services"));

                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: i * 0.045 }}
                    >
                      {/* Services accordion trigger */}
                      <button
                        onClick={() => setServicesExpanded((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition-colors ${
                          isActive
                            ? "bg-primary/20 text-white"
                            : "text-white/80 hover:bg-white/6 hover:text-white"
                        }`}
                      >
                        <span className="font-heading text-2xl">{link.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-300 ${
                            servicesExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Service sub-items */}
                      <AnimatePresence>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1.5 grid grid-cols-2 gap-2 pb-2 pl-2">
                              {NAV_SERVICES.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.n}
                                    href={service.href}
                                    className={`group flex flex-col gap-2 overflow-hidden rounded-xl p-4 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg ${service.tone}`}
                                  >
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${service.iconTone}`}>
                                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                                    </div>
                                    <p className="font-heading text-[1.1rem] leading-tight">
                                      {service.title}
                                    </p>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.045 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-5 py-4 transition-colors ${
                        isActive
                          ? "bg-primary/20 text-white"
                          : "text-white/80 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      <span className="font-heading text-2xl">{link.label}</span>
                      <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-white/30 transition-colors group-hover:text-white/70" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.32 }}
            className="border-t border-white/10 p-6"
          >
            <Link
              href="/apply"
              className="group flex w-full items-center justify-between rounded-xl bg-primary px-6 py-4 text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-light"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.18em]">
                Apply Now
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <p className="mt-4 text-center text-[10px] text-white/28 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} we
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}