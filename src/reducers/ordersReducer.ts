/* eslint-disable no-case-declarations */
import {
  Order,
  OrdersActionTypes,
  ORDERS_FETCH_ASYNC,
  ORDERS_FILL,
  ORDERS_SET_FETCHING_ERROR,
  ORDERS_START_FETCHING,
  ORDERS_STOP_FETCHING,
} from '../bus/orders/types'

export type OrdersState = {
  data: Order[]
  isFetching: boolean
  error: boolean
}

const initialState: OrdersState = {
  data: [],
  isFetching: false,
  error: false,
}

export const ordersReducer = (state = initialState, action: OrdersActionTypes): OrdersState => {
  switch (action.type) {
    case ORDERS_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case ORDERS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      }
    case ORDERS_FILL:
      return {
        ...state,
        data: action.payload,
      }
    case ORDERS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: true,
      }
    case ORDERS_FETCH_ASYNC:
      return state
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
      return state
  }
}
