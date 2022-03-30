/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import { Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useCookies } from 'react-cookie'
import mainTheme from 'src/theme/mainTheme'
import { useMutateLoginMutation } from '../generated/graphql'

export default function Login(): JSX.Element {
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies] = useCookies()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    mode: 'onChange',
  })

  const { dispatchLogin } = useAppState()
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

  const onSubmit = async ({ email, password }: FieldValues): Promise<void> => {
    login({
      variables: { data: { email, password } },
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
        <Text textStyle="loginText">Login now</Text>
        <FormControl p={10} w={['90%', '80%', '60%', '50%']}>
          <Input
            variant="flushed"
            placeholder="Email"
            my={2}
            type="text"
            {...register('email', { required: true })}
          />
          <Input
            variant="flushed"
            placeholder="Password"
            my={2}
            type="password"
            {...register('password', { required: true })}
          />
        </FormControl>
        <Button
          my={3}
          w={['65%', '55%', '35%', '25%']}
          backgroundColor={mainTheme.colors.orange}
          color="#ffffff"
          onClick={handleSubmit(onSubmit)}
          isLoading={isSubmitted}
          isDisabled={!isValid && true}
        >
          SIGN IN
        </Button>
        <Text textStyle="subText" onClick={() => navigate(`/register`)}>
          Not Account ? Sign up
        </Text>
      </Flex>
    </Flex>
  )
}
