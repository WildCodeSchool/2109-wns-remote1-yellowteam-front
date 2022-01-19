import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import { client } from './services/graphql'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
)
