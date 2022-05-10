import { useEffect, useState } from 'react'
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
  const { isAuth } = useAppState()
  const { dispatchLogin, dispatchLogout } = useAppState()
  const [isCheckingCookie, setIsCheckingCookie] = useState(true)

  const [me, { loading }] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin(data.me)
      return setIsCheckingCookie(false)
    },
    onError: () => {
      dispatchLogout()
      setIsCheckingCookie(false)
    },
  })

  useEffect(() => {
    me()
  }, [])

  if (isCheckingCookie || loading) return <LoadingScreen />

  if (!isAuth) {
    return <AuthRoutes />
  }

  return children
}
