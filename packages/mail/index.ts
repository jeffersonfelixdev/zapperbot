import { env } from '@zapperbot/env'

import { EtherealMailProvider } from './impl/ethereal-mail-provider'
import { SendGridMailProvider } from './impl/sendgrid-mail-provider'
import { SmtpMailProvider } from './impl/smtp-mail-provider'

interface SendMailProps {
  to: {
    name: string
    address: string
  }
  subject: string
  body: string
}

const providers = {
  smtp: SmtpMailProvider.getInstance(),
  ethereal: EtherealMailProvider.getInstance(),
  sendgrid: SendGridMailProvider.getInstance(),
}

export const sendMail = async ({ to, subject, body }: SendMailProps) => {
  const mailProvider = providers[env.MAIL_PROVIDER]
  await mailProvider.sendMail({
    to: {
      name: to.name,
      address: to.address,
    },
    subject,
    body,
  })
}
