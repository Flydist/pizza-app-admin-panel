// Core
import { SagaIterator } from '@redux-saga/core'
import { takeEvery, all, call } from 'redux-saga/effects'

// Types
import { ORDERS_FETCH_ASYNC } from '../types'

// Workers
import { fetchOrders } from './workers'

function* watchFetchOrders(): SagaIterator {
  yield takeEvery(ORDERS_FETCH_ASYNC, fetchOrders)
}

export function* watchOrders(): SagaIterator {
  yield all([call(watchFetchOrders)])
}
