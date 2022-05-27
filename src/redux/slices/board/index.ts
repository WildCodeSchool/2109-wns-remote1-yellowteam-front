import { Status } from 'src/generated/graphql'
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IBoardState {
  hoveredList: string | null
  selectedProject: string
}

const initialState: IBoardState = {
  hoveredList: null,
  selectedProject: '',
}

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setHoveredList: (state: IBoardState, action: PayloadAction<Status>) => {
      state.hoveredList = action.payload
    },
    setSelectedProject: (state: IBoardState, action: PayloadAction<string>) => {
      state.selectedProject = action.payload
    },
  },
})

export const { setHoveredList, setSelectedProject } = appSlice.actions

export default appSlice.reducer
