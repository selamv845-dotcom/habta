import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";

type SearchParams = {
  intent?: "commission" | "invest" | "sponsor" | "press";
  service?: string;
  tier?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    const intent = typeof search.intent === "string" ? search.intent : undefined;
    return {
      intent: ["commission", "invest", "sponsor", "press"].includes(intent ?? "")
        ? (intent as SearchParams["intent"])
        : undefined,
      service: typeof search.service === "string" ? search.service : undefined,
      tier: typeof search.tier === "string" ? search.tier : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Contact — Bring Your Vision to Steel · ETH HD Metal Work" },
      {
        name: "description",
        content:
          "Commission a custom machine, partner as an investor, or sponsor a prototype. Reach the ETH HD Metal Work foundry in Addis Ababa.",
      },
      { property: "og:title", content: "Contact — Bring Your Vision to Steel" },
      {
        property: "og:description",
        content:
          "Open the line to ETH HD Metal Work. Response within 48 hours. Workshop located in Addis Ababa, Ethiopia.",
      },
    ],
  }),
  component: ContactPage,
});

const intents = [
  { id: "commission", label: "Commission a build" },
  { id: "invest",     label: "Investment / Partnership" },
  { id: "sponsor",    label: "Sponsor a prototype" },
  { id: "press",      label: "Press & media" },
] as const;

function ContactPage() {
  const search = Route.useSearch();
  const [intent, setIntent] = useState<string>(search.intent ?? "commission");
  const [submitted, setSubmitted] = useState(false);

  const prefilledMessage = search.service
    ? `I'd like to commission: ${search.service}.\n\n`
    : search.tier
    ? `I'm interested in the "${search.tier}" tier.\n\n`
    : "";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        index="· 07"
        eyebrow="Open the line"
        title={<>Bring your vision <span className="text-electric">to steel.</span></>}
        lede="One form. One foundry. We respond within 48 hours with a tailored brief — whether you want a custom machine, an investor pack, or a press kit."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* FORM */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="relative overflow-hidden rounded-sm border border-electric/40 bg-electric/5 p-10">
                <div className="absolute inset-x-0 top-0 h-px scan-x bg-gradient-to-r from-transparent via-electric to-transparent" aria-hidden />
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
                  · Transmission received
                </div>
                <h2 className="mt-4 font-display text-3xl font-medium tracking-tight">
                  We have your signal.
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  The foundry will reply from Addis Ababa within 48 hours. Keep
                  an eye on your inbox — including the spam folder.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric"
                >
                  ← Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8 rounded-sm border border-hairline bg-surface/40 p-6 sm:p-8">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Intent
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {intents.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        onClick={() => setIntent(i.id)}
                        className={`rounded-sm border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ease-mech ${
                          intent === i.id
                            ? "border-electric bg-electric/10 text-electric"
                            : "border-hairline text-muted-foreground hover:border-electric/40 hover:text-foreground"
                        }`}
                      >
                        {i.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field name="name"  label="Name"           required />
                  <Field name="email" label="Email"   type="email" required />
                  <Field name="org"   label="Organization" />
                  <Field name="role"  label="Role" />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    defaultValue={prefilledMessage}
                    placeholder="Tell us what you want built, funded or featured."
                    className="mt-2 block w-full rounded-sm border border-hairline bg-background/60 px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                  />
                </div>

                <div className="flex flex-col items-start gap-3 hairline-top pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Response · &lt; 48h
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-sm bg-electric px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform ease-mech hover:-translate-y-0.5"
                  >
                    Transmit
                    <span className="transition-transform ease-mech group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* SIDE */}
          <aside className="md:col-span-5 space-y-6">
            <div className="rounded-sm border border-hairline bg-surface/40 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· Workshop</div>
              <div className="mt-3 font-display text-xl">ETH HD Metal Work · Addis Ababa</div>
              <dl className="mt-5 space-y-3 font-mono text-xs">
                <Row k="Lat / Lon" v="9.0320° N · 38.7469° E" accent />
                <Row k="Hours" v="Mon–Sat · 08:00–18:00 EAT" />
                <Row k="Email" v="hello@ethhdmetalwork.com" />
                <Row k="Direct" v="+251 · ___ ___ ___" />
              </dl>
            </div>

            <div className="rounded-sm border border-hairline bg-surface/40 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· Promise</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-2 h-px w-4 bg-electric/60 shrink-0" /> Reply from a real engineer, not a bot.</li>
                <li className="flex gap-3"><span className="mt-2 h-px w-4 bg-electric/60 shrink-0" /> A first technical opinion within 48 hours.</li>
                <li className="flex gap-3"><span className="mt-2 h-px w-4 bg-electric/60 shrink-0" /> Confidentiality on every brief, by default.</li>
              </ul>
            </div>

            <div className="rounded-sm border border-electric/30 bg-electric/5 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">· Powered by</div>
              <div className="mt-3 font-display text-lg">Coding4Ethiopia</div>
              <p className="mt-2 text-sm text-muted-foreground">
                The software engineering studio behind this portfolio — building
                the digital layer of African industry.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}{required && <span className="ml-1 text-electric">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-sm border border-hairline bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
      />
    </div>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-6">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className={accent ? "text-electric" : ""}>{v}</dd>
    </div>
  );
}
