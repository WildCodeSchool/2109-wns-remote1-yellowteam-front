/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Column } from 'react-table'
import { useGetManagerProjectsQuery } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import useFilterState from 'src/hooks/useFilterState'
import ProjectStatusChip from './ProjectStatusChip'

const useProjectTableData = () => {
  const { userId } = useAppState()
  const { status, owned } = useFilterState()

  const { data, loading: loadingProjects } = useGetManagerProjectsQuery({
    variables: {
      where: {
        users: {
          some: {
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

  const Data = useMemo(
    () =>
      data
        ? data.projects
            .filter((project) => {
              return project.status_project === status || status === undefined
            })
            .filter((project) => {
              if (owned) {
                return project.project_owner_id === userId
              }
              return true
            })
            .map((item) => ({
              id: item.id,
              title: (
                <Link key={item.id} to={`/projects/${item.id}/modify`}>
                  <Text w="150px" textDecor="underline">
                    {item.title}
                  </Text>
                </Link>
              ),
              description: (
                <Text key={item.id} isTruncated minW="150px" maxW="150px">
                  {item.description}
                </Text>
              ),
              status: <ProjectStatusChip status={item.status_project} />,
            }))
        : [],
    [data?.projects, status, owned]
  )

  const columns: Column<any>[] = useMemo(
    () => [
      {
        Header: 'NAME',
        accessor: 'title',
      },
      {
        Header: 'DESCRIPTION',
        accessor: 'description',
      },
      {
        Header: 'STATUS',
        accessor: 'status',
      },
    ],
    []
  )

  return { columns, tableData: Data, loadingProjects }
}

export default useProjectTableData
