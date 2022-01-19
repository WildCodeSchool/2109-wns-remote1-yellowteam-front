import React from 'react'
import { Flex } from '@chakra-ui/react'
import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

const GET_USERS = gql`
  query users {
    users {
      email
    }
  }
`

const Home: React.FC = () => {
  const { data, error, loading } = useQuery(GET_USERS)
  const history = useNavigate()

  console.log(data)

  return (
    <Flex direction="column" minH="100vh">
      <label htmlFor="">
        <button type="button" onClick={() => history('/')}>
          LINK
        </button>
      </label>
      init
    </Flex>
  )
}

export default Home
