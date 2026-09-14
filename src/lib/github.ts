export type GithubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
};

/**
 * Fetches a public GitHub user profile with a one-day cache.
 */
export async function getGithubProfile(
  username: string,
): Promise<GithubProfile | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 86400 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return null;
    return (await response.json()) as GithubProfile;
  } catch {
    return null;
  }
}
