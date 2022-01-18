import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import mainTheme from './theme/mainTheme'
import Card from './components/card'
import Placeholder from './static/svg/Placeholder'
import Tag from './components/Tags'
import store from './redux/store'
import Home from './pages'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ChakraProvider theme={mainTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
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
    </Provider>
  )
}

export default App
