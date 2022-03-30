import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/molecules/BoardTicketsStatus'
import Tag from '../../molecules/Tags'
import MotionFlex from '../Motion/MotionFlex'
import Card from './Task.card'

type Props = {
  todoTasks: GetTasksByProjectQuery['tasks']
}

export default function TodoList({ todoTasks }: Props): JSX.Element {
  if (!todoTasks) return <Spinner />

  const { dispatchSetHoveredList } = useBoardState()

  const handleHover = () => dispatchSetHoveredList(Status.NotStarted)

  return (
    <MotionFlex onMouseEnter={handleHover} flexDirection="column" height="100%">
      <BoardTicketsStatus title="Queue" numberOfTickets={todoTasks.length} />
      {todoTasks.map((t) => (
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
