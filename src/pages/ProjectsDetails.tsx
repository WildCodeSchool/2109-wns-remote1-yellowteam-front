import { Box, Spinner, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import useProjects from 'src/hooks/useProjects'
import { Project } from 'src/types/Project'

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

  return <WhitePannel>{project?.title}</WhitePannel>
}

export default ProjectDetails
