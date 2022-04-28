/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'
import board from './slices/board'

const rootReducer = combineReducers({ app, board })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
