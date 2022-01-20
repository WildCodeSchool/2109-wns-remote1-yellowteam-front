import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import TasksListUser from './pages/TasksListUser'
import useAppState from './hooks/useAppState'

const client = apolloClient()

function App(): JSX.Element {
  const { isAuth } = useAppState()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={mainTheme}>
        <Layout>
          {isAuth ? (
            <>
              <Routes>
                <Route path="/" element={<TasksListUser />} />
              </Routes>
            </>
          ) : (
            <Login />
          )}
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
