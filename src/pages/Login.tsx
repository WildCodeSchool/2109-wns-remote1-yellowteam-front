/* eslint-disable react/jsx-props-no-spreading */
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

  const { dispatchLogin } = useAppState()
  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin(data.login)
      setCookies('isLoggedIn', true)
      navigate('/board')
    },
    // Gérer l'erreur (un mauvais login/mdp fait crasher l'app sinon)
    // Comment, ça reste à voir (il doit y avoir des "toasts" dans Chakra UI ?)
    // Alternative : entourer l'appel de login d'un try/catch dans onSubmit (et précéder d'un await)
    onError: (error) => {
      console.error(error)
    },
  })

  const { handleSubmit, register } = useForm()

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
            my={1}
            type="text"
            {...register('email')}
          />
          <Input
            variant="flushed"
            placeholder="Password"
            my={1}
            type="password"
            {...register('password')}
          />
        </FormControl>
        <Button
          my={3}
          w={['65%', '55%', '35%', '25%']}
          backgroundColor={mainTheme.colors.orange}
          color="#ffffff"
          onClick={handleSubmit(onSubmit)}
        >
          SIGN IN
        </Button>
      </Flex>
    </Flex>
  )
}
