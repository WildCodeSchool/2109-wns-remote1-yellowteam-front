import React from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'

interface IHeader {
  userName: string
}

const Header = ({ userName }: IHeader): JSX.Element => (
  <Flex
    padding="27px 0px 51px 69px"
    width="100%"
    height="fit-content"
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
    <Input
      width="220px"
      variant="filled"
      placeholder="Search"
      marginRight="95px"
    />
  </Flex>
)

export default Header
