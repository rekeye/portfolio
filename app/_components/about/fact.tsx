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
      <span className="font-geist text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        {label}
      </span>
      <span
        className={`font-geist text-sm ${
          accent ? "text-[#2d5a27]" : "text-[#1a2e1a]/60"
        }`}
      >
        {accent && (
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2d5a27] align-middle" />
        )}
        {value}
      </span>
    </li>
  );
}
