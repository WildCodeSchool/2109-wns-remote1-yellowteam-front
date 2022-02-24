import { useMemo } from 'react'
import { Status, useGetProjectQuery } from 'src/generated/graphql'

const useProjectTasks = (projectId: string | undefined) => {
    const { data, loading } = useGetProjectQuery({
      variables: { id: projectId! },
      skip: projectId === undefined,
    })
  
    const tasks = useMemo(() => data?.project.tasks, [data])
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