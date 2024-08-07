import { mailProvider } from '@zapperbot/mail'

mailProvider.sendMail({
  to: {
    name: 'Jefferson Felix',
    address: 'jsfelix@gmail.com',
  },
  subject: 'Um novo perfil foi adicionado na sua conta',
  body: 'Aqui será um conteúdo HTML',
})
