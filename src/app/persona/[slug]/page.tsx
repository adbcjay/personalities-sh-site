import { notFound } from "next/navigation";
import { personas } from "@/data/registry";

// Generate static paths for all personas
export function generateStaticParams() {
  return personas.map((p) => ({ slug: p.slug }));
}

const categoryLabels: Record<string, string> = {
  executive: "Executive",
  "professional-services": "Professional Services",
  developer: "Developer",
  creative: "Creative",
  research: "Research",
  "domain-specialist": "Domain Specialist",
  personal: "Personal",
  operations: "Operations",
  sales: "Sales",
  support: "Support",
};

export default async function PersonaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const persona = personas.find((p) => p.slug === slug);

  if (!persona) {
    notFound();
  }

  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--text-muted)]">
              {categoryLabels[persona.category] || persona.category}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              v{persona.version}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-3">{persona.displayName}</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {persona.description}
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-2">
            by{" "}
            <a
              href={`https://github.com/${persona.authorGithub}`}
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {persona.author}
            </a>
          </p>
        </div>

        {/* Install command */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-6 py-4 mb-2 font-mono text-sm">
          <span className="text-[var(--text-muted)]">$</span>{" "}
          <span className="text-[var(--text-primary)]">
            {persona.installCommand}
          </span>
        </div>
        <p className="text-xs text-[var(--text-muted)] mb-10">
          Then copy PERSONA.md to your agent&apos;s config directory (e.g. ~/.claude/)
          and replace {"{{VARIABLES}}"} with your info. See SETUP.md in the repo for details.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            {/* Tags */}
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {persona.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* What you get */}
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                What You Get
              </h2>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">~</span>
                  <span>PERSONA.md -- Identity, communication style, behavioral rules</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">~</span>
                  <span>persona.yaml -- Machine-readable metadata</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">~</span>
                  <span>SETUP.md -- Installation and configuration guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">~</span>
                  <span>examples/ -- Sample interactions showing the persona in action</span>
                </div>
              </div>
            </div>

            {/* Source */}
            {persona.repository !== "#" && (
              <div>
                <h2 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Source
                </h2>
                <a
                  href={persona.repository}
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  {persona.repository}
                </a>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Integrations */}
            {persona.mcpServers.length > 0 && (
              <div className="border border-[var(--border)] rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3">Integrations</h3>
                <div className="space-y-2">
                  {persona.mcpServers.map((mcp) => (
                    <div
                      key={mcp.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-[var(--text-secondary)]">
                        {mcp.name}
                      </span>
                      <span
                        className={`text-xs ${
                          mcp.required
                            ? "text-orange-400"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {mcp.required ? "required" : "optional"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compatibility */}
            <div className="border border-[var(--border)] rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3">Works With</h3>
              <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                <div>Claude Code</div>
                <div>Cursor</div>
                <div>Windsurf</div>
              </div>
            </div>

            {/* Quick info */}
            <div className="border border-[var(--border)] rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3">Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">License</span>
                  <span className="text-[var(--text-secondary)]">MIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Version</span>
                  <span className="text-[var(--text-secondary)] font-mono">
                    {persona.version}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Category</span>
                  <span className="text-[var(--text-secondary)]">
                    {categoryLabels[persona.category] || persona.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
