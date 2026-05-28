import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/navigation/navbar";
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
