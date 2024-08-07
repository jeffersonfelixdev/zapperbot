import nodemailer from 'nodemailer'

import { MailProvider, SendMailProps } from '../mail-provider'

export class EtherealMailProvider implements MailProvider {
  private static _instance: EtherealMailProvider

  static getInstance() {
    if (!this._instance) {
      this._instance = new EtherealMailProvider()
    }
    return this._instance
  }

  async sendMail({ to, subject, body }: SendMailProps): Promise<void> {
    const account = await nodemailer.createTestAccount()
    const message = await nodemailer
      .createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
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
    console.log(`Message sent: ${message.messageId}`)
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(message)}`)
  }
}
