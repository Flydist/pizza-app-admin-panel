import {
  Order,
  OrdersActionTypes,
  ORDERS_FETCH_ASYNC,
  ORDERS_FILL,
  ORDERS_SET_FETCHING_ERROR,
  ORDERS_START_FETCHING,
  ORDERS_STOP_FETCHING,
} from '../types'

// Sync
export const startFetching = (): OrdersActionTypes => ({
  type: ORDERS_START_FETCHING,
})
export const stopFetching = (): OrdersActionTypes => ({
  type: ORDERS_STOP_FETCHING,
})
export const fill = (payload: Order[]): OrdersActionTypes => ({
  type: ORDERS_FILL,
  payload,
})
export const setFecthingError = (): OrdersActionTypes => ({
  type: ORDERS_SET_FETCHING_ERROR,
})

// Async
export const fetchAsync = (): OrdersActionTypes => ({
  type: ORDERS_FETCH_ASYNC,
})
