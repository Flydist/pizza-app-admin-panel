import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { StyledForm } from './LoginForm.styled'

type FormType = {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginForm: FC<FormType> = ({ setIsShown }) => {
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    }
    const email = target.email.value
    const password = target.password.value
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(() => setIsShown(false))
      .catch(() => setIsError(true))
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledForm.Group controlId="formBasicEmail">
        <StyledForm.Label>E-mail</StyledForm.Label>
        <StyledForm.Control name="email" type="email" placeholder="Введите e-mail" />
      </StyledForm.Group>
      <StyledForm.Group controlId="formBasicPassword">
        <StyledForm.Label>Пароль</StyledForm.Label>
        <StyledForm.Control name="password" type="password" placeholder="Введите пароль" />
        {isError && <StyledForm.Text className="text-danger">Неверные данные</StyledForm.Text>}
      </StyledForm.Group>
      <Button variant="primary" type="submit">
        Принять
      </Button>
    </StyledForm>
  )
}
