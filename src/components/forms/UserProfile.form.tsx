/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, FormLabel, HStack, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { validationsProfilUpdate } from 'src/formResolvers/yupResolver'
import { useMutationUpdateUserArgsMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import InputWithError from './InputWithError'

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
    criteriaMode: 'all',
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
          <InputWithError
            errors={errors}
            name="first_name"
            isEditable={isEditable}
            register={register}
          />

          <FormLabel>Last Name</FormLabel>
          <InputWithError
            errors={errors}
            name="last_name"
            isEditable={isEditable}
            register={register}
          />
        </VStack>

        <VStack justifyContent="flex-start" alignItems="start" spacing={2}>
          <FormLabel>Phone number</FormLabel>
          <InputWithError
            errors={errors}
            name="phone_number"
            isEditable={false}
            register={register}
          />

          <FormLabel>Email</FormLabel>
          <InputWithError
            errors={errors}
            name="email"
            isEditable={isEditable}
            register={register}
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
