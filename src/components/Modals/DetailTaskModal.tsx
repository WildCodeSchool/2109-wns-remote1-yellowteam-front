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
  ModalFooter,
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
  const { data } = useGetTaskDetailsQuery({
    variables: {
      where: {
        id: taskId,
      },
    },
  })

  // const file = useGetAllFillesFromTaskQuery({
  //   variables: {
  //     where: {
  //       id: taskId,
  //     },
  //   },
  // })
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
