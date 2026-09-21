// app/skills/page.tsx
export default function SkillsPage() {
  return (
    <section className="skills-section">
      <p className="section-label section-title-bold">02 / Technical Toolbox</p>
      <div className="skills-content">
        <div className="skills-heading">
          <p className="skills-kicker">Capabilities & tools</p>
          <h2>Tools for<br /><em>meaningful work.</em></h2>
        </div>
        <div className="skills-groups">
          <article className="skills-group">
            <p className="skills-group-label">Web & Software Development</p>
            <div className="skills-items">
              <div><span>Frontend</span><strong>HTML5, CSS3, JavaScript (ES6+), React, Next.js, TypeScript, Bootstrap</strong></div>
              <div><span>Backend</span><strong>PHP (Laravel), Node.js, Python (FastAPI)</strong></div>
            </div>
          </article>
          <article className="skills-group">
            <p className="skills-group-label">Database & DevOps</p>
            <div className="skills-items">
              <div><span>Databases</span><strong>MySQL, SQLite, PostgreSQL, Neon DB</strong></div>
              <div><span>ORM</span><strong>Drizzle ORM</strong></div>
              <div><span>Infrastructure</span><strong>Docker, Prometheus, Grafana, Linux system administration</strong></div>
              <div><span>Monitoring</span><strong>Real-time observability and alerting pipelines</strong></div>
            </div>
          </article>
          <article className="skills-group">
            <p className="skills-group-label">Data Science & Professional Tools</p>
            <div className="skills-items">
              <div><span>Data Science</span><strong>NumPy, Pandas, Scikit-learn</strong></div>
              <div><span>Productivity</span><strong>Advanced Microsoft Office Suite: Word, Excel, PowerPoint, Access</strong></div>
              <div><span>Certifications</span><strong>Cisco Networking, CyberOps, Network Security, Data Analytics</strong></div>
            </div>
          </article>
          <div className="skills-positioning">
            <span>Positioning</span>
            <strong>Full-Stack Developer building scalable web applications with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}