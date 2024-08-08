import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import {
  emailSchema,
  fullNameSchema,
  passwordSchema,
  userSchema,
} from '../../../types/schemas'
import { createUserUseCase } from '../../../use-cases/user/create-user'

export async function createUserRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Criar usuário',
        description: 'Cria um novo usuário na plataforma.',
        body: z.object({
          name: fullNameSchema(),
          email: emailSchema(),
          password: passwordSchema(),
        }),
        response: {
          201: z.object({
            user: userSchema,
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, password } = request.body
      const result = await createUserUseCase({ name, email, password })
      return reply.status(201).send(result)
    },
  )
}
