export default function SubmitPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Submit a Persona</h1>
        <p className="text-[var(--text-secondary)] mb-10">
          Share your AI configuration with the community.
        </p>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--accent)] font-mono text-lg font-bold">01</span>
              <h2 className="text-lg font-semibold">Package your persona</h2>
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-4 ml-9">
              Open your AI coding agent and paste the packaging guide below.
              Your AI will read your existing config and generate a structured
              persona package.
            </p>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-5 py-4 ml-9 font-mono text-sm">
              <div className="text-[var(--text-muted)] mb-2"># In your AI coding agent:</div>
              <div>
                <span className="text-[var(--text-primary)]">
                  &ldquo;Read the personalities.sh packaging guide and package my
                  current setup as a persona.&rdquo;
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--accent)] font-mono text-lg font-bold">02</span>
              <h2 className="text-lg font-semibold">Review and clean</h2>
            </div>
            <div className="text-[var(--text-secondary)] text-sm ml-9 space-y-2">
              <p>Check the generated files:</p>
              <ul className="space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">~</span>
                  No real names, emails, or company info (should be {"{{VARIABLES}}"})
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">~</span>
                  No API keys, tokens, or credentials anywhere
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">~</span>
                  No absolute file paths (should be relative)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">~</span>
                  Examples are realistic and show the persona&apos;s actual behavior
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--accent)] font-mono text-lg font-bold">03</span>
              <h2 className="text-lg font-semibold">Push to GitHub</h2>
            </div>
            <div className="text-[var(--text-secondary)] text-sm ml-9">
              <p className="mb-3">
                Create a public GitHub repo with your persona package at the root.
              </p>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-5 py-4 font-mono text-sm space-y-1">
                <div>
                  <span className="text-[var(--text-muted)]">$</span>{" "}
                  <span className="text-[var(--text-primary)]">
                    cd my-persona
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">$</span>{" "}
                  <span className="text-[var(--text-primary)]">
                    git init && git add . && git commit -m &ldquo;Initial persona package&rdquo;
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">$</span>{" "}
                  <span className="text-[var(--text-primary)]">
                    gh repo create my-persona --public --push --source .
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--accent)] font-mono text-lg font-bold">04</span>
              <h2 className="text-lg font-semibold">Submit to the catalog</h2>
            </div>
            <p className="text-[var(--text-secondary)] text-sm ml-9 mb-4">
              Open an issue on the site repo with your persona&apos;s GitHub URL.
              We&apos;ll review it and add it to the catalog.
            </p>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-5 py-4 ml-9 font-mono text-sm">
              <div>
                <span className="text-[var(--text-muted)]">$</span>{" "}
                <span className="text-[var(--text-primary)]">
                  gh issue create -R adbcjay/personalities-sh-site --title &ldquo;New persona: my-persona&rdquo; --body &ldquo;Repo: https://github.com/you/my-persona&rdquo;
                </span>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] text-xs ml-9 mt-2">
              Or open an issue directly at{" "}
              <a
                href="https://github.com/adbcjay/personalities-sh-site/issues/new"
                className="text-[var(--accent)] hover:underline"
              >
                github.com/adbcjay/personalities-sh-site/issues
              </a>
            </p>
          </div>
        </div>

        {/* Packaging guide */}
        <section className="border-t border-[var(--border)] pt-10">
          <h2 className="text-xl font-semibold mb-4">Packaging guide</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6">
            Copy this entire guide and paste it into your AI coding agent.
            It contains step-by-step instructions that your AI will follow to
            generate a persona package from your existing setup.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6 text-sm text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p className="text-[var(--text-primary)] font-semibold">
              Packaging Guide: Turn Your AI Setup Into a Persona
            </p>
            <p>
              Feed this document to your AI coding agent. It will read your
              existing configuration and generate a publishable persona package.
            </p>
            <p className="text-[var(--text-muted)]">
              The full packaging guide is available in the{" "}
              <a
                href="https://github.com/adbcjay/personalities-sh-spec/blob/main/PACKAGING_GUIDE.md"
                className="text-[var(--accent)] hover:underline"
              >
                spec repository
              </a>
              . It covers:
            </p>
            <ul className="space-y-1.5 text-[var(--text-muted)]">
              <li>~ Step 1: Discover your current config files</li>
              <li>~ Step 2: Analyze identity, rules, and integrations</li>
              <li>~ Step 3: Replace personal data with variables</li>
              <li>~ Step 4: Generate all package files</li>
              <li>~ Step 5: Security self-check</li>
              <li>~ Step 6: Validate against the spec</li>
              <li>~ Step 7: Present for review</li>
            </ul>
          </div>
        </section>

        {/* Validation checklist */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Validation checklist</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-4">
            Before submitting, verify your package passes these checks:
          </p>
          <div className="space-y-2 text-sm">
            {[
              "persona.yaml exists with all required fields",
              "PERSONA.md has ## Identity, ## Communication Style, ## Behavioral Rules",
              "SETUP.md exists with install commands for required MCP servers",
              "README.md exists with description and Quick Start",
              "name is lowercase, hyphens only, 3-40 characters",
              "version follows semver (X.Y.Z)",
              "Every {{VARIABLE}} is declared in persona.yaml variables",
              "No hardcoded credentials in any file",
              "No absolute file paths",
              "Package is under 5 MB",
            ].map((check, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[var(--text-secondary)]"
              >
                <span className="w-4 h-4 mt-0.5 rounded border border-[var(--border)] shrink-0"></span>
                <span>{check}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
