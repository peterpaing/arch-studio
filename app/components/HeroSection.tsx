"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import { homeHeroSlides } from "../data";

export function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const carouselId = useId();
  const activeSlide = homeHeroSlides[activeSlideIndex];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="relative"
    >
      <div className="relative h-[35rem] md:w-5/6 max-w-[1110px] md:mx-auto lg:h-[34.5rem]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={activeSlide.image.desktop.src}
          />

          <source
            media="(min-width: 768px)"
            srcSet={activeSlide.image.tablet.src}
          />

          <Image
            key={activeSlide.title}
            src={activeSlide.image.mobile}
            alt={`Featured project: ${activeSlide.title}`}
            fill
            priority={activeSlideIndex === 0}
            sizes="(min-width: 1024px) calc(100vw - 25.625rem), (min-width: 768px) 573px, 100vw"
            className="object-cover"
          />
        </picture>

        <div aria-hidden="true" className="absolute inset-0 bg-primary/35" />

        <div
          id={carouselId}
          className="absolute left-8 top-44 max-w-[19rem] text-white md:left-12 md:top-25 md:max-w-[22rem] lg:left-45 lg:top-20 lg:max-w-[26rem]"
        >
          <p className="sr-only" aria-live="polite">
            Slide {activeSlideIndex + 1} of {homeHeroSlides.length}:{" "}
            {activeSlide.title}
          </p>

          <h1 className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] md:text-6xl lg:text-[4.5rem]">
            {activeSlide.title}
          </h1>

          <p className="mt-6 max-w-[19rem] text-[0.9375rem] font-medium leading-5 md:mt-7">
            {activeSlide.description}
          </p>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex min-h-[4.5rem] items-center gap-6 bg-primary px-8 text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            See Our Portfolio

            <Image
              src={arrowIcon}
              alt=""
              width={24}
              height={18}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ol
          aria-label="Choose featured project"
          className="sr-only lg:not-sr-only lg:absolute lg:bottom-0 lg:-left-[3.7rem] lg:flex"
        >
          {homeHeroSlides.map((slide, index) => {
            const isActive = index === activeSlideIndex;

            return (
              <li key={slide.title}>
                <button
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-controls={carouselId}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`grid h-20 w-20 place-items-center text-xs font-bold transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-background text-muted hover:bg-surface hover:text-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <span
        aria-hidden="true"
        className="absolute left-6 top-10 hidden [writing-mode:vertical-rl] text-xs font-medium tracking-[0.75em] text-muted md:block"
      >
        HOME
      </span>
    </section>
  );
}