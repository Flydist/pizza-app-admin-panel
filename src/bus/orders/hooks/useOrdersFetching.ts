import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../init/rootReducer'
import { OrdersState } from '../../../reducers/ordersReducer'
import { fetchAsync } from '../components/actions'

export const useOrdersFetching = (): OrdersState => {
  const { data, isFetching, error } = useSelector<AppState, OrdersState>(
    (state) => state.ordersReducer,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsync())
  }, [dispatch])

  return {
    data,
    isFetching,
    error,
  }
}
