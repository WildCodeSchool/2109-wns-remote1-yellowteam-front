import { Box } from '@chakra-ui/react'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useMutateMeMutation } from '../../generated/graphql'
import UserNavBar from '../UserNavBar'

interface IProps {
  children: ReactNode
  connected: boolean
}

export default function Layout({ children, connected }: IProps): JSX.Element {
  const navigate = useNavigate()
  const { dispatchLogin, dispatchLogout } = useAppState()

  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin({
        email: data.me.email,
        id: data.me.id,
        roles: data.me.role,
      })
      navigate('/')
    },
    onError: () => {
      dispatchLogout()
    },
  })

  useEffect(() => {
    me()
  }, [])

  return (
    // <Box w="100%" h="100vh" overflowY="scroll">
    <Box height="inherit">
      {connected ? <UserNavBar /> : null}
      {children}
    </Box>
    // </Box>
  )
}
