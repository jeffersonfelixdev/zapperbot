import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  APP_PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables! See errors bellow:')
  _env.error.issues.forEach((issue) => {
    console.error(` - [${issue.path.join(' > ')}]: ${issue.message}`)
  })
  process.exit(1)
}

export const env = _env.data
