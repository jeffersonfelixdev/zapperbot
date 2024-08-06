import { env } from '@zapperbot/env'
import nodemailer from 'nodemailer'

interface SendMailProps {
  to: {
    name: string
    address: string
  }
  subject: string
  body: string
}

export const sendMail = async ({ to, subject, body }: SendMailProps) => {
  const res = await nodemailer
    .createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: true,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    })
    .sendMail({
      from: {
        name: 'ZapperBot',
        address: 'noreply@zapperbot.com',
      },
      to: {
        name: to.name,
        address: to.address,
      },
      subject,
      html: body,
    })
  return res
}
