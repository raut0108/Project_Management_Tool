import { useState } from 'react';
import Modal from '../components/Modal';
import ProjectForm from '../components/ProjectForm';
import { projects as initialProjects } from '../data/mockData';

function ProjectsWithForm() {
  const [projects, setProjects] = useState(initialProjects);
  const [showForm, setShowForm] = useState(false);

  const handleCreateProject = (formData) => {
    const newProject = {
      id: `p${projects.length + 1}`,
      ...formData,
      progress: 0,
      members: formData.team ? formData.team.split(',').map((m) => m.trim()) : [],
    };
    setProjects([...projects, newProject]);
    setShowForm(false);
  };

  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>Projects</h2>
          <p className="muted-text">Manage active teams, progress, and deadlines.</p>
        </div>
        <button className="secondary-btn" onClick={() => setShowForm(true)}>
          Add project
        </button>
      </div>

      {projects.length > 0 ? (
        <div className="card-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p className="muted-text">{project.team}</p>
              </div>
              <div className="progress-row">
                <span>{project.progress}%</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No projects yet. Create one to get started.</p>
        </div>
      )}

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <ProjectForm
          onSubmit={handleCreateProject}
          onCancel={() => setShowForm(false)}
        />
      </Modal>
    </div>
  );
}

export default ProjectsWithForm;
