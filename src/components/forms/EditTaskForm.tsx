import { Box, Button, FormLabel, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { validationTaskUpdate } from 'src/formResolvers/yupResolver'
import { FieldValues, useForm } from 'react-hook-form'
import { GetTaskDetailsQuery } from 'src/generated/graphql'
import { yupResolver } from '@hookform/resolvers/yup'
import InputWithError from './InputWithError'

interface IProps {
  task: GetTaskDetailsQuery['task'] | undefined
}

export default function EditTaskForm({ task }: IProps): JSX.Element {
  const [isEditable, setIsEditable] = useState(false)
  console.log('task', task)

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationTaskUpdate),
    criteriaMode: 'all',
  })

  /**
   * 1 - faire ou rechercher mutation
   * 2 - faire resolver
   *
   */

  async function onSubmit(data: FieldValues): Promise<void | null> {
    return null
  }

  // useEffect(() => {
  //     setValue('first_name', user?.first_name)
  //     setValue('last_name', user?.last_name)
  //     setValue('email', user?.email)
  //     setValue('phone_number', user?.phone_number)
  //   }, [user, isEditable])

  return (
    <>
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
            {/* <InputWithError
              type="text"
              errors={errors}
              name="first_name"
              isEditable={isEditable}
              register={register}
            /> */}

            <FormLabel>Last Name</FormLabel>
            {/* <InputWithError
              type="text"
              errors={errors}
              name="last_name"
              isEditable={isEditable}
              register={register}
            /> */}
          </VStack>

          <VStack justifyContent="flex-start" alignItems="start" spacing={2}>
            <FormLabel>Phone number</FormLabel>
            {/* <InputWithError
              type="text"
              errors={errors}
              name="phone_number"
              isEditable={isEditable}
              register={register}
            /> */}

            <FormLabel>Email</FormLabel>
            {/* <InputWithError
              type="text"
              errors={errors}
              name="email"
              isEditable={isEditable}
              register={register}
            /> */}
          </VStack>
        </HStack>
        <HStack>
          {/* <Button
            my={5}
            onClick={handleSubmit(onSubmit)}
            isLoading={loading}
            variant="action"
          >
            SAVE
          </Button>
          <Button
            isDisabled={isEditable}
            my={5}
            onClick={() => setIsEditable((c) => !c)}
            variant="info"
          >
            EDIT
          </Button> */}
        </HStack>
      </Box>
    </>
  )
}
