"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="container border-t border-muted/10 mt-12 md:mt-24 flex items-center justify-between py-6 text-muted/40 px-5">
      {pathname === "/" ? (
        <span className="font-display text-sm">SP</span>
      ) : (
        <Link
          href="/#work"
          className="font-geist text-xs uppercase tracking-[0.18em] transition-colors hover:text-muted"
        >
          ← All work
        </Link>
      )}
      <span className="text-2xs uppercase tracking-[0.2em] text-muted/40">
        © {new Date().getFullYear()} Szymon Paluch
      </span>
    </footer>
  );
}
