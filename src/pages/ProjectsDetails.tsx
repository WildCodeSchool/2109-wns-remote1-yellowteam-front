/* eslint-disable react/jsx-props-no-spreading */
import { Box, Spinner, Text, Image, Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import convertHoursToDays from 'src/utils/convertHoursToDays'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import convertMillisecondsToHours from 'src/utils/convertMillisecondsToHours'
import getActualTimeAvailable from 'src/utils/getActualTimeAvailable'
import { useGetProjectQuery } from 'src/generated/graphql'
import EditPannelPortal from 'src/Portals/EditPannelPortal'

const ProjectDetails = (): ReactElement => {
  const { projectId } = useParams()
  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId as string },
    skip: projectId === undefined,
  })

  ChartJS.register(ArcElement, Tooltip, Legend)

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
      <Image
        src={data.project?.owner.avatar}
        display="flex"
        flexDirection="column"
        style={mainTheme.section.userSmallAvatar}
      />
      <Box overflow="auto" height="22rem">
        <Box pt={5} pr={5} maxWidth="90%">
          <Text mb={3} textStyle="titleWhiteBoard">
            Project description
          </Text>
          <Text textStyle="body">{data.project?.description}</Text>
        </Box>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Team members
            </Text>
            <Box>
              {data.project?.users.map((u) => (
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
                {convertHoursToDays(data.project?.total_time_spent)}
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
