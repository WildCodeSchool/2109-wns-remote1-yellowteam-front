import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { GetTasksByProjectQuery, Status } from 'src/generated/graphql'
import useBoardState from 'src/hooks/useBoardState'
import BoardTicketsStatus from 'src/components/molecules/BoardTicketsStatus'
import Tag, { TagColor, tagColorSwitch } from '../molecules/Tags'
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
    <MotionFlex
      border={2}
      p={5}
      borderColor="gray.400"
      borderStyle="dashed"
      onMouseEnter={handleHover}
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
            <Tag
              textColor="white"
              tagColor={tagColorSwitch[t.status_task]}
              text="feature"
            />
          }
          title={t.title}
        />
      ))}
    </MotionFlex>
  )
}
