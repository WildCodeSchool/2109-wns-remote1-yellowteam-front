import { Flex, Text } from '@chakra-ui/react'
import React, { ReactElement, useMemo } from 'react'
import { Status, useGetProjectQuery } from 'src/generated/graphql'
import BoardTicketsStatus from '../molecules/BoardTicketsStatus'
import Tag from '../molecules/Tags'
import Card from './Card'

const useProjectTasks = (projectId: string | undefined) => {
  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId! },
    skip: projectId === undefined,
  })

  const tasks = useMemo(() => data?.project.tasks, [data])
  const tasksNotStarted = useMemo(
    () => tasks?.filter((t) => t.status_task === Status.NotStarted),
    [tasks]
  )
  const tasksInProgress = useMemo(
    () => tasks?.filter((t) => t.status_task === Status.InProgress),
    [tasks]
  )
  const tasksFinished = useMemo(
    () => tasks?.filter((t) => t.status_task === Status.Fihished),
    [tasks]
  )

  return { tasks, loading, tasksNotStarted, tasksInProgress, tasksFinished }
}

interface IBoardContent {
  projectId: string | undefined
}

const TasksBoard = ({ projectId }: IBoardContent): ReactElement => {
  const { tasksNotStarted, tasksInProgress, tasksFinished } =
    useProjectTasks(projectId)

  if (!projectId) return <Text>No project tasks to show</Text>
  return (
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
                taskId={t.id}
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
                taskId={t.id}
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
                taskId={t.id}
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
}

export default TasksBoard
