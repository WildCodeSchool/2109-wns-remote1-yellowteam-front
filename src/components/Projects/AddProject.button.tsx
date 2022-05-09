import { Button, Icon, useDisclosure } from '@chakra-ui/react'
import { AiOutlineFolderAdd } from 'react-icons/ai'
import CreateProjectModal from '../Modals/CreateProjectModal'

export default function AddProjectButton(): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} variant="action">
        <Icon mr={2} as={AiOutlineFolderAdd} w={5} h={5} /> Add Project
      </Button>
      <CreateProjectModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
