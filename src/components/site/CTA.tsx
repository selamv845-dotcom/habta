import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-electric/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <div className="inline-flex items-center gap-3 rounded-sm border border-hairline bg-surface/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
          <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
          Open for Commissions
        </div>
        <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          Bring your vision <br className="hidden sm:block" />
          <span className="text-electric text-glow">to steel.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From prototype to industrial run — partner with the Ethiopian foundry engineering Africa's
          next century of machinery.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-sm bg-electric px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform ease-mech hover:-translate-y-0.5"
          >
            Start a commission
            <span className="transition-transform ease-mech group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/investors"
            className="inline-flex items-center gap-3 rounded-sm border border-hairline bg-surface/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-electric/60 hover:text-electric"
          >
            Investor brief
          </Link>
        </div>
      </div>
    </section>
  );
}
