import React from 'react'
import { Flex, Text, Box, Select, Checkbox } from '@chakra-ui/react'

interface IBackLogHeader {
  titleList: string[]
}

const UserBackLogHeader = ({ titleList }: IBackLogHeader): JSX.Element => (
  <Box marginLeft="69px">
    <Flex
      flexDirection="row"
      alignItems="center"
      mb="33px"
      mr="95px"
      justifyContent="space-between"
    >
      <Text textStyle="h2">TITRE À RECUP DU LOCAL STORAGE?</Text>
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
    >
      {titleList.map((title) => (
        <option value="option">{title}</option>
      ))}
    </Select>
  </Box>
)

export default UserBackLogHeader
