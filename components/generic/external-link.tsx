import Link from "next/link";
import { ArrowIcon } from "@/components/generic/arrow-icon";

export function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group font-geist inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted"
    >
      <span className="relative overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-accent">
          {label}
        </span>
      </span>
      <ArrowIcon />
    </Link>
  );
}
