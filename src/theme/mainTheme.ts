import { extendTheme } from '@chakra-ui/react'

const mainTheme = extendTheme({
  textStyles: {
    // you can also use responsive styles
    titleLogin: {
      fontSize: ['42', '56', '72'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    loginText: {
      fontSize: ['26', '32', '42'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
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
    titleTicket: {
      fontSize: ['16', '18'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    numberTicket: {
      fontFamily: 'Avenir',
      fontSize: '13px',
      color: '#9FA1A5',
      fontWeight: '800',
    },
    body: {
      fontSize: ['14', '16'],
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
    lightBrown: '#FCECE4',
  },
  section: {
    card: {
      backgroundColor: 'white',
      minHeight: '800px',
      margin: '0px 50px 50px 120px',
      borderRadius: '8px',
      padding: '30px 0px 0px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    userAvatar: {
      height: '150px',
      width: '150px',
      borderRadius: '50%',
    },
  },
})

export default mainTheme
