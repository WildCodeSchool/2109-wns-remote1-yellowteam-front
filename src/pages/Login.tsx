/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import {
  useMutateLoginMutation,
  useMutateMeMutation,
} from '../generated/graphql'

export default function Login(): JSX.Element {
  const navigate = useNavigate()
  const { dispatchLogin, dispatchLogout } = useAppState()
  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin({
        email: data.login.email,
        id: data.login.id,
        roles: data.login.role,
      })
      navigate('/')
    },
  })

  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin({
        email: data.me.email,
        id: data.me.id,
        roles: data.me.role,
      })
      navigate('/')
    },
    onError: () => {
      dispatchLogout()
    },
  })

  useEffect(() => {
    me()
  }, [])

  const { handleSubmit, register } = useForm()

  const onSubmit = async ({ email, password }: FieldValues): Promise<void> => {
    login({
      variables: { data: { email, password } },
    })
  }

  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      w="full"
      h="100vh"
    >
      <FormControl
        shadow="xl"
        p={10}
        rounded="md"
        bgColor="gray.400"
        w={['90%', '80%', '60%', '40%']}
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
