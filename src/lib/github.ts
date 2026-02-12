// src/lib/github.ts

export async function getGitHubData(username: string) {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  // 1. Add your filter list here
  // You can add or remove any language from this array
  const excludedLanguages = [
    'CMake', 
    'Shell', 
    'Dockerfile', 
    'Pug', 
    'Swift', 
    'Objective-C', 
    'Groovy', 
    'Jupyter Notebook',
    'Makefile',
    'C++',
    'Objective-C++',
    'C',
    'Ruby',
    "Cap'n Proto",
  ];

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!reposRes.ok) return { uniqueSkills: [] };
    const repos = await reposRes.json();

    const languageRequests = repos.map(async (repo: any) => {
      try {
        const langRes = await fetch(repo.languages_url, { headers, next: { revalidate: 3600 } });
        return langRes.ok ? await langRes.json() : {};
      } catch {
        return {};
      }
    });

    const allLanguagesData = await Promise.all(languageRequests);

    const skillSet = new Set<string>();
    allLanguagesData.forEach((data) => {
      Object.keys(data).forEach((lang) => {
        // 2. Only add to the set if it's NOT in the excluded list
        if (!excludedLanguages.includes(lang)) {
          skillSet.add(lang);
        }
      });
    });

    return { uniqueSkills: Array.from(skillSet) };
  } catch (error) {
    console.error("Network error fetching GitHub data:", error);
    return { uniqueSkills: [] };
  }
}