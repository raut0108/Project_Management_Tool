import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';
import { projects, tasks } from '../data/mockData';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Overview</p>
          <h1>Team task manager</h1>
        </div>
        <div className="status-box">
          <div>
            <span>Open tasks</span>
            <strong>{tasks.length}</strong>
          </div>
          <div>
            <span>Projects</span>
            <strong>{projects.length}</strong>
          </div>
        </div>
      </div>

      <section className="section-row">
        <div className="section-panel">
          <div className="section-heading">
            <h2>Active projects</h2>
            <Link to="/projects" className="secondary-btn">
              View all
            </Link>
          </div>
          <div className="card-grid">
            {projects.slice(0, 2).map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="link-card">
                <ProjectCard title={project.title} team={project.team} progress={`${project.progress}%`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="section-panel small-panel">
          <div className="section-heading">
            <h2>Recent tasks</h2>
          </div>
          {tasks.slice(0, 3).map((task) => (
            <Link key={task.id} to={`/tasks/${task.id}`} className="link-card">
              <TaskCard title={task.title} assignee={task.assignee} status={task.status} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
