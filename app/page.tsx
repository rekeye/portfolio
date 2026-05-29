import { AboutSection } from "@/app/_components/about/about-section";
import { HeroSection } from "@/app/_components/hero/hero-section/hero-section";
import { WorkSection } from "@/app/_components/work/work-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </>
  );
}
