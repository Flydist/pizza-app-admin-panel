import React, { FC } from 'react'
import { GrUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { filterDataByStatus } from '../../../../helpers/filterDataByStatus'
import { useOrdersFetching } from '../../hooks/useOrdersFetching'
import { fetchAsync } from '../../actions'
import { OrdersTable } from '../OrdersTable/OrdersTable'
import { ListContainer, UpdateButton } from './OrdersList.styled'

export const OrdersList: FC = () => {
  const { data, isFetching, error } = useOrdersFetching()
  const dispatch = useDispatch()

  const errorMessage = error && <h2>Что-то пошло не так...</h2>
  const loader = isFetching && <p>loading...</p>

  return (
    <ListContainer>
      {errorMessage}
      {loader}
      {!isFetching && !error && (
        <>
          <UpdateButton onClick={() => dispatch(fetchAsync())}>
            <GrUpdate />
          </UpdateButton>
          <OrdersTable data={filterDataByStatus('new', data)} tableName="Новые заказы" />
          <OrdersTable data={filterDataByStatus('cooking', data)} tableName="Готовятся" />
          <OrdersTable data={filterDataByStatus('delivered', data)} tableName="Выданы" />
        </>
      )}
    </ListContainer>
  )
}
