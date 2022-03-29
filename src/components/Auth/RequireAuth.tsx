import { Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useMutateMeMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import Login from 'src/pages/Login'

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
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
  }
  return children
}
