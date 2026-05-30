export function BodyColumn({ label, text }: { label: string; text: string }) {
  return (
    <section>
      <h4 className="font-geist mb-4 text-xs uppercase tracking-[0.2em] text-muted/30">
        {label}
      </h4>
      <p className="font-geist text-sm leading-[1.8] text-muted/60 whitespace-pre-wrap">
        {text}
      </p>
    </section>
  );
}
