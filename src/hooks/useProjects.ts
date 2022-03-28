import useAppState from 'src/hooks/useAppState'
import { useGetUserProjectsQuery } from '../generated/graphql'

const useProjects = () => {
  const { userId } = useAppState()
  const { data, loading, error } = useGetUserProjectsQuery({
    variables: { userId },
    skip: !userId,
  })

  return {
    projects: data?.projects,
    loading,
    error,
  }
}

export default useProjects
