import { AppError } from '../../../shared/errors/app-error'

export class InvalidConfirmationCodeError extends AppError {
  constructor() {
    super('Código de confirmação inválido.')
  }
}
