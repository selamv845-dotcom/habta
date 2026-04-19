import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden hairline-top">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm brushed-metal hairline-bottom hairline-right">
                <span className="font-mono text-xs font-bold tracking-tighter text-electric">
                  HD
                </span>
              </span>
              <div className="leading-none">
                <div className="font-display text-base font-semibold tracking-wide">
                  ETH HD <span className="text-electric">METAL WORK</span>
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Engineering the African Century
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              An industrial workshop founded by inventor Habtamu Demse — building the machinery that
              builds Ethiopia.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-hairline bg-surface/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
              Powered by Coding4Ethiopia
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">
              · 01 / Site
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/foundry"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  The Foundry
                </Link>
              </li>
              <li>
                <Link
                  to="/inventions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inventions
                </Link>
              </li>
              <li>
                <Link
                  to="/blueprint"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blueprint Viewer
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">
              · 02 / Coordinates
            </div>
            <dl className="mt-4 space-y-3 font-mono text-xs">
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Workshop</dt>
                <dd>Addis Ababa · Ethiopia</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Lat / Lon</dt>
                <dd className="text-electric">9.0320° N · 38.7469° E</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
                  Operational
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Response</dt>
                <dd>&lt; 48h</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 hairline-top pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ETH HD Metal Work · All rights reserved</div>
          <div className="flex items-center gap-4">
            <span>Build · v1.0</span>
            <span className="text-electric">●</span>
            <span>Foundry online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
