import { Order } from '../bus/orders/types'

const root = 'http://localhost:4000'

export type FetchDataType<T> = () => Promise<T>

type ApiType = {
  orders: {
    fetch: FetchDataType<Order[]>
  }
}

export const api: ApiType = {
  orders: {
    fetch: (): Promise<Order[]> => fetch(`${root}/pizza`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => data),
  },
}
