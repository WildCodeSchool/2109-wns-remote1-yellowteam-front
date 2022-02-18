import React from 'react'
import { Flex, Box, Switch } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import ProjectIcon from 'src/static/svg/ProjectIcon'
import TasksIcon from '../static/svg/TasksIcon'
import mainTheme from '../theme/mainTheme'
import UserIcon from '../static/svg/UserIcon'
import BellIcon from '../static/svg/BellIcon'
import SignOutIcon from '../static/svg/SignOutIcon'

const UserNavBar = (): JSX.Element => {
  const navigate = useNavigate()
  const { dispatchLogout } = useAppState()

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
      position="fixed"
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
        data-testid="notifications-button"
        onClick={() => setTab('notifications')}
      >
        <BellIcon
          color={
            location.pathname.includes('notifications')
              ? mainTheme.colors.orange
              : mainTheme.colors.deactivatedGrey
          }
        />
      </Box>
      <Box as="button" data-testid="sign-out-button" onClick={dispatchLogout}>
        <SignOutIcon color={mainTheme.colors.deactivatedGrey} />
      </Box>
      <Switch />
    </Flex>
  )
}

export default UserNavBar
