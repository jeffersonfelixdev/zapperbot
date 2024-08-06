import { timingSafeEqual } from 'node:crypto'

import fastifyBasicAuth from '@fastify/basic-auth'
import { env } from '@zapperbot/env'
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

// perform constant-time comparison to prevent timing attacks
function compare(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (a.length !== b.length) {
    // Delay return with cryptographically secure timing check.
    timingSafeEqual(bufA, bufA)
    return false
  }
  return timingSafeEqual(bufA, bufB)
}

export const basicAuth = fastifyPlugin(async (app: FastifyInstance) => {
  app.register(fastifyBasicAuth, {
    validate: (username, password, _request, _reply, done) => {
      let result = true
      result = compare(username, env.APP_SWAGGER_USER) && result
      result = compare(password, env.APP_SWAGGER_PASSWORD) && result
      if (result) {
        done()
      } else {
        done(new Error('Access denied'))
      }
    },
    authenticate: true,
  })
  app.after(() => {
    app.addHook('preHandler', app.basicAuth)
  })
})
