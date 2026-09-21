// app/education/page.tsx
export default function EducationPage() {
  return (
    <section className="education-section">
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
  );
}