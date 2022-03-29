import { useMemo } from 'react'
import {
  Status,
  GetTasksByProjectQuery,
  useGetTasksByProjectQuery,
} from 'src/generated/graphql'

interface UseProjectTasks {
  tasks: GetTasksByProjectQuery['tasks']
  tasksNotStarted: GetTasksByProjectQuery['tasks']
  loading: boolean
  tasksInProgress: GetTasksByProjectQuery['tasks']
  tasksFinished: GetTasksByProjectQuery['tasks']
}

const useProjectTasks = (projectId: string): UseProjectTasks => {
  const { data, loading } = useGetTasksByProjectQuery({
    variables: {
      where: {
        project_id: {
          equals: projectId,
        },
      },
    },
  })

  const tasks = useMemo(
    () => data?.tasks as GetTasksByProjectQuery['tasks'],
    [data]
  )

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

export default useProjectTasks
