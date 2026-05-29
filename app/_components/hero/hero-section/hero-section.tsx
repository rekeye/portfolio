import { HeroTitle } from "@/app/_components/hero/hero-title";
import { MagneticLink } from "@/components/navigation/magnetic-link";
import styles from "../../../../components/generic/pulsing-dot/pulsing-dot.module.css";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { PulsingDot } from "@/components/generic/pulsing-dot/pulsing-dot";

export async function HeroSection() {
  const settings = await client.fetch(AVAILABILITY_QUERY);

  return (
    <section className="container flex flex-col justify-center h-screen px-5">
      <div className="h-4/5 flex flex-col justify-center">
        <HeroTitle />
      </div>
      <div className="h-1/5 flex flex-col justify-center gap-1">
        <div className="flex justify-between text-lg">
          <h2>Frontend engineering, done properly.</h2>
          {settings && settings.available && (
            <p>
              <PulsingDot /> Available for work
            </p>
          )}
        </div>
        <MagneticLink
          className="w-fit text-xl font-medium tracking-wide transition-colors duration-200"
          href="#work"
        >
          Selected work ↓
        </MagneticLink>
      </div>
    </section>
  );
}

const AVAILABILITY_QUERY = defineQuery(`
*[_type == "settings"][0] {
  available
}
`);
