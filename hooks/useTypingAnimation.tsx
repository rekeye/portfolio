import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const DELETE_INTERVAL = 0.06;
const DELETE_JITTER = 0.015;
const PAUSE_TIME = 1;
const PAUSE_BEFORE = 0.2;

export class TextLine {
  text;
  title: string;
  interval;
  jitter;

  constructor(text: string, title: string, interval: number, jitter: number) {
    this.text = text;
    this.title = title;
    this.interval = interval;
    this.jitter = jitter;
  }
}

const getCharTimesWithJitter = (
  text: string,
  baseInterval: number,
  jitter: number,
) =>
  text.split("").reduce((acc: number[], _: string, i: number) => {
    const prev = i === 0 ? 0 : acc[i - 1];
    const interval = baseInterval + (Math.random() * jitter * 2 - jitter);
    acc.push(prev + interval);
    return acc;
  }, []);

const handleTypeLine = (
  line: TextLine,
  tl: GSAPTimeline,
  {
    charTimes,
    lineDuration,
    container,
  }: {
    charTimes: number[];
    lineDuration: number;
    container: HTMLElement;
  },
) => {
  tl.addLabel(`${line.title}Start+=${lineDuration + 0.1}`);
  line.text.split("").forEach((char, i) => {
    tl.call(
      () => {
        container.textContent += char;
      },
      [],
      `${line.title}Start+=${charTimes[i]}`,
    );
  });
};

const handleDeleteLine = (
  line: TextLine,
  tl: GSAPTimeline,
  {
    nextLine,
    lineDuration,
    container,
  }: {
    nextLine: TextLine;
    lineDuration: number;
    container: HTMLElement;
  },
) => {
  const deleteTimes = getCharTimesWithJitter(
    line.text,
    DELETE_INTERVAL,
    DELETE_JITTER,
  );
  const deleteDuration = deleteTimes[deleteTimes.length - 1];

  tl.addLabel(
    `${line.title}DeleteStart`,
    `${line.title}Start+=${lineDuration + PAUSE_TIME}`,
  );

  line.text.split("").forEach((_, i) => {
    tl.call(
      () => {
        container.textContent = container.textContent.slice(0, -1);
      },
      [],
      `${line.title}DeleteStart+=${deleteTimes[i]}`,
    );
  });

  tl.addLabel(
    `${nextLine.title}Start`,
    `${line.title}DeleteStart+=${deleteDuration + PAUSE_BEFORE}`,
  );
};

const handleCursorBlink = (
  cursor: HTMLElement,
  tl: GSAPTimeline,
  {
    line,
    lineDuration,
  }: {
    line: TextLine;
    lineDuration: number;
  },
) => {
  const BLINK_START = `${line.title}Start+=${lineDuration + 0.1}`;
  const CURSOR_FADE = `${line.title}Start+=${lineDuration + 6.0}`;

  tl.call(
    () => {
      gsap.set(cursor, { clearProps: "opacity" });
      gsap.set(cursor, { clearProps: "webkitAnimation" });
      void cursor.offsetWidth;
      cursor.classList.add("cursor--blinking");
    },
    [],
    BLINK_START,
  );

  tl.to(cursor, { opacity: 0, duration: 0.4, ease: "power2.out" }, CURSOR_FADE);

  tl.call(
    () => {
      cursor.classList.remove("cursor--blinking");
    },
    [],
    `${CURSOR_FADE}+=0.41`,
  );
};

export function useTypingAnimation({ textLines }: { textLines: TextLine[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    const tl = gsap.timeline({ delay: 0.2 });
    for (let i = 0; i < textLines.length; i++) {
      const line = textLines[i];
      const charTimes = getCharTimesWithJitter(
        line.text,
        line.interval,
        line.jitter,
      );
      const lineDuration = charTimes[charTimes.length - 1];

      handleTypeLine(line, tl, { charTimes, lineDuration, container });

      if (i < textLines.length - 1) {
        handleDeleteLine(line, tl, {
          nextLine: textLines[i + 1],
          lineDuration,
          container,
        });
      }
      if (i === textLines.length - 1) {
        handleCursorBlink(cursor, tl, { line, lineDuration });
      }
    }

    return () => {
      tl.kill();
      if (container) container.textContent = "";
    };
  });

  return { containerRef, cursorRef };
}
