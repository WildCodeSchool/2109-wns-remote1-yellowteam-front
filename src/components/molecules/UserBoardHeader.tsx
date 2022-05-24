import React, { ReactElement } from 'react'
import { Flex, Text, Select } from '@chakra-ui/react'
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
  <Flex
    w="full"
    alignItems="center"
    direction={['column', 'column', 'row', 'row']}
    my={10}
  >
    <Text mr={5}>Select a project</Text>

    <Select
      // fontFamily="Avenir"
      // fontWeight={['normal', 'normal', 'bold']}
      width={['full', 'full', '200px']}
      value={selectedProjectId}
      onChange={(event) => setSelectedProjectId(event.target.value)}
    >
      {projects?.map((p) => (
        <option key={p.id} value={p.id}>
          {`Projet ${p.title}`}
        </option>
      ))}
    </Select>
  </Flex>
)

export default UserBoardHeader
