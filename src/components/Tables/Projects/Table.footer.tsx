/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  HStack,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { client } from 'src/App'
import {
  GetManagerProjectsDocument,
  useUpdateManyProjectsMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import DeleteProjectAlert from '../../Alert/DeleteProject.alert'

type Props = {
  pageOptions: any
  pageIndex: number
  pageSize: any
  canPreviousPage: any
  canNextPage: any
  pageCount: number
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
      <Flex alignItems="center" whiteSpace="nowrap" w="full">
        <Text mr={2}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Text>

        <Select
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
        </Select>
      </Flex>
      <DeleteProjectAlert
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        loading={loading}
        onSubmit={handleDeleteProject}
      />
      <HStack ml={2} spacing={0}>
        <Button
          roundedLeft={5}
          variant="table"
          rounded={0}
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </Button>
        <Button
          variant="table"
          rounded={0}
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </Button>
        <Button
          variant="table"
          rounded={0}
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </Button>
        <Button
          roundedRight={5}
          variant="table"
          rounded={0}
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </Button>
      </HStack>
    </Box>
  )
}
