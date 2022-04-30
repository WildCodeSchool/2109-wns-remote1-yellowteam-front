import React from 'react'
import { Flex, Box, Switch, useColorMode } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import ProjectIcon from 'src/static/svg/ProjectIcon'
import { useMutateLogoutMutation } from 'src/generated/graphql'
import TasksIcon from '../../static/svg/TasksIcon'
import mainTheme from '../../definitions/chakra/theme/mainTheme'
import UserIcon from '../../static/svg/UserIcon'
import SignOutIcon from '../../static/svg/SignOutIcon'

const UserNavBar = (): JSX.Element => {
  const navigate = useNavigate()
  const { dispatchLogout } = useAppState()
  const { colorMode, toggleColorMode } = useColorMode()

  const [mutateLogout] = useMutateLogoutMutation({
    onCompleted: () => dispatchLogout(),
    // eslint-disable-next-line no-console
    onError: (err) => console.log('error', err),
  })

  const setTab = (tab: string) => navigate(`/${tab}`)
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
      <Box
        as="button"
        data-testid="tasks-button"
        onClick={() => setTab('board')}
      >
        <TasksIcon
          color={
            location.pathname.includes('board')
              ? mainTheme.colors.orange
              : mainTheme.colors.deactivatedGrey
          }
        />
      </Box>
      <Box
        as="button"
        data-testid="projects-button"
        onClick={() => setTab('projects')}
      >
        <ProjectIcon
          color={
            location.pathname.includes('projects')
              ? mainTheme.colors.orange
              : mainTheme.colors.deactivatedGrey
          }
        />
      </Box>
      <Box
        as="button"
        data-testid="user-icon-button"
        onClick={() => setTab('profile')}
      >
        <UserIcon
          color={
            location.pathname.includes('profile')
              ? mainTheme.colors.orange
              : mainTheme.colors.deactivatedGrey
          }
        />
      </Box>
      <Box
        as="button"
        data-testid="sign-out-button"
        onClick={() => mutateLogout()}
      >
        <SignOutIcon color={mainTheme.colors.deactivatedGrey} />
      </Box>
      <Switch onChange={toggleColorMode} />
    </Flex>
  )
}

export default UserNavBar
