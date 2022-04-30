/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, HStack, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { client } from 'src/App'
import {
  GetManagerProjectsDocument,
  useUpdateManyProjectsMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import DeleteProjectAlert from '../Alert/DeleteProject.alert'
import ProjectsDeleteButton from './Projects/Projects.delete.button'

type Props = {
  pageOptions: any
  pageIndex: any
  pageSize: any
  canPreviousPage: any
  canNextPage: any
  pageCount: any
  setPageSize: any
  gotoPage: any
  previousPage: any
  nextPage: any
  selectedFlatRows: any
}

export default function TableFooter({
  pageOptions,
  pageIndex,
  pageSize,
  selectedFlatRows,
  canPreviousPage,
  canNextPage,
  pageCount,
  setPageSize,
  gotoPage,
  previousPage,
  nextPage,
}: Props): JSX.Element {
  const cancelRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { userId } = useAppState()

  const [updateProject, { loading }] = useUpdateManyProjectsMutation({
    onCompleted: () => {
      client.query({
        query: GetManagerProjectsDocument,
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
      })
    },
    refetchQueries: [GetManagerProjectsDocument],
  })

  const handleDeleteProject = () => {
    updateProject({
      variables: {
        data: {
          is_disabled: {
            set: true,
          },
        },
        where: {
          id: {
            in: selectedFlatRows.map((item: any) => item.original.id),
          },
        },
      },
    })
  }

  return (
    <Box
      my={2}
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className="pagination"
    >
      <Box>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pSize) => (
            <option key={pSize} value={pSize}>
              Show {pSize}
            </option>
          ))}
        </select>
      </Box>
      <HStack>
        <DeleteProjectAlert
          DeleteButton={ProjectsDeleteButton}
          cancelRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          loading={loading}
          onSubmit={handleDeleteProject}
        />
        <Button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </Button>{' '}
        <Button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </Button>{' '}
        <Button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </Button>{' '}
        <Button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </Button>{' '}
      </HStack>
    </Box>
  )
}
