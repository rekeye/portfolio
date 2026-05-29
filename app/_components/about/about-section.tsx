import { ExternalLink } from "@/app/work/_components/external-link";

export function AboutSection() {
  return (
    <section id="about" className="container px-5 py-24">
      <p className="font-geist mb-8 text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        About
      </p>
      <div className="mb-16 h-px w-full bg-[#1a2e1a]/10" />

      <div className="flex flex-col gap-16 md:flex-row md:gap-24">
        <div className="flex flex-col gap-6 md:w-[55%]">
          <p className="font-geist text-sm leading-[1.9] text-[#1a2e1a]/60">
            I build interfaces where the engineering and the experience are the
            same thing — not a layer on top of each other. I'm drawn to the
            parts of frontend that are hardest to get right: motion, state, the
            feeling of something responding exactly as it should.
          </p>
          <p className="font-geist text-sm leading-[1.9] text-[#1a2e1a]/60">
            Currently focused on animation-heavy UI and design systems. Open to
            full-time roles and selected freelance projects.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:w-[45%]">
          <div className="flex flex-col gap-5">
            <Fact label="Based in" value="Bytom, Poland" />
            <Fact
              label="Focus"
              value="Frontend engineering, interaction & motion"
            />
            <Fact label="Currently" value="Open to work" accent />
          </div>
          <div className="h-px w-full bg-[#1a2e1a]/10" />
          <div className="flex flex-col gap-3">
            <ExternalLink href="/public/cv.pdf" label="CV" />
            <ExternalLink href="https://github.com/" label="GitHub" />
            <ExternalLink href="https://linkedin.com/" label="LinkedIn" />
            <ExternalLink
              href="mailto:hello@example.com"
              label="hello@example.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        {label}
      </span>
      <span
        className={`font-geist text-sm ${
          accent ? "text-[#2d5a27]" : "text-[#1a2e1a]/60"
        }`}
      >
        {accent && (
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2d5a27] align-middle" />
        )}
        {value}
      </span>
    </div>
  );
}
