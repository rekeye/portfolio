import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defineQuery } from "next-sanity";
import { Image } from "next-sanity/image";
import { Section } from "@/app/work/_components/section";
import { BodyColumn } from "@/app/work/_components/body-column";
import { Prose } from "@/app/work/_components/prose";
import { Hr } from "@/components/generic/hr";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import { Gallery } from "@/app/work/_components/gallery";
import { SanityImageAssetReference } from "@/sanity.types";
import { ExternalLink } from "@/components/generic/external-link";

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
    heroImage,
    overview,
    detailImage,
    problem,
    approach,
    outcome,
    gallery,
    url,
    repo,
  } = project;

  return (
    <div className="container min-h-screen text-muted">
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center py-5">
        <nav className="container flex justify-between gap-4">
          <Link
            href="/"
            className="font-geist text-xs uppercase tracking-[0.18em] text-muted/50 transition-colors hover:text-muted"
          >
            ← Back
          </Link>
          <span className="font-geist text-xs uppercase tracking-[0.18em] text-muted">
            SP
          </span>
        </nav>
      </div>

      <header className="px-5 pb-16 pt-32 md:px-10 md:pt-40">
        <p className="font-geist mb-6 text-xs uppercase tracking-[0.18em] text-muted/40">
          {year}
        </p>
        <h1 className="font-display mb-8 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.92] tracking-[-0.02em]">
          {title}
        </h1>
        <Hr />
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="font-geist max-w-lg text-sm leading-relaxed text-muted/60">
            {summary}
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            {role && (
              <div className="flex flex-col gap-1 md:items-end">
                <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-muted/30">
                  Role
                </span>
                <span className="font-geist text-xs text-muted/60">{role}</span>
              </div>
            )}
            {stack !== null && stack.length > 0 && (
              <div className="flex flex-col gap-1 md:items-end">
                <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-muted/30">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {stack.map((item: string) => (
                    <span
                      key={item}
                      className="font-geist rounded-full border border-muted/15 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted/50"
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

      {heroImage.image && heroImage.alt && (
        <div className="mb-12 flex justify-center md:mb-24">
          <div className="relative aspect-video object-cover w-full max-w-5xl overflow-hidden rounded-2xl border border-muted/10 bg-white shadow-sm p-12">
            <Image
              src={urlFor(heroImage.image).url()}
              alt={heroImage.alt}
              fill
            />
          </div>
        </div>
      )}

      <main className="px-5 md:px-10">
        {overview && (
          <Section label="Overview">
            <Prose text={overview} />
          </Section>
        )}

        {(problem || approach || outcome) && (
          <div className="mb-24 grid gap-12 md:grid-cols-3 md:gap-8">
            {problem && <BodyColumn label="Problem" text={problem} />}
            {approach && <BodyColumn label="Approach" text={approach} />}
            {outcome && <BodyColumn label="Outcome" text={outcome} />}
          </div>
        )}

        {detailImage?.image && detailImage.alt && (
          <div className="mb-12 flex justify-center md:mb-24">
            <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-muted/10 bg-white shadow-sm p-12">
              <Image
                src={urlFor(detailImage.image).url()}
                alt={detailImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        <Hr />

        {gallery && (
          <Gallery
            images={gallery.map(
              (img: { asset?: SanityImageAssetReference }) => ({
                src: urlFor(img.asset || "")
                  .width(1200)
                  .url(),
                alt: "",
                span: 1,
              }),
            )}
          />
        )}

        <Hr />

        <div className="mb-24 flex flex-col gap-4 md:flex-row md:gap-8">
          {url && <ExternalLink href={url} label="Live site" />}
          {repo && <ExternalLink href={repo} label="GitHub" />}
        </div>
      </main>

      <footer className="flex items-center justify-between border-t border-muted/10 mx-5 py-8 md:mx-10">
        <Link
          href="/#work"
          className="font-geist text-xs uppercase tracking-[0.18em] text-muted/40 transition-colors hover:text-muted"
        >
          ← All work
        </Link>
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-muted/20">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
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

const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    year,
    role,
    stack,
    summary,
    heroImage {
      "image": image.asset->url,
      alt
    },
    overview,
    detailImage {
      "image": image.asset->url,
      alt
    },
    problem,
    approach,
    outcome,
    "gallery":gallery[]->{
    "image": image.asset->url,
    alt
    },
    url,
    repo,
  }
`);
