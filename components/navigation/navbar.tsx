"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MagneticLink } from "@/components/navigation/magnetic-link";
import Link from "next/link";

const NAV_LINKS = ["Work", "About", "Contact"] as const;

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out",
    });
  });

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full z-50 bg-canvas flex justify-center"
    >
      <nav className="container grow flex justify-between items-center border-b border-muted/10 box-border py-6 px-5 md:px-0">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase font-medium text-ink"
        >
          SP
        </Link>
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
    </header>
  );
}
