import { Compass, Settings2, Shuffle, Boxes } from "lucide-react";

export type SubLink = { label: string; href: string; desc?: string };

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;   // Services mega-menu
  hasSubLinks?: boolean;   // Simple two-item submenu
  subLinks?: SubLink[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "About",              href: "/about" },
  { label: "Services",           href: "/services",          hasDropdown: true },
  { label: "Investment Process", href: "/investment-process" },
  {
    label: "Special Projects",
    href: "#",
    hasSubLinks: true,
    subLinks: [
      { label: "Mobilist Facility",                     href: "/special-projects/mobilist-facility",                         desc: "Blended finance vehicle for climate ventures" },
      { label: "Africa Energy Market Intelligence",     href: "/special-projects/africa-energy-market-intelligence",        desc: "AI-powered platform closing Africa's energy data gap" },
      // { label: "Consumer Financing Project",            href: "/special-projects/consumer-financing-project",               desc: "Solar finance for households and MSMEs" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Team",   href: "/team"   },
];

export const NAV_SERVICES = [
  { n:"01", title:"Climate Advisory",      body:"Project design, market intelligence, and product validation.", href:"/services#advisory",           icon: Compass,   tone:"bg-primary"    as const, iconTone:"bg-white/15 text-white" as const },
  { n:"02", title:"Technical Assistance",  body:"6–18 month programme: financial modelling, legal structuring.", href:"/services#technical-assistance", icon: Settings2, tone:"bg-forest"     as const, iconTone:"bg-white/15 text-white" as const },
  { n:"03", title:"Mobilist Facility",     body:"Blended finance converting philanthropic capital into deployable instruments.", href:"/services#mobilist", icon: Shuffle,   tone:"bg-gold-dark"  as const, iconTone:"bg-white/15 text-white" as const },
  { n:"04", title:"Portfolio Aggregation", body:"Bundling ventures into institutional-grade vehicles for large-ticket investors.", href:"/services#aggregation", icon: Boxes, tone:"bg-ink"        as const, iconTone:"bg-gold-light/20 text-gold-light" as const },
];
