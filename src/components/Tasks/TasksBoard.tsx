/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Flex } from '@chakra-ui/react'
import { ReactElement, useCallback } from 'react'
import { Status } from 'src/generated/graphql'
import useProjectTasks from 'src/hooks/useProjectTasks'
import customScrollbar from 'src/styles/customScrollbar'

import TaskList from './Task.list'

interface IBoardContent {
  projectId: string
}

const TasksBoard = ({ projectId }: IBoardContent): ReactElement => {
  const { tasks } = useProjectTasks(projectId)

  const taskSwitch = {
    [Status.Fihished]: tasks.filter(
      (task) => task.status_task === Status.Fihished
    ),
    [Status.InProgress]: tasks.filter(
      (task) => task.status_task === Status.InProgress
    ),
    [Status.NotStarted]: tasks.filter(
      (task) => task.status_task === Status.NotStarted
    ),
  }
  const taskListArray = Object.values(Status)

  const taskListName = useCallback((status: Status): string => {
    return (
      status.charAt(0).toUpperCase() +
      status.slice(1).split('_').join(' ').toLowerCase()
    )
  }, [])

  return (
    <Flex
      direction={['column', 'column', 'column', 'column', 'row']}
      justifyContent="space-between"
      zIndex={0}
      mt={10}
      h="full"
      overflowY="auto"
      sx={customScrollbar}
    >
      {taskListArray.map((status) => (
        <TaskList
          key={status}
          name={taskListName(status)}
          status={status}
          tasks={taskSwitch[status]}
        />
      ))}
    </Flex>
  )
}

export default TasksBoard
