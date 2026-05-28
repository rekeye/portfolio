"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MagneticLink } from "@/components/navigation/magnetic-link";

const NAV_LINKS = ["Work", "About", "Contact"] as const;

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out",
    });
  });

  return (
    <nav
      ref={navRef}
      className="absolute container py-6 flex justify-between items-center"
    >
      <span className="text-xs tracking-[0.2em] uppercase font-medium text-ink">
        SP
      </span>
      <div className="flex gap-8">
        {NAV_LINKS.map((label) => (
          <MagneticLink
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-sm tracking-wide text-ink/60 hover:text-ink transition-colors duration-200"
          >
            {label}
          </MagneticLink>
        ))}
      </div>
    </nav>
  );
}
