import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { userSchema } from '../../../types/schemas'
import { getUserProfileUseCase } from '../../../use-cases/user/get-user-profile'
import { jwtAuth } from '../../middlewares/jwt-auth'

export async function getUserProfileRoute(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(jwtAuth)
    .get(
      '/users/profile',
      {
        schema: {
          tags: ['Users'],
          security: [{ token: [] }],
          summary: 'Obter perfil do usuário',
          description: 'Obtém o perfil do usuário autenticado',
          response: {
            200: z.object({
              user: userSchema,
            }),
          },
        },
      },
      async (request, reply) => {
        const { userId } = request
        console.log(userId)
        const result = await getUserProfileUseCase({ userId })
        return reply.send(result)
      },
    )
}
