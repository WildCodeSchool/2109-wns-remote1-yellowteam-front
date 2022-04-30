/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { useMemo } from 'react'
import { Column } from 'react-table'
import { useGetManagerProjectsQuery } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import ProjectStatusChip from './ProjectStatusChip'

const useProjectTableData = () => {
  const { userId } = useAppState()

  const { data, loading: loadingProjects } = useGetManagerProjectsQuery({
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

  const Data = useMemo(
    () =>
      data
        ? data.projects.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            status: <ProjectStatusChip status={item.status_project} />,
          }))
        : [],
    [data?.projects]
  )

  const columns: Column<any>[] = useMemo(
    () => [
      {
        Header: 'NAME',
        accessor: 'title',
      },
      {
        Header: 'DESCRIPTION',
        accessor: 'desctiption',
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
