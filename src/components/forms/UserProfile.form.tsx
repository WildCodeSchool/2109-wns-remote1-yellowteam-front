/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { validationsProfilUpdate } from 'src/formResolvers/yupResolver'
import { useMutationUpdateUserArgsMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

export default function UserProfileForm(): JSX.Element {
  const [isEditable, setIsEditable] = useState(false)
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationsProfilUpdate),
  })
  const { dispatchUpdateUser, user } = useAppState()

  const [userUpdate, { loading }] = useMutationUpdateUserArgsMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      dispatchUpdateUser(data.updateUser)
    },
  })

  const onSubmit = async ({
    first_name,
    last_name,
    email,
    avatar,
  }: FieldValues): Promise<void> => {
    await userUpdate({
      variables: {
        data: {
          first_name: { set: !first_name ? user?.first_name : first_name },
          last_name: { set: !last_name ? user?.last_name : last_name },
          email: { set: !email ? user?.email : email },
          avatar: { set: !avatar ? user?.avatar : avatar },
        },
        where: { id: user?.id },
      },
    })
    setIsEditable(false)
    reset()
  }

  useEffect(() => {
    setValue('first_name', user?.first_name)
    setValue('last_name', user?.last_name)
    setValue('email', user?.email)
    // setValue('avatar', user?.avatar)
  }, [user])

  return (
    <Box
      display="flex"
      flexGrow={1}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="start"
    >
      <HStack spacing={10}>
        <VStack justifyContent="flex-start" alignItems="start" spacing={2}>
          <FormLabel>First Name</FormLabel>
          <Input
            disabled={!isEditable}
            variant={!isEditable ? 'action' : 'filled'}
            aria-label="first_name"
            type="text"
            {...register('first_name')}
          />

          <FormLabel>Last Name</FormLabel>
          <Input
            disabled={!isEditable}
            variant={!isEditable ? 'action' : 'filled'}
            aria-label="last_name"
            type="text"
            {...register('last_name')}
          />
        </VStack>

        <VStack justifyContent="flex-start" alignItems="start" spacing={2}>
          <FormLabel>Phone number</FormLabel>
          <Input
            disabled={!isEditable}
            variant={!isEditable ? 'action' : 'filled'}
            aria-label="phone_number"
            type="text"
            // {...register('first_name')}
          />

          <FormLabel>Email</FormLabel>
          <Input
            disabled={!isEditable}
            variant={!isEditable ? 'action' : 'filled'}
            aria-label="email"
            type="text"
            {...register('email')}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <Text position="absolute" color="red">
                {message}
              </Text>
            )}
          />
        </VStack>
      </HStack>
      <HStack>
        <Button
          my={5}
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
          variant="action"
        >
          SAVE
        </Button>
        <Button
          my={5}
          onClick={() => setIsEditable((c) => !c)}
          variant="action"
        >
          EDIT
        </Button>
      </HStack>
    </Box>
  )
}
