import { Flex, useToast } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/components/molecules/Header'
import {
  GetAllNotificationsDocument,
  useAllNotificationsSubscription,
} from 'src/generated/graphql'
import { client } from 'src/App'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import UserNavBar from './Sidebar'

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
    <Flex id="layout-id" height="100vh" position="fixed" w="full">
      <UserNavBar />

      <CustomBox
        variant="solid"
        display="flex"
        p={[2, 4, 8, 10]}
        flexDirection="column"
        w="full"
        flexGrow={1}
        h="full"
      >
        <Header userName={user?.first_name ?? ''} />
        <Outlet />
      </CustomBox>
    </Flex>
  )
}
