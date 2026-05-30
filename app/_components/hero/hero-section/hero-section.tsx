import { HeroTitle } from "@/app/_components/hero/hero-title";
import { MagneticLink } from "@/components/navigation/magnetic-link";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { PulsingDot } from "@/components/generic/pulsing-dot/pulsing-dot";

export async function HeroSection() {
  const settings = await client.fetch(AVAILABILITY_QUERY);

  return (
    <section className="flex flex-col justify-center h-screen">
      <div className="grow-3 flex flex-col justify-center">
        <HeroTitle />
      </div>
      <div className="grow flex flex-col justify-center gap-4 text-muted">
        <p>Frontend engineering, done properly.</p>
        <div className="flex justify-between">
          <MagneticLink
            className="w-fit text-lg font-medium tracking-wide transition-colors duration-200"
            href="#work"
          >
            Selected work ↓
          </MagneticLink>
          {settings && settings.available && (
            <p className="tracking-wide">
              <PulsingDot /> Available for work
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const AVAILABILITY_QUERY = defineQuery(`
*[_type == "settings"][0] {
  available
}
`);
