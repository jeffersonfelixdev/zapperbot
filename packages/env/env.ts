import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { getRuntimeVariable } from './getRuntimeVariable'

export const env = createEnv({
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine((url) => url.startsWith('postgresql://')),
    APP_PORT: z.coerce.number().default(3333),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: getRuntimeVariable('DATABASE_URL'),
    APP_PORT: getRuntimeVariable('APP_PORT'),
  },
  onValidationError(error) {
    console.error('❌ Invalid environment variables! See errors bellow:')
    error.issues.forEach((issue) => {
      console.error(` - [${issue.path.join(' > ')}]: ${issue.message}`)
    })
    throw error
  },
})
