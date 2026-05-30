import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function ContactSection() {
  const linksQuery = await client.fetch(LINKS_QUERY);
  if (!linksQuery || !linksQuery.links) throw new Error("Links not found");

  const { links } = linksQuery;
  const email = links[1]?.href;

  return (
    <section id="contact" className="border-t border-muted/10">
      <div className="flex flex-col gap-16 py-24 md:flex-row md:items-start md:justify-between md:gap-8">
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.92] tracking-[-0.02em] text-muted md:max-w-sm">
          Got a project in mind?
        </h2>
        <div className="flex flex-col gap-10">
          <a
            href={email}
            className="group inline-flex items-center gap-3 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-normal leading-none tracking-[-0.02em] text-muted transition-colors duration-300 hover:text-[#2d5a27]"
          >
            Send me an email
            <span className="flex h-8 w-8 shrink-0 translate-y-[0.1em] items-center justify-center rounded-full border border-muted/15 transition-all duration-300 group-hover:border-[#2d5a27] group-hover:bg-[#2d5a27] group-hover:text-[#f2f0eb] text-muted">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div className="flex gap-6">
            {links.slice(2).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted/40 transition-colors duration-200 hover:text-muted"
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                    {label}
                  </span>
                  <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#2d5a27]">
                    {label}
                  </span>
                </span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  <path
                    d="M1 7L7 1M7 1H3M7 1V5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const LINKS_QUERY = defineQuery(`
*[_type == "about"][0] {
  "links": links[] {
    label,
    href,
  }
}
`);
