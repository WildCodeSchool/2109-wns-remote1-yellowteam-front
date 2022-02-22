import { Box, Spinner, Text, Image, Flex } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import useProjects from 'src/hooks/useProjects'
import mainTheme from 'src/theme/mainTheme'

const ProjectDetails = (): ReactElement => {
  const { projects, loading } = useProjects()
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
        style={mainTheme.section.userSmallAvatar}
      />
      <Text textStyle="h2">Project description</Text>
      <Flex>
        <Text textStyle="h2">Team members</Text>
        <Text textStyle="h2">Project details</Text>
      </Flex>
      <Flex>
        <Text textStyle="h2">Time spent on project</Text>
        <Text textStyle="h2">Tasks accomplished</Text>
      </Flex>
    </WhitePannel>
  )
}

export default ProjectDetails
