import React, { FC } from 'react'
import { Table } from 'react-bootstrap'
import { Order } from '../../types'

type TableProps = {
  data: Order[],
  tableName: string,
}

export const OrdersTable: FC<TableProps> = React.memo(({ data, tableName }) => (
  <>
    {
      !!data.length && (
        <>
          <h2>{tableName}</h2>
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
        </>
      )
    }
  </>
))
