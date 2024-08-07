import { queueProvider } from '@zapperbot/queue'

import { sendConfirmationEmailUseCase } from '../use-cases/user/send-confirmation-email'

async function runQueues() {
  queueProvider.listenToQueue('#', async ({ type, data }) => {
    switch (type) {
      case 'user.created':
        sendConfirmationEmailUseCase(data.user.email)
        break
    }
  })
}
runQueues()
