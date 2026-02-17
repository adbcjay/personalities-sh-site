import PersonaCard from "@/components/PersonaCard";
import { personas } from "@/data/registry";

export default function Home() {
  const featured = personas.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            npm for AI{" "}
            <span className="text-[var(--accent)]">identities</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            Portable AI persona configurations you install in one command.
            Not tools. Not skills. Operating identities that shape how your
            AI thinks, communicates, and works.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-6 py-4 inline-block font-mono text-sm">
            <span className="text-[var(--text-muted)]">$</span>{" "}
            <span className="text-[var(--text-primary)]">git clone</span>{" "}
            <span className="text-[var(--accent)]">github.com/adbcjay/operator-copilot</span>
          </div>
        </div>
      </section>

      {/* What is a persona */}
      <section className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            A skill tells AI what to do. A persona tells AI who to{" "}
            <span className="text-[var(--accent)]">be</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[var(--border)] rounded-lg p-5">
              <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">
                Tool
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                &ldquo;Search the web for X&rdquo;
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Single capability. Stateless. One action.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">
                Skill
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                &ldquo;When asked about spreadsheets, follow these rules&rdquo;
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Domain knowledge. Conditional. Task-scoped.
              </p>
            </div>
            <div className="border border-[var(--accent)] border-opacity-40 rounded-lg p-5 bg-[var(--accent-dim)]">
              <div className="text-[var(--accent)] text-xs uppercase tracking-wider mb-2">
                Persona
              </div>
              <p className="text-sm text-[var(--text-primary)]">
                &ldquo;You are a strategic operating partner who thinks in systems,
                pushes back on bad ideas, and acts instead of reporting&rdquo;
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">
                Full identity. Always-on. Stateful. Shapes every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Three steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-[var(--accent)] font-mono text-sm mb-2">01</div>
              <h3 className="font-semibold mb-2">Browse</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Find a persona that matches how you work. Filter by category,
                read examples, check what integrations it supports.
              </p>
            </div>
            <div>
              <div className="text-[var(--accent)] font-mono text-sm mb-2">02</div>
              <h3 className="font-semibold mb-2">Install</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Clone the repo. Copy the files into your AI agent&apos;s config
                directory. Replace the placeholder variables with your info.
              </p>
            </div>
            <div>
              <div className="text-[var(--accent)] font-mono text-sm mb-2">03</div>
              <h3 className="font-semibold mb-2">Work</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Your AI now has a personality. It communicates differently,
                prioritizes differently, and operates with consistent behavior
                across every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured personas */}
      <section className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Featured Personas</h2>
            <a
              href="/browse"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              View all
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((persona) => (
              <PersonaCard key={persona.slug} persona={persona} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Create your own */}
      <section className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Already have a persona?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            If you&apos;ve customized your AI&apos;s behavior, you have a persona.
            Package it and share it with the community.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-6 py-4 inline-block font-mono text-sm text-left">
            <div className="text-[var(--text-muted)]">
              # Paste the packaging guide into your AI session
            </div>
            <div>
              <span className="text-[var(--text-muted)]">$</span>{" "}
              <span className="text-[var(--text-primary)]">claude</span>{" "}
              <span className="text-[var(--text-secondary)]">
                &quot;Package my setup as a persona. Follow these instructions.&quot;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Portable, not locked in */}
      <section className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Portable. Open. Yours.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[var(--border)] rounded-lg p-5">
              <h3 className="font-semibold mb-2">Not locked in</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Persona packages are markdown files in a Git repo. They work
                with Claude Code, Cursor, Windsurf, and any agent that reads
                config files. You own them.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <h3 className="font-semibold mb-2">Not a prompt dump</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A structured format with identity, behavioral rules,
                communication style, commands, memory, and integrations.
                Not a wall of text you paste into a chat box.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <h3 className="font-semibold mb-2">Composable</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Layer a communication style on top of domain expertise.
                Extend a base persona with specialized skills. Mix and match.
              </p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <h3 className="font-semibold mb-2">Security-scanned</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Every submission is evaluated for credential leaks, prompt
                injection, and dangerous operations before listing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
