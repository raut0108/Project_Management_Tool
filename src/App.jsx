import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import TasksWithSearch from './pages/TasksWithSearch';
import TaskDetails from './pages/TaskDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="page-layout">
        <Sidebar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/tasks" element={<TasksWithSearch />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
