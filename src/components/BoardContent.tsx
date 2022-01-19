/* eslint-disable react/no-array-index-key */

import React, { ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'
import BoardTicketsStatus from '../molecules/BoardTicketsStatus'
import Card from './Card'
import Tag from '../molecules/Tags'
import { ProjectsList } from '../types/ProjectsList'

interface IBoardContent {
  tasksNotStarted: ProjectsList[]
  tasksInProgress: ProjectsList[]
  finishedTasks: ProjectsList[]
}

const BoardContent = ({
  tasksNotStarted,
  tasksInProgress,
  finishedTasks,
}: IBoardContent): ReactElement => (
  <Flex justifyContent="space-between" margin="48px 172px 10px 72px">
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="Queue"
        numberOfTickets={tasksNotStarted[0]?.tasks.length}
      />
      {tasksNotStarted[0]?.tasks.length
        ? tasksNotStarted.map((p, index) =>
            p.tasks.map((t) => (
              <Card
                key={index}
                tag={
                  <Tag
                    textColor="darkGreen"
                    tagColor="lightGreen"
                    text="feature"
                  />
                }
                title={`${t.title.substring(0, 20)}...`}
              />
            ))
          )
        : null}
    </Flex>
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="In Progress"
        numberOfTickets={tasksInProgress[0]?.tasks.length}
      />
      {tasksInProgress[0]?.tasks.length
        ? tasksInProgress.map((p, index) =>
            p.tasks.map((t) => (
              <Card
                key={index}
                tag={
                  <Tag
                    textColor="darkGreen"
                    tagColor="lightGreen"
                    text="feature"
                  />
                }
                title={`${t.title.substring(0)}...`}
              />
            ))
          )
        : null}
    </Flex>
    <Flex flexDirection="column">
      <BoardTicketsStatus
        title="Done"
        numberOfTickets={finishedTasks[0]?.tasks.length}
      />
      {finishedTasks[0]?.tasks.length
        ? finishedTasks.map((p, index) =>
            p.tasks.map((t) => (
              <Card
                key={index}
                tag={
                  <Tag
                    textColor="darkGreen"
                    tagColor="lightGreen"
                    text="feature"
                  />
                }
                title={`${t.title.substring(0)}...`}
              />
            ))
          )
        : null}
    </Flex>
  </Flex>
)

export default BoardContent
