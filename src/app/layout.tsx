import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethhdmetalwork.com"),
  title: "ETH HD METAL WORK — Engineering the African Century",
  description:
    "Industrial workshop founded by inventor Habtamu Demse. Custom machinery, metal fabrication and prototyping from Addis Ababa. Powered by Coding4Ethiopia.",
  authors: [{ name: "ETH HD Metal Work" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethhdmetalwork.com",
    siteName: "ETH HD METAL WORK",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "theme-color": "#0d1117",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
          This blueprint isn&apos;t in the foundry. Let&apos;s get you back on the line.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-sm border border-electric/40 bg-electric/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-electric transition-colors hover:bg-electric hover:text-primary-foreground"
          >
            ← Return to base
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <div className="min-h-screen">
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
