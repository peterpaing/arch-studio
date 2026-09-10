import Image from "next/image";
import { projects } from "@/app/data";

export default function PortfolioPage() {
  return (
    <main className="relative">
      <h1 className="sr-only">Portfolio</h1>

      <span
        aria-hidden="true"
        className="absolute left-6 top-10 hidden [writing-mode:vertical-rl] text-xs font-medium tracking-[0.75em] text-muted md:block"
      >
        PORTFOLIO
      </span>

      <section
        aria-label="Portfolio projects"
        className="mx-auto w-[calc(100%-3rem)] max-w-[1110px] md:w-5/6"
      >
        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-[1.875rem]">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="relative h-60 overflow-hidden lg:aspect-[350/560] lg:h-auto">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={project.image.desktop.src}
                  />

                  <source
                    media="(min-width: 768px)"
                    srcSet={project.image.tablet.src}
                  />

                  <Image
                    src={project.image.mobile}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 83vw, calc(100vw - 3rem)"
                    className="object-cover"
                  />
                </picture>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent"
                />

                <div className="absolute bottom-6 left-6 text-white md:left-10 lg:bottom-10">
                  <h2 className="text-lg font-bold leading-6">
                    {project.title}
                  </h2>

                  <p className="text-[0.8125rem] font-medium leading-5">
                    {project.date}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}