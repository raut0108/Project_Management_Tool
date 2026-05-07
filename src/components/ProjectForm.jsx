import { useState } from 'react';

function ProjectForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    team: '',
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
    if (formData.title.trim()) {
      onSubmit(formData);
      setFormData({ title: '', description: '', team: '' });
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Create new project</h3>
      <label>
        <span>Project name *</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Mobile redesign"
          required
        />
      </label>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="What is this project about?"
          rows="3"
        />
      </label>
      <label>
        <span>Team members</span>
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleChange}
          placeholder="e.g., Design, Dev, QA"
        />
      </label>
      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Create project
        </button>
        <button type="button" className="ghost-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
