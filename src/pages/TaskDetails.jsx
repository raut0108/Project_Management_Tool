import { Link, useParams, Navigate } from 'react-router-dom';
import { tasks } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

function TaskDetails() {
  const { id } = useParams();
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>{task.title}</h2>
          <p className="muted-text">{task.project}</p>
        </div>
        <Link to="/tasks" className="ghost-btn">
          Back to tasks
        </Link>
      </div>

      <div className="detail-panel">
        <div className="detail-row">
          <span>Assignee</span>
          <strong>{task.assignee}</strong>
        </div>
        <div className="detail-row">
          <span>Due date</span>
          <strong>{task.dueDate}</strong>
        </div>
        <div className="detail-row">
          <span>Status</span>
          <StatusBadge status={task.status} />
        </div>
        <p className="body-copy">
          This task is part of the current project workflow and will be tracked based on role-based authorization.
        </p>
      </div>
    </div>
  );
}

export default TaskDetails;
