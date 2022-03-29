import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import UserNavBar from '../UserNavBar'

export default function Layout(): JSX.Element {
  return (
    <Box height="inherit">
      <UserNavBar />
      <Outlet />
    </Box>
  )
}
