import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from 'src/redux/actions'

import { RootState } from 'src/redux/reducers'

interface IAppStateHook {
  isAuth: boolean
  user: IUser
  dispatchLogin: (userPayload: IUser) => void
  logout: () => void
}

const useAppState = (): IAppStateHook => {
  const dispatch = useDispatch()

  const { isAuth, user } = useSelector((state: RootState) => state.app)

  const dispatchLogin = (userPayload: IUser) => dispatch(login(userPayload))

  return {
    isAuth,
    dispatchLogin,
    logout,
    user,
  }
}

export default useAppState
