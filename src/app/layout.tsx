import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "personas.sh - npm for AI identities",
  description:
    "Browse, install, and share portable AI persona configurations. Not tools. Not skills. Operating identities with project blueprints.",
  metadataBase: new URL("https://personas.sh"),
  openGraph: {
    title: "personas.sh",
    description:
      "Portable AI persona configurations you install in one sentence. Complete with project blueprints your AI can build for you.",
    siteName: "personas.sh",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "personas.sh - npm for AI identities" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "personas.sh - npm for AI identities",
    description:
      "Portable AI persona configurations you install in one sentence. Complete with project blueprints your AI can build for you.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <nav className="border-b border-[var(--border)] px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[var(--text-primary)]">
                personas<span className="text-[var(--accent)]">.sh</span>
              </span>
            </a>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/browse"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Browse
              </a>
              <a
                href="/docs"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Docs
              </a>
              <a
                href="/submit"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Submit
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-[var(--border)] px-6 py-8 mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-6">
                <a
                  href="/"
                  className="font-semibold text-[var(--text-secondary)]"
                >
                  personas<span className="text-[var(--accent)]">.sh</span>
                </a>
                <a
                  href="/browse"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                >
                  Browse
                </a>
                <a
                  href="/docs"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                >
                  Docs
                </a>
                <a
                  href="/submit"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                >
                  Submit
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="/terms"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                >
                  Terms
                </a>
                <a
                  href="/privacy"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="https://github.com/persona-sh/spec"
                  className="hover:text-[var(--text-secondary)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
