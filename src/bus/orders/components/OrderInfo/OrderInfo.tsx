import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useOrderInfo } from '../../hooks/useOrderInfo'
import { changeStatusRequestAsync, deleteOrderRequestAsync } from '../../actions'
import { InfoContainer, StatusButtonsBlock } from './OrderInfo.styled'

export const OrderInfo: FC = () => {
  const currentOrder = useOrderInfo()
  const {
    people,
    phone,
    address,
    delivery,
    paytype,
    comment,
    positions,
    orderTotal,
    _id,
    status,
  } = currentOrder
  const dispatch = useDispatch()
  return (
    <InfoContainer>
      <h5>Информация о заказе</h5>
      <p>
        Имя -
        {people}
      </p>
      <p>
        Телефон -
        {phone}
      </p>
      <p>
        Адрес -
        {address}
      </p>
      <p>
        Способ доставки -
        {delivery}
      </p>
      <p>
        Оплата -
        {paytype}
      </p>
      <p>
        Комментарий -
        {comment}
      </p>
      <p>
        Позиции -
        {positions}
      </p>
      <p>
        Итого -
        {orderTotal}
      </p>
      <StatusButtonsBlock>
        <Button
          variant="primary"
          onClick={() => dispatch(changeStatusRequestAsync(currentOrder, 'new'))}
          disabled={status === 'new'}
        >
          Новый
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(changeStatusRequestAsync(currentOrder, 'cooking'))}
          disabled={status === 'cooking'}
        >
          Готовится
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(changeStatusRequestAsync(currentOrder, 'delivered'))}
          disabled={status === 'delivered'}
        >
          Выдан
        </Button>
      </StatusButtonsBlock>
      <Button variant="danger" onClick={() => dispatch(deleteOrderRequestAsync(_id))}>
        Удалить
      </Button>
    </InfoContainer>
  )
}
