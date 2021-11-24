import React from 'react'
import { ChakraProvider, Text } from '@chakra-ui/react'
import mainTheme from './theme/mainTheme'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={mainTheme}>
      <Text textStyle="h1">hello world</Text>
    </ChakraProvider>
  )
}

export default App
