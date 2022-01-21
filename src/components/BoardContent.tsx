import React, { ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'
import { Task } from 'src/types/Task'
import BoardTicketsStatus from '../molecules/BoardTicketsStatus'
import Card from './Card'
import Tag from '../molecules/Tags'

interface IBoardContent {
  tasksInProgress: Task[] | undefined
  tasksFinished: Task[] | undefined
  tasksNotStarted: Task[] | undefined
}

const TasksBoard = ({
  tasksFinished,
  tasksInProgress,
  tasksNotStarted,
}: IBoardContent): ReactElement => (
  <Flex
    justifyContent="space-between"
    margin="48px 172px 10px 72px"
    overflow="auto"
    height="25rem"
  >
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="Queue"
        numberOfTickets={tasksNotStarted ? tasksNotStarted.length : 0}
      />
      {tasksNotStarted?.length
        ? tasksNotStarted.map((t) => (
            <Card
              key={t.id}
              tag={
                <Tag
                  textColor="darkGreen"
                  tagColor="lightGreen"
                  text="feature"
                />
              }
              title={t.title}
            />
          ))
        : null}
    </Flex>
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="In Progress"
        numberOfTickets={tasksInProgress ? tasksInProgress.length : 0}
      />
      {tasksInProgress?.length
        ? tasksInProgress.map((t) => (
            <Card
              key={t.id}
              tag={
                <Tag
                  textColor="darkGreen"
                  tagColor="lightGreen"
                  text="feature"
                />
              }
              title={t.title}
            />
          ))
        : null}
    </Flex>
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="Done"
        numberOfTickets={tasksFinished ? tasksFinished.length : 0}
      />
      {tasksFinished?.length
        ? tasksFinished.map((t) => (
            <Card
              key={t.id}
              tag={
                <Tag
                  textColor="darkGreen"
                  tagColor="lightGreen"
                  text="feature"
                />
              }
              title={t.title}
            />
          ))
        : null}
    </Flex>
  </Flex>
)

export default TasksBoard
