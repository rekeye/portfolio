import { WorkCard } from "@/app/_components/work/work-card";
import { SELECTED_PROJECTS_QUERY_RESULT } from "@/sanity.types";

export function WorkSection({
  projects = [],
}: {
  projects: SELECTED_PROJECTS_QUERY_RESULT;
}) {
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
