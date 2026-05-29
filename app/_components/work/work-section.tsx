import { defineQuery } from "next-sanity";
import { WorkCard } from "@/app/_components/work/work-card";
import { client } from "@/sanity/lib/client";

export async function WorkSection() {
  const projects = await client.fetch(SELECTED_PROJECTS_QUERY);

  return (
    <section id="work" className="container px-5 py-24">
      {/* Section header */}
      <div className="mb-12 flex items-end justify-between">
        <p className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
          Selected work
        </p>
        <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/20">
          {projects.length} projects
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} />
        ))}
      </div>
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
