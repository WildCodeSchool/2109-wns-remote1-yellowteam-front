import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <div className="App">hello world</div>
    </ChakraProvider>
  )
}

export default App
