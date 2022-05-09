import { Box, Text } from '@chakra-ui/react'

const TasksAccomplished = (): React.ReactElement => {
  return (
    <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
      <Text mt={5} mb={3} textStyle="titleWhiteBoard">
        Tasks accomplished
      </Text>
    </Box>
  )
}

export default TasksAccomplished
