export default function DocsPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-[var(--text-secondary)] mb-10">
          Everything you need to understand, create, and publish personas.
        </p>

        {/* What is a persona */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What is a persona?</h2>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
            A persona is a portable AI behavioral configuration that defines who
            an AI agent IS, not just what it can do. It includes identity,
            communication style, behavioral rules, commands, memory templates,
            and integration routing.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-5 text-sm space-y-3">
            <div>
              <span className="text-[var(--text-muted)]">Tool:</span>{" "}
              <span className="text-[var(--text-secondary)]">
                &ldquo;Search the web for X&rdquo; &mdash; single capability, stateless
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)]">Skill:</span>{" "}
              <span className="text-[var(--text-secondary)]">
                &ldquo;When asked about spreadsheets, follow these rules&rdquo; &mdash; domain
                knowledge, conditional
              </span>
            </div>
            <div>
              <span className="text-[var(--accent)]">Persona:</span>{" "}
              <span className="text-[var(--text-primary)]">
                &ldquo;You are a strategic operator who pushes back on bad ideas and
                acts instead of reporting&rdquo; &mdash; full identity, always-on, stateful
              </span>
            </div>
          </div>
        </section>

        {/* File structure */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Persona package structure</h2>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-5 font-mono text-sm">
            <div className="space-y-1">
              <div>
                <span className="text-[var(--text-primary)]">my-persona/</span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--accent)]">persona.yaml</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- machine-readable metadata (required)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--accent)]">PERSONA.md</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- identity, behavior, communication style (required)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--accent)]">SETUP.md</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- dependencies and installation steps (required)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--accent)]">README.md</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- catalog listing for humans (required)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--text-secondary)]">commands/</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- slash command definitions (optional)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--text-secondary)]">memory/</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- persistent state templates (optional)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--text-secondary)]">skills/</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- domain knowledge files (optional)
                </span>
              </div>
              <div className="ml-4">
                <span className="text-[var(--text-secondary)]">examples/</span>
                <span className="text-[var(--text-muted)]">
                  {" "}--- sample interactions (optional, recommended)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONA.md */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">PERSONA.md sections</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            The identity document. Three sections are required. The rest are optional
            but improve quality.
          </p>
          <div className="space-y-3">
            <div className="border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-sm">## Identity</h3>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)]">
                  required
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Who this persona IS. Role, primary directive, relationship to the user.
                3-10 sentences in second person (&ldquo;You are...&rdquo;).
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-sm">## Communication Style</h3>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)]">
                  required
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                How the persona talks. Tone, formatting, vocabulary, specific DO
                and DON&apos;T rules. Minimum 3 concrete instructions.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-sm">## Behavioral Rules</h3>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)]">
                  required
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Hard constraints and NEVER/ALWAYS rules. Confidentiality, authorization
                boundaries, uncertainty handling. Minimum 2 rules.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">## Context</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Company details, team structure, industry, key systems.
                Use {"{{VARIABLES}}"} for personal data.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">## Operating Modes</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Named behavioral modes (triage, drafting, research). Each mode
                has an activation trigger and specific rules.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">## Integrations</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                MCP server routing, tool preferences, and fallback behavior when
                integrations are disconnected.
              </p>
            </div>
          </div>
        </section>

        {/* persona.yaml */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">persona.yaml</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Machine-readable metadata. This is what the catalog indexes and the
            installer reads.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-5 font-mono text-sm leading-relaxed">
            <pre className="text-[var(--text-secondary)] whitespace-pre-wrap">{`name: my-persona          # lowercase, hyphens, 3-40 chars
display_name: My Persona   # human-readable
version: 1.0.0             # semver
description: >
  What it does, who it's for. 1-3 sentences.

author:
  name: Your Name
  github: your-username

category: executive         # see allowed categories
tags: [tag1, tag2, tag3]    # 2-8 tags

requires_mcp:               # optional
  - name: gmail
    required: true
    purpose: "Email triage"

variables:                  # optional
  - key: YOUR_NAME
    prompt: "What's your name?"
    required: true`}</pre>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["executive", "C-suite support, leadership, strategy"],
              ["professional-services", "Legal, finance, compliance, HR"],
              ["developer", "Code review, DevOps, architecture"],
              ["creative", "Writing, content, design, brand"],
              ["research", "Academic, market research, analysis"],
              ["domain-specialist", "Industry-specific expertise"],
              ["personal", "Fitness, finance, learning, life admin"],
              ["operations", "Project management, workflows"],
              ["sales", "CRM, pipeline, outreach, proposals"],
              ["support", "Customer service, documentation"],
            ].map(([slug, desc]) => (
              <div
                key={slug}
                className="border border-[var(--border)] rounded-lg p-3"
              >
                <span className="font-mono text-[var(--accent)]">{slug}</span>
                <p className="text-[var(--text-muted)] text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Variables */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Reserved variables</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Use {"{{VARIABLE}}"} placeholders for personal data. These names have
            standard meanings across all personas.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left p-3 text-[var(--text-muted)] font-medium">
                    Variable
                  </th>
                  <th className="text-left p-3 text-[var(--text-muted)] font-medium">
                    Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {[
                  ["YOUR_NAME", "Full name"],
                  ["YOUR_FIRST_NAME", "First name"],
                  ["YOUR_ROLE", "Job title"],
                  ["YOUR_COMPANY", "Company name"],
                  ["YOUR_EMAIL", "Primary email"],
                  ["YOUR_TIMEZONE", "IANA timezone"],
                  ["YOUR_CURRENCY", "ISO currency code"],
                  ["YOUR_LANGUAGE", "Primary language"],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-[var(--border)] last:border-0">
                    <td className="p-3 font-mono text-[var(--accent)] text-xs">
                      {`{{${key}}}`}
                    </td>
                    <td className="p-3">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Security evaluation</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Every submission is scanned before listing.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0">01</span>
              <span className="text-[var(--text-secondary)]">
                Credential leak detection (API keys, tokens, passwords, connection strings)
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0">02</span>
              <span className="text-[var(--text-secondary)]">
                Prompt injection scanning (override attempts, data exfiltration, hidden instructions)
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0">03</span>
              <span className="text-[var(--text-secondary)]">
                Dangerous operation detection (file deletion, unsolicited network requests, credential access)
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0">04</span>
              <span className="text-[var(--text-secondary)]">
                MCP server validation against known-good registry
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Verified</strong> &mdash; all checks passed, manual review completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Community</strong> &mdash; automated checks passed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Unreviewed</strong> &mdash; pending evaluation
              </span>
            </div>
          </div>
        </section>

        {/* Create your own */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Create a persona</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            If you&apos;ve customized your AI&apos;s behavior, you already have a persona.
            Package it:
          </p>
          <div className="space-y-4 text-sm text-[var(--text-secondary)]">
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0 font-mono">1.</span>
              <span>
                Open your AI coding agent and paste the{" "}
                <a href="/submit" className="text-[var(--accent)] hover:underline">
                  packaging guide
                </a>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0 font-mono">2.</span>
              <span>
                Say: &ldquo;Package my current setup as a persona. Follow these instructions.&rdquo;
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0 font-mono">3.</span>
              <span>Review the generated files. Strip anything private.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--accent)] shrink-0 font-mono">4.</span>
              <span>Push to GitHub and submit to the catalog.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
