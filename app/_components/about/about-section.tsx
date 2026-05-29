import { defineQuery } from "next-sanity";
import { Image } from "next-sanity/image";
import { Fact } from "@/app/_components/about/fact";
import { ExternalLink } from "@/components/generic/external-link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/sanityImageUrl";

export async function AboutSection() {
  const settings = await client.fetch(CURRENT_ROLE_QUERY);
  const about = await client.fetch(ABOUT_QUERY);

  if (!about) throw new Error("About not found");

  return (
    <section id="about" className="container px-5 py-24">
      <p className="font-geist mb-8 text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        About
      </p>
      <div className="mb-16 h-px w-full bg-[#1a2e1a]/10" />

      <div className="flex flex-col gap-16 md:flex-row md:gap-24">
        <div className="flex flex-col gap-6 md:w-[55%]">
          <p className="font-geist text-sm leading-[1.9] text-[#1a2e1a]/60 whitespace-pre-wrap">
            {about.prose}
          </p>
          <p className="font-geist text-sm leading-[1.9] text-[#1a2e1a]/60 whitespace-pre-wrap">
            {about.hobbies}
          </p>
        </div>
        <div className="flex flex-col gap-10 md:w-[45%]">
          <ul className="flex flex-col gap-5">
            {about.facts &&
              about.facts.length > 0 &&
              about.facts.map(({ label, value }, i) => (
                <Fact label={label || ""} value={value || ""} key={i} />
              ))}
            {settings && (
              <Fact
                label="Currently"
                value={
                  settings.available
                    ? "Open to work"
                    : settings.currentRole || ""
                }
                accent
              />
            )}
          </ul>
          <div className="h-px w-full bg-[#1a2e1a]/10" />
          <div className="flex flex-col gap-3">
            {about.links &&
              about.links.length > 0 &&
              about.links.map(({ label, href }, i) => (
                <ExternalLink href={href || ""} label={label || ""} key={i} />
              ))}
          </div>
        </div>
      </div>
      {about.images && (
        <div className="mt-16 grid h-105 grid-cols-2 gap-3 md:mt-20 md:h-180 md:grid-cols-3">
          <div className="relative col-span-1 overflow-hidden rounded-lg md:col-span-2">
            <Image
              src={urlFor(about.images[0].image || "").url()}
              alt={about.images[0].alt || ""}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 66vw"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            {about.images.slice(1).map(({ image, alt }, i) => (
              <div
                key={i}
                className="relative flex-1 overflow-hidden rounded-lg"
              >
                <Image
                  src={urlFor(image || "").url()}
                  alt={alt || ""}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const CURRENT_ROLE_QUERY = defineQuery(`
*[_type == "settings"][0] {
  available,
  currentRole
}
`);

const ABOUT_QUERY = defineQuery(`
*[_type == "about"][0] {
  prose,
  hobbies,
  "facts": facts[] {
    label,
    value
  },
  "links": links[] {
    label,
    href,
  },
  "images": images[] {
    "image": image.asset->url,
    alt
  }
}
`);
