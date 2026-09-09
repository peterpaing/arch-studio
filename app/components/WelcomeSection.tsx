import Image from "next/image";
import { welcome } from "@/app/data";

export default function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="relative w-full overflow-hidden"
    >
      <div className="relative mx-auto max-w-[69.375rem] px-8 py-20  md:py-32 ">
        {/* Background Text */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute hidden z-10 select-none whitespace-nowrap font-bold leading-none tracking-[-0.06em] text-surface md:block md:left-30 md:top-[5rem] md:text-[7rem] lg:top-[6rem] lg:left-0 lg:text-[15rem]"
        >
          Welcome
        </p>

        <div className="relative lg:mt-25 lg:flex lg:items-center lg:justify-center lg:gap-30">
          {/* Text Content */}
          <div className="md:ml-[6rem] md:pt-16 lg:ml-0 lg:max-w-[25.5rem] lg:pt-20">
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

          {/* Image Content */}
          <figure className="relative mt-12 hidden aspect-[350/568] max-w-[350px] w-full self-start md:mt-0 lg:block">
        <Image
            src={welcome.image}
            alt="Modern glass building facade"
            fill
            sizes="(min-width: 1024px) 250px, 200px"
            className="object-cover"
        />
        </figure>
        </div>
      </div>
    </section>
  );
}