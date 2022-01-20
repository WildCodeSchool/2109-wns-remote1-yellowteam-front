/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'

import app from './slices/app'

const rootReducer = combineReducers({ app })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
