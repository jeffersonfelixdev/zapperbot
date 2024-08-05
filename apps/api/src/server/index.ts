import { fastify } from 'fastify'

import { env } from '../config/env'

const app = fastify()

app.listen({ port: env.APP_PORT }).then(() => {
  console.log(`Server running on port ${env.APP_PORT}`)
})
