import { FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import InputWithError from '../InputWithError'

export default function EditProjectFormEditor(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <FormControl>
      <Input />
    </FormControl>
  )
}
