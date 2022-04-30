/* eslint-disable react/jsx-props-no-spreading */
import { FormControl, useToast, Button } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { validationsLogin } from 'src/formResolvers/yupResolver'
import { useMutateLoginMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import InputWithError from './InputWithError'

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate()

  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
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
      <InputWithError
        type="text"
        isEditable
        name="email"
        errors={errors}
        register={register}
      />

      <InputWithError
        my={10}
        placeholder="Password"
        type="password"
        name="password"
        errors={errors}
        isEditable
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
        SIGN IN
      </Button>
    </FormControl>
  )
}
