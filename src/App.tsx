import React, { FC, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { OrdersList } from './bus/orders/components/OrdersList/OrdersList'
import { OrderInfo } from './bus/orders/components/OrderInfo/OrderInfo'
import { AppState } from './init/rootReducer'
import { OrdersState } from './reducers/ordersReducer'
import { OrderForm } from './bus/orders/components/OrderForm/OrderForm'
import { LoginForm } from './components/LoginForm/LoginForm'

const App: FC = () => {
  const { selectedOrderId } = useSelector<AppState, OrdersState>((state) => state.ordersReducer)
  const [isShown, setIsShown] = useState(true)
  return (
    <>
      {isShown && <LoginForm setIsShown={setIsShown} />}
      {!isShown && (
        <Container>
          <Row>
            <Col>
              <OrdersList />
            </Col>
            <Col>
              {!!selectedOrderId && <OrderInfo />}
              <OrderForm />
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default App
