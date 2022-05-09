/* eslint-disable no-console */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  HStack,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import {
  Status_Invitation,
  useCreateInvitationMutation,
  useGetUserLazyQuery,
  UserFragment,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import InputWithError from '../forms/InputWithError'
import UserInvitationCard from '../molecules/UserInvitationCard'

export default function InvitePeopleModal(): JSX.Element {
  const { projectId } = useParams()
  const { user } = useAppState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const {
    handleSubmit,
    register,
    reset,
    resetField,
    formState: { errors },
  } = useForm()

  const [invitedUsers, setInvitedUsers] = useState<UserFragment[]>([])

  const [
    createInvitation,
    { data: createInvitationData, loading: createInvitationLoading },
  ] = useCreateInvitationMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted: async (data) => {
      if (data.customCreateInvitation) {
        setInvitedUsers((c) =>
          c.filter((u) => u.id !== data.customCreateInvitation.user_id)
        )
        toast({
          status: 'success',
          title: `Invitations sent`,
        })
        onClose()
      }
    },
  })

  const [getUser, { loading }] = useGetUserLazyQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (data.user) {
        resetField('email')
        return setInvitedUsers((prev) => {
          if (prev.find((u) => u.id === data.user.id)) return prev
          return [...prev, data.user]
        })
      }
      return toast({
        status: 'error',
        title: 'User not found',
        description: 'User not found',
      })
    },
    onError: (err) => {
      console.log(err)
    },
  })

  useEffect(() => {
    if (invitedUsers.length === 0) {
      onClose()
      reset()
    }
  }, [createInvitationData])

  const handleSendInvitations = async () => {
    await Promise.all(
      invitedUsers.map((usr) => {
        return createInvitation({
          variables: {
            data: {
              status: Status_Invitation.Pending,
              email: user.email,
              project: {
                connect: {
                  id: projectId,
                },
              },
              user: {
                connect: {
                  email: usr.email,
                },
              },
            },
          },
        })
      })
    )
  }

  const handleAddUser = (data: FieldValues) => {
    getUser({
      variables: {
        where: {
          email: data.email,
        },
      },
    })
  }

  return (
    <>
      <Button
        my={2}
        variant="action"
        w="full"
        fontSize={12}
        px={2}
        py={1}
        onClick={onOpen}
      >
        INVITE PEOPLE
      </Button>

      <Modal
        isCentered
        blockScrollOnMount={false}
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minH="50%" maxH="50%">
          <ModalHeader>Invite people on this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="50%">
            <HStack w="full">
              <InputWithError
                errors={errors}
                register={register}
                isEditable
                name="email"
                type="email"
                placeholder="Enter email here"
              />
              <Button
                isLoading={loading}
                onClick={handleSubmit(handleAddUser)}
                variant="action"
              >
                ADD
              </Button>
            </HStack>
            <VStack>
              {invitedUsers.map((item) => (
                <UserInvitationCard
                  setInvitedUsers={setInvitedUsers}
                  user={item}
                  key={item.id}
                />
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={createInvitationLoading}
              onClick={handleSendInvitations}
              w="full"
              variant="action"
            >
              SEND INVITATIONS
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
