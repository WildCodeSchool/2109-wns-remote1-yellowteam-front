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
import Board from './pages/Board'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Project from './pages/Project'

const client = apolloClient()

const Routes = () =>
  useRoutes([
    { path: '/board', element: <Board /> },
    { path: '/board/:projectId', element: <Board /> },
    { path: '/projects', element: <Project /> },
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
