/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMemo } from 'react'
// import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { UserFragment } from 'src/generated/graphql'
import { login, logout } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useAppState = () => {
  const dispatch = useDispatch()
  // const [cookies, setCookies] = useCookies()

  const { isAuth, user } = useSelector((state: RootState) => state.app)


  const dispatchLogin = (userPayload: UserFragment) => {
    dispatch(login(userPayload))
}
  const dispatchLogout = () => {
    dispatch(logout())
  
  }

  const userId = useMemo(() => user?.id ?? '', [user])

  return {
    isAuth,
    dispatchLogin,
    dispatchLogout,
    userId,
    user,
  }
}

export default useAppState
