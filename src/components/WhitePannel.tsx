import { Box } from '@chakra-ui/react'
import React, { ReactElement, ReactNode, useEffect } from 'react'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/molecules/Header'

interface IProps {
  children: ReactNode
}

const WhitePannel = ({ children }: IProps): ReactElement => {
  const { user } = useAppState()

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={user?.first_name ?? ''} />
      <Box
        backgroundColor="white"
        minHeight="75vh"
        mr={45}
        ml={45}
        p={50}
        borderRadius={12}
      >
        {children}
      </Box>
    </Box>
  )
}

export default WhitePannel
