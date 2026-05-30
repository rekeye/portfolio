import type { ReactNode } from "react";

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        {label}
      </h3>
      {children}
    </section>
  );
}
