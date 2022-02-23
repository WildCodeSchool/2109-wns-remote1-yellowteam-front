import { Box } from '@chakra-ui/react'
import React, { ReactElement, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import useProjects from 'src/hooks/useProjects'
import TasksBoard from '../components/TasksBoard'
import Header from '../molecules/Header'
import UserBoardHeader from '../molecules/UserBoardHeader'

const Board = (): ReactElement => {
  const navigate = useNavigate()

  const { user } = useAppState()

  const { projects } = useProjects()

  const { projectId } = useParams()

  useEffect(() => {
    if (!projectId && projects && projects?.length > 0)
      navigate(`/board/${projects[0].id}`)
  }, [projectId, projects])

  const setProjectId = (newId: string) => navigate(`/board/${newId}`)

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={user?.first_name ?? ''} />
      <UserBoardHeader
        selectedProjectId={projectId}
        setSelectedProjectId={setProjectId}
        projects={projects}
      />
      <TasksBoard projectId={projectId} />
    </Box>
  )
}

export default Board
