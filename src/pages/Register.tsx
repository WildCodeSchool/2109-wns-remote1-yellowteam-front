/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import mainTheme from 'src/theme/mainTheme'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import useAppState from 'src/hooks/useAppState'
import { validationsRegister } from '../formResolvers/yupResolver'
import {
  useMutateRegisterMutation,
  useMutateLoginMutation,
} from '../generated/graphql'

export default function Register(): JSX.Element {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationsRegister),
  })

  const { dispatchLogin } = useAppState()

  const [mutateRegister, { loading }] = useMutateRegisterMutation({
    onError: () => {
      throw new Error('Error during Register')
    },
  })

  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin(data.login)
      navigate('/board')
    },
    onError: () => {
      throw new Error('Error during login')
    },
  })

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
            isInvalid={errors.first_name && true}
            {...register('first_name', { required: true })}
          />
          <ErrorMessage
            errors={errors}
            name="first_name"
            render={({ message }) => <p>{message}</p>}
          />
          <Input
            variant="flushed"
            placeholder="Lastname"
            my={2}
            type="text"
            isInvalid={errors.last_name && true}
            {...register('last_name', { required: true })}
          />
          <ErrorMessage
            errors={errors}
            name="last_name"
            render={({ message }) => <p>{message}</p>}
          />
          <Input
            variant="flushed"
            placeholder="Email"
            my={2}
            type="email"
            isInvalid={errors.email && true}
            {...register('email', { required: true })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <Text color="red">{message}</Text>}
          />
          <Input
            variant="flushed"
            placeholder="Password"
            my={2}
            type="password"
            isInvalid={errors.password && true}
            {...register('password', {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />
        </FormControl>
        <Button
          my={3}
          mx={1}
          w={['65%', '55%', '35%', '25%']}
          backgroundColor={mainTheme.colors.orange}
          color="#ffffff"
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
          isDisabled={(!isValid || loading) && true}
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
