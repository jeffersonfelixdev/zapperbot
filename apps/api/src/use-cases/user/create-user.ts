import { DatabaseConnection, User } from '@zapperbot/prisma'
import { hashSync } from 'bcrypt'

import { EmailExistsError } from '../../shared/errors/email-exists-error'
import { createId } from '../../utils'

interface CreateUserInput {
  name: string
  email: string
  password: string
}

interface CreateUserOutput {
  user: User
}

const { prisma } = DatabaseConnection.getInstance()

const _SALT = 10

export async function createUserUseCase({
  name,
  email,
  password,
}: CreateUserInput): Promise<CreateUserOutput> {
  const emailExists = await prisma.user.findUnique({ where: { email } })
  if (emailExists) throw new EmailExistsError()
  const passwordHash = hashSync(password, _SALT)
  const user = await prisma.user.create({
    data: {
      id: createId('usr_'),
      name,
      email,
      passwordHash,
    },
  })
  return { user }
}
