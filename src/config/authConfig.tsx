import { RouteObject, Navigate } from 'react-router-dom'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'

const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]
export default authRoutes
