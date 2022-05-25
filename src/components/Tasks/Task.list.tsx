import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/components/molecules/BoardTicketsStatus'
import { AddIcon } from '@chakra-ui/icons'
import { useCallback, useState } from 'react'
import Tag from '../molecules/Tags'
import Card from './Task.card'
import NewTaskCard from './NewTask.card'

type Props = {
  tasks: GetTasksByProjectQuery['tasks']
  name: string
  status: Status
}

export default function TaskList({ tasks, name, status }: Props): JSX.Element {
  const { dispatchSetHoveredList } = useBoardState()
  const [isCreatingTask, setIsCreatingTask] = useState(false)
  const handleHover = () => dispatchSetHoveredList(status)

  if (!tasks) return <Spinner />

  const taskStatusName = useCallback((taskStatus: Status): string => {
    return (
      taskStatus.charAt(0).toUpperCase() +
      taskStatus.slice(1).split('_').join(' ').toLowerCase()
    )
  }, [])

  return (
    <Box w="full" h="full">
      <Box
        display="flex"
        border={2}
        position="relative"
        p={5}
        h="full"
        minW={['150px', '200px', '200px', '300px']}
        onMouseEnter={handleHover}
        my={[5, 5, 0, 0]}
        mx={[0, 0, 2, 2]}
        flexDirection="column"
        rounded={10}
      >
        <Flex px={3} py={2} justifyContent="space-between">
          <BoardTicketsStatus title={name} numberOfTickets={tasks.length} />
          <Button
            onClick={() => setIsCreatingTask((c) => !c)}
            rounded={4}
            size="xs"
            px={2}
            fontSize={8}
            variant="action"
          >
            <AddIcon fontSize={8} fontWeight="extrabold" mr={1} /> Add Task
          </Button>
        </Flex>
        <NewTaskCard
          setIsCreatingTask={setIsCreatingTask}
          status={status}
          isCreatingTask={isCreatingTask}
        />
        {tasks.map((t) => (
          <Card
            task={t}
            key={t.id}
            tag={
              <Tag
                textColor="darkGreen"
                tagColor="lightGreen"
                text={taskStatusName(t.status_task)}
              />
            }
            title={t.title}
          />
        ))}
      </Box>
    </Box>
  )
}
