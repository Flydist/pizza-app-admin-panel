// Core
import { SagaIterator } from '@redux-saga/core'
import { takeEvery, all, call } from 'redux-saga/effects'

// Types
import { ORDERS_CHANGE_ORDER_STATUS_REQUEST, ORDERS_DELETE_ORDER_REQUEST, ORDERS_FETCH_ASYNC } from '../types'

// Workers
import { fetchOrders, deleteOrderWorker, changeOrderStatus } from './workers'

function* watchFetchOrders(): SagaIterator {
  yield takeEvery(ORDERS_FETCH_ASYNC, fetchOrders)
}
function* watchDeleteOrder(): SagaIterator {
  yield takeEvery(ORDERS_DELETE_ORDER_REQUEST, deleteOrderWorker)
}
function* watchUpdateOrderStatus(): SagaIterator {
  yield takeEvery(ORDERS_CHANGE_ORDER_STATUS_REQUEST, changeOrderStatus)
}

export function* watchOrders(): SagaIterator {
  yield all([call(watchFetchOrders), call(watchDeleteOrder), call(watchUpdateOrderStatus)])
}
