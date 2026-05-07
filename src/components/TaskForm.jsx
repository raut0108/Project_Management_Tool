import { useState } from 'react';

function TaskForm({ onSubmit, onCancel, projects }) {
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    project: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.assignee.trim()) {
      onSubmit(formData);
      setFormData({
        title: '',
        assignee: '',
        project: '',
        dueDate: '',
        status: 'Pending',
      });
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Create new task</h3>
      <label>
        <span>Task title *</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Design login page"
          required
        />
      </label>
      <label>
        <span>Assign to *</span>
        <input
          type="text"
          name="assignee"
          value={formData.assignee}
          onChange={handleChange}
          placeholder="Team member name"
          required
        />
      </label>
      <label>
        <span>Project</span>
        <select name="project" value={formData.project} onChange={handleChange}>
          <option value="">Select project</option>
          {projects &&
            projects.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title}
              </option>
            ))}
        </select>
      </label>
      <label>
        <span>Due date</span>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Status</span>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In progress">In progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Create task
        </button>
        <button type="button" className="ghost-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
