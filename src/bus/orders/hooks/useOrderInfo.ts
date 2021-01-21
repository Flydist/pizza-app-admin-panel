import { useSelector } from 'react-redux'
import { AppState } from '../../../init/rootReducer'
import { OrdersState } from '../../../reducers/ordersReducer'
import { Order } from '../types'

export const useOrderInfo = (): Order => {
  const {
    data,
    selectedOrderId,
  } = useSelector<AppState, OrdersState>((state) => state.ordersReducer)
  const currentOrder = data.filter((item) => item._id === selectedOrderId)[0]
  const {
    people, phone, address, delivery, paytype, comment, positions, orderTotal, _id, status,
  } = currentOrder

  return {
    people, phone, address, delivery, paytype, comment, positions, orderTotal, _id, status,
  }
}
