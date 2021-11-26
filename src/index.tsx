import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import { client } from './services/graphql'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
