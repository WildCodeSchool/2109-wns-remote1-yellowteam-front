import React from 'react'
import { Flex, Box, Switch } from '@chakra-ui/react'
import TasksIcon from '../static/svg/TasksIcon'
import mainTheme from '../theme/mainTheme'
import UserIcon from '../static/svg/UserIcon'
import BellIcon from '../static/svg/BellIcon'
import SignOutIcon from '../static/svg/SignOutIcon'

const UserNavBar = (): JSX.Element => (
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
    <Box as="button" data-testid="tasks-button">
      <TasksIcon color={mainTheme.colors.deactivatedGrey} />
    </Box>
    <Box as="button" data-testid="user-icon-button">
      <UserIcon color={mainTheme.colors.deactivatedGrey} />
    </Box>
    <Box as="button" data-testid="notifications-button">
      <BellIcon color={mainTheme.colors.deactivatedGrey} />
    </Box>
    <Box as="button" data-testid="sign-out-button">
      <SignOutIcon color={mainTheme.colors.deactivatedGrey} />
    </Box>
    <Switch />
  </Flex>
)

export default UserNavBar
