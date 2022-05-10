import React from 'react'
import { Flex, Text, useColorMode } from '@chakra-ui/react'
import DarkModeToggle from 'react-dark-mode-toggle'
import NotificationsHOC from '../Notifications/NotificationsHOC'
import SearchInput from '../Assets/SearchInput'

interface IHeader {
  userName: string
}

const Header = ({ userName }: IHeader): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      direction={['column-reverse', 'column-reverse', 'row', 'row']}
      width="full"
      alignItems={['justify-between', 'justify-between', 'center', 'center']}
      justifyContent={[
        'flex-start',
        'flex-start',
        'space-between',
        'space-between',
      ]}
    >
      <Flex w="50%" my={[2, 2, 0, 0]}>
        <Text fontSize={['12px', '18px', '24px', '36px']}>👋🏻</Text>
        <Text textStyle="h1">&nbsp; &nbsp; Welcome {userName}</Text>
      </Flex>
      <Flex
        w={['full']}
        alignItems="center"
        justifyContent={[
          'space-between',
          'space-between',
          'flex-end',
          'flex-end',
        ]}
        as="button"
        data-testid="notifications-button"
      >
        {/* <SearchInput /> */}
        <DarkModeToggle
          className="switch"
          onChange={toggleColorMode}
          checked={colorMode === 'dark'}
          size={60}
        />
        {/* <Input
          ml={[0, 0, 4, 4]}
          width="220px"
          variant="filled"
          placeholder="Search"
        /> */}
        <NotificationsHOC />
      </Flex>
    </Flex>
  )
}

export default Header
