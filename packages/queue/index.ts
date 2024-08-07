import { env } from '@zapperbot/env'

import { RabbitMQQueueProvider } from './impl/rabbitmq-queue-provider'

const providers = {
  rabbitmq: RabbitMQQueueProvider.getInstance(),
}

export const queueProvider = providers[env.QUEUE_PROVIDER]
