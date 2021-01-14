import React, { FC } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { OrdersTable } from './bus/orders/components/OrdersTables/OrdersTables'

const App: FC = () => (
  <>
    <Container>
      <Row>
        <Col>
          <OrdersTable />
        </Col>
        <Col />
      </Row>
    </Container>
  </>
)

export default App
