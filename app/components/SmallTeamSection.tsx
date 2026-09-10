import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/app/assets/icons/icon-arrow.svg";
import smallTeamDesktop from "@/app/assets/home/desktop/image-small-team.jpg";
import smallTeamTablet from "@/app/assets/home/tablet/image-small-team.jpg";
import smallTeamMobile from "@/app/assets/home/mobile/image-small-team.jpg";

export default function SmallTeamSection() {
  return (
    <section
      aria-labelledby="small-team-heading"
      className="relative max-w-[1110px] md:mx-auto md:w-5/6 lg:w-full"
    >
      <div className="group relative h-[27rem] overflow-hidden lg:h-[30rem]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={smallTeamDesktop.src}
          />
          <source
            media="(min-width: 768px)"
            srcSet={smallTeamTablet.src}
          />
          <Image
            src={smallTeamMobile}
            alt=""
            fill
            sizes="(min-width: 1024px) 1110px, (min-width: 768px) 83vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </picture>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary/35 transition-colors duration-500 group-hover:bg-primary/45 motion-reduce:transition-none"
        />

        <div className="absolute left-8 top-42 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none md:left-12 md:top-32 lg:left-45 lg:top-40">
          <h2
            id="small-team-heading"
            className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] md:text-6xl lg:text-[4.5rem]"
          >
            Small team,
            <br />
            big ideas
          </h2>

          <Link
            href="/about"
            className="group/link mt-8 inline-flex min-h-[4.5rem] items-center gap-6 bg-primary px-8 text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            About Us
            <Image
              src={arrowIcon}
              alt=""
              width={24}
              height={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}