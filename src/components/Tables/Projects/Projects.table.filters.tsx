import {
  Flex,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Checkbox,
} from '@chakra-ui/react'
import { Status } from 'src/generated/graphql'
import AddProjectButton from 'src/components/Projects/AddProject.button'
import useFilterState from 'src/hooks/useFilterState'
import { ChangeEvent } from 'react'

export default function ProjectsTableFilters(): JSX.Element {
  const { dispatchStatus, status, dispatchOwned, owned } = useFilterState()

  return (
    <Flex mb={2} w="full" justifyContent="space-between" alignItems="center">
      <Flex direction="column">
        <Flex>
          <Text fontWeight="bold" mr={4}>
            Filter by
          </Text>
          <RadioGroup onChange={dispatchStatus} value={status}>
            <Stack direction="row">
              <Radio value={Status.NotStarted}>Not started</Radio>
              <Radio value={Status.InProgress}>In progress</Radio>
              <Radio value={Status.Fihished}>Finished</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-start">
        <Text mr={2}>Only show owned projects</Text>
        <Checkbox
          checked={owned}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatchOwned(e.target.checked)
          }}
        />
      </Flex>
      <AddProjectButton />
    </Flex>
  )
}
