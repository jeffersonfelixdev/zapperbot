import { AppError } from './app-error'

export class EmailExistsError extends AppError {
  constructor() {
    super('Email já existe.', 409)
  }
}
