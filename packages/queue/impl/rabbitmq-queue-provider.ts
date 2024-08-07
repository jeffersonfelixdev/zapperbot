import { env } from '@zapperbot/env'
import ampq from 'amqplib'

import { QueueDataProps, QueueProvider } from '../queue-provider'

export class RabbitMQQueueProvider implements QueueProvider {
  private channel: ampq.Channel | null

  private static _instance: RabbitMQQueueProvider

  private constructor() {
    this.channel = null
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new RabbitMQQueueProvider()
    }
    return this._instance
  }

  private async getChannel() {
    if (!this.channel) {
      const connection = await ampq.connect(env.RABBITMQ_URL)
      this.channel = await connection.createChannel()
    }
  }

  async sendToQueue<T>(key: string, data: T): Promise<boolean> {
    await this.getChannel()
    try {
      if (this.channel) {
        const exchange = 'events'
        await this.channel.assertExchange(exchange, 'topic', { durable: true })
        return this.channel.publish(
          exchange,
          key,
          Buffer.from(JSON.stringify(data)),
        )
      }
      return false
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async listenToQueue(
    key: string,
    callback: (data: QueueDataProps) => Promise<void>,
  ): Promise<void> {
    await this.getChannel()
    if (this.channel) {
      console.log('Waiting for event messages')
      const exchange = 'events'
      this.channel.assertExchange(exchange, 'topic', { durable: true })
      const q = await this.channel.assertQueue('', { exclusive: true })
      this.channel.bindQueue(q.queue, exchange, key)
      this.channel.consume(
        q.queue,
        async (data) => {
          await callback({
            id: data?.fields.consumerTag,
            type: data?.fields.routingKey,
            data: JSON.parse(data?.content.toString() ?? '{}'),
          })
        },
        {
          noAck: true,
        },
      )
    }
  }
}
