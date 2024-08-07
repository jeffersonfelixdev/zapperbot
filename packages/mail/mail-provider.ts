export interface SendMailProps {
  to: {
    name: string
    address: string
  }
  subject: string
  body: string
}

export interface MailProvider {
  sendMail(data: SendMailProps): Promise<void>
}
