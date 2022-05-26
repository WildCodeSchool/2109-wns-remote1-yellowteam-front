/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'

export default function ForgotPassword(): JSX.Element {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const toast = useToast()

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true)
    axios
      .post(
        `${process.env.REACT_APP_SERVER_SERVICES_URL}/forgotpassword`,
        data,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then(() => {
        setIsLoading(false)
        toast({
          description: 'Check your email for a link to reset your password',
          status: 'success',
          duration: 5000,
        })
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  return (
    <CustomBox
      overflow="hidden"
      position="relative"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      w="100vw"
      h="100vh"
    >
      <Text fontWeight="bold" zIndex={2} fontSize={60}>
        Y TASK
      </Text>
      <Flex
        bg="gray.800"
        direction="column"
        p={10}
        w={['90%', '90%', '70%', '50%', '30%']}
        rounded={5}
        shadow="lg"
      >
        <Text my={5} w="full" fontWeight="normal" zIndex={2} fontSize={16}>
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </Text>

        <Text w="full" textAlign="left">
          Email
        </Text>
        <Input {...register('email')} my={2} w="full" border="3px solid gray" />
        <Button
          onClick={handleSubmit(onSubmit)}
          my={2}
          w="full"
          variant="action"
          isLoading={isLoading}
        >
          CONTINUE
        </Button>
        <Text my={5} w="full" fontWeight="normal" zIndex={2} fontSize={10}>
          The provided link is valid for 10min, if you don’t receive the email,
          please check your spam folder or click{' '}
          <Button
            p={0}
            fontWeight="normal"
            zIndex={2}
            fontSize={10}
            variant="ghost"
            onClick={handleSubmit(onSubmit)}
          >
            here
          </Button>
          to send another mail
        </Text>
      </Flex>

      <Flex justifyContent="center" zIndex={2} flexDirection="row">
        <Text fontWeight="normal" fontSize={16}>
          Don&apos;t have an account ?
        </Text>
        <Text
          onClick={() => navigate('/register')}
          cursor="pointer"
          ml={1}
          fontSize={16}
          color="orange"
          fontWeight="bold"
        >
          Sign up
        </Text>
      </Flex>
    </CustomBox>
  )
}
