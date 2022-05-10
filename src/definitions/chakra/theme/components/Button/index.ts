import { ComponentStyleConfig } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  variants: {
    action: (props) => ({
      bg: props.colorMode === 'dark' ? 'orange' : 'orange',
      color: 'white',
      fontWeight: 'bold',
      _hover: {
        bg: 'gray.200',
      },
    }),
    info: (props) => ({
      bg: props.colorMode === 'dark' ? '#00BDF7' : '#4695FC',
      color: 'white',
      fontWeight: 'bold',
      _hover: {
        bg: 'gray.200',
      },
    }),
    _disabled: (props) => ({
      bg: 'black',
      color: props.colorMode === 'dark' ? 'white' : 'black',
    }),
    disabled: (props) => ({
      bg: 'black',
      color: props.colorMode === 'dark' ? 'white' : 'black',
    }),
    table: (props) => ({
      color: props.colorMode === 'dark' ? 'gray.200' : 'black',
      fontWeight: 'bold',
      bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.200',
      _disabled: {
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
    delete: (props) => ({
      bg: props.colorMode === 'dark' ? 'red' : 'red',
      color: 'white',
      fontWeight: 'bold',
      _hover: {
        bg: 'gray.200',
      },
    }),
  },
}
export default Button
