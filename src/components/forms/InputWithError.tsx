/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Input, InputProps } from '@chakra-ui/react'
import { memo } from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import FormError from './InputError'

type Props = {
  register: UseFormRegister<FieldValues>
  isEditable: boolean
  name: string
  errors: {
    [x: string]: FieldError
  }
  type: string
  placeholder?: string
} & InputProps

function InputWithError({
  isEditable,
  register,
  placeholder,
  name,
  type,
  errors,
  ...rest
}: Props): JSX.Element {
  const isError = errors[name] !== undefined

  return (
    <Box w="full" position="relative" display="flex" flexDirection="column">
      <Input
        {...rest}
        placeholder={placeholder ? placeholder : undefined}
        type={type}
        isInvalid={isError}
        errorBorderColor="red.500"
        disabled={!isEditable}
        aria-label={name}
        {...register(name)}
      />
      <FormError name={name} errors={errors} />
    </Box>
  )
}

export default memo(InputWithError)
