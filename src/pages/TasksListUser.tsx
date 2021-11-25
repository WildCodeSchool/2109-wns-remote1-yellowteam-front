import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useGetUserTasksListQuery } from '../generated/graphql'
import UserNavBar from '../components/UserNavBar'
import Header from '../molecules/Header'
import UserBackLogHeader from '../molecules/UserBackLogHeader'
import BackLogCore from '../components/BackLogCore'

const TasksListUser = () => {
  const { data, error, loading } = useGetUserTasksListQuery({
    variables: { id: '7a795c3f-bf67-4f8e-98f0-124eb1704920' },
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Oops ! An error happened</Text>

  return (
    <Box height="inherit">
      <UserNavBar />
      <Box marginLeft="69px" height="100%">
        <Header userName={data!.user.first_name} />
        <UserBackLogHeader
          titleList={data!.user.projects.map((p) => p.title)}
        />
        <BackLogCore />
      </Box>
    </Box>
  )
}

export default TasksListUser
