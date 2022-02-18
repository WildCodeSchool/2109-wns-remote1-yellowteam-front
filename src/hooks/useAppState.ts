/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserFragment } from 'src/generated/graphql'
import { login, logout } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useAppState = () => {
  const dispatch = useDispatch()

  const { isAuth, user } = useSelector((state: RootState) => state.app)

  const dispatchLogin = (userPayload: UserFragment) => dispatch(login(userPayload))

  const dispatchLogout = () => dispatch(logout())

  const userId = useMemo(() => user?.id ?? '', [user])

  return {
    isAuth,
    dispatchLogin,
    dispatchLogout,
    logout,
    userId,
    user,
  }
}

export default useAppState
