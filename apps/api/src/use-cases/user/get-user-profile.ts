import { DatabaseConnection } from '@zapperbot/prisma'

import { UserNotFoundError } from './errors/user-not-found-error'

interface GetUserProfileInput {
  userId: string
}

const { prisma } = DatabaseConnection.getInstance()

export async function getUserProfileUseCase({ userId }: GetUserProfileInput) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new UserNotFoundError()
  return { user }
}
