
export async function getGitHubData(username: string) {
  
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 3600 } // Auto-refresh data every hour
  });

  if (!res.ok) throw new Error('Failed to fetch GitHub data');

  const repos = await res.json();


  const languages: string[] = repos
    .map((repo: any) => repo.language)
    .filter((lang: string | null) => lang !== null);


  const uniqueSkills = Array.from(new Set(languages));

  
  const featuredProjects = repos
    .filter((repo: any) => repo.stargazers_count > 0 || repo.topics?.includes('portfolio'))
    .map((repo: any) => ({
      title: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
    }));

  return { uniqueSkills, featuredProjects };
}