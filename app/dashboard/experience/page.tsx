// app/experience/page.tsx
export default function ExperiencePage() {
  return (
    <section className="experience-section">
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
            <p className="experience-description">
              Supporting digital literacy initiatives that help learners and communities build practical confidence with technology.
            </p>
          </article>
          <article className="experience-card">
            <div className="experience-card-top">
              <span className="experience-period">04 December 2025 — 22 December 2025</span>
              <span className="experience-type">Contract</span>
            </div>
            <h3>Data Entry Clerk</h3>
            <p className="experience-organisation">KNEC · Datum Analytics</p>
            <p className="experience-description">
              Accurately capturing, reviewing, and organizing examination data under a time-bound contract with KNEC through Datum Analytics.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}