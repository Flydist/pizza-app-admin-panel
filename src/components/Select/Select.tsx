import React from 'react'
import { Form } from 'react-bootstrap'

type SelectProps = {
  placeholder?: string
  name: string
  helperText: string
  hasError: boolean
  options: string[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    placeholder, name, helperText, hasError, options,
  }, ref) => (
    <Form.Group>
      <Form.Control as="select" type="text" placeholder={placeholder} name={name} ref={ref}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
      {hasError && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  ),
)
