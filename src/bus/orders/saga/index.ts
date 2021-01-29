// Core
import { SagaIterator } from '@redux-saga/core'
import { takeEvery, all, call } from 'redux-saga/effects'

// Types
import {
  ORDERS_CHANGE_ORDER_STATUS_REQUEST,
  ORDERS_CREATE_ORDER_REQUEST,
  ORDERS_DELETE_ORDER_REQUEST,
  ORDERS_FETCH_ASYNC,
  ORDERS_UPDATE_ORDER_REQUEST,
} from '../types'

// Workers
import {
  fetchOrders, deleteOrderWorker, changeOrderStatus, createOrderWorker, updateOrderWorker,
} from './workers'

function* watchFetchOrders(): SagaIterator {
  yield takeEvery(ORDERS_FETCH_ASYNC, fetchOrders)
}
function* watchCreateOrder(): SagaIterator {
  yield takeEvery(ORDERS_CREATE_ORDER_REQUEST, createOrderWorker)
}
function* watchUpdateOrder(): SagaIterator {
  yield takeEvery(ORDERS_UPDATE_ORDER_REQUEST, updateOrderWorker)
}
function* watchDeleteOrder(): SagaIterator {
  yield takeEvery(ORDERS_DELETE_ORDER_REQUEST, deleteOrderWorker)
}
function* watchUpdateOrderStatus(): SagaIterator {
  yield takeEvery(ORDERS_CHANGE_ORDER_STATUS_REQUEST, changeOrderStatus)
}

export function* watchOrders(): SagaIterator {
  yield all(
    [
      call(watchFetchOrders),
      call(watchDeleteOrder),
      call(watchUpdateOrderStatus),
      call(watchUpdateOrder),
      call(watchCreateOrder),
    ],
  )
}
