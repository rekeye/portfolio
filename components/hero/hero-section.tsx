import { HeroTitle } from "@/components/hero/hero-title";
import { MagneticLink } from "@/components/navigation/magnetic-link";

export function HeroSection() {
  return (
    <section className="container flex flex-col justify-center h-screen">
      <div className="h-4/5 flex flex-col justify-center">
        <HeroTitle />
      </div>
      <div className="h-1/5 flex flex-col justify-center gap-1">
        <div className="flex justify-between text-lg">
          <h2>Frontend engineering, done properly.</h2>
          <p>
            <span className="dot--heartbeat">●</span> Available for work
          </p>
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
