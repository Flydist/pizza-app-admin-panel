import { combineReducers } from 'redux'
import { ordersReducer } from '../reducers/ordersReducer'

export const rootReducer = combineReducers({
  ordersReducer,
})

export type AppState = ReturnType<typeof rootReducer>
