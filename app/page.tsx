import type { Metadata } from "next";
import { AboutSection } from "@/app/_components/about/about-section";
import { HeroSection } from "@/app/_components/hero/hero-section/hero-section";
import { WorkSection } from "@/app/_components/work/work-section";
import { ContactSection } from "@/app/_components/contact/contact-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export const metadata: Metadata = {};
