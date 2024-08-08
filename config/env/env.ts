import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { getRuntimeVariable } from './getRuntimeVariable'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    APP_PORT: z.coerce.number().default(3333),
    APP_SWAGGER_USER: z.string().default('dev'),
    APP_SWAGGER_PASSWORD: z.string().default('dev'),
    APP_JWK_PRIVATE_KEY: z.string(),
    DATABASE_URL: z
      .string()
      .url()
      .refine((url) => url.startsWith('postgresql://')),
    MAIL_PROVIDER: z.enum(['smtp', 'ethereal', 'sendgrid']).default('ethereal'),
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.coerce.number().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASSWORD: z.string().optional(),
    SENDGRID_API_KEY: z.string().optional(),
    QUEUE_PROVIDER: z.enum(['rabbitmq']).default('rabbitmq'),
    RABBITMQ_URL: z.string().url().default('amqp://localhost:5672'),
  },
  client: {
    NEXT_PUBLIC_APP_JWK_PUBLIC_KEY: z.string().default('{}'),
    NEXT_PUBLIC_START_MONTHLY_PAYMENT_LINK: z.string().optional(),
    NEXT_PUBLIC_START_YEARLY_PAYMENT_LINK: z.string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_JWK_PUBLIC_KEY: getRuntimeVariable(
      'NEXT_PUBLIC_APP_JWK_PUBLIC_KEY',
    ),
    NEXT_PUBLIC_START_MONTHLY_PAYMENT_LINK: getRuntimeVariable(
      'NEXT_PUBLIC_START_MONTHLY_PAYMENT_LINK',
    ),
    NEXT_PUBLIC_START_YEARLY_PAYMENT_LINK: getRuntimeVariable(
      'NEXT_PUBLIC_START_YEARLY_PAYMENT_LINK',
    ),
  },
  onValidationError(error) {
    console.error('❌ Invalid environment variables! See errors bellow:')
    error.issues.forEach((issue) => {
      console.error(` - [${issue.path.join(' > ')}]: ${issue.message}`)
    })
    throw error
  },
})
