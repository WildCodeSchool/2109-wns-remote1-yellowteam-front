/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  Image,
  useToast,
} from '@chakra-ui/react'
import WhitePannel from 'src/components/WhitePannel'
import { useParams } from 'react-router-dom'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { FieldValues, useForm } from 'react-hook-form'
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from 'src/generated/graphql'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ProjectDescription from 'src/components/molecules/ProjectDetails/ProjectDescription'
import ProjectDetails from 'src/components/molecules/ProjectDetails/ProjectDetails'
import TasksAccomplished from 'src/components/molecules/ProjectDetails/TasksAccomplished'
import TeamMembers from 'src/components/molecules/ProjectDetails/TeamMembers'
import TimeSpentOnProject from 'src/components/molecules/ProjectDetails/TimeSpentOnProject'
import convertMillisecondsToHours from 'src/utils/convertMillisecondsToHours'
import getActualTimeAvailable from 'src/utils/getActualTimeAvailable'
import convertHoursToDays from 'src/utils/convertHoursToDays'
import EditIcon from 'src/static/svg/Edit'

const ModifyProject = (): ReactElement => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const { projectId } = useParams()
  const [isError, setIsError] = useState({
    description: false,
    timeDetails: false,
    users: false,
  })
  const toast = useToast()

  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId as string },
    skip: projectId === undefined,
  })

  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false)
  const [
    isDescriptionModificationVisible,
    setIsDescriptionModificationVisible,
  ] = useState(false)

  const [
    isTimeOnProjectModificationVisible,
    setIsTimeOnProjectModificationVisible,
  ] = useState(false)
  const { handleSubmit, register, reset } = useForm()

  const [uptadeproject, { loading: updateProjectLoading }] =
    useUpdateProjectMutation({ notifyOnNetworkStatusChange: true })

  const onSubmitDescription = async ({
    description,
  }: FieldValues): Promise<void> => {
    try {
      await uptadeproject({
        variables: {
          data: { description: { set: description } },
          projectId: { id: projectId },
        },
      })
      toast({
        title: 'Project description updated.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (e) {
      setIsError({ ...isError, description: true })
    }
    setIsDescriptionModificationVisible(false)
    reset()
  }

  const onSubmitChangeTimeSpent = async ({
    total_time_spent,
  }: FieldValues): Promise<void> => {
    const nbTime = parseInt(total_time_spent, 10)
    try {
      await uptadeproject({
        variables: {
          data: { total_time_spent: { set: nbTime } },
          projectId: { id: projectId },
        },
      })
      toast({
        title: 'Time spent on project updated.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setIsTimeOnProjectModificationVisible(false)
    } catch (e) {
      setIsError({ ...isError, timeDetails: true })
    }
    reset()
  }

  const deleteUser = async (id: string): Promise<void> => {
    await uptadeproject({
      variables: {
        data: {
          users: { disconnect: [{ id }] },
        },
        projectId: { id: projectId },
      },
      onCompleted: (): void => {
        toast({
          title: 'User deleted from project.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        reset()
      },
    })
  }

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  if (!data) return <WhitePannel close={false}>No project here</WhitePannel>
  const timeStartDate = new Date(data.project?.start_date).getTime()
  const timeEndDate = new Date(data.project?.end_date).getTime()
  const timeSpent = data.project?.total_time_spent

  const timeAvailable = timeEndDate - timeStartDate

  const hoursAvailable = convertMillisecondsToHours(timeAvailable)

  const totalHoursAvailableOnProject = getActualTimeAvailable(hoursAvailable)

  const percentageTimeSpent =
    ((timeSpent as number) / totalHoursAvailableOnProject) * 100
  const rest = 100 - percentageTimeSpent

  const dataDoughnutChart = {
    labels: [],
    datasets: [
      {
        label: 'Time spent on project',
        data: [percentageTimeSpent, rest],
        backgroundColor: ['#009A96', '#EDF2F7'],
        borderColor: ['#009A96', '#EDF2F7'],
        borderWidth: 1,
      },
    ],
  }
  const optionsDoughnutChart = { cutout: 60 }

  const onSubmitAddUser = async ({ email }: FieldValues): Promise<void> => {
    try {
      await uptadeproject({
        variables: {
          data: { users: { connect: [{ email: email as string }] } },
          projectId: { id: projectId },
        },
      })
      toast({
        title: 'User added to the project.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setIsFormAddUserVisible(false)
    } catch (e) {
      setIsError({ ...isError, users: true })
      toast({
        title: 'User could not be added to the project.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    reset()
  }

  return (
    <WhitePannel close title={data.project?.title}>
      <Box paddingBottom={5} width="250px">
        <Image
          src={data.project?.owner.avatar}
          display="flex"
          flexDirection="column"
          style={mainTheme.section.userSmallAvatar}
        />
      </Box>
      <Box overflow="auto" height="24rem">
        <Box pt={5}>
          <Flex justifyContent="space-between">
            <ProjectDescription
              data={data}
              handleSubmit={handleSubmit}
              isDescriptionModificationVisible={
                isDescriptionModificationVisible
              }
              isError={isError.description}
              onSubmitDescription={onSubmitDescription}
              register={register}
              showDescriptionModificationVisible={(value: boolean) =>
                setIsDescriptionModificationVisible(value)
              }
              hideDescriptionModificationVisible={(value: boolean) =>
                setIsDescriptionModificationVisible(value)
              }
              updateProjectLoading={updateProjectLoading}
            />
            <ProjectDetails
              data={data}
              handleSubmit={handleSubmit}
              showTimeOnProjectModificationVisible={(value: boolean) =>
                setIsTimeOnProjectModificationVisible(value)
              }
              isTimeOnProjectModificationVisible={
                isTimeOnProjectModificationVisible
              }
              onSubmitChangeTimeSpent={onSubmitChangeTimeSpent}
              register={register}
              totalHoursAvailableOnProject={totalHoursAvailableOnProject}
              updateProjectLoading={updateProjectLoading}
              hideModifyTimeButton={(value: boolean) =>
                setIsTimeOnProjectModificationVisible(value)
              }
              isError={isError.timeDetails}
            />
          </Flex>
          <Flex
            pt={5}
            width="100%"
            // minWidth={['5rem', '10rem', '20rem', '27rem']}
            justifyContent="space-between"
          >
            <TeamMembers
              data={data}
              deleteUser={deleteUser}
              handleSubmit={handleSubmit}
              isError={isError.users}
              isFormAddUserVisible={isFormAddUserVisible}
              onSubmitAddUser={onSubmitAddUser}
              register={register}
              setIsFormAddUserVisible={setIsFormAddUserVisible}
              updateProjectLoading={updateProjectLoading}
              hideAddUserButton={(value: boolean) =>
                setIsFormAddUserVisible(value)
              }
            />
            {/* <InvitePeopleModal /> */}
            <TimeSpentOnProject
              dataDoughnutChart={dataDoughnutChart}
              optionsDoughnutChart={optionsDoughnutChart}
            />
          </Flex>
          <Flex>
            <TasksAccomplished />

            <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
              <Flex alignItems="center">
                <Text textStyle="titleWhiteBoard">Project details</Text>
                <Button
                  variant="ghost "
                  onClick={() => setIsTimeOnProjectModificationVisible(true)}
                >
                  <EditIcon />
                </Button>
              </Flex>
              {isTimeOnProjectModificationVisible ? (
                <FormControl>
                  <Flex paddingTop={3}>
                    <FormLabel htmlFor="total_time_spent" />
                    <Input
                      id="total_time_spent"
                      type="text"
                      height="30px"
                      width="40%"
                      placeholder="Enter hours"
                      {...register('total_time_spent')}
                    />
                    <Button
                      ml={3}
                      backgroundColor={mainTheme.colors.orange}
                      color="white"
                      isLoading={updateProjectLoading}
                      type="submit"
                      height="30px"
                      width="auto"
                      onClick={handleSubmit(onSubmitChangeTimeSpent)}
                    >
                      Ok
                    </Button>
                  </Flex>
                </FormControl>
              ) : (
                <Flex alignItems="center">
                  <Text textStyle="body">Total time spent:</Text>
                  <Text textStyle="bodyGreenBold" ml={2}>
                    {convertHoursToDays(data.project?.total_time_spent)}
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
    </WhitePannel>
  )
}

export default ModifyProject
