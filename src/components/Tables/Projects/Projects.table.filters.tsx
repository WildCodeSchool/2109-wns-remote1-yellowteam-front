import { Flex, RadioGroup, Stack, Radio, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Status } from 'src/generated/graphql'

export default function ProjectsTableFilters(): JSX.Element {
  const [value, setValue] = useState('1')

  return (
    <Flex mb={2} w="full" justifyContent="space-between" alignItems="center">
      <Flex>
        <Text mx={2}>Filter by </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value={Status.NotStarted}>Not started</Radio>
            <Radio value={Status.InProgress}>In progress</Radio>
            <Radio value={Status.Fihished}>Finished</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </Flex>
  )
}
