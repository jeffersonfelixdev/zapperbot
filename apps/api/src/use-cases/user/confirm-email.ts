import { DatabaseConnection, UserTokenType } from '@zapperbot/prisma'
import { compareSync } from 'bcrypt'

import { InvalidConfirmationCodeError } from './errors/invalid-confirmation-code-error'
import { UserNotFoundError } from './errors/user-not-found-error'

interface ConfirmEmailProps {
  email: string
  token: string
}

const { prisma } = DatabaseConnection.getInstance()

export async function confirmEmailUseCase({ email, token }: ConfirmEmailProps) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new UserNotFoundError()
  const userToken = await prisma.userToken.findUnique({
    where: {
      userId_tokenType: {
        userId: user.id,
        tokenType: UserTokenType.EMAIL_VERIFICATION,
      },
    },
  })
  if (!userToken) throw new InvalidConfirmationCodeError()
  if (userToken.expireAt < new Date()) throw new InvalidConfirmationCodeError()
  const isValid = compareSync(token, userToken.hash)
  if (!isValid) {
    userToken.tries += 1
    if (userToken.tries >= 5) {
      await prisma.userToken.delete({ where: { id: userToken.id } })
    } else {
      await prisma.userToken.update({
        where: { id: userToken.id },
        data: {
          tries: userToken.tries,
        },
      })
    }
    throw new InvalidConfirmationCodeError()
  }
  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: true,
    },
  })
  await prisma.userToken.delete({ where: { id: userToken.id } })
}
