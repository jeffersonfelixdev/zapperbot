import { env } from '@zapperbot/env'
import { fastify } from 'fastify'

const app = fastify()

app.listen({ port: env.APP_PORT }).then(() => {
  console.log(`Server running on port ${env.APP_PORT}`)
})
