// Persona registry - the catalog source of truth.
// Each entry maps to a persona package in a GitHub repo.
// To add a persona: open a PR adding your entry here.

export interface Workflow {
  command: string;
  name: string;
  description: string;
}

export interface PersonaEntry {
  slug: string;
  displayName: string;
  description: string;
  author: string;
  authorGithub: string;
  category: string;
  tags: string[];
  mcpServers: { name: string; required: boolean }[];
  compatibleWith: string[];
  workflows: Workflow[];
  highlights: string[];
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
    compatibleWith: ["Claude Code", "Cursor", "Windsurf", "Codex CLI", "Copilot"],
    workflows: [],
    highlights: [
      "Partnership, not service — pushes back on bad ideas, disagrees when it sees a problem, offers unsolicited opinions. Silent agreement is treated as failure.",
      "Anti-sycophancy engine — no \"Great question!\", no hedging. If your idea has holes, says \"That won't work because X\" directly.",
      "No-code-first evaluation — evaluates n8n, Zapier, or Make before writing custom code. Has been used to build 8-workflow automation pipelines without a single line of code.",
      "Act, don't report — fixes broken things instead of presenting findings. Built and deployed a Telegram bot, orchestrated multi-drive file migrations, and shipped a full website in single sessions.",
      "De-GPT all writing — external-facing text scores <=2 on AI detection. No emdashes, no formulaic structure, no \"Here's...\" openers. Reads like a human wrote it.",
      "Persistent memory system — records decisions, corrections, and project state across sessions. After any mistake, writes what it learned so it never repeats it.",
      "Skill-aware execution — auto-invokes spreadsheet, PDF, Word, and presentation tools. Findings lead to action via the right tool, never stopping at findings alone.",
      "Calibrated for non-developers — explains logic in plain language. \"Non-developer\" means doesn't write code, not non-technical. Built for operators who think in systems, not syntax.",
      "Statements over questions — leads with its best assessment. Picks one approach and explains why. Holds position under challenge unless new information changes the calculus.",
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
    tags: ["executive", "email", "calendar", "briefings", "productivity", "crm"],
    mcpServers: [
      { name: "gmail", required: true },
      { name: "google-calendar", required: true },
      { name: "slack", required: false },
      { name: "whatsapp", required: false },
      { name: "imessage", required: false },
      { name: "granola", required: false },
    ],
    compatibleWith: ["Claude Code"],
    workflows: [
      {
        command: "/gm",
        name: "Morning Briefing",
        description: "Pulls today's calendar, overdue tasks, goal progress, and urgent inbox items into one structured briefing. Ends with a focus recommendation for the day.",
      },
      {
        command: "/triage",
        name: "Inbox Triage",
        description: "Scans all connected channels (email, Slack, WhatsApp), classifies every item into 3 urgency tiers, drafts responses in your voice, and waits for approval before sending anything.",
      },
      {
        command: "/my-tasks",
        name: "Task Management",
        description: "Goal-aligned task tracking where the AI actually executes tasks (drafts the email, does the research), not just reminds you. Flags overdue items and celebrates early completions.",
      },
      {
        command: "/enrich",
        name: "Contact Enrichment",
        description: "Auto-builds a personal CRM by scanning your communications. Tracks interaction history, flags stale relationships by tier, suggests outreach with context.",
      },
    ],
    highlights: [
      "Morning briefing replaces 90 minutes of inbox processing with 5 minutes",
      "3-tier triage system prioritizes by who matters, not who's loudest",
      "Personal CRM that builds itself — 160+ contacts tracked, auto-enriched across all channels",
      "Every decision filtered through your quarterly goals — calendar, triage, task priority",
      "Drafts are send-ready in your voice, not starting points for editing",
      "Staleness alerts when important relationships go quiet",
      "Never sends any message without explicit approval",
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
