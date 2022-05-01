/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import LoginForm from 'src/components/forms/LoginForm'

export default function Login(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Flex
      direction={['column', 'column', 'row', 'row']}
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="full"
      position="fixed"
    >
      <Flex
        background="orange"
        w="full"
        h={['40vh', '40vh', '100vh', '100vh']}
        alignItems="center"
        direction="column"
        justifyContent="center"
      >
        <Text textAlign="center" textStyle="titleLogin" color="#ffffff">
          Welcome
        </Text>
        <Text textAlign="center" textStyle="titleLogin" color="#ffffff">
          to Y-Task Manager
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="full"
        flexGrow={1}
      >
        <Text my={5} textStyle="loginText">
          Login now
        </Text>

        <LoginForm />

        <Text textStyle="subText" onClick={() => navigate(`/register`)}>
          Not Account ? Sign up
        </Text>
      </Flex>
    </Flex>
  )
}
