/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import { Box, useToast, Text, Button } from '@chakra-ui/react'
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
import { dateFormated } from '../../utils/dateFormated'

export interface ITaskDetail {
  task: GetTaskDetailsQuery['task'] | undefined
}

export default function EditTaskForm({ task }: ITaskDetail): JSX.Element {
  const [isEditable, setIsEditable] = useState(false)

  const { user } = useAppState()
  const [dates, setDates] = useState<Dates>({
    startDate: new Date(),
    endDate: new Date(),
    dueDate: new Date(),
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationTaskUpdate),
    criteriaMode: 'all',
  })

  const isAdminRole = user.role.some((r) => r === 'ADMIN')

  const [updateTask, { loading: updateTaskLoading }] = useUpdateTaskMutation()
  const toast = useToast()

  async function onSubmit({
    title,
    description,
    end_date,
  }: FieldValues): Promise<void | null> {
    // start_date = JSON.stringify(
    //   dates.startDate
    //     ?.toString()
    //     .replace('(Central European Standard Time)', '')
    // )
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
              set: dates.startDate,
            },
            end_date: {
              set: !end_date ? task?.end_date : end_date,
            },
          },
          where: { id: task?.id },
        },
      })
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
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" flex="1" marginRight="50px">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginY="3"
          >
            <Text marginRight="2" fontWeight="bold">
              Title:
            </Text>
            {!isEditable ? (
              <Text>{task?.title}</Text>
            ) : (
              <InputWithError
                type="text"
                errors={errors}
                name="title"
                isEditable={isEditable}
                register={register}
                defaultValue={task?.title}
              />
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginY="3"
          >
            <Text marginRight="2" fontWeight="bold">
              Description:
            </Text>
            {!isEditable ? (
              <Text>{task?.description}</Text>
            ) : (
              <InputWithError
                type="text"
                errors={errors}
                name="description"
                isEditable={isEditable}
                register={register}
                defaultValue={task?.description}
              />
            )}
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" flex="1">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginY="3"
          >
            <Text marginRight="2" fontWeight="bold">
              Start date:
            </Text>
            {!isEditable ? (
              <Text>{dateFormated(task?.start_date)}</Text>
            ) : (
              <DatePicker
                // selected={dates.startDate}
                selected={dates.startDate}
                onChange={(d) => setDates({ ...dates, startDate: d })}
                dateFormat="dd/MM/yyyy"
              />
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginY="3"
          >
            <Text marginRight="2" fontWeight="bold">
              End date:
            </Text>
            {!isEditable ? (
              <Text>{dateFormated(task?.end_date)}</Text>
            ) : (
              <DatePicker
                selected={dates.endDate}
                onChange={(d) => setDates({ ...dates, endDate: d })}
                dateFormat="dd/MM/yyyy"
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <Button
          hidden={!isAdminRole}
          my={5}
          onClick={handleSubmit(onSubmit)}
          isLoading={updateTaskLoading}
          variant="action"
          marginRight="5"
        >
          Submit
        </Button>
        <Button
          hidden={!isAdminRole}
          disabled={updateTaskLoading}
          my={5}
          onClick={() =>
            !isEditable ? setIsEditable(true) : setIsEditable(false)
          }
          variant={!isEditable ? 'info' : 'ghost'}
        >
          {!isEditable ? 'Edit' : 'Cancel'}
        </Button>
      </Box>
    </>
  )
}
