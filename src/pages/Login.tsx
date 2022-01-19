import { gql, useMutation, useQuery } from '@apollo/client'
import { Button, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      email
    }
  }
`

export default function Login(): JSX.Element {
  const [login, { data, error, loading }] = useMutation(LOGIN)
  const history = useNavigate()

  useEffect(() => {
    login({
      variables: { data: { email: 'admin@admin.fr', password: 'admin1337' } },
    })
  }, [])

  console.log(data)

  return (
    <Flex direction="column">
      <Button zIndex={999} type="button" onClick={() => history('/')}>
        LINK
      </Button>
    </Flex>
  )
}
