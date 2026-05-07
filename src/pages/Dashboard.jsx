import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';

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
            <strong>18</strong>
          </div>
          <div>
            <span>Projects</span>
            <strong>6</strong>
          </div>
        </div>
      </div>

      <section className="section-row">
        <div className="section-panel">
          <div className="section-heading">
            <h2>Active projects</h2>
            <button className="secondary-btn">New project</button>
          </div>
          <div className="card-grid">
            <ProjectCard title="Website redesign" team="Admin, UI" progress="74%" />
            <ProjectCard title="Mobile app" team="Ops, Dev" progress="42%" />
          </div>
        </div>

        <div className="section-panel small-panel">
          <div className="section-heading">
            <h2>Recent tasks</h2>
          </div>
          <TaskCard title="Design login page" assignee="Priya" status="In progress" />
          <TaskCard title="Fix billing bug" assignee="Rahul" status="Pending" />
          <TaskCard title="Review sprint plan" assignee="Neha" status="Done" />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
