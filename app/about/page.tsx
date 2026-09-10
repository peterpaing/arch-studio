import Image from "next/image";
import { leaders } from "@/app/data";
import heroDesktop from "@/app/assets/about/desktop/image-hero.jpg";
import heroTablet from "@/app/assets/about/tablet/image-hero.jpg";
import heroMobile from "@/app/assets/about/mobile/image-hero.jpg";
import heritageImage from "@/app/assets/about/desktop/image-heritage.jpg";

export default function AboutPage() {
  return (
    <main className="relative">
      <h1 className="sr-only">About Us</h1>

      <span
        aria-hidden="true"
        className="absolute left-6 top-10 hidden [writing-mode:vertical-rl] text-xs font-medium tracking-[0.75em] text-muted md:block"
      >
        ABOUT US
      </span>

      <section
        aria-labelledby="about-intro-heading"
        className="relative mx-auto max-w-[1110px] md:w-5/6"
      >
        <div className="relative h-60 md:h-[34rem] lg:h-[36rem] lg:w-[57%]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroDesktop.src} />
            <source media="(min-width: 768px)" srcSet={heroTablet.src} />

            <Image
              src={heroMobile}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 635px, (min-width: 768px) 83vw, 100vw"
              className="object-cover"
            />
          </picture>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-primary/20"
          />
        </div>

        <div className="relative -mt-12 mr-8 bg-background px-8 pb-2 pt-16 md:absolute md:bottom-0 md:right-0 md:mr-0 md:w-[82%] md:px-16 md:pb-0 md:pt-16 lg:w-[54%] lg:px-20 lg:pt-20">
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 hidden -translate-y-[42%] whitespace-nowrap text-[7rem] font-bold leading-none tracking-[-0.06em] text-surface md:block lg:right-10 lg:text-[13rem]"
          >
            About
          </span>

          <span
            aria-hidden="true"
            className="mb-8 block h-px w-16 bg-border lg:mb-10"
          />

          <h2
            id="about-intro-heading"
            className="max-w-[28rem] text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl lg:text-7xl"
          >
            Your team of professionals
          </h2>

          <p className="mt-8 max-w-[28rem] text-base font-medium leading-6 text-muted">
            Our small team of world-class professionals will work with you
            every step of the way. Strong relationships are at the core of
            everything we do. This extends to the relationship our projects
            have with their surroundings.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="heritage-heading"
        className="mx-auto mt-24 grid max-w-[1110px] gap-16 px-8 md:mt-24 md:w-5/6 md:px-0 lg:mt30 lg:grid-cols-2 lg:items-end lg:gap-32"
      >
        <div className="max-w-[28rem]">
          <span
            aria-hidden="true"
            className="mb-10 block h-px w-16 bg-border lg:mb-12"
          />

          <h2
            id="heritage-heading"
            className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl"
          >
            Our
            <br />
            Heritage
          </h2>

          <div className="mt-8 space-y-6 text-base font-medium leading-6 text-muted">
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skillsets and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>

            <p>
              Specializing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>

            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>

        <figure className="relative hidden aspect-[540/568] w-full lg:block">
          <Image
            src={heritageImage}
            alt="Modern office building facade"
            fill
            sizes="540px"
            className="object-cover"
          />
        </figure>
      </section>

      <section
        aria-labelledby="leaders-heading"
        className="mx-auto mt-24 mb-16 max-w-[1110px] px-8 md:mt-32 md:mb-0 md:w-5/6 md:px-0 lg:mt-48 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-16"
      >
        <h2
          id="leaders-heading"
          className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl"
        >
          The
          <br />
          Leaders
        </h2>

        <ul className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:mt-0 lg:gap-y-16">
          {leaders.map((leader) => (
            <li key={leader.name}>
              <figure className="group">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={leader.avatar}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) 40vw, calc(100vw - 4rem)"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15 motion-reduce:transition-none"
                  />
                </div>

                <figcaption className="mt-4 transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                  <h3 className="text-lg font-bold leading-6 text-primary">
                    {leader.name}
                  </h3>

                  <p className="text-[0.8125rem] font-medium leading-5 text-muted">
                    {leader.role}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}