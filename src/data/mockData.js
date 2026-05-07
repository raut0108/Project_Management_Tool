export const projects = [
  {
    id: 'p1',
    title: 'Website redesign',
    team: 'Design, Dev',
    progress: 74,
    description: 'Refresh the landing page, improve mobile layout, and update brand visuals.',
    members: ['Priya', 'Karan', 'Neha'],
  },
  {
    id: 'p2',
    title: 'Mobile app launch',
    team: 'Ops, Backend',
    progress: 42,
    description: 'Build MVP for Android and iOS with authentication and task updates.',
    members: ['Rahul', 'Anil', 'Mira'],
  },
  {
    id: 'p3',
    title: 'API integration',
    team: 'Backend',
    progress: 30,
    description: 'Connect task manager to the REST backend and support role-based access.',
    members: ['Vikram', 'Sonia'],
  },
];

export const tasks = [
  {
    id: 't1',
    title: 'Design login page',
    assignee: 'Priya',
    status: 'In progress',
    project: 'Website redesign',
    dueDate: 'May 13',
  },
  {
    id: 't2',
    title: 'Fix billing bug',
    assignee: 'Rahul',
    status: 'Pending',
    project: 'Mobile app launch',
    dueDate: 'May 15',
  },
  {
    id: 't3',
    title: 'Review sprint plan',
    assignee: 'Neha',
    status: 'Done',
    project: 'Website redesign',
    dueDate: 'May 10',
  },
  {
    id: 't4',
    title: 'Write API spec',
    assignee: 'Vikram',
    status: 'Review',
    project: 'API integration',
    dueDate: 'May 18',
  },
];
