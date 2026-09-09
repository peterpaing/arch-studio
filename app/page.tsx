import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { WelcomeSection } from "@/app/components/WelcomeSection";

export default function Home() {
  return (
    <>
    <main>
        <HeroSection />
        <WelcomeSection />
      </main>
    </>
  );
}