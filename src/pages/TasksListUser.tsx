import React, { useState, ReactElement } from 'react'
import useAppState from 'src/hooks/useAppState'
import { Box, Text } from '@chakra-ui/react'
import { useGetUserTasksListQuery } from '../generated/graphql'
import Header from '../molecules/Header'
import BoardContent from '../components/BoardContent'
import UserBoardHeader from '../molecules/UserBoardHeader'

const TasksListUser = (): ReactElement => {
  const { user } = useAppState()
  const { data, loading } = useGetUserTasksListQuery({
    variables: { id: user.id },
  })

  const [selectedProjectTitle, setSelectedProjectTitle] = useState<
    string | undefined
  >(() =>
    data?.user.projects.length ? data?.user.projects[0].title : undefined
  )

  if (!data)
    return (
      <Box marginLeft="69px" height="100%">
        <Header userName="" />
        <UserBoardHeader
          selectedTitle=""
          titleList={['']}
          setSelectedTitleCallBack={() => ['']}
        />
        <Text>No data to show</Text>
      </Box>
    )

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={data.user.first_name} />
      <UserBoardHeader
        selectedTitle={selectedProjectTitle}
        titleList={data.user.projects.map((p) => p.title)}
        setSelectedTitleCallBack={(title) => setSelectedProjectTitle(title)}
      />
      <BoardContent selectedProjectTitle={selectedProjectTitle} user={user} />
    </Box>
  )
}

export default TasksListUser
