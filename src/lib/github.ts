import { personas } from "@/data/registry";

function parseGitHubRepo(url: string): { owner: string; repo: string } | null {
  if (url.includes("gist.github.com")) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

async function fetchStars(url: string): Promise<number | null> {
  const repo = parseGitHubRepo(url);
  if (!repo) return null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.stargazers_count ?? null;
  } catch {
    return null;
  }
}

export async function getStarsMap(): Promise<Record<string, number>> {
  const entries = await Promise.all(
    personas.map(async (p) => {
      const stars = await fetchStars(p.repository);
      return [p.slug, stars ?? 0] as const;
    })
  );

  return Object.fromEntries(entries);
}
