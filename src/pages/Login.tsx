/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import mainTheme from 'src/theme/mainTheme'
// import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
// import { validationsLogin } from '../formResolvers/yupResolver'
import { useMutateLoginMutation } from '../generated/graphql'

export default function Login(): JSX.Element {
  const navigate = useNavigate()

  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const { dispatchLogin } = useAppState()

  const [login, { loading }] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin(data.login)
      navigate('/board')
    },
    onError: () => {
      toast({
        title: `your email doesn't exist`,
        status: 'error',
        isClosable: true,
        duration: 5000,
        position: 'bottom',
      })
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
            id="login_email"
            variant="flushed"
            placeholder="Email"
            my={2}
            type="text"
            isInvalid={errors.email && true}
            {...register('email')}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <Text color="red">{message}</Text>}
          />
          <Input
            id="login_password"
            variant="flushed"
            placeholder="Password"
            my={2}
            type="password"
            isInvalid={errors.password && true}
            {...register('password')}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <Text color="red">{message}</Text>}
          />
        </FormControl>
        <Button
          my={3}
          w={['65%', '55%', '35%', '25%']}
          backgroundColor={mainTheme.colors.orange}
          color="#ffffff"
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
          isDisabled={(!isValid || loading) && true}
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
