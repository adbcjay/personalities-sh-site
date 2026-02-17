// Persona registry - the catalog source of truth.
// Each entry maps to a persona package in a GitHub repo.
// To add a persona: open a PR adding your entry here.

export interface PersonaEntry {
  slug: string;
  displayName: string;
  description: string;
  author: string;
  authorGithub: string;
  category: string;
  tags: string[];
  mcpServers: { name: string; required: boolean }[];
  version: string;
  repository: string;
  installCommand: string;
  featured: boolean;
}

export const personas: PersonaEntry[] = [
  {
    slug: "operator-copilot",
    displayName: "Operator Copilot",
    description:
      "AI partner for non-developer business operators who think in systems. Configured for direct communication, anti-sycophancy, and action over reporting.",
    author: "Justin",
    authorGithub: "adbcjay",
    category: "executive",
    tags: ["operator", "coo", "non-developer", "anti-sycophancy", "business-automation", "strategic"],
    mcpServers: [
      { name: "google-drive", required: false },
      { name: "n8n", required: false },
    ],
    version: "1.0.0",
    repository: "https://github.com/adbcjay/operator-copilot",
    installCommand: "git clone https://github.com/adbcjay/operator-copilot.git",
    featured: true,
  },
  {
    slug: "chief-of-staff",
    displayName: "Chief of Staff",
    description:
      "Executive assistant that triages email, manages your calendar, runs morning briefings, and tracks quarterly goals. Built by the CEO of Ada.",
    author: "Mike Murchison",
    authorGithub: "mimurchison",
    category: "executive",
    tags: ["executive", "email", "calendar", "briefings", "productivity"],
    mcpServers: [
      { name: "gmail", required: true },
      { name: "google-calendar", required: true },
      { name: "slack", required: false },
    ],
    version: "1.0.0",
    repository: "https://github.com/mimurchison/claude-chief-of-staff",
    installCommand: "git clone https://github.com/mimurchison/claude-chief-of-staff.git",
    featured: true,
  },
];

export const categories = [
  { slug: "all", label: "All" },
  { slug: "executive", label: "Executive" },
  { slug: "professional-services", label: "Professional Services" },
  { slug: "developer", label: "Developer" },
  { slug: "creative", label: "Creative" },
  { slug: "research", label: "Research" },
  { slug: "domain-specialist", label: "Domain Specialist" },
  { slug: "personal", label: "Personal" },
  { slug: "operations", label: "Operations" },
  { slug: "sales", label: "Sales" },
  { slug: "support", label: "Support" },
];
