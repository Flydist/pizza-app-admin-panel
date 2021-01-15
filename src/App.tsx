import React, { FC } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { OrdersList } from './bus/orders/components/OrdersList/OrdersList'

const App: FC = () => (
  <>
    <Container>
      <Row>
        <Col>
          <OrdersList />
        </Col>
        <Col />
      </Row>
    </Container>
  </>
)

export default App
