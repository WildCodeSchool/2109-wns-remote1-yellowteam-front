/* eslint-disable react/no-array-index-key */

import React, { useState, ReactElement } from 'react'
import { Box, Text } from '@chakra-ui/react'
import {
  useGetTasksUserFilteredByStatusQuery,
  Status,
  useGetUserTasksListQuery,
} from '../generated/graphql'
import UserNavBar from '../components/UserNavBar'
import Header from '../molecules/Header'
import BoardContent from '../components/BoardContent'
import UserBoardHeader from '../molecules/UserBoardHeader'

const USER_ID = '396d350c-4837-4fc9-ae5e-dec555080f92'

const TasksListUser = (): ReactElement => {
  const { data, loading } = useGetUserTasksListQuery({
    variables: { id: USER_ID },
  })

  const [selectedTitle, setSelectedTitle] = useState<string | undefined>(
    data?.user.projects[0].title
  )

  const { data: dataTicketsNotStarted, loading: loadingTasksNotStarted } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.NotStarted } },
        filterUser: { id: { equals: USER_ID } },
        filterProject: { title: { equals: selectedTitle } },
      },
    })

  const { data: dataTicketsInProgress, loading: loadingTasksInProgress } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.InProgress } },
        filterUser: { id: { equals: USER_ID } },
        filterProject: { title: { equals: selectedTitle } },
      },
    })

  const { data: dataFinishedTickets, loading: loadingTasksFinished } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.Fihished } },
        filterUser: { id: { equals: USER_ID } },
        filterProject: { title: { equals: selectedTitle } },
      },
    })

  if (
    loadingTasksFinished ||
    loadingTasksInProgress ||
    loadingTasksNotStarted ||
    loading
  )
    return <Text>Loading...</Text>
  //   if (error) return <Text>Oops ! An error happened</Text>
  if (
    !data ||
    !dataTicketsNotStarted ||
    !dataTicketsInProgress ||
    !dataFinishedTickets
  )
    return <Text>No data to show</Text>

  return (
    <Box height="inherit">
      <UserNavBar />
      <Box marginLeft="69px" height="100%">
        <Header userName={data.user.first_name} />
        <UserBoardHeader
          selectedTitle={selectedTitle}
          titleList={data.user.projects.map((p) => p.title)}
          setSelectedTitleCallBack={(title) => setSelectedTitle(title)}
        />
        <BoardContent
          tasksNotStarted={dataTicketsNotStarted.users[0].projects}
          tasksInProgress={dataTicketsInProgress.users[0].projects}
          finishedTasks={dataFinishedTickets.users[0].projects}
        />
      </Box>
    </Box>
  )
}

export default TasksListUser
