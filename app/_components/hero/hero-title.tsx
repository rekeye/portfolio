"use client";

import {
  TextLine,
  useTypingAnimation,
} from "@/hooks/animation/useTypingAnimation";

const GREETING = new TextLine("Hi, my name is", "greeting", 0.05, 0.02);
const NAME = new TextLine("Szymon Paluch.", "name", 0.072, 0.03);

export function HeroTitle() {
  const { containerRef, cursorRef } = useTypingAnimation({
    textLines: [GREETING, NAME],
  });

  // TODO: cursor animation on safari is not running

  return (
    <h1 className="flex items-center font-display text-[clamp(3.8rem,14vw,5.5rem)] md:text-[clamp(5rem,12vw,11rem)]">
      <span ref={containerRef} />
      <span
        ref={cursorRef}
        className="inline-block"
        style={{
          width: "2px",
          backgroundColor: "var(--ink)",
          height: "0.85em",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
    </h1>
  );
}
