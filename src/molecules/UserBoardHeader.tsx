import React, { ReactElement } from 'react'
import { Flex, Text, Box, Select, Checkbox } from '@chakra-ui/react'

interface IBackLogHeader {
  titleList: string[]
  setSelectedTitleCallBack: (title: string) => void
  selectedTitle: string | undefined
}

const UserBoardHeader = ({
  titleList,
  setSelectedTitleCallBack,
  selectedTitle,
}: IBackLogHeader): ReactElement => (
  <Box marginLeft="69px">
    <Flex
      flexDirection="row"
      alignItems="center"
      mb="33px"
      mr="95px"
      justifyContent="space-between"
    >
      <Text textStyle="h2">{selectedTitle}</Text>
      <Checkbox colorScheme="red" fontFamily="Avenir" fontWeight="800">
        Assigned only to me
      </Checkbox>
    </Flex>
    <Select
      fontFamily="Avenir"
      fontWeight="800"
      width="320px"
      bg="white"
      value={selectedTitle}
      onChange={(event) => setSelectedTitleCallBack(event.target.value)}
    >
      {titleList.map((title) => (
        <option key={title} value={title}>
          {`Projet ${title}`}
        </option>
      ))}
    </Select>
  </Box>
)

export default UserBoardHeader
