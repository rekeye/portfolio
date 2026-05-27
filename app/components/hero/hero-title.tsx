"use client";

import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const NAME = "Szymon Paluch.";

export function HeroTitle() {
  const { containerRef, cursorRef } = useTypingAnimation({ text: NAME });

  return (
    <>
      <h1 className="font-display text-[clamp(3.8rem,14vw,5.5rem)] md:text-[clamp(5rem,12vw,11rem)]">
        <span ref={containerRef} />
        <span
          ref={cursorRef}
          className="inline-block h-[0.85em] w-0.75 translate-y-[0.05em] bg-[#2d5a27] align-middle"
          aria-hidden="true"
        />
      </h1>
    </>
  );
}
