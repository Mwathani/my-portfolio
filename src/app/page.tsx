import Hero from '../components/Hero'; 
import Contact from '../components/Contact';
import { getGitHubData } from '@/lib/github';

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* { 1. HERO SECTION:  */}

      <Hero 
        name="Rooney Mwathani" 
        role="Full-Stack Developer"
        description="I specialize in building type-safe, scalable web applications. My skill set below is live-synced from my GitHub activity."
      />

      {/* { 2. SKILLS SECTION:  */}

      <section className="py-20 border-t border-slate-100 dark:border-slate-800 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skills.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          <GithubSkills username="Mwathani" />
        </div>
      </section>

      {/* { 3. CONTACT SECTION:  */}
      <Contact /> 
      
      {/* { 4. FOOTER:  */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100 dark:border-slate-800">
        © {new Date().getFullYear()} Rooney Mwathani. Built with Next.js & TypeScript.
      </footer>
    </main>
  );
}

//  GITHUB SKILLS COMPONENT

async function GithubSkills({ username }: { username: string }) {
  try {
    const { uniqueSkills } = await getGitHubData(username);

    if (uniqueSkills.length === 0) {
      return <p className="text-slate-500">No public languages detected yet.</p>;
    }

    return (
      <>
        {uniqueSkills.map((skill) => (
          <span 
            key={skill} 
            className="px-6 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl border border-slate-200 dark:border-slate-800 font-bold shadow-sm hover:scale-105 hover:border-blue-500 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </>
    );
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-red-600 dark:text-red-400 text-sm">
        Unable to sync skills from GitHub at the moment.
      </div>
    );
  }
}