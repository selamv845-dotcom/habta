import type { Metadata } from "next";
import Link from "next/link";
import workshopImg from "@/assets/workshop-interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Stat } from "@/components/site/Stat";
import { CTA } from "@/components/site/CTA";

export const metadata: Metadata = {
  title: "Investor Command — ETH HD Metal Work",
  description:
    "Investor command center for ETH HD Metal Work — growth trajectory, capacity, and the African Industrial Revolution roadmap.",
  openGraph: {
    title: "Investor Command — ETH HD Metal Work",
    description:
      "Growth, capacity, and the African Industrial Revolution roadmap. Vision Support tiers from prototype sponsorship to full partnership.",
    images: [{ url: workshopImg.src }],
  },
  twitter: {
    card: "summary_large_image",
    images: [workshopImg.src],
  },
};

const growth = [
  { year: "2021", value: 18 },
  { year: "2022", value: 32 },
  { year: "2023", value: 51 },
  { year: "2024", value: 74 },
  { year: "2025", value: 92 },
  { year: "2026", value: 100 },
];

const roadmap = [
  {
    phase: "Phase 01",
    year: "2026",
    title: "Foundry at Capacity",
    body: "12 active machines, all service lines online, B2B commission flow.",
  },
  {
    phase: "Phase 02",
    year: "2027",
    title: "Series Production",
    body: "Spin out 2 flagship machines into repeatable industrial product lines.",
  },
  {
    phase: "Phase 03",
    year: "2028",
    title: "Regional Distribution",
    body: "Sales & service network into East Africa. Trained installer corps.",
  },
  {
    phase: "Phase 04",
    year: "2030",
    title: "Pan-African Industrial",
    body: "Co-manufacturing partnerships across the continent.",
  },
];

const tiers = [
  {
    name: "Sponsor a Prototype",
    commitment: "From $5K",
    desc: "Underwrite a single experimental machine from sketch to working unit.",
    intent: "sponsor",
  },
  {
    name: "Fund a Machine",
    commitment: "From $50K",
    desc: "Bring a flagship machine to market — name, recognition and production rights.",
    intent: "sponsor",
  },
  {
    name: "Strategic Partner",
    commitment: "Bespoke",
    desc: "Equity, board seat and a co-authored continental roadmap.",
    intent: "invest",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        index="· 06"
        eyebrow="Investor Command Center"
        title={
          <>
            The African industrial <span className="text-electric">revolution</span> starts here.
          </>
        }
        lede="A presentation-only briefing for venture and impact partners. Real numbers from the floor. A real roadmap to scale."
      />

      {/* TELEMETRY */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 hairline-top hairline-bottom py-10 lg:grid-cols-4">
          <Stat label="Active Machines" value={12} />
          <Stat label="National Awards" value={7} />
          <Stat label="Foundry Hours" value={18420} />
          <Stat label="Capacity Utilized" value={92} suffix="%" />
        </div>
      </section>

      {/* GROWTH CHART */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
              · 06 / 01
            </div>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Capacity trajectory.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Indexed workshop output, 2021 → 2026. Each bar represents a year of compounding
              capability: more machines, more skilled hands, shorter cycle times.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[16/9] rounded-sm border border-hairline bg-surface/40 p-6 blueprint-grid-fine">
              <div className="absolute inset-x-6 top-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Output index</span>
                <span className="text-electric">100 = 2026</span>
              </div>
              <div className="absolute inset-x-6 bottom-6 top-12 flex items-end justify-between gap-3">
                {growth.map((g) => (
                  <div key={g.year} className="flex flex-1 flex-col items-center gap-2">
                    <div className="relative w-full">
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[10px] tabular-nums text-electric">
                        {g.value}
                      </div>
                      <div
                        className="w-full bg-gradient-to-t from-electric/80 to-electric rise"
                        style={{
                          height: `${g.value * 1.5}px`,
                          animationDelay: `${growth.indexOf(g) * 80}ms`,
                        }}
                      />
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                      {g.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="hairline-top pt-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
            · 06 / 02
          </div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            African Industrial Revolution · roadmap.
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <ol className="relative flex min-w-[720px] gap-px">
            <span className="absolute inset-x-0 top-10 h-px bg-hairline" aria-hidden />
            <span className="absolute left-0 top-10 h-px w-1/3 bg-electric" aria-hidden />
            {roadmap.map((r, i) => (
              <li key={r.phase} className="flex-1 bg-surface/60 p-6">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
                    {r.phase}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">{r.year}</div>
                </div>
                <div className="relative mt-4 mb-4 flex items-center">
                  <span
                    className={`block h-3 w-3 rounded-full ${i === 0 ? "bg-electric pulse-dot" : "border border-electric/60 bg-background"}`}
                  />
                </div>
                <div className="font-display text-lg font-medium tracking-tight">{r.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VISION SUPPORT */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="hairline-top pt-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
            · 06 / 03
          </div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Vision Support gateway.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Interest capture only — no payment is taken on this site. Pick a tier; we&apos;ll reach
            out within 48 hours with a tailored brief.
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-hairline/40 md:grid-cols-3">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              className={`relative bg-surface/60 p-8 ${i === 1 ? "md:scale-[1.02]" : ""}`}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-sm bg-electric px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                  Recommended
                </div>
              )}
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
                · Tier 0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">{t.name}</h3>
              <div className="mt-2 font-mono text-sm text-muted-foreground">{t.commitment}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <Link
                href={`/contact?intent=${t.intent}&tier=${encodeURIComponent(t.name)}`}
                className="mt-6 inline-flex items-center gap-2 rounded-sm border border-electric/40 bg-electric/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric transition-colors hover:bg-electric hover:text-primary-foreground"
              >
                Express interest →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
