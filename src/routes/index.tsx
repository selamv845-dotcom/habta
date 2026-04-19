import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-architect.jpg";
import workshopImg from "@/assets/workshop-interior.jpg";
import cncImg from "@/assets/machine-cnc.jpg";
import pressImg from "@/assets/machine-press.jpg";
import welderImg from "@/assets/machine-welder.jpg";
import { InnovationPulse } from "@/components/site/InnovationPulse";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETH HD METAL WORK — Engineering the African Century" },
      {
        name: "description",
        content:
          "Cinematic industrial portfolio of inventor Habtamu Demse and ETH HD Metal Work — custom machinery, metal fabrication and prototyping from Addis Ababa.",
      },
      { property: "og:title", content: "ETH HD METAL WORK — Engineering the African Century" },
      {
        property: "og:description",
        content:
          "Industrial workshop founded by inventor Habtamu Demse. Building the machinery that builds Ethiopia.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const teasers = [
  { to: "/inventions" as const, num: "02", label: "Museum of Triumphs", desc: "Award-winning machines, exploded into their making.", img: cncImg },
  { to: "/blueprint"  as const, num: "03", label: "Virtual Blueprint",  desc: "Disassemble a machine layer by layer.", img: pressImg },
  { to: "/services"   as const, num: "04", label: "B2B Foundry",        desc: "Custom design · fabrication · prototyping.", img: welderImg },
  { to: "/investors"  as const, num: "05", label: "Investor Command",   desc: "Roadmap for the African industrial revolution.", img: workshopImg },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
        <img
          src={heroImg}
          alt="Habtamu Demse, technological architect, in his foundry"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" aria-hidden />
        <div className="absolute inset-0 scanlines opacity-50" aria-hidden />

        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl rise">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
              <span>Habtamu Demse · Founder & Inventor</span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
              ETH HD <br />
              <span className="text-electric text-glow">METAL WORK</span>
              <span className="block mt-2 text-2xl font-normal text-muted-foreground sm:text-3xl md:text-4xl">
                Engineering the African Century.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              An Addis Ababa foundry where a multi-award-winning inventor's
              vision becomes industrial-scale machinery — the bridge between raw
              mechanical innovation and the manufacturing of a continent.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-sm bg-electric px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform ease-mech hover:-translate-y-0.5"
              >
                Bring your vision to steel
                <span className="transition-transform ease-mech group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/blueprint"
                className="inline-flex items-center gap-3 rounded-sm border border-hairline bg-background/60 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-electric/60 hover:text-electric"
              >
                Disassemble a machine
              </Link>
            </div>
          </div>
        </div>

        {/* Side rail */}
        <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground rotate-90 origin-center whitespace-nowrap mb-12">
            scroll · 01 / 07
          </span>
          <span className="block h-16 w-px bg-electric/60" />
        </div>
      </section>

      <InnovationPulse />

      {/* INTRO */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              index="· 01"
              eyebrow="The Mandate"
              title={<>From science fairs to <span className="text-electric">industrial scale.</span></>}
            />
          </div>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Habtamu Demse is a multi-award-winning Ethiopian inventor who turned
              a prodigy's notebook into an operational foundry. ETH HD Metal Work
              designs and fabricates the machines that other industries
              <span className="text-foreground"> need to exist</span> — agricultural
              processors, fabrication tools, custom machinery for clients who
              would otherwise import.
            </p>
            <p>
              Engineered by <span className="text-electric">Coding4Ethiopia</span>,
              this site is the high-tech bridge between raw mechanical innovation
              and industrial-scale manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* TEASERS */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-px bg-hairline/40 md:grid-cols-2">
          {teasers.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group relative block overflow-hidden bg-surface/60 p-8 transition-colors ease-mech hover:bg-surface-elevated sm:p-10"
            >
              <div className="absolute inset-0 opacity-30 transition-opacity ease-mech group-hover:opacity-50">
                <img src={t.img} alt="" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
              </div>
              <div className="relative flex min-h-[260px] flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-electric">· {t.num}</span>
                  <span className="text-muted-foreground transition-transform ease-mech group-hover:translate-x-1">→</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {t.label}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-electric transition-transform ease-mech duration-700 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
