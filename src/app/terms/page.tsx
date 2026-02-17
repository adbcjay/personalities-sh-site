export default function TermsPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-[var(--text-muted)] mb-10">
          Last updated: February 17, 2026
        </p>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              1. What this is
            </h2>
            <p>
              personas.sh is an open catalog of portable AI persona
              configurations. We host a directory that links to persona packages
              stored in Git repositories. We do not host the persona files
              themselves.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              2. User-generated content
            </h2>
            <p className="mb-3">
              Persona listings are submitted by the community. We do not review,
              endorse, or guarantee the quality, accuracy, safety, or fitness of
              any persona package. You install and use personas at your own risk.
            </p>
            <p>
              By submitting a persona, you represent that you have the right to
              share its contents and that it does not contain malicious code,
              credential harvesting, prompt injection attacks, or content that
              violates applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              3. Licensing
            </h2>
            <p>
              Each persona package is governed by its own license (typically MIT).
              The license is specified in the persona&apos;s repository. If no
              license is specified, the persona is treated as MIT-licensed per the
              personas.sh format spec.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              4. No warranty
            </h2>
            <p>
              The catalog and all persona packages listed on it are provided
              &ldquo;as is&rdquo; without warranty of any kind, express or
              implied. We are not liable for any damages arising from the use of
              any persona, including but not limited to data loss, credential
              exposure, or unintended AI behavior.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              5. Removal
            </h2>
            <p>
              We reserve the right to remove any persona listing at any time for
              any reason, including but not limited to: security concerns,
              credential leaks, prompt injection, misleading descriptions, or
              violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              6. Your responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Review any persona package before installing it. Read the
                PERSONA.md, check the behavioral rules, and inspect any workflow
                files.
              </li>
              <li>
                Do not submit personas that contain hardcoded credentials, API
                keys, personal data, or malicious instructions.
              </li>
              <li>
                Do not submit personas that impersonate real individuals without
                their consent.
              </li>
              <li>
                When packaging a persona, strip all personal identifiers from
                workflow files, automation configs, and templates. Replace with
                placeholder variables.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              7. Changes
            </h2>
            <p>
              We may update these terms at any time. Continued use of the catalog
              after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              8. Contact
            </h2>
            <p>
              Questions about these terms? Open an issue on{" "}
              <a
                href="https://github.com/persona-sh/site/issues"
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
