export type StatusType = 'new' | 'cooking' | 'delivered'

export type Order = {
  _id: string
  people: string
  phone: string
  address: string
  delivery: string
  paytype: string
  comment: string
  positions: string
  orderTotal: number,
  status: StatusType,
}

export const ORDERS_START_FETCHING = 'ORDERS_START_FETCHING'
export const ORDERS_STOP_FETCHING = 'ORDERS_STOP_FETCHING'
export const ORDERS_FILL = 'ORDERS_FILL'
export const ORDERS_SET_FETCHING_ERROR = 'ORDERS_SET_FETCHING_ERROR'

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

// Async
export const ORDERS_FETCH_ASYNC = 'ORDERS_FETCH_ASYNC'
type OrdersFetchAsyncAction = {
  type: typeof ORDERS_FETCH_ASYNC
}

export type OrdersActionTypes =
  | OrdersFetchAsyncAction
  | OrdersStartFetchingAction
  | OrdersStopFetchingAction
  | OrdersFillAction
  | OrdersSetFecthingErrorAction
