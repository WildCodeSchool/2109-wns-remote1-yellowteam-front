import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProjects from 'src/hooks/useProjects'
import TasksBoard from '../components/Tasks/TasksBoard'
import UserBoardHeader from '../components/molecules/UserBoardHeader'

const Board = (): ReactElement => {
  const navigate = useNavigate()

  const { projects } = useProjects()

  const { projectId } = useParams()

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
