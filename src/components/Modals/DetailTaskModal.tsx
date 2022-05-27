/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Box,
  ModalFooter,
  Text,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import {
  useGetAllFillesFromTaskQuery,
  useGetTaskDetailsQuery,
} from 'src/generated/graphql'
import dateFormated from '../../utils/dateFormated'

import ProjectStatusChip from '../Tables/Projects/ProjectStatusChip'

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

  const file = useGetAllFillesFromTaskQuery({
    variables: {
      where: {
        id: taskId,
      },
    },
  })
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="70%">
        <ModalHeader>
          <Box flexDirection="row">
            <Text>{data?.task.title}</Text>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex style={{ flexDirection: 'column', marginBottom: '30px' }}>
            <Box style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Description :</Text>
              {data?.task.description}
            </Box>
          </Flex>
          <Flex
            style={{
              flexDirection: 'row',
              marginBottom: '30px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Box style={{ flexDirection: 'column' }}>
              <Box style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>Start Date :</Text>
                {dateFormated(data?.task.start_date)}
              </Box>
            </Box>
            <Box style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold' }}>Description :</Text>
              {data?.task.description}
            </Box>
            <Box style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold' }}>Description :</Text>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
export default DetailTaskModal
