import React, { FC } from 'react'
import { Table } from 'react-bootstrap'
import { useOrdersFetching } from '../../hooks/useOrdersFetching'

export const OrdersTable: FC = () => {
  const { data, isFetching, error } = useOrdersFetching()

  const errorMessage = error && <h2>Something went wrong...</h2>
  const loader = isFetching && <p>loading...</p>

  return (
    <>
      {errorMessage}
      {loader}
      {!isFetching && !error && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Позиции</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.people}</td>
                <td>{item.phone}</td>
                <td>{item.positions}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}
