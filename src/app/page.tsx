import { Suspense } from 'react';
import Hero from '../components/Hero'; 
import Experience from '../components/Experience';
import Education from '@/components/Education';
import Contact from '../components/Contact';
import { getGitHubData } from '@/lib/github';

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen relative scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen z-10 flex items-center justify-center">      
        <Hero 
          name="Rooney Mwathani" 
          role="Full-Stack Developer"
          description="BSc. Information Technology graduate from Maseno University. Specialized in building type-safe, scalable web applications and driving digital literacy."
        />
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section className="relative z-20 bg-slate-50 dark:bg-slate-950 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.5)] border-t border-slate-200 dark:border-slate-800 -mt-20">
        <div className="pt-20 pb-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Professional Journey</h2>
          
          {/* Detailed Experience Items */}
          <div className="space-y-12">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-2xl font-bold dark:text-white">Digital Literacy Programme Intern (PSC)</h3>
              <p className="text-blue-600 font-medium">Ministry of Education (MoE) | Jan 2026 — Present</p>
              <ul className="mt-4 list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Implementing the National Digital Literacy Programme to enhance tech-adoption in schools.</li>
                <li>Providing technical support and digital resource management at the Sub-County level.</li>
                <li>Liaising between the Public Service Commission and educational stakeholders.</li>
              </ul>
            </div>

            <div className="border-l-4 border-slate-400 pl-6 py-2">
              <h3 className="text-2xl font-bold dark:text-white">Data Clerk (KCSE 2025)</h3>
              <p className="text-slate-500 font-medium">Datum Analytics / KNEC | Dec 2025 (Contract)</p>
              <ul className="mt-4 list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Managed high-integrity data entry and verification for national examination processing.</li>
                <li>Ensured 100% accuracy in handling sensitive candidate datasets under strict deadlines.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION SECTION */}
      <section className="relative z-30 bg-white dark:bg-slate-900 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.5)] border-t border-slate-200 dark:border-slate-800 -mt-20">
        <div className="pt-20 pb-24 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Education</h2>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold dark:text-white">Bachelor of Science in Information Technology</h3>
            <p className="text-blue-600 font-bold text-lg mt-1">Maseno University</p>
            <p className="text-slate-500 font-medium mt-1">Aug 2019 — Dec 2023</p>
            <div className="mt-4 inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold">
              Second Class Honors (Upper Division)
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. SKILLS SECTION */}
      <section className="relative z-40 bg-slate-50 dark:bg-slate-950 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.5)] border-t border-slate-200 dark:border-slate-800 -mt-20 px-4">        
        <div className="pt-20 pb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <Suspense fallback={<div className="animate-pulse text-blue-500">Syncing GitHub Languages...</div>}>
              <GithubSkills username="Mwathani" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 5. CONTACT & FOOTER */}
      <section className="relative z-50 bg-slate-950 border-t border-slate-800">      
        <Contact />
        <footer className="py-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Rooney Mwathani. All Rights Reserved.
        </footer>
      </section>
    </main>
  );
}

// --- GITHUB SKILLS COMPONENT ---
async function GithubSkills({ username }: { username: string }) {
  try {
    const { uniqueSkills } = await getGitHubData(username);
    if (uniqueSkills.length === 0) return <p className="text-slate-500">No public repository data found.</p>;

    return (
      <>
        {uniqueSkills.map((skill) => (
          <span key={skill} className="px-6 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl border border-slate-200 dark:border-slate-800 font-bold shadow-sm">
            {skill}
          </span>
        ))}
      </>
    );
  } catch (error) {
    return <div className="text-red-400">GitHub sync offline.</div>;
  }
}