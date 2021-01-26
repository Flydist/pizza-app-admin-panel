import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Input } from '../../../../components/Input/Input'
import { Select } from '../../../../components/Select/Select'
import { TextArea } from '../../../../components/TextArea/TextArea'
import { deliveryOptions, paytypeOptions } from '../../../../constants/constants'
import { orderTotalRule } from '../../../../constants/validationRules'
import { FormValues } from '../../types'
import { StyledForm } from './OrderForm.styled'

export const OrderForm: FC = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Имя"
        name="fullname"
        ref={register({
          required: { value: true, message: 'Обязательно для заполнения' },
        })}
        helperText={errors.fullname?.message ?? ''}
        hasError={Boolean(errors.fullname)}
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
        ref={register({
          required: { value: true, message: 'Обязательно для заполнения' },
        })}
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
      <Button variant="success" type="submit">
        Добавить
      </Button>
    </StyledForm>
  )
}
