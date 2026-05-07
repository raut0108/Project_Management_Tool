function StatusBadge({ status }) {
  return <span className={`task-badge ${status.toLowerCase().replace(' ', '-')}`}>{status}</span>;
}

export default StatusBadge;
