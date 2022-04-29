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
  Image,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import React, { ReactElement } from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'
import customProperties from 'src/definitions/chakra/theme/mainTheme'
import {
  TaskUpdateInput,
  useUpdateTaskMutation,
  useGetSingleSelfTasksQuery,
  Status,
} from 'src/generated/graphql'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationsTaskUpdate } from 'src/formResolvers/yupResolver'

import Tag, { TagColor } from '../molecules/Tags'
import InputWithError from '../forms/InputWithError'

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
  } = useForm({
    resolver: yupResolver(validationsTaskUpdate),
  })

  const [isEditable, setIsEditable] = React.useState<boolean>(false)

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
  }

  // const onSubmit = async (formData: FormData) => {
  //   saveCardToDB(formData)
  //   // test
  //   onClose()
  //   console.log('formData => ', formData)
  // }

  const onSubmit = async ({
    title,
    description,
  }: FieldValues): Promise<void> => {
    await sendUpdate({
      variables: {
        where: {
          id: taskId,
        },
        data: {
          title: { set: !title ? data.task.title : title },
          description: {
            set: !description ? data.task.description : description,
          },
        },
      },
    })
    setIsEditable(false)
  }

  const tagText = {
    [Status.Fihished]: 'Finished',
    [Status.InProgress]: 'In progress',
    [Status.NotStarted]: 'Not started',
  }

  const tagColor = {
    [Status.Fihished]: TagColor.green,
    [Status.InProgress]: TagColor.orange,
    [Status.NotStarted]: TagColor.dimgray,
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
          {/* Header */}
          <ModalHeader>
            <Flex display="flex" flexDirection="row">
              <Box flexDirection="column">
                <Text flexDirection="row" textStyle="h4">
                  {isEditable ? (
                    <>
                      {/* <Textarea
                        // onFocus={}
                        textStyle="body"
                        {...register('title')}
                      /> */}
                      <InputWithError
                        errors={errors}
                        name="title"
                        isEditable={isEditable}
                        register={register}
                      />
                    </>
                  ) : (
                    <>{data?.task.title}</>
                  )}
                </Text>
                <Box flexDirection="row" marginTop="5px">
                  <Flex alignItems="center">
                    <Tag
                      text={tagText[data.task.status_task]}
                      textColor="white"
                      tagColor={tagColor[data.task.status_task]}
                    />
                    <Box marginLeft="15px" width="25px" height="25px">
                      <Image
                        objectFit="cover"
                        width="full"
                        h="full"
                        borderRadius="100%"
                        src={
                          data?.task &&
                          data?.task.user &&
                          data?.task.user.avatar
                        }
                      />
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <ModalCloseButton
              color={customProperties.colors.greyText}
              size="lg"
            />
          </ModalHeader>

          <ModalBody>
            {/* Description */}
            <Flex display="flex" flexDirection="row">
              <Flex alignItems="center">
                <Text textStyle="h3"> Task description</Text>
              </Flex>
            </Flex>
            <Flex display="flex" flexDirection="row">
              {isEditable ? (
                <>
                  {/* <Textarea
                    // onFocus={}
                    textStyle="body"
                    mt="12px"
                    placeholder="Add a new description"
                    {...register('description')}
                  /> */}
                  <InputWithError
                    errors={errors}
                    name="description"
                    isEditable={isEditable}
                    register={register}
                  />
                </>
              ) : (
                <Text
                  textStyle="body"
                  overflowY="scroll"
                  color={customProperties.colors.greyText}
                >
                  {data?.task.description}
                </Text>
              )}
            </Flex>
            {/* Task Progress & Attachments */}
            {/* <Flex
              display="flex"
              flexDirection="row"
              marginY="30px"
              justifyContent="space-between"
            >
              <Flex flexDirection="column" align="center">
                <Text textStyle="h3"> Task progress</Text>
                <Box marginTop="10px">
                  <CircularProgress value={40} color="orange" size="100px">
                    <CircularProgressLabel fontSize="20px">
                      40%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Flex>
              <Flex flexDirection="column" align="flex-start">
                <Text textStyle="h3"> Task progress details</Text>
                <Box marginTop="10px">
                  <Flex flexDirection="row">
                    <Text textStyle="body">Initial time spent estimee</Text>
                  </Flex>
                  <Flex flexDirection="row">
                    <Text textStyle="body">Total time spent estimee</Text>
                    <Text>
                      {Duration.fromMillis(
                        data?.task.total_time_spent
                      ).toFormat("hh'h' mm'm' ss's'")}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex flexDirection="column" align="flex-start">
                <Text textStyle="h3"> Attachements See all</Text>
                <Box marginTop="10px">
                  <Flex flexDirection="row">
                    <Text>Todo</Text>
                  </Flex>
                  <Flex flexDirection="row">
                    <Text textStyle="body">end date</Text>
                    <Text>{data?.task.end_date.toString()}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex> */}
          </ModalBody>
          <ModalFooter>
            <Button
              mx={5}
              onClick={() => setIsEditable((c) => !c)}
              variant="action"
            >
              EDIT
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              isLoading={loading}
              variant="action"
            >
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskeDetailModal
