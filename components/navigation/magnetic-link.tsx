"use client";

import {
  useRef,
  useEffect,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import gsap from "gsap";

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  strength?: number;
}

export function MagneticLink({
  children,
  strength = 0.25,
  className,
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const currentX = (gsap.getProperty(el, "x") as number) || 0;
      const currentY = (gsap.getProperty(el, "y") as number) || 0;
      const x =
        (e.clientX - (rect.left - currentX) - rect.width / 2) * strength;
      const y =
        (e.clientY - (rect.top - currentY) - rect.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <a ref={ref} className={className} {...props}>
      {children}
    </a>
  );
}
