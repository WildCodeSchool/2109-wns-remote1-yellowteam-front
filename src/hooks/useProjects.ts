import { ApolloError } from '@apollo/client'
import useAppState from 'src/hooks/useAppState'
import {
  useGetUserProjectsQuery,
  GetUserProjectsQuery,
} from '../generated/graphql'

interface UseProjectsHook {
  projects: GetUserProjectsQuery['projects'] | undefined
  loading: boolean
  error: ApolloError | undefined
}

const useProjects = (): UseProjectsHook => {
  const { userId } = useAppState()
  const { data, loading, error } = useGetUserProjectsQuery({
    variables: {
      where: {
        users: {
          some: {
            id: {
              equals: userId,
            },
          },
        },
      },
    },
    skip: !userId,
  })

  return {
    projects: data?.projects,
    loading,
    error,
  }
}

export default useProjects
