import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/app/work/_components/section";
import { BodyColumn } from "@/app/work/_components/body-column";
import { Prose } from "@/app/work/_components/prose";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

async function getProject(slug: string) {
  return client.fetch(PROJECT_QUERY, { slug });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const {
    title,
    year,
    role,
    stack = [],
    summary,
    overview,
    problem,
    approach,
    outcome,
    url,
    repo,
  } = project;

  return (
    <div className="min-h-screen bg-[#f2f0eb] text-[#1a2e1a]">
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10">
        <Link
          href="/public"
          className="font-geist text-xs uppercase tracking-[0.18em] text-[#1a2e1a]/50 transition-colors hover:text-[#1a2e1a]"
        >
          ← Back
        </Link>
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#1a2e1a]">
          SP
        </span>
      </nav>

      {/* ── Hero ── */}
      <header className="px-5 pb-16 pt-32 md:px-10 md:pt-40">
        {/* Year tag */}
        <p className="font-geist mb-6 text-xs uppercase tracking-[0.18em] text-[#1a2e1a]/40">
          {year}
        </p>

        {/* Title */}
        <h1 className="font-display mb-8 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.92] tracking-[-0.02em]">
          {title}
        </h1>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-[#1a2e1a]/10" />

        {/* Meta row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Summary */}
          <p className="font-geist max-w-lg text-sm leading-relaxed text-[#1a2e1a]/60">
            {summary}
          </p>

          {/* Role + Stack */}
          <div className="flex flex-col gap-4 md:items-end">
            {role && (
              <div className="flex flex-col gap-1 md:items-end">
                <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
                  Role
                </span>
                <span className="font-geist text-xs text-[#1a2e1a]/60">
                  {role}
                </span>
              </div>
            )}
            {stack.length > 0 && (
              <div className="flex flex-col gap-1 md:items-end">
                <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {stack.map((item: string) => (
                    <span
                      key={item}
                      className="font-geist rounded-full border border-[#1a2e1a]/15 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#1a2e1a]/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="px-5 md:px-10">
        {/* Overview */}
        {overview && (
          <Section label="Overview">
            <Prose text={overview} />
          </Section>
        )}

        {/* Problem / Approach / Outcome — three-column on desktop */}
        {(problem || approach || outcome) && (
          <div className="mb-24 grid gap-12 md:grid-cols-3 md:gap-8">
            {problem && <BodyColumn label="Problem" text={problem} />}
            {approach && <BodyColumn label="Approach" text={approach} />}
            {outcome && <BodyColumn label="Outcome" text={outcome} />}
          </div>
        )}

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-[#1a2e1a]/10" />

        {/* Links */}
        <div className="mb-24 flex flex-col gap-4 md:flex-row md:gap-8">
          {url && <ExternalLink href={url} label="Live site" />}
          {repo && <ExternalLink href={repo} label="GitHub" />}
        </div>
      </main>

      {/* ── Footer nav ── */}
      <footer className="flex items-center justify-between border-t border-[#1a2e1a]/10 px-5 py-8 md:px-10">
        <Link
          href="/public#work"
          className="font-geist text-xs uppercase tracking-[0.18em] text-[#1a2e1a]/40 transition-colors hover:text-[#1a2e1a]"
        >
          ← All work
        </Link>
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#1a2e1a]/20">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group font-geist inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#1a2e1a]"
    >
      <span className="relative overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#2d5a27]">
          {label}
        </span>
      </span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1a2e1a]/20 transition-all duration-300 group-hover:border-[#2d5a27] group-hover:bg-[#2d5a27] group-hover:text-[#f2f0eb]">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1 7L7 1M7 1H3M7 1V5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Szymon Paluch`,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "project"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    year,
    role,
    stack,
    summary,
    overview,
    problem,
    approach,
    outcome,
    url,
    repo,
  }
`;
