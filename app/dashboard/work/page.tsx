// app/work/page.tsx
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
];

export default function WorkPage() {
  return (
    <section className="work-section">
      <div className="section-heading">
        <p className="section-label section-title-bold">Selected work</p>
        <p className="section-note">A selection of things I&apos;ve made<br />and things I&apos;m making.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project ${project.featured ? 'featured' : ''}`} key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}