/* eslint-disable no-unneeded-ternary */
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
  Spinner,
  Center,
} from '@chakra-ui/react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import customScrollbar from 'src/styles/customScrollbar'
import ProjectsTableFilters from './Projects.table.filters'
import TableFooter from './Table.footer'
import useProjectTableData from './ProjectTable.data'
import IndeterminateCheckbox from '../TableCheckbox'

const sortBy = [{ id: 'title' }, { id: 'description' }, { id: 'status' }]

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
    setSortBy,
    previousPage,
    setPageSize,
  } = useTable(
    { columns, data: tableData, initialState: { sortBy } },
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

  if (loadingProjects)
    return (
      <Center w="full" h="full">
        <Spinner />
      </Center>
    )

  return (
    <CustomBox
      mt={5}
      w="full"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      flexGrow={1}
    >
      <ProjectsTableFilters />

      <CustomBox
        sx={customScrollbar}
        variant="rounded"
        w="full"
        h="-webkit-fit-content"
        minH="670px"
        maxH="670px"
        overflowY="auto"
      >
        <Table
          position="relative"
          {...getTableProps()}
          overflow="hidden"
          rounded={12}
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    onClick={() => {
                      const desc =
                        column.isSortedDesc === true
                          ? undefined
                          : column.isSortedDesc === false
                          ? true
                          : false
                      setSortBy([{ id: column.id, desc }, ...sortBy])
                    }}
                    py={5}
                    px={4}
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
                    <Td px={4} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </CustomBox>

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
    </CustomBox>
  )
}

export default ProjectTable
