import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-brand-gold
      text-white
      hover:bg-brand-goldDark
      border-transparent
    `,

    secondary: `
      border
      border-brand-border
      text-brand-charcoal
      hover:bg-brand-sand
    `,
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        text-sm
        font-medium
        tracking-wide
        transition-all
        duration-300
        ease-premium
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}