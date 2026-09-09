import HeroSection  from "@/app/components/HeroSection";
import WelcomeSection from "@/app/components/WelcomeSection";
import SmallTeamSection from "@/app/components/SmallTeamSection";

export default function Home() {
  return (
    <>
    <main>
        <HeroSection />
        <WelcomeSection />
        <SmallTeamSection />
      </main>
    </>
  );
}