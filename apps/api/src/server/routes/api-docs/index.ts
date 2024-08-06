import fastifySwaggerUi from '@fastify/swagger-ui'
import { FastifyInstance } from 'fastify'

import { basicAuth } from '../../middlewares/basic-auth'

export async function apiDocs(app: FastifyInstance) {
  app.register(basicAuth).register(fastifySwaggerUi, {
    prefix: '/api-docs',
  })
}
