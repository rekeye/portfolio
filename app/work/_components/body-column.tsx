export function BodyColumn({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-geist mb-4 text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30">
        {label}
      </p>
      <p className="font-geist text-sm leading-[1.8] text-[#1a2e1a]/60">
        {text}
      </p>
    </div>
  );
}
