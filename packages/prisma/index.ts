import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'

export class DatabaseConnection {
  private static _instance: DatabaseConnection

  private _prisma: PrismaClient

  private constructor() {
    this._prisma = new PrismaClient()
  }

  static getInstance(): DatabaseConnection {
    if (!this._instance) this._instance = new DatabaseConnection()
    return this._instance
  }

  get prisma(): PrismaClient {
    return this._prisma
  }
}
