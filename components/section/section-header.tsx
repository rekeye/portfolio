import type { ReactNode } from "react";

export function SectionHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="flex items-end justify-between border-b border-muted/10 pb-8 mb-12">
      <h2 className="font-geist text-2xs uppercase tracking-[0.2em] text-muted/30">
        {title}
      </h2>
      {children}
    </header>
  );
}
