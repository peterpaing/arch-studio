import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "@/app/components/NavLink";
import logo from "@/app/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="mt-30 mb-12 md:mt-32 md:mb-0 lg:mt-40">
      <div className="relative w-full lg:mx-auto lg:max-w-[1110px]">
        <div className="flex flex-col items-center bg-surface pb-12 pt-24 md:h-[7.5rem] md:w-[80%] md:flex-row md:py-0 lg:h-[10rem] lg:w-[88.65%]">
          <Link
            href="/"
            aria-label="Arch home"
            className="group absolute -top-16 grid size-32 place-items-center bg-primary transition-colors duration-300 hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:static md:size-[7.5rem] md:shrink-0 lg:size-[10rem]"
          >
            <Image
              src={logo}
              alt=""
              width={96}
              height={40}
              aria-hidden="true"
              className="w-16 brightness-0 invert transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none lg:w-24"
            />
          </Link>

          <nav aria-label="Footer navigation" className="md:ml-6 lg:ml-20">
            <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-8 lg:gap-14">
              <li>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </li>

              <li>
                <NavLink href="/about">About Us</NavLink>
              </li>

              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Link
          href="/portfolio"
          className="group mx-auto mt-8 flex min-h-[4.5rem] w-fit items-center gap-6 bg-primary px-8 text-[0.9375rem] font-bold text-white transition-colors duration-300 hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          See Our Portfolio

          <FiArrowRight
            aria-hidden="true"
            className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </footer>
  );
}