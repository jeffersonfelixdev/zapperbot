import sgMail from '@sendgrid/mail'
import { env } from '@zapperbot/env'

import { MailProvider, SendMailProps } from '../mail-provider'

export class SendGridMailProvider implements MailProvider {
  private static _instance: SendGridMailProvider

  static getInstance() {
    if (!this._instance) {
      this._instance = new SendGridMailProvider()
    }
    return this._instance
  }

  async sendMail({ to, subject, body }: SendMailProps): Promise<void> {
    try {
      if (!env.SENDGRID_API_KEY) {
        console.error('Error sending message: SENDGRID_API_KEY not found')
        return
      }
      sgMail.setApiKey(env.SENDGRID_API_KEY)
      await sgMail.send({
        from: 'ZapperBot <noreply@zapperbot.com>',
        to: `${to.name} <${to.address}>`,
        subject,
        text: body.replace(/<[^>]+>/g, ''),
        html: body,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
