import { Box, useToast } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/components/molecules/Header'
import {
  GetAllNotificationsDocument,
  useAllNotificationsSubscription,
} from 'src/generated/graphql'
import { client } from 'src/App'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import UserNavBar from './UserNavBar'

export default function Layout(): JSX.Element {
  const { user } = useAppState()
  const toast = useToast()

  useAllNotificationsSubscription({
    onSubscriptionComplete: async () => {
      toast({
        title: 'You just received a notification',
        status: 'info',
      })
    },

    shouldResubscribe: true,
    onSubscriptionData: async (r) => {
      await client.refetchQueries({
        include: [GetAllNotificationsDocument],
      })
      toast({
        title: `${r.subscriptionData.data?.subscriptionWithFilter.message}`,
        status: 'info',
      })
    },
  })

  return (
    <Box height="100vh" display="flex" position="fixed" w="100vw">
      <UserNavBar />

      <CustomBox
        variant="solid"
        display="flex"
        overflowY="auto"
        overflowX="hidden"
        p={[2, 4, 8, 10]}
        flexDirection="column"
        w="full"
        h="full"
      >
        <Header userName={user?.first_name ?? ''} />
        <Outlet />
      </CustomBox>
    </Box>
  )
}
