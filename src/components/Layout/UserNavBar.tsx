import { Flex, Box, Switch } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import navLinks from 'src/config/navLinks.config'
import mainTheme from '../../definitions/chakra/theme/mainTheme'
import SignOutButton from '../Assets/SignOutButton'

const UserNavBar = (): JSX.Element => {
  const navigate = useNavigate()

  const location = useLocation()

  return (
    <Flex
      width="66px"
      backgroundColor="white"
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
      <Switch />
    </Flex>
  )
}

export default UserNavBar
