import { Navigate, RouteObject } from 'react-router-dom'
import Layout from 'src/components/Layout'
import Board from 'src/pages/Board'
import ModifyProject from 'src/pages/ModifyProject'
import Notifications from 'src/pages/Notifications'
import Profile from 'src/pages/Profile'
import Projects from 'src/pages/Projects'
import ProjectDetails from 'src/pages/ProjectsDetails'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/board', element: <Board /> },
      { path: '/board/:projectId', element: <Board /> },
      { path: '/projects', element: <Projects /> },
      {
        path: '/projects/:projectId',
        element: <ProjectDetails />,
      },
      {
        path: '/projects/:projectId/modify',
        element: <ModifyProject />,
      },
      { path: '/profile', element: <Profile /> },
      { path: '/notifications', element: <Notifications /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/board" />,
  },
]
export default routes
