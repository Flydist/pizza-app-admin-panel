import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledTextArea } from './TextArea.styled'

type TextAreaProps = {
  placeholder: string
  name: string
  helperText: string
  hasError: boolean
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({
    placeholder, name, helperText, hasError,
  }, ref) => (
    <Form.Group>
      <StyledTextArea ref={ref} placeholder={placeholder} name={name} />
      {hasError && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  ),
)
