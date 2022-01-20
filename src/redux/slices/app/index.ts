/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
  user: IUser
  isAuth: boolean
}

const initialState: IAppState = {
  user: {
    email: '',
    id: '035ed1d3-fa2c-4f36-b81e-ad8895239cbf',
    roles: [],
  },
  isAuth: false,
}

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true
      state.user = {
        email: action.payload.email,
        id: action.payload.id,
        roles: action.payload.roles,
      }
    },
    logout: () => initialState,
  },
})

export const { login, logout } = appSlice.actions

export default appSlice.reducer
