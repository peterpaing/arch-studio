import HeroSection  from "@/app/components/HeroSection";
import WelcomeSection from "@/app/components/WelcomeSection";
import SmallTeamSection from "@/app/components/SmallTeamSection";
import FeaturedSection from "@/app/components/FeaturedSection";

export default function Home() {
  return (
    <>
    <main>
        <HeroSection />
        <WelcomeSection />
        <SmallTeamSection />
        <FeaturedSection />
    </main>
    </>
  );
}