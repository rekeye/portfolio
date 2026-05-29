import { AboutSection } from "@/app/_components/about/about-section";
import { HeroSection } from "@/app/_components/hero/hero-section/hero-section";
import { WorkSection } from "@/app/_components/work/work-section";
import { Navbar } from "@/components/navigation/navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </>
  );
}
