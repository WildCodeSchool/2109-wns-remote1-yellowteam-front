/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MutationUpdateUserArgs, UserFragment } from 'src/generated/graphql'

interface IAppState {
  user: UserFragment | undefined
  isAuth: boolean
}

const initialState: IAppState = {
  user: undefined,
  isAuth: !!document.cookie,
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
      state.user = undefined
      state.isAuth = false
    },
    updateUser: (state, action: PayloadAction<UserFragment>) => {
      state.user = action.payload
    },
  },
})

export const { login, logout, updateUser } = appSlice.actions

export default appSlice.reducer
