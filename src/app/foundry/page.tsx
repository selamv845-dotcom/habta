import type { Metadata } from "next";
import workshopImg from "@/assets/workshop-interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const metadata: Metadata = {
  title: "The Foundry — The Prodigy's Journey · ETH HD Metal Work",
  description:
    "From local science fairs to founding an industrial workshop — the journey of inventor Habtamu Demse and ETH HD Metal Work, plus a full machine inventory.",
  openGraph: {
    title: "The Foundry — The Prodigy's Journey",
    description:
      "The journey of inventor Habtamu Demse from prodigy to founder of an operational industrial workshop in Addis Ababa.",
    images: [{ url: workshopImg.src }],
  },
  twitter: {
    card: "summary_large_image",
    images: [workshopImg.src],
  },
};

const journey = [
  {
    year: "2012",
    title: "First Spark",
    body: "Wins regional science fair with a hand-built mechanical prototype, age 14.",
  },
  {
    year: "2015",
    title: "First Machine",
    body: "Designs and builds his first functional industrial machine from scrap steel.",
  },
  {
    year: "2018",
    title: "National Recognition",
    body: "Multiple national innovation awards. Featured in Ethiopian press as a young inventor of note.",
  },
  {
    year: "2020",
    title: "ETH HD Metal Work",
    body: "Founds the company. Establishes the first dedicated workshop in Addis Ababa.",
  },
  {
    year: "2023",
    title: "Industrial Floor",
    body: "Workshop expands to a full industrial floor — CNC, fabrication, electronics lab.",
  },
  {
    year: "2026",
    title: "Operational at Scale",
    body: "12 active machines. Open for commissions, prototyping and venture partnerships.",
  },
];

const inventory = [
  { name: "CNC Milling", spec: "3-axis · 800×500mm bed", status: "Operational" },
  { name: "Plasma Cutter", spec: "CNC controlled · 25mm steel", status: "Operational" },
  { name: "Hydraulic Press Brake", spec: "60-ton · 2.5m bed", status: "Operational" },
  { name: "MIG / TIG Welding", spec: "4 stations · automated jigs", status: "Operational" },
  { name: "FDM 3D Printer", spec: "Industrial · 400°C nozzle", status: "Operational" },
  { name: "Resin SLA Printer", spec: "Precision prototyping", status: "Operational" },
  { name: "Electronics Lab", spec: "PCB design · SMD soldering", status: "Operational" },
  { name: "Lathe", spec: "Precision metal turning", status: "Operational" },
  { name: "Powder Coating Bay", spec: "Industrial finish", status: "Operational" },
  { name: "Robotic Welding Arm", spec: "6-axis · in commissioning", status: "Commissioning" },
];

export default function FoundryPage() {
  return (
    <>
      <PageHero
        index="· 02"
        eyebrow="About / The Foundry"
        title={
          <>
            The Prodigy&apos;s <span className="text-electric">Journey.</span>
          </>
        }
        lede="A cinematic record of how a curious teenager became the founder of one of Ethiopia's most ambitious independent workshops — and what's already on the floor."
      />

      {/* JOURNEY */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
              · Timeline
            </div>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              From sketch <br /> to industrial floor.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Each milestone added a layer of capability — until the workshop could build the
              machines that build other machines.
            </p>
          </div>

          <ol className="md:col-span-8 relative">
            <span
              className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-hairline"
              aria-hidden
            />
            {journey.map((step, i) => (
              <li
                key={step.year}
                className="relative grid grid-cols-[2.5rem_1fr] gap-6 pb-12 last:pb-0"
              >
                <div className="relative">
                  <span className="block h-9 w-9 rounded-sm border border-electric/50 bg-background flex items-center justify-center font-mono text-[10px] text-electric">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="rise" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="font-mono text-xs text-electric tracking-[0.2em]">
                    {step.year}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORKSHOP IMAGE */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <figure className="relative overflow-hidden rounded-sm hairline-top hairline-bottom">
          <img
            src={workshopImg.src}
            alt="ETH HD Metal Work workshop interior, Addis Ababa"
            loading="lazy"
            width={1600}
            height={900}
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:p-8">
            <span className="text-electric">·</span> Workshop floor — Addis Ababa, 2026
          </figcaption>
        </figure>
      </section>

      {/* MACHINE INVENTORY */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 hairline-bottom pb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
              · 02 / 02
            </div>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Machine inventory.
            </h2>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:block">
            Asset register · live readout
          </div>
        </div>

        <div className="mt-2 hairline-bottom">
          <div className="grid grid-cols-[1.6fr_2fr_1fr] py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <div>Asset</div>
            <div className="hidden sm:block">Specification</div>
            <div className="sm:hidden">Spec</div>
            <div className="text-right">Status</div>
          </div>
        </div>
        <ul>
          {inventory.map((m) => (
            <li
              key={m.name}
              className="grid grid-cols-[1.6fr_2fr_1fr] items-center hairline-bottom py-4 transition-colors hover:bg-surface/40"
            >
              <div className="font-display text-base sm:text-lg">{m.name}</div>
              <div className="font-mono text-xs text-muted-foreground sm:text-sm">{m.spec}</div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center gap-2 rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                    m.status === "Operational"
                      ? "border-electric/40 text-electric"
                      : "border-molten/50 text-[oklch(0.78_0.16_55)]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${m.status === "Operational" ? "bg-electric pulse-dot" : "bg-[oklch(0.78_0.16_55)]"}`}
                  />
                  {m.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
