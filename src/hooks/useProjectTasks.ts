import {
  GetTasksByProjectQuery,
  useGetTasksByProjectQuery,
} from 'src/generated/graphql'

interface UseProjectTasks {
  tasks: GetTasksByProjectQuery['tasks']
  loading: boolean
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
    skip: !!projectId,
  })
  return { tasks: data?.tasks || [], loading }
}

export default useProjectTasks
