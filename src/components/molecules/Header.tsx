import React from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'

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
    <Input width="220px" variant="filled" placeholder="Search" />
  </Flex>
)

export default Header
