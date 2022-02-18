/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserFragment } from 'src/generated/graphql'

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
      state.user= undefined 
      state.isAuth= false
    },
  },
})

export const { login, logout } = appSlice.actions

export default appSlice.reducer
