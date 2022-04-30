/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from 'src/components/forms/RegisterForm'

export default function Register(): JSX.Element {
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
          Register now
        </Text>

        <RegisterForm />

        <Text textStyle="subText" onClick={() => navigate(`/login`)}>
          Already have an account ? Sign in
        </Text>
      </Flex>
    </Flex>
  )
}
