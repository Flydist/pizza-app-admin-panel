import { StatusType } from '../bus/orders/types'

type StatusVariantsType = { status: StatusType, text: string }

export const paytypeOptions = ['Наличными', 'Картой курьеру', 'Картой онлайн']
export const deliveryOptions = ['Курьером', 'Самовывоз']
export const statusVariants: StatusVariantsType[] = [
  { status: 'new', text: 'Новые' },
  { status: 'cooking', text: 'Готовятся' },
  { status: 'delivered', text: 'Выданы' },
]
