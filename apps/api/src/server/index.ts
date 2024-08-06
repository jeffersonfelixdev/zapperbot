import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import fastifyRateLimit from '@fastify/rate-limit'
import fastifySwagger from '@fastify/swagger'
import { env } from '@zapperbot/env'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import jwkToPem from 'jwk-to-pem'

import { errorHandler } from './error-handler'
import { apiDocs } from './routes/api-docs'
import { healthRoute } from './routes/health'
import { createUserRoute } from './routes/user/create-user'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.setErrorHandler(errorHandler)

app.listen({ port: env.APP_PORT }).then(() => {
  console.log(`Server running on port ${env.APP_PORT}`)
})

if (env.NODE_ENV !== 'production') {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'ZapperBot API',
        description: 'API for ZapperBot',
        version: '1.0.0',
      },
      servers: [
        {
          url: `http://localhost:${env.APP_PORT}`,
          description: 'Development',
        },
        {
          url: `https://api-test.zapperbot.com`,
          description: 'Test',
        },
        {
          url: `https://api.zapperbot.com`,
          description: 'Production',
        },
      ],
      components: {
        securitySchemes: {
          token: {
            description:
              'Token JWT para autenticação e identificação na plataforma',
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    transform: jsonSchemaTransform,
  })
  app.register(apiDocs)
}

// JWT
app.register(fastifyJwt, {
  secret: {
    private: jwkToPem(JSON.parse(env.APP_JWK_PRIVATE_KEY), { private: true }),
    public: jwkToPem(JSON.parse(env.APP_JWK_PRIVATE_KEY)),
  },
})

// CORS
app.register(fastifyCors)

// Rate limit
app.register(fastifyRateLimit, {
  global: true,
  max: 150,
  timeWindow: 30000,
})

// File Upload
app.register(fastifyMultipart, {
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
  },
})

/****************/
/** API Routes **/
/****************/

// Health
app.register(healthRoute)

// User
app.register(createUserRoute)
