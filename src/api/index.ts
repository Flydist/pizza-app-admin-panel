import { Order } from '../bus/orders/types'

const root = 'http://localhost:4000'

type ApiType = {
  orders: {
    fetch: () => Promise<Order[]>
    delete: (id: string) => Promise<string>
    updateOrder: (newOrder: Order) => Promise<Order>
  }
}

export const api: ApiType = {
  orders: {
    fetch: () => fetch(`${root}/pizza`, {
      method: 'GET',
    })
      .then((response) => response.json()),
    delete: (id) => fetch(`${root}/pizza/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text()),
    updateOrder: (newOrder) => fetch(`${root}/pizza/${newOrder._id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json()),
  },
}
