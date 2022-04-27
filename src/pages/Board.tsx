import { Box } from '@chakra-ui/react'
import React, { ReactElement, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProjects from 'src/hooks/useProjects'
import TasksBoard from '../components/Tasks/TasksBoard'
import UserBoardHeader from '../molecules/UserBoardHeader'

const Board = (): ReactElement => {
  const navigate = useNavigate()

  const { projects } = useProjects()

  const { projectId } = useParams()

  useEffect(() => {
    if (!projectId && projects && projects?.length > 0)
      navigate(`/board/${projects[0].id}`)
  }, [projectId, projects])

  const setProjectId = (newId: string) => navigate(`/board/${newId}`)

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexDir="column"
      height="full"
      w="full"
    >
      <UserBoardHeader
        selectedProjectId={projectId}
        setSelectedProjectId={setProjectId}
        projects={projects}
      />
      <TasksBoard projectId={projectId as string} />
    </Box>
  )
}

export default Board
