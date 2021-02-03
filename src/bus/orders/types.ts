export enum StatusList {
  new,
  cooking,
  delivered,
}

export type StatusType = keyof typeof StatusList
export type OrderFormModeType = 'add' | 'edit'

export type Order = {
  _id: string
  people: string
  phone: string
  address: string
  delivery: string
  paytype: string
  comment: string
  positions: string
  orderTotal: number
  status: StatusType
}

export type FormValues = {
  people: string
  phone: string
  address: string
  delivery: string
  paytype: string
  comment: string
  positions: string
  orderTotal: number
}

export const ORDERS_START_FETCHING = 'ORDERS_START_FETCHING'
export const ORDERS_STOP_FETCHING = 'ORDERS_STOP_FETCHING'
export const ORDERS_FILL = 'ORDERS_FILL'
export const ORDERS_SET_FETCHING_ERROR = 'ORDERS_SET_FETCHING_ERROR'
export const ORDERS_SET_SELECTED_ORDER_ID = 'ORDERS_SET_SELECTED_ORDER_ID'
export const ORDERS_RESET_SELECTED_ORDER_ID = 'ORDERS_RESET_SELECTED_ORDER_ID'
export const ORDERS_ADD_ORDER = 'ORDERS_ADD_ORDER'
export const ORDERS_DELETE_ORDER = 'ORDERS_DELETE_ORDER'
export const ORDERS_UPDATE_ORDER = 'ORDERS_UPDATE_ORDER'
export const ORDERS_SET_ADD_MODE = 'ORDERS_SET_ADD_MODE'
export const ORDERS_SET_EDIT_MODE = 'ORDERS_SET_EDIT_MODE'
export const ORDERS_RESET_MODE = 'ORDERS_RESET_MODE'

// Sync
export type OrdersStartFetchingAction = {
  type: typeof ORDERS_START_FETCHING
}

export type OrdersStopFetchingAction = {
  type: typeof ORDERS_STOP_FETCHING
}

export type OrdersFillAction = {
  type: typeof ORDERS_FILL
  payload: Order[]
}

export type OrdersSetFecthingErrorAction = {
  type: typeof ORDERS_SET_FETCHING_ERROR
}
export type OrdersSetSelectedOrderId = {
  type: typeof ORDERS_SET_SELECTED_ORDER_ID
  payload: string
}
export type OrdersResetSelectedOrderId = {
  type: typeof ORDERS_RESET_SELECTED_ORDER_ID
}
export type OrdersCreateOrderAction = {
  type: typeof ORDERS_ADD_ORDER
  payload: Order
}
export type OrdersDeleteOrderAction = {
  type: typeof ORDERS_DELETE_ORDER
  payload: string
}
export type OrdersUpdateOrderAction = {
  type: typeof ORDERS_UPDATE_ORDER
  payload: Order
}
export type OrdersSetAddMode = {
  type: typeof ORDERS_SET_ADD_MODE
}
export type OrdersSetEditMode = {
  type: typeof ORDERS_SET_EDIT_MODE
}
export type OrdersResetMode = {
  type: typeof ORDERS_RESET_MODE
}

// Async
export const ORDERS_FETCH_ASYNC = 'ORDERS_FETCH_ASYNC'
export const ORDERS_CREATE_ORDER_REQUEST = 'ORDERS_CREATE_ORDER_REQUEST'
export const ORDERS_UPDATE_ORDER_REQUEST = 'ORDERS_UPDATE_ORDER_REQUEST'
export const ORDERS_DELETE_ORDER_REQUEST = 'ORDERS_DELETE_ORDER_REQUEST'
export const ORDERS_CHANGE_ORDER_STATUS_REQUEST = 'ORDERS_CHANGE_ORDER_STATUS_REQUEST'

type OrdersFetchAsyncAction = {
  type: typeof ORDERS_FETCH_ASYNC
}
type OrdersCreateOrderRequestAsyncAction = {
  type: typeof ORDERS_CREATE_ORDER_REQUEST
  payload: FormValues
}
type OrdersUpdateOrderRequestAsyncAction = {
  type: typeof ORDERS_UPDATE_ORDER_REQUEST
  payload: Order
}
type OrdersDeleteOrderRequestAsyncAction = {
  type: typeof ORDERS_DELETE_ORDER_REQUEST
  payload: string
}
type OrdersChangeOrderStatusRequestAction = {
  type: typeof ORDERS_CHANGE_ORDER_STATUS_REQUEST
  payload: {
    currentOrder: Order
    newStatus: StatusType
  }
}

export type OrdersActionTypes =
  | OrdersFetchAsyncAction
  | OrdersStartFetchingAction
  | OrdersStopFetchingAction
  | OrdersFillAction
  | OrdersSetFecthingErrorAction
  | OrdersSetSelectedOrderId
  | OrdersResetSelectedOrderId
  | OrdersCreateOrderAction
  | OrdersDeleteOrderAction
  | OrdersCreateOrderRequestAsyncAction
  | OrdersUpdateOrderRequestAsyncAction
  | OrdersDeleteOrderRequestAsyncAction
  | OrdersChangeOrderStatusRequestAction
  | OrdersUpdateOrderAction
  | OrdersSetAddMode
  | OrdersSetEditMode
  | OrdersResetMode
