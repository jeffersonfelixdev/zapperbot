import { AppError } from '../../../shared/errors/app-error'

export class UnauthorizedError extends AppError {
  constructor() {
    super('Não autorizado.', 401)
  }
}
