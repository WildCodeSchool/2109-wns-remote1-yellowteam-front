/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  Image,
} from '@chakra-ui/react'
// import { DeleteIcon } from '@chakra-ui/icons'
import WhitePannel from 'src/components/WhitePannel'
import { useNavigate, useParams } from 'react-router-dom'
import AddIcon from 'src/static/svg/AddIcon'
import { FieldValues, useForm } from 'react-hook-form'
import Edit from 'src/static/svg/Edit'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import convertHoursToDays from 'src/utils/convertHoursToDays'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import {
  StringFilter,
  // useDeleteProjectMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
} from 'src/generated/graphql'
import convertMillisecondsToHours from 'src/utils/convertMillisecondsToHours'
import getActualTimeAvailable from 'src/utils/getActualTimeAvailable'

const ModifyProject = (): ReactElement => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const navigate = useNavigate()
  const { projectId } = useParams()
  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId as string },
    skip: projectId === undefined,
  })
  const [deleteProjectData] = useDeleteProjectMutation({
    variables: { projectId: projectId! },
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
    useUpdateProjectMutation()

  const onSubmitAddUser = async ({ email }: FieldValues): Promise<void> => {
    try {
      uptadeproject({
        variables: {
          data: { users: { connect: [{ email: email as string }] } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error adding user to project', e)
    }
    setIsFormAddUserVisible(false)
    reset()
  }

  const deleteProject = (id: string) => {
    deleteProjectData({ variables: { projectId: id } })
    navigate(-1)
  }

  const deleteUser = async (id: string): Promise<void> => {
    try {
      uptadeproject({
        variables: {
          data: {
            users: { delete: [{ id }] },
          },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error deleting user from project', e)
    }
    reset()
  }
  const onSubmitDescription = async ({
    description,
  }: FieldValues): Promise<void> => {
    try {
      uptadeproject({
        variables: {
          data: { description: { set: description } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error changing project description', e)
    }
    setIsDescriptionModificationVisible(false)
    reset()
  }

  const onSubmitChangeTimeSpent = async ({
    total_time_spent,
  }: FieldValues): Promise<void> => {
    const nbTime = parseInt(total_time_spent, 10)
    try {
      uptadeproject({
        variables: {
          data: { total_time_spent: { set: nbTime } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error changing project description', e)
    }
    setIsTimeOnProjectModificationVisible(false)
    reset()
  }

  useEffect(() => {
    refetch()
  }, [onSubmitAddUser, onSubmitDescription, onSubmitChangeTimeSpent])

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

  return (
    <WhitePannel close title={data.project?.title}>
      <Box paddingBottom={5} borderBottom="1px solid grey" width="250px">
        <Image
          src={data.project?.owner.avatar}
          display="flex"
          flexDirection="column"
          style={mainTheme.section.userSmallAvatar}
        />
      </Box>
      <Box overflow="auto" height="24rem">
        <Box pt={5} pr={5} maxWidth="90%">
          <Flex mb={3} alignItems="center">
            <Text textStyle="titleWhiteBoard">Project description</Text>
            <Button
              height={0}
              variant="ghost "
              onClick={() => setIsDescriptionModificationVisible(true)}
            >
              <Edit />
            </Button>
          </Flex>
          {isDescriptionModificationVisible ? (
            <FormControl>
              <Flex alignItems="center">
                <FormLabel htmlFor="description" />
                <Textarea
                  id="description"
                  type="text"
                  width="70%"
                  defaultValue={data.project?.description}
                  {...register('description')}
                />
                <Button
                  ml={3}
                  backgroundColor={mainTheme.colors.orange}
                  color="white"
                  isLoading={updateProjectLoading}
                  type="submit"
                  height="30px"
                  width="auto"
                  onClick={handleSubmit(onSubmitDescription)}
                >
                  Validate
                </Button>
              </Flex>
            </FormControl>
          ) : (
            <Text textStyle="body">{data.project?.description}</Text>
          )}
          <Flex>
            <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
              <Text mb={3} textStyle="titleWhiteBoard">
                Team members
              </Text>
              <Box
                overflow="auto"
                maxHeight="6rem"
                maxWidth="20rem"
                alignItems="center"
              >
                {data.project?.users.map((u) => (
                  <Flex key={u.id} justifyContent="space-between">
                    <Flex mt={2}>
                      <Image
                        src={u.avatar}
                        display="flex"
                        flexDirection="column"
                        style={mainTheme.section.userSmallAvatar}
                        mr={5}
                      />
                      <Text textStyle="body">
                        {u.first_name} {u.last_name}
                      </Text>
                    </Flex>
                    <Button
                      variant="unstyled"
                      height={0}
                      onClick={() => deleteUser(u.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Flex>
                ))}
              </Box>
              {isFormAddUserVisible ? (
                <FormControl>
                  <Flex paddingTop={3}>
                    <FormLabel htmlFor="email" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      height="30px"
                      width="60%"
                      {...register('email')}
                    />
                    <Button
                      ml={3}
                      backgroundColor={mainTheme.colors.orange}
                      color="white"
                      isLoading={updateProjectLoading}
                      type="submit"
                      height="30px"
                      width="auto"
                      onClick={handleSubmit(onSubmitAddUser)}
                    >
                      Add
                    </Button>
                  </Flex>
                </FormControl>
              ) : null}
              {!isFormAddUserVisible ? (
                <Flex justifyContent="center">
                  <Button
                    height={0}
                    variant="unstyled"
                    onClick={() => setIsFormAddUserVisible(true)}
                  >
                    <AddIcon
                      width="30"
                      height="32"
                      color={mainTheme.colors.lightGrey}
                    />
                  </Button>
                </Flex>
              ) : null}
            </Box>
            <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
              <Flex mb={3} alignItems="center">
                <Text textStyle="titleWhiteBoard">Project details</Text>
                <Button
                  height={0}
                  variant="ghost "
                  onClick={() => setIsTimeOnProjectModificationVisible(true)}
                >
                  <Edit />
                </Button>
              </Flex>

              <Flex alignItems="center">
                <Text textStyle="body">Initial time spent estimee:</Text>
                <Text textStyle="bodyGreenBold" ml={2}>
                  {convertHoursToDays(totalHoursAvailableOnProject)}
                </Text>
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
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} mt={5} textStyle="titleWhiteBoard">
              Time spent on project
            </Text>
            <Box width="10rem" height="10rem">
              <Doughnut
                data={dataDoughnutChart}
                options={optionsDoughnutChart}
              />
              <Text marginTop="-53%" marginLeft="37%">
                {dataDoughnutChart.datasets[0].data[0]}%
              </Text>
            </Box>
          </Box>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mt={5} mb={3} textStyle="titleWhiteBoard">
              Tasks accomplished
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Button
            // width="auto"
            maxWidth="20%"
            color="white"
            textStyle="h4"
            backgroundColor={mainTheme.colors.orange}
            onClick={() => deleteProject(projectId!)}
          >
            Delete project
          </Button>
        </Flex>
      </Box>
    </WhitePannel>
  )
}

export default ModifyProject
