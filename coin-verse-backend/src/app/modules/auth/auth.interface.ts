/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type IAuth = {
  userId: string
  email: string
  password: string
  role: string
  showSignUpBonus: boolean
  passwordChangedAt: Date
}

export type AuthModel = {
  isUserExist(email: string): Promise<IAuth>
  isUserExistById(userId: string): Promise<IAuth>
  matchPassword(givenPassword: string, storedPassword: string): Promise<boolean>
  updatePassword(userId: string): Promise<boolean>
} & Model<IAuth>

export type IAuthChangePassword = {
  userId: string
  oldPassword: string
  newPassword: string
}
