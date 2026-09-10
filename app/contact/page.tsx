import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { contact } from "@/app/data";

export default function ContactPage() {
  return (
    <main className="relative">
      <h1 className="sr-only">Contact</h1>

      <span
        aria-hidden="true"
        className="absolute left-6 top-10 hidden [writing-mode:vertical-rl] text-xs font-medium tracking-[0.75em] text-muted md:block"
      >
        CONTACT US
      </span>

      <section
        aria-labelledby="contact-intro-heading"
        className="relative mx-auto max-w-[1110px] md:w-5/6"
      >
        <div className="relative h-60 md:h-[34rem] lg:h-[36rem] lg:w-[57%]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={contact.hero.image.desktop.src}
            />
            <source
              media="(min-width: 768px)"
              srcSet={contact.hero.image.tablet.src}
            />

            <Image
              src={contact.hero.image.mobile}
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
            Contact
          </span>

          <span
            aria-hidden="true"
            className="mb-8 block h-px w-16 bg-border lg:mb-10"
          />

          <h2
            id="contact-intro-heading"
            className="max-w-[28rem] text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl lg:text-7xl"
          >
            {contact.hero.subtitle}
          </h2>

          <p className="mt-8 max-w-[28rem] text-base font-medium leading-6 text-muted">
            {contact.hero.description}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="contact-details-heading"
        className="mx-auto mt-24 max-w-[1110px] px-8 md:mt-32 md:w-5/6 md:px-0 lg:mt-24 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-16"
      >
        <div>
          <span
            aria-hidden="true"
            className="mb-10 block h-px w-16 bg-border lg:mb-12"
          />

          <h2
            id="contact-details-heading"
            className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl"
          >
            Contact
            <br />
            Details
          </h2>
        </div>

        <ul className="mt-12 grid gap-12 md:grid-cols-2 lg:mt-10">
          {contact.offices.map((office) => (
            <li key={office.name}>
              <address className="not-italic text-sm font-medium leading-6 text-muted">
                <h3 className="mb-4 font-bold text-primary">
                  {office.name}
                </h3>

                <p>
                  Mail:{" "}
                  <a
                    href={`mailto:${office.email}`}
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {office.email}
                  </a>
                </p>

                <p>Address: {office.address}</p>

                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${office.phone}`}
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {office.phone}
                  </a>
                </p>
              </address>

              <a
                href="#contact-map"
                className="mt-6 inline-flex items-center gap-6 text-sm font-bold text-primary transition-colors hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                View on Map
                <FiArrowRight aria-hidden="true" className="text-xl" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact-map"
        aria-label="Office locations"
        className="relative mx-auto mt-24 h-[23rem] max-w-[1110px] md:mt-32 md:h-[35rem] md:w-5/6 lg:mt-40"
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={contact.map.desktop.src}
          />
          <source
            media="(min-width: 768px)"
            srcSet={contact.map.tablet.src}
          />

          <Image
            src={contact.map.mobile}
            alt="Map showing the locations of Arch Studio offices"
            fill
            sizes="(min-width: 1024px) 1110px, (min-width: 768px) 83vw, 100vw"
            className="object-cover"
          />
        </picture>
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto mt-24 mb-16 max-w-[1110px] px-8 md:mt-32 md:mb-0 md:w-5/6 md:px-0 lg:mt-48 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-16"
      >
        <h2
          id="contact-form-heading"
          className="text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-primary md:text-6xl"
        >
          Connect
          <br />
          with us
        </h2>

        <form className="mt-12 lg:mt-0">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Name"
              className="w-full border-b border-border bg-transparent px-4 py-5 font-medium text-primary outline-none placeholder:text-border focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="w-full border-b border-border bg-transparent px-4 py-5 font-medium text-primary outline-none placeholder:text-border focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full resize-none border-b border-border bg-transparent px-4 py-5 font-medium text-primary outline-none placeholder:text-border focus:border-primary"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              aria-label="Send message"
              className="grid size-20 place-items-center bg-primary text-white transition-colors hover:bg-[#3d414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <FiArrowRight aria-hidden="true" className="text-2xl" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}