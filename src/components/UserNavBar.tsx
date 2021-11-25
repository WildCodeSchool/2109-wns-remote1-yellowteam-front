import React from 'react'
import { Flex } from '@chakra-ui/react'
import TasksIcon from '../static/svg/TasksIcon'
import mainTheme from '../theme/mainTheme'
import UserIcon from '../static/svg/UserIcon'
import BellIcon from '../static/svg/BellIcon'
import SignOutIcon from '../static/svg/SignOutIcon'
import SwitchIcon from '../static/svg/SwitchIcon'

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
    <TasksIcon color={mainTheme.colors.deactivatedGrey} />
    <UserIcon color={mainTheme.colors.deactivatedGrey} />
    <BellIcon color={mainTheme.colors.deactivatedGrey} />
    <SignOutIcon color={mainTheme.colors.deactivatedGrey} />
    <SwitchIcon color={mainTheme.colors.deactivatedGrey} />
  </Flex>
)

export default UserNavBar
