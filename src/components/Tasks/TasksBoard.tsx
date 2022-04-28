/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { Status } from 'src/generated/graphql'
import useProjectTasks from 'src/hooks/useProjectTasks'

import TaskList from './Task.list'

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
    <MotionFlex justifyContent="space-between" w="full" mt={10} height="full">
      <TaskList name="To Do" status={Status.NotStarted} tasks={todoTasks} />
      <TaskList
        name="In Progress"
        status={Status.InProgress}
        tasks={inProgressTasks}
      />
      <TaskList name="Done" status={Status.Fihished} tasks={doneTasks} />
    </MotionFlex>
  )
}

export default TasksBoard
