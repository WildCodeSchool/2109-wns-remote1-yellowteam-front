import React, { ReactElement } from 'react'
import { Flex, Text, Box, Select } from '@chakra-ui/react'
import { GetUserProjectsQuery } from 'src/generated/graphql'

interface IProps {
  selectedProjectId: string | undefined
  setSelectedProjectId: (id: string) => void
  projects: GetUserProjectsQuery['projects'] | undefined
}

const UserBoardHeader = ({
  selectedProjectId,
  setSelectedProjectId,
  projects,
}: IProps): ReactElement => (
  <Box w="100%" marginY="50px">
    <Flex
      my="15px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text textStyle="h2">Select a project</Text>
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
