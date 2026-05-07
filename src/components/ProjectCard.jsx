function ProjectCard({ title, team, progress }) {
  return (
    <article className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{team}</p>
      </div>
      <div className="progress-row">
        <span>{progress}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: progress }} />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
