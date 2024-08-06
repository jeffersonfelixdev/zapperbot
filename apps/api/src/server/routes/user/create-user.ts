import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import {
  emailSchema,
  fullNameSchema,
  passwordSchema,
} from '../../../types/schemas'
import { createUserUseCase } from '../../../use-cases/user/create-user'

export async function createUserRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Create user',
        description: 'Create a new user',
        body: z.object({
          name: fullNameSchema(),
          email: emailSchema(),
          password: passwordSchema(),
        }),
        response: {
          201: z.object({
            user: z.object({
              id: z.string(),
              name: z.string(),
              email: z.string(),
              createdAt: z.date(),
              updatedAt: z.date(),
            }),
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
