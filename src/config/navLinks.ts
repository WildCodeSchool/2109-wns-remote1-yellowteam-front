import ProjectIcon from 'src/static/svg/ProjectIcon'
import TasksIcon from 'src/static/svg/TasksIcon'
import UserIcon from 'src/static/svg/UserIcon'

const navLinks: TNavLink[] = [
  {
    id: '1',
    'data-testid': 'tasks-button',
    name: 'board',
    link: '/board',
    icon: TasksIcon,
  },
  {
    id: '2',
    'data-testid': 'projects-button',
    name: 'projects',
    link: '/projects',
    icon: ProjectIcon,
  },
  {
    id: '3',
    'data-testid': 'user-icon-button',
    name: 'profile',
    link: '/profile',
    icon: UserIcon,
  },
]

export default navLinks
