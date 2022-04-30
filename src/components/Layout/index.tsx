import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/components/molecules/Header'

import UserNavBar from './UserNavBar'

export default function Layout(): JSX.Element {
  const { user } = useAppState()

  return (
    <Box height="100vh" display="flex" position="fixed" w="100vw">
      <UserNavBar />
      <Box
        p={[2, 4, 8, 10]}
        display="flex"
        flexDirection="column"
        overflowY="scroll"
        overflowX="hidden"
        w="full"
      >
        <Header userName={user?.first_name ?? ''} />
        <Outlet />
      </Box>
    </Box>
  )
}
