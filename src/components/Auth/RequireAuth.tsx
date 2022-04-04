import { Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { useMutateMeMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

import authRoutes from 'src/config/authConfig'

const AuthRoutes = () => useRoutes(authRoutes)

export default function RequireAuth({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const { isAuth, user } = useAppState()
  const { dispatchLogin, dispatchLogout } = useAppState()

  const [me, { loading }] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin(data.me)
    },
    onError: () => {
      dispatchLogout()
    },
  })

  useEffect(() => {
    me()
  }, [])

  if (!isAuth && loading) return <Spinner />

  if (!isAuth || !user) {
    return <AuthRoutes />
  }
  return children
}
