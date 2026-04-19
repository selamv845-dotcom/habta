import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/foundry" as const, label: "Foundry" },
  { to: "/inventions" as const, label: "Inventions" },
  { to: "/blueprint" as const, label: "Blueprint" },
  { to: "/services" as const, label: "Services" },
  { to: "/investors" as const, label: "Investors" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ease-mech duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md hairline-bottom"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-sm brushed-metal hairline-bottom hairline-right">
            <span className="absolute inset-0.5 rounded-sm bg-background/40" />
            <span className="relative font-mono text-[11px] font-bold tracking-tighter text-electric">
              HD
            </span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[13px] font-semibold tracking-wider">
              ETH HD <span className="text-electric">METAL WORK</span>
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
              Foundry · Addis Ababa
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors ease-mech hover:text-foreground"
              activeProps={{ className: "!text-electric" }}
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-electric transition-transform ease-mech group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-sm border border-electric/40 bg-electric/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-electric transition-all ease-mech hover:bg-electric hover:text-primary-foreground sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
            Commission
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ease-mech ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-1.5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 top-3 h-px bg-foreground transition-transform ease-mech ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height] ease-mech duration-500 lg:hidden ${
          open ? "max-h-96 hairline-bottom" : "max-h-0"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-px px-4 pb-4 sm:px-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="flex items-center justify-between border-b border-hairline/40 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
              activeProps={{ className: "!text-electric" }}
            >
              <span>{l.label}</span>
              <span className="font-mono text-[10px] opacity-60">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
