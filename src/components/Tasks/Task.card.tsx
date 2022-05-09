import React, { ReactElement, useState } from 'react'
import { Box, Text, Flex, useToast, useColorMode } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useBoardState from 'src/hooks/useBoardState'
import {
  GetTasksByProjectDocument,
  GetTasksByProjectQuery,
  Status,
  useUpdateTaskStatusMutation,
} from 'src/generated/graphql'

import PlaceholderIcon from '../../static/svg/PlaceholderIcon'
import TaskMenu from './Task.menu'
import { MotionCardBox } from '../Motion'

interface ICard {
  title: string
  photo?: ReactElement
  tag: ReactElement
  task: GetTasksByProjectQuery['tasks'][number]
}

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
  const { colorMode } = useColorMode()

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
    <MotionCardBox
      pointerEvents={isDragging ? 'none' : 'all'}
      cursor="pointer"
      layout
      drag
      position="relative"
      onDragStart={() => setDragging(true)}
      onDragEnd={handleDrop}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 3px 3px rgba(0,0,0,0.15)',
        zIndex: 999,
      }}
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.600'}
      minWidth="218px"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
    >
      <Flex
        position="relative"
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text noOfLines={2}>{title}</Text>
        <TaskMenu />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="24px"
        mt="12px"
      >
        {tag}
        <Box m="12px 4px">{photo}</Box>
      </Flex>
    </MotionCardBox>
  )
}

export default Card
