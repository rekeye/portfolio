"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NotFound() {
  const containerRef = useRef(null);
  const numRef = useRef(null);
  const labelRef = useRef(null);
  const messageRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      tl.from(numRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
      })
        .from(
          labelRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          messageRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          linkRef.current,
          {
            opacity: 0,
            y: 8,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col justify-center gap-12 bg-[#f2f0eb] px-5 py-8 text-[#1a2e1a] md:px-10"
    >
      <div className="flex flex-col gap-8">
        <h1
          ref={numRef}
          className="font-display text-[clamp(7rem,22vw,18rem)] font-normal leading-none tracking-[-0.04em] text-[#1a2e1a]"
        >
          404
        </h1>

        <div className="h-px w-full bg-[#1a2e1a]/10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p
            ref={labelRef}
            className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30"
          >
            Page not found
          </p>
          <p
            ref={messageRef}
            className="font-geist max-w-xs text-sm leading-[1.8] text-[#1a2e1a]/50"
          >
            This page doesn&apos;t exist or has been moved.
          </p>
        </div>
      </div>
      <div ref={linkRef}>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-geist text-xs uppercase tracking-[0.18em] text-[#1a2e1a]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1a2e1a]/15 transition-all duration-300 group-hover:border-[#2d5a27] group-hover:bg-[#2d5a27] group-hover:text-[#f2f0eb] text-[#1a2e1a] rotate-[225deg]">
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
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              Back home
            </span>
            <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#2d5a27]">
              Back home
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
