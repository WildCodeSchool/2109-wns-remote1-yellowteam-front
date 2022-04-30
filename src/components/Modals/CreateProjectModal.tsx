/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Box,
  ModalFooter,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Flex,
  useBoolean,
} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import React, { ReactElement, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import {
  GetManagerProjectsDocument,
  Status,
  useCreateProjectMutation,
} from 'src/generated/graphql'
import { ErrorMessage } from '@hookform/error-message'
import { client } from 'src/App'
import useAppState from 'src/hooks/useAppState'
import { Dates } from 'src/pages/Project'
import { validationsCreateProject } from 'src/formResolvers/yupResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import InputWithError from '../forms/InputWithError'

export interface IProps {
  isOpen: boolean
  onClose: () => void
}

const CreateProjectModal = ({ isOpen, onClose }: IProps): ReactElement => {
  const { userId } = useAppState()
  const [dates, setDates] = useState<Dates>({
    startDate: new Date(),
    endDate: new Date(),
    dueDate: new Date(),
  })
  const [isDisabled, setIsDisabled] = useBoolean()
  const [isPrivate, setIsPrivate] = useBoolean()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    resolver: yupResolver(validationsCreateProject),
  })

  const [createProject, { loading }] = useCreateProjectMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted: async () => {
      await client.refetchQueries({
        include: [GetManagerProjectsDocument],
      })
      onClose()
    },
  })

  const onSubmit = (data: FieldValues) => {
    createProject({
      notifyOnNetworkStatusChange: true,
      variables: {
        data: {
          title: data.title,
          description: data.description,
          users: {
            connect: [{ id: userId }],
          },
          is_disabled: isDisabled,
          private: isPrivate,
          start_date: JSON.stringify(
            dates.startDate
              ?.toString()
              .replace('(Central European Standard Time)', '')
          ),
          end_date: JSON.stringify(
            dates.endDate
              ?.toString()
              .replace('(Central European Standard Time)', '')
          ),
          due_date: JSON.stringify(
            dates.dueDate
              ?.toString()
              .replace('(Central European Standard Time)', '')
          ),
          status_project: Status.NotStarted,
          total_time_spent: 0,
          owner: {
            connect: {
              id: userId,
            },
          },
        },
      },
    })
    reset()
  }

  const handleRadioChange = (e: string) => {
    if (e === 'true') {
      setIsDisabled.off()
    } else {
      setIsDisabled.on()
    }
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="70%">
        <ModalHeader>Create a new project for your team</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
            <FormLabel htmlFor="title">Project name</FormLabel>

            <InputWithError
              my={2}
              errors={errors}
              isEditable
              placeholder="Name of your project"
              register={register}
              type="text"
              aria-label="title"
              name="title"
            />

            <FormLabel my={2} htmlFor="description">
              Project description
            </FormLabel>

            <InputWithError
              my={2}
              errors={errors}
              name="description"
              aria-label="description"
              isEditable
              register={register}
              type="text"
              placeholder="Short project description"
            />
            <FormLabel my={2} htmlFor="is_disabled">
              Project visibility
            </FormLabel>
            <ErrorMessage
              errors={errors}
              name="is_disabled"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
            <RadioGroup
              data-testid="is_disabled"
              marginBottom="1.2rem"
              {...register('is_disabled', {
                required: 'Project visibility is required',
              })}
              onChange={handleRadioChange}
            >
              <Stack direction="column">
                <Radio value="true">Visible</Radio>
                <Radio value="false">Invisible</Radio>
              </Stack>
            </RadioGroup>
            <FormLabel htmlFor="private">Project privacy</FormLabel>
            <ErrorMessage
              errors={errors}
              name="private"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
            <RadioGroup
              data-testid="private"
              marginBottom="1.2rem"
              {...register('private', {
                required: 'Project privacy is required',
              })}
              onChange={setIsPrivate.toggle}
            >
              <Stack direction="column">
                <Radio value="true">Public</Radio>
                <Radio value="false">Private</Radio>
              </Stack>
            </RadioGroup>
            <FormLabel htmlFor="start_date">Start date</FormLabel>
            <ErrorMessage
              errors={errors}
              name="start_date"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
            <Box marginBottom="1.2rem" data-testid="start_date">
              <DatePicker
                selected={dates.startDate}
                onChange={(d) => setDates({ ...dates, startDate: d })}
                dateFormat="dd/MM/yyyy"
              />
            </Box>
            <FormLabel htmlFor="end_date">End date</FormLabel>
            <ErrorMessage
              errors={errors}
              name="end_date"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
            <Box marginBottom="1.2rem" data-testid="end_date">
              <DatePicker
                selected={dates.endDate}
                onChange={(d) => setDates({ ...dates, endDate: d })}
                dateFormat="dd/MM/yyyy"
              />
            </Box>

            <FormLabel htmlFor="due_date">Due date</FormLabel>
            <ErrorMessage
              errors={errors}
              name="due_date"
              render={({ message }) => <Text color="red">{message}</Text>}
            />
            <Box data-testid="due_date">
              <DatePicker
                selected={dates.dueDate}
                onChange={(d) => setDates({ ...dates, dueDate: d })}
                dateFormat="dd/MM/yyyy"
              />
            </Box>

            <Flex justifyContent="center">
              <Button
                data-testid="submit"
                marginBottom="1.2rem"
                marginTop="20px"
                type="submit"
                color="white"
                isLoading={loading}
                variant="action"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default CreateProjectModal
