import { Order, StatusType } from '../bus/orders/types'

export const filterDataByStatus = (status: StatusType, data: Order[]): Order[] => {
  const newData = data.filter((item) => item.status === status)
  return newData
}
