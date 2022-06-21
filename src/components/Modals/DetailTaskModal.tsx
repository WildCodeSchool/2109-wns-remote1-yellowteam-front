/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  // useGetAllFillesFromTaskQuery,
  useGetTaskDetailsQuery,
} from 'src/generated/graphql'
import EditTaskForm from '../forms/EditTaskForm'

interface IProps {
  isOpen: boolean
  onClose: () => void
  taskId: string
}

const DetailTaskModal = ({ isOpen, onClose, taskId }: IProps): ReactElement => {
  const { data, loading } = useGetTaskDetailsQuery({
    variables: {
      where: {
        id: taskId,
      },
    },
  })

  if (loading || taskId === 'temporary-id') {
    return <Spinner />
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="70%">
        <ModalHeader>{data?.task.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditTaskForm task={data?.task} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default DetailTaskModal
