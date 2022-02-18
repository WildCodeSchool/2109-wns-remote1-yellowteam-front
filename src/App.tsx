import React from 'react'
import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { CookiesProvider } from 'react-cookie'
import Layout from './components/Layout'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import useAppState from './hooks/useAppState'
import ProjectsBoard from './pages/ProjectsBoard'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'

const client = apolloClient()

const Routes = () =>
  useRoutes([
    { path: '/board', element: <ProjectsBoard /> },
    { path: '/board/:projectId', element: <ProjectsBoard /> },
    { path: '/profile', element: <Profile /> },
    { path: '/notifications', element: <Notifications /> },
  ])

function App(): JSX.Element {
  const { isAuth } = useAppState()

  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <ChakraProvider theme={mainTheme}>
          <Router>
            <Layout connected={isAuth}>
              {isAuth ? <Routes /> : <Login />}
            </Layout>
          </Router>
        </ChakraProvider>
      </ApolloProvider>
    </CookiesProvider>
  )
}

export default App
