import React, { FC } from 'react'
import { GrUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { filterDataByStatus } from '../../../../helpers/filterDataByStatus'
import { useOrdersFetching } from '../../hooks/useOrdersFetching'
import { fetchAsync, setAddMode } from '../../actions'
import { OrdersTable } from '../OrdersTable/OrdersTable'
import { AddOrderButton, ListContainer, UpdateButton } from './OrdersList.styled'
import { statusVariants } from '../../../../constants/constants'

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
          <AddOrderButton variant="success" onClick={() => dispatch(setAddMode())}>Добавить заказ</AddOrderButton>
          {
            statusVariants.map((item) => (
              <OrdersTable data={filterDataByStatus(item.status, data)} tableName={item.text} />
            ))
          }
        </>
      )}
    </ListContainer>
  )
}
