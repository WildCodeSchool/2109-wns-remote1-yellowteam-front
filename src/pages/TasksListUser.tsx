/* eslint-disable react/no-array-index-key */

import React, { useState, ReactElement, useEffect } from 'react'
import useAppState from 'src/hooks/useAppState'
import { Box, Text, useToast } from '@chakra-ui/react'
import { io } from 'socket.io-client'
import {
  useGetTasksUserFilteredByStatusQuery,
  Status,
  useGetUserTasksListQuery,
} from '../generated/graphql'
import UserNavBar from '../components/UserNavBar'
import Header from '../molecules/Header'
import BoardContent from '../components/BoardContent'
import UserBoardHeader from '../molecules/UserBoardHeader'

const socket = io('http://localhost:5000', {
  reconnectionDelayMax: 10000,

  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  },
  transports: ['websocket'],
})

const TasksListUser = (): ReactElement => {
  const toast = useToast()

  const { user } = useAppState()
  const { data, loading } = useGetUserTasksListQuery({
    variables: { id: user.id },
  })

  const [selectedTitle, setSelectedTitle] = useState<string | undefined>(() =>
    data?.user.projects.length ? data?.user.projects[0].title : undefined
  )

  useEffect(() => {
    socket.emit('connection', { test: 'test', user: 'test' }, () =>
      console.log('super ca passe')
    )

    socket.on('notification', (message: any) => {
      toast({ title: message.message })
    })

    return () => {
      socket.emit('disconnection')
      socket.off()
    }
  }, [])

  const emmitNotification = (message: string) =>
    socket.emit(
      'task-complete',
      {
        message,
        status: 'TASK COMPLETE',
      },
      () => console.log('message sent')
    )

  const { data: dataTicketsNotStarted, loading: loadingTasksNotStarted } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.NotStarted } },
        filterUser: { id: { equals: user.id } },
        filterProject: { title: { equals: selectedTitle } },
      },
    })

  const { data: dataTicketsInProgress, loading: loadingTasksInProgress } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.InProgress } },
        filterUser: { id: { equals: user.id } },
        filterProject: { title: { equals: selectedTitle } },
      },
    })

  const { data: dataFinishedTickets, loading: loadingTasksFinished } =
    useGetTasksUserFilteredByStatusQuery({
      variables: {
        filterTask: { status_task: { equals: Status.Fihished } },
        filterUser: { id: { equals: user.id } },
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
