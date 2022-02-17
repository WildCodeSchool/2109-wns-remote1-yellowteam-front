import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from 'src/redux/actions'

import { RootState } from 'src/redux/reducers'

interface IAppStateHook {
  isAuth: boolean
  user: IUser
  dispatchLogin: (userPayload: IUser) => void
  dispatchLogout: () => void
  logout: () => void
}

const useAppState = (): IAppStateHook => {
  const dispatch = useDispatch()

  const { isAuth, user } = useSelector((state: RootState) => state.app)

  const dispatchLogin = (userPayload: IUser) => dispatch(login(userPayload))

  const dispatchLogout = () => dispatch(logout())

  return {
    isAuth,
    dispatchLogin,
    dispatchLogout,
    logout,
    user,
  }
}

export default useAppState
