export default function NotFound() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-6xl font-bold text-[var(--text-muted)] mb-4">
          404
        </div>
        <h1 className="text-2xl font-semibold mb-4">Page not found</h1>
        <p className="text-[var(--text-secondary)] mb-8">
          This page doesn&apos;t exist. Maybe you were looking for a persona?
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="/browse"
            className="px-4 py-2 bg-[var(--accent)] text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse personas
          </a>
          <a
            href="/"
            className="px-4 py-2 border border-[var(--border)] rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
