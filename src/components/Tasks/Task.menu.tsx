/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import {
  GetTasksByProjectDocument,
  GetTasksByProjectQuery,
  useAssignUserToTaskMutation,
  useDeleteTaskMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import useBoardState from 'src/hooks/useBoardState'
import DotsIcon from 'src/static/svg/DotsIcon'
import EditPannel from '../Edit/EditPannel'

interface IProps {
  task: GetTasksByProjectQuery['tasks'][number]
}

export default function TaskMenu({ task }: IProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { userId, user } = useAppState()
  const { selectedProject } = useBoardState()
  const [deleteTask] = useDeleteTaskMutation()
  const editRef = useRef<HTMLElement>(null)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const [assignUser] = useAssignUserToTaskMutation({
    variables: {
      where: {
        id: task.id,
      },
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
      },
    },
    optimisticResponse: {
      __typename: 'Mutation',
      updateTask: {
        __typename: 'Task',
        id: task.id,
        user_id: userId,
        user: {
          avatar: user.avatar,
        },
      },
    },
  })

  const handleDelete = () => {
    deleteTask({
      variables: {
        where: {
          id: task.id,
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteTask: {
          id: selectedProject,
        },
      },
      update: (store) => {
        const queryData: any = store.readQuery({
          query: GetTasksByProjectDocument,
          variables: {
            where: {
              project_id: {
                equals: selectedProject,
              },
            },
          },
        })
        const newArray = queryData.tasks.filter((t: any) => t.id !== task.id)
        store.writeQuery({
          query: GetTasksByProjectDocument,
          variables: {
            where: {
              project_id: {
                equals: selectedProject,
              },
            },
          },
          data: {
            tasks: newArray,
          },
        })
      },
    })
  }

  return (
    <Menu closeOnSelect placement="top">
      <MenuButton as={Button} onClick={onOpen}>
        <DotsIcon />
      </MenuButton>
      {isOpen && (
        <MenuList onMouseLeave={onClose} position="relative" zIndex="overlay">
          <MenuItem onClick={() => setIsEditOpen(true)}>
            Edit
            {isEditOpen && (
              <EditPannel setIsEdit={setIsEditOpen} ref={editRef} task={task} />
            )}
          </MenuItem>
          <MenuItem onClick={() => assignUser()}>Assign me</MenuItem>
          <MenuItem
            onClick={handleDelete}
            _hover={{ backgroundColor: 'red.400' }}
            bg="red"
          >
            Delete
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  )
}
