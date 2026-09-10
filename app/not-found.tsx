import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative">
      <span
        aria-hidden="true"
        className="absolute left-6 top-10 hidden [writing-mode:vertical-rl] text-xs font-medium tracking-[0.75em] text-muted md:block"
      >
        404
      </span>

      <section
        aria-labelledby="not-found-heading"
        className="relative mx-auto flex min-h-[32rem] max-w-[1110px] items-center px-8 py-20 md:w-5/6 md:px-0 md:py-28 lg:min-h-[38rem] lg:py-32"
      >
        <div className="relative w-full lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div
            aria-hidden="true"
            className="not-found-number-enter pointer-events-none select-none text-[9rem] font-bold leading-[0.8] tracking-[-0.06em] text-surface md:text-[14rem] lg:text-[18rem]"
          >
            404
          </div>

          <div className="not-found-content-enter relative -mt-4 max-w-[32rem] md:-mt-10 lg:mt-0">
            <span
              aria-hidden="true"
              className="mb-10 block h-px w-16 bg-border"
            />

            <h1
              id="not-found-heading"
              className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl lg:text-7xl"
            >
              Page Not Found
            </h1>

            <p className="mt-8 max-w-[28rem] text-base font-medium leading-6 text-muted">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved. You can return to the homepage and continue exploring
              Arch Studio.
            </p>

            <Link
              href="/"
              className="group mt-8 inline-flex min-h-[4.5rem] items-center gap-6 bg-primary px-8 text-[0.9375rem] font-bold text-white transition-colors duration-300 hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              Back to Home

              <FiArrowRight
                aria-hidden="true"
                className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}