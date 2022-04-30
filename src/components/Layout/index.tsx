import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/components/molecules/Header'

import UserNavBar from './UserNavBar'

export default function Layout(): JSX.Element {
  const { user } = useAppState()

  return (
    <Box height="100vh" display="flex" position="fixed" w="100vw">
      <UserNavBar />

      <Flex
        overflowY="scroll"
        overflowX="hidden"
        p={[2, 4, 8, 10]}
        direction="column"
        w="full"
        h="full"
      >
        <Header userName={user?.first_name ?? ''} />
        <Outlet />
      </Flex>
    </Box>
  )
}
