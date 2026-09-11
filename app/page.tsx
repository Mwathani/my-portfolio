'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Rooney Portfolio',
    description: 'A considered personal site for communicating craft, capabilities, and the work behind the work.',
    tags: ['Next.js', 'TypeScript', 'Design'],
    featured: true,
  },
  {
    number: '02',
    title: 'Digital Experiences',
    description: 'Thoughtful interfaces that turn complex product ideas into simple, useful experiences.',
    tags: ['React', 'UX', 'Systems'],
  },
  {
    number: '03',
    title: 'Full-Stack Builds',
    description: 'Reliable applications built from the data layer to the final polished interaction.',
    tags: ['Node.js', 'APIs', 'Postgres'],
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Rooney Mwathani home" onClick={closeMenu}>
          RM<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="availability" href="#contact" onClick={closeMenu}><span aria-hidden="true" /> Available for work</a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Full Stack Developer / Nairobi, Kenya</p>
        <h1>Building digital products<br /><em>with purpose.</em></h1>
        <div className="hero-footer">
          <p className="intro">I&apos;m <strong>Rooney Mwathani</strong> — a developer focused on creating dependable, expressive experiences for the web.</p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <button className="cv-button" type="button" disabled title="CV upload coming soon">
              Download CV <span aria-hidden="true">↓</span>
            </button>
            <span className="cv-status">CV upload coming soon</span>
          </div>
          <a className="scroll-link" href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-label section-title-bold">01 / Approach</p>
        <div>
          <h2>Good software is<br /><span>felt, not noticed.</span></h2>
          <p className="statement-copy">I work across design and engineering to make products that feel clear, considered, and built to last. From the first idea to the final interaction, every detail has a job.</p>
        </div>
      </section>

      <section className="skills-section" id="skills">
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
            <div className="skills-positioning"><span>Positioning</span><strong>Full-Stack Developer building scalable web applications with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.</strong></div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <p className="section-label section-title-bold">03 / Experience</p>
        <div className="experience-content">
          <div className="experience-heading">
            <p className="experience-kicker">Professional journey</p>
            <h2>Learning by<br /><em>doing the work.</em></h2>
          </div>
          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-card-top">
                <span className="experience-period">January 2026 — December 2026</span>
                <span className="experience-type">Internship</span>
              </div>
              <h3>Digital Literacy Programme Intern</h3>
              <p className="experience-organisation">Ministry of Education</p>
              <p className="experience-description">Supporting digital literacy initiatives that help learners and communities build practical confidence with technology.</p>
            </article>
            <article className="experience-card">
              <div className="experience-card-top">
                <span className="experience-period">04 December 2025 — 22 December 2025</span>
                <span className="experience-type">Contract</span>
              </div>
              <h3>Data Entry Clerk</h3>
              <p className="experience-organisation">KNEC · Datum Analytics</p>
              <p className="experience-description">Accurately capturing, reviewing, and organizing examination data under a time-bound contract with KNEC through Datum Analytics.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="education-section" id="education">
        <p className="section-label section-title-bold">04 / Education</p>
        <div className="education-content">
          <div className="education-heading">
            <p className="education-kicker">Academic foundation</p>
            <h2>Built on<br /><em>strong fundamentals.</em></h2>
          </div>
          <article className="education-card">
            <div className="education-card-top">
              <span className="education-year">Graduated 15 / 12 / 2023</span>
              <span className="education-mark" aria-hidden="true">MSU</span>
            </div>
            <h3>Maseno University<br />Main Campus</h3>
            <div className="education-details">
              <div><span>Course</span><strong>Bachelor of Science in Information Technology</strong></div>
              <div><span>Grade</span><strong>Second Class Upper</strong></div>
            </div>
          </article>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-label section-title-bold">05 / Selected work</p>
          <p className="section-note">A selection of things I&apos;ve made<br />and things I&apos;m making.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.featured ? 'featured' : ''}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">06 / Let&apos;s connect</p>
        <div className="contact-content">
          <h2>Have a good<br /><em>idea?</em></h2>
          <div className="contact-card">
            <div className="contact-card-heading">
              <span className="contact-card-label">Direct contact</span>
              <span className="contact-card-mark" aria-hidden="true">RM</span>
            </div>
            <p className="contact-name">Rooney Mwathani</p>
            <div className="contact-details">
              <a className="contact-detail" href="https://wa.me/254759746625" target="_blank" rel="noreferrer">
                <span className="whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.23-6.17-3.44-8.41ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.89 9.89 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 0 1 2.9 7c0 5.45-4.45 9.89-9.94 9.89Zm5.43-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" /></svg></span>
                <span><small>WhatsApp</small><strong>+254 759 746 625</strong></span>
              </a>
              <a className="contact-detail" href="mailto:mwatahnirooney@gmail.com">
                <span className="email-icon" aria-hidden="true">@</span>
                <span><small>Email</small><strong>mwatahnirooney@gmail.com</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Rooney Mwathani</span>
        <div><a href="#top">Back to top ↑</a><a href="https://wa.me/?text=Hello%20Rooney" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.facebook.com/rooney.mwathani" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://github.com/Mwathani" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </footer>
    </main>
  )
}
