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
      <WhitePannel>
        <Spinner />
      </WhitePannel>
    )

  const project = projects?.find((p) => p.id === projectId)

  return (
    <WhitePannel>
      <Text textStyle="h3">{project?.title}</Text>
      <Image
        src={project?.owner.avatar}
        display="flex"
        flexDirection="column"
        style={mainTheme.section.userMediumAvatar}
      />
      <Box pt={5} pr={5}>
        <Text textStyle="titleWhiteBoard">Project description</Text>
        <Text>{project?.description}</Text>
      </Box>
      <Flex>
        <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '30rem']}>
          <Text textStyle="titleWhiteBoard">Team members</Text>
          {project?.users.map((u) => (
            <Flex key={u.id} alignItems="center">
              <Image
                src={u.avatar}
                display="flex"
                flexDirection="column"
                style={mainTheme.section.userSmallAvatar}
              />
              <Text>
                {u.first_name} {u.last_name}
              </Text>
            </Flex>
          ))}
        </Box>
        <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '30rem']}>
          <Text textStyle="titleWhiteBoard">Project details</Text>
        </Box>
      </Flex>
      <Flex>
        <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '30rem']}>
          <Text textStyle="titleWhiteBoard">Time spent on project</Text>
        </Box>
        <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '30rem']}>
          <Text textStyle="titleWhiteBoard">Tasks accomplished</Text>
        </Box>
      </Flex>
    </WhitePannel>
  )
}

export default ProjectDetails
