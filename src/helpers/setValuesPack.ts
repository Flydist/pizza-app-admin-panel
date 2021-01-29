import { SetValueConfig } from 'react-hook-form'

export const setValuesPack = <T extends Record<string, unknown>>(
  setValue: (name: keyof T, value: unknown, config?: Record<string, unknown>) => void,
  values: Partial<T>,
  options?: SetValueConfig,
): void => {
  Object.keys(values).forEach((key) => {
    setValue(String(key), values[key], options)
  })
}
