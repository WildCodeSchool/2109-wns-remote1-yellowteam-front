import React, { ReactElement } from 'react'
import { Flex, Text, Box, Select, Checkbox } from '@chakra-ui/react'
import { GetUserProjectsQuery } from 'src/generated/graphql'

interface UserBoardHeaderProps {
  selectedProjectId: string | undefined
  setSelectedProjectId: (id: string) => void
  projects: GetUserProjectsQuery['projects'] | undefined
}

const UserBoardHeader = ({
  selectedProjectId,
  setSelectedProjectId,
  projects,
}: UserBoardHeaderProps): ReactElement => (
  <Box marginLeft="69px">
    <Flex
      flexDirection="row"
      alignItems="center"
      mb="33px"
      mr="95px"
      justifyContent="space-between"
    >
      <Text textStyle="h2">Your tasks</Text>
      <Checkbox colorScheme="red" fontFamily="Avenir" fontWeight="800">
        Assigned only to me
      </Checkbox>
    </Flex>
    <Select
      fontFamily="Avenir"
      fontWeight="800"
      width="320px"
      bg="white"
      value={selectedProjectId}
      onChange={(event) => setSelectedProjectId(event.target.value)}
    >
      {projects?.map((p) => (
        <option key={p.id} value={p.id}>
          {`Projet ${p.title}`}
        </option>
      ))}
    </Select>
  </Box>
)

export default UserBoardHeader
