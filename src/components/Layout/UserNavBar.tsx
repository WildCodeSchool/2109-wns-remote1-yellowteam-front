import { Box, useColorMode } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import navLinks from 'src/config/navLinks'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import DarkModeToggle from 'react-dark-mode-toggle'
import mainTheme from '../../definitions/chakra/theme/mainTheme'
import SignOutButton from '../Assets/SignOutButton'

const UserNavBar = (): JSX.Element => {
  const navigate = useNavigate()
  const { toggleColorMode, colorMode } = useColorMode()

  const location = useLocation()

  return (
    <CustomBox
      width="66px"
      display="flex"
      variant="navBar"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      z-index="1"
    >
      {navLinks.map((link) => (
        <Box
          as="button"
          data-testid={link['data-testid']}
          onClick={() => navigate(link.link)}
        >
          <link.icon
            color={
              location.pathname.includes(link.name)
                ? mainTheme.colors.orange
                : mainTheme.colors.deactivatedGrey
            }
          />
        </Box>
      ))}
      <SignOutButton />
      {/* <Switch onChange={toggleColorMode} /> */}
      <DarkModeToggle
        onChange={toggleColorMode}
        checked={colorMode === 'dark'}
        size={40}
      />
    </CustomBox>
  )
}

export default UserNavBar
