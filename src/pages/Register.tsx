/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import mainTheme from 'src/theme/mainTheme'
import useAppState from 'src/hooks/useAppState'
import {
  useMutateRegisterMutation,
  useMutateLoginMutation,
} from '../generated/graphql'

export default function Register(): JSX.Element {
  const navigate = useNavigate()

  const [cookies, setCookies] = useCookies()

  const { dispatchLogin } = useAppState()

  const [mutateRegister] = useMutateRegisterMutation({
    onError: () => {
      throw new Error('Error during Register')
    },
  })

  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin(data.login)
      setCookies('isLoggedIn', true)
      navigate('/board')
    },
    onError: () => {
      throw new Error('Error during login')
    },
  })

  const { handleSubmit, register } = useForm()

  const onSubmit = async ({
    first_name,
    last_name,
    email,
    password,
  }: FieldValues): Promise<void> => {
    mutateRegister({
      variables: { data: { first_name, last_name, email, password } },
      onCompleted: () => {
        login({
          variables: { data: { email, password } },
        })
      },
    })
  }
  return (
    <Flex direction="row" alignItems="center">
      <Flex
        background={mainTheme.colors.orange}
        w="100%"
        h="100vh"
        alignItems="center"
      >
        <Text
          textAlign="center"
          textStyle="titleLogin"
          color="#ffffff"
          padding={121}
        >
          Welcome to Y-Task Manager
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="100vh"
      >
        <Text textStyle="loginText">Register now</Text>
        <FormControl p={10} w={['90%', '80%', '60%', '50%']}>
          <Input
            variant="flushed"
            placeholder="Firstname"
            my={2}
            type="text"
            {...register('first_name')}
          />
          <Input
            variant="flushed"
            placeholder="Lastname"
            my={2}
            type="text"
            {...register('last_name')}
          />
          <Input
            variant="flushed"
            placeholder="Email"
            my={2}
            type="email"
            {...register('email')}
          />
          <Input
            variant="flushed"
            placeholder="Password"
            my={2}
            type="password"
            {...register('password')}
          />
        </FormControl>
        <Button
          my={3}
          mx={1}
          w={['65%', '55%', '35%', '25%']}
          backgroundColor={mainTheme.colors.orange}
          color="#ffffff"
          onClick={handleSubmit(onSubmit)}
        >
          SIGN UP
        </Button>
        <Text textStyle="subText" onClick={() => navigate(`/login`)}>
          Already have an account ? Sign in
        </Text>
      </Flex>
    </Flex>
  )
}
