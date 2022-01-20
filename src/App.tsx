import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
<<<<<<< HEAD
import Layout from './components/Layout'
import Login from './pages/Login'
=======
import Layout from 'components/Layout'
import Login from 'pages/Login'
>>>>>>> 6c0e59cff6db1d209fb7989dba0f4dc596643176
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
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/" element={<TasksListUser />} />
            </Routes>
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
