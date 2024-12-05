import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  // get info passed as body in the request
  const { firstName, email, message } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Espacio Serendipia <no-reply@resend.dev>',
      to: ['kisquian@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, message }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
