import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="content-page">
      <div className="section-heading">
        <h2>Projects</h2>
        <button className="secondary-btn">Add project</button>
      </div>
      <div className="card-grid">
        <ProjectCard title="Website redesign" team="Design, Dev" progress="70%" />
        <ProjectCard title="Launch event" team="Ops, Marketing" progress="55%" />
        <ProjectCard title="API integration" team="Backend" progress="30%" />
      </div>
    </div>
  );
}

export default Projects;
