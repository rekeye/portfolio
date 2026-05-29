import Link from "next/link";
import { Image } from "next-sanity/image";
import { SELECTED_PROJECTS_QUERY_RESULT } from "@/sanity.types";
import { ArrowIcon } from "@/components/generic/arrow-icon";
import { urlFor } from "@/sanity/lib/sanityImageUrl";

export function WorkCard({
  project,
  index,
}: {
  project: SELECTED_PROJECTS_QUERY_RESULT[number];
  index: number;
}) {
  const { title, slug, year, summary, stack = [], heroImage } = project;
  const imageLeft = index % 2 === 0;

  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-muted/8 bg-[#eeecea] md:flex-row md:h-120"
    >
      <div
        className={`relative h-64 w-full overflow-hidden md:h-full md:w-1/2 ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        {heroImage ? (
          <Image
            src={urlFor(heroImage.image || "").url()}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/5">
            <span className="font-display text-[clamp(3rem,6vw,5rem)] font-normal text-muted/10 leading-none">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div
        className={`flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 ${
          imageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <div>
          <div className="mb-6 flex items-start justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[0.95] tracking-[-0.02em] text-muted">
              {title}
            </h2>
            <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.18em] text-muted/30">
              {year}
            </span>
          </div>
          {summary && (
            <p className="text-sm leading-[1.8] text-muted/55">{summary}</p>
          )}
        </div>
        <div className="mt-8 flex items-end justify-between gap-4">
          {stack !== null && stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-muted/12 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted/40"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}
