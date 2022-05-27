import { Status } from 'src/generated/graphql'
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFIlterState {
  status: Status | undefined
  owned: boolean
}

const initialState: IFIlterState = {
  status: undefined,
  owned: false,
}

const appSlice = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    setStatus: (state: IFIlterState, action: PayloadAction<Status>) => {
      state.status = action.payload
    },
    setOwned: (state: IFIlterState, action: PayloadAction<boolean>) => {
      state.owned = action.payload
    },
  },
})

export const { setStatus, setOwned } = appSlice.actions

export default appSlice.reducer
