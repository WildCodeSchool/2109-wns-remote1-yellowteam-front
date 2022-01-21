import React, { ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import {
  Status,
  useGetTasksUserFilteredByStatusQuery,
} from 'src/generated/graphql'
import BoardTicketsStatus from '../molecules/BoardTicketsStatus'
import Card from './Card'
import Tag from '../molecules/Tags'

interface IBoardContent {
  selectedProjectTitle: string | undefined
  user: IUser
}

const BoardContent = ({
  selectedProjectTitle,
  user,
}: IBoardContent): ReactElement => {
  const { data: dataTicketsNotStarted, loading: loadingTasksNotStarted } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.NotStarted } },
        filterUser: { id: { equals: user.id } },
        filterProject: { title: { equals: selectedProjectTitle } },
      },
    })

  const { data: dataTicketsInProgress, loading: loadingTasksInProgress } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.InProgress } },
        filterUser: { id: { equals: user.id } },
        filterProject: { title: { equals: selectedProjectTitle } },
      },
    })

  const { data: dataFinishedTickets, loading: loadingTasksFinished } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.Fihished } },
        filterUser: { id: { equals: user.id } },
        filterProject: { title: { equals: selectedProjectTitle } },
      },
    })

  return (
    <Flex justifyContent="space-between" margin="48px 172px 10px 72px">
      <Flex flexDirection="column">
        <BoardTicketsStatus
          title="Queue"
          numberOfTickets={
            dataTicketsNotStarted
              ? dataTicketsNotStarted.users[0].projects[0]?.tasks.length
              : 0
          }
        />
        {dataTicketsNotStarted?.users[0].projects[0]?.tasks.length
          ? dataTicketsNotStarted.users[0].projects.map((p) =>
              p.tasks.map((t) => (
                <Card
                  key={t.id}
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
          numberOfTickets={
            dataTicketsInProgress
              ? dataTicketsInProgress.users[0].projects[0]?.tasks.length
              : 0
          }
        />
        {dataTicketsInProgress?.users[0].projects[0]?.tasks.length
          ? dataTicketsInProgress.users[0].projects.map((p) =>
              p.tasks.map((t) => (
                <Card
                  key={t.id}
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
          numberOfTickets={
            dataFinishedTickets
              ? dataFinishedTickets.users[0].projects[0]?.tasks.length
              : 0
          }
        />
        {dataFinishedTickets?.users[0].projects[0]?.tasks.length
          ? dataFinishedTickets.users[0].projects.map((p) =>
              p.tasks.map((t) => (
                <Card
                  key={t.id}
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
}

export default BoardContent
