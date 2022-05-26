/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  useToast,
  Button,
  FormLabel,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { validationsLogin } from 'src/formResolvers/yupResolver'
import { useMutateLoginMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import { AiFillEye } from 'react-icons/ai'
import InputWithError from './InputWithError'

export default function LoginForm(): JSX.Element {
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(validationsLogin),
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

  const handleClick = () => setShow(!show)

  const onSubmit = async ({ email, password }: FieldValues): Promise<void> => {
    login({
      variables: { data: { email, password } },
    })
  }

  return (
    <FormControl
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      w={['90%', '80%', '60%', '50%']}
    >
      <FormLabel w="full" textAlign="left">
        Email
      </FormLabel>
      <InputWithError
        w="full"
        type="text"
        isEditable
        name="email"
        errors={errors}
        register={register}
      />

      <Flex mt={10} w="full">
        <FormLabel w="full" textAlign="left">
          Password
        </FormLabel>
        <Text
          onClick={() => navigate('/forgot-password')}
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          w="full"
          whiteSpace="nowrap"
          textAlign="right"
        >
          Forgot your password ?
        </Text>
      </Flex>
      <InputGroup size="md">
        <InputWithError
          placeholder="Password"
          type={show ? 'text' : 'password'}
          name="password"
          errors={errors}
          isEditable
          register={register}
        />
        <InputRightElement width="4.5rem">
          <Button variant="ghost" h="1.75rem" size="sm" onClick={handleClick}>
            <Icon onClick={handleClick} as={AiFillEye} />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        my={3}
        w="full"
        variant="action"
        px={2}
        onClick={handleSubmit(onSubmit)}
        isLoading={loading}
      >
        SIGN IN
      </Button>
    </FormControl>
  )
}
