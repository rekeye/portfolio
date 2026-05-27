import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const BASE_INTERVAL = 0.15;
const JITTER = 0.05;

export function useTypingAnimation({ text }: { text: string }) {
  const containerRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    const characters = text.split("");
    const charTimes = characters.reduce((acc: number[], _, i) => {
      const prev = i === 0 ? 0 : acc[i - 1];
      const interval = BASE_INTERVAL + (Math.random() * JITTER * 2 - JITTER);
      acc.push(prev + interval);
      return acc;
    }, []);

    gsap.set(cursor, { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.addLabel("typingStart", "+=0.15");

    characters.forEach((char, i) => {
      tl.call(
        () => {
          container.textContent += char;
        },
        [],
        `typingStart+=${charTimes[i]}`,
      );
    });

    const typingDuration = charTimes[charTimes.length - 1];
    const BLINK_START = `typingStart+=${typingDuration + 0.1}`;
    const CURSOR_FADE = `typingStart+=${typingDuration + 6.0}`;

    // Start CSS blink animation
    tl.call(
      () => {
        cursor.classList.add("cursor--blinking");
      },
      [],
      BLINK_START,
    );

    tl.to(
      cursor,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      CURSOR_FADE,
    );

    // Clean up class after fade completes
    tl.call(
      () => {
        cursor.classList.remove("cursor--blinking");
      },
      [],
      `${CURSOR_FADE}+=0.4`,
    );

    return () => {
      tl.kill();
      if (container) container.textContent = "";
    };
  });

  return { containerRef, cursorRef };
}
