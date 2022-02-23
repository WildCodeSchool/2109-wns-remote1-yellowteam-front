/* eslint-disable react/jsx-props-no-spreading */
import { Box, Spinner, Text, Image, Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import useManagerProjects from 'src/hooks/useManagerProjects'
import mainTheme from 'src/theme/mainTheme'
import convertHoursToDays from 'src/utils/convertHoursToDays'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const convertMillisecondsToHours = (ms: number): number => {
  const hours = (ms / (1000 * 60 * 60)).toFixed(1)
  return parseInt(hours, 10)
}
const getActualTimeAvailable = (hours: number): number => {
  let daysToRemove = 0
  const nbOfDays = hours / 24
  if (nbOfDays >= 7) {
    daysToRemove = nbOfDays % 7
  }
  // Removing daysToRemove * 2 to remove weekend
  const reducedNbOfDays = nbOfDays - daysToRemove * 2
  const hoursToWork = reducedNbOfDays * 24
  // Removing 16 hours per days => only working 8 hours a day
  const reducedHoursToWork = hoursToWork - reducedNbOfDays * 16
  return reducedHoursToWork
}

const ProjectDetails = (): ReactElement => {
  const { projects, loading } = useManagerProjects()
  const { projectId } = useParams()

  ChartJS.register(ArcElement, Tooltip, Legend)

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  const project = projects?.find((p) => p.id === projectId)

  const timeStartDate = new Date(project?.start_date).getTime()
  const timeEndDate = new Date(project?.end_date).getTime()
  const timeSpent = project?.total_time_spent

  const timeAvailable = timeEndDate - timeStartDate

  const hoursAvailable = convertMillisecondsToHours(timeAvailable)

  const totalHoursAvailableOnProject = getActualTimeAvailable(hoursAvailable)

  const percentageTimeSpent = (timeSpent! / totalHoursAvailableOnProject) * 100
  const rest = 100 - percentageTimeSpent

  const data = {
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

  return (
    <WhitePannel close title={project?.title}>
      <Image
        src={project?.owner.avatar}
        display="flex"
        flexDirection="column"
        style={mainTheme.section.userSmallAvatar}
      />
      <Box overflow="auto" height="22rem">
        <Box pt={5} pr={5} maxWidth="90%">
          <Text mb={3} textStyle="titleWhiteBoard">
            Project description
          </Text>
          <Text textStyle="body">{project?.description}</Text>
        </Box>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Team members
            </Text>
            <Box>
              {project?.users.map((u) => (
                <Flex key={u.id} alignItems="center">
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
              ))}
            </Box>
          </Box>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Project details
            </Text>
            <Flex alignItems="center">
              <Text textStyle="body">Initial time spent estimee:</Text>
              <Text textStyle="bodyGreenBold" ml={2}>
                {convertHoursToDays(totalHoursAvailableOnProject)}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Text textStyle="body">Total time spent:</Text>
              <Text textStyle="bodyGreenBold" ml={2}>
                {convertHoursToDays(project?.total_time_spent)}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Time spent on project
            </Text>
            <Box width="10rem" height="10rem">
              <Doughnut data={data} />
              <Text marginTop="-53%" marginLeft="45%">
                {data.datasets[0].data[0]}%
              </Text>
            </Box>
          </Box>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Tasks accomplished
            </Text>
          </Box>
        </Flex>
      </Box>
    </WhitePannel>
  )
}

export default ProjectDetails
