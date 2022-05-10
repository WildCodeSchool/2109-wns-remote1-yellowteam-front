import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import {
  GetTasksByProjectQuery,
  useAssignUserToTaskMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import DotsIcon from 'src/static/svg/DotsIcon'

interface IProps {
  task: GetTasksByProjectQuery['tasks'][number]
}

export default function TaskMenu({ task }: IProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { userId, user } = useAppState()

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

  return (
    <Menu closeOnSelect placement="top">
      <MenuButton as={Button} onClick={onOpen}>
        <DotsIcon />
      </MenuButton>
      {isOpen && (
        <MenuList onMouseLeave={onClose} position="relative" zIndex="overlay">
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={() => assignUser()}>Assign me</MenuItem>
          <MenuItem _hover={{ backgroundColor: 'red.400' }} bg="red">
            Delete
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  )
}
