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
  {
    label: "Services",
    href: "/services",
    hasSubLinks: true,
    subLinks: [
      { label: "Climate Advisory", href: "/services#advisory" },
      { label: "Technical Assistance", href: "/services#technical-assistance" },
      { label: "Capital Mobilization", href: "/services#mobilist" },
      { label: "Portfolio Aggregation", href: "/services#aggregation" },
    ],
  },
  // { label: "Investment Process", href: "/investment-process" },
  // Special Projects navigation is disabled while those pages are unavailable.
  // { label: "Impact", href: "/impact" },
  {
    label: "Team",
    href: "/team",
    hasSubLinks: true,
    subLinks: [
      { label: "Management Team", href: "/team" },
      { label: "Advisors", href: "/team/advisors" },
    ],
  },
];
