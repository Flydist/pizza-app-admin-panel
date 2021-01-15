import React, { FC } from 'react'
import { Table } from 'react-bootstrap'
import { Order, StatusType } from '../../types'

type TableProps = {
  data: Order[],
  status: StatusType,
  tableName: string,
}

export const OrdersTable: FC<TableProps> = ({ data, status, tableName }) => {
  const filteredData = data.filter((item) => item.status === status)

  return (
    <>
      {
        !!filteredData.length && (
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
                {filteredData.map((item) => (
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
  )
}
