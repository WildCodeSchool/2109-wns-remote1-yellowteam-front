/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserFragment } from 'src/generated/graphql'

interface IAppState {
  user: UserFragment
  isAuth: boolean
}

const initialState: IAppState = {
  user: {
    id: '',
    email: '',
    first_name: '',
    avatar: '',
    last_name: '',
    phone_number: '',
    role: [],
    cover_picture: '',
  },
  isAuth: false,
}

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserFragment>) => {
      state.isAuth = true
      state.user = action.payload
    },
    logout: (state) => {
      state.user = initialState.user
      state.isAuth = false
    },
    updateUser: (state, action: PayloadAction<Partial<UserFragment>>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      }
    },
  },
})

export const { login, logout, updateUser } = appSlice.actions

export default appSlice.reducer
