import { compileTemplate, mailProvider } from '@zapperbot/mail'
import { DatabaseConnection, UserTokenType } from '@zapperbot/prisma'
import { hashSync } from 'bcrypt'
import { randomInt } from 'crypto'
import { addMinutes } from 'date-fns'

import { createId } from '../../utils'

const { prisma } = DatabaseConnection.getInstance()

const _SALT = 10

export async function sendConfirmationEmailUseCase(email: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.error(`[sendConfirmationEmail] Error: Email ${email} not found`)
    return
  }
  const token = randomInt(999999).toString().padStart(6, '0')
  const hash = hashSync(token, _SALT)
  await prisma.userToken.create({
    data: {
      id: createId('token_', 20),
      userId: user.id,
      hash,
      tokenType: UserTokenType.EMAIL_VERIFICATION,
      expireAt: addMinutes(new Date(), 30),
    },
  })
  await mailProvider.sendMail({
    to: {
      name: user.name,
      address: user.email,
    },
    subject: 'Seu código de confirmação do ZapperBot',
    body: compileTemplate('confirm-email.hbs', {
      name: user.name,
      token,
    }),
  })
}
