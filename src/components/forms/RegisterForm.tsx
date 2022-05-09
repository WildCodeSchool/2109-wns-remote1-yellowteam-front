/* eslint-disable react/jsx-props-no-spreading */
import { FormControl, Button } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { validationsRegister } from 'src/formResolvers/yupResolver'
import {
  useMutateLoginMutation,
  useMutateRegisterMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import InputWithError from './InputWithError'

export default function RegisterForm(): JSX.Element {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
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
    <FormControl
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      w={['90%', '80%', '60%', '50%']}
    >
      <InputWithError
        type="text"
        isEditable
        my={2}
        name="first_name"
        placeholder="Firstname"
        errors={errors}
        register={register}
      />

      <InputWithError
        type="text"
        isEditable
        my={2}
        name="last_name"
        placeholder="Lastname"
        errors={errors}
        register={register}
      />

      <InputWithError
        type="text"
        isEditable
        my={2}
        name="email"
        placeholder="Email"
        errors={errors}
        register={register}
      />

      <InputWithError
        type="text"
        isEditable
        my={2}
        name="password"
        placeholder="Password"
        errors={errors}
        register={register}
      />

      <Button
        my={3}
        w="full"
        backgroundColor="orange"
        px={2}
        color="#ffffff"
        onClick={handleSubmit(onSubmit)}
        isLoading={loading}
        isDisabled={(!isValid || loading) && true}
      >
        SIGN UP
      </Button>
    </FormControl>
  )
}
