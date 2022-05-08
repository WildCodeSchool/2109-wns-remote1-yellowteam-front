import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import DotsIcon from 'src/static/svg/DotsIcon'

export default function TaskMenu(): JSX.Element {
  return (
    <Menu>
      <MenuButton>
        <DotsIcon />
      </MenuButton>
      <MenuList position="relative" zIndex="overlay">
        <MenuItem position="relative" zIndex="overlay">
          Download
        </MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}
