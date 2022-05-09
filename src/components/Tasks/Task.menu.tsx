import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import DotsIcon from 'src/static/svg/DotsIcon'

export default function TaskMenu(): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Menu closeOnSelect placement="top">
      <MenuButton as={Button} onClick={onOpen}>
        <DotsIcon />
      </MenuButton>
      {isOpen && (
        <MenuList onMouseLeave={onClose} position="relative" zIndex="overlay">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Assign me</MenuItem>
          <MenuItem _hover={{ backgroundColor: 'red.400' }} bg="red">
            Delete
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  )
}
