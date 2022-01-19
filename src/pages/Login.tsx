/* eslint-disable react/jsx-props-no-spreading */
import { gql, useMutation } from '@apollo/client'
import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useMutateLoginMutation } from 'generated/graphql'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface FormState {
  email: string
  password: string
}

export default function Login(): JSX.Element {
  const navigate = useNavigate()
  const [login] = useMutateLoginMutation({
    onCompleted: () => navigate('/'),
  })
  const { handleSubmit, register } = useForm()

  const onSubmit = async (data: FormState): Promise<void> => {
    login({
      variables: { data: { email: data.email, password: data.password } },
    })
  }

  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      w="full"
      h="full"
    >
      <FormControl
        shadow="xl"
        p={10}
        rounded="md"
        bgColor="gray.400"
        w="50%"
        direction="column"
      >
        <Input
          bgColor="white"
          borderColor="black"
          my={1}
          type="text"
          {...register('email')}
        />
        <Input
          bgColor="white"
          borderColor="black"
          my={1}
          type="password"
          {...register('password')}
        />
      </FormControl>
      <Button my={3} colorScheme="red" onClick={handleSubmit(onSubmit)}>
        SUBMIT
      </Button>
    </Flex>
  )
}
