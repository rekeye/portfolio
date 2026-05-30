import { PulsingDot } from "@/components/generic/pulsing-dot/pulsing-dot";

export function Fact({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <li className="flex flex-col gap-1">
      <span className="font-geist text-2xs uppercase tracking-[0.2em] text-muted/40">
        {label}
      </span>
      <span
        className={`font-geist text-sm ${
          accent ? "text-accent" : "text-muted/60"
        }`}
      >
        {accent && <PulsingDot />} {value}
      </span>
    </li>
  );
}
