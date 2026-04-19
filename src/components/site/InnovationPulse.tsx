"use client";

import { useEffect, useState } from "react";

const items = [
  { label: "Current Project", value: "85%", note: "to Prototype" },
  { label: "Active Machines", value: "12", note: "in workshop" },
  { label: "Patents Filed", value: "07", note: "national" },
  { label: "Foundry Hours", value: "18,420", note: "logged" },
];

export function InnovationPulse() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden bg-surface/40 hairline-top hairline-bottom">
      <div className="absolute inset-0 scanlines opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hairline-bottom">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
            <span className="text-electric">LIVE</span>
            <span>· Innovation Pulse</span>
          </div>
          <div className="hidden sm:block">
            Foundry Telemetry · {String(tick % 60).padStart(2, "0")}s
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-hairline/50 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.label} className="px-4 py-5 sm:px-6 sm:py-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {it.label}
                </span>
                <span
                  className={`font-mono text-[10px] tabular-nums text-electric ${tick % 4 === i ? "ticker" : ""}`}
                >
                  ●
                </span>
              </div>
              <div className="mt-2 font-display text-2xl font-medium tabular-nums tracking-tight sm:text-3xl">
                {it.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {it.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
