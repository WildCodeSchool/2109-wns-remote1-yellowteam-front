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

const client = apolloClient()

const Routes = () =>
  useRoutes([
    { path: '/', element: <ProjectsBoard /> },
    { path: '/:projectId', element: <ProjectsBoard /> },
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
