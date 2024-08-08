import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

import { UnauthorizedError } from '../../use-cases/user/errors/unauthorized-error'

export const jwtAuth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    try {
      const result = await request.jwtVerify<{ sub: string }>()
      request.userId = result.sub
    } catch {
      throw new UnauthorizedError()
    }
  })
})
