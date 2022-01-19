import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import TasksListUser from './pages/TasksListUser'

const client = apolloClient()

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={mainTheme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<TasksListUser />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
