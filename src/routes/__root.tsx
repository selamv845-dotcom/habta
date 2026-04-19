import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div className="relative max-w-md text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
          Error · 404
        </div>
        <h1 className="mt-4 font-display text-7xl font-medium tracking-tight">
          Off <span className="text-electric">grid</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This blueprint isn't in the foundry. Let's get you back on the line.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm border border-electric/40 bg-electric/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-electric transition-colors hover:bg-electric hover:text-primary-foreground"
          >
            ← Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ETH HD METAL WORK — Engineering the African Century" },
      {
        name: "description",
        content:
          "Industrial workshop founded by inventor Habtamu Demse. Custom machinery, metal fabrication and prototyping from Addis Ababa. Powered by Coding4Ethiopia.",
      },
      { name: "author", content: "ETH HD Metal Work" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ETH HD METAL WORK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0d1117" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
