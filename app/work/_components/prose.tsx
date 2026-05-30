export function Prose({ text }: { text: string }) {
  return (
    <p className="font-geist max-w-2xl text-sm leading-[1.8] text-muted/60 whitespace-pre-wrap">
      {text}
    </p>
  );
}
