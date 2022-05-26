import { FormLabel } from '@chakra-ui/react'

type Props = {
  title: string
  htmlFor: string
}

export default function Label({ title, htmlFor }: Props): JSX.Element {
  return <FormLabel htmlFor={htmlFor}>{title}</FormLabel>
}
