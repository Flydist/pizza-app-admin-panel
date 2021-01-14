import { SagaIterator } from 'redux-saga'
import { all, call } from 'redux-saga/effects'

import { watchOrders } from '../bus/orders/saga'

export function* rootSaga(): SagaIterator {
  yield all([call(watchOrders)])
}
