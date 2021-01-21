import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Order } from '../../types'
import { setSelectedOrderId } from '../../actions'
import { StyledTable } from './OrdersTable.styled'

type TableProps = {
  data: Order[],
  tableName: string,
}

export const OrdersTable: FC<TableProps> = React.memo(({ data, tableName }) => {
  const dispatch = useDispatch()

  return (
    <>
      {
        !!data.length && (
          <>
            <h2>{tableName}</h2>
            <StyledTable bordered hover>
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Телефон</th>
                  <th>Позиции</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id} onClick={() => dispatch(setSelectedOrderId(item._id))}>
                    <td>{item.people}</td>
                    <td>{item.phone}</td>
                    <td>{item.positions}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        )
      }
    </>
  )
})
