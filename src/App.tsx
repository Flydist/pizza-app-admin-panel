import React, { FC } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { OrdersList } from './bus/orders/components/OrdersList/OrdersList'
import { OrderInfo } from './bus/orders/components/OrderInfo/OrderInfo'
import { AppState } from './init/rootReducer'
import { OrdersState } from './reducers/ordersReducer'

const App: FC = () => {
  const { selectedOrderId } = useSelector<AppState, OrdersState>((state) => state.ordersReducer)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <OrdersList />
          </Col>
          <Col>
            {!!selectedOrderId && <OrderInfo />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
