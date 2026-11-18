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
  { label: "Insights",           href: "/insights" },
  // Services removed from navigation as requested
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
