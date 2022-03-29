/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import mainTheme from 'src/theme/mainTheme'
import useAppState from 'src/hooks/useAppState'

export default function Register(): JSX.Element {
  const navigate = useNavigate()

  // const [cookies, setCookies] = useCookies()
  // const { dispatchLogin } = useAppState()

  const { handleSubmit, register } = useForm()

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
          onClick={() => alert('sdfsdf')}
        >
          SIGN IN
        </Button>
        {/* <Text
          textAlign="center"
          textStyle="titleLogin"
          color="#ffffff"
          padding={121}
        >
          No account ? Sign up
        </Text> */}
        <Text textStyle="subText" onClick={() => navigate(`/login`)}>
          Already have an account ? Sign in
        </Text>
      </Flex>
    </Flex>
  )
}
