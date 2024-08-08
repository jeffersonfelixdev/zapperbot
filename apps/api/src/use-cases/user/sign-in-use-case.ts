import { DatabaseConnection } from '@zapperbot/prisma'
import { compareSync } from 'bcrypt'

import { UnauthorizedError } from './errors/unauthorized-error'

interface SignInInput {
  email: string
  password: string
}
const { prisma } = DatabaseConnection.getInstance()

export async function signInUseCase({ email, password }: SignInInput) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new UnauthorizedError()
  const isPasswordValid = compareSync(password, user.passwordHash)
  if (!isPasswordValid) throw new UnauthorizedError()
  if (!user.emailVerified) throw new UnauthorizedError()
  return { user }
}
