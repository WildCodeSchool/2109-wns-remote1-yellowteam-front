import { Box } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useAppState from 'src/hooks/useAppState'
import Header from '../molecules/Header'

const Project = (): ReactElement => {
  const { user } = useAppState()

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={user?.first_name ?? ''} />
    </Box>
  )
}

export default Project
