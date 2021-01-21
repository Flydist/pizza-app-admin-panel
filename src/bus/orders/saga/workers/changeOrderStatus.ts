import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { api } from '../../../../api'
import { updateOrder } from '../../actions'
import { Order, StatusType } from '../../types'

type Params = {
  type: string,
  payload: {
    currentOrder: Order,
    newStatus: StatusType,
  }
}

export function* changeOrderStatus({ payload: { currentOrder, newStatus } }: Params): SagaIterator {
  try {
    const newOrder = {
      ...currentOrder,
      status: newStatus,
    }
    yield call(api.orders.updateOrder, newOrder)
    yield put(updateOrder(newOrder))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
