import React, { ReactElement, useState } from 'react'
import { Box, Text, Flex, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import useBoardState from 'src/hooks/useBoardState'
import {
  GetTasksByProjectDocument,
  GetTasksByProjectQuery,
  Status,
  useUpdateTaskStatusMutation,
} from 'src/generated/graphql'
import PlaceholderIcon from '../../static/svg/PlaceholderIcon'

/* eslint-disable react/require-default-props */
interface ICard {
  title: string
  photo?: ReactElement
  tag: ReactElement
  task: GetTasksByProjectQuery['tasks'][number]
}

const MotionBox = motion(Box)

const Card = ({
  photo = <PlaceholderIcon />,
  tag,
  title,
  task,
}: ICard): ReactElement => {
  const toast = useToast()
  const [isDragging, setDragging] = useState(false)
  const { projectId } = useParams()
  const { hoveredList } = useBoardState()

  const [updateTaskStatus] = useUpdateTaskStatusMutation({
    variables: {
      data: {
        status: hoveredList as Status,
        taskId: task.id,
      },
    },
    refetchQueries: [
      {
        query: GetTasksByProjectDocument,
        variables: {
          where: {
            project_id: {
              equals: projectId,
            },
          },
        },
      },
    ],
    optimisticResponse: {
      updateTaskStatus: {
        ...task,
        status_task: hoveredList as Status,
      },
    },
    onError: () => {
      toast({
        status: 'error',
        title: 'Error',
        description: "Error while updating task's status",
        isClosable: true,
      })
    },
  })

  const handleDrop = () => {
    updateTaskStatus()
    setDragging(false)
  }

  return (
    <MotionBox
      pointerEvents={isDragging ? 'none' : 'all'}
      cursor="pointer"
      layout
      drag
      onDragStart={() => setDragging(true)}
      onDragEnd={handleDrop}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 3px 3px rgba(0,0,0,0.15)',
      }}
      whileTap={{
        scale: 1.12,
        boxShadow: '0px 5px 5px rgba(0,0,0,0.1)',
      }}
      backgroundColor="#FFFFFF"
      minWidth="218px"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
    >
      <Text noOfLines={2} textStyle="h3">
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
    </MotionBox>
  )
}

export default Card
