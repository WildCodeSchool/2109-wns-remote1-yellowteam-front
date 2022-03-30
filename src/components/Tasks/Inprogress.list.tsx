import { Spinner } from '@chakra-ui/react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/molecules/BoardTicketsStatus'
import Tag from '../../molecules/Tags'
import MotionFlex from '../Motion/MotionFlex'
import Card from './Task.card'

type Props = {
  inProgressTasks: GetTasksByProjectQuery['tasks']
}

export default function InProgressList({
  inProgressTasks,
}: Props): JSX.Element {
  if (!inProgressTasks) return <Spinner />

  const { dispatchSetHoveredList } = useBoardState()

  const handleHover = () => dispatchSetHoveredList(Status.InProgress)

  return (
    <MotionFlex onMouseEnter={handleHover} flexDirection="column" height="100%">
      <BoardTicketsStatus
        title="In Progress"
        numberOfTickets={inProgressTasks.length}
      />
      {inProgressTasks.map((t) => (
        <Card
          task={t}
          key={t.id}
          tag={
            <Tag textColor="darkGreen" tagColor="lightGreen" text="feature" />
          }
          title={t.title}
        />
      ))}
    </MotionFlex>
  )
}
