import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cncImg from "@/assets/machine-cnc.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/blueprint")({
  head: () => ({
    meta: [
      { title: "Virtual Blueprint Viewer · ETH HD Metal Work" },
      {
        name: "description",
        content:
          "Interactive blueprint viewer — disassemble a custom-built ETH HD Metal Work machine layer by layer.",
      },
      { property: "og:title", content: "Virtual Blueprint Viewer" },
      {
        property: "og:description",
        content:
          "Disassemble an industrial machine in your browser. Frame · mechanical · electronics · housing.",
      },
      { property: "og:image", content: cncImg },
      { name: "twitter:image", content: cncImg },
    ],
  }),
  component: BlueprintPage,
});

const layers = [
  { id: "frame",    label: "Steel Frame",          color: "var(--electric)",  desc: "Welded mild-steel chassis. Load-bearing structure carrying every other system." },
  { id: "mech",     label: "Mechanical",           color: "var(--electric)",  desc: "Lead screws, linear rails, stepper-driven gantry — converts torque to motion." },
  { id: "elec",     label: "Electronics",          color: "var(--electric)",  desc: "Custom controller board, drivers and sensors orchestrating every axis." },
  { id: "housing",  label: "Housing & Finish",     color: "var(--electric)",  desc: "Brushed steel panels, viewport glass and electric-blue accent lighting." },
];

function BlueprintPage() {
  const [spread, setSpread] = useState(0);

  return (
    <>
      <PageHero
        index="· 04"
        eyebrow="Virtual Blueprint Viewer"
        title={<>Disassemble a <span className="text-electric">machine.</span></>}
        lede="Drag the slider, or pick a layer, to take Project Anvil — our 3-axis CNC mill — apart on the page. Every layer was designed and fabricated in our Addis Ababa workshop."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* VIEWER */}
          <div className="md:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm hairline-top hairline-bottom blueprint-grid bg-surface/40">
              {/* Title bar */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between hairline-bottom bg-background/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-sm bg-electric pulse-dot" />
                  Project Anvil · Rev 03
                </div>
                <div className="hidden sm:block">spread · {Math.round(spread)}%</div>
              </div>

              {/* Scan line */}
              <div className="absolute inset-x-0 top-9 h-px scan-x bg-gradient-to-r from-transparent via-electric to-transparent" aria-hidden />

              {/* Stacked layers */}
              {layers.map((layer, i) => {
                // i = 0 sits at base, last layer floats most. We translate based on spread (0–100).
                const offset = (i - (layers.length - 1) / 2) * (spread / 100) * 18; // %
                return (
                  <div
                    key={layer.id}
                    className="absolute inset-0 flex items-center justify-center transition-transform ease-mech duration-700"
                    style={{ transform: `translate(${offset * 0.6}%, ${-offset}%)` }}
                  >
                    <div className="relative h-[58%] w-[68%]">
                      {/* Layer card */}
                      <div className="absolute inset-0 overflow-hidden rounded-sm border border-electric/30 bg-background/80 shadow-2xl backdrop-blur-sm">
                        {/* Use machine image as detail on top layer; sketches for the others */}
                        {i === layers.length - 1 ? (
                          <img src={cncImg} alt="" loading="lazy" width={1280} height={896} className="h-full w-full object-cover opacity-90" />
                        ) : (
                          <svg viewBox="0 0 400 260" className="h-full w-full text-electric" fill="none" stroke="currentColor" strokeWidth="0.7">
                            <rect x="20" y="20" width="360" height="220" />
                            {i === 0 && (
                              <>
                                <rect x="40" y="40" width="320" height="180" />
                                <line x1="40" y1="40" x2="360" y2="220" />
                                <line x1="360" y1="40" x2="40" y2="220" />
                              </>
                            )}
                            {i === 1 && (
                              <>
                                <line x1="40" y1="80" x2="360" y2="80" />
                                <line x1="40" y1="180" x2="360" y2="180" />
                                <circle cx="120" cy="130" r="20" />
                                <circle cx="280" cy="130" r="20" />
                                <line x1="120" y1="130" x2="280" y2="130" />
                                <rect x="180" y="110" width="40" height="40" />
                              </>
                            )}
                            {i === 2 && (
                              <>
                                <rect x="60" y="60" width="120" height="60" />
                                <rect x="220" y="60" width="120" height="60" />
                                <rect x="60" y="160" width="280" height="40" />
                                <line x1="120" y1="120" x2="120" y2="160" />
                                <line x1="280" y1="120" x2="280" y2="160" />
                                <circle cx="80" cy="180" r="3" fill="currentColor" />
                                <circle cx="120" cy="180" r="3" fill="currentColor" />
                                <circle cx="160" cy="180" r="3" fill="currentColor" />
                                <circle cx="200" cy="180" r="3" fill="currentColor" />
                              </>
                            )}
                          </svg>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                      </div>

                      {/* Layer label */}
                      <div className="absolute -left-2 -top-2 flex items-center gap-2 rounded-sm bg-background hairline-bottom hairline-right px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                        <span>L{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-muted-foreground">{layer.label}</span>
                      </div>

                      {/* Callout when spread */}
                      {spread > 20 && (
                        <div
                          className="absolute -right-1 top-1/2 hidden h-px w-12 bg-electric/70 sm:block"
                          style={{ transform: `translateY(-50%)` }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider */}
            <div className="mt-6 rounded-sm border border-hairline bg-surface/40 p-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>Disassembly</span>
                <span className="text-electric">{Math.round(spread)} %</span>
              </div>
              <div className="mt-3">
                <Slider value={[spread]} onValueChange={(v) => setSpread(v[0] ?? 0)} min={0} max={100} step={1} />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Assembled</span>
                <span>Exploded</span>
              </div>
            </div>
          </div>

          {/* LAYER INDEX */}
          <aside className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· Layer index</div>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Four systems, one machine.
            </h2>
            <ul className="mt-6 space-y-px bg-hairline/40">
              {layers.map((l, i) => (
                <li key={l.id} className="bg-surface/60 p-4 transition-colors hover:bg-surface-elevated">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                      L{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">layer.{l.id}</span>
                  </div>
                  <div className="mt-1 font-display text-lg">{l.label}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
