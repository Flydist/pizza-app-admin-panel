import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { api } from '../../../../api'
import { deleteOrder } from '../../actions'

type Params = {
  type: string
  payload: string
}

export function* deleteOrderWorker({ payload }: Params): SagaIterator {
  try {
    yield call(api.orders.delete, payload)
    yield put(deleteOrder(payload))
  } catch (e) {
    // ignore deleting
  }
}
