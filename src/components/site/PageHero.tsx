interface Props {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}

export function PageHero({ index, eyebrow, title, lede }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 hairline-bottom sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent"
        aria-hidden
      />
      <div
        className="absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
          <span>{index}</span>
          <span className="h-px w-12 bg-electric/60" />
          <span className="text-muted-foreground">{eyebrow}</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
