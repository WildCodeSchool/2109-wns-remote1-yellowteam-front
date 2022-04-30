/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ProjectTable from 'src/components/Tables/Projects/Projects.table'

export type Dates = {
  startDate: Date | null
  endDate: Date | null
  dueDate: Date | null
}

const Project = (): ReactElement => {
  return (
    <Flex
      direction="column"
      borderRadius={12}
      p={10}
      mt={10}
      w="full"
      h="full"
      bg="white"
      title="Your projects"
    >
      <ProjectTable />
    </Flex>
  )
}

export default Project
