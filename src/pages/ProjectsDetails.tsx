import { Box, Spinner, Text, Image } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import useProjects from 'src/hooks/useProjects'

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
      {project?.tasks.map((t) => (
        <Image src={t.user.avatar} />
      ))}
    </WhitePannel>
  )
}

export default ProjectDetails
