/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useAppState from 'src/hooks/useAppState'
import { useGetManagerProjectsQuery } from '../generated/graphql'

const useManagerProjects = () => {
  const { userId } = useAppState()
  const { data, loading, error, refetch } = useGetManagerProjectsQuery({
    variables: {
      where: {
        owner: {
          is: {
            id: {
              equals: userId,
            },
          },
        },
        is_disabled: {
          equals: false,
        },
      },
    },
    skip: !userId,
  })
  return {
    projects: data?.projects,
    loading,
    error,
    refetch,
  }
}

export default useManagerProjects
