import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/mockData';

function Projects() {
  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>Projects</h2>
          <p className="muted-text">Manage active teams, progress, and deadlines.</p>
        </div>
        <button className="secondary-btn">Add project</button>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="link-card">
            <ProjectCard title={project.title} team={project.team} progress={`${project.progress}%`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
