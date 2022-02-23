/* eslint-disable react/jsx-props-no-spreading */
import { Box, Spinner, Text, Image, Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import useManagerProjects from 'src/hooks/useManagerProjects'
import mainTheme from 'src/theme/mainTheme'

const ProjectDetails = (): ReactElement => {
  const { projects, loading } = useManagerProjects()
  const { projectId } = useParams()

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  const project = projects?.find((p) => p.id === projectId)

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
              <Text textStyle="body">Total time spent:</Text>
              <Text textStyle="bodyGreenBold" ml={2}>
                {project?.total_time_spent}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Time spent on project
            </Text>
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
