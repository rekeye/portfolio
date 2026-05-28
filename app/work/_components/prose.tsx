export function Prose({ text }: { text: string }) {
  return (
    <p className="font-geist max-w-2xl text-sm leading-[1.8] text-[#1a2e1a]/60">
      {text}
    </p>
  );
}
