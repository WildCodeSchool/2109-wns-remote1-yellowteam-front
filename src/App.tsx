import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import mainTheme from './theme/mainTheme'
import TasksListUser from './pages/TasksListUser'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={mainTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<TasksListUser userName="Lily" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
