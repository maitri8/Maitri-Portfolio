export function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-(--color-accent)">/ {kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}
