import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>Projects</h2>
          <p className="muted-text">Manage active teams, progress, and deadlines.</p>
        </div>
        <button className="secondary-btn">Add project</button>
      </div>

      <div className="page-controls">
        <SearchBar placeholder="Search projects..." onSearch={setSearchTerm} />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="card-grid">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="link-card">
              <ProjectCard title={project.title} team={project.team} progress={`${project.progress}%`} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
