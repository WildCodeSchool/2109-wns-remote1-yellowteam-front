import { ComponentStyleConfig } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  variants: {
    action: (props) => ({
      bg: props.colorMode === 'dark' ? 'gray.600' : 'orange',
      color: 'white',
      fontWeight: 'bold',
      _hover: {
        bg: 'gray.200',
      },
    }),
  },
}
export default Button
