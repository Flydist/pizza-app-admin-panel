import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { api } from '../../../../api'
import { updateOrder } from '../../actions'
import { Order } from '../../types'

type Params = {
  type: string
  payload: Order
}

export function* updateOrderWorker({ payload }: Params): SagaIterator {
  try {
    yield call(api.orders.updateOrder, payload)
    yield put(updateOrder(payload))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
