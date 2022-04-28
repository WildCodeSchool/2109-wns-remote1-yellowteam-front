import React from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'
import NotificationsHOC from '../Notifictions/NotificationsHOC'

interface IHeader {
  userName: string
}

const Header = ({ userName }: IHeader): JSX.Element => (
  <Flex width="full" alignItems="center" justifyContent="space-between">
    <Flex>
      <Text fontSize="36px">👋🏻</Text>
      <Text textStyle="h1" height="fit-content">
        &nbsp; &nbsp; Welcome {userName}
      </Text>
    </Flex>
    <Flex alignItems="center" as="button" data-testid="notifications-button">
      <Input ml={4} width="220px" variant="filled" placeholder="Search" />
      {/* <BellIcon color={mainTheme.colors.greyText} /> */}
      <NotificationsHOC />
    </Flex>
  </Flex>
)

export default Header
