import { defineQuery } from "next-sanity";
import { AboutSection } from "@/app/_components/about/about-section";
import { HeroSection } from "@/app/_components/hero/hero-section/hero-section";
import { WorkSection } from "@/app/_components/work/work-section";
import { Navbar } from "@/components/navigation/navbar";
import { client } from "@/sanity/lib/client";

async function getSelectedProjects() {
  return client.fetch(SELECTED_PROJECTS_QUERY);
}

export default async function Home() {
  const projects = await getSelectedProjects();

  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection projects={projects} />
      <AboutSection />
    </>
  );
}

const SELECTED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    title,
    "slug": slug.current,
    year,
    summary,
    stack,
    "heroImage": heroImage.asset->url,
  }
`);
