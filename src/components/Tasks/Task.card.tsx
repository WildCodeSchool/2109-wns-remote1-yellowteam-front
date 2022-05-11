/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import {
  Flex,
  useToast,
  useColorMode,
  Input,
  Button,
  Image,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useBoardState from 'src/hooks/useBoardState'
import {
  GetTasksByProjectDocument,
  GetTasksByProjectQuery,
  Status,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
} from 'src/generated/graphql'
import { FieldValues, useForm } from 'react-hook-form'
import PlaceholderIcon from '../../static/svg/PlaceholderIcon'
import TaskMenu from './Task.menu'
import { MotionCardBox } from '../Motion'

interface ICard {
  title: string
  photo?: ReactElement
  tag: ReactElement
  task: GetTasksByProjectQuery['tasks'][number]
}

const Card = ({ tag, title, task }: ICard): ReactElement => {
  const toast = useToast()
  const [isDragging, setDragging] = useState(false)
  const { projectId } = useParams()
  const { hoveredList } = useBoardState()
  const { colorMode } = useColorMode()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isEditable, setIsEditable] = useState(false)
  const { handleSubmit, register, setValue } = useForm()

  const [updateTask] = useUpdateTaskMutation()

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

  useEffect(() => {
    setValue('title', title)
  }, [task])

  const handleDrop = () => {
    updateTaskStatus()
    setDragging(false)
  }

  const handleToggleEdit = () => {
    setIsEditable(true)
  }

  const onSubmit = async (data: FieldValues) => {
    updateTask({
      variables: {
        where: {
          id: task.id,
        },
        data: {
          title: {
            set: data.title,
          },
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTask: {
          ...task,
          title: data.title,
        },
      },
    })
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (buttonRef.current && e.key === 'Enter') {
      buttonRef.current.click()
      setIsEditable(false)
    }
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
      minWidth={['150px', '110px', '120px', '130px', '150px']}
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginY="10px"
    >
      <Flex
        position="relative"
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Input
          onKeyDown={handlePressEnter}
          border={isEditable ? '1px solid #ccc' : 'none'}
          isReadOnly={!isEditable}
          onDoubleClick={handleToggleEdit}
          {...register('title')}
          noOfLines={2}
          onBlur={() => {
            if (buttonRef.current) {
              buttonRef.current.click()
              setIsEditable(false)
            }
          }}
        />
        <Button
          ref={buttonRef}
          onClick={handleSubmit(onSubmit)}
          visibility="hidden"
        />
        <TaskMenu task={task} />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="24px"
        mt="12px"
      >
        {tag}
        {task.user && task.user.avatar ? (
          <Image
            rounded={100}
            w={10}
            h={10}
            objectFit="cover"
            src={task.user.avatar}
          />
        ) : (
          <PlaceholderIcon />
        )}
      </Flex>
    </MotionCardBox>
  )
}

export default Card
