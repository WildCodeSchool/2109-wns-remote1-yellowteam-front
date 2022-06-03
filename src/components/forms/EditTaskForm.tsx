/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import {
  Box,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  useBoolean,
  useToast,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import useAppState from 'src/hooks/useAppState'
import { validationTaskUpdate } from 'src/formResolvers/yupResolver'
import { FieldValues, useForm } from 'react-hook-form'
import {
  GetTaskDetailsQuery,
  useUpdateTaskMutation,
} from 'src/generated/graphql'
import DatePicker from 'react-datepicker'
import { yupResolver } from '@hookform/resolvers/yup'
import InputWithError from './InputWithError'
import { Dates } from '../../pages/Project'

interface IProps {
  task: GetTaskDetailsQuery['task'] | undefined
}

export default function EditTaskForm({ task }: IProps): JSX.Element {
  const [isEditable, setIsEditable] = useState(false)
  const [isDisabled, setIsDisabled] = useBoolean()

  const { userId, user } = useAppState()
  const [dates, setDates] = useState<Dates>({
    startDate: new Date(),
    endDate: new Date(),
    dueDate: new Date(),
  })
  console.log('task', task)

  const handleRadioChange = (e: string) => {
    if (e === 'true') {
      setIsDisabled.off()
    } else {
      setIsDisabled.on()
    }
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationTaskUpdate),
    criteriaMode: 'all',
  })

  // todo create is UserUpdateAccessTask

  const [updateTask, { loading: updateTaskLoading }] = useUpdateTaskMutation()
  const toast = useToast()

  async function onSubmit({
    title,
    description,
    start_date,
    end_date,
  }: FieldValues): Promise<void | null> {
    start_date = JSON.stringify(
      dates.startDate
        ?.toString()
        .replace('(Central European Standard Time)', '')
    )
    end_date = JSON.stringify(
      dates.endDate?.toString().replace('(Central European Standard Time)', '')
    )
    try {
      await updateTask({
        variables: {
          data: {
            title: { set: !title ? task?.title : title },
            description: {
              set: !description ? task?.description : description,
            },
            start_date: {
              set: !start_date ? task?.start_date : start_date,
            },
            end_date: {
              set: !end_date ? task?.end_date : end_date,
            },
          },
          where: { id: task?.id },
        },
      })
      console.log('test 1')
    } catch (error) {
      toast({
        title: 'error changing task',
      })
      console.error(error)
    } finally {
      setIsEditable(false)
      reset()
    }
  }

  return (
    <>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
      >
        <HStack spacing={10}>
          <VStack justifyContent="flex-start" alignItems="start" spacing={2}>
            <FormLabel>Title</FormLabel>
            <InputWithError
              type="text"
              errors={errors}
              name="title"
              isEditable={isEditable}
              register={register}
              defaultValue={task?.title}
            />

            <FormLabel>Description</FormLabel>
            <InputWithError
              type="text"
              errors={errors}
              name="description"
              isEditable={isEditable}
              register={register}
              defaultValue={task?.description}
            />
          </VStack>

          <VStack justifyContent="flex-end" alignItems="start" spacing={2}>
            <FormLabel>Start date</FormLabel>
            <DatePicker
              selected={dates.startDate}
              onChange={(d) => setDates({ ...dates, startDate: d })}
              dateFormat="dd/MM/yyyy"
            />

            <FormLabel>End date</FormLabel>
            <DatePicker
              selected={dates.endDate}
              onChange={(d) => setDates({ ...dates, endDate: d })}
              dateFormat="dd/MM/yyyy"
            />
          </VStack>
        </HStack>
        <HStack>
          <Button
            my={5}
            onClick={handleSubmit(onSubmit)}
            isLoading={updateTaskLoading}
            variant="action"
          >
            SAVE
          </Button>
          <Button
            isDisabled={isEditable}
            my={5}
            onClick={() => setIsEditable((c) => !c)}
            variant="info"
          >
            EDIT
          </Button>
        </HStack>
      </Box>
    </>
  )
}
