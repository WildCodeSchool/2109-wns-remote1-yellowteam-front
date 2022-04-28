import React, { ReactElement } from 'react'
import { Box, Text, Flex, useDisclosure, Modal } from '@chakra-ui/react'
import PlaceholderIcon from '../static/svg/PlaceholderIcon'
import CardDetails from './CardDetails'
import TaskeDetailModal from './Modals/TaskDetailModal'

/* eslint-disable react/require-default-props */

const Card = ({
  taskId,
  photo = <PlaceholderIcon />,
  tag,
  title,
}: ICard): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      backgroundColor="#FFFFFF"
      width="218px"
      // minHeight="78px"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
      onClick={onOpen}
    >
      <Text noOfLines={2} textStyle="titleTicket">
        {title}
      </Text>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="24px"
        mt="12px"
      >
        <Box>{tag}</Box>
        <Box m="12px 4px">{photo}</Box>
      </Flex>
      <TaskeDetailModal isOpen={isOpen} onClose={onClose} taskId={taskId} />
    </Box>
  )
}

export default Card
