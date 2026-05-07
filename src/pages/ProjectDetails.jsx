import { Link, useParams, Navigate } from 'react-router-dom';
import { projects, tasks } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const projectTasks = tasks.filter((task) => task.project === project.title);

  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>{project.title}</h2>
          <p className="muted-text">{project.team}</p>
        </div>
        <Link to="/projects" className="ghost-btn">
          Back to projects
        </Link>
      </div>

      <div className="detail-grid">
        <section className="detail-panel">
          <h3>Project brief</h3>
          <p>{project.description}</p>
          <div className="detail-row">
            <span>Progress</span>
            <strong>{project.progress}%</strong>
          </div>
          <div className="detail-row">
            <span>Team members</span>
            <div className="member-list">
              {project.members.map((member) => (
                <span key={member} className="member-chip">
                  {member}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-panel">
          <h3>Related tasks</h3>
          <div className="task-table">
            {projectTasks.map((task) => (
              <div key={task.id} className="task-row">
                <div>
                  <strong>{task.title}</strong>
                  <p className="muted-text">{task.assignee}</p>
                </div>
                <StatusBadge status={task.status} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetails;
