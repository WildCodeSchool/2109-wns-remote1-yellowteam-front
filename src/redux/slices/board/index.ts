import { Status } from 'src/generated/graphql'
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IBoardState {
  hoveredList: string | null
}

const initialState: IBoardState = {
  hoveredList: null,
}

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setHoveredList: (state, action: PayloadAction<Status>) => {
      state.hoveredList = action.payload
    },
  },
})

export const { setHoveredList } = appSlice.actions

export default appSlice.reducer
