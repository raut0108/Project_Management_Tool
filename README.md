# Team Task Manager

A full-stack web application for team collaboration, project management, and task tracking with role-based access control.

## Overview

Team Task Manager is a web-based platform designed to help teams create projects, assign tasks, and track progress. Users can organize work by projects, manage team members, and monitor task status with a clean, intuitive interface. The app supports both Admin and Member roles with appropriate permission controls.

## Key Features

- **Authentication**: Secure login and signup system
- **Project Management**: Create, view, and manage projects with team assignments
- **Task Management**: Create, assign, and track tasks with multiple status states
- **Dashboard**: Overview of active projects and recent tasks
- **Role-Based Access**: Admin and Member roles with controlled permissions
- **Progress Tracking**: Visual progress indicators for projects
- **Team Collaboration**: Assign team members to projects and tasks

## Tech Stack

**Frontend:**
- React 18.3.1
- React Router 6.16.0
- Vite 5.4.21 (build tool)

**Backend :**
- Node.js / Express
- SQL/NoSQL Database
- REST APIs

**Deployment:**
- Railway (for both frontend and backend)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # App header with user profile
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── ProjectCard.jsx # Project card component
│   ├── TaskCard.jsx    # Task card component
│   └── StatusBadge.jsx # Status badge for task/project states
│
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard overview
│   ├── Projects.jsx    # Projects listing page
│   ├── ProjectDetails.jsx  # Individual project details
│   ├── Tasks.jsx       # Tasks listing page
│   ├── TaskDetails.jsx # Individual task details
│   ├── Login.jsx       # Login page
│   ├── Signup.jsx      # Signup page
│   └── NotFound.jsx    # 404 page
│
├── data/               # Static data and mock data
│   └── mockData.js     # Mock projects and tasks
│
├── App.jsx             # Main app component with routing
├── main.jsx            # React entry point
└── styles.css          # Global stylesheet

index.html             # HTML template
package.json           # Dependencies and scripts
vite.config.js         # Vite configuration
.gitignore             # Git ignore rules
```

## Installation

### Prerequisites
- Node.js 16+ and npm

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-management-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Usage

### Running the Application

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

### Navigation

- **Dashboard**: Get an overview of active projects and recent tasks
- **Projects**: View all projects and click to see detailed project information
- **Tasks**: Manage tasks, view status, and assigned team members
- **Login/Signup**: Authentication pages for user registration and login

## API Endpoints (Backend - Coming Soon)

The backend will provide the following endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project details
- `POST /api/projects` - Create new project
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task details
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/:id` - Update task status

## Features in Development

- [ ] Backend API setup (Node.js + Express)
- [ ] Database integration (SQL/NoSQL)
- [ ] Authentication system (JWT tokens)
- [ ] Role-based authorization
- [ ] Form submissions and validation
- [ ] Real-time task updates
- [ ] User profile management
- [ ] Team member invitations
- [ ] Task comments and activity logs

## Deployment

The application will be deployed using Railway:

1. Connect GitHub repository to Railway
2. Set environment variables
3. Railway will auto-deploy on git push to main branch

## Requirements

- ✅ REST APIs + Database (SQL/NoSQL) - In Progress
- ✅ Proper validations & relationships - In Progress
- ✅ Role-based access control - In Progress
- ✅ Deployment on Railway - Planned
- ✅ App must be live and fully functional

## Development Notes

### Styling
- CSS Grid and Flexbox for layouts
- CSS variables for theming (`--brand`, `--border`, etc.)
- Mobile-responsive design

### Component Design
- Functional components with React Hooks
- Router-based navigation
- Reusable card and badge components

### Data Structure
- Mock data for frontend testing
- Backend will handle persistent data

## Next Steps

1. Build backend API with Node.js/Express
2. Integrate database (SQL recommended)
3. Implement authentication and JWT tokens
4. Connect frontend to backend APIs
5. Add form validation and error handling
6. Deploy to Railway

## Timeline

- Days 1-2: UI Development ✅
- Days 3-5: Backend Development (In Progress)
- Days 6-7: Integration & Testing
- Day 8: Deployment & Final Review

## Contributing

This is a learning project for full-stack development. Commit messages follow a realistic pattern:
- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for configuration/setup changes
- `refactor:` for code improvements

## License

MIT
