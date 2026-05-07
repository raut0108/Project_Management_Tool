import TaskCard from '../components/TaskCard';

function Tasks() {
  return (
    <div className="content-page">
      <div className="section-heading">
        <h2>Tasks</h2>
        <button className="secondary-btn">New task</button>
      </div>
      <div className="task-list">
        <TaskCard title="Prepare sprint backlog" assignee="Anil" status="In progress" />
        <TaskCard title="Assign QA cases" assignee="Mira" status="Pending" />
        <TaskCard title="Update project brief" assignee="Karan" status="Review" />
      </div>
    </div>
  );
}

export default Tasks;
