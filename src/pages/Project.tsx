/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  useBoolean,
  Spinner,
} from '@chakra-ui/react'
import React, { ReactElement, useEffect, useState } from 'react'
import {
  ProjectCreateInput,
  Status,
  useCreateProjectMutation,
  useGetManagerProjectsQuery,
} from 'src/generated/graphql'
import 'react-datepicker/dist/react-datepicker.css'
import useAppState from 'src/hooks/useAppState'
import AddIcon from 'src/static/svg/AddIcon'
import Delete from 'src/static/svg/Delete'
import Edit from 'src/static/svg/Edit'
import mainTheme from 'src/theme/mainTheme'
import CreateProjectModal from 'src/components/Modals/CreateProjectModal'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'

export type Dates = {
  startDate: Date | null
  endDate: Date | null
  dueDate: Date | null
}

const Project = (): ReactElement => {
  const navigate = useNavigate()

  const [dates, setDates] = useState<Dates>({
    startDate: new Date(),
    endDate: new Date(),
    dueDate: new Date(),
  })
  const [isDisabled, setIsDisabled] = useBoolean()
  const [isPrivate, setIsPrivate] = useBoolean()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, userId } = useAppState()
  const {
    data,
    refetch,
    loading: loadingProjects,
  } = useGetManagerProjectsQuery({
    variables: { userId },
    skip: !userId,
  })
  const [createProject] = useCreateProjectMutation()

  const onSubmit = (data: ProjectCreateInput) => {
    try {
      createProject({
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
    } catch (e) {
      console.log('error creating project', e)
    }
    onClose()
    reset()
  }

  useEffect(() => {
    refetch()
  }, [onSubmit])

  if (!data || !data.projects)
    return (
      <WhitePannel close={false}>
        <Text textStyle="h2">Your projects</Text>
        <Box textAlign="center">
          {loadingProjects ? <Spinner /> : 'No Projects'}
        </Box>
      </WhitePannel>
    )

  return (
    <WhitePannel close={false} title="Your projects">
      <Box height="20rem" overflow="auto">
        {data.projects.map((project) => (
          <Flex
            key={project.id}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex
              _hover={{ cursor: 'pointer' }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <Text textStyle="h3">{project.title} - </Text>
              <Text textStyle="h4">
                &nbsp;{project.due_date.substring(0, 10)}
              </Text>
            </Flex>
            <Flex alignItems="center" ml={30}>
              <Button
                variant="ghost "
                onClick={() => navigate(`/projects/${project.id}/modify`)}
              >
                <Edit />
              </Button>
              <Button variant="ghost">
                <Delete color={mainTheme.colors.mediumGreyText} />
              </Button>
            </Flex>
          </Flex>
        ))}
      </Box>
      <Flex mt={30} justifyContent="center">
        <Button variant="unstyled" onClick={onOpen}>
          <AddIcon />
        </Button>
        <CreateProjectModal
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
          setDates={setDates}
          dates={dates}
          setIsDisabled={setIsDisabled}
          setIsPrivate={setIsPrivate}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Flex>
    </WhitePannel>
  )
}

export default Project
