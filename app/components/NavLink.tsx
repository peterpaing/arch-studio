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
    "rounded-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none";

  const desktopClasses = `
    relative
    after:absolute
    after:-bottom-2
    after:left-0
    after:h-[2px]
    after:bg-primary
    after:transition-all
    after:duration-300
    motion-reduce:after:transition-none
    ${
      isCurrent
        ? "text-primary after:w-full"
        : "text-muted after:w-0 hover:text-primary hover:after:w-full"
    }
  `;

  const mobileClasses = isCurrent
    ? "text-primary"
    : "text-primary hover:text-muted";

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      onClick={
        mobile
          ? (event) => {
              event.currentTarget.closest("details")?.removeAttribute("open");
            }
          : undefined
      }
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