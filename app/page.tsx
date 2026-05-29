import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section/hero-section";
import { WorkSection } from "@/app/_components/work/work-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
    </>
  );
}
