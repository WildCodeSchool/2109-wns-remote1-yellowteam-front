/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'
import {
  TaskUpdateInput,
  useGetSingleSelfTasksQuery,
  useUpdateTaskMutation,
} from 'src/generated/graphql'
import {
  Box,
  Text,
  Flex,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Select,
  Textarea,
  Image,
  Spinner,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { Duration } from 'luxon'

type FormData = {
  description: string
  title: string
  is_disabled: boolean
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

export default function CardDetails({ taskId }: ICard) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const [isEditDescriptionActive, setIsEditDescriptionActive] =
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

  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
    >
      <ModalOverlay />
      <ModalContent maxHeight="90vh" p="25px">
        <ModalHeader>{data?.task.title}</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          {/* Tag and photo */}
          <Flex alignItems="center">
            {/* <Box>{tag}</Box> */}
            <Box ml="12px">
              <Image
                src={data?.task && data?.task.user && data?.task.user.avatar}
              />
            </Box>
          </Flex>

          {/* Description */}
          <Flex flexDirection="column" mt="12px">
            <Flex>
              <Text textStyle="titleTicket" mt="12px">
                Task description
              </Text>
              <IconButton
                variant="unstyled"
                aria-label=""
                icon={<EditIcon />}
                onClick={() => setIsEditDescriptionActive(true)}
              />
            </Flex>
            {isEditDescriptionActive ? (
              <>
                <Textarea
                  // onFocus={}
                  textStyle="body"
                  mt="12px"
                  placeholder="Add a new description"
                  {...register('description')}
                />
                {/* <Flex justifyContent="flex-end">
                  <Button
                    colorScheme="red"
                    size="xs"
                    mt="12px"
                    onClick={() => {
                      setIsEditDescriptionActive(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme="green"
                    size="xs"
                    mt="12px"
                    onClick={() => saveNewDescription()}
                  >
                    Save
                  </Button>
                </Flex> */}
              </>
            ) : (
              <Text textStyle="body" mt="12px">
                {data?.task.description}
              </Text>
            )}
          </Flex>

          {/* Task progress, details and attachments */}
          <Flex justifyContent="space-between" mt="24px" h="150px">
            {/* task progress */}
            <Flex flexDirection="column">
              <Text textStyle="titleTicket">Task progress</Text>
              <CircularProgress
                value={40}
                color="orange"
                mt="12px"
                size="120px"
              >
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Flex>
            {/* task details */}
            <Flex flexDirection="column">
              <Text textStyle="titleTicket">Task progress details</Text>
              <Flex
                mt="12px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text textStyle="body" mr="5px">
                  {' '}
                  Initial time spend estime
                </Text>
                <Select placeholder="Select option" width="150px" h="25px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Flex
                mt="12px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text textStyle="body" mr="5px">
                  {' '}
                  Total time spent
                </Text>
                <Text>
                  {Duration.fromMillis(data?.task.total_time_spent).toFormat(
                    "hh'h' mm'm' ss's'"
                  )}
                </Text>
              </Flex>
            </Flex>
            {/* attachment */}
            <Text textStyle="titleTicket">Attachments</Text>
          </Flex>

          {/* Comments */}
        </ModalBody>
        {/* Footer Buttons */}
        <ModalFooter borderTop="1px" borderColor="gray.200" paddingBottom="0">
          <Button
            variant="outline"
            colorScheme="green"
            onClick={handleSubmit(onSubmit)}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Box>
  )
}
