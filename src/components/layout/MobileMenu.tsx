"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav-data";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setServicesOpen(false);
    setProjectsOpen(false);
    if (open) onClose();
  }, [pathname]);

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
          <div className="flex items-center justify-between border-b border-white/10 bg-white px-6 py-4">
            <Image src="/images/logo.png" alt="IQ Syndicate" width={500} height={217} className="h-9 w-auto object-contain" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream text-charcoal hover:border-primary hover:text-primary"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/30">Navigation</p>
            <nav className="mt-6 space-y-1.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "#" && pathname.startsWith(link.href));

                if (link.hasDropdown || link.hasSubLinks) {
                  const menuOpen = link.label === "Services" ? servicesOpen : projectsOpen;
                  const setMenuOpen = link.label === "Services" ? setServicesOpen : setProjectsOpen;
                  return (
                    <motion.div key={link.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: i * 0.045 }}>
                      <button
                        type="button"
                        onClick={() => setMenuOpen((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-xl px-5 py-4 transition-colors ${isActive ? "bg-primary/20 text-white" : "text-white/80 hover:bg-white/6 hover:text-white"}`}
                      >
                        <span className="font-heading text-2xl">{link.label}</span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {menuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1.5 space-y-1 pb-2 pl-2">
                              {(link.subLinks ?? []).map((sub) => (
                                <Link key={sub.href} href={sub.href} onClick={onClose} className="block border-b border-white/10 px-5 py-3 text-[13px] font-semibold text-white/75 transition-colors last:border-b-0 hover:bg-white/6 hover:text-white">
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={link.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: i * 0.045 }}>
                    <Link href={link.href} className={`flex items-center justify-between rounded-xl px-5 py-4 transition-colors ${isActive ? "bg-primary/20 text-white" : "text-white/80 hover:bg-white/6 hover:text-white"}`}>
                      <span className="font-heading text-2xl">{link.label}</span>
                      <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-white/30" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.32 }} className="border-t border-white/10 p-6">
            <Link href="/apply" onClick={onClose} className="group flex w-full items-center justify-between rounded-xl bg-primary px-6 py-4 text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-light">
              <span className="text-[12px] font-bold uppercase tracking-[0.18em]">Apply Now</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/28">
              © {new Date().getFullYear()} IQ Syndicate
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
