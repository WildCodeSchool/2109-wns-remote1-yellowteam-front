const customProperties = {
  config: { initialColorMode: 'light', useSystemColorMode: false },

  textStyles: {
    // you can also use responsive styles
    titleLogin: {
      fontSize: ['32', '42', '56', '72'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    loginText: {
      fontSize: ['26', '32', '42'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
      marginLeft: '10px',
      marginRight: '10px',
      textAlign: 'center',
    },
    subText: {
      fontSize: ['12'],
      color: '#38383A',
      fontFamily: 'Avenir',
      textDecoration: 'underline',
      cursor: 'pointer',
      marginLeft: '10px',
      marginRight: '10px',
    },
    h1: {
      fontSize: ['15', '15', '32', '36'],
      fontWeight: '800',
      fontFamily: 'Avenir',
    },
    h2: {
      fontSize: ['12', '15', '22', '24'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    h3: {
      fontSize: ['16', '18'],
      fontWeight: '800',
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    h4: {
      fontSize: ['16', '18'],
      color: '#38383A',
      fontFamily: 'Avenir',
    },
    titleWhiteBoard: {
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
    bodyGreenBold: {
      fontSize: ['12', '14'],
      color: '#009A96',
      fontFamily: 'Avenir',
      fontWeight: '800',
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
      padding: '30px 30px 30px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    userAvatar: {
      height: '150px',
      width: '150px',
      borderRadius: '50%',
    },
    userMediumAvatar: {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
    },
    userSmallAvatar: {
      height: '30px',
      width: '30px',
      borderRadius: '50%',
    },
  },
}

export default customProperties
