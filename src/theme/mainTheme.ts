import { extendTheme } from '@chakra-ui/react'

const mainTheme = extendTheme({
  textStyles: {
    // you can also use responsive styles
    h1: {
      fontSize: ['32', '36'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    h2: {
      fontSize: ['22', '24'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    body: {
      fontSize: '13',
      color: '#38383A',
      fontFamily: 'Avenir',
      fontWeight: '300',
    },
  },
  colors: {
    orange: '#F69826',
    textPrimary: '#38383A',
    mediumGreyText: '#4E4F54',
    greyText: '#9FA1A5',
    deactivatedGrey: '#BEBDC0',
    superLightGrey: '#EBECF0',
    teal: '#009A96',
    lightTeal: '#A4DFDC',
    darkRed: '#B63F46',
    lightRed: '#FFF0F0',
    darkGreen: '#1D9446',
    lightGreen: '#EBF5ED',
    darkBrown: '#B47539', 
    lightBrown: '#FCECE4'
  },
})

export default mainTheme
