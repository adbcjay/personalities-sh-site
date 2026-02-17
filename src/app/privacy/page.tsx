export default function PrivacyPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-muted)] mb-10">
          Last updated: February 17, 2026
        </p>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              What we collect
            </h2>
            <p className="mb-3">
              Almost nothing. personalities.sh is a static catalog with no user
              accounts, no login, and no tracking cookies.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Submissions:</strong> When you submit a persona, you
                provide a GitHub repository URL through a GitHub issue. This is
                public on GitHub per their terms.
              </li>
              <li>
                <strong>Hosting analytics:</strong> Vercel (our hosting provider)
                collects anonymous, aggregated analytics including page views,
                country of origin, and browser type. We do not have access to
                individual visitor data. See{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  className="text-[var(--accent)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </li>
              <li>
                <strong>catalog.json:</strong> AI agents may fetch our public API
                endpoint. These requests are handled by Vercel&apos;s CDN and
                subject to standard HTTP logging. We do not track which agents
                fetch the catalog.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              What we don&apos;t collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>No email addresses</li>
              <li>No passwords or credentials</li>
              <li>No tracking cookies or fingerprinting</li>
              <li>No personal data beyond what GitHub makes publicly available</li>
              <li>No usage data about which personas you install or use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Persona packages
            </h2>
            <p>
              Persona packages are stored in Git repositories controlled by their
              authors. When you install a persona, you clone directly from the
              author&apos;s repository. We do not proxy, cache, or store persona
              files. The author&apos;s repository and hosting provider handle
              those requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Third parties
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Vercel:</strong> Hosts the catalog site. Processes HTTP
                requests.
              </li>
              <li>
                <strong>GitHub:</strong> Hosts persona repositories and receives
                submission issues.
              </li>
              <li>
                <strong>Google Fonts:</strong> Serves Inter and JetBrains Mono
                typefaces. Subject to{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-[var(--accent)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s privacy policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Changes
            </h2>
            <p>
              We may update this policy as the catalog evolves. Material changes
              will be noted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Contact
            </h2>
            <p>
              Privacy questions? Open an issue on{" "}
              <a
                href="https://github.com/adbcjay/personalities-sh-site/issues"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
