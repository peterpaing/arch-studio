import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import delSolDesktop from "@/app/assets/portfolio/desktop/image-del-sol.jpg";
import towerDesktop from "@/app/assets/portfolio/desktop/image-228b.jpg";
import prototypeDesktop from "@/app/assets/portfolio/desktop/image-prototype.jpg";
import delSolMobile from "@/app/assets/portfolio/mobile/image-del-sol.jpg";
import towerMobile from "@/app/assets/portfolio/mobile/image-228b.jpg";
import prototypeMobile from "@/app/assets/portfolio/mobile/image-prototype.jpg";

const featuredProjects = [
  {
    title: "Project Del Sol",
    number: "1",
    desktop: delSolDesktop,
    mobile: delSolMobile,
  },
  {
    title: "228B Tower",
    number: "2",
    desktop: towerDesktop,
    mobile: towerMobile,
  },
  {
    title: "Le Prototype",
    number: "3",
    desktop: prototypeDesktop,
    mobile: prototypeMobile,
  },
];

export default function FeaturedSection() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="mx-auto mt-24 w-[calc(100%-3rem)] max-w-[1110px] md:mt-32 md:w-5/6 lg:mt-48 lg:w-full"
    >
      <div className="mb-10 flex items-center justify-between md:mb-12">
        <h2
          id="featured-heading"
          className="text-5xl font-bold tracking-[-0.04em] md:text-6xl lg:text-[4.5rem]"
        >
          Featured
        </h2>

        <Link
          href="/portfolio"
          className="hidden min-h-[4.5rem] items-center gap-6 bg-primary px-8 text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:inline-flex"
        >
          See All
          <FiArrowRight
            aria-hidden="true"
            className="shrink-0 text-2xl"
          />
        </Link>
      </div>

      <ul className="grid gap-6 lg:grid-cols-3 lg:gap-[1.875rem]">
        {featuredProjects.map((project) => (
          <li key={project.title}>
            <Link
              href="/portfolio"
              aria-label={`${project.title} — view project`}
              className="group relative block h-60 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:h-auto lg:aspect-[350/560]"
            >
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={project.desktop.src}
                />

                <Image
                  src={project.mobile}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 768px) 83vw, calc(100vw - 3rem)"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </picture>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-primary/25"
              />

              <span
                aria-hidden="true"
                className="absolute right-4 top-3 text-[9rem] font-bold leading-none text-white/50 md:right-6 md:text-[12rem] lg:-right-2 lg:top-8"
              >
                {project.number}
              </span>

              <div className="absolute bottom-6 left-6 text-white md:left-10 lg:bottom-10">
                <h3 className="text-lg font-bold md:text-xl">
                  {project.title}
                </h3>
                <p className="text-[0.8125rem] font-medium">
                  View All Projects
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/portfolio"
        className="mt-6 flex min-h-[4.5rem] w-full items-center justify-center gap-6 bg-primary text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:hidden"
      >
        See All
        <FiArrowRight
          aria-hidden="true"
          className="shrink-0 text-2xl"
        />
      </Link>
    </section>
  );
}