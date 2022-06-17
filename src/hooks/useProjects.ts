import { ApolloError } from '@apollo/client'
import { useDispatch } from 'react-redux'
import useAppState from 'src/hooks/useAppState'
import { setSelectedProject } from 'src/redux/actions'
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
  const dispatch = useDispatch()
  const { userId } = useAppState()
  const { data, loading, error } = useGetUserProjectsQuery({
    variables: {
      where: {
        OR: [
          {
            project_owner_id: {
              equals: userId,
            },
          },
          {
            users: {
              some: {
                id: {
                  equals: userId,
                },
              },
            },
          },
        ],
      },
    },
    onCompleted: (res) => {
      dispatch(setSelectedProject(res.projects[0].id))
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
