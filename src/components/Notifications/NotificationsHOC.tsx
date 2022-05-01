import {
  Menu,
  MenuButton,
  Spinner,
  MenuList,
  Center,
  MenuItem,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { client } from 'src/App'
import {
  GetAllNotificationsDocument,
  SortOrder,
  Status_Notification,
  useGetAllNotificationsQuery,
  useSetNotificationReadMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

export default function NotificationsHOC(): JSX.Element {
  const { userId } = useAppState()

  const { data, loading } = useGetAllNotificationsQuery({
    variables: {
      where: {
        user_id: {
          equals: userId,
        },
      },
      orderBy: {
        created_at: 'desc' as SortOrder,
      },
    },
  })

  const [selectedNotification, setSelectedNotification] =
    useState(`NOTIFICATIONS 🔔`)

  const [setNotificationRead, { data: notificationsMutationResponse }] =
    useSetNotificationReadMutation({
      onCompleted: () => {
        client.refetchQueries({
          include: [GetAllNotificationsDocument],
        })
      },
    })

  useEffect(() => {
    setSelectedNotification(
      `🔔${
        data?.notifications.filter(
          (item) => item.status === Status_Notification.Unread
        ).length
      }`
    )
  }, [loading, data, notificationsMutationResponse])

  return (
    <Menu>
      <MenuButton
        as={Box}
        mx={2}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {loading ? <Spinner /> : selectedNotification}
      </MenuButton>

      <MenuList
        height="500px"
        overflow="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            background: '#DFDFDF',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '24px',
          },
        }}
      >
        <Center w="100%" h="10%">
          <Text fontWeight="bold" color="gray">
            NOTIFICATIONS
          </Text>
          <Text
            fontWeight="bold"
            color="white"
            rounded="full"
            backgroundColor="gray"
            py={1}
            px={2}
            mx={2}
          >
            {
              data?.notifications.filter(
                (item) => item.status === Status_Notification.Unread
              ).length
            }
          </Text>
        </Center>
        {data?.notifications
          .filter((item) => item.status === Status_Notification.Unread)
          .map((notification) => (
            <MenuItem
              display="flex"
              justifyContent="space-between"
              backgroundColor={
                notification.status === Status_Notification.Read
                  ? 'gray.200'
                  : 'white'
              }
              onClick={() =>
                setNotificationRead({
                  variables: {
                    where: {
                      id: notification.id,
                    },
                    data: {
                      status: {
                        set: Status_Notification.Read,
                      },
                    },
                  },
                  optimisticResponse: {
                    updateNotification: {
                      ...notification,
                      status: Status_Notification.Read,
                    },
                  },
                })
              }
              key={notification.id}
            >
              <Image
                rounded="full"
                mx={2}
                zIndex={100}
                w={10}
                h={10}
                src={notification.sender.avatar}
              />
              <Text color="gray" fontWeight="bold">
                {notification.title}
              </Text>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}