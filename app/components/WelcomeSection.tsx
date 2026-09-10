import Image from "next/image";
import { welcome } from "@/app/data";

export default function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="relative w-full overflow-hidden"
    >
      <div className="relative mx-auto max-w-[69.375rem] px-8 py-20 md:py-32 lg:px-0">
        <p
          aria-hidden="true"
          className="welcome-bg-enter pointer-events-none absolute z-10 hidden select-none whitespace-nowrap font-bold leading-none tracking-[-0.06em] text-surface md:left-30 md:top-[5rem] md:block md:text-[7rem] lg:left-0 lg:top-[6rem] lg:text-[15rem]"
        >
          Welcome
        </p>

        <div className="relative lg:mt-25 lg:flex lg:items-center lg:justify-center lg:gap-30">
          <div className="welcome-content-enter md:ml-[6rem] md:pt-16 lg:ml-0 lg:max-w-[25.5rem] lg:pt-20">
            <h2
              id="welcome-heading"
              className="max-w-[20rem] text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl lg:max-w-[60rem] lg:text-7xl"
            >
              {welcome.title}
            </h2>

            <div className="mt-8 max-w-[32.5rem] space-y-6 text-base font-medium leading-6 text-primary lg:mt-10">
              {welcome.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="group relative mt-12 hidden aspect-[350/568] w-full max-w-[350px] self-start overflow-hidden md:mt-0 lg:block">
            <Image
              src={welcome.image}
              alt="Modern glass building facade"
              fill
              sizes="350px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}