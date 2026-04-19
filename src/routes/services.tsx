import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import cncImg from "@/assets/machine-cnc.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — B2B Foundry · ETH HD Metal Work" },
      {
        name: "description",
        content:
          "Custom machinery design, metal fabrication, and industrial prototyping from ETH HD Metal Work in Addis Ababa.",
      },
      { property: "og:title", content: "Services — B2B Foundry" },
      {
        property: "og:description",
        content:
          "Three pillars: custom machinery design, metal fabrication, industrial prototyping. Commission a build.",
      },
      { property: "og:image", content: cncImg },
      { name: "twitter:image", content: cncImg },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    num: "01",
    title: "Custom Machinery Design",
    blurb: "From requirement brief to operational machine — engineered, fabricated and commissioned in-house.",
    capabilities: ["CAD design & simulation", "Mechanical engineering", "Electronics & control systems", "On-site commissioning"],
    intent: "commission",
  },
  {
    num: "02",
    title: "Metal Fabrication",
    blurb: "Production-grade metalwork: cutting, bending, welding, finishing — runs from a single unit to a full batch.",
    capabilities: ["CNC plasma cutting", "Press-brake bending", "MIG / TIG welding", "Powder coating & finish"],
    intent: "commission",
  },
  {
    num: "03",
    title: "Industrial Prototyping",
    blurb: "Rapid prototyping for hardware founders and R&D teams — from concept sketch to functional pre-production unit.",
    capabilities: ["3D printing (FDM & SLA)", "Functional prototypes", "Iteration cycles", "Pilot batch production"],
    intent: "commission",
  },
];

const process = [
  { step: "01", name: "Brief", body: "We meet, scope the build, and translate intent into a constrained problem statement." },
  { step: "02", name: "Design", body: "CAD, simulation, and a costed bill of materials. Approved before a single cut." },
  { step: "03", name: "Build",  body: "Fabrication on the workshop floor. Daily progress on the Innovation Pulse." },
  { step: "04", name: "Commission", body: "On-site install, calibration and operator handover." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        index="· 05"
        eyebrow="B2B Service Portal"
        title={<>The foundry, <span className="text-electric">on call.</span></>}
        lede="Three high-conversion service lines designed for industrial clients — from one-off custom machines to repeated fabrication runs."
      />

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
        <div className="grid gap-px bg-hairline/40 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.num} className="group relative bg-surface/60 p-8 transition-colors ease-mech hover:bg-surface-elevated sm:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· {p.num}</div>
              <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-6 space-y-2">
                {p.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span className="h-px w-4 bg-electric/60" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ intent: p.intent, service: p.title }}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric transition-transform ease-mech group-hover:translate-x-1"
              >
                Commission this →
              </Link>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-electric transition-transform ease-mech duration-700 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="hairline-top pt-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· 05 / Process</div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            From brief to commissioning.
          </h2>
        </div>

        <ol className="mt-10 grid gap-px bg-hairline/40 md:grid-cols-4">
          {process.map((s) => (
            <li key={s.step} className="bg-surface/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">{s.step}</div>
              <div className="mt-2 font-display text-xl font-medium tracking-tight">{s.name}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTA />
    </>
  );
}
