import { ComponentStyleConfig } from '@chakra-ui/react'

const Input: ComponentStyleConfig = {
  variants: {
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? 'gray.600' : 'darkBlueCustom',
      color: props.colorMode === 'dark' ? 'white' : 'black',
      fontWeight: 'bold',
      _hover: {
        bg: 'gray.200',
      },
    }),
    card: (props) => ({
      bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.200',
      color: props.colorMode === 'dark' ? 'white' : 'black',
      fontWeight: 'bold',
    }),
  },
}

export default Input
