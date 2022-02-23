import useAppState from 'src/hooks/useAppState'
import { useGetManagerProjectsQuery } from '../generated/graphql'

const useManagerProjects = () => {
    const { userId } = useAppState()
    const { data, loading, error, refetch } = useGetManagerProjectsQuery({
      variables: { userId },
      skip: !userId,
    })
  
    return {
      projects: data?.projects,
      loading,
      error,
      refetch
    }
  }

  export default useManagerProjects