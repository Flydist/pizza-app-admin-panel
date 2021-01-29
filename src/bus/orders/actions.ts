import {
  FormValues,
  Order,
  OrdersActionTypes,
  ORDERS_CHANGE_ORDER_STATUS_REQUEST,
  ORDERS_ADD_ORDER,
  ORDERS_CREATE_ORDER_REQUEST,
  ORDERS_DELETE_ORDER,
  ORDERS_DELETE_ORDER_REQUEST,
  ORDERS_FETCH_ASYNC,
  ORDERS_FILL,
  ORDERS_SET_ADD_MODE,
  ORDERS_SET_EDIT_MODE,
  ORDERS_SET_FETCHING_ERROR,
  ORDERS_SET_SELECTED_ORDER_ID,
  ORDERS_START_FETCHING,
  ORDERS_STOP_FETCHING,
  ORDERS_UPDATE_ORDER,
  StatusType,
  ORDERS_UPDATE_ORDER_REQUEST,
  ORDERS_RESET_MODE,
  ORDERS_RESET_SELECTED_ORDER_ID,
} from './types'

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
export const setSelectedOrderId = (id: string): OrdersActionTypes => ({
  type: ORDERS_SET_SELECTED_ORDER_ID,
  payload: id,
})
export const resetSelectedOrderId = (): OrdersActionTypes => ({
  type: ORDERS_RESET_SELECTED_ORDER_ID,
})
export const addOrder = (order: Order): OrdersActionTypes => ({
  type: ORDERS_ADD_ORDER,
  payload: order,
})
export const deleteOrder = (id: string): OrdersActionTypes => ({
  type: ORDERS_DELETE_ORDER,
  payload: id,
})
export const updateOrder = (newOrder: Order): OrdersActionTypes => ({
  type: ORDERS_UPDATE_ORDER,
  payload: newOrder,
})
export const setAddMode = (): OrdersActionTypes => ({
  type: ORDERS_SET_ADD_MODE,

})
export const setEditMode = (): OrdersActionTypes => ({
  type: ORDERS_SET_EDIT_MODE,
})
export const resetMode = (): OrdersActionTypes => ({
  type: ORDERS_RESET_MODE,
})

// Async
export const fetchAsync = (): OrdersActionTypes => ({
  type: ORDERS_FETCH_ASYNC,
})
export const createOrderRequestAsync = (newOrder: FormValues): OrdersActionTypes => ({
  type: ORDERS_CREATE_ORDER_REQUEST,
  payload: newOrder,
})
export const updateOrderRequestAsync = (newOrder: Order): OrdersActionTypes => ({
  type: ORDERS_UPDATE_ORDER_REQUEST,
  payload: newOrder,
})
export const deleteOrderRequestAsync = (id: string): OrdersActionTypes => ({
  type: ORDERS_DELETE_ORDER_REQUEST,
  payload: id,
})
export const changeStatusRequestAsync = (
  currentOrder: Order,
  newStatus: StatusType,
): OrdersActionTypes => ({
  type: ORDERS_CHANGE_ORDER_STATUS_REQUEST,
  payload: { currentOrder, newStatus },
})
