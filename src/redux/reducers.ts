/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import board from './slices/board'
import filter from './slices/filters'

const rootReducer = combineReducers({ app, board, filter })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
