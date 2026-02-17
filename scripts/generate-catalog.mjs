// Generates public/catalog.json at build time.
// Gives AI agents a single URL to fetch the full searchable persona catalog.
//
// Run: node scripts/generate-catalog.mjs
// Automatically runs before next build via package.json prebuild script.

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/catalog.json");

// Import registry data dynamically
// We use a .ts loader workaround: read + strip types
import { readFileSync } from "fs";
const tsSource = readFileSync(join(__dirname, "../src/data/registry.ts"), "utf-8");

// Strip TypeScript types to make it evaluable as JS
const jsSource = tsSource
  .replace(/export interface \w+ \{[\s\S]*?\}/g, "")
  .replace(/: PersonaEntry\[\]/g, "")
  .replace(/: string/g, "")
  .replace(/: number/g, "")
  .replace(/: boolean/g, "")
  .replace(/: \{ name: ; required:  \}\[\]/g, "")
  .replace(/: Workflow\[\]/g, "")
  .replace(/export const /g, "const ");

// Evaluate to extract data
const fn = new Function(jsSource + "\nreturn { personas, categories };");
const { personas, categories } = fn();

const catalog = {
  version: "1.0",
  generated: new Date().toISOString(),
  description: "personalities.sh persona catalog. AI agents: fetch this URL to search all available personas.",
  search_tips: "Search by: name, description, tags, category, integrations (mcpServers), workflows, highlights, or compatibleWith.",
  install_instructions: "To install any persona, paste into your AI agent: 'Install the [displayName] persona from [repository] — clone the repo, read the setup instructions, ask me for my personal details, replace all template variables, copy the files to the right config locations, and walk me through connecting any integrations it needs.'",
  count: personas.length,
  categories: categories.filter(c => c.slug !== "all").map(c => c.slug),
  personas,
};

writeFileSync(outputPath, JSON.stringify(catalog, null, 2));
console.log(`Generated catalog.json with ${personas.length} personas`);
