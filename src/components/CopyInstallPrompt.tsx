"use client";

import { useState } from "react";

export default function CopyInstallPrompt({
  displayName,
  repository,
}: {
  displayName: string;
  repository: string;
}) {
  const [copied, setCopied] = useState(false);

  const text = `Install the ${displayName} persona from ${repository} -- clone the repo, read the setup instructions, ask me for my personal details, replace all template variables, copy the files to the right config locations, and walk me through connecting any integrations it needs.`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-6 py-4 pr-20 text-sm">
      <span className="text-[var(--text-primary)]">
        Install the {displayName} persona from{" "}
        <span className="text-[var(--accent)]">{repository}</span>
        {" "}-- clone the repo, read the setup instructions, ask me for
        my personal details, replace all template variables, copy the
        files to the right config locations, and walk me through
        connecting any integrations it needs.
      </span>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-2.5 py-1 text-xs rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-hover)] transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
