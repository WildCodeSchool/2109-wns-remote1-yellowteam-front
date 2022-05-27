import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import useBoardState from 'src/hooks/useBoardState'
import TasksBoard from '../components/Tasks/TasksBoard'

const Board = (): ReactElement => {
  const { selectedProject } = useBoardState()

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexDir="column"
      height="full"
      w="full"
    >
      <TasksBoard projectId={selectedProject} />
    </Box>
  )
}

export default Board
