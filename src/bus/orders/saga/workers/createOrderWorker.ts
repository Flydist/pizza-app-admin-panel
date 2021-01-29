import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { api } from '../../../../api'
import { addOrder } from '../../actions'
import { FormValues } from '../../types'

type Params = {
  type: string
  payload: FormValues
}

export function* createOrderWorker({ payload }: Params): SagaIterator {
  try {
    const orderWithStatus = { ...payload, status: 'new', orderTotal: Number(payload.orderTotal) }
    const responseData = yield call(api.orders.createOrder, orderWithStatus)
    yield put(addOrder(responseData))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
