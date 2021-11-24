import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import mainTheme from './theme/mainTheme'
import Card from './components/card'
import Placeholder from './static/svg/Placeholder'
import TasksListUser from './pages/TasksListUser'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={mainTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<TasksListUser />} />
        </Routes>
        <Card title="je suis un titre" photo={<Placeholder />} tag="" />
      </Router>
    </ChakraProvider>
  )
}

export default App
