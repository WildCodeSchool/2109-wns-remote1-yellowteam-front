import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
