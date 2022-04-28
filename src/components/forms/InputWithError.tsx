/* eslint-disable react/jsx-props-no-spreading */
import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import FormError from './InputError'

type Props = {
  register: UseFormRegister<FieldValues>
  isEditable: boolean
  name: string
  errors: {
    [x: string]: FieldError
  }
}

export default function InputWithError({
  isEditable,
  register,
  name,
  errors,
}: Props): JSX.Element {
  const isError = () => errors[name] !== undefined

  return (
    <Box position="relative">
      <Input
        border={isError() ? '2px solid red' : ''}
        borderColor={isError() ? 'red.500' : ''}
        my={2}
        disabled={!isEditable}
        variant={!isEditable ? 'action' : 'filled'}
        aria-label={name}
        type="text"
        {...register(name)}
      />
      <FormError name={name} errors={errors} />
    </Box>
  )
}
