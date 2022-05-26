/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  Icon,
  Button,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'

import { validationsRegister } from 'src/formResolvers/yupResolver'
import {
  useMutateLoginMutation,
  useMutateRegisterMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import InputWithError from './InputWithError'

export default function RegisterForm(): JSX.Element {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
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
    confirmPassword,
  }: FieldValues): Promise<void> => {
    if (password !== confirmPassword) {
      return
    }
    mutateRegister({
      variables: { data: { first_name, last_name, email, password } },
      onCompleted: () => {
        login({
          variables: { data: { email, password } },
        })
      },
    })
  }

  const handleClick = () => setShow(!show)

  return (
    <FormControl
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      w={['90%', '80%', '60%', '50%']}
    >
      <FormLabel mt={2} htmlFor="firstname" w="full" textAlign="left">
        First name
      </FormLabel>
      <InputWithError
        id="firstname"
        type="text"
        isEditable
        name="first_name"
        errors={errors}
        register={register}
      />

      <FormLabel mt={2} htmlFor="lastname" w="full" textAlign="left">
        Last name
      </FormLabel>
      <InputWithError
        id="lastname"
        type="text"
        isEditable
        name="last_name"
        errors={errors}
        register={register}
      />

      <FormLabel mt={2} htmlFor="email" w="full" textAlign="left">
        Email
      </FormLabel>
      <InputWithError
        id="email"
        type="text"
        isEditable
        my={2}
        name="email"
        errors={errors}
        register={register}
      />

      <FormLabel mt={2} htmlFor="password" w="full" textAlign="left">
        Password
      </FormLabel>
      <InputGroup>
        <InputWithError
          id="password"
          type={show ? 'text' : 'password'}
          isEditable
          name="password"
          errors={errors}
          register={register}
        />
        <InputRightElement width="4.5rem">
          <Button variant="ghost" h="1.75rem" size="sm" onClick={handleClick}>
            <Icon onClick={handleClick} as={AiFillEye} />
          </Button>
        </InputRightElement>
      </InputGroup>

      <FormLabel mt={2} htmlFor="confirmPassword" w="full" textAlign="left">
        Confirm password
      </FormLabel>
      <InputGroup>
        <InputWithError
          id="confirmPassword"
          type={show ? 'text' : 'password'}
          isEditable
          name="confirmPassword"
          errors={errors}
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
        px={2}
        variant="action"
        onClick={handleSubmit(onSubmit)}
        isLoading={loading}
        isDisabled={loading && true}
      >
        SIGN UP
      </Button>
    </FormControl>
  )
}
