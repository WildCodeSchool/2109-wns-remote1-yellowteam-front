import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/molecules/BoardTicketsStatus'
import Tag from '../../molecules/Tags'
import MotionFlex from '../Motion/MotionFlex'
import Card from './Task.card'

type Props = {
  doneTasks: GetTasksByProjectQuery['tasks']
}

export default function DoneList({ doneTasks }: Props): JSX.Element {
  if (!doneTasks) return <Spinner />
  const { dispatchSetHoveredList } = useBoardState()

  const handleHover = () => dispatchSetHoveredList(Status.Fihished)

  return (
    <MotionFlex onMouseEnter={handleHover} flexDirection="column" height="100%">
      <BoardTicketsStatus title="Done" numberOfTickets={doneTasks.length} />
      {doneTasks.map((t) => (
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
