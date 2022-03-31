/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
// test-utils.jsx
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
// Import your own reducer
import app from '../redux/slices/app'
import board from '../redux/slices/board'
import apolloClient from '../services/graphql'

const client = apolloClient()

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { app, board }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
