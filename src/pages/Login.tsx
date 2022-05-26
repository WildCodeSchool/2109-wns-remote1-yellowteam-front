/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import LoginForm from 'src/components/forms/LoginForm'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'

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
      <CustomBox
        position="relative"
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="full"
        flexGrow={1}
      >
        <Text
          w={['90%', '80%', '60%', '50%']}
          textAlign="left"
          my={5}
          fontSize={40}
          fontWeight="bold"
        >
          Login now
        </Text>
        <VStack w="full">
          <LoginForm />
          <Flex>
            <Text>Don&apos;t have an account ? </Text>
            <Text
              cursor="pointer"
              mx={2}
              color="orange"
              fontWeight="bold"
              onClick={() => navigate(`/register`)}
            >
              Sign up
            </Text>
          </Flex>
        </VStack>
        <Text bottom={5} position="absolute" color="gray">
          ©YTASK All right reserved
        </Text>
      </CustomBox>
    </Flex>
  )
}
