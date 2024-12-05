import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>Hola!, este es un mensaje desde serendipia.uy</h1>
    <p>
      De {firstName} - {email}
    </p>
    <p>{message}</p>
  </div>
)
