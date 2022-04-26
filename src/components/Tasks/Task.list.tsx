import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/molecules/BoardTicketsStatus'
import Tag from '../../molecules/Tags'
import MotionFlex from '../Motion/MotionFlex'
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
    <MotionFlex onMouseEnter={handleHover} flexDirection="column" height="100%">
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
    </MotionFlex>
  )
}
