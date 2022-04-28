/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react'
import {
  Box,
  Button,
  Flex,
  Spinner,
  Image,
  useToast,
  Text,
} from '@chakra-ui/react'
import WhitePannel from 'src/components/WhitePannel'
import { useNavigate, useParams } from 'react-router-dom'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from 'src/generated/graphql'
import convertMillisecondsToHours from 'src/utils/convertMillisecondsToHours'
import getActualTimeAvailable from 'src/utils/getActualTimeAvailable'

import TimeSpentOnProject from 'src/components/molecules/ProjectDetails/TimeSpentOnProject'
import TasksAccomplished from 'src/components/molecules/ProjectDetails/TasksAccomplished'
import DeleteProjectAlert from 'src/components/Alert/DeleteProject.alert'
import convertHoursToDays from 'src/utils/convertHoursToDays'

const ModifyProject = (): ReactElement => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const navigate = useNavigate()
  const { projectId } = useParams()
  const toast = useToast()

  const [deleteProjectData] = useDeleteProjectMutation({
    variables: { projectId: projectId as string },
  })

  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId as string },
    skip: projectId === undefined,
  })

  const deleteProject = async (id: string) => {
    await deleteProjectData({ variables: { projectId: id } })
    toast({
      title: 'Project deleted.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    navigate(-1)
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
            <Box flex={1}>
              <Flex mb={3} alignItems="center">
                <Text textStyle="titleWhiteBoard">Project description</Text>
              </Flex>
              <Text textStyle="body">{data.project?.description}</Text>
            </Box>
            <Box pr={5} flex={1} ml={5}>
              <Flex mb={3} alignItems="center">
                <Text textStyle="titleWhiteBoard">Project details</Text>
              </Flex>

              <Flex alignItems="center">
                <Text textStyle="body">Initial time spent estimee:</Text>
                <Text textStyle="bodyGreenBold" ml={2}>
                  {convertHoursToDays(totalHoursAvailableOnProject)}
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Text textStyle="body">Total time spent:</Text>
                <Text textStyle="bodyGreenBold" ml={2}>
                  {convertHoursToDays(data.project?.total_time_spent)}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            pt={5}
            width="100%"
            // minWidth={['5rem', '10rem', '20rem', '27rem']}
            justifyContent="space-between"
          >
            <Box mr={5} flex={1}>
              <Text mb={3} textStyle="titleWhiteBoard">
                Team members
              </Text>
              <Box maxWidth="20rem" alignItems="center">
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
                  </Flex>
                ))}
              </Box>
            </Box>
            <TimeSpentOnProject
              dataDoughnutChart={dataDoughnutChart}
              optionsDoughnutChart={optionsDoughnutChart}
            />
          </Flex>
          <Flex>
            <TasksAccomplished />
          </Flex>
          <Flex justifyContent="center">
            <Button
              maxWidth="20%"
              color="white"
              textStyle="h4"
              backgroundColor={mainTheme.colors.orange}
              onClick={() => deleteProject(projectId as string)}
            >
              Delete project
            </Button>
          </Flex>
        </Box>
      </Box>
    </WhitePannel>
  )
}

export default ModifyProject
