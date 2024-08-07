import { env } from '@zapperbot/env'

import { compileTemplate } from './handlebars'
import { EtherealMailProvider } from './impl/ethereal-mail-provider'
import { SendGridMailProvider } from './impl/sendgrid-mail-provider'
import { SmtpMailProvider } from './impl/smtp-mail-provider'

const providers = {
  smtp: SmtpMailProvider.getInstance(),
  ethereal: EtherealMailProvider.getInstance(),
  sendgrid: SendGridMailProvider.getInstance(),
}

const mailProvider = providers[env.MAIL_PROVIDER]

export { mailProvider, compileTemplate }
