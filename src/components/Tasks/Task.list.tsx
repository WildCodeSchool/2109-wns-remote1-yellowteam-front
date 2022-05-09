import { Box, Spinner } from '@chakra-ui/react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/components/molecules/BoardTicketsStatus'
import Tag from '../molecules/Tags'
import Card from './Task.card'

type Props = {
  tasks: GetTasksByProjectQuery['tasks']
  name: string
  status: Status
}

export default function TaskList({ tasks, name, status }: Props): JSX.Element {
  const { dispatchSetHoveredList } = useBoardState()
  const handleHover = () => dispatchSetHoveredList(status)

  if (!tasks) return <Spinner />

  return (
    <Box
      display="flex"
      border={2}
      position="relative"
      p={5}
      w={['full', 'full', '30%']}
      minWidth="-webkit-fit-content"
      borderColor="gray.400"
      borderStyle="dashed"
      onMouseEnter={handleHover}
      my={[5, 5, 0, 0]}
      flexDirection="column"
      height="full"
      rounded={10}
    >
      <BoardTicketsStatus title={name} numberOfTickets={tasks.length} />
      {tasks.map((t) => (
        <Card
          task={t}
          key={t.id}
          tag={
            <Tag textColor="darkGreen" tagColor="lightGreen" text="feature" />
          }
          title={t.title}
        />
      ))}
    </Box>
  )
}
