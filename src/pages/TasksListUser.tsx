import React from 'react'
import { Flex } from '@chakra-ui/react'
import UserNavBar from '../components/UserNavBar'
import Header from '../components/Header'

interface ITasksListUser {
  userName: string
}

const TasksListUser = ({ userName }: ITasksListUser): JSX.Element => (
  <Flex>
    <UserNavBar />
    <Header userName={userName} />
  </Flex>
)

export default TasksListUser
