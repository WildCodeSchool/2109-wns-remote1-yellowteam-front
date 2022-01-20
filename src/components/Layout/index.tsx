import { useMutation } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { useMutateLoginMutation } from 'generated/graphql'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: IProps): JSX.Element {
  const navigate = useNavigate()

  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {},
    onError: () => {
      navigate('/login')
    },
  })

  useEffect(() => {
    login()
  }, [])

  return (
    <Box w="100%" h="100vh" overflowY="scroll">
      {children}
    </Box>
  )
}
