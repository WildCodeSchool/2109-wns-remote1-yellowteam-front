import { FormLabel } from '@chakra-ui/react'
import { memo } from 'react'

type Props = {
  title: string
  htmlFor: string
}

function Label({ title, htmlFor }: Props): JSX.Element {
  return <FormLabel htmlFor={htmlFor}>{title}</FormLabel>
}

export default memo(Label)
