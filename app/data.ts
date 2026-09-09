import type { StaticImageData } from "next/image";

import avatarJackson from "./assets/about/desktop/avatar-jackson.jpg";
import avatarJake from "./assets/about/desktop/avatar-jake.jpg";
import avatarMaria from "./assets/about/desktop/avatar-maria.jpg";
import avatarThompson from "./assets/about/desktop/avatar-thompson.jpg";
import contactHeroDesktop from "./assets/contact/desktop/image-hero.jpg";
import contactMapDesktop from "./assets/contact/desktop/image-map.png";
import contactHeroMobile from "./assets/contact/mobile/image-hero.jpg";
import contactMapMobile from "./assets/contact/mobile/image-map.png";
import contactHeroTablet from "./assets/contact/tablet/image-hero.jpg";
import contactMapTablet from "./assets/contact/tablet/image-map.png";
import federalDesktop from "./assets/home/desktop/image-hero-federal.jpg";
import paramourDesktop from "./assets/home/desktop/image-hero-paramour.jpg";
import seraphDesktop from "./assets/home/desktop/image-hero-seraph.jpg";
import trinityDesktop from "./assets/home/desktop/image-hero-trinity.jpg";
import welcomeImage from "./assets/home/desktop/image-welcome.jpg";
import federalMobile from "./assets/home/mobile/image-hero-federal.jpg";
import paramourMobile from "./assets/home/mobile/image-hero-paramour.jpg";
import seraphMobile from "./assets/home/mobile/image-hero-seraph.jpg";
import trinityMobile from "./assets/home/mobile/image-hero-trinity.jpg";
import federalTablet from "./assets/home/tablet/image-hero-federal.jpg";
import paramourTablet from "./assets/home/tablet/image-hero-paramour.jpg";
import seraphTablet from "./assets/home/tablet/image-hero-seraph.jpg";
import trinityTablet from "./assets/home/tablet/image-hero-trinity.jpg";
import image228b from "./assets/portfolio/desktop/image-228b.jpg";
import delSol from "./assets/portfolio/desktop/image-del-sol.jpg";
import edelweiss from "./assets/portfolio/desktop/image-edelweiss.jpg";
import eebox from "./assets/portfolio/desktop/image-eebox.jpg";
import portfolioFederal from "./assets/portfolio/desktop/image-federal.jpg";
import hypers from "./assets/portfolio/desktop/image-hypers.jpg";
import netcry from "./assets/portfolio/desktop/image-netcry.jpg";
import portfolioParamour from "./assets/portfolio/desktop/image-paramour.jpg";
import prototype from "./assets/portfolio/desktop/image-prototype.jpg";
import portfolioSeraph from "./assets/portfolio/desktop/image-seraph.jpg";
import sxiv from "./assets/portfolio/desktop/image-sxiv.jpg";
import portfolioTrinity from "./assets/portfolio/desktop/image-trinity.jpg";
import image228bMobile from "./assets/portfolio/mobile/image-228b.jpg";
import delSolMobile from "./assets/portfolio/mobile/image-del-sol.jpg";
import edelweissMobile from "./assets/portfolio/mobile/image-edelweiss.jpg";
import eeboxMobile from "./assets/portfolio/mobile/image-eebox.jpg";
import portfolioFederalMobile from "./assets/portfolio/mobile/image-federal.jpg";
import hypersMobile from "./assets/portfolio/mobile/image-hypers.jpg";
import netcryMobile from "./assets/portfolio/mobile/image-netcry.jpg";
import portfolioParamourMobile from "./assets/portfolio/mobile/image-paramour.jpg";
import prototypeMobile from "./assets/portfolio/mobile/image-prototype.jpg";
import portfolioSeraphMobile from "./assets/portfolio/mobile/image-seraph.jpg";
import sxivMobile from "./assets/portfolio/mobile/image-sxiv.jpg";
import portfolioTrinityMobile from "./assets/portfolio/mobile/image-trinity.jpg";
import image228bTablet from "./assets/portfolio/tablet/image-228b.jpg";
import delSolTablet from "./assets/portfolio/tablet/image-del-sol.jpg";
import edelweissTablet from "./assets/portfolio/tablet/image-edelweiss.jpg";
import eeboxTablet from "./assets/portfolio/tablet/image-eebox.jpg";
import portfolioFederalTablet from "./assets/portfolio/tablet/image-federal.jpg";
import hypersTablet from "./assets/portfolio/tablet/image-hypers.jpg";
import netcryTablet from "./assets/portfolio/tablet/image-netcry.jpg";
import portfolioParamourTablet from "./assets/portfolio/tablet/image-paramour.jpg";
import prototypeTablet from "./assets/portfolio/tablet/image-prototype.jpg";
import portfolioSeraphTablet from "./assets/portfolio/tablet/image-seraph.jpg";
import sxivTablet from "./assets/portfolio/tablet/image-sxiv.jpg";
import portfolioTrinityTablet from "./assets/portfolio/tablet/image-trinity.jpg";

