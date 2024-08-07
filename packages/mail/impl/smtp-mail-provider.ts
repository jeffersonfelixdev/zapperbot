import { env } from '@zapperbot/env'
import nodemailer from 'nodemailer'

import { MailProvider, SendMailProps } from '../mail-provider'

export class SmtpMailProvider implements MailProvider {
  private static _instance: SmtpMailProvider

  static getInstance() {
    if (!this._instance) {
      this._instance = new SmtpMailProvider()
    }
    return this._instance
  }

  async sendMail({ to, subject, body }: SendMailProps): Promise<void> {
    if (
      !env.SMTP_HOST ||
      !env.SMTP_PORT ||
      !env.SMTP_USER ||
      !env.SMTP_PASSWORD
    ) {
      console.error('Error sending message: SMTP credentials not provided')
      return
    }
    await nodemailer
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
  }
}
