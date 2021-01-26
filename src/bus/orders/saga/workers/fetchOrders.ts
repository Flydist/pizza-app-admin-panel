import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { api } from '../../../../api'
import {
  startFetching, stopFetching, fill, setFecthingError,
} from '../../actions'

export function* fetchOrders(): SagaIterator {
  try {
    yield put(startFetching())
    const data = yield call(api.orders.fetch)
    yield put(fill(data))
  } catch {
    yield put(setFecthingError())
  } finally {
    yield put(stopFetching())
  }
}