export type ResponsiveImage = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
};

type Project = {
  title: string;
  date: string;
  slug: string;
  image: ResponsiveImage;
  featuredRank?: 1 | 2 | 3;
};

export const navigation = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const homeHeroSlides = [
  {
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    image: { desktop: paramourDesktop, tablet: paramourTablet, mobile: paramourMobile },
  },
  {
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    image: { desktop: seraphDesktop, tablet: seraphTablet, mobile: seraphMobile },
  },
  {
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    image: { desktop: federalDesktop, tablet: federalTablet, mobile: federalMobile },
  },
  {
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for an 84-story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    image: { desktop: trinityDesktop, tablet: trinityTablet, mobile: trinityMobile },
  },
] satisfies ReadonlyArray<{ title: string; description: string; image: ResponsiveImage }>;

export const welcome = {
  title: "Welcome to Arch Studio",
  paragraphs: [
    "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony with the surrounding area to create truly stunning projects that will stand the test of time.",
  ],
  image: welcomeImage,
} as const;

export const projects: readonly Project[] = [
  { title: "Seraph Station", date: "September 2019", slug: "seraph", image: { desktop: portfolioSeraph, tablet: portfolioSeraphTablet, mobile: portfolioSeraphMobile } },
  { title: "Eebox Building", date: "August 2017", slug: "eebox", image: { desktop: eebox, tablet: eeboxTablet, mobile: eeboxMobile } },
  { title: "Federal II Tower", date: "March 2017", slug: "federal", image: { desktop: portfolioFederal, tablet: portfolioFederalTablet, mobile: portfolioFederalMobile } },
  { title: "Project Del Sol", date: "January 2016", slug: "del-sol", image: { desktop: delSol, tablet: delSolTablet, mobile: delSolMobile }, featuredRank: 1 },
  { title: "Le Prototype", date: "October 2015", slug: "prototype", image: { desktop: prototype, tablet: prototypeTablet, mobile: prototypeMobile }, featuredRank: 3 },
  { title: "228B Tower", date: "April 2015", slug: "228b", image: { desktop: image228b, tablet: image228bTablet, mobile: image228bMobile }, featuredRank: 2 },
  { title: "Grand Edelweiss Hotel", date: "December 2013", slug: "edelweiss", image: { desktop: edelweiss, tablet: edelweissTablet, mobile: edelweissMobile } },
  { title: "Netcry Tower", date: "August 2012", slug: "netcry", image: { desktop: netcry, tablet: netcryTablet, mobile: netcryMobile } },
  { title: "Hypers", date: "January 2012", slug: "hypers", image: { desktop: hypers, tablet: hypersTablet, mobile: hypersMobile } },
  { title: "SXIV Tower", date: "March 2011", slug: "sxiv", image: { desktop: sxiv, tablet: sxivTablet, mobile: sxivMobile } },
  { title: "Trinity Bank Tower", date: "September 2010", slug: "trinity", image: { desktop: portfolioTrinity, tablet: portfolioTrinityTablet, mobile: portfolioTrinityMobile } },
  { title: "Project Paramour", date: "February 2008", slug: "paramour", image: { desktop: portfolioParamour, tablet: portfolioParamourTablet, mobile: portfolioParamourMobile } },
];

export const featuredProjects = projects
  .filter((project) => project.featuredRank !== undefined)
  .toSorted((a, b) => a.featuredRank! - b.featuredRank!);

export const leaders = [
  { name: "Jake Richards", role: "Chief Architect", avatar: avatarJake },
  { name: "Thompson Smith", role: "Head of Finance", avatar: avatarThompson },
  { name: "Jackson Rourke", role: "Lead Designer", avatar: avatarJackson },
  { name: "Maria Simpson", role: "Senior Architect", avatar: avatarMaria },
] as const;

export const contact = {
  hero: {
    title: "Contact",
    subtitle: "Tell us about your project",
    description:
      "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
    image: { desktop: contactHeroDesktop, tablet: contactHeroTablet, mobile: contactHeroMobile },
  },
  map: { desktop: contactMapDesktop, tablet: contactMapTablet, mobile: contactMapMobile },
  offices: [
    { name: "Main Office", email: "archone@mail.com", address: "1892 Chenoweth Drive TN", phone: "123-456-3451" },
    { name: "Office II", email: "archtwo@mail.com", address: "3399 Wines Lane TX", phone: "832-123-4321" },
  ],
} satisfies {
  hero: { title: string; subtitle: string; description: string; image: ResponsiveImage };
  map: ResponsiveImage;
  offices: ReadonlyArray<{ name: string; email: string; address: string; phone: string }>;
};
