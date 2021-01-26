import React from 'react'
import { Form } from 'react-bootstrap'

type InputProps = {
  placeholder: string
  name: string
  helperText: string
  hasError: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    placeholder, name, helperText, hasError,
  }, ref) => (
    <Form.Group>
      <Form.Control type="text" placeholder={placeholder} name={name} ref={ref} />
      {hasError && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  ),
)
