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
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { client } from 'src/App'
import {
  GetAllNotificationsDocument,
  GetUserProjectsDocument,
  SortOrder,
  Status_Notification,
  Type_Notification,
  useGetAllNotificationsQuery,
  useSetNotificationReadMutation,
  useUpdateProjectMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

export default function NotificationsHOC(): JSX.Element {
  const { userId } = useAppState()

  const { data, loading } = useGetAllNotificationsQuery({
    notifyOnNetworkStatusChange: true,
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

  const [updateProject] = useUpdateProjectMutation({
    onCompleted: async () => {
      await client.refetchQueries({
        include: [GetUserProjectsDocument],
      })
    },
  })

  const handleAddUser = (projectId: string) => {
    updateProject({
      variables: {
        data: {
          users: {
            connect: [{ id: userId }],
          },
        },
        projectId: {
          id: projectId,
        },
      },
    })
  }

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
        maxHeight="500px"
        overflow="auto"
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
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="start"
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
              <VStack w="full" textAlign="left">
                <Text w="full" textAlign="left" color="gray" fontWeight="bold">
                  {notification.title}
                </Text>
                <Text w="full" textAlign="left" color="gray" fontWeight="bold">
                  {notification.content}
                </Text>
                {notification.type === Type_Notification.Invitation && (
                  <HStack w="full">
                    <Button
                      variant="action"
                      onClick={() => handleAddUser(notification.reference_id)}
                    >
                      ACCEPT
                    </Button>
                    <Button
                      variant="info"
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
                    >
                      DECLINE
                    </Button>
                  </HStack>
                )}
              </VStack>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}
