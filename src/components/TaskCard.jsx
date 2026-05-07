function TaskCard({ title, assignee, status }) {
  return (
    <div className="task-card">
      <div>
        <h4>{title}</h4>
        <p>{assignee}</p>
      </div>
      <span className={`task-badge ${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
    </div>
  );
}

export default TaskCard;
