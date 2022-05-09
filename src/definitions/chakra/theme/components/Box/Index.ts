import { ComponentStyleConfig } from '@chakra-ui/react'

const Box: ComponentStyleConfig = {
  baseStyle: (props) => ({
    flexDirection: 'column',
    bg: props.colorMode === 'dark' ? 'gray.200' : 'gray.600',
  }),
  variants: {
    rounded: (props) => ({
      borderRadius: 12,
      bg: props.colorMode === 'light' ? 'white' : 'gray.600',
    }),
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
    navBar: (props) => ({
      bg: props.colorMode === 'light' ? 'white' : 'gray.600',
    }),
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? '#1A202C' : '#F4F6F8',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'solid',
  },
}

export default Box
