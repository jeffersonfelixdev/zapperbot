import { AxiosError } from 'axios'
import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'

import { AppError } from '../shared/errors/app-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      status: 'Validation error',
      issues: error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    })
  }

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'Application Error',
      message: error.message,
    })
  }

  if (error instanceof AxiosError) {
    return reply.status(error.response?.status ?? 400).send({
      status: 'External API Request Error',
      data: error.response?.data,
    })
  }

  if (error.code === 'FST_BASIC_AUTH_MISSING_OR_BAD_AUTHORIZATION_HEADER')
    return reply.status(401).send()

  if (error.statusCode === 429) {
    return reply.status(429).send({
      status: 'Application Rate Limit Error',
      message: 'Too many requests, please try again later.',
    })
  }

  console.error(error.stack ?? 'Unknown error')

  return reply.status(500).send({
    status: 'Internal Server Error',
    message: 'Unknown error, see server logs',
  })
}
