import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import {
  confirmationCodeSchema,
  emailSchema,
  passwordSchema,
  userSchema,
} from '../../../types/schemas'
import { signInUseCase } from '../../../use-cases/user/sign-in-use-case'

export async function signInRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users/signin',
    {
      schema: {
        tags: ['Users'],
        summary: 'Autenticar usuário',
        description: 'Autentica um usuário na plataforma com email e senha.',
        body: z.object({
          email: emailSchema(),
          password: passwordSchema(),
        }),
        response: {
          201: z.object({
            user: userSchema,
            token: confirmationCodeSchema(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { email, password } = request.body
      const { user } = await signInUseCase({ email, password })
      const token = await reply.jwtSign({}, { expiresIn: '24h', sub: user.id })
      return reply.status(201).send({ user, token })
    },
  )
}
