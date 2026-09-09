"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  mobile?: boolean;
};

export function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  const sharedClasses =
    "rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

  const desktopClasses = isCurrent
    ? "text-primary"
    : "text-muted hover:text-primary";

  const mobileClasses = isCurrent
    ? "text-primary"
    : "text-primary hover:text-muted";

    

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={
        mobile
            ? `${sharedClasses} block text-[1.5rem] font-bold leading-8 ${mobileClasses}`
            : `${sharedClasses} text-[0.9375rem] font-bold leading-6 ${desktopClasses}`
      }
    >
      {children}
    </Link>
  );
}