import React from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'
import SearchInput from 'src/components/UI/SearchInput'

interface IHeader {
  userName: string
}

const Header = ({ userName }: IHeader): JSX.Element => (
  <Flex
    marginY="50px"
    width="100%"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex>
      <Text height="fit-content" fontSize="36px">
        👋🏻
      </Text>
      <Text textStyle="h1" height="fit-content">
        &nbsp; &nbsp; Welcome {userName}
      </Text>
    </Flex>
    <SearchInput />
  </Flex>
)

export default Header
