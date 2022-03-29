import React from 'react'
import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { CookiesProvider } from 'react-cookie'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import RequireAuth from './components/Auth/RequireAuth'
import routes from './config/routes'

const client = apolloClient()

const MyRoutes = () => useRoutes(routes)

function App(): JSX.Element {
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <ChakraProvider theme={mainTheme}>
          <Router>
            <RequireAuth>
              <MyRoutes />
            </RequireAuth>
          </Router>
        </ChakraProvider>
      </ApolloProvider>
    </CookiesProvider>
  )
}

export default App
