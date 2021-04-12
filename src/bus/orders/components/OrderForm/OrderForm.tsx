import React, { FC, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../../components/Input/Input'
import { Select } from '../../../../components/Select/Select'
import { TextArea } from '../../../../components/TextArea/TextArea'
import { deliveryOptions, paytypeOptions } from '../../../../constants/constants'
import { orderTotalRule } from '../../../../constants/validationRules'
import { setValuesPack } from '../../../../helpers/setValuesPack'
import { AppState } from '../../../../init/rootReducer'
import { OrdersState } from '../../../../reducers/ordersReducer'
import { ButtonsList } from '../../../../common/common.styled'
import { createOrderRequestAsync, resetMode, updateOrderRequestAsync } from '../../actions'
import { FormValues } from '../../types'
import { StyledForm } from './OrderForm.styled'

export const OrderForm: FC = () => {
  const {
    orderFormMode, data, selectedOrderId,
  } = useSelector<AppState, OrdersState>((state) => state.ordersReducer)

  const {
    register, handleSubmit, setValue, errors,
  } = useForm<FormValues>()

  const dispatch = useDispatch()

  const currentOrder = data.filter((item) => item._id === selectedOrderId)[0]

  useEffect(() => {
    if (orderFormMode === 'edit') {
      setValuesPack<FormValues>(setValue, currentOrder)
    }
  }, [orderFormMode])

  const onSubmit = (data: FormValues) => {
    if (orderFormMode === 'add') dispatch(createOrderRequestAsync(data))
    else {
      dispatch(updateOrderRequestAsync(
        { ...data, _id: selectedOrderId, status: currentOrder.status },
      ))
    }
    dispatch(resetMode())
  }

  return (
    orderFormMode && (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Имя"
          name="people"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
          })}
          helperText={errors.people?.message ?? ''}
          hasError={Boolean(errors.people)}
        />
        <Input
          placeholder="Телефон"
          name="phone"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
          })}
          helperText={errors.phone?.message ?? ''}
          hasError={Boolean(errors.phone)}
        />
        <Input
          placeholder="Адрес"
          name="address"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
          })}
          helperText={errors.address?.message ?? ''}
          hasError={Boolean(errors.address)}
        />
        <Input
          placeholder="Комментарий"
          name="comment"
          ref={register()}
          helperText={errors.comment?.message ?? ''}
          hasError={Boolean(errors.comment)}
        />
        <Select
          name="delivery"
          ref={register({ required: true })}
          options={deliveryOptions}
          helperText="Обязательно для заполнения"
          hasError={Boolean(errors.delivery)}
        />
        <Select
          name="paytype"
          ref={register({ required: true })}
          options={paytypeOptions}
          helperText="Обязательно для заполнения"
          hasError={Boolean(errors.paytype)}
        />
        <TextArea
          placeholder="Позиции заказа"
          name="positions"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
          })}
          helperText={errors.positions?.message ?? ''}
          hasError={Boolean(errors.positions)}
        />
        <Input
          placeholder="Итого"
          name="orderTotal"
          ref={register({
            required: { value: true, message: 'Обязательно для заполнения' },
            pattern: { value: orderTotalRule, message: 'Введите только сумму' },
          })}
          helperText={errors.orderTotal?.message ?? ''}
          hasError={Boolean(errors.orderTotal)}
        />
        <ButtonsList>
          <Button variant="success" type="submit">
            {orderFormMode === 'add' ? 'Добавить' : 'Обновить'}
          </Button>
          <Button variant="danger" type="button" onClick={() => dispatch(resetMode())}>
            Закрыть
          </Button>
        </ButtonsList>
      </StyledForm>
    )
  )
}
