import React from 'react'
import { Flex, Text, Box, Select, Checkbox } from '@chakra-ui/react'

interface IBackLogHeader {
  title: string
}

const UserBackLogHeader = ({ title }: IBackLogHeader): JSX.Element => (
  <Box marginLeft="69px">
    <Flex
      flexDirection="row"
      alignItems="center"
      mb="33px"
      mr="95px"
      justifyContent="space-between"
    >
      <Text textStyle="h2">{title}</Text>
      <Checkbox colorScheme="red" fontFamily="Avenir" fontWeight="800">
        Assigned only to me
      </Checkbox>
    </Flex>
    <Select
      fontFamily="Avenir"
      fontWeight="800"
      width="320px"
      bg="white"
      placeholder="Select a project"
    />
  </Box>
)

export default UserBackLogHeader
