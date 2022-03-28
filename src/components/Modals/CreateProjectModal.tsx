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
  Input,
  Box,
  ModalFooter,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import React, { ReactElement } from 'react'
import {
  SubmitHandler,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from 'react-hook-form'
import { ProjectCreateInput } from 'src/generated/graphql'
import mainTheme from 'src/theme/mainTheme'
import { Dates } from 'src/pages/Projects'
import { ErrorMessage } from '@hookform/error-message'

export interface IProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: ProjectCreateInput) => void
  setDates: React.Dispatch<React.SetStateAction<Dates>>
  register: UseFormRegister<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues>
  errors: {
    [x: string]: any
  }
  dates: Dates
  setIsDisabled: {
    readonly on: () => void
    readonly off: () => void
    readonly toggle: () => void
  }
  setIsPrivate: {
    readonly on: () => void
    readonly off: () => void
    readonly toggle: () => void
  }
}

const CreateProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
  dates,
  setDates,
  setIsDisabled,
  setIsPrivate,
  register,
  handleSubmit,
  errors,
}: IProps): ReactElement => (
  <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent minW="70%">
      <ModalHeader>Create a new project for your team</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <form
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          data-testid="form"
        >
          <FormLabel htmlFor="title">Project name</FormLabel>
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => <Text color="red">{message}</Text>}
          />
          <Input
            marginBottom="1.2rem"
            aria-label="title"
            type="text"
            placeholder="Name of your project"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />

          <FormLabel htmlFor="description">Project description</FormLabel>
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => <Text color="red">{message}</Text>}
          />
          <Input
            marginBottom="1.2rem"
            aria-label="description"
            type="text"
            placeholder="Short project description"
            {...register('description', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Minimum length should be 10',
              },
            })}
          />
          <FormLabel htmlFor="is_disabled">Project visibility</FormLabel>
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
            onChange={setIsDisabled.toggle}
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
              width="30%"
              data-testid="submit"
              marginBottom="1.2rem"
              marginTop="20px"
              type="submit"
              color="white"
              backgroundColor={mainTheme.colors.orange}
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
export default CreateProjectModal
