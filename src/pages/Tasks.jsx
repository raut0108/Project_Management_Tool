import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import { tasks } from '../data/mockData';

function Tasks() {
  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>Tasks</h2>
          <p className="muted-text">Track assignments, status, and due dates in one place.</p>
        </div>
        <button className="secondary-btn">New task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Link key={task.id} to={`/tasks/${task.id}`} className="link-card">
            <TaskCard title={task.title} assignee={task.assignee} status={task.status} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
