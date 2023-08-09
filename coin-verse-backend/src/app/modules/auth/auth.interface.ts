/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type IAuth = {
  userId: string
  email: string
  password: string
  role: string
  passwordChangedAt: Date
}

export type AuthModel = {
  isUserExist(email: string): Promise<IAuth>
  matchPassword(givenPassword: string, storedPassword: string): Promise<boolean>
} & Model<IAuth>
