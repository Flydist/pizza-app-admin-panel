/* eslint-disable no-case-declarations */
import {
  Order,
  OrdersActionTypes,
  ORDERS_CHANGE_ORDER_STATUS_REQUEST,
  ORDERS_DELETE_ORDER,
  ORDERS_DELETE_ORDER_REQUEST,
  ORDERS_FETCH_ASYNC,
  ORDERS_FILL,
  ORDERS_SET_FETCHING_ERROR,
  ORDERS_SET_SELECTED_ORDER_ID,
  ORDERS_START_FETCHING,
  ORDERS_STOP_FETCHING,
  ORDERS_UPDATE_ORDER,
} from '../bus/orders/types'

export type OrdersState = {
  data: Order[]
  selectedOrderId: string
  isFetching: boolean
  error: boolean
}

const initialState: OrdersState = {
  data: [],
  selectedOrderId: '',
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
    case ORDERS_SET_SELECTED_ORDER_ID:
      return {
        ...state,
        selectedOrderId: action.payload,
      }
    case ORDERS_DELETE_ORDER:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload),
        selectedOrderId: '',
      }
    case ORDERS_UPDATE_ORDER:
      return {
        ...state,
        data: state.data.map((item) => (item._id === action.payload._id ? action.payload : item)),
      }
    case ORDERS_FETCH_ASYNC:
      return state
    case ORDERS_DELETE_ORDER_REQUEST:
      return state
    case ORDERS_CHANGE_ORDER_STATUS_REQUEST:
      return state
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
      return state
  }
}
