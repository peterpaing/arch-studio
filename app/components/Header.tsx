import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/app/data";
import { NavLink } from "@/app/components/NavLink";
import closeIcon from "@/app/assets/icons/icon-close.svg";
import menuIcon from "@/app/assets/icons/icon-hamburger.svg";
import logo from "@/app/assets/logo.svg";

export default function Header() {
  return (
    <header className="relative z-50 bg-background">
      <span
        aria-hidden="true"
        className="absolute left-8 top-0 hidden h-30 w-px bg-border md:block"
      />

      <div className="flex h-24 items-center px-8 md:h-30 md:px-[4.5rem] lg:mx-auto lg:h-36 lg:w-5/6 lg:max-w-[1110px] lg:px-0">
        <Link
          href="/"
          aria-label="Arch Studio home"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src={logo}
            alt=""
            width={97}
            height={40}
            priority
            className="h-auto w-[4.8125rem] lg:w-[6.0625rem]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="ml-[4.5rem] hidden md:block lg:ml-20"
        >
          <ul className="flex items-center gap-12 lg:gap-14">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group ml-auto md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex list-none items-center rounded-sm p-2 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="sr-only">Toggle navigation menu</span>

            <Image
              src={menuIcon}
              alt=""
              width={24}
              height={16}
              aria-hidden="true"
              className="group-open:hidden"
            />

            <Image
              src={closeIcon}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
              className="hidden group-open:block"
            />
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full bg-surface px-20 py-10"
          >
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} mobile>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}