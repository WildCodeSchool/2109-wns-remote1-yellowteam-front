import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import mainTheme from './theme/mainTheme'
import Card from './components/Card'
import Placeholder from './static/svg/Placeholder'
import TasksListUser from './pages/TasksListUser'
import Tag from './components/Tags'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={mainTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<TasksListUser />} />
        </Routes>
        <Card
          title="je suis un titre"
          photo={<Placeholder />}
          tag={
            <Tag
              tagColor={mainTheme.colors.lightRed}
              text="bug"
              textColor={mainTheme.colors.darkRed}
            />
          }
        />
      </Router>
    </ChakraProvider>
  )
}

export default App
