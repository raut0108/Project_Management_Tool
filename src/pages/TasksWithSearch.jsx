import { useState } from 'react';
import { tasks } from '../data/mockData';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';
import FilterTabs from '../components/FilterTabs';

function TasksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'review', label: 'Review' },
    { id: 'done', label: 'Done' },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    return matchesSearch && task.status.toLowerCase().replace(' ', '-') === activeFilter;
  });

  return (
    <div className="content-page">
      <div className="section-heading">
        <div>
          <h2>Tasks</h2>
          <p className="muted-text">Track assignments, status, and due dates in one place.</p>
        </div>
        <button className="secondary-btn">New task</button>
      </div>

      <div className="page-controls">
        <SearchBar placeholder="Search tasks..." onSearch={setSearchTerm} />
      </div>

      <FilterTabs tabs={filterTabs} active={activeFilter} onTabChange={setActiveFilter} />

      {filteredTasks.length > 0 ? (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-item">
              <TaskCard title={task.title} assignee={task.assignee} status={task.status} />
              <span className="task-meta">{task.dueDate}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No tasks found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default TasksPage;
