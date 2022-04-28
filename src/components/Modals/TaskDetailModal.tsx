/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/naming-convention */

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Spinner,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import customProperties from 'src/definitions/chakra/theme/mainTheme'
import {
  TaskUpdateInput,
  useUpdateTaskMutation,
  useGetSingleSelfTasksQuery,
  Status,
} from 'src/generated/graphql'
import Tag, { TagColor } from '../molecules/Tags'

export interface IProps {
  isOpen: boolean
  taskId: string
  onClose: () => void
}

type FormData = {
  description: string
  title: string
  is_disabled: boolean
  total_time_spent: number
}

type FormInputs = Omit<
  TaskUpdateInput,
  | 'user'
  | 'id'
  | 'comments'
  | 'created_at'
  | 'end_date'
  | 'files'
  | 'private'
  | 'project'
  | 'start_date'
  | 'status_task'
  | 'total_time_spent'
  | 'updated_at'
>

const TaskeDetailModal = ({
  isOpen,
  onClose,
  taskId,
}: IProps): ReactElement => {
  console.log('task id:', taskId)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const [isEditDescriptionActive, setIsEditDescriptionActive] =
    React.useState<boolean>(false)

  const [isEditTitleActive, setIsEditTitleActive] =
    React.useState<boolean>(false)

  const [isEditTotalTimeSpentActive, setIsEditTotalTimeSpentActive] =
    React.useState<boolean>(false)

  const [sendUpdate] = useUpdateTaskMutation({
    onError: (err) => {
      console.log('err => ', err)
    },
    refetchQueries: ['GetSingleSelfTasks'],
  })

  const { data, loading } = useGetSingleSelfTasksQuery({
    variables: { where: { id: taskId } },
    onCompleted: (response) => {
      const {
        __typename,
        end_date,
        start_date,
        created_at,
        comments,
        user,
        ...rest
      } = response.task
      if (response) {
        Object.entries(rest).forEach(([key, value]) => {
          setValue(key as keyof FormData, value)
        })
      }
    },
  })
  if (loading || !data) return <Spinner />

  const saveCardToDB = (formData: FormData) => {
    const initialValue: { [k in keyof FormInputs]: { set: unknown } } = {}

    const updateCard: TaskUpdateInput = Object.keys(formData).reduce(
      (accumulateur: any, k: any) => ({
        ...accumulateur,
        [k]: { set: formData[k as keyof FormInputs] },
      }),
      initialValue
    )

    sendUpdate({
      variables: {
        where: {
          id: taskId,
        },
        data: {
          ...updateCard,
        },
      },
    })
  }

  const onSubmit = async (formData: FormData) => {
    saveCardToDB(formData)
    console.log('formData => ', formData)
  }

  const tagText = {
    [Status.Fihished]: 'Finished',
    [Status.InProgress]: 'In progress',
    [Status.NotStarted]: 'Not started',
  }

  const tagColor = {
    [Status.Fihished]: TagColor.lightGreen,
    [Status.InProgress]: TagColor.orange,
    [Status.NotStarted]: TagColor.lightRed,
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent backgroundColor="#FFFFFF" borderRadius="10">
          <ModalHeader>
            <Flex display="flex" flexDirection="row">
              <Box flexDirection="column">
                <Text flexDirection="row" textStyle="h4">
                  {data?.task.title}
                </Text>
                <Box flexDirection="row" marginTop="10px">
                  <Flex>
                    <Tag
                      text={tagText[data.task.status_task]}
                      textColor="white"
                      tagColor={tagColor[data.task.status_task]}
                    />
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <ModalCloseButton
              color={customProperties.colors.greyText}
              size="lg"
            />
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskeDetailModal
