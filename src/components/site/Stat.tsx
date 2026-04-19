import { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function Stat({ label, value, suffix = "", prefix = "", decimals = 0 }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="group flex flex-col gap-2 hairline-left pl-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-3xl font-medium tabular-nums tracking-tight sm:text-4xl">
        {prefix}
        {display.toFixed(decimals)}
        <span className="ml-1 text-electric">{suffix}</span>
      </div>
    </div>
  );
}
