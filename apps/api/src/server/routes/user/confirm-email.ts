import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { confirmationCodeSchema, emailSchema } from '../../../types/schemas'
import { confirmEmailUseCase } from '../../../use-cases/user/confirm-email'

export async function confirmEmailRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users/confirm-email',
    {
      schema: {
        tags: ['Users'],
        summary: 'Confirmar email',
        description:
          'Confirma email do usuário com o token de confirmação enviado em seu email.',
        body: z.object({
          email: emailSchema(),
          token: confirmationCodeSchema(),
        }),
        response: {
          204: z.undefined(),
        },
      },
    },
    async (request, reply) => {
      const { email, token } = request.body
      await confirmEmailUseCase({ email, token })
      return reply.status(204).send()
    },
  )
}
