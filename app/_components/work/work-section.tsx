import { defineQuery } from "next-sanity";
import { WorkCard } from "@/app/_components/work/work-card";
import { client } from "@/sanity/lib/client";
import { SectionHeader } from "@/components/section/section-header";

export async function WorkSection() {
  const projects = await client.fetch(SELECTED_PROJECTS_QUERY);

  return (
    <section id="work">
      <SectionHeader title="Selected work">
        <span className="text-2xs uppercase tracking-[0.2em] text-[#1a2e1a]/20">
          {projects.length} projects
        </span>
      </SectionHeader>
      <main className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} />
        ))}
      </main>
    </section>
  );
}

const SELECTED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    title,
    "slug": slug.current,
    year,
    summary,
    stack,
    heroImage {
      "image": image.asset->url,
      alt
    },
  }
`);
