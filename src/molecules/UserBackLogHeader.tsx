/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react'
import { Flex, Text, Box, Select, Checkbox } from '@chakra-ui/react'

interface IBackLogHeader {
  titleList: string[]
}

const UserBackLogHeader = ({ titleList }: IBackLogHeader): JSX.Element => {
  const [titleSelected, setTitleSelected] = useState<string>(titleList[0])

  return (
    <Box marginLeft="69px">
      <Flex
        flexDirection="row"
        alignItems="center"
        mb="33px"
        mr="95px"
        justifyContent="space-between"
      >
        <Text textStyle="h2">{titleSelected}</Text>
        <Checkbox colorScheme="red" fontFamily="Avenir" fontWeight="800">
          Assigned only to me
        </Checkbox>
      </Flex>
      <Select
        fontFamily="Avenir"
        fontWeight="800"
        width="320px"
        bg="white"
        value={titleSelected}
        onChange={(event) => setTitleSelected(event.target.value)}
      >
        {titleList.map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </Select>
    </Box>
  )
}

export default UserBackLogHeader
