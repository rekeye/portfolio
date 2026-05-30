export function Hr({ withSpacing }: { withSpacing?: boolean }) {
  return (
    <hr
      className={`h-px w-full bg-muted opacity-10 ${withSpacing ? "mb-16" : ""}`}
    />
  );
}
