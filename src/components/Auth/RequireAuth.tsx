import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { useMutateMeMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

import authRoutes from 'src/config/auth.routes'
import LoadingScreen from '../Lotties/Loader/Loader.animation'

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

  if (loading) return <LoadingScreen />

  if (!isAuth || !user) {
    return <AuthRoutes />
  }
  return children
}
