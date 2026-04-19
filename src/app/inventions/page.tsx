import type { Metadata } from "next";
import cncImg from "@/assets/machine-cnc.jpg";
import pressImg from "@/assets/machine-press.jpg";
import welderImg from "@/assets/machine-welder.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";

export const metadata: Metadata = {
  title: "Museum of Triumphs — Inventions · ETH HD Metal Work",
  description:
    "A scroll-triggered gallery of Habtamu Demse's award-winning industrial inventions, from sketch to fabricated machine.",
  openGraph: {
    title: "Museum of Triumphs — Inventions",
    description:
      "Award-winning machines from ETH HD Metal Work, exploded from sketch to finished industrial unit.",
    images: [{ url: cncImg.src }],
  },
  twitter: {
    card: "summary_large_image",
    images: [cncImg.src],
  },
};

const inventions = [
  {
    name: "Project Anvil — CNC Foundry Mill",
    year: "2024",
    award: "National Innovation Prize",
    function: "3-axis CNC milling for steel & aluminum stock.",
    materials: "Cast steel frame · stepper drives · custom controller.",
    img: cncImg,
  },
  {
    name: "Project Forge — Hydraulic Press Brake",
    year: "2023",
    award: "Industrial Excellence Award",
    function: "60-ton sheet bending for fabrication runs.",
    materials: "Welded steel chassis · hydraulics · servo back-gauge.",
    img: pressImg,
  },
  {
    name: "Project Halo — Robotic Welding Arm",
    year: "2025",
    award: "Young Engineer of the Year",
    function: "6-axis automated MIG welding station.",
    materials: "Aluminum joints · brushless servos · custom inverse kinematics.",
    img: welderImg,
  },
];

export default function InventionsPage() {
  return (
    <>
      <PageHero
        index="· 03"
        eyebrow="Museum of Triumphs"
        title={
          <>
            Award-winning <span className="text-electric">machines.</span>
          </>
        }
        lede="Each invention shown here moved from a workshop sketch to a fabricated frame to a functional industrial unit. Exploded layers reveal the journey."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
        <ul className="space-y-32">
          {inventions.map((inv, i) => (
            <li
              key={inv.name}
              className="group relative grid gap-10 md:grid-cols-12 md:items-center"
            >
              {/* Exploded layered visual */}
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm hairline-top hairline-bottom blueprint-grid-fine">
                  {/* Layer 1: blueprint sketch */}
                  <div className="absolute inset-0 translate-x-[-6%] translate-y-[-6%] rotate-[-1.5deg] opacity-60 transition-all ease-mech duration-700 group-hover:translate-x-[-9%] group-hover:translate-y-[-9%]">
                    <div className="h-full w-full bg-electric/10 mix-blend-screen" />
                    <svg
                      viewBox="0 0 400 300"
                      className="absolute inset-0 h-full w-full text-electric/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.6"
                    >
                      <rect x="40" y="60" width="320" height="180" />
                      <rect x="80" y="100" width="240" height="100" />
                      <line x1="40" y1="60" x2="80" y2="100" />
                      <line x1="360" y1="60" x2="320" y2="100" />
                      <line x1="40" y1="240" x2="80" y2="200" />
                      <line x1="360" y1="240" x2="320" y2="200" />
                      <circle cx="200" cy="150" r="16" />
                      <circle cx="120" cy="150" r="6" />
                      <circle cx="280" cy="150" r="6" />
                    </svg>
                  </div>
                  {/* Layer 2: fabricated frame silhouette */}
                  <div className="absolute inset-0 translate-x-[-3%] translate-y-[-3%] opacity-80 transition-all ease-mech duration-700 group-hover:translate-x-[-5%] group-hover:translate-y-[-5%]">
                    <img
                      src={inv.img.src}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover grayscale brightness-50 contrast-125"
                    />
                  </div>
                  {/* Layer 3: finished machine */}
                  <div className="absolute inset-0 transition-transform ease-mech duration-700 group-hover:scale-[1.02]">
                    <img
                      src={inv.img.src}
                      alt={inv.name}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                  </div>
                  {/* Hairline overlay & ticker */}
                  <div
                    className="absolute inset-x-0 top-0 h-px scan-x bg-gradient-to-r from-transparent via-electric to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" /> sketch ·
                    frame · machine
                  </div>
                </div>
              </div>

              {/* Spec sheet */}
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
                  · 0{i + 1} / {String(inventions.length).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  {inv.name}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 rounded-sm border border-electric/40 bg-electric/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  ★ {inv.award} · {inv.year}
                </div>

                <dl className="mt-8 grid grid-cols-1 gap-px bg-hairline/40">
                  <div className="grid grid-cols-[8rem_1fr] bg-surface/60 px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Function
                    </dt>
                    <dd className="text-sm">{inv.function}</dd>
                  </div>
                  <div className="grid grid-cols-[8rem_1fr] bg-surface/60 px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Materials
                    </dt>
                    <dd className="text-sm text-muted-foreground">{inv.materials}</dd>
                  </div>
                  <div className="grid grid-cols-[8rem_1fr] bg-surface/60 px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Status
                    </dt>
                    <dd className="inline-flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" />
                      Deployed
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
