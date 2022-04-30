/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  Spinner,
} from '@chakra-ui/react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import ProjectsTableFilters from './Projects.table.filters'
import TableFooter from './Table.footer'
import useProjectTableData from './ProjectTable.data'
import IndeterminateCheckbox from '../TableCheckbox'

export const ProjectTable = (): JSX.Element => {
  const { columns, loadingProjects, tableData } = useProjectTableData()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    selectedFlatRows,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    { columns, data: tableData },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((col) => [
        {
          id: 'selection',

          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),

          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...col,
      ])
    }
  )

  if (loadingProjects) return <Spinner />

  return (
    <Flex
      w="full"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      flexGrow={1}
    >
      <Flex my={2} w="full" justifyContent="space-between" alignItems="center">
        <ProjectsTableFilters />
      </Flex>
      <Table
        position="relative"
        {...getTableProps()}
        overflow="hidden"
        roundedTop={5}
        h="full"
      >
        <Thead bg="gray.200">
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  p={2}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td p={2} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <TableFooter
        selectedFlatRows={selectedFlatRows}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageOptions={pageOptions}
      />
    </Flex>
  )
}

export default ProjectTable
