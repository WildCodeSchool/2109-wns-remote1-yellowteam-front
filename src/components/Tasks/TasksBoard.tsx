/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import { Status } from 'src/generated/graphql'
import useProjectTasks from 'src/hooks/useProjectTasks'
import DoneList from './Done.list'
import InProgressList from './Inprogress.list'
import TodoList from './Todo.list'

interface IBoardContent {
  projectId: string
}

const MotionFlex = motion(Flex)

const TasksBoard = ({ projectId }: IBoardContent): ReactElement => {
  const { tasks } = useProjectTasks(projectId)

  const doneTasks = tasks.filter((task) => task.status_task === Status.Fihished)
  const inProgressTasks = tasks.filter(
    (task) => task.status_task === Status.InProgress
  )
  const todoTasks = tasks.filter(
    (task) => task.status_task === Status.NotStarted
  )

  return (
    <MotionFlex
      justifyContent="space-between"
      padding="48px 172px 10px 72px"
      overflowX="hidden"
      height="100%"
    >
      <TodoList todoTasks={todoTasks} />
      <InProgressList inProgressTasks={inProgressTasks} />
      <DoneList doneTasks={doneTasks} />
    </MotionFlex>
  )
}

export default TasksBoard
