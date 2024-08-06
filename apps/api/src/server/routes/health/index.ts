import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function healthRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/health',
    {
      schema: {
        tags: ['Health'],
        summary: 'Checar integridade da API',
        description:
          'Verifica a integridade da API para fins de monitoramento.',
        response: {
          200: z.object({
            status: z.literal('UP'),
            message: z.literal('welcome to zapperbot-api'),
          }),
        },
      },
    },
    async () => {
      const status = 'UP' as const
      const message = 'welcome to zapperbot-api' as const
      return { status, message }
    },
  )
}
